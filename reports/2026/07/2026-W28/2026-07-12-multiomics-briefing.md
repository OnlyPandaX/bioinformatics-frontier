# 🧬 多组学研究简报
**2026年7月12日（周日）| 近48小时精选**

> 搜索范围：2026-07-10 ~ 2026-07-12 | 数据源：Nature, bioRxiv, medRxiv, ArXiv

---

## 📊 整体趋势评述

本期简报聚焦四个前沿主题：① **单细胞 CRISPR 筛选的 isoform 分辨率**——从基因水平深入剪接异构体层面，揭示基因敲除后被基因级分析掩盖的隐藏功能后果；② **癌症非编码驱动突变的 base-pair 分辨率预测**——Transformer 模型学习突变印记上下文，为区分真正癌症驱动 hotspot 与乘客突变提供计算框架；③ **人类端粒亚区（subtelomere）的协同进化**——泛基因组分析揭示非同源染色体间高相似序列的重组机制；④ **多组学预测的统计先验 Transformer（OmicFormer）**——融合生物先验知识的深度学习框架，在复杂疾病预测任务中展现跨队列泛化优势。

---

## 📑 精选论文

### 🔬 论文 1：单细胞 CRISPR 筛选的 isoform 分辨率突破

**标题**：Isoform-level resolution in single-cell CRISPR screens reveals hidden functional consequences of gene perturbation

**作者**：Andrews, N.; Gleeson, J.; Panten, J.; Oling, S.; Lundqvist, S.; **Lappalainen, T.** (通讯), et al.
**机构**：Karolinska Institutet / Columbia University
**平台**：bioRxiv Genomics | **日期**：2026-07-10 | **DOI**：10.64898/2026.07.09.737410
**链接**：https://doi.org/10.64898/2026.07.09.737410

**一句话概要**：单细胞 CRISPR 筛选结合 isoform 捕获技术，揭示基因敲除后剪接异构体层面的隐藏功能后果，挑战传统基因级分析范式。

**主要贡献**：
- 发现1：Parse Biosciences 方法捕获的 isoform 特征比 10x Genomics 方案更全面，在大规模扰动筛选中首次实现 isoform 分辨率。
- 发现2：基因级分析无显著效应的 CRISPR 扰动中，约 15-20% 在 isoform 层面展现功能差异（特定异构体选择性下调或 isoform ratio 重排）。
- 发现3：某些基因的 isoform 切换（isoform switching）与细胞命运转变直接相关，提示异构体而非基因是部分核心调控节点。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
单细胞 CRISPR 筛选（Perturb-seq/CROP-seq）自 2019 年大规模普及以来，主流分析始终停留在基因水平——关注某基因敲除后整体表达量变化。这背后的实际假设是：一个基因 = 一个功能单元。但剪接异构体的广泛存在（>95% 人类基因有可变剪接）使这一假设长期被忽视。本研究首次在真正大规模扰动筛选中系统性比较 isoform 捕获策略，证明 isoform 层面的功能信号在基因级分析中被平滑化——这是方法论上的必要一步。Lappalainen 团队此前在 TWAS 和 QTL 领域深耕多年，将这一视角引入 CRISPR 筛选是自然的学科交叉。局限：当前 isoform 量化在单细胞水平的噪声仍高于基因水平；多异构体基因的去卷积计算复杂；不同 3' UTR 异构体的功能注释仍不完整。Future work：多组学（转录组+蛋白质组）配对 isoform 解析；CRISPRi/a 干预特定异构体而非整基因；大规模 isoform-QTL 与 CRISPR 效应的联合建模。

---

### 🔬 论文 2：Transformer 模型 base-pair 分辨率预测癌症非编码驱动突变

**标题**：Transformer models of mutation risk at base-pair resolution identify non-coding hotspot cancer driver mutations

**作者**：Galvan-Femenia, I.; Veiner, M.; Naro, D.; **Supek, F.** (通讯), et al.
**机构**：Institute for Research in Biomedicine (IRB Barcelona)
**平台**：bioRxiv Genomics | **日期**：2026-07-10 | **DOI**：10.64898/2026.07.07.736824
**链接**：https://doi.org/10.64898/2026.07.07.736824

