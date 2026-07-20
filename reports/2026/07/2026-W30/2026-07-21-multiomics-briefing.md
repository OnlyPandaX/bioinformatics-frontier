# 🧬 多组学研究简报
**2026年7月21日（周二）| 近48小时精选**

> 搜索范围：2026-07-19 ~ 2026-07-21 | 数据源：Nature (Scientific Reports), bioRxiv, medRxiv, ArXiv q-bio

---

## 📊 整体趋势评述

本期主线是「多组学整合从描述走向机制解释与基础建模」：三篇人/动物研究（产前大麻暴露、压力应激、雷公藤红素）均以转录组–蛋白质组–代谢组–微生物组的组合回答具体生物学问题，体现多组学正在成为回答因果与机制问题的标准配置；与此同时，两篇方法/AI 工作（CpGPT 甲基化基础模型、组织形态学与空间转录组的跨模态量化）标志表观基因组与空间组学基础建模进入快车道。值得注意，本期 Nature 系与 bioRxiv 的多组学论文高度集中于「人以脑/应激为中心」与「AI 统一建模」两大方向。

---

## 📑 精选论文

### 🔬 论文 1：雷公藤红素通过多组学重塑改善阿尔茨海默病大鼠认知

**标题**：Integrating transcriptome, metabolome and 16S rRNA sequencing to reveal the effect of celastrol on Alzheimer's disease in rats

**作者**：Yan Wang, Lan Liu, Yongcang Zhang, Ping Luo, Qin Xiang, Liang Tang, et al.
**机构**：（通讯作者机构信息未能从可访问页面确认；署名单位编号 1–3）
**平台**：Scientific Reports (Nature) | **日期**：2026-07-20 | **DOI**：10.1038/s41598-026-61602-7
**链接**：https://doi.org/10.1038/s41598-026-61602-7

**一句话概要**：雷公藤红素通过重塑转录组、代谢组与肠道菌群改善阿尔茨海默病大鼠认知。

**主要贡献**：
- 建立 D-半乳糖 + Aβ25-35 阿尔茨海默病大鼠模型，2.8 mg/kg 雷公藤红素显著缩短水迷宫逃避潜伏期（p < 0.05）并减轻海马神经元损伤（Nissl 染色）。
- 联合转录组 + 代谢组 + 16S rRNA 测序，用 Spearman 相关整合转录组–代谢组与 16S–代谢组数据，定位雷公藤红素调控的关键 RNA–代谢物–菌群轴。
- 多组学层面显示雷公藤红素降低 Iba1、Aβ1-42、p-tau 表达，阐明其神经保护机制。

**🔍 Critical 简评**：⭐⭐⭐☆☆
经典多组学整合范式，将转录、代谢、菌群三模态统一到同一药效解释框架，但本质是「机制确认型」工作——假设已知、结论符合预期，创新主要在于整合而非新发现。历史上面向 AD 的多组学药物机制研究已较密集，本文增量有限；且页面注明属「unedited manuscript」早期版本，方法细节与统计强度仍待最终版确认。优势在于物种/剂量梯度完整、可复现性强，对中药单体机制研究有示范价值。

---

### 🔬 论文 2：产前大麻暴露在人胎儿脑中留下整合多组学分子印记

**标题**：Prenatal cannabis exposure affects human fetal neurodevelopment: an integrated multi-omics study

**作者**：Kahlert, G.; Chen, X.; Bammler, T. K.; MacDonald, J. W.; Benson, L. S.; Glass, I. A.; Dempsey, J. C.; Singh, D. K.; Prasad, B.; Unadkat, J. D., et al.
**机构**：University of Washington
**平台**：bioRxiv | **日期**：2026-07-20 | **DOI**：10.64898/2026.07.15.738779
**链接**：https://doi.org/10.64898/2026.07.15.738779

**一句话概要**：产前大麻暴露于人类早孕/中孕胎儿脑中留下可检测的多组学分子印记。

**主要贡献**：
- 对有无母体大麻暴露的第一（T1）、第二（T2）孕期人胎儿脑应用整合转录组 + 全局蛋白质组学分析。
- 发现产前大麻暴露引发胎儿脑特定分子通路与蛋白表达改变（基于摘要推断）。
- 以多组学方法在分子层面刻画观察性流行病学难以控制的混杂，提供非成瘾药物暴露的因果层次神经发育证据。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
直接采用人胎儿真实组织、规避观察性研究混杂，是本研究最大的方法论优势，转化与公共卫生意义突出。动机清晰：大麻产前使用率上升而分子机制长期空白。突破点在于把暴露效应落到可量化的转录–蛋白联合图谱。局限在于人胎儿样本可及性导致样本量受限、个体与孕周变异需谨慎，且摘要未给出具体通路名称，需等待全文与独立队列验证才能确立因果结论。

---

### 🔬 论文 3：CpGPT——面向 DNA 甲基化的基础模型

**标题**：CpGPT: a Foundation Model for DNA Methylation

**作者**：de Lima Camillo, L. P.; Sehgal, R.; Armstrong, J.; Melnikas, M.; Miller, H. E.; Ding, J.; Ferrucci, L.; Lasky-Su, J. A.; Higgins-Chen, A. T.; Horvath, S.; Wang, B., et al.
**机构**：Shift Bioscience / University of Cambridge
**平台**：bioRxiv | **日期**：2026-07-20 | **DOI**：10.1101/2024.10.24.619766
**链接**：https://doi.org/10.1101/2024.10.24.619766

**一句话概要**：CpGPT 以 Transformer 预训练全基因组 DNA 甲基化，统一表观基因组学基础模型任务。

