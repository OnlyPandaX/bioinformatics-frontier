# 🧬 多组学研究简报
**2026年5月28日（周四）| 近48小时精选**

> 搜索范围：2026-05-26 ~ 2026-05-28 | 数据源：ArXiv (q-bio.GN/QM/CB), bioRxiv, medRxiv

---

## 📊 整体趋势评述

本期简报聚焦**计算生物学与AI驱动的多组学方法学突破**。五篇论文分别从空间转录组细胞注释、蛋白质设计主动学习、药物毒性可解释性、原核调控序列表示学习、以及错义变异致病性预测五个维度，展示了深度学习与组学数据融合的最新进展。值得注意的是，Kolmogorov-Arnold网络、对比学习、与高效主动学习框架成为本批论文的方法学共同点，指向"更轻量、更可解释、更数据高效"的模型设计趋势。

---

## 📑 精选论文

### 🔬 论文 1：单细胞分辨率空间转录组快速可解释分析

**标题**：Decoding spatial transcriptomics at single-cell resolution with fast and interpretable analysis

**作者**：Bokai Zhao, et al.
**机构**：（通讯作者单位待补充）
**平台**：ArXiv | **日期**：2026-05-26 | **DOI**：10.48550/arXiv.2605.26904
**链接**：https://arxiv.org/abs/2605.26904

**一句话概要**：基于Kolmogorov-Arnold网络的空间转录组细胞类型注释框架，支持跨物种标签迁移与标记基因优先排序。

**主要贡献**：
- 提出SpCAST框架，用KAN捕捉参考单细胞数据与空间表达谱间的非线性映射，实现高精度细胞类型标签迁移。
- 在53个数据集、413,376个空间细胞上 benchmark，运行时间显著低于现有方法，同时保持竞争性能。
- 统一支持细胞类型注释、空间基因表达重建与标记基因候选优先排序，且支持跨物种迁移与未标注细胞的候选分配。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
空间转录组学长期受困于靶向基因面板局限与测序稀疏性，细胞类型注释是核心瓶颈。SpCAST选择KAN而非传统MLP作为映射网络，利用KAN的可解释性优势做特征归因，动机清晰。亮点在于53数据集的大规模benchmark（涵盖5种技术平台），显著增强了结论可信度。局限：KAN的训练成本与超参数敏感性未充分讨论；跨物种迁移的生物学合理性验证不足。未来工作应关注：(1) 与基础模型（如scFoundation）的集成；(2) 空间域识别能力的系统评估。总体而言，这是空间转录组计算工具箱中有价值的新增选项，尤其适合资源受限的计算场景。

---

### 🔬 论文 2：蛋白质设计中的自改进模仿学习

**标题**：Self-Improvement Imitation with Biologically Guided Search for Protein Design Under Oracle Budgets

**作者**：Ashima Khanna, et al.
**机构**：（通讯作者单位待补充）
**平台**：ArXiv (cs.LG) | **日期**：2026-05-26 | **DOI**：10.48550/arXiv.2605.26690
**链接**：https://arxiv.org/abs/2605.26690

**一句话概要**：在oracle预算约束下，通过轨迹级自改进模仿与生物引导搜索实现高效蛋白质序列优化。

**主要贡献**：
- 提出SILO框架，将蛋白质突变分解为位置选择+残基选择的两层层次策略，避免位置不可知突变对功能关键残基的破坏。
- 每轮用增量随机束搜索（SBS）采样候选轨迹，结合UCB代理集成与丙氨酸扫描适应度评分（AFS）选择功能相关编辑进行oracle评估。
- 在8个蛋白质适应度景观上超越5个强基线，低数据与有噪声代理压力测试下仍保持竞争力；代码已开源。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
蛋白质工程中的oracle预算问题（湿实验/高精度计算成本高）是领域核心挑战之一。SILO的设计有多个巧妙之处：(1) 层次策略自然编码了蛋白质进化的"先定位后突变"先验；(2) 用AFS引导搜索，将生物学直觉嵌入主动学习循环；(3) 轨迹级模仿避免了价值函数估计的不稳定性。与CbAS、DynaPPO等RL方法相比，SILO在噪声代理下性能衰减更小，这对实际应用场景至关重要。局限：SBS的多样性保证依赖超参数调节；丙氨酸扫描的计算成本在大规模适应度景观上可能成为瓶颈。未来方向：(1) 与蛋白质语言模型引导的初始化的结合；(2) 多目标优化（如同时优化稳定性和功能）。这是蛋白质设计计算方法的一次扎实推进，代码开源将进一步推动领域采用。