**一句话概要**：MutFormer 基于 DNA 序列以 base-pair 分辨率预测各突变印记下的体细胞突变风险，分离驱动与乘客非编码癌症突变。

**主要贡献**：
- 提出1：MutFormer 在 COSMIC 突变印记框架下逐印记学习序列决定因素，在 >90M 高可信 SNV 上训练，超越基于卷积网络的基线方法。
- 提出2：模型可区分序列背景驱动的"乘客 hotspot"（由活跃突变过程产生）与真正的转录调控功能缺失驱动 hotspot。
- 提出3：发现多个此前未识别的非编码调控 hotspot，包括 TERT 启动子区在特定突变印记上下文中的差异驱动效应。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
非编码区癌症驱动突变的识别是领域长期痛点。传统方法依赖突变在癌症样本中的反复出现频率，但高度重复区域（如启动子 CpG 岛）的乘客 hotspot 可伪装成驱动突变。Supek 实验室近年来围绕"突变背景依赖性"（mutational context-dependence）持续产出（2021 年 Science、2024 年 Nature Genetics），本工作是这一脉络的自然延伸——从实验验证的特定基因扩展到全基因组 base-pair 分辨率。Transformer 的 attention 机制天然适合捕获序列上下文中的长程依赖，与卷积网络相比在复杂调控元件（ enhancer/promoter core/non-coding RNA）上具有优势。局限：仅考虑 SNV，未处理 indel 和结构变异；基于现有参考基因组的序列输入可能遗漏结构变异导致的调控改变；训练数据偏向欧洲裔癌症基因组。Future work：将模型扩展至 indel 和 SV；结合 CRISPR 功能验证结果微调；整合表观基因组数据作为额外输入通道。

---

### 🔬 论文 3：人类 subtelomere 协同进化与非常规重组的泛基因组解析

**标题**：Concerted evolution and unorthodox recombination of human subtelomeres

**作者**：Guarracino, A.; Gyamfi, A.; Human Pangenome Reference Consortium; **Garrison, E.** (通讯), et al.
**机构**：Oregon Health & Science University / Human Pangenome Reference Consortium
**平台**：bioRxiv Genomics | **日期**：2026-07-10 | **DOI**：10.64898/2026.07.10.737660
**链接**：https://doi.org/10.64898/2026.07.10.737660

**一句话概要**：泛基因组分析 465 个近完整人类基因组组装，首次揭示非同源染色体端粒亚区之间的协同进化与非常规重组模式。

**主要贡献**：
- 发现1：Subtelomere 区域存在高度序列相似性（>95% identity）的染色体间共享序列模块，构成异位交换的底物，其重组频率远高于基因组其他区域。
- 发现2：提出协同进化（concerted evolution）的直接证据——不同染色体端粒的同源区域序列相似性超过种系分化预期，提示复制后协同校正机制。
- 发现3：首次在人群规模描述 subtelomere 的非经典重组（unequal crossover + gene conversion），为理解端粒区域基因组不稳定性与疾病关联提供结构基础。

**🔍 Critical 简评**：⭐⭐⭐⭐
Subtelomere 是基因组学中被严重低估的区域——高度重复、缺乏完整组装、长期被短读长测序遗漏。本研究借助 HPRC 的高质量人群规模泛基因组组装（465 个近完整基因组），首次以"全染色体端对端比较"的方式系统研究 subtelomere，在方法论上是真正的突破。Erik Garrison 作为 GFASTA/vg 系列图基因组工具的核心开发者（与 HPRC 深度合作），本研究是其实验室在人群基因组组装方法学上的直接应用。历史背景：端粒区域的结构变异与某些先天性疾病（FSHD 之外）关联已有零星报道，但缺乏系统性人群数据。局限：Subtelomere 区域的变异功能注释困难（基因密度低、功能元件分散）；协同进化机制的分子基础（何种 DNA 修复途径介导）尚未阐明；高度相似性使精确分型仍具挑战。Future work：结合光学图谱（ONT）长读长直接观察重组事件；Subtelomere 结构变异与特定表型（神经发育疾病、癌症易感性）的关联研究；构建 subtelomere 特异性人群参考。