**主要贡献**：
- 提出 CpGPT（CpG Pretrained Transformer），在海量 DNA 甲基化数据上预训练，学习全基因组甲基化模式的共享表示。
- 支持跨批次、跨平台、跨组织的甲基化建模与下游任务（基于摘要推断）。
- 将基础模型范式从基因组序列 / 单细胞转录组拓展到表观基因组，填补甲基化基础模型的空白。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
表观基因组基础模型的关键一步，由 Horvath 等表观遗传时钟权威团队背书，可信度高。历史上面向序列（DNABERT、Evo）与转录组（scGPT、GeneFormer）的基础模型已较成熟，但甲基化作为高发、跨平台、强表型相关的维度长期缺位统一模型。突破点是把「甲基化时钟 / 年龄 / 疾病」等异质任务收归到一个预训练骨干。局限在于预训练语料的分布偏差可能影响罕见组织与疾病的迁移，且需明确与既有时钟（如 PhenoAge、DunedinPACE）的增益边界。值得持续跟踪其下游适配生态。

---

### 🔬 论文 4：量化组织形态学与空间转录组的跨模态共享信息

**标题**：Quantifying Cross-Modal Shared Information Between Histomorphology and Spatial Transcriptomics via Spatiotemporal Trajectory Correlation

**作者**：He, X.; Feng, M.; Wang, A.; Huang, X.; Luo, X.; Liu, X.; Sun, T.; Wang, L.; Xu, K., et al.
**机构**：College of Computer Science and Technology, National University of Defense Technology, Changsha, China
**平台**：bioRxiv | **日期**：2026-07-19 | **DOI**：10.64898/2026.07.13.738201
**链接**：https://doi.org/10.64898/2026.07.13.738201

**一句话概要**：用时空轨迹相关量化组织形态学与空间转录组之间的跨模态共享信息。

**主要贡献**：
- 提出连续视角的轨迹重建方法，突破离散分割 / 空间域识别范式，跨模态、跨器官整合组织病理像与空间转录组。
- 定义形态–分子共享信息的量化指标，刻画两种模态在连续空间上的耦合（基于摘要推断）。
- 提供可同时分析多器官、多切片的一致分析框架，缓解单模态 / 单器官研究的信息孤岛。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
方法学创新点明确：把「病理影像 ↔ 空间组学」对齐从离散注释推进到连续轨迹相关，契合空间多组学从域划分走向连续场建模的趋势。动机扎实——组织 morphology 与分子表达本应连续耦合但长期被割裂分析。突破在跨器官通用性。局限在验证广度（摘要未给出跨癌种基准）与计算开销，且临床可解释性需进一步拆解。是连接计算病理与空间组学的务实接口，值得关注其能否落地到真实诊断工作流。

---

### 🔬 论文 5：压力「身份」决定人类血浆蛋白质组与代谢组的重编程方式

**标题**：Stressor identity shapes plasma proteomic and metabolic responses in humans

**作者**：Ebert, T., et al.
**机构**：Neurohomeostasis Research Group, Department of Psychiatry and Psychotherapy, University Hospital Bonn, Germany
**平台**：bioRxiv | **日期**：2026-07-20 | **DOI**：10.64898/2026.07.17.739102
**链接**：https://doi.org/10.64898/2026.07.17.739102

**一句话概要**：不同压力模态引发截然不同的人类血浆蛋白质组与代谢组重编程。

**主要贡献**：
- 纵向深度血浆蛋白质组 + 靶向代谢组，覆盖心理应激、受控身体应激、心理+身体联合（蹦极）三类范式。
- 发现心理应激几乎不改变血浆蛋白 / 代谢物谱，而身体应激触发快速、协调的蛋白质组重塑（基于摘要推断）。
- 揭示 HPA 轴激活程度与循环分子景观变化解耦，挑战「应激 = 统一分子响应」的默认假设。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
设计精巧的人体多组学压力研究，结论反直觉且具方法论启发：应激的「质」比「量」更决定分子输出。历史上面向应激的内分泌研究多聚焦 cortisol 单一轴，本研究把回路扩展到蛋白质组规模。突破点是区分心理 / 身体应激的分子指纹。局限在样本量与压力范式的代表性（蹦极属极端联合应激），且纵向时点分辨率决定能否捕捉瞬态峰值。对精神 / 心身疾病的生物标志物分层有实际意义。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | Tabular Foundation Models Are Competitive Cellular Perturbation Predictors Across Biological Scales | 扰动预测 / 表格基础模型 | 跨生物尺度细胞扰动预测，证明通用表格 FM 可媲美专用单细胞模型 |
| bioRxiv | Deep learning representations of human Immune Health for precision immunology | 深度学习 / 免疫健康 | 用深度学习表征 ~30–50 个免疫细胞态，迈向精准免疫分型 |
| bioRxiv | Brain Mecp2 Gene Dosage and Gene Therapy Shape Multi-Omic Signatures and Putative Biomarkers in Rett Syndrome | 多组学 / 雷特综合征 | MECP2 剂量与基因治疗重塑多组学特征，提示候选生物标志物 |
| medRxiv | Comprehensive molecular characterization of cutaneous squamous cell carcinoma reveals determinants of metastatic progression | 分子分型 / cSCC 转移 | 皮肤鳞癌转移进展的分子决定因素全景刻画 |
| medRxiv | Atlas of glomerular disease-specific genetic effects on blood transcriptome | 遗传 × 转录组 | 五种肾小球疾病的遗传效应对血液转录组图谱 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-07-19 00:00 UTC ~ 2026-07-21 00:00 UTC*
