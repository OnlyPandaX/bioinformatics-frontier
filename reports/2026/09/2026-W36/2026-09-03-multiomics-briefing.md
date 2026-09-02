# 🧬 多组学研究简报
**2026年9月3日（周四）| 近48小时精选**

> 搜索范围：2026-09-01 ~ 2026-09-03 | 数据源：Nature, bioRxiv, medRxiv

---

## 📊 整体趋势评述

本期呈现三个并行主线：**Nature Genetics/Methods 密集上线空间多组学与谱系追踪技术报告**（肿瘤时空演化、哺乳动物组织空间染色质共 profiling），**单细胞基础模型进入"冷静评估期"**——两篇独立研究（Yale 部署基准 + Oxford scaling law 检验）同时质疑大规模预训练的实际收益边界，**以及多组学遗传预测资源平台化**（OmicsPred）。空间维度与模型可信度成为当前多组学方法学的双焦点。

---

## 📑 精选论文

### 🔬 论文 1：肿瘤时空谱系追踪 — Nature Genetics 技术报告

**标题**：Spatiotemporal lineage tracing reveals the dynamic spatial architecture of tumor growth and metastasis

**作者**：Matthew G. Jones, Dawei Sun, Kyung Hoi Joseph Min, et al.（共 34 人）
**机构**：Dian Yang（哥伦比亚大学，Lead Contact）；共同通讯还包括 Fei Chen（Broad/Harvard）、Jonathan S. Weissman（Whitehead/MIT）、Nir Yosef（魏茨曼研究所）
**平台**：Nature Genetics (Technical Report) | **日期**：2026-09-02 | **DOI**：10.1038/s41588-026-02739-z
**链接**：https://www.nature.com/articles/s41588-026-02739-z

**一句话概要**：整合 Slide-seq/Slide-tags 空间转录组与 Cas9 谱系追踪，解析 Kras;Trp53 肺癌的时空演化架构。

**主要贡献**：
- 揭示快速亚克隆扩张塑造缺氧、免疫抑制与纤维化微环境，并伴随促转移细胞状态出现
- 证明转移灶起源于原发灶空间受限的特定亚克隆，而非广泛播散
- 在 30μm 邻域实现谱系信息的空间插补，建立"系统发育树 ↔ 空间坐标 ↔ 细胞状态"三重对齐的综合数据集（SRA: PRJNA1381728，~9.9 Tb 数据）

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
该工作将谱系追踪（Weissman/Jack 系）与空间转录组（Fei Chen 系）两大技术流首次在肺腺癌模型中系统性融合，是继 2022 年 Cell 肺转移谱系工作后的空间化升级。核心突破是把"谁来自谁"的演化问题落到"在哪儿发生"，直接检验了转移的时空起源假说。局限在于小鼠模型与人类肿瘤的时空尺度差异，以及空间谱系插补对克隆分辨率的依赖。未来若结合人类样本的多区域测序与纵向活检，有望转化为转移风险的时空预测框架（该预印本 2024 年 10 月 bioRxiv，本次为 Nature Genetics 正式版）。

---

### 🔬 论文 2：哺乳动物组织空间染色质构象+可及性共测方法

**标题**：Spatial chromatin architecture and accessibility co-profiling of mammalian tissues

**作者**：Ping Wang, Juan Wang, Qixuan Wang, Mark W. Youngblood, et al.
**机构**：通讯 Feng Yue（美国西北大学 Feinberg 医学院）与 Rong Fan（耶鲁大学）
**平台**：Nature Methods（开放获取） | **日期**：2026-09-01 | **DOI**：10.1038/s41592-026-03217-4
**链接**：https://www.nature.com/articles/s41592-026-03217-4

**一句话概要**：在同一组织切片上同时捕获空间染色质三维结构与开放性（Hi-C + ATAC 共谱）。

**主要贡献**：
- 实现哺乳动物组织中染色质构象（A/B compartment、TAD 类结构）与染色质可及性的空间共检测，突破此前空间表观方法仅覆盖单模态的限制
- 兼容多种哺乳动物组织（含脑肿瘤临床样本，涉及 Northwestern 神经外科团队合作）
- 为"细胞类型身份 × 三维基因组状态 × 组织微环境位置"的联合解析提供方法学基础

