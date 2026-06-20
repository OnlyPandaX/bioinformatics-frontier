# 🧬 多组学研究简报
**2026年6月21日（周日）| 近48小时精选**

> 搜索范围：2026-06-19 ~ 2026-06-21 | 数据源：Nature, ArXiv, bioRxiv, medRxiv

---

## 📊 整体趋势评述

本期48小时窗口内的研究呈现两条清晰主线：一是**表观遗传调控的跨尺度解析**——从 ape 种系 DNA 甲基化组到果蝇染色质绝缘语法，再到大鼠胸腺上皮 HIVEP3 调控中枢耐受，均利用 T2T 组装或跨物种染色质可及性数据揭示非编码区功能；二是**单细胞功能基因组学的方法学深化**——PertCurve 将离散扰动标签升级为连续轨迹建模、Morpho-FM 用转录组基础模型先验桥接 H&E 与空间表达、固有免疫转录遗传性研究揭示单细胞表达状态的跨代遗传机制。整体反映出领域正从"描述性图谱"向"机制性+预测性建模"纵深推进。

---

## 📑 精选论文

### 🔬 论文 1：类人猿种系低甲基化塑造动态 CpG 水库

**标题**：Germline hypomethylation shapes dynamic CpG reservoirs in ape genomes

**作者**：Son, D. R.; Loh, E. Y.-H.; Jeong, H.; Ma, J.; Eichler, E. E.; Yi, S. V.
**机构**：University of California, Santa Barbara（通讯：Soojin V. Yi）
**平台**：bioRxiv | **日期**：2026-06-19 | **DOI**：10.64898/2026.06.15.732472
**链接**：https://doi.org/10.64898/2026.06.15.732472

**一句话概要**：整合 T2T 类人猿基因组组装与长/短读长 DNA 甲基化组，揭示种系低甲基化区在结构动态区域形成 CpG 水库并促进新基因和组织特异性表达。

**主要贡献**：
- 发现着丝粒卫星 DNA 在精子中广泛低甲基化，并向相邻非卫星区延伸形成 CHED（Centromeric Hypomethylated Extension Domain），富集近期复制基因且在脑和睾丸中高表达
- 证明谱系特异性插入、近期片段重复和结构分歧区同样是 CpG 富集且种系低甲基化的，充当基因组进化的"瞬时 CpG 水库"
- 确立种系 DNA 甲基化的双重角色：长期驱动全基因组 CpG 侵蚀，同时在结构动态区维持 CpG 富集语境以促进进化创新

**🔍 Critical 简评**：⭐⭐⭐⭐
T2T 时代之前，着丝粒和片段重复区在表观基因组学中基本是"暗物质"。本研究利用完整组装系统性地绘制了跨物种种系甲基化图谱，发现着丝粒低甲基化并非随机噪音而是可延伸的功能域。Eichler 实验室的参与保证了结构变异分析的质量。**突破点**在于将"结构动态区"与"CpG 进化水库"两个概念统一在同一表观遗传框架内。**局限**：目前仅覆盖少数类人猿物种，未直接测试 CHED 对基因调控的因果效应（仅关联分析）；转座元件与 CHED 的关系有待进一步解耦。值得关注的 future work 是将 CHED 与疾病相关非编码变异关联，探索是否为人类结构性变异的热点。

---

### 🔬 论文 2：Morpho-FM 利用转录组基础模型先验从 H&E 重建空间分子图谱

**标题**：Morpho-FM: spatial molecular reconstruction from routine H&E histology using transcriptomic foundation-model priors

**作者**：Huang, J.-J.; Feng, X.; Qu, L.-H.; Zheng, L.-L.
**机构**：Sun Yat-sen University（通讯：Ling-Ling Zheng）
**平台**：bioRxiv | **日期**：2026-06-19 | **DOI**：10.64898/2026.06.15.732498
**链接**：https://doi.org/10.64898/2026.06.15.732498

**一句话概要**：弱监督框架将预训练单细胞转录组基础模型先验与 H&E 组织形态学特征对齐，实现全切片空间基因表达预测。

**主要贡献**：
- 提出转录组基础模型先验作为弱监督约束，避免了从头训练配对 H&E-空间转录组模型的过拟合问题
- 在前列腺癌基准上达到单基因 Pearson 相关 0.286（旋转评估）和 0.298（多片验证），在五种方法中总体最优
- 在乳腺癌 Xenium 和 HER2ST 数据集上恢复 ERBB2 富集肿瘤区、边界分子梯度和组织域注释，并在肾癌和透明细胞肾癌上展示外推能力

