# 🧬 多组学研究简报
**2026年8月29日（周六）| 近48小时精选**

> 搜索范围：2026-08-27 ~ 2026-08-29 | 数据源：Nature, ArXiv, bioRxiv, medRxiv（共筛查 501 篇预印本 + 150 篇 arXiv q-bio）

---

## 📊 整体趋势评述

本期最鲜明的信号是**基础模型的模态扩张**：转录组独占 foundation model 红利的局面被打破，蛋白质组用不到 5 万张谱图追平了训练量高出两个数量级的转录组大模型，而"暗物质"蛋白组则从参考序列之外反向定义了搜索空间。与之并行的另一条主线是**空间维度下沉到 DNA 层**——拷贝数亚克隆首次能在归档蜡块上以亚毫米分辨率规模化读出，让形态学、转录程序和克隆谱系第一次落在同一坐标系里。第三条线索更朴素但同样关键：本期多篇工作把力气花在**量化技术偏倚而非追逐新指标**，从 snRNA-seq 跨化学平台的噪声解构到 LC-MS 空间蛋白组的取样单元权衡，方法学正从"能测"转向"知道测出来的是什么"。

---

## 📑 精选论文

### 🔬 论文 1：蛋白质组终于有了自己的基础模型

**标题**：OmicsFM brings proteomics into the foundation model era

**作者**：Sander Heyndrickx, Ralf Gabriels, ..., Tine Claeys；通讯：Lennart Martens
**机构**：VIB-UGent Center for Medical Biotechnology, Ghent University（比利时）
**平台**：bioRxiv | **日期**：2026-08-28 | **DOI**：10.64898/2026.08.25.747021
**链接**：https://doi.org/10.64898/2026.08.25.747021

**一句话概要**：蛋白质组数据能否像转录组一样支撑通用表征学习？

**主要贡献**：
- 提出模态无关 Transformer OmicsFM，用"掩码丰度重建"在 1,397 个重处理 PRIDE 项目、48,837 张质控后蛋白组谱图上完成预训练，规模为该领域首次。
- 证明数据量并非唯一决定因素：训练样本比同类 bulk / 单细胞转录组模型少 14~93 倍，性能却与之相当，注意力网络在九个参考数据库上恢复的分子关系多于共表达方法和现有单细胞基础模型。
- 揭示蛋白组与转录组表征捕获**互补**生物学，且样本级嵌入在跨研究场景下仍保持生物结构，可迁移至细胞类型分类、基因必需性预测和扰动响应预测并优于任务专用模型。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
基础模型在生物学的第一波胜利几乎全部建立在转录组的"数据富矿"之上——scGPT、Geneformer 之流依赖的是数千万细胞级语料，这让蛋白组一直被默认为"数据量不够，不配有大模型"。本文的动机正是拆掉这个先验：如果掩码重建学到的是分子共变的结构而非样本的绝对数量，那么信噪比更高、更接近表型的蛋白丰度本该更"省数据"。结果站住了这一推理，48k 谱图追平百万级转录组模型是本期最有信息量的单一数字。局限在于 PRIDE 语料的技术异质性（不同仪器、不同定量策略、DDA/DIA 混杂）如何被模型内化仍是黑箱，且缺失值在蛋白组中是"信息性缺失"，掩码重建这一目标函数与之的耦合关系文中未充分解剖；此外基准任务仍偏向已有转录组模型的评测框架，对蛋白组独有的任务（PTM 状态、复合物化学计量）尚未触及。值得追踪的 future work 是把它与本期第 2 篇的非经典 proteoform 搜索空间打通——一个不知道"暗蛋白"存在的蛋白组基础模型，词表本身就是不完整的。

---

### 🔬 论文 2：AML 的"暗蛋白组"被系统性点亮

**标题**：Recurrent non-canonical proteoforms in acute myeloid leukemia identified by integrative proteogenomics

**作者**：Laura K. Schmalbrock, Asher Preska Steinberg, ..., Andrew McPherson；通讯：Alex Kentsis
**机构**：Memorial Sloan Kettering Cancer Center（美国）
**平台**：bioRxiv | **日期**：2026-08-28 | **DOI**：10.64898/2026.08.27.747547
**链接**：https://doi.org/10.64898/2026.08.27.747547

