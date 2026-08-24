# 🧬 多组学研究简报
**2026年8月25日（周二）| 近48小时精选**

> 搜索范围：2026-08-23 ~ 2026-08-25 | 数据源：Nature Genetics, bioRxiv, medRxiv, ArXiv

---

## 📊 整体趋势评述

本期简报聚焦于"多组学与功能精准医学"的交叉前沿：**蛋白组-转录组联合分析**揭示T细胞功能障碍的关键调控因子，**GWAS-单细胞联合方法**在精细分辨因果细胞类型方面取得突破，**大规模人群肿瘤转录组**持续向临床常规应用迈进，而**蛋白质语言模型特征**则在神经肽预测这一传统难题上展现出可解释AI的实用价值。整体趋势显示，多组学正从"多维描述"向"机制因果推断"深化，并在临床转化层面加速落地。

---

## 📑 精选论文

### 🔬 论文 1：肿瘤浸润T细胞的蛋白组-转录组整合分析

**标题**：Proteomics of human cancer-associated T cells identifies regulators of T cell functionality

**作者**：Kaspar Bresser, Zan Hozjan, Nila H. Servaas, et al.

**机构**：阿姆斯特丹大学医学中心 / Oncode Institute（通讯：Monika C. Wolkers）

**平台**：bioRxiv | **日期**：2026-08-23 | **DOI**：10.64898/2026.08.18.745433

**链接**：https://www.biorxiv.org/content/10.64898/2026.08.18.745433v1

**一句话概要**：对未经治疗的NSCLC患者肿瘤浸润CD8+ T细胞进行配对蛋白组+转录组分析，发现8%的差异蛋白在mRNA层面不可见，由此鉴定出CHD4和FASN为T细胞功能的关键细胞内调控因子。

**主要贡献**：
- 首次在原位肿瘤T细胞中对功能障碍和旁观者CD8+ T细胞进行配对 proteome + transcriptome 深度分析
- 发现约8%的差异蛋白在mRNA层面完全无差异表达，揭示了蛋白质水平的独立调控层
- 通过遗传功能验证，识别CHD4（染色质重塑因子，敲除促进效应分化并增强细胞因子分泌）和FASN（脂肪酸合成酶，敲除维持线粒体Fitness和持续功能）为T细胞功能的细胞内在调控因子
- 数据已公开：Zenodo (DOI: 10.5281/zenodo.20713893)，EGA (EGAS50000001886)，ENA (PRJEB114673)

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
肿瘤免疫治疗的核心难题之一是CD8+ T细胞在肿瘤微环境中逐渐失去功能，但介导这一过程的细胞内机制尚未被充分解析。该研究的核心价值在于揭示了一个长期被忽视的盲点——仅靠转录组分析会错过约8%的关键调控蛋白。CHD4作为染色质remodeler参与调控T细胞命运，以及FASN在代谢层面维持线粒体功能的发现，为代谢-表观联合调控T细胞命运提供了机制框架，也为CAR-T等细胞疗法的工程化改造提供了新的靶点。局限方面：样本量相对有限（treatment-naïve NSCLC患者），且未在其他实体瘤类型中验证。值得关注的后续方向：将该分析扩展到接受免疫检查点抑制剂治疗的患者，探索治疗响应与蛋白组特征的关联。

---

### 🔬 论文 2：scDRS-FM——区分因果细胞与标记细胞的精细定位方法

**标题**：Conditional polygenic enrichment distinguishes causal from tagging disease-critical cell populations in single-cell RNA-seq

**作者**：Alistair Turcan, Kangcheng Hou, Kevin Z. Lin, Andreas Pfenning, Saori Sakaue, Martin Jinye Zhang

**机构**：Carnegie Mellon University / Harvard University / University of Washington

**平台**：medRxiv | **日期**：2026-08-23 | **DOI**：10.64898/2026.08.20.26360914

**链接**：https://www.medrxiv.org/content/10.64898/2026.08.20.26360914v1

**一句话概要**：提出scDRS-FM方法，通过条件多基因富集分析，在单细胞分辨率下区分因果细胞类型与因基因表达相关而"标记"关联的伪相关细胞类型。