**🔍 Critical 简评**：⭐⭐⭐⭐
空间表观组学长期滞后于空间转录组：此前空间 Hi-C（如 Dip-C/xx-3C 类）多限于培养细胞或单细胞方案，组织尺度上可及性检测（spatial ATAC）也刚起步。本工作将构象与可及性"共谱"并落到组织切片，直接回应了"同一细胞的基因组折叠与调控元件开放是否协同变化"这一此前不可测的问题。推测其灵敏度与通量仍是主要瓶颈（空间组学方法普遍 trade-off），临床 FFPE 兼容性也待验证。若与 RNA 空间组学三模态整合，将是 4D 核组学（nucleome）的重要一步。

---

### 🔬 论文 3：OmicsPred — 多组学性状遗传预测模型中心化平台

**标题**：OmicsPred as a centralized resource for genetic prediction of multi-omic traits

**作者**：Carles Foguet, Laurent Gil, Yu Xu, Sofía Salazar-Magaña, Scott C. Ritchie, Elodie Persyn, et al.
**机构**：通讯 Michael Inouye & Samuel A. Lambert（剑桥大学 Cambridge Baker Systems Genomics Initiative）与 Hae Kyung Im（芝加哥大学）
**平台**：Nature Genetics | **日期**：2026-09-01 | **DOI**：10.1038/s41588-026-02726-4
**链接**：https://www.nature.com/articles/s41588-026-02726-4

**一句话概要**：开放平台统一存放与分发多组学性状的遗传预测模型，并附可复现元数据。

**主要贡献**：
- 建立多组学（转录组、蛋白组、代谢组等）遗传预测模型（即 omic-PRS / 遗传力预测模型）的集中式存取平台，强调可复现性与独立应用所需的关键元数据
- 用多组学、多祖先的 phenome-wide association（PheWAS）分析示范其在靶点发现中的应用（数据来自 Millennium Cohort 等队列）
- 填补该领域模型分散、格式不一、难以复用的基础设施空白

**🔍 Critical 简评**：⭐⭐⭐⭐
多组学 PRS/遗传预测是"组学桥接"的核心工具——用 DNA 预测中间分子表型再关联终点疾病，Inouye 与 Im 团队正是该方向（multi-omic PRS、PWAS）的推动者。本工作的价值不在单一新模型，而在"平台化"：把此前散落各论文的预测模型变成可查询、可复现的公共资源，类似 PRS 领域的 PGS Catalog 对多组学的延伸。资源类工作的局限在于采纳度与长期维护；且模型的可移植性（跨队列、跨祖先）仍是遗传预测的老问题。后续若与 UK Biobank/FinnGen 等大规模蛋白组-基因组资源联动，可能成为靶点发现的默认入口。

---

### 🔬 论文 4：多发性骨髓瘤单细胞图谱定义恶性原型与增殖状态

**标题**：A single-cell atlas of multiple myeloma defines malignant archetypes and proliferative states

**作者**：Mor Zada, Anna Kurilovich, Noam Shapira, Shuang-Yin Wang, et al.
**机构**：通讯 Ido Amit（以色列魏茨曼科学研究所系统免疫学系），临床合作方为 Hadassah 医学中心与 Tel Aviv Sourasky 医学中心等
**平台**：Nature Genetics | **日期**：2026-09-01 | **DOI**：10.1038/s41588-026-02725-5
**链接**：https://www.nature.com/articles/s41588-026-02725-5

**一句话概要**：大规模单细胞解析多发性骨髓瘤，划分恶性浆细胞的 archetypes 与增殖状态。

**主要贡献**：
- 构建覆盖骨髓瘤恶性细胞及其微环境的单细胞图谱，定义可复现的恶性"原型"（archetypes）与增殖程序
- 将分子亚型与临床（治疗反应/预后）状态关联，为风险分层提供细胞状态层面的框架
- 由 Amit 实验室（单细胞免疫学方法重镇）与以色列多家骨髓瘤临床中心联合完成，含患者来源样本