**一句话概要**：肿瘤翻译出多少参考蛋白组之外的蛋白，其中哪些反复出现？

**主要贡献**：
- 建立队列驱动的蛋白基因组学策略：123 例人类 AML 样本 + 13 例健康 CD34+ 对照的配对 RNA-seq 与质谱，用 ProteomeGenerator2 从头组装转录本并预测 ORF，把搜索空间从参考蛋白组扩展到样本自身。
- 发现 5,849 个 Swiss-Prot 未注释 proteoform，其中 1,987 个与已注释人类蛋白无同源性；39 个候选（多为 microprotein）在 >10% 患者中反复检出，14 个经深度分级多酶 DIA 独立验证。
- 结构建模提示这些非经典产物可分为内在无序型、α-螺旋型 microprotein 以及膜/分泌通路相关 proteoform 等功能类别，为肿瘤特异性抗原和治疗靶点提供候选池。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
"参考蛋白组不等于实际翻译产物"这一认识可追到十年前的 Ribo-seq 与 proteogenomics 早期工作，但绝大多数研究止步于个案发现，原因是单样本的假阳性无法与真信号区分。本文的关键设计是把**复现性**提升为一等公民：跨 123 例患者的 recurrence 加上 CD34+ 正常对照的 absence，构成了远比 FDR 阈值更强的过滤器——这也是它比同类"暗蛋白组"论文更值得读的地方。局限同样清楚：de novo 组装 + ORF 预测扩大搜索空间必然膨胀假设检验负担，作者虽以独立 DIA 验证 14 个候选，但 39 个 recurrent 候选中的其余部分仍处于"有谱图支持"而非"确证存在"的状态；更本质的是全文尚未提供任何功能性证据，microprotein 是被翻译的噪声还是被选择保留的功能单元，目前只能靠结构预测猜测。最值得关注的 future work 有二：一是这些 proteoform 能否被 MHC 呈递（若能，则是天然的 AML 新抗原库）；二是把这一 cohort-informed 搜索空间做成可复用资源，让后续 AML 质谱数据不必重复造轮子。

---

### 🔬 论文 3：归档蜡块上直接读出空间拷贝数亚克隆

**标题**：Scalable spatial DNA sequencing from archival tissue maps copy number subclones

**作者**：Cristian Soitu, Umut Sahin, ..., Richard Bryant；通讯：Srinivasa Rao
**机构**：Nuffield Department of Surgical Sciences, University of Oxford（英国）
**平台**：bioRxiv | **日期**：2026-08-27 | **DOI**：10.64898/2026.08.24.746226
**链接**：https://doi.org/10.64898/2026.08.24.746226

**一句话概要**：能否在存档组织上低成本获得亚毫米级拷贝数图谱？

**主要贡献**：
- 提出 ARMS DNAseq（Adaptive Resolution Multiscale Spatial DNA sequencing），用超低覆盖度 WGS 在用户自定义的亚毫米分辨率上从归档样本提取 CNA 谱，3 例患者共 766 个 tile、覆盖 >300 mm²，每 tile 1.2–2.6 M 有效读长、tile 面积 0.1–0.99 mm²。
- 证明空间分辨的 CNA 能识别出多区域 bulk WGS 中被掩盖或表征不全的额外肿瘤亚克隆，从而在组织架构语境下重建肿瘤演化路径。
- 展示两层整合能力：亚克隆身份可由深度学习提取的组织图像表征预测；与空间转录组对齐后揭示亚克隆特异的免疫细胞共定位，以及跨越亚克隆边界的转录程序。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
空间组学的繁荣几乎完全发生在 RNA 和蛋白层，DNA 层长期缺位——不是因为不重要（克隆谱系恰恰是肿瘤演化的骨架），而是因为现有方法通量低、成本高、且强依赖新鲜组织。本文最务实的贡献是把"归档 FFPE + 超低覆盖 WGS"这两个廉价条件组合起来，用自适应分辨率把区域逐个测序的手工活变成可扩展流程，这对回顾性队列的价值远超对前瞻性研究的价值。真正令人兴奋的是"形态学 → 亚克隆"的可预测性：若图像表征能稳定推断克隆身份，理论上可以在无测序的病理切片上做克隆制图。但样本量是硬伤——3 例患者无法支撑任何泛化性声明，深度学习预测在如此小的样本上极易学到批次/切片特征而非生物信号；此外超低覆盖度只能给 CNA，点突变、结构变异和拷贝中性 LOH 都无法企及，因此它是 bulk WGS 的空间补充而非替代。后续最该做的是扩到数十例并做跨中心验证，同时把 CNA 空间图与本期第 1、2 类分子层（蛋白/proteoform）叠起来，回答"克隆边界是否也是蛋白表型边界"。