**🔍 Critical 简评**：⭐⭐⭐⭐
H&E → 空间转录组重建是计算病理学的核心问题之一，但现有方法多在小配对队列上从头训练，泛化能力弱。**Motivation** 源于转录组基础模型已学到丰富的基因-基因共变结构，可作为形态学解码的"正则化先验"。**突破点**在于消融实验明确证明预训练转录组初始化的贡献超过更换组织学特征骨干——这为"基础模型迁移"优于"架构工程"提供了直接证据。**局限**：平均 Pearson 0.28-0.30 仍属中等水平，且跨癌种迁移后性能下降明显（0.210），提示组织异质性仍是主要瓶颈；未与最新的自监督病理基础模型（如 UNI、Virchow）进行系统比较。Future work 应探索多模态联合训练而非先冻结后微调的两阶段范式。

---

### 🔬 论文 3：固有免疫中可遗传单细胞转录状态塑造功能异质性

**标题**：Heritable single-cell gene expression states shape functional variability in innate immune responses

**作者**：Redondo Marin, J. A.; Nguyen, T. C.; Alachkar, N.; Moran, J.; Srivastav, A.; Kochanczyk, M.; Muldoon, M.; Roberts, I.; Krawczyk-Balska, A.; Singh, A.; Paszek, P.
**机构**：Polish Academy of Science（通讯：Pawel Paszek）
**平台**：bioRxiv | **日期**：2026-06-19 | **DOI**：10.64898/2026.06.17.732820
**链接**：https://doi.org/10.64898/2026.06.17.732820

**一句话概要**：整合转录组学、高内涵成像和数学建模，揭示巨噬细胞 TLR 通路中特定基因的转录遗传性可持续 25+ 细胞分裂并影响感染易感性。

**主要贡献**：
- 通过 RNA-seq 波动测试鉴定出 TLR4 依赖基因子集（包括细胞因子和免疫效应因子）在克隆巨噬细胞群体中保持超过 25 次分裂的转录遗传性
- 发现 CD36（细菌识别和脂质摄取清道夫受体）呈稳定、细胞密度增强的可遗传状态，而 IL1β 炎症程序则呈瞬时性——遗传性在克隆扩展中衰减
- 证明 CD36 表达决定对单核细胞增生李斯特菌感染的克隆易感性，将转录遗传性与免疫功能异质性因果关联

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
这是一个概念性突破。单细胞转录组异质性通常被归因于"噪声"或"微环境"，但本研究通过经典的 fluctuation test（源自群体遗传学）在哺乳动物免疫细胞中直接量化了转录遗传性的存在与持久性。**突破点**在于：(1) 区分了稳定（CD36）与瞬时（IL1β）两类可遗传状态，挑战了"单细胞异质性=随机"的简单假设；(2) 将遗传性直接与感染结局因果关联。CD36 的细胞密度依赖性提示旁分泌正反馈机制——这在高密度组织中可能形成空间模式化，类似发育生物学中的侧抑制。**局限**：目前在巨噬细胞系中验证，原代免疫细胞的表观遗传记忆机制是否一致待确认；数学模型的参数化较粗糙。这项工作为理解慢性炎症中"克隆印记"和先天免疫训练提供了新框架。

---

### 🔬 论文 4：PertCurve 建模连续转录响应轨迹并提升遗传扰动预测

**标题**：Perturbation Curve models continuous transcriptional response trajectories and improves prediction of genetic modulations

**作者**：Zhong, Y.; Wang, L.; Yang, G.; Yu, L.; Qi, X.; Jiang, H.
**机构**：The University of Hong Kong（通讯：Haibo Jiang）
**平台**：bioRxiv | **日期**：2026-06-19 | **DOI**：10.64898/2026.06.16.732192
**链接**：https://doi.org/10.64898/2026.06.16.732192

**一句话概要**：非线性曲线框架显式建模 Perturb-seq 中连续扰动强度，揭示基因响应的原型模式并提升扰动预测。

**主要贡献**：
- 提出 PertCurve 框架，将 Perturb-seq 中通常作为离散标签处理的扰动赋值升级为连续曲线轨迹建模，显式纳入扰动幅值多样性
- 识别出三类基因响应原型：比例型（proportional）、敏感型（sensitive）和阈值型（threshold），揭示下游基因行为的模块化和异步性
- 将 PertCurve 整合进扰动预测模型和评估指标，在 CRISPRi/a 多种模态中提升预测性能，并发现病毒感染、凋亡和增殖基因的通用响应模式

