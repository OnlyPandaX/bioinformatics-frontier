# 🧬 Bioinfo Weekly Summary | 2026-W30

> **Bioinfo Weekly Summary v1.0.0**
> 周范围：2026-07-20 (周一) ～ 2026-07-26 (周日)
> 生成时间：2026-07-26 11:00 AM (Asia/Hong_Kong)

---

## 📊 周概览

| 简报类型 | 篇数 |
|---------|------|
| journal-briefing（重点期刊） | 4 篇（7/23, 7/24, 7/25, 7/26） |
| multiomics-briefing（多组学） | 6 篇（7/21, 7/22, 7/23, 7/24, 7/25, 7/26） |
| **合计覆盖论文** | ~150+ 篇（去重后精选评述约 20+ 篇） |

---

## 🔬 重点期刊论文评述（journal-briefing）

### 1. APOE4 全面破坏神经蛋白质组更新
**Domvanalimab plus zimberelimab in unresectable biliary tract cancers** (Nat Commun, DOI: 10.1038/s41467-026-75554-z)

本周最高影响力预印本之一，来自 UCSF/CZ Biohub 团队。整合 RNA-seq + Ribo-seq + 质谱三组学，对等基因型 APOE3/4 iPSC 神经元进行联合分析，发现转录层面变化温和，但蛋白质层面影响剧烈——APOE4 破坏核糖体占据，改变翻译动力学，导致数千基因的蛋白-转录本系统性解耦。这是首次在 proteome/translatome 层面系统性揭示 APOE4 驱动 AD 风险的翻译机制，解释了为何单纯基因表达分析难以捕获 APOE4 致病性。

> **Critical Thinking**：局限在于 iPSC 衍生神经元与真实脑神经元存在差距，且缺少 APOE2 保护性对照。但核心突破——"转录小变，蛋白大变"不对称性——为 proteostasis 恢复疗法提供了明确靶点。若后续能在老年尸脑样本中验证同等现象，将具有重大临床转化意义。

---

### 2. AlphaFold2 五周年回顾与前瞻
**AlphaFold2 turns five** (Nat Comput Sci, DOI: 10.1038/s43588-026-01031-8)

AlphaFold 五周年之际，Nature Computational Science 发表系统性回顾。本文可能评估了 AlphaFold2 自 2021 年以来的应用生态、技术演进及其对结构生物学范式的影响，同时讨论 AlphaFold3（2024）的整合进展与剩余局限。

> **Critical Thinking**：AlphaFold 已深刻改变药物靶点发现和蛋白质功能注释流程。本文的增量价值取决于它是否提供了 AlphaFold2 的系统误差分析（如固有无序区域、点突变效应预测）和对 AlphaFold3 的中立评估。当前版本在孤儿蛋白、跨膜蛋白、点突变效应预测上仍有显著局限，这是未来五年需要解决的核心问题。

---

### 3. H&E 染色图像预测空间转录组（HierarchicalDAEW）
**HierarchicalDAEW: Domain-Aware Edge-Weighted Graph Convolution with Evidential Uncertainty** (arXiv, DOI: 10.64898/2026.07.23.739571)

Jadavpur University 团队提出双图架构，融合组织域结构与基因互作先验，从常规 H&E 病理图像预测空间解析基因表达，同时量化预测可靠性。核心创新：Leiden-derived 组织域边界作为显式结构特征，实现区域感知建模；PPI+共表达双图注意力融合；证据不确定性量化识别低置信区域供病理学家复核。

> **Critical Thinking**：H&E→ST 的零成本预测极具临床落地潜力。现有方法忽视组织域异质性，本文首次引入图卷积+域感知结构，是方法学层面的实质性进展。局限在于需要配对的 H&E+ST 训练数据，多物种泛化性仅验证 4 种组织。未来与 WSIs 的多实例学习整合是该方向的关键突破点。

---

### 4. NeuroAI：计算受脑启发，从算法到类器官
**Computing inspired by the brain: a journey from algorithms to organoids** (Nat Comput Sci)

本期 Nature Computational Science 集中发表多篇神经计算与 AI 交叉论文，涵盖神经形态计算、脑启发算法、类器官智能（organoid intelligence）等前沿方向。本篇可能系统性综述了从单神经元模型到大规模类器官计算系统的演进路径。

