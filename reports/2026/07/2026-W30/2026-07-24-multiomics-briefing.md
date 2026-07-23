# 🧬 多组学研究简报
**2026年7月24日（周五）| 近48小时精选**

> 搜索范围：2026-07-22 ~ 2026-07-24 | 数据源：bioRxiv, medRxiv, ArXiv, Nature

---

## 📊 整体趋势评述

本期简报聚焦三大方向：① APOE4 作为 AD 最强遗传风险因子，其破坏蛋白质稳态的机制终于在 proteome/translatome 层面被系统性揭示；② HPRC2 发布人类图泛基因组第二版，近完整覆盖人群常见变异，是基因组学基础设施的重大里程碑；③ 多个深度学习框架（ProtSyntax、LATTICE、scVision）继续扩展蛋白语言模型和空间组学边界，推动计算生物学从描述走向预测设计。

---

## 📑 精选论文

### 🔬 论文 1：HPRC2 — 人类图泛基因组参考新基准

**标题**：HPRC2: A human pangenome reference with near-complete coverage of common genetic variation

**作者**：Lucas, J. K.; Hebbar, P.; Liao, W.-W.; Macias-Velasco, J. F.; Novak, A. M.; Asri, M.; Ebler, J.; Garrison, E.; et al.
**机构**：Human Pangenome Reference Consortium（HPRC），美国 NIH 资助
**平台**：bioRxiv (genomics) | **日期**：2026-07-22 | **DOI**：10.64898/2026.07.21.739710
**链接**：https://doi.org/10.64898/2026.07.21.739710

**一句话概要**：人类图泛基因组第二版将基因组数量扩大约5倍，显著提升基因组完整性和连续性，实现常见遗传变异近完整覆盖。

**主要贡献**：
- 贡献1：HPRC2 纳入约95个单倍型基因组（相较 HPRC1 约5倍扩增），通过原则性采样算法优先选择高覆盖度样本，使常见变异覆盖度大幅提升。
- 贡献2：提供首个测量基因组"完整性-连续性-准确性"三维帕累托前沿的评估框架，确保图泛基因组的实用性不因追求某一项指标而牺牲其他。
- 贡献3：开放获取（CC-BY），可直接用于变异检测、群体遗传学、临床基因组学等下游分析，重在对线性参考基因组的系统性纠偏。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
近十年基因组学最大基础设施更新之一。线性参考基因组（GRCh38）本质上只是一个"平均个体"，对非欧洲人群存在系统性参照偏差。HPRC1（2023）迈出第一步，但覆盖变异有限；HPRC2 则真正意义上接近"人人可用"的群体级参考。关键意义在于：任何基于图泛基因组的变异检测工具（如 vg、GraphTyper）均可直接受益，罕见病诊断和祖先特异性变异调用将显著改善。不过，当前95个单倍型仍远不足以覆盖全球遗传多样性（全人类估计约20万至百万个基因组变异），期待第三阶段扩展至千级样本。Future work 应聚焦：扩展非洲和南亚人群代表性，以及图泛基因组在临床 WGS 流程中的标准化集成。

---

### 🔬 论文 2：APOE4 全面破坏神经蛋白质组更新

**标题**：APOE4 disrupts the central dogma by arresting neuronal proteome dynamics

**作者**：Krogsaeter, E. K.; McKetney, J.; Lishi Li, L.; Liu, I.; Richards, A. L.; Swaney, D. L.; et al.
**机构**：UCSF / CZ Biohub / UC San Diego（推断，通讯作者 Swaney DL 为 UCSF 系统生物学系）
**平台**：bioRxiv (neuroscience) | **日期**：2026-07-22 | **DOI**：10.64898/2026.07.15.738801
**链接**：https://doi.org/10.64898/2026.07.15.738801

**一句话概要**：APOE4 等位基因破坏神经元核糖体占据和翻译动态，导致数千基因的蛋白-转录本解耦，揭示 AD 风险的蛋白质稳态崩溃新机制。

**主要贡献**：
- 贡献1：整合转录组（RNA-seq）、翻译组（Ribo-seq/翻译组学）和蛋白质组（液相色谱-质谱），对等基因型 APOE3/4 iPSC 衍生神经元进行三组学联合分析，发现转录层面变化温和，但蛋白质层面影响剧烈。
- 贡献2：APOE4 破坏核糖体占据（ribosome occupancy），改变翻译动力学，导致蛋白-转录本水平在数千基因上出现系统性解耦（protein-transcript decoupling）。
- 贡献3：揭示 APOE4 通过损害蛋白质翻译保真度和更新速率（protein turnover）驱动神经元蛋白质稳态（proteostasis）全面崩溃，这一机制此前未被系统性描述。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
APOE4 是晚发型阿尔茨海默病（LOAD）最强遗传风险因子，约 15% 人群携带纯合子，风险提升 12 倍。既往研究多聚焦脂质代谢和免疫反应，而本文首次在三组学层面揭示翻译机制为核心破坏路径——"转录变化小，蛋白变化大"这一不对称性是关键突破口。这解释了为何单纯基因表达分析难以完全捕捉 APOE4 致病性，也为 proteostasis 恢复疗法（如蛋白质稳态激活剂）提供了明确靶点。局限性：iPSC 衍生神经元与真实脑神经元存在差距，且仅比较了 APOE3/4，未覆盖 APOE2（保护性等位基因）。值得关注的 future work：是否 APOE4 的翻译损伤在老年人脑中因蛋白质质量控制系统衰退而加速恶化，以及靶向翻译机制的干预能否逆转认知缺陷。