**主要贡献**：
- 指出当前scRNA-seq + GWAS整合方法的根本性缺陷：当两个细胞群体（如不同T细胞亚群）基因表达高度相关但功能不同时，传统方法会产生"标记效应"（tagging association），将非因果细胞也关联到疾病
- 提出scDRS-FM，通过联合建模相关细胞群体，评估相对于其他细胞的**条件多基因富集**，从而区分因果与标记关联
- 整合75个疾病/性状GWAS（平均N=341K）与9个scRNA-seq数据集（共580个细胞类型，>580万细胞）
- 应用案例：CD4+ T细胞中与IBD相关的特定亚群（多细胞因子表型富集）、与阿尔茨海默病相关的小胶质细胞亚群（稳态程序耗竭，定位至内嗅皮层等特定脑区）
- 结合单细胞去噪技术提升统计效能；数据已公开于Figshare

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
这是本期最值得关注的方法学进展。GWAS与单细胞的整合一直是后GWAS时代功能解读的核心工具，但"tagging关联"的问题此前缺乏系统性的解决方案——类似于GWAS中的linkage disequilibrium效应，基因表达相关性会在细胞层面制造大量假阳性关联。scDRS-FM的核心贡献是引入了"条件"视角：在控制了其他细胞群体后，看哪些细胞的富集信号是独立的。这在概念上类似于线性回归中控制混淆变量的思路。该方法的实际价值在于：帮助研究者在高分辨率细胞图谱中锁定真正值得功能验证的细胞类型，避免资源浪费在伪相关细胞群体上。值得关注的局限：方法表现依赖于scRNA-seq数据的质量（去噪步骤能否真正去除技术噪声），且在细胞类型定义不统一的数据集间的泛化性仍需更多验证。

---

### 🔬 论文 3：十年磨一剑——SCAN-B大规模人群乳腺癌转录组临床整合

**标题**：Population-scale integration of tumor transcriptomics into breast cancer care: a decade of the SCAN-B initiative

**作者**：Lao H. Saal, Hina Dalal, Pei Meng, Christian Brueffer, et al.（共36位作者，通讯：Lao H. Saal，Lund University）

**机构**：Lund University / 瑞典南部9家医院

**平台**：medRxiv | **日期**：2026-08-23 | **DOI**：10.64898/2026.08.20.26360879

**链接**：https://www.medrxiv.org/content/10.64898/2026.08.20.26360879v1

**一句话概要**：瑞典SCAN-B项目历经十年，纳入超过15,000名乳腺癌患者，建立了真实世界人群规模的肿瘤RNA-seq分析体系并实现临床常规化落地。

**主要贡献**：
- 展示了过去十年瑞典SCAN-B（Sweden Cancerome Analysis Network - Breast）项目的完整成果：前瞻性纳入瑞典南部9家医院>15,000名乳腺癌患者，覆盖>90%的目标人群
- 在常规临床流程中集成新鲜肿瘤组织采集→RNA-seq→1周内报告分子标志物的工作流
- RNA-seq同时实现基因表达分子分型（如PAM50 intrinsic subtypes）和体细胞突变检测（PIK3CA、TP53、ESR1、ERBB2等），86.8%的肿瘤中鉴定出可靶向突变
- 建立了开源工具SCAN-B MutationExplorer供研究社群访问数据
- 证明了大规模真实世界肿瘤RNA-seq的临床可操作性：为精准医疗的普及化提供了可复制的实施模型

**🔍 Critical 简评**：⭐⭐⭐⭐
SCAN-B的意义超越了具体的科学发现，它展示了一种雄心勃勃的转化医学范式——将多组学整合嵌入国家医疗系统常规流程，而非停留在学术研究层面。十年纳入15,000例患者、覆盖9家医院、90%入组率的成就，背后是系统性的基础设施建设和多学科协作。该工作的一个关键价值在于揭示了RNA-seq作为"一站式"临床工具的潜力：同时提供表达分型（指导治疗选择）和突变检测（指导靶向用药），避免了传统做法中需要分别进行IHC/FISH和NGS的多步骤流程。值得注意的是，该项目的成功与瑞典相对集中化的医疗系统密切相关，其模式在其他国家推广需要相应的医疗体系调整。更值得关注的是：该项目持续产出（包括本次十年总结）将成为评估真实世界精准医学效果的珍贵数据资源。

---

### 🔬 论文 4：mLS-GKM——gkm-SVM多分类与可解释性的大幅升级

**标题**：mLS-GKM: Efficient Multi-class Regulatory Sequence Classification with Gapped k-mer SVMs

**作者**：Kieran Howard, Nathan Harmston

**机构**：Nottingham Trent University

**平台**：ArXiv (q-bio.GN) | **日期**：2026-08-20 | **DOI**：arXiv:2608.20576

**链接**：https://arxiv.org/abs/2608.20576

**一句话概要**：将经典的LS-GKM gapped k-mer SVM扩展为多分类和概率标定版本，在322个ENCODE ChIP-seq数据集上验证，gkmpredict提速22倍，gkmexplain提速80倍，内存减少65%。

