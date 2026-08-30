# 🧬 多组学研究简报
**2026年8月30日（周日）| 近48小时精选**

> 搜索范围：2026-08-28 ~ 2026-08-30 | 数据源：Nature, bioRxiv, medRxiv, ArXiv（近48h窗口内 ArXiv q-bio 无新提交，主贡献来自 bioRxiv/medRxiv）

---

## 📊 整体趋势评述

本期共同主题是高分辨率多组学正把"肿瘤异质性"从抽象概念推向可在临床样本上定位、定量、乃至干预的层面：空间转录组与单细胞蛋白质谱从转录与蛋白两个互补维度精细刻画侵袭前沿与耐药亚群。与此同时，口腔微生物组荟萃分析在方法层面给出清醒提醒——跨队列可重复性与 AI 分类器的泛化能力，往往比单队列的 AUROC 数字更值得关注；而 Sanger 发布的 53 种正常细胞体细胞突变图谱，则为理解"正常 vs 癌变"的演化基线提供了关键参照。

---

## 📑 精选论文

### 🔬 论文 1：空间功能转录组锁定 Ewing 肉瘤侵袭前沿的 LMO7 促转移枢纽

**标题**：Functional spatial transcriptomics uncover LMO7 as a fusion-regulated and clinically relevant driver of metastasis in Ewing sarcoma

**作者**：Bursic V, Luo H, Henon C, et al.
**机构**：German Cancer Research Center (DKFZ)，通讯作者 Florencia Cidre-Aranaz
**平台**：bioRxiv | **日期**：2026-08-28 | **DOI**：10.64898/2026.08.27.747513
**链接**：https://www.biorxiv.org/content/10.64898/2026.08.27.747513

**一句话概要**：空间分辨功能转录组揭示 Ewing 肉瘤侵袭前沿低融合活性驱动的 LMO7 促转移程序。

**主要贡献**：
- 发现 Ewing 肉瘤患者肿瘤侵袭前沿存在低 FET::ETS 融合活性、高 LMO7 表达的独特转录状态，与肿瘤核心区明显不同。
- 整合蛋白组与转录组证明 LMO7 是调控上皮-间质转化（EMT）与细胞骨架重塑的中枢枢纽。
- 体内外实验显示 LMO7 沉默抑制克隆形成、迁移及转移播散，且高 LMO7 表达与不良预后显著相关。

**🔍 Critical 简评**：⭐⭐⭐⭐
Ewing 肉瘤由 FET::ETS 融合癌蛋白驱动，既往"低融合活性反而促进转移"的现象机制长期不清。本研究用空间功能转录组把转移相关的细胞状态精准定位到侵袭前沿，再联合蛋白组-转录组锁定 LMO7 为可成药枢纽，是空间多组学服务于机制发现的范例。突破点在于将空间异质性与多组学整合直接挂钩临床预后。局限：机制主要在细胞系与异种移植模型验证，临床样本量有限；LMO7 上下游调控网络尚未完全解析。值得关注其作为转移早期标志物与干预靶点的转化潜力。

---

### 🔬 论文 2：量化空间蛋白质组"分辨率—深度"权衡，SLACS 低至约 6 细胞仍保层状特征

**标题**：Balancing spatial resolution and proteome depth in LC-MS based spatial proteomics

**作者**：Meijer M, Hong J, Pohl T, et al.
**机构**：Max Delbrück Center for Molecular Medicine (MDC Berlin)，通讯作者 Ilaria Piazza
**平台**：bioRxiv | **日期**：2026-08-28 | **DOI**：10.64898/2026.08.27.747491
**链接**：https://www.biorxiv.org/content/10.64898/2026.08.27.747491

**一句话概要**：SLACS 系统量化空间蛋白组分辨率—深度权衡，小鼠皮层低至约 6 细胞仍保留层状分子特征。

