# 🧬 多组学研究简报
**2026年8月2日（周日）| 近48小时精选**

> 搜索范围：2026-07-31 ~ 2026-08-02 | 数据源：bioRxiv, medRxiv, ArXiv

---

## 📊 整体趋势评述

本期简报聚焦四大主题：**空间多组学新技术**（Spatial Hi-C-RNA 实现染色质构象与转录组的同片共测）持续推动组织分辨率极限；**图泛基因组**进入关联分析实用化阶段（GraNPA 以少量个体完成 GWAS 质量定位）；**GWAS→单细胞精准映射**的计算框架（DPCGS）开始在阿尔茨海默病、哮喘等复杂疾病中展现临床解释力；**PTM 预测**在乳酸乳酸化这一新兴修饰上取得数据集+工具双突破。整体趋势看，空间与图谱技术正从"描述"走向"功能解析"，而 PTM 预测则受益于蛋白语言模型快速迭代。

---

## 📑 精选论文

### 🔬 论文 1：Spatial Hi-C-RNA — 同片近单细胞分辨率 3D 基因组 + 转录组共测

**标题**：Integrative spatial profiling of 3D genome organization and gene expression in tissue

**作者**：Guo, P.; Cui, Y.; He, J.; Waldman, A. J.; Zhu, J.; Chen, Y.; Huang, Z.; Zhou, J.; Phillips-Cremins, J. E.; Deng, Y.

**机构**：University of Pennsylvania（通讯：Yanxiang Deng）

**平台**：bioRxiv | **日期**：2026-07-31 | **DOI**：10.64898/2026.07.28.741242

**链接**：https://doi.org/10.64898/2026.07.28.741242

**一句话概要**：Spatial Hi-C-RNA 首次在同组织切片上近单细胞分辨率同时捕获染色质构象与转录组，开启空间 3D 基因组时代。

**主要贡献**：
- 发现1：Spatial Hi-C-RNA 首次实现同一组织切片上全基因组染色质构象（Hi-C）与转录组（RNA）的共检测，近单细胞分辨率，填补空间多组学在 3D 基因组层面的空白。
- 发现2：小鼠胚胎与成体大脑中，染色质组织与基因表达共同定义与组织学结构对齐的空间相干域，两种模态互补揭示调控层次：A/B compartment→TAD→loop 与细胞类型特异性转录程序逐级耦合。
- 发现3：在人黑色素瘤中，染色质构象域可识别转录组无法检测到的肿瘤亚域，证明 3D 基因组信息在解析肿瘤微环境异质性方面具有独立增量价值。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
空间组学近两年井喷式发展，但大多聚焦于转录组或表观基因组，3D 基因组（Hi-C）的空间化始终受困于"破坏组织才能测构象"的矛盾——这也是领域长期悬而未决的技术痛点。Spatial Hi-C-RNA 以近单细胞分辨率破解了这一限制，在小鼠胚胎（追踪细胞命运规范）和人黑色素瘤（识别肿瘤微环境 niche）两个迥异的系统中均展示了生物学发现力，意义不言而喻。值得关注的局限在于：目前仅覆盖 Hi-C+RNA，对于 ATAC-seq、蛋白组等更多模态的联用尚待扩展；近单细胞分辨率意味着还需要更精细的细胞分群方法来最大化利用其数据丰富度。未来方向上，作者已暗示可用于体外受精胚胎发育研究，这在精准医学中具有直接应用场景。

---

### 🔬 论文 2：DPCGS — GWAS 遗传风险精准映射到单细胞亚群

**标题**：DPCGS: a computational framework for linking GWAS to single-cell transcriptomics in complex traits and diseases

**作者**：Liu, C.; Shen, B.; Li, J.; Zhu, R.; Yang, P.; Wu, B.; Xuan, Y.; Yang, S.; Yuan, B.; Yang, N.; Ma, L.; Liu, Q.; Dai, S.; Zhang, Y.

**机构**：Kunming Institute of Zoology, Chinese Academy of Sciences（通讯：Yan Zhang）

**平台**：bioRxiv | **日期**：2026-07-20（实际平台上传日） | **DOI**：10.64898/2026.07.14.738331

**链接**：https://doi.org/10.64898/2026.07.14.738331

**一句话概要**：DPCGS 将 GWAS 遗传风险信号逐细胞精准映射，超越通路富集的粗粒度，锁定 CD74/FOS/AP-1 为 AD 和哮喘的细胞亚群驱动因子。

**主要贡献**：
- 贡献1：DPCGS 通过统计校准的基因集打分策略，在单细胞水平量化遗传优先基因的富集，实现从 GWAS→特定细胞亚群的精细化定位，精度优于 scDRS 和 scPagwas。
- 贡献2：阿尔茨海默病分析中锁定 CD74+ 小胶质细胞群体和 FOS/AP-1 调控程序；哮喘分析中识别疾病特异免疫亚群，为发病机制提供细胞层面遗传证据。
- 贡献3：模拟数据和多种真实单细胞数据集（涵盖不同组织、不同技术平台）上均表现稳健，框架具有良好的跨数据集泛化能力。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
GWAS 与单细胞数据的桥接是当前功能基因组学最核心的挑战之一。现有方法（MAGMA、LDSC-ctg）主要做通路或细胞类型级别关联，精度不足以支撑机制假设；而 scDRS 等单细胞工具在处理遗传风险信号时信噪比仍是瓶颈。DPCGS 的核心创新在于：基因集打分不再仅依赖通路注释，而是直接在细胞矩阵中量化遗传优先基因的表达密度，这是从"统计关联"走向"功能解读"的关键一步。AD 和哮喘的应用展示了临床解释力，尤其是 CD74 作为 MHC-II 相关分子已被多项 AD 研究关注，DPCGS 的细胞亚群证据为其增添了遗传学支持。局限方面：目前仅支持 scRNA-seq 数据，向 ATAC-seq、空间转录组等扩展是下一步关键；此外打分策略对 GWAS 汇总统计的质量依赖较高，低质量的 summary stats 可能放大假阳性。

