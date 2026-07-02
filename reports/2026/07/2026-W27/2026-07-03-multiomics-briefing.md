# 🧬 多组学研究简报
**2026年7月3日（周五）| 近48小时精选**

> 搜索范围：2026-07-01 ~ 2026-07-03 | 数据源：Nature Genetics, bioRxiv, medRxiv

---

## 📊 整体趋势评述

本期聚焦**空间转录组技术揭示组织微环境异质性**与**癌症基因组学中的转录调控机制**。从红细胞发育niche的物种差异解析，到剪接因子突变如何rescue致癌基因功能缺失，再到血液克隆扩增中的免疫监视作用，展示了多组学整合如何从系统水平解析发育、疾病与进化的深层机制。方法学上，基于LD图的遗传力分区新方法graphREML显著提升了GWAS解释力。

---

## 📑 精选论文

### 🔬 论文 1：空间转录组解析红细胞发育niche的物种特异性架构

**标题**：Spatial transcriptomic analyses highlight distinct erythroid niches in mice and humans

**作者**：Xu Han, Kehan Ren, Pan Wang, et al.
**机构**：Northwestern University Feinberg School of Medicine
**平台**：Nature Genetics | **日期**：2026-07-02 | **DOI**：10.1038/s41588-026-02671-2
**链接**：https://doi.org/10.1038/s41588-026-02671-2

**一句话概要**：空间转录组揭示小鼠与人类红细胞发育niche的物种特异性架构，C1q+巨噬细胞是小鼠EBI标志，而人类依赖ICAM4介导的巨噬细胞非依赖性成簇。

**主要贡献**：
- 发现小鼠红细胞岛（EBI）以C1q+巨噬细胞为核心，通过吞噬 extruded nucleus 支持红系成熟
- 揭示人类胎儿肝脏和骨髓中EBI呈巨噬细胞非依赖性成簇，ICAM4是维持人类红系集群完整性的关键粘附分子
- 证实人类红系niche在髓系疾病中被破坏，但治疗可恢复其架构

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
空间转录组技术（Visium + Xenium）在造血组织微环境研究中的典范应用。历史背景：EBI的"中心巨噬细胞-周围红系前体"模型来自数十年小鼠研究，但人类EBI组成一直未能高分辨率解析。核心动机：解决物种间niche架构差异这一长期争议。突破点：第一次在单细胞空间分辨率下系统比较小鼠-人类EBI，发现巨噬细胞依赖性 vs 非依赖性的根本差异，推翻了将小鼠模型直接外推到人类的传统假设。局限：Visium V1分辨率有限（每spot 10-20个细胞），虽用Xenium验证但探针集仍需优化。Future work：将此框架扩展到其他疾病状态（如MDS、白血病），并整合空间蛋白质组以全面解析niche的细胞通讯网络。这一发现对理解造血再生、造血移植后的niche重建具有直接临床意义。

---

### 🔬 论文 2：剪接因子U2AF1突变通过rescue KRAS致癌剪接缺陷驱动肺癌演化

**标题**：Mutations in splicing factor gene U2AF1 rescue defective oncogene splicing in KRAS-mutant cancers

**作者**：David M. Walter, Katherine Cho, Smruthy Sivakumar, et al.
**机构**：Harvard Medical School, Dana-Farber Cancer Institute
**平台**：Nature Genetics | **日期**：2026-07-01 | **DOI**：10.1038/s41588-026-02647-2
**链接**：https://doi.org/10.1038/s41588-026-02647-2

**一句话概要**：U2AF1 S34F突变在KRAS G12S肺癌中被正向选择，通过rescue KRAS exon 2 skipping产生的功能缺陷，恢复致癌KRAS信号并驱动肿瘤演化。

**主要贡献**：
- 发现U2AF1 S34F突变在KRAS G12S突变肺癌中显著富集（OR = 4.2, P < 0.001）
- 揭示KRAS G12S突变产生新的U2AF1结合基序，导致exon 2 skipping和nonfunctional KRAS蛋白
- 证明U2AF1 S34F突变通过改变剪接位点选择，rescue KRAS exon inclusion，恢复致癌KRAS信号

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
癌症基因组学中"合成致死+进化选择"思维的典范。历史背景：splicing factor mutations（SFMs）在髓系肿瘤中常见，但在实体瘤中的作用机制不清。核心动机：解释为何U2AF1突变在specific KRAS突变背景下被正向选择。突破点：发现"突变-突变相互作用"的新模式——不是经典的synthetic lethality，而是"mutant-rescue"：SFM rescue 由oncogene mutation引起的splicing defect。机制深度：从结构预测（U2AF1-KRAS RNA相互作用）到functional validation（minigene assay, CRISPR knock-in）全链条。局限：主要聚焦肺癌，其他KRAS突变癌症（如胰腺癌）是否也存在此机制需进一步验证。Future work：开发针对此"rescue机制"的 therapeutic intervention（如抑制特定splicing isoforms），并系统筛查其他oncogene SFM pairs。这一发现为理解cancer evolution中的"mutational cascade"提供了新视角。

---

### 🔬 论文 3：血液克隆造血中的免疫监视：来自UK Biobank的证据

