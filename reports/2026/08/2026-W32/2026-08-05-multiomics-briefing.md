# 🧬 多组学研究简报
**2026年8月5日（周三）| 近48小时精选**

> 搜索范围：2026-08-03 ~ 2026-08-05 | 数据源：Nature, bioRxiv, medRxiv, ArXiv

---

## 📊 整体趋势评述

本期主线是**「从组学测量走向调控机制建模」**：单细胞水平上增强子–基因调控关系的可预测性（scE2G）、跨真核生物的染色质状态进化图谱、多族裔 GWAS×转录组整合因果推断，以及自监督视觉模型从影像中提取系统健康与遗传信号，四者共同指向「用计算模型把静态组学数据转化为可验证的调控与疾病机制」。值得注意的还有方法学反思的回归——单细胞代谢模型构建的基准测试表明，同一数据下方法选择的差异可能主导分析结论。

---

## 📑 精选论文

### 🔬 论文 1：单细胞增强子–基因调控映射的新一代分类模型

**标题**：Mapping enhancer–gene regulatory interactions from single-cell data

**作者**：Sheth, Maya U., Qiu, Wei-Lin, Ma, X. Rosa, Gschwind, Andreas R., Jagoda, Evelyn, Tan, Anthony S., et al. (Engreitz, Jesse M., Andersson, Robin)
**机构**：Broad Institute（Novo Nordisk Foundation Center for Genomic Mechanisms of Disease）/ Stanford University
**平台**：Nature Genetics | **日期**：2026-08-03（在线） | **DOI**：10.1038/s41588-026-02695-8
**链接**：https://doi.org/10.1038/s41588-026-02695-8

**一句话概要**：用单细胞ATAC/多组学特征预测增强子–基因调控关系，并以CRISPR扰动大规模验证。

**主要贡献**：
- 发现：提出 scE2G 分类模型家族，仅凭 scATAC-seq 或 RNA+ATAC 多组学特征即可预测增强子–基因（E–G）调控，训练集含 >10,000 个经 CRISPR 扰动的元件–基因对。
- 证明：在 CRISPR 扰动、eQTL 精细定位、GWAS 变异–基因关联三类基准上均达 SOTA，跨多种细胞类型与扰动类别稳健。
- 提出：应用于异质组织 E–G 图谱构建，并解读复杂性状非编码变异，提名 INPP4B 与 IL15 与淋巴细胞计数的调控联系。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
增强子–基因映射长期依赖实验（Hi-C、PCHi-C、CRISPR）与预测模型的折中，scE2G 的价值在于把单细胞染色质可及性数据直接转化为可验证的调控关系，且用 >10,000 对 CRISPR 金标准训练，这在同类工具中规模罕见。突破点是把「预测」推进到「可在任意细胞类型即时映射」的通用性。局限在于 CRISPR 训练集的细胞类型覆盖仍有限，跨谱系外推性能需更多独立验证；此外分类器输出的是二值关系而非强度。值得关注的是其与 GWAS 解读的结合——若能扩展到全基因组规模，有望系统性重注释非编码风险位点。

---

### 🔬 论文 2：跨真核生物染色质调控状态的多样性与进化

**标题**：Diversity and evolution of chromatin regulatory states across eukaryotes

**作者**：Navarrete, Cristina, Montgomery, Sean A., Mendieta, Julen, Księżopolska, Ewa, Renema, Jim, Chiva, Cristina, Sabidó, Eduard, Lara-Astiaso, David, et al.
**机构**：Centre for Genomic Regulation (CRG), Barcelona / Universitat Pompeu Fabra (UPF)
**平台**：Nature Genetics | **日期**：2026-08-03（在线） | **DOI**：10.1038/s41588-026-02672-1
**链接**：https://doi.org/10.1038/s41588-026-02672-1

**一句话概要**：组合索引ChIP-seq跨真核谱系同时解析多种组蛋白修饰，揭示染色质状态进化蓝图。