**主要贡献**：
- LS-GKM是生物信息学中处理调控序列分类的经典工具，但仅支持二分类且无概率输出。mLS-GKM填补了这一空白
- 在322个ENCODE ChIP-seq数据集上，多分类分类器与LS-GKM二分类器结果完全一致（byte-identical），保证了向后兼容性
- 关键性能提升：gkmpredict（预测）22倍提速，gkmexplain（可解释性分析）80倍提速，峰值内存减少65%
- 新增功能：多分类、概率标定预测、并行推理、内存高效序列解释、训练checkpointing
- 实用演示：可直接从序列区分enhancer、promoter和CTCF结合位点，并识别出生物学相关的调控基序

**🔍 Critical 简评**：⭐⭐⭐⭐
gkm-SVM是生物序列机器学习领域的一个"老兵"——原理简洁、可解释性强、在小样本场景下稳健，但长期受制于计算效率瓶颈。mLS-GKM的贡献是在保持方法论核心价值的同时，大幅提升了工程实用性。80倍提速的gkmexplain意义尤其重大——可解释性分析的高成本一直是阻碍该方法应用于大规模项目的关键因素。该工作也反映了一个更广泛的趋势：在Transformer语言模型席卷生物序列领域的当下，经典核方法的"工程化复活"仍然有其不可替代的价值，尤其在可解释性和小样本场景。局限：与深度学习方法在大规模数据集上的比较仍有不足；多分类场景下的性能边界（如数百个类别）尚未充分评估。对于需要理解序列变异功能意义的场景（如解读GWAS非编码变异），mLS-GKM值得优先考虑。

---

### 🔬 论文 5：InterPLM稀疏自编码器特征用于神经肽前体预测

**标题**：Sparse autoencoder features from InterPLM predict neuropeptide precursors among secreted proteins

**作者**：Anastasiya V. Kulikova, Angie L. Bookout, Thomas L. Koch, Helena Safavi-Hemami

**机构**：Novo Nordisk Foundation Center for Basic Metabolic Research（通讯单位）/ 田纳西大学

**平台**：bioRxiv | **日期**：2026-08-23 | **DOI**：10.64898/2026.08.20.746077

**链接**：https://www.biorxiv.org/content/10.64898/2026.08.20.746077v1

**一句话概要**：利用InterPLM蛋白语言模型的稀疏自编码器（SAE）特征，可解释地识别神经肽前体序列，在人类和小鼠、斑马鱼、线虫、果蝇中均展现出良好的跨物种泛化能力。

**主要贡献**：
- 神经肽发现长期受制于短序列和高序列异质性，传统motif和同源搜索方法效果有限
- 利用InterPLM（ESM-2衍生的蛋白语言模型）的SAE特征，将高维embedding压缩为可解释的稀疏 disentangled 特征
- 发现仅需少量SAE特征即可高精度区分神经肽前体和非神经肽分泌蛋白，并实现了跨物种泛化（人→小鼠→斑马鱼→线虫→果蝇）
- 提供开源工具和网页预测器（biolib.com）
- 经费支持：Novo Nordisk / NovoSTAR grant

**🔍 Critical 简评**：⭐⭐⭐⭐
神经肽是神经科学和代谢疾病研究的重要分子，但由于其短小（通常<100残基）和序列多样性的特点，传统生物信息学工具在神经肽发现上一直效果不佳。该工作巧妙地将"可解释AI"（SAE特征）与"蛋白质语言模型"结合，提供了一种无需手工设计特征的自动化预测pipeline。值得关注的创新点在于：SAE的特征稀疏性使其具有内在可解释性——可以识别出哪些SAE维度与神经肽性质相关，这比黑盒深度学习分类器更有生物学价值。跨物种泛化性是其主要亮点，表明神经肽的某些序列特征在不同物种间保守且可被语言模型捕获。局限：目前仅关注前体（prepro-hormone）而非成熟神经肽的识别；对于非经典分泌通路的神经肽覆盖度未知；与AlphaFold3等结构预测工具的结合潜力值得探索。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| ArXiv | PerturbRx: Treatment-Conditioned Latent Transitions for Patient Drug Response Prediction | 单细胞+药物响应预测+隐空间建模 | 从scRNA-seq学习药物诱导的转录组转换，而非仅从基线预测 |
| Nature Biotech | OneCell CUT&Tag: Simultaneous single-cell profiling of chromatin, transcriptome and surface markers | scCUT&Tag三组学整合 | 在单个细胞中同时分析H3K4me1、RNA和表面标志物 |
| Nature Commun | stPainter: Enhancing pan-cancer spatial transcriptomics at single-cell resolution | 空间转录组泛癌整合 | 10 Aug 2026发表 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-08-23 00:00 UTC ~ 2026-08-25 08:00 HKT*
