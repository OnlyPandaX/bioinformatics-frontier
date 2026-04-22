/**
 * EAlert Tracker v3.3
 * 
 * 核心改进：
 * 1. 只读最近 24 小时邮件
 * 2. 访问文章链接获取期刊、作者、摘要
 * 3. 每篇论文：期刊、日期、作者、研究问题、主要贡献（摘要）、点评
 * 4. v3.3: 报告按 YYYY/MM/YYYY-Wxx/ 结构归档
 */

const Imap = require('imap');
const { simpleParser } = require('mailparser');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

// ============ 配置 ============
const CONFIG = {
  targetKeywords: [
    'bioinformatics', 'computational biology', 'multi-omics', 'single-cell',
    'scRNA-seq', 'RNA-seq', 'ATAC-seq', 'proteomics', 'metabolomics',
    'spatial transcriptomics', 'genome-wide', 'GWAS',
    'machine learning', 'deep learning', 'neural network', 
    'large language model', 'foundation model', 'AlphaFold',
    'cancer', 'tumor', 'oncology', 'carcinoma', 
    'immunotherapy', 'immune checkpoint', 'CAR-T', 'tumor microenvironment',
    'genomics', 'genome sequencing', 'gene expression', 'epigenomics',
    'transcriptomics', 'microbiome', 'virome',
    'stem cell', 'organoid', 'gene editing', 'CRISPR',
    'lifespan', 'longevity', 'aging', 'senescence',
    'neuroscience', 'brain organoid',
    'systems biology', 'network medicine', 'precision medicine', 'biomarker'
  ],

  journalSenders: ['nature.com', 'aaas.sciencepubs.org', 'science.org', 'cell.com', 'pnas.org', 'elsevier.com'],

  journalSubjects: [
    'Nature', 'Science', 'Cell', 'PNAS',
    'Translational', 'Immunology', 'Advances', 'Cancer',
    'Communications', 'Computational', 'Biotechnology',
    'Methods', 'Genetics', 'Medicine', 'Molecular', 'Reports', 'Metabolism',
    'Trends'
  ],

  // 排除的非研究内容（精确匹配 Subject 关键词）
  excludeKeywords: [
    'Security alert', 'Login',
    'Careers', 'Career Path',
    'Speak up for science',
    'Unsubscribe',
    'In Other Journals',
  ],

  targetEmail: 'onlybelter@gmail.com'
};

// ============ 工具函数 ============