---

### 🔬 论文 4：把技术噪声从生物学噪声里拆出来

**标题**：Cross-chemistry single-nucleus RNA-seq identifies gene length and CpG-island promoters as determinants of transcriptional noise

**作者**：Rafal Czapiewski, Michael Chiang, ..., Davide Marenduzzo；通讯：Nick Gilbert
**机构**：MRC Human Genetics Unit, Institute of Genetics and Cancer, University of Edinburgh（英国）
**平台**：bioRxiv | **日期**：2026-08-28 | **DOI**：10.64898/2026.08.25.747056
**链接**：https://doi.org/10.64898/2026.08.25.747056

**一句话概要**：跨平台可复现的转录噪声由基因的哪些内在特征决定？

**主要贡献**：
- 在人类淋巴母细胞核上系统对比 Evercode WT（SPLiT-seq / Parse）与 Chromium（10x）两种化学：前者更可靠地达到目标测序深度与核数、随机六聚体引发带来更多内含子读长与非编码 RNA；后者回收更多细胞、对多聚腺苷酸化转录本和细胞系标记更灵敏。
- 提出对平均表达去趋势的噪声度量，证明每基因噪声估计在两种化学间可复现，从而给出平台无关的噪声量化基础。
- 发现噪声的主要决定因素是**基因总长度**而非外显子长度，且具 CpG 岛启动子的基因表达变异更低；同时噪声在 G2M 期低于 G1 期。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
转录噪声（cell-to-cell heterogeneity）自 2000 年代初的单分子成像时代就被认为携带发育与疾病信息，但单细胞时代它变成了一个尴尬的量：任何噪声估计都同时包含捕获效率、扩增偏倚和真实爆发式转录，而不同平台的化学差异让跨研究比较几乎不可能。本文的 motivation 因此非常干净——不新造指标，而是先证明指标在两套正交化学下**收敛**，再谈生物学解释。这个顺序值得所有做单细胞方法学的人抄。其突破点在于把噪声归因到基因长度和 CpG 岛启动子这两个可从基因组注释直接读出的内在特征，暗示噪声更多由基因结构和启动子类型编码，而非由细胞状态随机决定。局限是单一细胞系（淋巴母细胞）加单一物种，结论能否外推到分化中的原代组织完全未知；仅对比两个平台也不足以支撑"平台无关"的强表述（BD Rhapsody、Fluent、Scale 等化学未纳入）；基因长度与噪声的关联还需排除长基因内含子读长在核 RNA 中被优先捕获这一技术共线性。值得关注的是把该噪声度量用作衰老/疾病进展的读出——若基因长度是主要驱动，那么"衰老导致噪声上升"的既有结论可能需要按基因长度重新分层校正。

---

### 🔬 论文 5：TWAS 信号到药物再利用的自动化闭环

**标题**：TRACE: A fine-tuned biomedical language model for directionally informed drug repurposing from transcriptome-wide association studies

**作者**：Collins O. Otieno, Hannah M. Seagle, ..., Digna R. Velez Edwards；通讯：Todd L. Edwards
**机构**：Division of Epidemiology, Department of Medicine, Vanderbilt University Medical Center（美国）
**平台**：medRxiv | **日期**：2026-08-28 | **DOI**：10.64898/2026.08.25.26361263
**链接**：https://doi.org/10.64898/2026.08.25.26361263