**主要贡献**：
- 提出用空间激光激活细胞分选（SLACS）系统，系统评估从单细胞到组织区域不同采样单元的分辨率—灵敏度权衡。
- 发现少数细胞采样在保持空间特异性的同时仍保留大量蛋白信息，优于传统激光捕获显微切割（LCM）在低输入时的回收瓶颈。
- 应用于小鼠体感皮层，约 60 细胞区域获得深层分层蛋白谱，约 6 细胞输入仍保留主要层特异性分子模式。

**🔍 Critical 简评**：⭐⭐⭐⭐
基于提取的 LC-MS 空间蛋白质组长期受限于分辨率与深度的此消彼长，传统 LCM 在低输入时回收与可扩展性受限。本研究把"采样单元大小"明确为关键实验设计参数，并给出可落地的最小输入下界，对方法学社区有实用价值。突破：用 SLACS 把空间蛋白组推进到近单细胞尺度。局限：SLACS 适用组织类型与通量仍需拓展；与成像质谱（IMC/MIBI）等原位空间蛋白技术的可比性未充分讨论。未来方向是自动化与多平台基准。

---

### 🔬 论文 3：单细胞蛋白质谱解析儿童 B-ALL 患者特异性亚群，揭示复发易感性表型

**标题**：Single-Cell proteomics discerns patient-specific subpopulations in pediatric B-cell acute lymphoblastic leukemia

**作者**：Jayousi F, Kraus F, Conrrero A, et al.
**机构**：University of British Columbia，通讯作者 Philipp F. Lange
**平台**：bioRxiv | **日期**：2026-08-28 | **DOI**：10.64898/2026.08.27.747627
**链接**：https://www.biorxiv.org/content/10.64898/2026.08.27.747627

**一句话概要**：单细胞蛋白组质谱解析儿童 B-ALL 患者特异性亚群，揭示复发易感性表型。

**主要贡献**：
- 将单细胞分选与高灵敏单细胞蛋白质谱（SCP-MS）结合，对 B-ALL 骨髓样本中的单个白血病母细胞与正常未成熟 B 细胞进行蛋白定量。
- 解卷积细胞异质性，揭示白血病标志物表达可变的亚群，这些亚群在 bulk 分析中常被掩盖。
- 展示其在复发倾向表型早期检测与个体化儿科治疗中的潜力。

**🔍 Critical 简评**：⭐⭐⭐⭐
B-ALL 是儿童最常见癌症，复发多由 bulk 分析掩盖的耐药亚群驱动；既往单细胞研究多停留在转录组层面。本研究把 SCP-MS 推向临床白血病患者样本，在蛋白水平直接刻画患者间异质性，对微小残留病（MRD）与复发预警有现实意义。突破：证明临床样本单细胞蛋白组的可行性与信息增益。局限：样本量有限、单细胞蛋白覆盖深度仍受技术限制，且与 scRNA-seq/多组学的联合尚未展开。未来可望与 MRD 监测流程整合。

---

### 🔬 论文 4：跨 9 队列口腔微生物组荟萃分析锁定共享失衡，并暴露 OSCC 分类器泛化局限

**标题**：Cross cohort oral microbiome meta-analysis identifies shared OPMD OSCC dysbiosis while machine learning exposes limits of OSCC classifier transportability

**作者**：Shi H, Shafizadeh M, Rukh L, et al.
**机构**：University of Manitoba，通讯作者 Saeid Ghavami
**平台**：bioRxiv | **日期**：2026-08-28 | **DOI**：10.64898/2026.08.28.747776
**链接**：https://www.biorxiv.org/content/10.64898/2026.08.28.747776

**一句话概要**：跨 9 队列口腔微生物组荟萃分析锁定共享失衡特征，并揭示 OSCC 分类器跨队列泛化局限。

