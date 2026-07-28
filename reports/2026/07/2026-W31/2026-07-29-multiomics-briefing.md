# 🧬 多组学研究简报
**2026年7月29日（周三）| 近48小时精选**

> 搜索范围：2026-07-27 ~ 2026-07-28 UTC | 数据源：Nature, bioRxiv, medRxiv

---

## 📊 整体趋势评述

本期简报呈现两条交织的主题：**第一**，H5N1禽流感跨物种溢出研究在48小时内连发多篇，从病毒受体识别（MHC-II新通路）到免疫逃逸机制均有突破，反映全球对高致病性禽流感的持续高强度科研投入；**第二**，AI与蛋白质组学深度融合成为本周 Nature Methods 综述焦点，50位学者联署描绘从蛋白鉴定到虚拟细胞的技术路线图，标志着AI proteomics正从工具进化为范式。

---

## 📑 精选论文

### 🔬 论文 1：H5N1通过人类MHC-II受体入侵细胞——新发现带来防控新思路

**标题**：H5N1 influenza binding and cell entry via human class II MHC, and blocking by cross-reactive antibodies

**作者**：Taylor Pursell, Scott D. Boyd, et al.

**机构**：Stanford University（通讯作者 Scott D. Boyd）

**平台**：bioRxiv | **日期**：2026-07-26 | **DOI**：10.64898/2026.07.22.739677

**链接**：https://www.biorxiv.org/content/10.64898/2026.07.22.739677v1

**一句话概要**：H5N1 clade 2.3.4.4b可通过结合人类MHC-II（而非传统唾液酸受体）入侵免疫细胞，HLA-DR基因变异影响感染易感性。

**主要贡献**：
- 发现H5N1 clade 2.3.4.4b（而非历史H5亚型）可结合人类MHC-II分子HLA-DR，实现唾液酸非依赖性细胞入侵，揭示了一种此前未被认识的病毒受体途径。
- HLA-DR等位基因变异影响HA与MHC-II的结合亲和力，首次将宿主遗传多态性与H5N1感染易感性直接关联。
- 从未接触过H5N1的人群中分离出可阻断HA-MHC-II互作的交叉反应单克隆抗体，为广谱治疗性抗体开发提供候选。

**🔍 Critical 简评**：⭐⭐⭐⭐
H5N1 clade 2.3.4.4b自2024年起在奶牛场暴发并波及人类，传统认为其通过唾液酸-α-2,3-Gal受体入侵下呼吸道。本研究颠覆这一认知——病毒已演化出通过MHC-II入侵免疫细胞的新策略，直接利用抗原呈递细胞作为入口。MHC-II在B细胞、巨噬细胞、树突状细胞高表达，这解释了为何部分患者出现异常广泛的淋巴组织感染。HLA基因变异的调控效应意味着不同人群可能存在差异性易感性，这对全球公共卫生监测有直接意义。局限在于目前数据来自分子互作实验，尚需灵长类动物模型验证致病性增强；治疗性抗体的中和活性也待体内验证。

---

### 🔬 论文 2：糖基化肿瘤EV通过水平转移Glycan重编程树突状细胞

**标题**：Sialyl-Tn-positive tumour-derived extracellular vesicles impair dendritic cell function via horizontal transfer of glycans

**作者**：Zelia C Silva, Paula A Videira, et al.

**机构**：UCIBIO / i4HB, Portugal（通讯作者 Paula A Videira）

**平台**：bioRxiv | **日期**：2026-07-26 | **DOI**：10.64898/2026.07.24.740563

**链接**：https://www.biorxiv.org/content/10.64898/2026.07.24.740563v1

**一句话概要**：STn阳性肿瘤细胞释放的胞外囊泡通过横向转移糖基转移酶和STn抗原，抑制树突状细胞成熟与抗原呈递，促进免疫逃逸。

**主要贡献**：
- 首次揭示肿瘤来源EV携带完整功能的糖基转移酶（ST6GalNAc-I），可在受体树突状细胞表面合成STn抗原，实现glycan的横向转移。
- STn+ EVs阻碍单核细胞分化为成熟DC，削弱CD4+/CD8+ T细胞启动能力，同时扩增调节性T细胞（Treg），构建促肿瘤免疫微环境。
- 酶法去除末端唾液酸可逆转免疫抑制效应，提示sialidase或糖基化干预是恢复抗肿瘤免疫的潜在策略。

