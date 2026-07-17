# 🧬 多组学研究简报
**2026年7月18日（周六）| 近48小时精选**

> 搜索范围：2026-07-16 ~ 2026-07-18 | 数据源：Nature, ArXiv, bioRxiv

---

## 📊 整体趋势评述

本期简报聚焦两个核心方向：① **基因组结构解析的新范式**——Pioneer转录因子通过招募cohesin复合体介导三维基因组组织的组织特异性调控；② **空间组学与AI融合加速**——TMEformer作为空间肿瘤微环境基础模型，将空间转录组与深度学习结合实现虚拟扰动；同期CADD-SV v2.0和GO-CRE分别从结构变异解读和顺式调控元件设计两条路径推动精准基因组工程。

---

## 📑 精选论文

### 🔬 论文 1：Pioneer转录因子指导组织特异性Cohesin染色质进入与三维基因组组织

**标题**：Pioneer transcription factors direct tissue-specific cohesin chromatin entry and three-dimensional genome organization

**作者**：Song Wang, Xianglin Zhang, Tianwei Jia, et al.
**机构**：北京大学/清华大学（通讯作者单位，依据作者拼音推断）
**平台**：Nature Genetics | **日期**：2026-07-16 | **DOI**：10.1038/s41588-026-02688-7
**链接**：https://doi.org/10.1038/s41588-026-02688-7

**一句话概要**：FOXA1作为先锋转录因子，在前列腺癌细胞中特异性招募NIPBL至染色质，协同ETS1等共同指导cohesin介导的三维基因组组织。（36字）

**主要贡献**：
- 发现FOXA1作为Pioneer转录因子，介导组织特异性NIPBL（cohesin加载因子）至染色质的招募过程，揭示了cohesin进入染色质的组织特异性调控机制。
- 发现ETS1与其他Pioneer转录因子协同工作，形成调控cohesin定位的复合网络，而非单一因子独立作用。
- 揭示Pioneer因子介导的cohesin定位与三维基因组组织（环路、TAD结构）之间的直接因果关系，为理解基因表达调控的染色质架构基础提供新框架。

**🔍 Critical 简评**：⭐⭐⭐⭐
三维基因组学领域长期面临"cohesin如何被精准招募到特定基因组位点"的关键科学问题。本研究以FOXA1为切入点，首次将Pioneer转录因子的染色质开放能力与cohesin加载因子NIPBL的招募直接挂钩，是三维基因组"写入"机制研究的重大突破。在前列腺癌细胞系中系统性验证FOXA1-NIPBL轴，逻辑链条清晰。局限在于目前仅验证了前列腺癌模型，组织特异性在其他组织中的普适性有待扩展。Future work应关注NIPBL突变或cohesin功能异常如何影响肿瘤进展，以及该机制在发育分化中的普遍性。

---

### 🔬 论文 2：Mapper算法拓扑数据分析揭示乳腺癌患者生存相关的隐藏分子模式

**标题**：Topology-Informed Survival Analysis of Breast Cancer Patients Using the Mapper Algorithm

**作者**：Emmanuel Kibisi, Olakunle Abawonse, Donald Woukeng, et al.
**机构**：非洲合作团队（机构信息需补充）
**平台**：arXiv (q-bio.GN) | **日期**：2026-07-16 | **arXiv ID**：2607.15022
**链接**：https://arxiv.org/abs/2607.15022

**一句话概要**：拓扑数据分析Mapper算法应用于TCGA-BRCA基因表达数据，揭示与生存预后相关的隐藏分子网络结构。（38字）

**主要贡献**：
- 将拓扑数据分析（TDA）Mapper算法应用于超过1000例TCGA-BRCA患者基因表达数据，构建患者分子网络拓扑图谱。
- 发现位于网络高风险区域的患者呈现显著更差生存率；高增殖基因表达模式与整体预后不良相关，但治疗可缩小不同增殖组间的生存差异。
- 揭示一类Basal-like亚型患者具有出乎意料的良好预后，与独特的治疗响应基因特征相关，提示传统临床分类未能捕捉的关键分子异质性。

**🔍 Critical 简评**：⭐⭐⭐
TDA方法近年来在基因组数据分析中逐步渗透，但大规模临床生存分析应用仍较稀缺。本研究用Mapper算法将高维基因表达"压缩"为可解释的网络拓扑图，直观呈现患者分子异质性与临床预后的关联，是计算生物学方法转化的有价值尝试。主要局限在于非洲团队数据的可重复性需独立队列验证，且Mapper算法参数选择对结果影响较大，缺乏标准化流程。未来方向应将此框架扩展至其他癌种，并探索与空间组学数据的整合。

---

### 🔬 论文 3：TMEformer——空间肿瘤微环境感知深度学习框架实现虚拟扰动

**标题**：Mapping Tumor-Microenvironment dependencies with TMEformer: A spatial foundation framework enabling in silico perturbation

**作者**：Chen S., Zhu G., Yang L., Wei X., Li S., Liu P., et al.
**机构**：研究团队（机构信息需补充）
**平台**：bioRxiv (bioinformatics) | **日期**：2026-07-17 | **DOI**：10.64898/2026.05.17.725770
**链接**：https://www.biorxiv.org/content/10.64898/2026.05.17.725770v1

**一句话概要**：空间转录组+深度学习联合建模肿瘤内在程序与微环境信号，实现虚拟扰动预测肿瘤进展依赖关系。（36字）