**一句话概要**：TWAS 的效应方向能否自动匹配到方向一致的已批准药物？

**主要贡献**：
- 构建基因与表型无关的 TRACE 流程：输入 TWAS 基因及效应方向，标准化基因符号，从四个数据库检索 FDA 已批准药物-基因候选，抓取 PubMed 文献，再用微调生物医学语言模型判定文献是否支持直接药物-基因关系、作用机制及效应方向。
- 关键设计是**方向一致性比对**——把药物推断的调控方向与 TWAS 效应量隐含的方向对齐来排序候选对，并反向标记潜在药物安全性隐患；基于 BiomedBERT 的本地分类器在三项并行任务上取得 held-out macro F1 0.809。
- 多层验证：在人工整理的子宫内膜异位症金标准（43 对）上召回 90.7%，外部 MASLD 与 T2D 独立研究分别召回 88.2% 与 92.9%；应用于 99 个子宫内膜异位症 TWAS 基因产出 1,089 个 FDA 已批准候选对。

**🔍 Critical 简评**：⭐⭐⭐⭐
遗传学驱动的药物再利用不是新概念——孟德尔随机化和 TWAS 早已被用来给靶点"加遗传学证据"，但从信号到候选药物的那一段始终是研究生手工查库、读文献、判方向的劳动密集环节，既不可复现也难以规模化。TRACE 的价值在于它没有把 LLM 当成万能生成器，而是把它压缩成一个**方向分类器**嵌进确定性流程里，这一克制的架构选择让整个 pipeline 可审计、可复算，也解释了为何 macro F1 只有 0.809 却仍能在三个独立队列上稳定召回近九成。局限也源于同一设计：召回率的分母是"至少存在于一个被查询数据库中"的药物对，因此它衡量的是自动化替代人工检索的保真度，而非发现真正新颖再利用机会的能力；TWAS 的方向本身受组织选择和预测表达模型质量影响，方向错了下游全错；1,089 个候选对没有任何湿实验或临床跟进，实际转化率仍完全未知。最值得做的 future work 是把方向一致性判定接到孟德尔随机化和 PheWAS 副作用图谱上做三角验证，并在一个前瞻性的适应症上真正推进一到两个候选，让流程从"能召回已知"迈向"能预测未知"。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | Balancing spatial resolution and proteome depth in LC-MS based spatial proteomics | 空间蛋白组 / SLACS | MDC Berlin。系统刻画取样单元大小与蛋白组深度的权衡，约 60 细胞可得分层分辨谱，低至约 6 细胞仍保留主要层特异模式 |
| bioRxiv | Comparative Single-Cell Profiling of CRISPR Knockout and Interference Defines Modality-Specific Strengths | Perturb-seq / 功能基因组学 | Cancer Research Horizons。87 条 sgRNA 靶向 29 个 UPR 基因，CRISPRko 与 CRISPRi 转录表型高度一致，二者互补而非替代 |
| bioRxiv | Gene expression inference from cell-free DNA using uncertainty-aware deep learning | cfDNA / 液体活检 | Fred Hutch（Gavin Ha），v2 修订。Triton 特征提取 + Proteus 概率模型，从标准深度 cfDNA WGS 反推单基因表达，含不确定度筛除机制 |
| bioRxiv | A pretrained unified model enables cellular functional profile prediction and multi-objective virtual drug screening | 基础模型 / 虚拟筛选 | Michigan State University。细胞功能谱预测与多目标虚拟药物筛选统一建模 |
| bioRxiv | Single-cell proteomics discerns patient-specific subpopulations in pediatric B-cell ALL | 单细胞蛋白组 / 白血病 | University of British Columbia。单细胞蛋白组解析儿童 B-ALL 患者特异亚群 |
| arXiv | RegimeFormer: A Large Protein Model of Global Perturbation Regimes (2608.26586) | 蛋白大模型 / 扰动 | q-bio.QM。全局扰动模式的蛋白大模型（注：8/28–8/29 为周末，arXiv 未发布新公告批次） |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-08-27 00:00 UTC ~ 2026-08-29 08:56 UTC*