---

### 🔬 论文 4：OmicFormer——统计先验增强的多组学疾病预测 Transformer

**标题**：OmicFormer: a statistical priors-informed transformer for accurate and generalizable omics prediction of diseases and complex traits

**作者**：Jiang, H.; Yang, C.; Qin, M.; You, J.; Feng, J.; **Yu, J.-T.**; **Cheng, W.**; **Gong, W.** (通讯), et al.
**机构**：Shanghai Jiao Tong University / UCL / Shanghai Urban Brain Institute
**平台**：medRxiv Health Informatics | **日期**：2026-07-10 | **DOI**：10.64898/2026.07.06.26357359
**链接**：https://doi.org/10.64898/2026.07.06.26357359

**一句话概要**：融合统计先验（LD 结构、基因功能注释）的 Transformer 架构，在复杂疾病和性状的多组学预测任务中实现跨队列强泛化。

**主要贡献**：
- 方法1：将连锁不平衡（LD）结构作为注意力偏置注入 Transformer，使模型优先整合功能相关 SNP，避免 LD 膨胀导致的过拟合。
- 方法2：整合基因功能注释（GO/KEGG pathway）作为结构化先验，在罕见变异和低频 GWAS 信号上提升预测效力。
- 实证1：在 UK Biobank、All of Us 和 BioJapan 三个独立队列的 12 种复杂疾病/性状预测任务中，OmicFormer 较 Polygenic Risk Score 和标准 DL 方法平均 AUC/AUC-ROC 提升 8-15%。

**🔍 Critical 简评**：⭐⭐⭐⭐
多组学预测的瓶颈从来不是模型容量不足，而是**泛化性**——大多数深度学习多组学预测模型在训练队列上表现优异，但换一个队列就崩。这是统计学习领域 overfitting 与生物领域 distribution shift 的双重困境。本工作的切入点很聪明：不从模型架构下手，而是将领域知识（LD先验、功能注释先验）显式编码为 Transformer 的 inductive bias。这与近来"生物学启发的深度学习"趋势高度一致（可对比 2025 年的 Geneformer、2024 年的 scGPT）。上海交大-城脑所在多模态医学 AI 方向积累深厚（Cheng/Gong 团队2024年在 Nature Methods 发表过类似框架）。局限：需要预先计算 LD 矩阵，对罕见人群/小样本队列不友好；功能注释数据库的时效性影响模型性能；Transformer 计算开销在大规模基因组（>5M SNP）上可能成为瓶颈。Future work：扩展至单细胞多组学模态；在线学习框架支持新队列快速适配；与因果推断方法（deconfounding）结合提升可解释性。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | Joint analysis of multiply perturbed cells improves statistical power in Perturb-seq | Perturb-seq统计功效 | Jul 11, 基因组 |
| bioRxiv | Evaluating cross-species transferability of AlphaGenome sequence-to-function predictions | AlphaGenome跨物种泛化 | Jul 10, 生物信息学 |
| bioRxiv | CellPilot: agentic framework for autonomous single-cell annotation via small LMs | 单细胞注释Agent | Jul 10, 生物信息学 |
| bioRxiv | Safeguarding open-weight genomic foundation models through weight locking | 模型安全/权重锁定 | Jul 10, 生物信息学 |
| bioRxiv | Transformer models for mutation risk at base-pair resolution | 突变风险Transformer | Jul 10, 基因组 |
| bioRxiv | A transcriptional continuum links viral burden and host-cell biology in lymphoid tissue | 病毒载量与宿主转录连续体 | Jul 11, 免疫学 |
| bioRxiv | E-cadherin maintains oral Langerhans cell barrier surveillance | 朗格汉斯细胞屏障 | Jul 11, 免疫学 |
| medRxiv | Evaluating polygenic indices for neuropsychiatric conditions across UK populations | PGS跨人群迁移 | Jul 10, 基因组医学 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-07-10 00:00 UTC ~ 2026-07-12 00:00 UTC*
