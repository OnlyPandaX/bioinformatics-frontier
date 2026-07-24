# 🧬 多组学研究简报
**2026年7月25日（周六）| 近48小时精选**

> 搜索范围：2026-07-23 ~ 2026-07-24 | 数据源：ArXiv, bioRxiv

---

## 📊 整体趋势评述

本期简报聚焦**基因组基础模型的可解释性与临床转化**这一核心主题。Evo2基因组语言模型从罕见变异预测走向基因-影像关联发现，HierarchicalDAEW将H&E病理图像带入空间组学时代，而Causal Dictionary Learning则从方法论层面回应了"基因组LLM内部表征是否可信"这一根本问题。泛癌CNA signatures的比较分析则为这些AI工具的生物学验证提供了基准参照。

---

## 📑 精选论文

### 🔬 论文 1：H&E 染色图像预测空间转录组 — 兼顾组织结构与不确定性量化

**标题**：HierarchicalDAEW: Domain-Aware Edge-Weighted Graph Convolution with Evidential Uncertainty for Multi-Section Spatial Gene Expression Prediction from H&E Histology

**作者**：Kritanu Chattopadhyay, Soumya Chatterjee, Ondrej Krejcar, Debotosh Bhattacharjee

**机构**：Jadavpur University / University of Hradec Kralove（推测）

**平台**：arXiv | **日期**：2026-07-23 | **arXiv ID**：2607.20896

**链接**：https://arxiv.org/abs/2607.20896

**一句话概要**：双图架构融合组织域结构与基因互作先验，从常规H&E病理图像预测空间解析基因表达，并量化预测可靠性。

**主要贡献**：
- 发现1：Domain-Aware Edge-Weighted卷积操作将Leiden聚类产生的组织域边界作为显式结构特征，实现区域感知建模
- 发现2：蛋白质互作网络+组织特异性共表达的双层基因图谱，通过注意力门控融合， landmark基因集→全转录组预测
- 发现3：证据不确定性估计在多物种（乳腺/结直肠/前列腺/小脑）Visium基准上相关性最优，且能识别低置信区域供病理学家复核

**🔍 Critical 简评**：⭐⭐⭐⭐

① **历史/现状**：空间转录组技术（Visium、Xenium等）因成本高、通量低，难以大规模临床部署；H&E染色作为常规病理手段几乎无处不在，H&E→ST的零成本预测成为该领域热点。② **Motivation**：现有H&E→ST预测方法（如ST-Net、HeSOTA）将组织视为均质空间，忽视了不同组织域（如癌巢、间质、血管）的基因表达差异；同时缺乏不确定性量化导致临床不可解释。③ **突破点**：首次在图卷积框架中引入Leiden-derived domain edges作为域间/域内/边界三类边的显式权重，实现组织架构感知；PPI+共表达双图融合兼顾分子先验；证据学习（evidential learning）替代MC dropout实现可靠的不确定性估计。④ **局限**：需要配对的H&E+ST训练数据；多物种基准仅4种组织泛化性待验证；推理速度未明确。⑤ **值得关注的future work**：整合多实例学习处理WSI patch-level输入；将不确定性估计嵌入诊断决策支持流程；扩展至空间蛋白质组。

---

### 🔬 论文 2：基因组基础模型驱动泛癌基因-影像关联发现

**标题**：Foundation-model-guided radiogenomic discovery linking cancer genomes to cancer scans

**作者**：Frederik Hauke, Jeremias Krause, Patrick Wienholt, Christiane Kuhl, Ingo Kurth, Sikander Hayat

**机构**：RWTH Aachen University Hospital

**平台**：arXiv | **日期**：2026-07-22 | **arXiv ID**：2607.20583

**链接**：https://arxiv.org/abs/2607.20583

**一句话概要**：无需下游训练，Evo2基因组语言模型预测体细胞突变有害性，与CT/MRI影像组学特征全基因组关联，发现罕见驱动基因。

**主要贡献**：
- 发现1：Evo2在无任务特定训练条件下预测突变严重性评分，与基因频率无关，可评估极罕见基因（次要等位基因频率<0.01%）
- 发现2：cRCC队列（n=162）中，除已建立驱动基因外，额外发现46个FDR显著基因，含ciliopathy与细胞骨架疾病基因
- 发现3：跨癌种（肝细胞癌n=93、乳腺癌n=85）验证框架，揭示基因-影像关联具有组织类型特异性

**🔍 Critical 简评**：⭐⭐⭐⭐

① **历史/现状**：传统癌症驱动基因发现依赖突变频率，罕见基因无法被统计检验捕获；影像组学与基因组学的交叉主要聚焦已知基因的表型关联。② **Motivation**：Evo2等基因组LLM已在变异效应预测上超越传统工具，但用于发现性研究（而非分类/预测任务）的可行性尚无系统验证。③ **突破点**：首次将基因组基础模型置于全基因组扫描框架中——对每个突变计算Evo2 severity score，汇总至基因水平，与影像组学特征批量关联，控制TMB后FDR校正；揭示罕见基因对肿瘤影像表型的贡献。④ **局限**：样本量仍偏小（TCGA三个队列各<200例）；Evo2预测的有害性是否真正对应影像表型需要功能验证；仅纳入体细胞突变。⑤ **值得关注的future work**：扩展至更大规模泛癌影像基因组学队列（TCGA+ICGC）；Evo2 severity score与CRISPR功能筛选的交叉验证；三维影像组学（PET/MRI）整合。

---

### 🔬 论文 3：因果字典学习揭示基因组LLM内部TF结合特征表征