**🔍 Critical 简评**：⭐⭐⭐⭐
肿瘤相关糖基化是癌症的hallmark之一，但EV介导的glycan横向转移此前未被系统研究。本工作填补了这一空白——不仅是抗原的转移，而是携带完整功能的酶在受体细胞中原位合成免疫抑制性聚糖，构成一种全新的免疫逃逸机制。这与最近火热的"糖免疫检查点"研究高度呼应。临床转化潜力：外周血EV STn可能成为TNBC免疫治疗患者的预测性生物标志物；sialidase联用PD-1抑制剂值得探索。局限包括体外细胞实验为主，体内肿瘤模型数据待补充；STn+ EV的器官靶向性尚未评估。

---

### 🔬 论文 3：空间转录组+突变追踪绘制结肠炎相关肿瘤细胞邻里图谱

**标题**：Paired mutation calling and spatial transcriptomics identify cellular neighborhoods associated with the neoplastic outcome of mouse colitis

**作者**：Elisa B. Moutin, Douglas J. Winton, et al.

**机构**：Cancer Research UK Beatson Institute / Oxford（通讯作者 Douglas J. Winton）

**平台**：Nature Genetics | **日期**：2026-07-28 | **DOI**：10.1038/s41588-026-02673-0

**链接**：https://www.nature.com/articles/s41588-026-02673-0

**一句话概要**：在小鼠结肠炎模型中配对突变calling与空间转录组，解析决定炎症相关肿瘤发生的细胞邻里特征。

**主要贡献**：
- 将体细胞突变追踪与空间转录组融合，在同一切片上同时捕获基因型和转录表型，首次以单细胞分辨率关联突变克隆命运与空间微环境。
- 识别出与结肠炎→肿瘤恶性转化相关的特定细胞neighborhood组成，包括上皮细胞、免疫细胞和基质细胞的交互模式。
- 发现某些细胞邻里构型可预测突变克隆的增殖优势或清除命运，为高危患者的早期干预提供空间生物标志物。

**🔍 Critical 简评**：⭐⭐⭐⭐
炎症相关癌症（colitis-associated cancer）是理解肿瘤微环境塑造恶性克隆演化的天然模型，但此前缺乏同时追踪突变命运与空间邻居的技术手段。本研究将DNA测序与空间转录组整合在同一组织切片上，解决了传统方法中"知道哪里有突变但不知道周围是什么细胞"的困境。这代表了空间多组学从"描述性工具"向"机制发现平台"演进的重要节点。技术层面，paired mutation calling in situ对测序深度和空间分辨率要求极高，其pipeline值得同行参考。临床转化路径清晰：内镜活检的空间多组学评估可识别高危结肠炎患者。局限在于小鼠模型到人的转化仍需跨越物种差异。

---

### 🔬 论文 4：AI蛋白质组学——从蛋白鉴定到虚拟细胞的全景路线图

**标题**：AI proteomics: from protein identification to virtual cells

**作者**：Yingying Sun, Linfeng Zhang, Matthias Mann, Ruedi Aebersold, 等（50位共同作者）

**机构**：复旦大学 / 清华大学 / 北京大学 / 军事医学科学院 / 苏黎世联邦理工 / 马克斯·普朗克生化研究所 / UCSD 等

**平台**：Nature Methods（Perspective） | **日期**：2026-07-28 | **DOI**：10.1038/s41592-026-03085-y

**链接**：https://www.nature.com/articles/s41592-026-03085-y

**一句话概要**：50位顶尖学者联署综述，描绘AI驱动蛋白质组学从蛋白鉴定、修饰解析到虚拟细胞构建的全链条技术路线图与关键挑战。

