# 🧬 多组学研究简报
**2026年7月28日（周二）| 近48小时精选**

> 搜索范围：2026-07-26 ~ 2026-07-28 | 数据源：Nature, bioRxiv, medRxiv, ArXiv q-bio

---

## 📊 整体趋势评述

本期主线是「AI / 迁移学习正把异质的多组学层缝合起来，而泛化能力与可解释性成为新的评价标尺」。从 *Nature Genetics* 的调控基因组学 AI 综述，到 Spatium 把蛋白语言模型推向空间蛋白测量、scOPE 在批量肿瘤与单细胞之间做「选择性迁移」、SHIVA02 用多模态 ctDNA 提升泛癌检测——方法学共同指向「用基础模型 / 迁移学习整合受限测量」，并呼应综述强调的「预测准 ≠ 理解对」。与此同时，多组学整合正从「堆层数」转向「检验层间是否真协调」（如衰老表观多层研究），提示下一阶段竞争焦点在可解释、可迁移、可临床落地。

---

## 📑 精选论文

### 🔬 论文 1：调控基因组学 AI 的泛化与可解释性综述

**标题**：Toward generalizable and interpretable AI in regulatory genomics

**作者**：Masayuki Nagai, Alan E. Murphy, Kaeli Rizzo, Peter K. Koo, et al.
**机构**：（机构信息检索来源未明确标注；通讯作者 Peter K. Koo）
**平台**：Nature Genetics（Review）| **日期**：2026-07-27 | **DOI**：10.1038/s41588-026-02670-3
**链接**：https://doi.org/10.1038/s41588-026-02670-3

**一句话概要**：系统梳理序列到功能模型的架构、数据与评测如何决定其泛化能力。

**主要贡献**：
- 梳理「序列→功能（seq2func）」基因组 AI 模型的架构选择、训练数据与预测任务如何共同塑造模型行为。
- 综合可解释性方法与评测实践，揭示顺式调控元件的组织规律与系统性失败模式。
- 指出高预测精度并不等于稳健的调控理解，主张将 seq2func 模型视为持续精炼的系统。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
DNA 语言模型与调控基因组学过去三年爆发，但「在 held-out 区域表现好」常被误读为「理解调控」——这是本文直面的现状。作者的动机很清晰：这些模型跨遗传变异与细胞情境的泛化并不稳定，且解释性与评测标准混乱。突破点在于首次以「序列→功能」统一视角，把架构、数据、任务、解释、评测串成一个泛化问题，点明「预测准≠理解对」这一被忽视的鸿沟。局限是作为综述不提供新算法或统一基准，结论高度依赖所引论文的异质性。值得关注的是，作者呼吁用定向扰动实验＋系统评测持续精炼模型——这恰是本期 scOPE、Spatium 等预印本正在落地的方向。

---

### 🔬 论文 2：Spatium——面向空间蛋白质组学的蛋白语言基础模型

**标题**：Spatium: A Protein Language Foundation Model for Spatial Proteomics

**作者**：Wang T., Wu S., Huang L., Liu J., Huang K., Zhou X.
**机构**：University of Texas Health Science Center at Houston（UTHealth Houston）
**平台**：bioRxiv | **日期**：2026-07-26 | **DOI**：10.1101/2026.07.23.740264
**链接**：https://doi.org/10.1101/2026.07.23.740264

**一句话概要**：用 5100 万细胞训练蛋白语言基础模型，学习对面板鲁棒的空间蛋白表征。

**主要贡献**：
- 提出 Spatium，在跨越多个空间蛋白质组学平台的 5100 万细胞上预训练蛋白语言基础模型。
- 学习对面板组成与测量尺度鲁棒的细胞身份共表达层级，恢复已知标记模式对应的功能 distinct 空间微环境。
- 可在保留生物学意义表达模式的前提下重建缺失蛋白测量，轻量适配即稳定可解释。