**标题**：Assessing the effect of immune surveillance on clonal expansions in the blood

**作者**：Barbara Walkowiak, Hamish A. J. MacGregor, Jamie R. Blundell, et al.
**机构**：University of Cambridge, Wellcome Sanger Institute
**平台**：Nature Genetics | **日期**：2026-07-01 | **DOI**：10.1038/s41588-026-02602-1
**链接**：https://doi.org/10.1038/s41588-026-02602-1

**一句话概要**：利用UK Biobank 46万全外显子数据，发现MHC结合亲和力与克隆规模无负相关，质疑免疫监视在precancerous clonal hematopoiesis（CHIP）中的作用。

**主要贡献**：
- 分析464,388名UK Biobank参与者的blood DNA测序数据，鉴定DNMT3A、TET2、ASXL1等driver mutations
- 构建MHC binding亲和力评分（基于neoantigen预测），评估其与clone size的相关性
- 发现MHC binding capacity与clone size无显著负相关（β = -0.02, 95% CI: -0.05~0.01），不支持免疫监视假说

**🔍 Critical 简评**：⭐⭐⭐⭐
对"免疫监视在precancerous stage是否起作用"这一根本问题的negative result。历史背景：免疫监视在实体瘤中被广泛接受，但在clonal hematopoiesis（CHIP）中的作用存在争议。核心动机：利用大规模人群测序数据（UK Biobank）系统评估免疫监视假说。方法学优势：结合germline HLA基因型、somatic mutation数据、neoantigen预测算法，是迄今最大规模的CHIP免疫监视研究。局限：MHC binding affinity是neoantigen呈递的proxy，但tumor microenvironment中的actual immune response涉及更多因素（如T cell exhaustion、immunosuppressive niche）。Future work：整合single-cell immunophenotyping、spatial transcriptomics解析niche免疫微环境，并 longitudinal follow-up 验证clone dynamics与cancer risk的关系。这一negative result促使领域重新思考：CHIP clones的expansion是否主要受"internal fitness"（如epigenetic drift）驱动，而非external immune pressure？

---

### 🔬 论文 4：graphREML：基于LD图的似然法遗传力分区新方法

**标题**：Improved heritability partitioning and enrichment analyses using summary statistics with graphREML

**作者**：Hui Li, Tushar Kamath, Rahul Mazumder, Xihong Lin, Luke Jen O'Connor
**机构**：Harvard T.H. Chan School of Public Health, MIT
**平台**：Nature Genetics | **日期**：2026-07-01 | **DOI**：10.1038/s41588-026-02649-0
**链接**：https://doi.org/10.1038/s41588-026-02649-0

**一句话概要**：graphREML利用LD graphical models与GWAS summary statistics，显著提升遗传力分区与enrichment分析的统计功效（平均2.5倍于S-LDSC），并产生校准的per-SNP heritability估计。

**主要贡献**：
- 提出graphREML方法：基于LD adjacency matrix的sparse precision matrix表示，使likelihood计算可行
- 在46个real traits上验证：graphREML与S-LDSC的enrichment估计一致，但发现2.5倍更多的significant trait-annotation enrichments
- 提供open-source implementation（MATLAB + Python），并release UK Biobank LDGM precision matrices

**🔍 Critical 简评**：⭐⭐⭐⭐
GWAS post-GWAS analysis方法学的重要进展。历史背景：S-LDSC（2015）是heritability partitioning的gold standard，但基于method-of-moments，统计功效有限。核心动机：利用LD graphical models的sparse structure，开发likelihood-based方法以提升功效。理论深度：将LD matrix inversion问题转化为precision matrix estimation，巧妙利用LDGM的sparsity（~95% entries为0），使high-dimensional likelihood计算可行。计算优势：graphREML的per-SNP heritability估计校准良好（unlike S-LDSC的biased estimates in high-LD regions）。局限：仍需LD reference panel，对于ancestry-diverse cohorts需重新计算LDGM。Future work：扩展graphREML到multi-trait analysis（如genetic correlation、causal inference），并整合functional genomics data（如single-cell eQTL）以提升annotation的生物学分辨率。这一方法对post-GWAS functional interpretation具有广泛影响，尤其在complex diseases的"missing heritability"解析中。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | MintCNA: A Unified Framework for Integrative Copy Number Profiling with Single-Cell Multi-Omics Data | 单细胞多组学, CNA | 注意力引导卷积自编码器+多变量变点检测 |
| bioRxiv | MORPH Predicts the Single-Cell Outcome of Genetic Perturbations Across Conditions and Data Modalities | Perturb-seq, 扰动预测 | 差异VAE+注意力机制, 支持未见过扰动组合推理 |
| bioRxiv | Time-resolved inference of gene regulatory networks underlying human cranial neural crest development | GRN, 颅神经嵴 | 时间分辨多组学(RNA-seq+ATAC-seq), 唇腭裂风险基因 |
| medRxiv | Multimodal evidence for a mechanistic model of working memory deficits in schizophrenia | 精神分裂症, 工作记忆 | 多模态(遗传+转录组+行为+fMRI)整合, 离子通道机制 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-07-01 00:00 UTC ~ 2026-07-03 00:00 UTC*