**主要贡献**：
- 系统梳理质谱蛋白质组学中AI的五大前沿应用方向：深度学习辅助肽段鉴定、翻译后修饰（PTM）预测与定位、蛋白质-蛋白质互作推断、蛋白质组层面表型建模和虚拟细胞生成。
- 提出蛋白质组学AI的独特挑战——数据不均衡、缺失数据系统性偏高、仪器批次效应复杂——与计算机视觉/NLP领域差异显著，需要专属的模型架构和评估基准。
- 展望"虚拟蛋白质组"（virtual proteome）愿景：以蛋白质组学数据训练的基础模型可模拟扰动响应，用于药物靶点虚拟筛选和机制假设生成。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
这是蛋白质组学领域近年来最具分量的AI综述之一，50位学者的阵容本身即说明了议题的重要性。从历史脉络看，蛋白质组学AI经历了三个阶段：规则驱动（2000s）→ 统计机器学习（2010s）→ 深度学习/基础模型（2020s）。本文的独到之处在于明确指出蛋白质组数据的三大特性（不完整性、不一致性、可解释性需求）如何约束模型设计，这对避免AI社区盲目迁移NLP/CV方案至关重要。"虚拟细胞"（virtual cell）的概念与单细胞领域的scVI、CellLM等遥相呼应，但蛋白质维度的虚拟化面临更大挑战（PTM状态空间近乎无限）。值得关注的是中国团队（复旦、清华、北大、军科院）的深度参与，反映我国在蛋白质组学AI方向的快速崛起。局限：综述性质文章缺乏原创验证，路线图的落地需要具体benchmark支撑；数据共享与标准化仍是最大瓶颈。

---

### 🔬 论文 5：妊娠表型GWAS揭示情境依赖的基因效应

**标题**：Genome-wide association analyses of gestational phenotypes identify context-specific genetic effects

**作者**：Siyang Liu, Yukinori Okada, Fengxiang Wei, et al.（中、日、英三国团队）

**机构**：复旦大学 / 大阪大学 / 东京大学 / 中国科学院等

**平台**：Nature Genetics | **日期**：2026-07-27 | **DOI**：10.1038/s41588-026-02677-w

**链接**：https://www.nature.com/articles/s41588-026-02677-w

**一句话概要**：12万中国孕妇111种妊娠表型GWAS揭示基因效应的时间情境依赖性——同一基因变异在妊娠不同阶段产生截然不同的表型影响。

**主要贡献**：
- 纳入121,579名中国孕妇，涵盖111种妊娠期表型，是迄今规模最大的妊娠专项GWAS，填补了亚洲人群妊娠遗传学数据的重大空白。
- 发现基因效应具有显著的情境依赖性（context-specific）：部分SNP仅在特定妊娠阶段或特定产科并发症背景下发挥作用，挑战了传统GWAS"一因一效"的简化假设。
- 识别出跨族裔保守的妊娠相关基因座，以及中国人群特异的高频风险变异，为妊娠并发症的精准预防提供遗传学基础。

**🔍 Critical 简评**：⭐⭐⭐⭐
妊娠是人体生理最剧烈的动态过程之一，激素水平、免疫状态、代谢负荷在9个月内发生巨变，但传统GWAS往往将妊娠视为静态表型。本研究的核心贡献在于揭示"情境依赖"（context-dependent）的遗传效应机制——同一变异在早孕vs晚孕、或健康妊娠vs妊娠期糖尿病背景下可能发挥截然不同的作用。这一发现对理解基因-环境互作（GxE）有重要方法论意义：需要动态表型而非单时点测量才能捕捉完整的遗传信号。亚洲人群的大规模数据（12万）本身就具重要价值——既往妊娠GWAS以欧洲裔为主，本研究填补了关键的族裔多样性缺口。局限：妊娠并发症与环境因素高度交织，因果推断仍面临混杂挑战；发现的功能验证有待深入。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| Nature Genetics | Toward generalizable and interpretable AI in regulatory genomics | 基因组AI、泛化性、可解释性 | NG综述，Nagai/Murphy/Koo等，已在去重列表 |
| Nature Methods | AI proteomics: from protein identification to virtual cells | AI蛋白组学、基础模型、虚拟细胞 | 50人联署Perspective，⭐入选 |
| Nature Biotechnology | Engineered polyketide synthases enable a microbial chassis for recyclable plastics | 合成生物学、代谢工程 | Keasling/LBJ实验室，27 Jul |
| bioRxiv | IL-13 Induces a Tuft Cell-Intrinsic CD45 Checkpoint to Limit Intestinal Type 2 Immunity | 肠上皮细胞、免疫检查点、ILC2 | 免疫学机制，非多组学为主 |
| Nature Biotechnology | EU relaxes rules for gene-edited crops | 基因编辑、法规 | 新闻，非原创研究 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-07-27 00:00 UTC ~ 2026-07-28 23:59 UTC*