---

### 🔬 论文 3：GNN药物毒性预测中的可解释性缺口分类

**标题**：What Molecular Structure Cannot Tell Us: A Taxonomy of Explainability Gaps in GNN-Based Drug Toxicity Prediction

**作者**：Juergen Dietrich, et al.
**机构**：（通讯作者单位待补充）
**平台**：ArXiv (q-bio.QM) | **日期**：2026-05-25 | **DOI**：10.48550/arXiv.2605.26183
**链接**：https://arxiv.org/abs/2605.26183

**一句话概要**：以阿司匹林为案例，系统量化分子结构本身可编码的药物不良反应上限，提出四类可解释性缺口分类法。

**主要贡献**：
- 以阿司匹林（药理学最充分表征的药物之一）为模型化合物，训练MPNN on Tox21，用GNNExplainer表征原子级归因，发现分子结构仅能解释约45%（5/11）的已知不良反应。
- 提出GAP分类法（GAP-1至GAP-4），区分：本质不可编码效应、MNAR机制导致的数据缺口、检测面板错配、与表示错误。
- 通过ChEMBL系统查询量化MNAR缺口（42个有文档的assay，0个可检索的生物活性条目）；注意力池化实验将表示错误定位至MPNN消息传递层而非聚合步骤。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
这是一篇方法论反思型论文，切入点独特且重要。GNN在分子性质预测中的可解释性声明常被过度解读，本文用案例研究量化"分子结构本身的信息上限"，对领域有警示价值。GAP分类法清晰，对药物安全信号检测工作流与监管框架（GVP、NAM）有直接参考意义。亮点：用阿司匹林这一"最充分表征"药物作为下界估计，逻辑严密。局限：单案例研究（仅阿司匹林）的外部有效性需谨慎解读；MPNN架构的选择是否代表GNN家族的普遍行为，尚需更多分子验证。未来工作应扩展至更多药物与更多GNN架构（如图Transformer）。总体而言，这是一篇"提对问题"的论文，对计算毒理学领域有长期参考价值。

---

### 🔬 论文 4：对比启动子-蛋白质预训练捕捉细菌基因调控

**标题**：Contrastive promoter-protein pretraining yields representations capturing bacterial gene regulation

**作者**：Cameron Dufault, et al.
**机构**：（通讯作者单位待补充）
**平台**：ArXiv (q-bio.GN) | **日期**：2026-05-24 | **DOI**：10.48550/arXiv.2605.25242
**链接**：https://arxiv.org/abs/2605.25242

**一句话概要**：受CLIP启发，通过对比学习将启动子序列与对应蛋白质对齐，以蛋白质语言模型表示为监督信号学习原核调控序列表示。

**主要贡献**：
- 提出C3P（Contrastive Promoter-Protein Pretraining），在8800万细菌启动子-蛋白质对上训练，利用蛋白质语言模型学到的丰富表示作为启动子表示学习的监督信号。
- 在人工标注的调控注释推理任务上，C3P学到的启动子表示相对主流基因组语言模型（gLM）有多倍提升。
- 引入零样本共调控基因检索任务（无需实验数据即可在基因组中寻找共调控基因），C3P相比随机初始化基线提供显著零样本性能增益，而gLM则无此能力。
- 缩放分析显示C3P在仅用主流gLM训练成本的一小部分时即达到强性能，效率优势明显。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
基因组语言模型（gLM）能否真正"理解"调控序列功能，一直存在争议——序列重建预训练目标与调控语义间的语义鸿沟是核心问题。C3P用对比学习 bridging 这一鸿沟，设计思路与CLIP如出一辙，但在原核调控生物学背景下有独立的创新价值。最令人印象深刻的是零样本共调控基因检索结果——这意味着仅从基因组序列本身，就有可能解码数百万细菌的基因调控逻辑，对原核基因组注释有深远意义。局限：细菌启动子-蛋白质配对数据的质量与覆盖度依赖数据库注释完整性；真核复杂调控（增强子-启动子远程互作）是否能用类似框架处理，尚需探索。未来方向：(1) 扩展至真核调控序列；(2) 与实验数据（如ChIP-seq、ATAC-seq）联合微调。这是计算基因组学一篇精心设计的工作，对比学习在调控生物学中的潜力值得持续关注。