**主要贡献**：
- 用统一分类流程重处理 5 个 OPMD 与 4 个 OSCC 比较研究的 16S 数据集，量化跨研究共享组成、Shannon 多样性与差异丰度。
- 荟萃分析识别出更小的 OPMD 特征与更广的 OSCC 相关偏移，并列出健康对照中富集的具体菌属（如 Hoylesella shahii、Corynebacterium matruchotii、Lancefieldella）。
- 嵌套留一队列验证显示弹性网络 AUROC 0.778、XGBoost 0.811，但移除队列相关结构后判别力下降，暴露泛化局限。

**🔍 Critical 简评**：⭐⭐⭐⭐
口腔微生物组与口腔潜在恶性疾患（OPMD）/鳞癌（OSCC）关联研究因队列、采样、测序区差异长期难以比较。本研究通过统一重处理+荟萃分析提升了可重复性，且难能可贵地"诚实揭示"了 ML 分类器的跨队列 transportability 问题——这对 AI-for-microbiome 诊断的泛化性是一记必要警示。局限：仅为 16S（无宏基因组功能层）、回顾性、队列异质性仍存在。未来需要前瞻性多中心验证与宏基因组功能注释。

---

### 🔬 论文 5：53 种正常人细胞体细胞突变率与突变特征参考图谱

**标题**：A comprehensive atlas of somatic mutation rates and mutational signatures in normal human cells

**作者**：Pham M H, Harvey L M R, Oliver T R W, et al.
**机构**：Wellcome Sanger Institute，通讯作者 Michael R. Stratton
**平台**：bioRxiv | **日期**：2026-08-29 | **DOI**：10.64898/2026.08.28.747772
**链接**：https://www.biorxiv.org/content/10.64898/2026.08.28.747772

**一句话概要**：53 种正常人细胞突变率与突变特征图谱揭示体细胞演化速率跨度达约 30 倍。

**主要贡献**：
- 系统报告 53 种正常人细胞的突变率与突变特征，建立正常体细胞演化的参考基线。
- 揭示单细胞碱基替换率从精原细胞约 3.5/年/二倍体基因组，到肝细胞/肾近曲小管约 60/年、日晒皮肤表皮数百/年不等，整体呈线性累积。
- 鉴定至少 18 种单碱基替换与 9 种小插入缺失突变特征，部分普遍存在于所有细胞类型，部分仅见于特定类型，外源/内源诱变因素解释其中一部分来源。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
体细胞突变随年龄累积，是癌症与衰老的共同核心；既往大规模突变图谱多聚焦癌组织。本研究在 Sanger/Stratton 体系下给出正常人 53 种细胞类型的参考图谱，为理解"正常 vs 癌变"的演化基线树立里程碑。突破：建立体细胞突变速率的跨细胞类型标准，速率跨度达约 30 倍，并区分普适与特异突变特征。局限：正常组织样本来源与数量仍受限，部分细胞类型覆盖不足。未来结合单细胞测序细化克隆结构、关联疾病风险将是关键延伸。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | Perturb-seq identifies co-regulated gene programs shaping hematopoietic stem and progenitor cells (10.64898/2026.08.27.747033) | Perturb-seq, HSC | 扰动测序解析造血干细胞共调控基因程序 |
| bioRxiv | Multi-omic characterization of axolotl perilymph-cerebrospinal fluid reveals shifts in composition (10.64898/2026.08.27.747356) | multi-omic, 蝾螈 | 美西螈脑脊液多组学组成变化 |
| bioRxiv | G2T: Tissue Reconstruction from Gene Expression via Embedding-Distance Flow Matching (10.64898/2026.08.25.746917) | AI, 空间重建 | 流匹配从基因表达重建组织空间 |
| medRxiv | High-Resolution Spatial Transcriptomics Reveals Interferon-Associated Immune Niches and Antigen… (10.64898/2026.08.23.26361142) | 空间转录组, 免疫 | 高分辨空间转录组解析干扰素相关免疫微环境 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-08-28 02:23 UTC ~ 2026-08-30 02:23 UTC*