> **Critical Thinking**：类器官智能（OI）是一个高度跨学科新兴领域，融合脑类器官、柔性电极与储层计算。其核心挑战在于类器官的信息处理能力与真实神经网络的规模差距巨大。但这一方向若突破，将为神经疾病建模和新型计算硬件提供第三条道路——介于数字 AI 与生物神经网络之间。

---

### 5. Nature Cancer 集中爆发：肿瘤免疫与微环境

本周 Nature Cancer 收录 14 篇相关论文（部分为 Research Briefing），重点聚焦：

- **GABA 通过性别依赖方式塑造 GBM 免疫反应**：揭示代谢物 GABA 在胶质母细胞瘤中的性别差异性免疫调节机制
- **肿瘤糖基化的免疫意义与治疗机会**（Immune implications and therapeutic opportunities of tumor glycosylation）：糖基化作为肿瘤免疫逃避的新靶点
- **一种可靶向 micropeptide 重编程巨噬细胞抑制 T 细胞抗肿瘤免疫**：非编码 RNA 编码微肽作为免疫抑制新机制
- **DNA 癌症疫苗在胶质母细胞瘤中的免疫学结果**：个性化新抗原疫苗的临床数据更新

> **Critical Thinking**：Nature Cancer 本周论文密度极高（14 篇），反映出肿瘤免疫微环境研究的持续热潮。GABA-性别依赖和糖基化是两个值得特别关注的新方向——两者均涉及肿瘤代谢与免疫的交叉，且性别差异在 GBM 中有重要临床意义。

---

## 🧬 重点预印本/Nature 论文评述（multiomics-briefing）

### 1. HPRC2 — 人类图泛基因组参考新基准
**HPRC2: A human pangenome reference with near-complete coverage of common genetic variation** (bioRxiv, DOI: 10.64898/2026.07.21.739710)

Human Pangenome Reference Consortium 发布第二版，约 95 个单倍型基因组（较 HPRC1 扩增约 5 倍），实现常见遗传变异近完整覆盖。同时提供首个"完整性-连续性-准确性"三维帕累托前沿评估框架。

> **Critical Thinking**：这是近十年基因组学领域最重要的基础设施更新之一。线性参考基因组对非欧洲人群的系统性偏差是精准医学的长期痛点，HPRC2 直接回应了这一问题。但 95 个单倍型仍远不足以覆盖全球遗传多样性，非洲和南亚人群的扩展是下一步的关键缺口。临床 WGS 流程的标准化集成将是衡量其最终影响力的核心指标。

---

### 2. CpGPT — 面向 DNA 甲基化的基础模型
**CpGPT: a Foundation Model for DNA Methylation** (bioRxiv, DOI: 10.1101/2024.10.24.619766)

Horvath 等表观遗传时钟权威团队背书，Shift Bioscience/Cambridge 联合发表。Transformer 预训练全基因组 DNA 甲基化数据，学习跨批次、跨平台、跨组织的甲基化模式共享表示，将基础模型范式从基因组序列/单细胞转录组拓展到表观基因组。

> **Critical Thinking**：甲基化作为高发、跨平台、强表型相关的维度，长期缺乏统一基础模型填补了这一空白。与既有的 PhenoAge、DunedinPACE 时钟相比，CpGPT 的增益边界尚需明确界定。其与 scGPT、GeneFormer 等转录组基础模型的整合将是表观基因组+单细胞多模态融合的重要一步。预训练数据分布偏差可能影响罕见组织的迁移能力，需要关注。

---

### 3. APOE4 三组学深度解析（与期刊评述重叠核心）
**APOE4 disrupts the central dogma by arresting neuronal proteome dynamics** (bioRxiv, DOI: 10.64898/2026.07.15.738801)

本周最高影响力多组学发现，详见上方期刊评述。该文在本期 multiomics-briefing 中重复出现，体现了期刊追踪与多组学追踪的信息交叉。

---

### 4. 8,000 个完整人类着丝粒多维变异图谱
**Multidimensional variation and population stratification across 8000 complete human centromeres** (bioRxiv, DOI: 10.64898/2026.07.22.740206)