**主要贡献**：
- 提出TMEformer——首个肿瘤微环境感知深度学习基础模型，将高分辨率空间转录组数据与肿瘤细胞内在程序联合建模，显式整合空间架构信息。
- 在多种肿瘤空间转录组数据集中验证，实现虚拟扰动（in silico perturbation）模拟，捕获局部微环境内的功能依赖关系。
- 提供可解释的扰动预测结果，支持靶向治疗策略探索，为肿瘤精准治疗提供计算新工具。

**🔍 Critical 简评**：⭐⭐⭐⭐
空间组学与AI的结合是当前肿瘤计算生物学最活跃的方向之一。TMEformer的核心创新在于"基础模型"定位——将空间转录组的预训练模型与肿瘤微环境特异性微调结合，实现虚拟扰动预测。相较于传统bulk RNA-seq或单细胞方法，其显式建模空间架构是关键差异化优势。局限在于依赖高质量空间转录组数据（成本较高），且虚拟扰动的生物学验证尚未充分。值得关注的方向：与CRISPR筛选数据整合，或扩展至免疫治疗响应预测。

---

### 🔬 论文 4：CADD-SV v2.0——整合序列特征的结构变异有害性评分框架

**标题**：Coordinate- and Sequence-Based Features for a new Combined Annotation-Dependent Depletion Framework of Structural Variants (CADD-SV v2.0)

**作者**：Catona O., Kircher M.
**机构**：University of Lübeck, Institute of Human Genetics, University Hospital Schleswig-Holstein, Germany
**平台**：bioRxiv (bioinformatics) | **日期**：2026-07-17 | **DOI**：10.64898/2026.07.08.736040
**链接**：https://www.biorxiv.org/content/10.64898/2026.07.08.736040

**一句话概要**：统一随机森林模型整合坐标+序列深度学习特征，实现全类型结构变异有害性评分与全基因组规模解读。（36字）

**主要贡献**：
- 提出CADD-SV v2.0——基于扩展proxy-neutral和proxy-deleterious变异的统一随机森林框架，评分Deletions、Insertions、Duplications和Inversions全类型结构变异（SV）有害性。
- 整合约束度量、调控元件注释和染色质架构特征等更新基因组注释，并引入SegmentNT深度学习模型提供的核苷酸分辨率序列功能预测作为补充特征。
- 相比前版和其他工具显著提升主要SV类型的致病变异优先排序能力，同时大幅优化计算流程效率。

**🔍 Critical 简评**：⭐⭐⭐⭐
结构变异（SV）的功能解读是基因组学的核心难题之一。CADD-SV v2.0的核心贡献在于：①从"单一SV类型"扩展到"全类型统一评分"；②引入序列深度学习特征（SegmentNT）作为坐标特征的补充，实现了序列→功能→有害性评分的端到端链条。Martin Kircher团队的CADD系列一直是变异解读的标准工具，此次v2.0对SV的扩展填补了重要空白。局限：依赖高质量注释数据库，对新发或罕见SV的覆盖度仍有提升空间；建议结合长读长测序数据进行验证。

---

### 🔬 论文 5：GO-CRE——深度强化学习驱动的可解释顺式调控元件设计框架

**标题**：Reconstructing sequence-grammar trajectories enables interpretable and tunable cis-regulatory element design

**作者**：Ma M., Bu W., Liu G., Liu Y., Liu S., Zhao Z., et al.
**机构**：研究团队（机构信息需补充）
**平台**：bioRxiv (genomics) | **日期**：2026-07-17 | **DOI**：10.64898/2026.07.10.737719
**链接**：https://www.biorxiv.org/content/10.64898/2026.07.10.737719

**一句话概要**：深度学习+强化学习重建顺式调控元件迭代优化轨迹，实现可解释、可调参的细胞类型特异性CRE设计。（39字）

**主要贡献**：
- 提出GO-CRE（Guided Optimization of Cis-Regulatory Elements）框架，整合高效序列生成、预测引导的强化学习（RL）和轨迹级解释，破解CRE设计"黑箱"难题。
- 重建CRE迭代优化序列变化的"grammar轨迹"，揭示调控语法的涌现机制和失败轨迹的纠正路径。
- 支持可解释的调控语法编辑和细胞类型特异性设计，为精准基因治疗和合成生物学提供可操控的元件设计工具。

**🔍 Critical 简评**：⭐⭐⭐⭐
顺式调控元件（CRE）设计是合成基因组学的核心挑战，传统方法依赖经验性试错，缺乏可解释性。GO-CRE的核心创新在于将RL的探索能力与序列生成结合，同时提供轨迹级别的可解释性——研究者可追溯"从失败到成功的每一步优化路径"。这对基因治疗载体优化和细胞命运工程有重要应用价值。局限：目前主要在计算验证层面，体内实验验证数据尚待补充；不同细胞类型的泛化能力也需系统评估。值得关注：将GO-CRE与大规模并行报告基因分析（MPRA）数据结合，可进一步加速元件筛选。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | Pan-cancer NET-associated immunothrombosis coupling (10.64898/2026.07.14.738403) | NETs, 肿瘤免疫血栓, 中性粒细胞 | 9,496 TCGA泛癌NET评分，揭示中性粒细胞不可还原肿瘤生态 |
| medRxiv | Single-cell gene programs define subtype identity and metastatic trajectories in renal cell carcinomas (10.64898/2026.07.14.26357682) | 单细胞, 肾癌, 转移轨迹 | RCC单细胞泛癌图谱，转移轨迹建模 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-07-16 00:00 UTC ~ 2026-07-18 00:00 UTC*