---

### 🔬 论文 3：GraNPA — 图泛基因组上少量个体完成 GWAS 质量关联分析

**标题**：Pangenome Graph Node-Phenotype Association shows GWAS-like quality results with only few individuals

**作者**：Carrette, C.; Sabot, F.; Muller, C.

**机构**：IRD - French Institute for Sustainable Development（通讯：Francois Sabot）

**平台**：bioRxiv | **日期**：2026-08-01 | **DOI**：10.64898/2026.07.31.741971

**链接**：https://doi.org/10.64898/2026.07.31.741971

**一句话概要**：GraNPA 在图泛基因组节点上进行类 GWAS 关联分析，十几人即可定位致病变异，消除参考基因组偏倚，为小规模精准队列研究打开大门。

**主要贡献**：
- 贡献1：提出图节点表型关联（GraNPA）方法，将表型信息编码进图泛基因组（PVG）节点，定义节点表型评分（PS），通过 PS 分布显著偏移区域定位表型相关基因组区间。
- 贡献2：模拟数据验证准确率；在水稻 Sub1A 基因座（13人 PVG）和白头牛性状（24人 PVG）中，仅用十几至二十几个体的完整基因组即可精确定位致病变异，媲美传统 GWAS 结果。
- 贡献3：无需亲缘关系矩阵，无需额外群体材料，从根本上规避了传统方法中 variant calling 的参考偏倚问题。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
图泛基因组（GVP）近两年在植物基因组学中进展迅速（RefSeq v15 已整合多个物种的图基因组），但其应用长期停留在"更好地做比对"层面，真正进入"做关联分析"的实用化案例凤毛麟角。GraNPA 的意义在于：它证明图泛基因组本身就可以作为遗传学研究平台，而非仅仅是比对工具——这是一个思路上的范式转换。用 13-24 个体完成 GWAS 质量的关联定位，对稀有物种保护、作物育种（性状关联群体极小）等场景意义非凡。局限同样明显：目前仅支持二元性状，数量性状扩展是必争之地；另外 PS 的统计推断框架在样本量极小时（<20）需要更严格的显著性控制，否则多重检验膨胀会成问题。长远看，随着长读长测序成本下降，"十几个体全基因组测序→图基因组→关联定位"可能成为非模式物种遗传学研究的标准范式。

---

### 🔬 论文 4：CLEAR-Lactyl + AttentionKla — 首个高质量乳酸化数据集与 PTM 预测基础模型

**标题**：A curated human lactylome and protein language model framework enable accurate prediction and reveal local determinants of lysine lactylation

**作者**：Li, Z.; Huang, Y.; Shan, G.; Zuo, D.; Zhang, J.; Du, Y.; Zeng, D.; Wang, X.; Chen, L.; Fan, H.; Yao, G.

**机构**：Department of Thoracic Surgery, Zhongshan Hospital, Fudan University（通讯：Guangyu Yao）

**平台**：bioRxiv | **日期**：2026-07-31 | **DOI**：10.64898/2026.07.28.741267

**链接**：https://doi.org/10.64898/2026.07.28.741267

**一句话概要**：CLEAR-Lactyl 提供 16,604 个高质量赖氨酸乳酸化位点，AttentionKla 以蛋白语言模型显著超越现有工具，揭示乳酸化的序列决定因素。

**主要贡献**：
- 贡献1：CLEAR-Lactyl 是首个系统性整理的人类赖氨酸乳酸化基准数据集（16,604 阳 + 阴性对照），填补了该 PTM 领域的数据空白。
- 贡献2：AttentionKla 基于预训练蛋白语言模型（LoRA 微调），综合消融实验证明性能增益来源于：蛋白上下文感知、局部序列 motif 学习以及结构信息隐式编码，在哺乳动物细胞中实验验证了预测准确性。
- 贡献3：发现了乳酸化的序列决定因素（局部序列 motif），为后续实验定向调控乳酸化位点提供理论基础，展示了"预测→实验验证"的干湿闭环。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
乳酸乳酸化（Kla）是 2019 年由赵玉沛/李兆萍团队首次报道的新型 PTM，作为"乳酸化 Reader"发现者所在机构（复旦大学中山医院），本研究代表了乳酸酸化领域的第二轮建设——从"发现现象"到"建立预测工具"。PTM 预测本质上是蛋白语言模型的天然应用场景，AttentionKla 使用 LoRA 微调而非全参数训练，是资源效率上的明智选择（近期 ESM-2、ProtTrans 等模型已被广泛用于磷酸化、乙酰化等修饰预测）。更值得关注的是"local determinants"的发现——这意味着乳酸化并非随机发生，而是有可预测的序列规律，这对理解 Warburg 效应之外乳酸的表观调控功能有重要意义。临床角度，肺癌外科团队主导此研究，暗示乳酸代谢在肿瘤微环境中扮演的角色将越来越清晰。局限：目前仅限人类，未来向其他物种扩展是必要的；另外实验验证规模尚小（细胞水平），临床样本验证是下一步的关键。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | Multiomic Integration Reveals TE-Embedded Regulatory Variants Underlying Brain Aging | 转座子/表观调控/脑衰老 | 整合 snATAC-seq + GWAS 解析非编码脑衰老变异 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-07-31 00:00 UTC ~ 2026-08-02 00:00 UTC*