**🔍 Critical 简评**：⭐⭐⭐⭐
多发性骨髓瘤的异质性长期以细胞遗传学异常（如 t(4;14)、17p del）分型，单细胞层面的系统性"恶性状态"定义此前多限于小队列。本图谱的价值在于把增殖状态从静态亚型中独立出来——骨髓瘤的"休眠-增殖"转换恰是复发与耐药的核心。Amit 团队在单细胞方法学上的积累保证了数据质量，但图谱的跨种族普适性与治疗前后纵向覆盖决定其临床转化上限。未来结合血循环肿瘤细胞或 MRD 单细胞监测，或可把 archetype 转化为动态预后指标。

---

### 🔬 论文 5：单细胞基础模型的"实用边界"系统评估

**标题**：Accessible and reproducible deployment reveals the practical boundaries of single-cell foundation models

**作者**：Xiang Zhou 团队（第一作者信息以原文为准）
**机构**：耶鲁大学
**平台**：bioRxiv (Bioinformatics) | **日期**：2026-09-02 | **DOI**：10.64898/2026.01.06.698060
**链接**：https://www.biorxiv.org/content/10.64898/2026.01.06.698060v1

**一句话概要**：统一部署框架下系统检验 13 个单细胞基础模型在近百数据集上的真实收益。

**主要贡献**：
- 构建自动化、可复现的统一评估框架，覆盖预处理、训练机制与下游任务，显著降低 scFM 使用门槛
- 对 13 个主流单细胞基础模型 × 近百数据集进行受控横向评测，检验"大规模预训练是否带来可复现的生物学优势"
- 揭示 scFM 的实用边界——哪些场景预训练确有增益、哪些场景传统方法仍占优（结论以原文为准）

**🔍 Critical 简评**：⭐⭐⭐⭐
单细胞基础模型（scGPT、scFoundation、Geneformer 等）的宣称能力与独立复现之间一直存在落差，此前评估多为"作者自评+零散基准"。本篇与同日 Oxford 的 scaling law 研究（见下）构成对 scFM 范式的首次成规模"外部审计"。突破在于把工程壁垒（异构实现/预处理）作为一等公民纳入评估——这恰恰是临床或普通实验室采纳的真实障碍。局限：预印本结论需经同行评议；评估框架本身的选择（数据集/指标）也会影响排名。这类"冷静评估"论文的价值在于把领域从发布竞赛拉回可证伪的方法学轨道。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | Scaling recipes for single-cell RNA sequencing foundation models: when do scaling laws hold? (Oxford, Buffa) | 单细胞基础模型/scaling law | 预训练损失随模型容量呈幂律下降，但规律性因模型结构而异，9/1 |
| bioRxiv | RECON infers regions of interest from H&E images and reconstructs whole-slide molecular profiles at single-cell resolution (UChicago, Wan) | H&E→分子重建 | 两阶段框架把 ROI 选择与全片单细胞分辨率分子推断统一，超越 superpixel 级 S2-omics，9/1 |
| bioRxiv | A lipid-laden macrophage niche drives immunosuppression in primary central nervous system lymphoma (NUS, Jeyasekharan) | 空间转录组/肿瘤微环境 | Xenium+GeoMx 对比 PCNSL vs 全身 DLBCL，富胆固醇代谢的脂质负载巨噬细胞 niche 驱动 CNS 淋巴瘤免疫抑制，9/1 |
| bioRxiv | Function-driven geometry directs human pilosebaceous unit development (Wellcome Sanger, Haniffa) | 单细胞多组学+空间 | 同一胎儿头皮样本联用组织形态+空间转录组+scMultiomics+ML，构建毛囊皮脂腺单位时空发育图并用类器官验证，9/1 |
| bioRxiv | Characterizing the landscape of gene process dependencies in cancer (CU Anschutz, Way) | 计算癌症/依赖性图谱 | 把 DepMap 依赖映射到基因过程（process）层面刻画癌症依赖全景，9/2 |
| bioRxiv | Exploratory multi-omics analysis reveals sex-specific differences in microbial response to antibiotic exposure (UCSD, Cyphert) | 微生物组多组学 | 抗生素暴露后微生物应答的性别差异多组学探索，9/1 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-09-01 07:30 HKT ~ 2026-09-03 07:30 HKT*