**标题**：Causal dictionary learning reveals and validates transcription-factor binding features in genomic language models

**作者**：Sarwan Ali

**机构**：（机构信息未在摘要中确认）

**平台**：arXiv | **日期**：2026-07-21 | **arXiv ID**：2607.19618

**链接**：https://arxiv.org/abs/2607.19618

**一句话概要**：稀疏字典学习+因果干预验证Nucleotide Transformer与DNABERT-2内部表征包含可解释的转录因子结合序列特征。

**主要贡献**：
- 发现1：Top-k稀疏自编码器从两种架构（6-mer tokenizer vs BPE tokenizer）的隐藏激活中提取数千个 monosemantic特征，相当比例直接映射至转录因子序列motif
- 发现2：Naive probes（直接取最大激活位置）产生假阳性motif，归因于序列组成混淆；因果干预（masking/mutating sequence）可区分真实TF binding与组成伪影
- 发现3：Nucleotide Transformer与DNABERT-2在TF motif层面具有部分互补性，不同tokenization策略导致不同的概念化粒度

**🔍 Critical 简评**：⭐⭐⭐⭐

① **历史/现状**：基因组LLM的可解释性研究多采用基于相关性的probing（最大激活→motif enrichment），存在confounding问题；但凡"模型能recover已知的TF motif"就声称"模型学习了TF binding"的做法已被系统性质疑。② **Motivation**：基因组LLM即将进入临床决策支持系统（如突变解读、药物靶点预测），若其内部表征不可信或不可验证，后果严重；因此，建立一套因果验证框架是当务之急。③ **突破点**：首次将稀疏字典学习（从隐藏激活中提取独立特征）与因果干预（masking/mutation实验）结合，形成了一套"提取→验证→因果确认"的闭环方法论；揭示了naive probing的系统性false positive问题。④ **局限**：仅验证了TF binding这一类regulatory feature；字典特征可解释性仍需领域专家审核；计算成本高（需对每个激活向量做sparse reconstruction）。⑤ **值得关注的future work**：扩展至RNA-binding蛋白、表观遗传修饰（甲基化）、剪接调控等更广义的生物学概念验证；将该框架标准化为基因组LLM可解释性的benchmark protocol。

---

### 🔬 论文 4：泛癌CNA Signatures三大框架系统性比较

**标题**：A Pan-Cancer Multi-Omic Analysis of Copy Number Signature Clusters and Genomic Instability

**作者**：Rota Negroni M., Billato I., Romualdi C.

**机构**：University of Padova（推测）

**平台**：bioRxiv | **日期**：2026-07-21 | **DOI**：10.64898/2026.07.20.739333

**链接**：https://doi.org/10.64898/2026.07.20.739333

**一句话概要**：5,800例TCGA泛癌样本三框架CNA signatures比较，signature-level一致性低但clusters生物学可重复，多组学XGBoost预测能力因框架而异。

**主要贡献**：
- 发现1：三种CNS compendia（Drews/Steele等）的单个signatures跨框架一致性有限，但cluster-level生物学注释（favorable/progressive outcome groups）在框架间高度重合
- 发现2：XGBoost模型基于基因表达/甲基化/突变/年龄/肿瘤纯度可高准确度预测部分框架（Drews/Steele）聚类成员，F1>0.8；但某些框架预测性能极低
- 发现3：识别出跨框架共有 favorable-outcome clusters，含特定免疫浸润特征，可能为泛癌基因组稳定性评估提供统一参考

**🔍 Critical 简评**：⭐⭐⭐

① **历史/现状**：CNA signatures已被建议作为泛癌基因组不稳定性评估工具，但现有多个compendia（TCGA、Grey centre、Macintyre等）相互独立，缺乏跨框架系统比较。② **Motivation**：临床转化需要统一框架，但若不同框架识别不同的生物学实体，则临床应用无法统一；亟需benchmark。③ **突破点**：首次在三框架、5800样本、多组学水平进行系统性比较，揭示signature-level不一致但cluster-level可重复这一关键现象，为框架选择提供数据支撑；多组学预测建模为framework-dependent应用提供决策参考。④ **局限**：仅TCGA数据（西方人群为主），种族多样性不足；WGS数据需求限制了低资源场景应用；XGBoost预测的framework-dependent差异原因未深入解析。⑤ **值得关注的future work**：纳入ICGC、Hartwig Medical Foundation等独立队列验证；在全基因组测序受限场景下探索WES/copy number array的可替代性；探索CNA clusters与免疫治疗响应的关联。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| ArXiv | Causal ASCEND: Scalable Two-tier Causal Discovery on High Dimensional Multi-omics Data (2607.04527) | 因果发现、多组学 | 两层级结构因果推断，多项式复杂度；已在07-08期发送 |
| ArXiv | LATTICE: Graph Self-Supervised Learning for Multimodal Spatial Omics Integration (2607.14410) | 空间组学整合、图学习 | 图自监督统一5种空间组学模态；已在07-20期发送 |
| bioRxiv | APOE4 disrupts the central dogma by arresting neuronal proteome dynamics (10.64898/2026.07.15.738801) | APOE4、蛋白质组学、神经退行 | 三组学揭示APOE4破坏神经元蛋白稳态；已在07-24期发送 |
| bioRxiv | HPRC2: A human pangenome reference with near-complete coverage of common genetic variation | 图泛基因组 | HPRC2里程碑；已在07-24期发送 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-07-23 00:00 UTC ~ 2026-07-25 00:00 UTC*