**🔍 Critical 简评**：⭐⭐⭐⭐
空间蛋白质组学（CODEX、CyCIF、IMC 等）提供单细胞蛋白测量，但面板异质、测量空间有限，长期缺乏可迁移的表征——这是本文要补的缺口。动机在于现有分析多依赖统计或任务专用建模，难以跨数据集稳定刻画细胞身份。突破点是首次把「蛋白语言模型」范式用于空间蛋白测量，学到对面板组成不变的内在共表达结构，并能填补缺失通道。局限在于：constrained protein panel 上的生物学「语义」是否等价于 scRNA 仍需验证；跨平台标注一致性、与形态学对齐未深究。值得期待的是与组织学基础模型及空间转录组的联合，构建真正跨模态的「虚拟蛋白」表征。

---

### 🔬 论文 3：人类衰老的全基因组多层表观组学整合图谱

**标题**：Genome-wide multi-layered epigenomic profiling across human aging

**作者**：Steiger M., Krüger R., Shaigan M., Puri D., Fornero G., Klump H., Meissner A., Gesteira Costa Filho I., Kretzmer H., Wagner W.
**机构**：RWTH Aachen Medical School
**平台**：bioRxiv | **日期**：2026-07-27 | **DOI**：10.1101/2026.07.27.740934
**链接**：https://doi.org/10.1101/2026.07.27.740934

**一句话概要**：整合 WGBS、ATAC-seq 与组蛋白修饰，发现衰老表观层间关联有限。

**主要贡献**：
- 对 120 名健康供体外周血做全基因组亚硫酸氢盐测序（WGBS），并与 ATAC-seq 整合。
- 检验年龄相关的 DNA 甲基化、染色质可及性与 CTCF 占用、多种组蛋白修饰（H3K27ac、H3K27me3、H3K4me1/3、H3K9me3）的相互关联。
- 发现衰老表观改变在甲基化、可及性与组蛋白修饰层间仅有有限关联，质疑「协调重塑」假设。

**🔍 Critical 简评**：⭐⭐⭐⭐
衰老伴随 DNA 甲基化、染色质可及性、组蛋白修饰等多层表观的可重复改变，常被笼统描述为「协调重塑」——这是领域默认但未被严格检验的假设。动机在于这些层在基因组尺度上究竟多互联、多协调，此前缺乏整合证据。突破点是以 WGBS 为锚的多层整合，首次系统显示年龄相关表观改变在不同层间关联有限，提示「统一时钟」假设可能过于简化。局限是样本为外周血（免疫细胞组成随龄变化可能混淆）、仅 120 例横断面、因果时序难定，且组蛋白来自亚群而非单细胞。扩展到组织 / 单细胞分辨率并加入纵向随访，才能检验「哪些层真正驱动、哪些只是伴随」。

---

### 🔬 论文 4：scOPE——判断哪些驱动相关表达程序可从批量肿瘤迁移到单细胞

**标题**：scOPE identifies which driver-associated expression programs transfer from bulk tumors to single cells

**作者**：Ashford A. J., Lapadat A., Demir E.
**机构**：Oregon Health & Science University（OHSU）
**平台**：bioRxiv | **日期**：2026-07-26 | **DOI**：10.1101/2026.07.24.740598
**链接**：https://doi.org/10.1101/2026.07.24.740598

**一句话概要**：从批量肿瘤学驱动表达轴，投影到单细胞并量化哪些可安全迁移。

**主要贡献**：
- 提出 scOPE：从批量肿瘤学癌症特异性「驱动相关表达轴」冻结后投影到目标单细胞转录组，无需对目标队列重拟合。
- 在 7 种恶性肿瘤 158 个驱动-癌症模型中，仅 102 个达预设安全性标准、11 个 AUROC≥0.90（以 AML NPM1、GBM IDH1、PDAC KRAS 居首）。
- 给出无需金标准的置信评分（批量可迁移性＋空间连贯性＋评分集中度＋CNV 一致性），并发现即便受支持的程序也只占受限转录子空间、且治疗中收缩。