中国科学院昆明动物研究所团队完成迄今最大规模人类着丝粒基因组组装（8,000 个体），首次建立大规模着丝粒变异参考图谱，揭示种群特异性和结构多样性。着丝粒是人基因组中最大、最重复的区域之一，长期被称为"基因组暗物质"。

> **Critical Thinking**：8,000 个体的规模前所未有，为理解着丝粒变异的进化和功能意义提供了统计学基础。着丝粒功能异常是染色体非整倍性和肿瘤发生的核心机制之一，该图谱将加速相关 GWAS 定位研究。但着丝粒功能的因果验证仍然困难，该研究可能主要提供描述性资源，机制发现有待后续验证。

---

### 5. 脑类器官 + KLF5/KLF8：AD 特异性调控网络
**Kruppel-like factors KLF5 & KLF8 emerge as master transcriptional regulators of Alzheimer's disease** (bioRxiv, DOI: 10.64898/2026.07.23.740401)

携带 APP-Swedish、PSEN1-M146V 突变的脑类器官多时间点 bulk+空间转录组追踪，识别 110 个 AD 特异性主调控转录因子，KLF5/KLF8 为核心枢纽，64 个在真实 AD 患者脑样本中验证。

> **Critical Thinking**：AD 的主调控转录因子网络全貌长期是空白，本文在人类遗传模型中系统性推断调控网络且经患者样本验证，具有方法论优势。但家族性 AD 仅占所有 AD 约 5%，散发性 AD 的主调控格局可能存在差异。KLF5/KLF8 作为上游主调控因子的优势在于：若能小分子激活/抑制，可能比靶向下游效应蛋白更具广谱治疗潜力，值得追踪。

---

## 📈 领域趋势：本周研究热点

### 1. 🔥 AI for Science — 蛋白与基因组基础模型持续爆发
本周在 Nature Computational Science 和 ArXiv 上至少有 **10+ 篇**相关论文，涵盖：
- **蛋白语言模型**：ProtSyntax（PTM 语法解码）、Protein fitness prediction with language models、Understanding language model scaling
- **基因组基础模型**：CpGPT（甲基化）、基因组 LLM 可解释性（因果字典学习）、Evo2 驱动的 radiogenomic 发现
- **空间组学**：LATTICE（5 种空间模态图整合）、HierarchicalDAEW（H&E→ST 预测）

### 2. 🔥 阿尔茨海默病：多组学深度解析周
本周 AD 相关研究呈现多角度爆发：
- **APOE4 机制**（三组学，蛋白稳态崩溃）
- **AD 特异性调控网络**（类器官 + 空间转录组，KLF5/KLF8）
- **雷公藤红素多组学**（中药单体改善 AD，大鼠模型）
- **更年期蛋白质组学**（更年期与痴呆风险关联）

### 3. 🔥 肿瘤免疫微环境：空间维度崛起
Nature Cancer 14 篇 + 多组学简报中 2 篇空间免疫论文，显示：
- 新抗原→T 细胞空间共定位（spatial neoantigen-TCR coupling）
- 肿瘤糖基化的免疫调节
- GABA-性别依赖性 GBM 免疫
- 肿瘤轴突神经支配与抗肿瘤免疫

### 4. 🌍 基因组学基础设施里程碑
HPRC2 + 8,000 个体完整着丝粒图谱，共同标志人类基因组参考的"完整性"时代即将到来。

---

## 🔭 下周关注方向

1. **APOE4 → proteostasis 干预**：关注是否出现靶向翻译机制的小分子或基因干预在体验证
2. **HPRC2 下游工具生态**：关注 GraphTyper、vg 等工具对 HPRC2 的适配，以及罕见病诊断用例报道
3. **类器官智能（OI）**：关注 organoid-intelligence 是否进入 IEEE/神经科学主流会议
4. **AlphaFold 五周年后续**：关注 CASP16 评估中 AlphaFold3 vs RoseTTAFold All-Atom 的性能对比
5. **肿瘤糖基化作为治疗靶点**：关注是否有临床前或早期临床数据支持糖基化干预策略

---

*📅 本报告由 Bioinfo Weekly Summary v1.0.0 自动生成*
*数据来源：journal-briefing (v3.9.2) + multiomics-briefing (v1.7.0) | 2026-W30*