---

### 🔬 论文 5：全基因组错义致病性预测注释与Benchmark框架

**标题**：a genome-wide annotation and benchmarking framework for missense pathogenicity prediction

**作者**：Muhammad Muneeb, et al.
**机构**：（通讯作者单位待补充）
**平台**：ArXiv (q-bio.GN) | **日期**：2026-05-23 | **DOI**：10.48550/arXiv.2605.24520
**链接**：https://arxiv.org/abs/2605.24520

**一句话概要**：整合多源异质证据（人群频率、进化保守性、蛋白质语言模型特征等）构建303维特征空间，用XGBoost实现ClinVar错义变异致病性预测MCC=0.9411。

**主要贡献**：
- 提出AnnotateMissense框架，整合hg38错义变异（源自dbNSFP v5.1）与ANNOVAR注释、群体频率变量、已有致病性预测器、AlphaMissense评分、ESM衍生特征、保守性指标及工程化氨基酸/密码子上下文特征，构建303维benchmark特征集。
- 在132,714个ClinVar标注错义变异上benchmark机器学习与深度学习模型，XGBoost在完整特征集上达到均值MCC=0.9411、ROC-AUC=0.9950（分层五折交叉验证）。
- 消融实验显示：移除已有预测器、人群频率及临床重叠证据显著降级性能，而单独移除AlphaMissense与ESM衍生特征影响有限——这一发现对蛋白质语言模型在变异解读中的实际贡献提出了重要质疑。
- 时间验证（新出现致病/良性变异）达到MCC=0.7613；最终模型应用于90,643,830个hg38错义变异，生成AnnotateMissense致病性评分与二分类预测标签。代码与结果已公开。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
错义变异解读是临床基因组学的核心任务，AnnotateMissense在方法学上的主要贡献是系统性的特征消融分析。最值得关注的发现是：AlphaMissense和ESM特征在完整特征集合中贡献有限——这与当前蛋白质语言模型"刷榜"叙事形成有趣对比，提示特征冗余与环路风险（prior predictor作为特征）。XGBoost达到MCC=0.94的Cross-validation性能，但时间验证MCC=0.76的显著差距提醒我们泛化能力的现实挑战。局限：303维特征存在潜在多重共线性，特征选择策略未充分讨论；ESM/AlphaMissense贡献"有限"是否源于特征工程方式（如降维不足）仍需细化分析。未来工作应关注：(1) 与最新基础模型（如Evo2、scGPT）的集成；(2) 非欧美人群的训练与验证。总体而言，这是一份扎实的工程型benchmark工作，对临床基因组学pipelines有实用参考价值。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | Cadmium toxicity to the human gut microbiome varies depending on composition | microbiome, heavy metal, butyrate | 肠道菌群Cd抗性/敏感性分型，Anaerostipes关键作用 |
| bioRxiv | Type I Interferon-Driven Monocyte Dysregulation and MAS-associated CD8+ T cells During Macrophage Activation Syndrome | immunology, interferon, single-cell | I型IFN驱动MAS单核细胞响应，发现新型CD8+ T细胞亚群 |
| medRxiv | Metabolomic Signatures of Brain Atrophy and Ibudilast Response in Progressive Multiple Sclerosis | metabolomics, MS, neurodegeneration | 甘油磷脂/鞘磷脂与脑萎缩速率关联，ibudilast代谢组学响应 |
| medRxiv | Identifying SNPs intersecting Alzheimer disease pathology and end-of-life traits using GIFT | GWAS, AD, methodology | 基因组信息场论(GIFT)方法识别传统GWAS遗漏的AD相关SNP |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-05-26 00:00 UTC ~ 2026-05-28 02:00 UTC*
