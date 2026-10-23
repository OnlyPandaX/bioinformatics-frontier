# 多组学研究简报
**2026年10月23日（周五）| 近48小时精选**

> 检索窗口：2026-10-20 23:32:04 UTC 至 2026-10-22 23:32:04 UTC  
> 数据源：Nature 系列、arXiv q-bio.GN/q-bio.QM/q-bio.CB、bioRxiv、medRxiv

## 整体趋势评述

本期研究一方面推动空间蛋白组、空间转录组与病理图像走向开放、可组合的分析框架，另一方面把遗传变异解释从单一序列预测扩展到多组学证据、细胞状态和人群背景。多个工作强调上下文依赖性：组织空间结构、免疫刺激状态与祖源差异都会改变分子信号的解释；但不少结论仍需更大规模、独立队列或功能实验验证。

## 精选论文

### 论文 1：开放式深度视觉蛋白组学框架

**标题**：OpenDVP: an experimental and computational framework for community-empowered deep visual proteomics  
**作者**：Jose Nimo et al.  
**机构**：作者单位包括 Max Delbrück Center for Molecular Medicine 的 Spatial Proteomics Group、Charité – Universitätsmedizin Berlin 等。  
**平台**：Nature Methods | **日期**：2026-10-22 | **DOI**：10.1038/s41592-026-03262-z  
**链接**：[Nature Methods](https://www.nature.com/articles/s41592-026-03262-z) | [DOI](https://doi.org/10.1038/s41592-026-03262-z)

**一句话概要**：开放式工作流让空间细胞表型与探索性蛋白组测量更易整合。

**主要贡献**：
- 提出模块化开放框架，整合 MCMICRO、QuPath、napari 与 AnnData/SpatialData 等工具和数据格式。
- 提供无需图像分析专长的快速流程，以及由 AI 图像处理、分割和空间分析组成的进阶流程。
- 在胎盘、早期肺癌和局部复发乳腺癌组织中演示细胞邻域引导的空间蛋白组分析。

**Critical 简评：4/5**  
深度视觉蛋白组学能以蛋白层面补足空间转录组，但复杂的成像、切割和质谱流程一直抬高了采用门槛；OpenDVP 的动机是把端到端步骤开放并标准化。其亮点是兼顾低门槛入门和可扩展的空间分析，并以标准格式连接多模态数据。摘要所述验证集中于三个存档组织研究，蛋白组测量仍属探索性，尚不足以证明跨实验室、跨组织的定量可重复性。下一步应在独立队列中系统比较回收率、空间分辨率和批次稳健性，并明确不同成像与微切割设置对蛋白定量的影响。

### 论文 2：肺大细胞神经内分泌癌的多层组学刻画

**标题**：Molecular characterization of large cell neuroendocrine carcinoma of the lung by multilayered omics analysis  
**作者**：Megumi Tateishi et al.；通讯作者包括 Yutaka Suzuki、Daisuke Matsubara 和 Ayako Suzuki。  
**机构**：The University of Tokyo、University of Tsukuba 等。  
**平台**：Nature Communications | **日期**：2026-10-21 | **DOI**：10.1038/s41467-026-78485-x  
**链接**：[Nature Communications](https://www.nature.com/articles/s41467-026-78485-x) | [DOI](https://doi.org/10.1038/s41467-026-78485-x)

**一句话概要**：多层组学显示肺大细胞神经内分泌癌存在谱系状态与空间表型差异。

**主要贡献**：
- 对 27 例肺大细胞神经内分泌癌和 7 例小细胞肺癌分析基因组、表观基因组及空间组学特征。
- 多数病例可归入 ASCL1 高表达神经内分泌亚型，或 ASCL2/YAP1 高表达的非神经内分泌亚型。
- 在部分样本中观察到神经内分泌与非神经内分泌标志同时表达的模糊状态，提示谱系可塑性值得进一步检验。

**Critical 简评：4/5**  
该癌种临床预后差且分子分型尚不充分，多层组学为解释其异质性提供了必要视角。研究将空间表型与基因组、表观基因组信号并置，指出病例并非都落在清晰的二元谱系类别中。样本量（27 例目标癌种）仍受罕见病队列限制，而横断面数据只能提示、不能证明肿瘤发生谱系转换。更大规模的独立队列和纵向取样可检验亚型稳定性；后续还需功能实验确认调控网络是否能驱动或逆转这些状态。

### 论文 3：深度学习模型预测非编码变异效应的综述

**标题**：Leveraging genomic deep learning models for the prediction of noncoding variant effects  
**作者**：Pooja Kathail、Ayesha Bajwa、Nilah M. Ioannidis  
**机构**：University of California, Berkeley；作者亦关联 University of California, Santa Cruz 和 Biohub。  
**平台**：Nature Genetics（Review Article）| **日期**：2026-10-21 | **DOI**：10.1038/s41588-026-02769-7  
**链接**：[Nature Genetics](https://www.nature.com/articles/s41588-026-02769-7) | [DOI](https://doi.org/10.1038/s41588-026-02769-7)

**一句话概要**：综述序列到功能模型与基因组语言模型用于非编码变异解释的进展和评估要点。

**主要贡献**：
- 梳理监督式序列到活性模型与自监督基因组语言模型在非编码变异效应预测中的应用。
- 按真实标注数据类型归纳评估设置，提示不同 ground truth 对性能解释的影响。
- 总结模型使用中的实践考量，并指出模型开发与评估仍可改进的方向。

**Critical 简评：4/5**  
非编码变异功能解释长期受限于远端调控机制复杂、实验标注稀疏；深度学习扩大了可预测的分子表型范围，但不同模型的分数并不天然可比。本文的价值在于把模型类别与 ground-truth 评估条件放在同一框架讨论，避免只按模型架构或单一 benchmark 排名。作为综述，其结论依赖所纳入研究的任务定义和数据覆盖，摘要也未显示一套新的统一基准或前瞻性临床验证。后续应建立分层、校准且能区分组织/细胞状态的变异效应基准，并检验预测能否改善真实遗传学发现。

### 论文 4：面向遗传变异分析的 agentic 多组学框架

**标题**：hvantk: an agentic multi-omics framework for variant annotation and analysis  
**作者**：Enrique Audain、Yasset Perez-Riverol、Marc-Phillip Hitz  
**机构**：University Medicine Oldenburg；European Bioinformatics Institute（作者单位按 Crossref 元数据核验）。  
**平台**：bioRxiv | **日期**：2026-10-21 | **DOI**：10.64898/2026.10.19.760196  
**链接**：[bioRxiv DOI 页面](https://doi.org/10.64898/2026.10.19.760196)

**一句话概要**：统一数据模型和插件式多组学注释提升遗传变异分析的可组合性。

**主要贡献**：
- 将 Hail MatrixTable、AnnData 等数据模型与 21 个公共多组学数据提供方接入同一插件框架。
- 以 agent skills 编排分析步骤，并支持从个人电脑扩展到高性能计算集群。
- 在 CHD、Epi25 和 SCHEMA 三个病例对照队列中，按多组学注释重排后，top-decile curated disease gene recovery 分别由 26% 升至 49%、40% 升至 48%、51% 升至 54%。

**Critical 简评：4/5**  
变异分析常需跨越异构数据格式、注释资源和计算环境，hvantk 将互操作性与自动化放进同一框架，切中实际工作流痛点。三队列结果显示，多组学注释可改善候选基因排序，且表达相关特征带来较明显增益。当前证据来自三个特定队列和既有 curated gene 集，性能可能受注释资源、疾病遗传架构和排序基线影响；预印本结论亦尚未经同行评审。下一步应进行外部队列验证、资源版本漂移评估及消融分析，以区分数据整合本身与特定注释源的贡献。

### 论文 5：祖源与刺激状态共同塑造免疫调控

**标题**：Genetic ancestry shapes context-dependent immune regulation across Indigenous South American populations  
**作者**：Cecily Choy et al.  
**机构**：作者单位包括 University of Chicago、Universidade Federal do Pará、Pontificia Universidad Católica de Chile 等。  
**平台**：medRxiv | **日期**：2026-10-21 | **DOI**：10.64898/2026.10.21.26365630  
**链接**：[medRxiv DOI 页面](https://doi.org/10.64898/2026.10.21.26365630)

**一句话概要**：多祖源单细胞免疫图谱揭示遗传调控效应随刺激条件变化。

**主要贡献**：
- 构建来自 13 个南美人群、345 名个体、约 140 万 PBMC 的单细胞转录组图谱，并纳入基线及三种刺激条件。
- 发现祖源与大量转录差异相关，且不少差异仅在刺激后出现；cis-eQTL 平均解释约四分之一的祖源相关表达差异。
- 结合 GWAS 共定位识别刺激特异的疾病相关调控信号，并指出部分常见于原住民南美人群的变异在欧洲参考数据中少见或缺失。

**Critical 简评：5/5**  
免疫遗传研究长期偏重欧洲祖源样本，且静息态测量可能漏掉环境刺激下才显现的调控差异。该研究同时纳入多个人群、单细胞分辨率和多种刺激条件，使祖源效应与免疫上下文得以联合分析。其发现强调参考人群代表性会影响遗传变异解释，但 345 名供体分布于 13 个人群，群体内样本量与可推广性仍需谨慎评估；共定位也不能单独证明因果。后续应在独立且由当地研究伙伴参与的队列中复现，并对关键候选变异开展细胞状态特异的功能验证。

## 近48小时其他相关发现

| 平台 | 论文 | DOI | 值得关注之处 |
|------|------|-----|--------------|
| bioRxiv | SPATNIC enables H&E-grounded cancer-cell identification across spatial and single-cell transcriptomic modalities in colorectal cancer | [10.64898/2026.10.21.760612](https://doi.org/10.64898/2026.10.21.760612) | 以病理医师标注训练癌细胞分类器，并报告跨多种空间平台的零样本迁移。 |
| bioRxiv | CPMsi: a data-driven Computational Pipeline for fast, large-scale Mass Spectrometry Imaging analysis | [10.64898/2026.10.15.758756](https://doi.org/10.64898/2026.10.15.758756) | 面向队列级质谱成像的可扩展分析与多模态整合；摘要报告区域识别较厂商软件快 30 倍。 |
| medRxiv | DNA methylation profiling reveals novel rhabdomyosarcoma subsets with distinct histologic, genetic and clinical properties | [10.64898/2026.10.22.26365442](https://doi.org/10.64898/2026.10.22.26365442) | 结合甲基化、融合状态、突变、拷贝数和临床指标细分横纹肌肉瘤。 |

## 检索与核验说明

- Nature 论文以期刊文章页核对题名、作者、单位、摘要和发布日期，并以 Crossref DOI 元数据交叉检查。
- arXiv 使用 Atom API 检索 `q-bio.GN`、`q-bio.QM`、`q-bio.CB` 并按提交时间筛选；精确窗口内未发现符合本简报主题的新论文。
- bioRxiv 与 medRxiv 分别使用各自的 `api.biorxiv.org/details/biorxiv/...` 和 `api.biorxiv.org/details/medrxiv/...` 记录。平台日期字段为日级精度；DOI 注册时间用于边界交叉检查，不将其误称为精确的平台发布时间。
- 本期去重依据 DOI，与本地 `sent-papers.json` 比对后未发现精选论文的已发送记录。bioRxiv/medRxiv 条目均为预印本，尚未经过同行评审。

*Generated by multi-omics-briefing v1.7.0*  
*搜索时间窗口：2026-10-20 23:32:04 UTC ~ 2026-10-22 23:32:04 UTC*