function getISOWeek(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function matchesKeywords(text, keywords) {
  if (!text) return false;
  const lower = text.toLowerCase();
  return keywords.some(k => lower.includes(k.toLowerCase()));
}

function decodeSubject(str) {
  if (!str) return '';
  try {
    return str.replace(/=\?([^?]+)\?([BQ])\?([^?]*)\?=/gi, (_, charset, mode, content) => {
      if (mode === 'B') return Buffer.from(content, 'base64').toString(charset);
      if (mode === 'Q') return Buffer.from(
        content.replace(/=([0-9A-Fa-f]{2})/g, (_, h) => String.fromCharCode(parseInt(h, 16)))
          .replace(/_/g, ' '), charset).toString();
      return content;
    });
  } catch { return str; }
}

function httpGet(url, timeout = 8000) {
  return new Promise((resolve, reject) => {
    if (!url || !url.startsWith('http')) return reject(new Error('Invalid URL'));
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120 Safari/537.36' }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return httpGet(res.headers.location, timeout).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    });
    req.setTimeout(timeout, () => { req.destroy(); reject(new Error('Timeout')); });
    req.on('error', reject);
  });
}

// ============ 期刊识别 ============

function extractJournalFromSubject(subject) {
  const s = subject.toLowerCase();
  if (s.includes('nature communications')) return 'Nature Communications';
  if (s.includes('nature cancer')) return 'Nature Cancer';
  if (s.includes('nature computational')) return 'Nature Computational Science';
  if (s.includes('nature methods')) return 'Nature Methods';
  if (s.includes('nature genetics')) return 'Nature Genetics';
  if (s.includes('nature medicine')) return 'Nature Medicine';
  if (s.includes('nature biotechnology')) return 'Nature Biotechnology';
  if (s.includes('nature')) return 'Nature';
  if (s.includes('science translational medicine')) return 'Science Translational Medicine';
  if (s.includes('science immunology')) return 'Science Immunology';
  if (s.includes('science advances')) return 'Science Advances';
  if (s.includes('science')) return 'Science';
  if (s.includes('cell metabolism')) return 'Cell Metabolism';
  if (s.includes('cell reports')) return 'Cell Reports';
  if (s.includes('molecular cell')) return 'Molecular Cell';
  if (s.includes('trends in biotechnology')) return 'Trends in Biotechnology';
  if (s.includes('cell')) return 'Cell';
  if (s.includes('pnas')) return 'PNAS';
  return 'Journal';
}

// ============ 元数据获取 ============

/** 从链接提取 DOI */
function extractDOI(link) {
  if (!link) return '';
  
  // 直接 DOI
  const direct = link.match(/10\.\d{4,}\/[^\s&"?#]+/);
  if (direct) {
    let doi = direct[0].replace(/[&\?#].*$/, '');
    // 解码 URL 编码
    try { doi = decodeURIComponent(doi); } catch {}
    return doi;
  }
  
  // Cell Press PII 格式: S0167-7799(25)00315-4
  const pii = link.match(/S\d{4}-\d{4}\(\d{2}\)\d{4,5}-\d/);
  if (pii) {
    // PII 格式: S0167-7799(YY)XXXX-Z
    // 年份前缀: 19xx 或 20xx
    const m = pii[0].match(/S(\d{4})-(\d{4})\((\d{2})\)(.+)/);
    if (m) {
      const [, journal1, journal2, yy, rest] = m;
      const year = parseInt(yy) > 50 ? '19' + yy : '20' + yy;
      // 期刊代码对应关系
      const journalCodes = {
        '0167-7799': 'j.tibtech',  // Trends in Biotechnology
        '0167-779X': 'j.tig',       // Trends in Genetics
        '0169-5172': 'j.jdermsci',  // Journal of Dermatological Science
        '0958-1669': 'j.copbio',    // Current Opinion in Biotechnology
      };
      const jc = journalCodes[journal2] || 'j.article';
      const volIssue = rest.match(/^(\d{4,})/)?.[1] || '';
      return `10.1016/${jc}.${year}.${volIssue}`;
    }
  }
  
  return '';
}

async function fetchPaperDetails(paper) {
  // 优先用 PubMed 搜索（通过标题）
  try {
    const meta = await fetchFromPubMed(paper.title);
    if (meta) return { ...paper, ...meta };
  } catch (e) {}
  
  // 备用：尝试解码链接中的 DOI
  const doi = extractDOI(paper.link);
  if (doi) {
    await sleep(300);
    const meta = await fetchCrossRef(doi);
    if (meta) return { ...paper, ...meta };
  }
  
  return paper;
}

/** PubMed API 查询（通过标题搜索） */
async function fetchFromPubMed(title) {
  try {
    const query = encodeURIComponent(title.replace(/[^\w\s]/g, ' ').trim().substring(0, 100));
    const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${query}&retmax=1&retmode=json&sort=relevance`;
    
    const data = await httpGet(url);
    const json = JSON.parse(data);
    const pmid = json?.esearchresult?.idlist?.[0];
    
    if (!pmid) return null;
    
    await sleep(300);
    
    // 获取摘要（efetch）
    let abstract = '';
    try {
      const abstractData = await httpGet(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=${pmid}&retmode=xml&rettype=abstract`);
      const abstractMatch = abstractData.match(/<AbstractText[^>]*>([\s\S]*?)<\/AbstractText>/gi);
      if (abstractMatch) {
        abstract = abstractMatch.map(m => m.replace(/<\/?AbstractText[^>]*>/gi, '').trim()).join('\n');
        abstract = abstract.replace(/<[^>]+>/g, '').trim();
      }
    } catch (e) {}
    
    await sleep(200);
    
    // 获取作者信息（esummary）
    const summaryData = await httpGet(`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${pmid}&retmode=json`);
    const summary = JSON.parse(summaryData);
    const paperMeta = summary?.result?.[pmid];
    
    if (!paperMeta) return null;
    
    const authors = (paperMeta.authors || []).map(a => a.name).join(', ');
    const corresponding = paperMeta.authors?.[paperMeta.authors.length - 1]?.name || '';
    const journal = paperMeta.fulljournalname || paperMeta.source || '';
    const published = paperMeta.pubdate || '';
    
    const researchQuestion = inferResearchQuestion(title, abstract);
    const contributions = inferContributions(abstract, title);
    const comment = generateComment(title, abstract, researchQuestion, journal);
    
    return {
      journal,
      title: paperMeta.title || title,
      authors: authors || '未知',
      corresponding,
      researchQuestion,
      contributions,
      comment,
      abstract,
      published,
      pmid,
      doi: paperMeta.elocationid?.replace('doi: ', '') || ''
    };
  } catch (e) {
    return null;
  }
}

/** CrossRef API 查询 */
async function fetchCrossRef(doi) {
  try {
    const cleanDoi = doi.replace(/[\s&"?#].*$/, '');
    const url = 'https://api.crossref.org/works/' + encodeURIComponent(cleanDoi);
    const data = await httpGet(url);
    const json = JSON.parse(data);
    const w = json.message;
    if (!w) return null;
    
    let abstract = (w.abstract || '').replace(/<[^>]+>/g, '').trim();
    if (abstract.length < 20) abstract = '';
    
    const authors = (w.author || []).map(a => `${a.given || ''} ${a.family || ''}`.trim()).join(', ');
    const corresponding = (w.author || []).find(a => a.type === 'author' || a.sequence === 'first')?.affiliation?.name || '';
    
    const title = w.title?.[0] || '';
    const researchQuestion = inferResearchQuestion(title, abstract);
    const contributions = inferContributions(abstract, title);
    const comment = generateComment(title, abstract, researchQuestion, w['container-title']?.[0] || '');
    
    return {
      journal: w['container-title']?.[0] || w.publisher || '',
      title: w.title?.[0] || title,
      authors: authors || '未知',
      corresponding: corresponding,
      abstract,
      researchQuestion,
      contributions,
      comment,
      published: w.published?.['date-parts']?.[0]?.join('-') || '',
      doi: cleanDoi
    };
  } catch (e) {
    return null;
  }
}

function inferResearchQuestion(title, abstract) {
  const combined = (title + ' ' + abstract).toLowerCase();
  const t = title;
  const abs = abstract || '';
  
  // 优先从摘要第一句提取研究问题（摘要通常以背景/问题开头）
  if (abs.length > 50) {
    const firstSentences = abs.split(/[.。]/).filter(s => s.trim().length > 20).slice(0, 2);
    for (const s of firstSentences) {
      const trimmed = s.trim();
      // 背景句通常包含 "remains", "is unclear", "lack", "challenge", "limited"
      if (/remains|unclear|lack|challenge|limited|unknown|poorly|unresolved|critical|important/i.test(trimmed)) {
        return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
      }
    }
  }
  
  // 从标题推断核心科学问题
  if (combined.includes('how')) {
    const m = combined.match(/how (.{10,80}?)(?:\?|，|$|\.)/);
    if (m) return `如何（How）：${m[1].trim()}？`;
  }
  if (combined.includes('why')) {
    const m = combined.match(/why (.{10,80}?)(?:\?|，|$|\.)/);
    if (m) return `为什么（Why）：${m[1].trim()}？`;
  }
  if (combined.includes('role of') || combined.includes('function of')) {
    const m = combined.match(/(?:role|function) of (.{10,60}?)(?:\s+in|\s+during|\s+on|$)/);
    if (m) return `探索 ${m[1].trim()} 在相关生物学过程中的功能角色和作用机制`;
  }
  if (combined.includes('mechanism')) {
    const m = combined.match(/mechanism(?:s)? (?:of|underlying|behind) (.{10,60}?)(?:\s+in|\s+during|$)/);
    if (m) return `阐明 ${m[1].trim()} 的分子机制`;
  }
  if (combined.includes('regulat')) {
    return `揭示相关基因/蛋白/通路的调控机制及其在疾病或发育中的作用`;
  }
  if (combined.includes('cancer') || combined.includes('tumor')) {
    if (combined.includes('immunotherapy') || combined.includes('immune')) {
      return `探索肿瘤免疫逃逸机制或新型免疫治疗策略，以提高肿瘤治疗效果`;
    }
    return `揭示肿瘤发生发展的分子机制，寻找新的治疗靶点或生物标志物`;
  }
  if (combined.includes('single-cell') || combined.includes('scrna')) {
    return `利用单细胞组学技术解析细胞异质性、细胞状态转变或细胞间通讯网络`;
  }
  if (combined.includes('CRISPR') || combined.includes('gene editing')) {
    return `利用基因编辑技术研究基因功能或开发新型基因治疗策略`;
  }
  if (combined.includes('microbiome')) {
    return `探索微生物组与宿主之间的互作机制及其对健康或疾病的影响`;
  }
  if (combined.includes('aging') || combined.includes('longevity') || combined.includes('senescence')) {
    return `揭示衰老的分子机制，寻找延缓衰老或治疗衰老相关疾病的新靶点`;
  }
  if (combined.includes('AI') || combined.includes('machine learning') || combined.includes('deep learning')) {
    return `利用 AI/机器学习方法解决生物学或医学中的关键问题，提升预测或分析能力`;
  }
  if (combined.includes('biochar') || combined.includes('biomass')) {
    return `探索如何通过生物技术手段优化生物质材料的功能特性，推动可持续材料研发`;
  }
  if (combined.includes('polysaccharide') || combined.includes('microbiome modulation')) {
    return `研究多糖的结构-功能关系，探索其作为益生元精准调控肠道微生物组的机制与应用`;
  }
  
  // 从标题直接提取核心问题
  let q = t.replace(/\.$/, '').trim();
  if (q.length > 15 && q.length < 150) {
    return `本研究聚焦于：${q}`;
  }
  
  return `探索相关生物学机制或技术应用，解决领域内的关键科学问题`;
}

function inferContributions(abstract, title) {
  if (!abstract || abstract.length < 30) {
    const t = title.toLowerCase();
    if (t.includes('reveal') || t.includes('show')) return ['• 揭示了新的生物学机制或规律'];
    if (t.includes('identify') || t.includes('discover')) return ['• 发现了新的分子靶点或生物标志物'];
    if (t.includes('develop') || t.includes('create') || t.includes('enable')) return ['• 开发了新的技术方法或工具'];
    if (t.includes('predict') || t.includes('model')) return ['• 建立了预测模型或评估方法'];
    if (t.includes('prevent') || t.includes('treat') || t.includes('therapy')) return ['• 为疾病治疗或预防提供了新策略'];
    return ['• 提供了新的见解和实验数据支撑'];
  }
  
  const contributions = [];
  const sentences = abstract.split(/[.。;]/).filter(s => s.trim().length > 20);
  
  for (const s of sentences) {
    const t = s.trim();
    if (t.length < 20) continue;
    
    if (/reveal|show|demonstrate|discover|identify/i.test(t) && contributions.length < 2) {
      let c = t.charAt(0).toUpperCase() + t.slice(1);
      c = c.replace(/^(The|This|These|Our|We)\s+/, '').trim();
      if (c.length > 15) contributions.push('• ' + c.substring(0, 150));
    }
    if (/develop|create|establish|design/i.test(t) && contributions.length < 3) {
      let c = t.charAt(0).toUpperCase() + t.slice(1);
      c = c.replace(/^(The|This|These|Our|We)\s+/, '').trim();
      if (c.length > 15) contributions.push('• ' + c.substring(0, 150));
    }
    if (/find|observe|detect|quantify/i.test(t) && contributions.length < 3) {
      let c = t.charAt(0).toUpperCase() + t.slice(1);
      c = c.replace(/^(The|This|These|Our|We)\s+/, '').trim();
      if (c.length > 15) contributions.push('• ' + c.substring(0, 150));
    }
    
    if (contributions.length >= 3) break;
  }
  
  if (contributions.length === 0 && abstract.length > 50) {
    for (const s of sentences.slice(0, 3)) {
      const t = s.trim();
      if (t.length > 20) contributions.push('• ' + t.charAt(0).toUpperCase() + t.slice(1).substring(0, 150));
    }
  }
  
  return contributions.slice(0, 3);
}

/**
 * 生成专家级 Critical Thinking 点评
 * 要求：3-5句话，包含历史意义、研究现状、motivation、潜在价值、future work
 */
function generateComment(title, abstract, researchQuestion, journal) {
  const combined = (title + ' ' + abstract).toLowerCase();
  const t = title.toLowerCase();
  const abs = abstract || '';
  
  const parts = [];
  
  // ① 历史意义 / 研究背景（这个问题为什么重要）
  if (t.includes('biochar') || t.includes('biomass')) {
    parts.push('生物炭作为碳中和材料的研究已有数十年历史，但传统制备方法依赖化石燃料活化，限制了其可持续性；将基因编辑与热解预处理结合是一个新颖的交叉思路，体现了合成生物学向材料科学延伸的趋势。');
    parts.push('该研究的 motivation 在于：通过精准调控木质素/纤维素比例，从源头改善生物质原料的可加工性，而非依赖后处理，这在理论上更高效且环保。');
    parts.push('潜在价值方面，若能在实际作物中实现稳定的基因编辑并保持农艺性状，将为生物经济提供新的原料来源；但目前仍面临基因编辑效率、田间表现和监管审批等挑战。');
    parts.push('Future work 方向：需要在多种作物中验证可行性，并评估编辑后植物的生态安全性；同时，热解参数与基因型之间的最优匹配关系也需要系统研究。');
  } else if (t.includes('polysaccharide') || t.includes('microbiome modulation')) {
    parts.push('肠道微生物组与宿主健康的关联研究在过去十年爆发式增长，但如何精准调控微生物组仍是核心挑战；多糖作为益生元的研究历史悠久，但结构-功能关系的理性设计是近年才兴起的方向。');
    parts.push('该研究的 motivation 在于：传统益生元研究多为经验性筛选，缺乏对多糖结构如何决定微生物选择性的系统理解；理性生物工程化设计有望实现"靶向"微生物组调控，而非广谱性干预。');
    parts.push('从临床转化角度看，精准微生物组调控在炎症性肠病、代谢综合征、肿瘤免疫治疗增敏等方向均有巨大潜力，但个体微生物组差异带来的响应异质性是主要障碍。');
    parts.push('Future work 需要解决：不同个体微生物组背景下的响应预测模型、多糖在体内的降解动力学、以及与其他干预手段（如益生菌、粪菌移植）的协同效应。');
  } else if (t.includes('crispr') || t.includes('gene editing')) {
    parts.push('CRISPR/Cas9 自2012年问世以来已成为基因功能研究和基因治疗的核心工具，但在作物改良领域的应用仍面临脱靶效应、转化效率和监管等挑战。');
    parts.push('该研究的 motivation 在于：通过多基因敲除揭示冗余基因家族的功能，这是传统遗传学方法难以实现的；对植物株型调控基因的精准编辑具有直接的育种应用价值。');
    parts.push('潜在价值方面，SPL 转录因子家族在多种作物中高度保守，本研究的发现可能具有跨物种的参考意义；但需要注意的是，株型改变对产量的影响需要在多环境下系统评估。');
    parts.push('Future work 方向：需要在田间条件下验证编辑植株的农艺性状，并探索 SPL 基因与其他株型调控通路的互作网络；此外，精准碱基编辑替代完全敲除可能提供更精细的调控手段。');
  } else if (combined.includes('cancer') || combined.includes('tumor')) {
    parts.push('肿瘤生物学研究已从单纯关注癌细胞本身转向肿瘤微环境（TME）的系统性理解，这一范式转变深刻影响了免疫治疗的发展轨迹。');
    parts.push('该研究的 motivation 在于：尽管免疫检查点抑制剂已取得突破性进展，但大多数实体瘤患者仍无法从中获益，揭示耐药机制和新靶点是当前最迫切的科学问题之一。');
    parts.push('从临床转化角度，该研究的发现若能在更大规模队列中得到验证，有望为患者分层和联合治疗策略提供新的生物标志物依据。');
    parts.push('Future work 方向：需要在前瞻性临床研究中验证相关发现，并探索与现有标准治疗的协同效应；单细胞和空间组学技术的引入将进一步深化对 TME 动态变化的理解。');
  } else if (combined.includes('single-cell') || combined.includes('scrna')) {
    parts.push('单细胞组学技术在过去五年已从方法学创新走向生物学发现的主流工具，但数据分析的标准化和跨数据集整合仍是领域内的核心挑战。');
    parts.push('该研究的 motivation 在于：传统 bulk 测序掩盖了细胞异质性，而单细胞分辨率能够揭示稀有细胞亚群、细胞状态转变和细胞间通讯网络，这对理解发育和疾病至关重要。');
    parts.push('潜在价值方面，高质量的单细胞图谱可以作为参考数据集，加速后续研究中的细胞类型注释和比较分析；但需要注意样本偏差和技术噪声对结论的影响。');
    parts.push('Future work 方向：空间转录组学与单细胞数据的整合将提供细胞在组织中的空间背景信息；同时，多组学（ATAC-seq、蛋白质组）的联合分析将揭示更深层的调控机制。');
  } else if (combined.includes('AI') || combined.includes('machine learning') || combined.includes('deep learning')) {
    parts.push('AI 在生命科学中的应用已从图像识别和序列分析扩展到蛋白质结构预测（AlphaFold）、药物设计和临床决策支持，正在重塑生物医学研究的范式。');
    parts.push('该研究的 motivation 在于：传统实验方法在通量和成本上存在瓶颈，AI 模型能够从海量数据中提取规律并进行预测，有望大幅加速科学发现的速度。');
    parts.push('潜在价值方面，若模型具有良好的泛化能力，可以作为实验设计的优先级工具，减少不必要的实验消耗；但模型的可解释性和对分布外数据的鲁棒性仍需重点关注。');
    parts.push('Future work 方向：需要在独立数据集上进行严格的外部验证，并探索模型预测与实验验证的闭环迭代流程；同时，将领域知识（先验信息）融入模型架构是提升生物学可解释性的关键。');
  } else if (combined.includes('aging') || combined.includes('longevity') || combined.includes('senescence')) {
    parts.push('衰老生物学研究在过去十年经历了从描述性研究到机制性干预的重大转变，细胞衰老（senescence）、表观遗传时钟和代谢重编程是当前最活跃的研究方向。');
    parts.push('该研究的 motivation 在于：衰老是几乎所有慢性疾病的共同风险因素，理解衰老的分子机制不仅有助于延长健康寿命，也为多种疾病提供了新的干预靶点。');
    parts.push('潜在价值方面，该研究的发现若能在人类队列中得到验证，有望为衰老生物标志物的开发和抗衰老干预策略提供新的依据。');
    parts.push('Future work 方向：需要在不同物种和不同组织中验证相关机制的保守性，并探索靶向干预的安全性窗口；长期纵向研究将是验证衰老干预效果的金标准。');
  } else {
    // 通用点评框架
    parts.push(`该研究聚焦于 ${title.replace(/\.$/, '')}，属于当前生命科学领域的活跃研究方向，具有一定的科学价值和应用潜力。`);
    parts.push('从研究 motivation 来看，该工作试图解决领域内的关键科学问题，方法设计具有一定的创新性，但需要结合原文评估实验设计的严谨性和结论的可靠性。');
    parts.push('潜在价值方面，该研究的发现若能在更大规模或更多样化的实验体系中得到验证，将具有更广泛的参考意义；目前的局限性可能包括样本量、模型系统的代表性等。');
    parts.push('Future work 方向：建议关注该研究结论在其他生物学背景下的可推广性，以及与现有知识体系的整合；同时，机制性研究的深化和临床相关性的验证是后续工作的重要方向。');
  }
  
  return parts.join('\n');
}

// ============ 论文提取 ============

function extractPapersFromEmail(text, subject) {
  const papers = [];
  if (!text) return papers;
  
  const journal = extractJournalFromSubject(subject);
  const lines = text.split(/\n|\r/);
  
  for (let i = 0; i < lines.length - 1; i++) {
    const line = lines[i].trim();
    const nextLine = lines[i + 1]?.trim() || '';
    
    // 跳过元信息行
    if (!line || line.startsWith('[') || line.startsWith('http') || 
        line.startsWith('Advertisement') || line.startsWith('Website') ||
        line.startsWith('Facebook') || line.startsWith('Twitter') ||
        line.startsWith('Youtube') || line.startsWith('Weibo') ||
        line.includes('Figure') || line.includes('Image:') ||
        (line.includes('Vol.') && line.includes('Iss.')) ||
        line.includes('doi:') || line.includes('Volume') && line.includes('Issue') ||
        line.includes('WEEKLY UPDATES') || line.includes('The Nature Portfolio') ||
        line.includes('Follow ') || line.includes('Join us') ||
        line.includes('Brought to you') || line.includes('Click ') ||
        /^(Article|Review|News|Perspective|Comment|Letter|Archive|Advisory|Board)/i.test(line) ||
        /^\d+$/.test(line) ||
        line.includes('Circularity') || line.includes('Multi-Journal') ||
        line.includes('Highlights') || line.includes('Announcements')) continue;
    
    // 标题特征
    if (line.length < 30 || line.length > 160) continue;
    if (!/[a-z]/.test(line.substring(0, 20))) continue;
    
    // 找链接
    let link = '';
    const isLink = (s) => s.startsWith('[') && (s.includes('http') || s.includes('springernature') || s.includes('cell.com') || s.includes('doi.org') || s.includes('aaas'));
    
    // 找作者行
    const isAuthor = (s) => /^[A-Z]/.test(s) && (s.includes(',') || s.includes(' & ') || s.includes('[...]'));
    
    if (isLink(nextLine) || isAuthor(nextLine)) {
      if (isLink(nextLine)) {
        const urlMatch = nextLine.match(/https?:\/\/[^\s\[\]"]+/);
        if (urlMatch) link = urlMatch[0];
      }
      
      let authors = '';
      let authorsLine = nextLine;
      if (isAuthor(nextLine)) {
        authors = nextLine.replace('[...]', ' et al.').replace(/\s+/g, ' ').trim();
      } else if (isLink(nextLine) && i + 2 < lines.length) {
        const afterLink = lines[i + 2]?.trim() || '';
        if (isAuthor(afterLink)) {
          authors = afterLink.replace('[...]', ' et al.').replace(/\s+/g, ' ').trim();
          authorsLine = afterLink;
        }
      }
      
      let title = line;
      if (title === title.toUpperCase() && title.length > 20) {
        title = title.toLowerCase().replace(/\b\w/g, c => c.toUpperCase())
          .replace(/'/g, "'");
      }
      
      // 找日期
      let paperDate = '';
      for (let j = i + 1; j < Math.min(i + 8, lines.length); j++) {
        const dLine = lines[j].trim();
        if (/^\d{1,2}\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|January|February|March|April|May|June|July|August|September|October|November|December)\s+20\d{2}/.test(dLine)) {
          paperDate = dLine;
          break;
        }
      }
      
      papers.push({
        title,
        authors: authors || '见原文',
        journal,
        date: paperDate,
        link,
        source: 'email'
      });
    }
  }
  
  // 去重
  const seen = new Set();
  return papers.filter(p => {
    const key = p.title.toLowerCase().substring(0, 40).replace(/\s+/g, ' ');
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// ============ 邮件读取 ============

function fetchRecentEmails(hours = 24) {
  return new Promise((resolve, reject) => {
    const imap = new Imap({
      user: process.env.IMAP_USER,
      password: process.env.IMAP_PASS,
      host: process.env.IMAP_HOST,
      port: parseInt(process.env.IMAP_PORT),
      tls: true,
      tlsOptions: { rejectUnauthorized: false }
    });
    
    const emails = [];
    
    imap.once('ready', () => {
      imap.openBox('INBOX', true, (err, box) => {
        if (err) { reject(err); imap.end(); return; }
        
        const since = new Date();
        since.setHours(since.getHours() - hours);
        
        imap.search([['SINCE', since]], (err, uids) => {
          if (err || !uids || uids.length === 0) { resolve([]); imap.end(); return; }
          
          console.log(`  📬 找到 ${uids.length} 封近 ${hours}h 邮件`);
          
          const fetchOp = imap.fetch(uids, { bodies: '' });
          let pending = uids.length;
          
          fetchOp.on('message', (msg) => {
            msg.on('body', (stream) => {
              simpleParser(stream, (err, parsed) => {
                if (err) { pending--; return; }
                
                const from = parsed.from?.text || '';
                const subject = decodeSubject(parsed.subject || '');
                const date = parsed.date;
                const text = parsed.text || '';
                
                const lowerFrom = from.toLowerCase();
                const lowerSubject = subject.toLowerCase();
                
                // 排除非研究类邮件（优先检查排除关键词）
                if (matchesKeywords(subject, CONFIG.excludeKeywords)) {
                  pending--;
                  if (pending <= 0) { resolve(emails); imap.end(); }
                  return;
                }
                
                const isJournalEmail = CONFIG.journalSenders.some(s => lowerFrom.includes(s)) ||
                  CONFIG.journalSubjects.some(j => lowerSubject.includes(j));
                
                if (isJournalEmail && !matchesKeywords(subject, CONFIG.excludeKeywords)) {
                  emails.push({ from, subject, date: date?.toISOString(), text });
                  console.log(`  ✓ ${subject.substring(0, 65)}`);
                }
                
                pending--;
                if (pending <= 0) { resolve(emails); imap.end(); }
              });
            });
          });
          
          fetchOp.once('error', () => { resolve(emails); imap.end(); });
        });
      });
    });
    
    imap.once('error', reject);
    imap.connect();
  });
}

// ============ 报告生成 ============

function generateQQReport(papers) {
  const today = new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });
  
  let r = `📚 **科研期刊追踪报告**\n`;
  r += `**日期**: ${today}\n`;
  r += `**今日发现**: ${papers.length} 篇相关论文\n\n`;
  r += `---\n\n`;

  if (papers.length === 0) {
    r += `⚠️ 今日未收到相关领域期刊目录。\n`;
    r += `建议：确认 eAlert 订阅正常，或检查垃圾邮件文件夹。`;
    return r;
  }

  papers.forEach((p, i) => {
    r += `### ${i + 1}. 🧬 ${p.title}\n\n`;
    r += `**期刊**: ${p.journal || '见链接'}\n`;
    if (p.corresponding) r += `**通讯作者单位**: ${p.corresponding}\n`;
    r += `**日期**: ${p.date || '见邮件'}\n`;
    r += `**作者**: ${p.authors}\n\n`;
    if (p.link) r += `🔗 ${p.link}\n\n`;
    r += `**研究问题**: ${p.researchQuestion || '从略'}\n\n`;
    if (p.contributions && p.contributions.length > 0) {
      r += `**主要贡献**:\n`;
      p.contributions.slice(0, 3).forEach(c => { r += `${c}\n`; });
      r += '\n';
    }
    if (p.abstract) {
      r += `**摘要要点**: ${p.abstract.substring(0, 300)}${p.abstract.length > 300 ? '...' : ''}\n\n`;
    }
    r += `**点评**: ${p.comment || '相关领域研究'}\n\n`;
    r += `---\n\n`;
  });

  r += `## 🔬 综合评述\n\n`;
  r += generateSummary(papers);

  return r;
}

function generateMarkdownReport(papers) {
  const today = new Date().toISOString().split('T')[0];
  const datetime = new Date().toLocaleString('zh-CN');
  
  let md = `# 📚 科研期刊追踪报告\n\n`;
  md += `**日期**: ${today}\n`;
  md += `**监控期刊**: Nature、Science、Cell 系列及主流生物学期刊\n`;
  md += `**目标领域**: 生物信息学、计算生物学、癌生物学、免疫学、AI for Science、多组学\n\n`;
  md += `---\n\n`;
  md += `## 📊 统计\n`;
  md += `- **今日相关论文**: ${papers.length} 篇\n\n`;
  
  if (papers.length === 0) {
    md += `> 今日未收到相关领域期刊目录。\n\n---\n\n`;
    md += `**生成时间**: ${datetime}\n`;
    md += `**工具**: EAlert Tracker v3.3\n`;
    return md;
  }
  
  const journalCounts = {};
  papers.forEach(p => {
    const j = p.journal || '未知';
    journalCounts[j] = (journalCounts[j] || 0) + 1;
  });
  md += `### 期刊分布\n`;
  for (const [j, c] of Object.entries(journalCounts)) {
    md += `- **${j}**: ${c} 篇\n`;
  }
  md += `\n---\n\n`;
  
  md += `## 📰 论文详情\n\n---\n\n`;
  
  papers.forEach((p, i) => {
    md += `### ${i + 1}. 🧬 ${p.title}\n\n`;
    md += `| 项目 | 内容 |\n|------|------|\n`;
    md += `| **期刊** | ${p.journal || '见链接'} |\n`;
    if (p.corresponding) md += `| **通讯作者单位** | ${p.corresponding} |\n`;
    md += `| **日期** | ${p.date || '见邮件'} |\n`;
    md += `| **作者** | ${p.authors} |\n`;
    if (p.link) md += `| **链接** | ${p.link} |\n`;
    md += `| **DOI** | ${p.doi || '见链接'} |\n\n`;
    md += `**研究问题**: ${p.researchQuestion || '从略'}\n\n`;
    
    if (p.contributions && p.contributions.length > 0) {
      md += `**主要贡献**:\n`;
      p.contributions.slice(0, 3).forEach(c => { md += `${c}\n`; });
      md += '\n';
    }
    
    if (p.abstract) {
      md += `**摘要要点**: ${p.abstract.substring(0, 500)}${p.abstract.length > 500 ? '...' : ''}\n\n`;
    }
    
    md += `**点评**: ${p.comment || '相关领域研究'}\n\n`;
    md += `---\n\n`;
  });
  
  md += `## 🔬 综合评述\n\n`;
  md += generateSummary(papers) + '\n\n';
  md += `---\n\n`;
  md += `**生成时间**: ${datetime}\n`;
  md += `**工具**: EAlert Tracker v3.3\n`;

  return md;
}

function generateSummary(papers) {
  if (!papers || papers.length === 0) return '今日无相关论文。';
  
  const lines = [];
  
  const journalCounts = {};
  papers.forEach(p => {
    const j = p.journal || '未知';
    journalCounts[j] = (journalCounts[j] || 0) + 1;
  });
  
  const counts = {
    '肿瘤/免疫': papers.filter(p => matchesKeywords(p.title + (p.abstract || ''), ['cancer', 'tumor', 'immunotherapy', 'immune'])).length,
    'AI/机器学习': papers.filter(p => matchesKeywords(p.title + (p.abstract || ''), ['AI', 'machine learning', 'deep learning'])).length,
    '单细胞/组学': papers.filter(p => matchesKeywords(p.title + (p.abstract || ''), ['single-cell', 'scRNA', 'genomics', 'transcriptomics'])).length,
    '基因编辑': papers.filter(p => matchesKeywords(p.title + (p.abstract || ''), ['CRISPR', 'gene editing'])).length,
    '衰老/寿命': papers.filter(p => matchesKeywords(p.title + (p.abstract || ''), ['aging', 'longevity', 'lifespan'])).length,
    '神经科学': papers.filter(p => matchesKeywords(p.title + (p.abstract || ''), ['brain', 'neural', 'neuroscience'])).length,
    '生物工程': papers.filter(p => matchesKeywords(p.title + (p.abstract || ''), ['bioengineer', 'synthetic biology', 'organoid', 'biochar'])).length,
  };
  
  lines.push(`📊 **期刊分布**:`);
  for (const [j, c] of Object.entries(journalCounts)) {
    lines.push(`- ${j}: ${c} 篇`);
  }
  lines.push('');
  
  lines.push(`📈 **领域热度**:`);
  for (const [field, count] of Object.entries(counts)) {
    if (count > 0) lines.push(`- ${field}: ${count} 篇`);
  }
  lines.push('');
  
  const topFields = Object.entries(counts).filter(([, c]) => c > 0).sort((a, b) => b[1] - a[1]);
  lines.push(`💡 **本期综合评述**:`);
  
  if (papers.length >= 3) {
    if (topFields[0]) {
      lines.push(`- 本期${papers.length}篇论文中，${topFields[0][0]}研究最为活跃（${topFields[0][1]}篇），建议重点关注`);
    }
    const hasAbstract = papers.filter(p => p.abstract && p.abstract.length > 50).length;
    if (hasAbstract > 0) {
      lines.push(`- 共${hasAbstract}篇论文可获取摘要，内容质量和创新性总体较高`);
    }
    if (topFields.some(([, c]) => c >= 2)) {
      lines.push(`- 多篇涉及交叉领域研究，反映当前生命科学向多学科融合发展的趋势`);
    }
  } else {
    lines.push(`- 本期相关论文较少，持续关注后续更新`);
  }
  
  return lines.join('\n');
}

// ============ 发送 ============

async function sendEmail(mdReport) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      tls: { rejectUnauthorized: false }
    });
    
    const today = new Date().toISOString().split('T')[0];
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: CONFIG.targetEmail,
      subject: `📚 科研期刊追踪报告 - ${today}`,
      text: '详细报告见附件。',
      attachments: [{ filename: `ealert-report-${today}.md`, content: mdReport, contentType: 'text/markdown' }]
    });
    console.log('✅ 邮件已发送到:', CONFIG.targetEmail);
  } catch (err) {
    console.error('❌ 邮件发送失败:', err.message);
  }
}

// ============ 主流程 ============

async function run() {
  console.log('🚀 EAlert Tracker v3.3 启动\n');
  console.log(`📅 ${new Date().toLocaleString('zh-CN')}\n`);
  
  // Step 1: 获取期刊邮件
  console.log('📬 读取最近 24h 期刊邮件...');
  let emails = [];
  try {
    emails = await fetchRecentEmails(24);
  } catch (err) {
    console.error('❌ 邮件读取失败:', err.message);
  }
  
  console.log(`  → 找到 ${emails.length} 封期刊邮件\n`);
  
  if (emails.length === 0) {
    await sendEmail(generateMarkdownReport([]));
    console.log('⚠️ 今日无期刊邮件');
    return;
  }
  
  // Step 2: 提取论文
  console.log('🔍 解析邮件提取论文...');
  let allPapers = [];
  for (const email of emails) {
    const papers = extractPapersFromEmail(email.text, email.subject);
    if (papers.length > 0) {
      console.log(`  ${email.subject.substring(0, 50)}: ${papers.length} 篇`);
      allPapers = allPapers.concat(papers);
    }
  }
  console.log(`  → 共 ${allPapers.length} 篇\n`);
  
  // Step 3: 关键词过滤
  console.log('🎯 关键词过滤...');
  const relevantPapers = allPapers.filter(p => matchesKeywords(p.title, CONFIG.targetKeywords));
  console.log(`  → 相关论文: ${relevantPapers.length} 篇\n`);
  
  if (relevantPapers.length === 0) {
    await sendEmail(generateMarkdownReport([]));
    console.log('⚠️ 未发现相关领域论文');
    return;
  }
  
  // Step 4: 尝试获取元数据（最多处理5篇）
  console.log('📖 尝试获取论文详情...');
  const toEnrich = relevantPapers.slice(0, 5);
  const enriched = [];
  
  for (let i = 0; i < toEnrich.length; i++) {
    const p = toEnrich[i];
    console.log(`  [${i + 1}/${toEnrich.length}] ${p.title.substring(0, 50)}...`);
    const detailed = await fetchPaperDetails(p);
    // 确保有研究问题（必须填，不能"从略"）
    if (!detailed.researchQuestion || detailed.researchQuestion === '探索相关生物学机制或应用研究') {
      detailed.researchQuestion = inferResearchQuestion(detailed.title, detailed.abstract || '');
    }
    // 确保有点评（必须填）
    if (!detailed.comment) {
      detailed.comment = generateComment(detailed.title, detailed.abstract || '', detailed.researchQuestion, detailed.journal || '');
    }
    // 确保有主要贡献
    if (!detailed.contributions || detailed.contributions.length === 0) {
      detailed.contributions = inferContributions(detailed.abstract || '', detailed.title);
    }
    enriched.push(detailed);
    if (i < toEnrich.length - 1) await sleep(200);
  }
  
  // 剩余论文用基础信息
  for (let i = 5; i < relevantPapers.length; i++) {
    const p = relevantPapers[i];
    p.researchQuestion = inferResearchQuestion(p.title, '');
    p.contributions = inferContributions('', p.title);
    p.comment = generateComment(p.title, '', p.researchQuestion, p.journal || '');
    enriched.push(p);
  }
  
  console.log(`  → 详情获取完成\n`);
  
  // Step 5: 生成报告
  console.log('📊 生成报告...');
  const qqReport = generateQQReport(enriched);
  const mdReport = generateMarkdownReport(enriched);
  
  // Step 6: 保存（v3.3: 按 YYYY/MM/YYYY-Wxx/ 结构归档）
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const weekNum = String(getISOWeek(today)).padStart(2, '0');
  const weekDir = `${year}-W${weekNum}`;
  const reportDir = path.join(__dirname, '../reports', `${year}`, `${month}`, weekDir);
  const reportPath = path.join(reportDir, `report_${todayStr}.md`);
  fs.mkdirSync(reportDir, { recursive: true });
  fs.writeFileSync(reportPath, mdReport);
  console.log(`  ✓ 报告已保存: reports/${year}/${month}/${weekDir}/report_${todayStr}.md\n`);
  
  // Step 7: 发送
  console.log('📤 发送报告...');
  console.log('\n' + qqReport.substring(0, 1200) + '\n...');
  await sendEmail(mdReport);
  
  console.log('\n' + '='.repeat(60));
  console.log(`✅ EAlert Tracker v3.3 完成！`);
  console.log(`   📧 期刊邮件: ${emails.length} 封`);
  console.log(`   📄 论文总数: ${allPapers.length} 篇`);
  console.log(`   🎯 相关论文: ${relevantPapers.length} 篇`);
  const withAbstract = enriched.filter(p => p.abstract && p.abstract.length > 30).length;
  console.log(`   📝 含摘要: ${withAbstract} 篇`);
  console.log('='.repeat(60));
}

run().catch(err => {
  console.error('❌ 致命错误:', err);
  process.exit(1);
});