**🔍 Critical 简评**：⭐⭐⭐⭐
scRNA-seq 解析肿瘤异质性却难直接读体细胞突变；批量队列有配对基因型但无细胞分辨率——两者天然互补，这是背景。核心动机是：能否把批量中学到的「驱动表达程序」迁移到单细胞、并知道何时不可信，是肿瘤单细胞解释的关键瓶颈。突破点在于明确「迁移是选择性的而非通用的」，用多维度无金标准置信评分做「分诊」，避免把不可靠的程序当基因型使用。局限是它本质是连续转录轴而非等位基因分型，不能替代突变 calling；仅在表达突变且 reads 覆盖变异位点时有效；结论依赖 bulk 模型的外部质量。与 Perturb-seq / CRISPR 验证联动、并纳入 CNV＋蛋白层，可把「分数」升级为可临床使用的克隆注释。

---

### 🔬 论文 5：多模态 ctDNA 谱在泛癌患者检测与监测中的应用（SHIVA02 试验）

**标题**：Multimodal ctDNA profiling for cancer detection and monitoring in pan-cancer patients with advanced disease enrolled in the SHIVA02 trial

**作者**：Nedara K., Gorse M., masliah-planchon J., von Grafenstein K., Antonio S., Bianchi C., Sene M., Du Rusquec P., Mariani O., KAMAL M., Hamza A., Bieche I., LE TOURNEAU C., Dupain C., Proudhon C.
**机构**：Research Institute for Environmental and Occupational Health
**平台**：medRxiv | **日期**：2026-07-27 | **DOI**：10.1101/2026.07.24.26358660
**链接**：https://doi.org/10.1101/2026.07.24.26358660

**一句话概要**：融合突变、CNV 与 LINE-1 低甲基化，将泛癌 ctDNA 检出率提至 93.8%。

**主要贡献**：
- 在 SHIVA02 精准肿瘤试验 32 例晚期 / 转移性实体瘤中，回顾性做多模态 ctDNA（DRAGON NGS panel + DIAMOND L1PA 甲基化 / CNV）。
- 基线突变检测 ctDNA 占 62.5%，而 L1PA 低甲基化单独识别 78.1%，三步整合模型将总检出率提至 93.8%。
- 纵向显示 MaxVAF、MethPCancer、L1PA CNV 评分随治疗变化可反映应答，部分患者 ctDNA 异常早于影像进展 4 个月。

**🔍 Critical 简评**：⭐⭐⭐⭐
ctDNA 液体活检用于实时肿瘤负荷与疗效监测，但单突变方法在 low-shedding 肿瘤灵敏度有限，这是临床现实。动机在于能否用表观（LINE-1 低甲基化）＋拷贝数补充突变信号，提升泛癌检测与纵向监测。突破点是三模态互补（两两相关性弱），把基线可检测性从约六成拉到九成以上，并展现早于影像的预警价值。局限是样本量小（n=32）、回顾性、单中心试验队列；三步算法的阈值与泛化需更大前瞻队列确认。在更大前瞻性队列验证并将多模态 ctDNA 整合进常规精准肿瘤工作流程，才能评估对临床决策的实际影响。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | Perturbation response decomposition enables biologically aligned generalization to unseen perturbations and cellular contexts | perturbation / Perturb-seq / 泛化 | 把转录响应分解为全局/扰动特异/细胞系/交互四成分，简单线性模型反超 SOTA |
| bioRxiv | Comparative epigenomics across the barley pangenome links structural variation to regulatory genome function | pangenome / epigenomics / SV | 20 个大麦基因型泛基因组 DNA 甲基化+可及性整合，揭示 SV 局部重连调控 |
| bioRxiv | Single-cell foundation models identify shared and divergent transcriptomic signatures of aging across invertebrates and mammals | scFoundation / aging / cross-species | 微调 scGPT 与 Geneformer 于 130 万细胞，跨虫/蠕虫/鼠/人预测年龄 |
| bioRxiv | Spaceland: Histology-Guided Reconstruction of High-Resolution Whole-Organ 3D Molecular Atlases from Sparse Spatial Transcriptomics | spatial transcriptomics / 3D atlas | 由稀疏切片＋H&E 组织学光学流插值重建连续 3D 分子景观 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-07-26 00:00 UTC ~ 2026-07-28 23:59 UTC*