**主要贡献**：
- 发现：开发组合索引 ChIP-seq 方法，可在变形虫、有孔虫、盘状皱褶虫、隐藻等此前缺乏数据的真核谱系中同时 profiling 多种组蛋白 PTM。
- 揭示：活性基因启动子/基因体上的常染色质状态高度保守；相反，沉默基因与转座子相关的抑制性异染色质呈现多样化组合（H3K9me3、H3K27me3 等的不同配置）。
- 提出：染色质状态「保守的开放、趋异的沉默」进化模式，为理解转座子镇压策略的谱系特异性提供框架。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
组蛋白修饰的保守性早有共识，但「由修饰定义的染色质状态是否保守」长期缺乏跨谱系系统数据——这项工作的 motivation 正是补上真核生物谱系树上的大片空白。组合索引策略大幅降低了样本需求，使单细胞级稀有谱系 profiling 成为可能。突破点在于把「修饰存在与否」提升到「状态组合」的进化比较层面。局限：覆盖的谱系虽广但每谱系样本数有限，状态注释的稳健性依赖聚类参数；且未直接测功能（如转座子活性）。future work 自然是向更多谱系与功能验证延伸，并与同期发表的姐妹篇（组蛋白修饰保守性研究）互为印证。

---

### 🔬 论文 3：CAD 与亚临床动脉粥样硬化的基因组×转录组系统整合

**标题**：Systematic Integration of genomics with transcriptomics for the Study of Coronary Artery Disease and Subclinical Atherosclerosis

**作者**：Yang, C., Aguet, F., Auguste, G., Ardlie, K. G., Gerszten, R. E., Post, W. S., Wheeler, H. E., Taylor, K. D., Kasela, S., Lappalainen, T., et al. (通讯：Manichaikul, Ani W.)
**机构**：University of Virginia（合作：TOPMed / MESA 多族裔队列）
**平台**：medRxiv | **日期**：2026-08-03 | **DOI**：10.64898/2026.07.31.26357396
**链接**：https://www.medrxiv.org/content/10.64898/2026.07.31.26357396v1

**一句话概要**：多族裔 CAD-GWAS 与 MESA/TOPMed 转录组贝叶斯共定位整合，挖掘因果基因与共表达模块。

**主要贡献**：
- 发现：鉴定 108 个与 CAD 位点共定位的表达基因，其中 24 个被两种共定位方法共享，48 个为 CAD-GWAS 此前未报道的新基因。
- 证明：结合统计精细定位的双重共定位策略显著降低假阳性；cWGCNA 因果加权共表达网络锁定与亚临床动脉粥样硬化性状相关的关键驱动基因。
- 提出：多族裔（MESA）背景下的整合框架，直接回应 GWAS 位点到分子机制的转化瓶颈。

**🔍 Critical 简评**：⭐⭐⭐⭐
CAD 已有 300+ GWAS 位点，但位点→基因→机制的解析仍是大规模人群遗传学的核心痛点，此项工作把多族裔队列（MESA/TOPMed）的转录组与 GWAS 做贝叶斯共定位，并叠加 cWGCNA 因果网络，设计上比单队列研究更稳健。突破点是 48 个新基因的提名与关键驱动基因的模块级解析。局限：共定位识别的是「共享信号」而非严格因果，5 个优先新基因的复制验证规模有限；亚临床动脉粥样硬化性状的模块关联仍需功能实验闭环。future work 期待在更多族裔与纵向数据上验证，并推进到蛋白/代谢层面的多层共定位。

---

### 🔬 论文 4：单细胞基因组规模代谢模型构建的系统性基准测试

**标题**：A benchmarking framework for single-cell genome-scale metabolic model construction

**作者**：Yang, J., Deng, Y., Luo, J., Wang, Y., Li, F., Chen, Y.（通讯：Chen, Yu）
**机构**：State Key Laboratory of Quantitative Synthetic Biology, Shenzhen Institute of Synthetic Biology, Shenzhen Institutes of Advanced Technology, CAS
**平台**：bioRxiv | **日期**：2026-08-04 | **DOI**：10.64898/2026.08.02.742346
**链接**：https://doi.org/10.64898/2026.08.02.742346

**一句话概要**：系统评估单细胞代谢模型构建三要素共26种策略，给出方法选择实用指南。

**主要贡献**：
- 发现：模型提取方法（MEM）对多数准确性指标影响最大；数据预处理主导细胞身份区分能力；表达阈值则在模型完整性与细胞特异性间权衡。
- 证明：26 种策略组合 × 9 个 scRNA-seq 数据集 × 3 个评价维度（准确性、扰动敏感性、计算可行性）的系统比较，揭示策略表现高度依赖评价标准。
- 提出：scGEM 构建的基准框架与策略选择指南，直指该领域「方法选择决定结论」的可复现性危机。