**🔍 Critical 简评**：⭐⭐⭐⭐
Perturb-seq 数据分析的一个根本矛盾是：实验设计中扰动是"离散"的（有/无 sgRNA），但生物体内的有效扰动强度是"连续"的（sgRNA 效率、拷贝数、表观沉默）。**突破点**在于将这一连续性从"噪声"转化为"信号"——通过按扰动强度排序细胞，提取响应轨迹的原型模式。这概念上与单细胞轨迹推断（pseudotime）有共鸣，但因果方向不同：这里是扰动强度而非时间驱动轨迹。三类响应原型的分类有实际意义，特别是阈值型响应暗示了分子开关的存在。**局限**：框架的有效性依赖于可靠的扰动强度估计（sgRNA 效率评分），低质量 CRISPR 文库可能引入偏差；缺乏与最新虚拟细胞模型（如 AIVC、tahoe-scale）的系统比较。将 PertCurve 用于多组学扰动数据（如同时 Perturb-seq + ATAC-seq）将是有价值的 next step。

---

### 🔬 论文 5：跨物种染色质可及性定位 HIVEP3 为胸腺上皮成熟和自身抗原表达驱动因子

**标题**：Cross-species chromatin accessibility pinpoints HIVEP3 as a driver of thymic epithelial maturation and self-antigen expression, preventing chronic inflammation

**作者**：Yayilkan, S.; Massoda, M.; Menoret, S.; You, A.; Brusselle, L.; Usal, C.; Tesson, L.; Rouel, M.; Couzy, F.; Padonou, F.; Zamit, C.; Santamaria, J.; Maminirina, P.; Baron, O.; Jullien, J.; Poschmann, J.; Irla, M.; Anegon, I.; Giraud, M.
**机构**：Center for Research in Transplantation and Translational Immunology, UMR 1064（通讯：Matthieu Giraud）
**平台**：bioRxiv | **日期**：2026-06-19 | **DOI**：10.64898/2026.06.16.732438
**链接**：https://doi.org/10.64898/2026.06.16.732438

**一句话概要**：跨物种（人/鼠/大鼠）单细胞染色质可及性分析鉴定 HIVEP3 为胸腺髓质上皮细胞成熟和自身抗原表达的新调控因子，其缺失导致全身 T 细胞介导慢性炎症。

**主要贡献**：
- 利用跨物种 scATAC-seq 在人、小鼠和大鼠 TEC 中发现 HIVEP 基序是 mTEC 谱系中最高可及性的调控元件之一
- 生成 CRISPR Hivep3 敲除大鼠（选择大鼠因其免疫更接近人类），证明 Hivep3 缺失损害 mTEC 成熟、降低 Aire 表达并重塑自身抗原（TSA）库
- 揭示 Hivep3 通过约束经典 NF-κB1 和维持非经典 NF-κB2 来调控 mTEC 成熟；Hivep3 缺失导致随年龄进展的多器官 CD3+ T 细胞浸润和慢性炎症

**🔍 Critical 简评**：⭐⭐⭐⭐
AIRE 作为自身免疫中枢耐受的关键调控因子已为人知，但 AIRE 独立的 TSA 表达途径一直不明确。本研究通过跨物种染色质可及性比较，将焦点从"单一物种 motif 扫描"升级为"进化保守性功能筛选"。**突破点**：选择大鼠而非小鼠作为功能验证模型是明智之举——大鼠免疫更接近人类，且小鼠中 Hivep3 表型可能较微妙。**局限**：跨物种 ATAC-seq 的细胞类型对应映射仍依赖 marker gene，可能遗漏物种特异细胞亚型；HIVEP3 在人类自身免疫病中的变异关联尚未验证。值得关注的 future work 是在 APECED/APS-1 患者（AIRE 突变）中筛查 HIVEP3 变异作为修饰因子，以及在肿瘤免疫治疗中评估 HIVEP3 对胸腺稳态重建的影响。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | Domino: Sequence-to-function modeling of Drosophila chromatin insulation | 深度学习, 染色质绝缘, 3D基因组 | Princeton/Pritykin, 24基序解释59%边界 |
| bioRxiv | Simulation-based Bayesian deep learning for cfDNA tumor fraction estimation | 液体活检, cfDNA, 贝叶斯深度学习 | Tel Aviv University |
| bioRxiv | ContinuumCellAgent: Framework-Guided Agent for Long-Horizon Scientific Research | AI Agent, 单细胞, 自动化研究 | WashU, 框架引导长时程科研 |
| bioRxiv | Cross-species chromatin accessibility + HIVEP3 | 跨物种, 染色质可及性, 中枢耐受 | 见论文5 |
| ArXiv | scGTN: Deep Siamese Graph Transformer for scRNA-seq Clustering | 单细胞, 图Transformer, 聚类 | cs.LG/q-bio.GN |
| ArXiv | Can neurons speak? Semantic narration of vision at single-cell resolution | 单细胞, 语义解码, 视觉皮层 | q-bio.NC/QM |
| medRxiv | Reassessing Instrument Strength in Two-Sample Mendelian Randomization | 孟德尔随机化, 弱工具变量 | Harvard |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-06-19 00:00 UTC ~ 2026-06-21 00:00 UTC*
