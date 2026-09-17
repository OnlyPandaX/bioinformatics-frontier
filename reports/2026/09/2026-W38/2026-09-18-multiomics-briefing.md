# 🧬 多组学研究简报
**2026年9月18日（周五）| 近48小时精选**

> 搜索范围：2026-09-16 ~ 2026-09-18 | 数据源：bioRxiv, medRxiv, ArXiv q-bio（Nature系列本窗口无新增相关论文）

---

## 📊 整体趋势评述

本期呈现三条清晰收敛的主线：**基础模型从"变异打分"走向"基因/患者级破坏谱"并直接对接临床结局**；**长读长 RNA-seq 与质谱融合的蛋白基因组学成熟为可扩展流水线**；以及**隐私计算与数字孪生范式**，让敏感多组学数据"不出域"即可被 AI 直接利用。同时，跨癌种单细胞整合正持续挖掘保守调控因子，体现方法学平台化、临床化的整体走向。

---

## 📑 精选论文

### 🔬 论文 1：用基因组基础模型把体细胞突变聚合为基因级破坏谱

**标题**：Genomic foundation model-derived disruption profiling links somatic mutations to cancer biology and clinical outcomes

**作者**：Nayak, A.; Lee, T.-R.; Agarwal, V.; Georgakopoulos-Soares, I.
**机构**：The University of Texas at Austin（通讯：Ilias Georgakopoulos-Soares）
**平台**：medRxiv | **日期**：2026-09-16 | **DOI**：10.64898/2026.09.15.26363174
**链接**：[Google 学术搜索](https://scholar.google.com/scholar?q=Genomic+foundation+model-derived+disruption+profiling+links+somatic+mutations+to+cancer+biology+and+clinical+outcomes)（doi.org 链接返回 403，改用学术搜索）

**一句话概要**：用序列到功能基础模型将体细胞突变聚合成基因级破坏谱，桥接癌症生物学与临床结局。

**主要贡献**：
- 发现：在 TCGA 8,800 例患者、33 种癌症中，用 AlphaGenome 与 AlphaMissense 量化体细胞突变的破坏程度；复发热点突变的蛋白水平效应显著更大，非热点突变则呈现更大的调控（顺式）效应。
- 发现：将变异级预测聚合为"患者-基因"破坏谱，分别刻画转录活性、染色质可及性、转录因子结合与剪接，且呈基因与模态特异性。
- 发现：破坏谱可捕捉突变累积造成的部分基因级功能丧失，并与其生物学及临床后果相关联（具体关联指标以原文为准）。

**🔍 Critical 简评**：⭐⭐⭐⭐
（历史/现状）癌症基因组学长期聚焦单点突变的驱动判定，却忽略了多个突变在同一基因上累积、产生"部分破坏"的可能性。（动机）AlphaGenome、AlphaMissense 等序列到功能模型能直接从 DNA 序列量化效应，为聚合突变效应提供了新工具。（突破点）本文首次系统地将个体变异预测聚合为跨 33 癌型的"患者-基因破坏谱"，把基础模型的输出推向可解释的生物学与临床层面，思路清晰。（局限）破坏谱完全依赖模型预测而非实验验证，且关联临床结局的稳健性需独立队列确认；模型对罕见变异/稀疏模态的覆盖有限。（future work）应在独立队列验证破坏谱的预后与分型价值，并与功能基因组筛选闭环验证候选基因。

---

### 🔬 论文 2：LRP2——长读长驱动的端到端蛋白基因组流程

**标题**：LRP2: A proteogenomics pipeline for long-read informed protein isoform analysis and discovery

**作者**：Schertzer, M. D.; Lewandowski, J. T.; Watts, E. F.; et al.; Sheynkman, G.
**机构**：New York Genome Center（通讯：Megan D. Schertzer）
**平台**：bioRxiv | **日期**：2026-09-17 | **DOI**：10.64898/2026.05.27.728216
**链接**：https://doi.org/10.64898/2026.05.27.728216

**一句话概要**：端到端长读长蛋白基因组流程，把转录本发现到蛋白推断串成可扩展流水线。

**主要贡献**：
- 提出：LRP2 基于 Nextflow，模块化整合 PacBio Isocall 全长转录本发现、SQANTI 质控去伪、CPAT/SQANTI-Protein 蛋白预测与分类。
- 发现：流程可扩展至数百个样本的长读长转录本发现，并用 edgeR 完成多组差异表达与 isoform 使用分析。
- 提出：统一的蛋白基因组工作流，解决用户需零散拼装各步骤、难以获得"哪些 isoform 被翻译为稳定功能蛋白"证据的痛点。

**🔍 Critical 简评**：⭐⭐⭐⭐
（历史/现状）长读长 RNA-seq 能解析全长转录本结构，但"哪些 isoform 真正翻译为稳定蛋白"长期依赖质谱旁证，且缺少端到端整合工具。（动机）长读长测序与质谱天然互补，却因流程碎片化难以规模化。（突破点）LRP2 是首个可扩展、模块化的长读长蛋白基因组 Nextflow 流水线，把发现→质控→蛋白推断→差异分析一站打通，显著提升可重复性。（局限）仍依赖 PacBio Iso-Seq 与质谱数据质量，蛋白推断存在假阳性，且缺乏与其他流程的系统基准对比。（future work）应支持 ONT 等长读长平台、与 Ribo-seq 翻译组整合，并给出大规模基准评测。

---

### 🔬 论文 3：胰岛分化数字孪生预测细胞命运

**标题**：A digital twin of pancreatic islet differentiation predicts cell fate

**作者**：Sanchez-Castro, E. E.; Ishahak, M.; Le, T.; et al.; Millman, J. R.
**机构**：Washington University School of Medicine（通讯：Jeffrey R. Millman）
**平台**：bioRxiv | **日期**：2026-09-17 | **DOI**：10.64898/2026.04.27.721124
**链接**：https://doi.org/10.64898/2026.04.27.721124

**一句话概要**：整合 40 万单细胞多组学构建胰岛分化数字孪生，可预测细胞命运并指导计算机扰动。

**主要贡献**：
- 发现：整合 400,603 个细胞，来自 9 个原创单细胞多组学数据集与 52 个公共 scRNA-seq/ATAC-seq 数据集，跨越 4 种细胞系、7 种分化方案。
- 发现：模型解析转录与染色质可及性动态，支持时间分辨推断，并可在计算机中扰动细胞状态特异的基因调控网络（GRN）。
- 验证：据此提名新调控因子，并实验验证了 STAT1 等在内分泌/外分泌命运中的此前未报道角色。

**🔍 Critical 简评**：⭐⭐⭐⭐
（历史/现状）干细胞衍生胰岛（SC-islets）的规模化生产受限于对命运决定调控逻辑的理解不足。（动机）多组学整合可定义细胞状态特异的调控逻辑，但多数图谱仍是描述性的。（突破点）本文把大规模多组学整合为"数字孪生"，不仅能推断动态、还能做计算扰动与候选调控因子提名，并闭环实验验证，是从"看图"到"预测+干预"的范式跃迁。（局限）依赖已有数据集的质量与异质性，数字孪生对全新分化方案的泛化能力待验证，计算扰动仍需更多实验闭环。（future work）应拓展至其他疾病/分化的数字孪生，并与自动化实验平台形成闭环优化。

---

### 🔬 论文 4：SPHERE——让敏感数据"不出域"即可被 AI 利用

**标题**：Unlocking Sensitive Data with SPHERE in the Age of AI

**作者**：He, Z.; Park, J.; Pulgrossi, R. C.; et al.; Zou, J.; Desai, M.; Altman, R.
**机构**：Stanford University（通讯：Zihuai He）
**平台**：bioRxiv | **日期**：2026-09-17 | **DOI**：10.64898/2026.09.01.748580
**链接**：https://doi.org/10.64898/2026.09.01.748580

**一句话概要**：无模型合成孪生方法，使敏感数据在不出本地环境的前提下被 AI 直接利用与开放共享。

**主要贡献**：
- 提出：SPHERE 生成"合成孪生"，原始记录永不离开本地环境，从根本上保护隐私。
- 发现：在 33 个数据集、5 个科学领域中，既能抵御对抗性重识别攻击，又精确复现均值、方差与相关性，线性统计分析的效应量与 P 值与原始数据数值一致。
- 发现：保留非线性机器学习的效用，每个孪生在笔记本上数秒生成；前沿 AI agent 在孪生上能得出与原始数据相同的科学结论。

**🔍 Critical 简评**：⭐⭐⭐⭐
（历史/现状）隐私法规常阻止敏感人类数据向协作者与 AI 系统共享，成为开放科学与 AI for Biology 的瓶颈。（动机）需要一种既保护隐私、又不丢失统计结构的方法。（突破点）SPHERE 是无模型方法，精确复现一阶统计且保留 ML 效用，速度极快，并让 AI agent 可直接在其上工作，工程与应用价值高。（局限）合成孪生对高阶交互与罕见亚群的保真度有限，隐私-效用权衡需更严格评估，且对抗攻击假设空间有限。（future work）可与联邦学习/差分隐私结合，并在受监管医疗环境中部署验证。

---

### 🔬 论文 5：模拟退火锁定四癌种 T 细胞耗竭的共有驱动

**标题**：Simulated Annealing Identifies Five Shared Drivers of T Cell Exhaustion Across Four Human Cancers

**作者**：Ebadi, A.; Hashemi, M.
**机构**：Islamic Azad University, Shahriar Branch（通讯：Alireza Ebadi）
**平台**：medRxiv | **日期**：2026-09-16 | **DOI**：10.64898/2026.09.15.26363102
**链接**：[Google 学术搜索](https://scholar.google.com/scholar?q=Simulated+Annealing+Identifies+Five+Shared+Drivers+of+T+Cell+Exhaustion+Across+Four+Human+Cancers)（doi.org 链接返回 403，改用学术搜索）

**一句话概要**：模拟退火从四种人类癌症的单细胞数据筛选出 T 细胞耗竭的五个共有驱动基因。

**主要贡献**：
- 发现：整合肝细胞癌、结直肠癌、黑色素瘤与非小细胞肺癌四种癌症的单细胞 RNA-seq 数据。
- 发现：并行采用 WGCNA、XGBoost 与模拟退火（SA）三种方法，SA 框架在识别保守耗竭驱动上优于 WGCNA 与 XGBoost。
- 发现：鉴定出五个跨癌种共有驱动（具体基因以原文为准），并通过 KEGG、Reactome、GO 进行通路富集。

**🔍 Critical 简评**：⭐⭐⭐
（历史/现状）PDCD1、TOX 等单个耗竭标记已被广泛研究，但跨癌种共有的耗竭驱动仍不明确。（动机）鉴定保守驱动可提供泛癌免疫治疗靶点。（突破点）以模拟退火做最优基因子集选择，优于传统相关性/树模型方法，给出五个共有驱动，方法学有新意。（局限）仅覆盖四种癌症且为 scRNA-seq 单一模态，SA 结果对初始化敏感，具体基因与机制需湿实验验证，样本规模与队列来源未在摘要中交代。（future work）应拓展更多癌种并融合空间/蛋白组，实验验证候选驱动的可成药性。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | Locat: Joint enrichment and depletion testing identifies localized marker genes in single-cell transcriptomics | 单细胞 标记基因 | 联合富集-耗竭检验定位特异标记基因（10.64898/2026.04.03.716370） |
| bioRxiv | Ciclopes: biology-informed deep-learning framework for continuous cell-cycle phase | 深度学习 细胞周期 | 生物学信息驱动的 DL 解析连续细胞周期相与相依赖转录/降解 |
| ArXiv q-bio | STUART: mapping-free ML framework for rapid ionizing radiation exposure assessment | 生物信息学 辐射剂量 | 免比对 ML 框架用于大规模辐射暴露快速分诊 |
| ArXiv q-bio | HPOQuest: Rare-Disease Diagnostic Agent Using Active Phenotype Acquisition | AI 罕见病诊断 | 无训练、主动表型获取的罕见病诊断 agent |
| medRxiv | Noninvasive Wound Swab Proteomics Enables Prognostic Stratification of Diabetic Foot Ulcer Healing | 蛋白组学 临床 | LC-MS/MS 伤口拭子蛋白组预测糖尿病足溃疡愈合（HEAL-DFU） |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-09-16 00:00 UTC ~ 2026-09-18 00:00 UTC*