---

### 🔬 论文 3：ProtSyntax — 蛋白语言模型解码 PTM 语法

**标题**：ProtSyntax: a protein large language model for decoding post-translational modification syntax and function

**作者**：（第一/通讯作者信息从摘要推断，常州大学团队）
**机构**：Changzhou University（常州大学）
**平台**：bioRxiv (bioinformatics) | **日期**：2026-07-21 | **DOI**：10.64898/2026.07.18.739331
**链接**：https://doi.org/10.64898/2026.07.18.739331

**一句话概要**：专用蛋白语言模型 ProtSyntax 首次学习 PTM 语法规则，通过注意力机制揭示修饰依赖的蛋白功能调控模式。

**主要贡献**：
- 贡献1：训练专用蛋白语言模型学习 PTM 语法（syntax），将磷酸化、乙酰化、泛素化等修饰位点的上下文依赖关系编码为可解释表示。
- 贡献2：注意力权重分析揭示 PTM 之间的位置约束关系和跨位点调控模式，识别哪些 PTM 组合具有协同或拮抗效应。
- 贡献3：提供 PTM 功能预测工具，可辅助解释质谱数据中的修饰位点，以及预测未知 PTM 的功能影响。

**🔍 Critical 简评**：⭐⭐⭐⭐
PTM 是蛋白质功能调控的核心机制，质谱每年产出数百万 PTM 位点数据，但超过 80% 的位点功能未知。传统方法依赖序列保守性和实验验证，效率极低。ProtSyntax 的核心价值在于：用语言模型的范式将 PTM 语法形式化——修饰不是孤立事件，而是具有"语法依赖"的上下文事件。注意力机制的引入使得模型具有可解释性（vs. 黑箱神经网络）。需注意：常州大学是主要机构，与国际主流（DeepMind、Genentech）有所不同，模型规模、预训练数据规模和 benchmark 覆盖范围需要进一步验证。Future work：能否与 AlphaFold3 结合，将 PTM 语法预测嵌入结构预测框架，实现"结构-修饰-功能"三位一体预测。

---

### 🔬 论文 4：空间组学图自监督整合 — LATTICE

**标题**：LATTICE: Graph Self-Supervised Learning for Multimodal Spatial Omics Integration

**作者**：Dwarampudi, J. M. R.; Kochat, V.; Satpati, S.; et al.
**机构**：IIT Hyderabad（印度理工学院海得拉巴分校）/ NCBS Bangalore（印度国家生物科学中心）
**平台**：ArXiv (q-bio.BM) | **日期**：2026-07-15（v2: 2026-07-19）| **ArXiv ID**：2607.14410
**链接**：https://arxiv.org/abs/2607.14410

**一句话概要**：图自监督学习框架统一整合 5 种空间组学模态，消除平台批次效应，实现跨实验技术的数据联合分析。

**主要贡献**：
- 贡献1：提出基于图神经网络的邻域图（neighborhood graph）构建方法，将空间坐标信息显式编码为先验结构。
- 贡献2：对比学习（contrastive learning）自监督预训练策略，实现跨平台（MERFISH/Visium/Xenium 等）空间组学数据的统一嵌入，无需标注数据。
- 贡献3：在 5 种不同空间组学技术的数据集上验证，显著优于单模态分析，发现跨模态联合分析能识别单一模态无法捕获的共定位关系。

**🔍 Critical 简评**：⭐⭐⭐⭐
空间组学是 2023-2026 年最活跃的组学技术领域，但不同平台（Visium 空间分辨率 ~55μm，MERFISH ~10μm，Xenium ~0.2μm）数据难以直接整合是核心瓶颈。LATTICE 用图结构自然编码空间关系，比传统的欧氏距离矩阵更适合处理不规则采样和缺失数据。印度团队的工作值得关注——他们选择了相对被忽视的"整合"问题，而非跟随主流追逐更高的分辨率或新模态。局限性：自监督学习的效果高度依赖负样本选择策略，且当前 benchmark 仅覆盖有限生物情境。Future work：能否与 scGPT、scFoundation 等细胞语言模型联合使用，实现"空间+细胞类型+扰动"的联合嵌入空间。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | Integrative structure determination of MICOS sub-assembly（7/22） | 整合结构生物学，线粒体 | AlphaFold+交联质谱，贝叶斯整合方法 |
| bioRxiv | DNA methylation variants with tissue specificity（7/21） | 甲基化变异，表观遗传 | BITS Pilani Hyderabad，12,587个新变异区域 |
| medRxiv | MMM approach for childhood-onset neuro disorders（7/22） | 多组学机器学习，儿童神经 | Kurian 团队（UCL / Great Ormond Street）|
| ArXiv | scVision: vision transformer for single-cell biology（7/15） | 视觉Transformer，单细胞 | Stanford James Zou 团队，72M细胞预训练 |
| ArXiv | Causal ASCEND: scalable two-tier causal discovery（7/6 v2） | 因果发现，多组学 | 多项式复杂度，基因组尺度因果推断 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-07-22 00:00 UTC ~ 2026-07-24 00:00 UTC*