**🔍 Critical 简评**：⭐⭐⭐⭐
单细胞代谢建模（scGEM）是解析代谢异质性的热门工具，但不同 pipeline 产出模型结构差异大、可比性差，此前缺少系统级「方法学体检」。这项工作的动机正是把构建流程解耦为预处理、提取方法、阈值三个可量化因素。突破点在于首次给出跨 9 数据集的多维基准，明确指出 MEM 的主导作用。局限：9 个数据集多为常见细胞系/组织，复杂组织与扰动场景覆盖不足；「准确性」基准本身依赖金标准定义，存在同源偏差风险。future work 应扩展至空间代谢组与真实代谢通量验证，并推动社区统一评测协议。

---

### 🔬 论文 5：自监督 DXA 影像表征编码多系统疾病风险、生物衰老与遗传力

**标题**：Self-supervised DXA representations encode multi-system disease risk, biological aging and heritability

**作者**：Sasson, Gil, Levine, Zachary, Shilo, Smadar, Kohn, Sarah, Lutsker, Guy, Godneva, Anastasia, ..., LeCun, Yann, Balestriero, Randall, Segal, Eran
**机构**：Weizmann Institute of Science（合作：NYU / Meta FAIR）
**平台**：ArXiv (q-bio.QM) | **日期**：2026-08-03 | **ID**：arXiv:2608.02208
**链接**：https://arxiv.org/abs/2608.02208

**一句话概要**：JEPA 自监督模型从全身 DXA 影像中提取系统性健康表征，跨队列预测疾病与生物年龄。

**主要贡献**：
- 发现：LeDXA（JEPA 架构）仅用 11,540 张未标注 DXA 训练，即可在 47,400 张 UK Biobank 外部队列中超越扫描仪衍生指标与通用模型 DINOv3，参数少约 40 倍。
- 证明：表征可预测时间年龄（r=0.88，MAE 2.90 岁），「生物年龄差」与疾病负担及最高龄四分位 45% 更高死亡风险相关，且 HRT 后女性该差距下降（提示可干预）。
- 揭示：LeDXA 嵌入的 GWAS 关联富集已知体成分/骨密度位点，且遗传力高于 DINOv3——影像表征本身携带可遗传的生物学信号。

**🔍 Critical 简评**：⭐⭐⭐⭐
医学影像与遗传/衰老研究的交叉近年升温，但多数工作依赖手工特征或通用视觉模型；此项以 JEPA 自监督直接利用 DXA 的原始空间结构，动机清晰且样本效率突出（1.5 万张 vs 通用模型数百万级）。突破点是「影像表征可遗传 + 可预测时间年龄」的双重验证，把影像组学与群体遗传学真正接上。局限：训练集为单一队列（Human Phenotype Project），跨人群泛化与扫描仪差异需更多验证；生物学年龄差的干预性结论基于观察性关联。future work 值得关注的是将此类自监督表征与多组学（基因组、蛋白组、代谢组）联合建模。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| Nature Biotech | Evolution of botulinum neurotoxin serotype X proteases to induce inflammatory cell death in cancer cells | 蛋白工程/肿瘤免疫 | 2026-08-03，神经毒素蛋白酶改造用于诱导肿瘤细胞炎性死亡 |
| medRxiv | Whole-blood transcriptomic traces of organ pathology and their causal triage | 转录组/因果推断 | 2026-08-03，全血转录组器官病理痕迹与因果分诊 |
| bioRxiv | Autism-associated NRXN1α deletion rewires the H3K27me3 landscape and epigenetically disrupts human neural induction | 表观基因组/神经发育 | 2026-08-04，NRXN1α 缺失重塑 H3K27me3 景观 |
| bioRxiv | Tau reduction counteracts transcriptomic and behavioral abnormalities in an Alzheimer amyloid model | 转录组/AD | 2026-08-04，Tau 敲低逆转淀粉样模型转录与行为异常 |
| ArXiv | NeuroInspector: A Local-First Environment for Inspecting and Annotating Hierarchical Neuroscience Datasets | 神经科学数据工具 | 2026-08-03，层级神经科学数据集本地化检视工具 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-08-03 07:30 HKT ~ 2026-08-05 07:30 HKT*
