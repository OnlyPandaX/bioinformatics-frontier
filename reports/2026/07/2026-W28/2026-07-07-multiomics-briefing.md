# 🧬 多组学研究简报
**2026年7月7日（周二）| 近48小时精选**

> 搜索范围：2026-07-05 ~ 2026-07-07 | 数据源：Nature, bioRxiv, medRxiv, ArXiv

---

## 📊 整体趋势评述

本期简报的核心主题是**多组学与基础模型的能力边界**。HIV多组学 clustering（1230人）和大脑多模态年龄预测（24648人）的同期发表，展示了整合更多分子层/影像层数据仍是推动精准医学的核心驱动力。与此同时，scGPT扰动中心化微调的论文表明，基础模型的隐空间可以"objective-driven"重塑——从细胞状态表征转向扰动响应表征，且涌现出从未显式训练的生物学关系。这两条路径（纵向扩大数据规模 vs. 横向重塑表征目标）共同定义着领域当前的发展方向。

---

## 📑 精选论文

### 🔬 论文 1：多组学聚类揭示HIV病毒库异质性及宿主免疫机制

**标题**：[Multi-Omics Clustering Differentiates the Total and Intact HIV Reservoirs and Related Host Immune Mechanisms](https://www.biorxiv.org/content/10.64898/2026.06.24.734029)

**作者**：Rios-Vazquez, V.; Delporte, M.; Otten, T.; et al.
**机构**：Radboud University Medical Center（Netea/MG团队）
**平台**：bioRxiv | **日期**：2026-07-06（v2） | **DOI**：10.64898/2026.06.24.734029
**链接**：https://www.biorxiv.org/content/10.64898/2026.06.24.734029

**一句话概要**：整合转录组/甲基化/免疫表型/蛋白质组/病毒库测量，对1230名HIV感染者聚类出三种免疫内型，并识别出完整库与总库的不同宿主预测因子。

**主要贡献**：
- 贡献1：首次对1230名HIV感染者进行多组学聚类，识别出"All Low"（低总库/低完整库）、"All High"（高总库/高完整库）和"Mixed"（高总库/低完整库）三种免疫内型。
- 贡献2：非线性的多层机器学习识别出线性单层分析无法捕获的关键预测因子——IFNγ产生量和TCF7/AK5表达预测完整库大小，IL-1β/MCP-1产生和MAN1C1/EDAR表达预测总库大小。
- 贡献3：建立HIV病毒库多组学整合框架，为个性化治愈干预研究提供系统级资源。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
> **背景**：HIV治愈研究的长期瓶颈在于病毒库异质性——不同患者的总库（包含缺陷病毒）与完整库（可复制病毒）比例差异极大，但这种差异的宿主决定因素长期不清晰。现有研究多停留在单组学层面（如仅测转录组或仅测蛋白质组）。**动机**：需要从系统层面理解什么决定了一个患者是"低库"还是"高库"类型——这是精准治愈干预的前提。**突破点**：多组学聚类直接定义三种可重复的内型；非线性和线性分析的结果差异说明，仅做单层分析会系统性遗漏关键预测因子（如MAN1C1/EDAR这种总库特异因子）。**局限**：横断面设计无法建立因果关系；Radboud队列主要是欧洲血统，推广性待验证；完整库与总库的生物学差异（缺陷病毒如何驱动总库规模）仍是黑箱。**Future work**：纵向追踪内型转变，探索干预后的内型迁移；扩展至非洲/亚洲队列；将完整库/总库的非线性预测因子纳入治愈试验分层。

---

### 🔬 论文 2：CellTFusion——bulk RNA-seq转录调控网络框架识别功能性多细胞状态

**标题**：[CellTFusion: a transcriptional regulatory network framework for the identification of functional multicellular states from bulk RNA-seq data](https://www.biorxiv.org/content/10.64898/2026.06.30.735682)

**作者**：Hurtado, M.; Pancaldi, V.
**机构**：Université de Toulouse, INSERM, CNRS, CRCT
**平台**：bioRxiv | **日期**：2026-07-05（v1） | **DOI**：10.64898/2026.06.30.735682
**链接**：https://www.biorxiv.org/content/10.64898/2026.06.30.735682

**一句话概要**：将肿瘤微环境bulk RNA-seq解卷积与转录因子调控网络联合建模，从独立特征中提取协同的功能性多细胞状态，并预测免疫治疗响应。

**主要贡献**：
- 贡献1：CellTFusion将细胞类型解卷积、转录因子活性和多细胞状态联合建模——三者不再是独立输出，而是通过共享的调控程序相互约束。
- 贡献2：在黑色素瘤和膀胱癌队列中识别出对立的治疗响应相关多细胞状态——这些状态仅在联合建模时才显现，单独分析则被遗漏。
- 贡献3：跨队列迁移性优于已有TME表征工具，为bulk RNA-seq数据丰富的肿瘤免疫研究提供通用框架。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
> **背景**：bulk RNA-seq仍是肿瘤微环境（TME）研究的主力平台，但现有工具将细胞丰度、TF活性和通路活性视为独立变量——这与它们在生物学上相互依存的现实不符。**动机**：如何从bulk数据中提取"功能性多细胞状态"（即跨细胞类型的协调调控程序）？这是连接组学数据与临床表型的关键缺口。**突破点**：CellTFusion的核心创新在于联合建模而非串联分析——它同时反卷积细胞组成、推断TF活性、构建多细胞状态，三者相互验证。更重要的是，黑色素瘤和膀胱癌中对立的治疗响应状态仅在联合建模时出现，证明协同效应真实存在。**局限**：依赖于已有的细胞类型reference panel，对于罕见细胞类型或新细胞状态可能漏检；TF活性的推断依赖转录因子数据库覆盖度。**Future work**：扩展至空间转录组验证；整合蛋白质组数据；针对ICB之外的其他疗法（靶向、化疗）建模。

---

### 🔬 论文 3：基础模型重塑为扰动中心化表征——scGPT微调的启示

**标题**：[Task-adapted biological foundation models uncover perturbation-centric representations](https://www.biorxiv.org/content/10.64898/2026.06.30.735584)

**作者**：Pareja-Lorente, E.; Aloy, P.
**机构**：Institute for Research in Biomedicine（Patrick Aloy团队）
**平台**：bioRxiv | **日期**：2026-07-05（v1） | **DOI**：10.64898/2026.06.30.735584
**链接**：https://www.biorxiv.org/content/10.64898/2026.06.30.735584

**一句话概要**：scGPT微调从30M细胞转录组预训练目标转向300万LINCS L1000扰动谱预测目标后，隐空间重塑为扰动中心化表征，意外涌现出化学相似性、MOA和靶点关系。

**主要贡献**：
- 贡献1：仅通过改变预训练目标（从重建细胞状态→预测扰动身份），scGPT隐空间自发重塑为"扰动中心化"表征——同一化学/遗传扰动在不同实验条件下被映射至相近空间位置。
- 贡献2：尽管仅被训练识别扰动身份，微调后的表征涌现出化学结构相似性（AUROC 0.81）、MOA（Hit@10达100%）和靶点关系（AUROC 0.74）。
- 贡献3：利用该表征空间对近12000种未表征化合物进行MOA注释和靶点优先排序，展示了可操作的实用价值。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
> **背景**：scGPT等单细胞基础模型在数千万细胞上预训练，学到的是"细胞在做什么"——即稳态或处理后的细胞状态表征。**动机**：这些模型的隐空间能否通过改变训练目标而重塑为其他生物学概念？扰动响应的可预测性是虚拟细胞和药物发现的核心需求。**突破点**：这是第一篇系统证明"改变预训练目标可重塑基础模型隐空间"的工作，且涌现的化学相似性/MOA关系是自发产生的——训练目标并未提供这些标签。这意味着隐空间中确实编码了这些关系，只是原始预训练目标没有激活它们。**局限**：仅在scGPT上验证，其他基础模型（如Geneformer、scFoundation）是否具有同等重塑潜力待测；L1000扰动平台本身的覆盖度有限。**Future work**：在scRNA+ATAC多模态基础模型上复现；在未见扰动组合上测试zero-shot泛化；探索隐空间导航（latent navigation）进行虚拟扰动设计。

---

### 🔬 论文 4：精神分裂症与多发性硬化症的共享基因组结构——HCAR1神经免疫检查点

**标题**：[Shared Genomic Architecture Between Schizophrenia and Multiple Sclerosis Identifies an Un-Drugged HCAR1 Neuroimmune Checkpoint](https://www.biorxiv.org/content/10.64898/2026.06.30.735650)

**作者**：Krantz, B. A.
**机构**：University of Maryland Baltimore
**平台**：bioRxiv | **日期**：2026-07-05（v1） | **DOI**：10.64898/2026.06.30.735650
**链接**：https://www.biorxiv.org/content/10.64898/2026.06.30.735650

**一句话概要**：交叉精神分裂症和多发性硬化症GWAS架构，定位HCAR1串联调控域共享结构变异，揭示巨噬细胞乳酸感知失效是两种疾病共同的免疫失调机制。

**主要贡献**：
- 贡献1：首次发现SCZ和MS共享的基因组断裂点精确位于HCAR1/HCAR2串联调控域，而非既往认为的免疫相关位点。
- 贡献2：高分辨率eQTL映射揭示风险等位基因在纯化的人免疫细胞系中导致HCAR1表达大幅下降——使活化巨噬细胞无法感知自身糖酵解产物乳酸，从而失去关闭免疫增殖的负反馈。
- 贡献3：HCAR1增强子失败是MS和SCZ共享的神经免疫" ignition switch"，且与经典自身免疫通路（克罗恩病、红斑狼疮等）无关——提示其特异性。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
> **背景**：SCZ和MS分别是神经精神疾病和自身免疫疾病的代表，长期被视为表型对立的两极——神经退行 vs. 免疫亢进。然而近年的遗传学研究发现了跨诊断共享信号。**动机**：为什么一个"免疫抑制"受体（HCAR2的配体正是抗MS药物富马酸二甲酯的靶点）的邻居HCAR1从未被研究？它与SCZ的关联意味着什么？**突破点**：这是真正的"反向转化"研究——从GWAS共享架构出发，找到了一个全新的神经免疫交汇点。HCAR1作为乳酸感知受体的功能——使巨噬细胞能"感知"自身代谢废物而关闭增殖——在既往研究中完全被忽视。**局限**：机制研究目前停留在eQTL和细胞实验层面；HCAR1/HCAR2串联阵列的进化意义不清；尚无HCAR1特异性激动剂可用。**Future work**：开发HCAR1特异性小分子激动剂；HCAR1 KO动物模型验证MS疾病修饰作用；探索HCAR1在SCZ中的下游神经免疫回路。

---

### 🔬 论文 5：多模态脑年龄预测——5种MRI模态揭示大脑衰老的解离特征

**标题**：[Multimodal brain age prediction reveals dissociable signatures of health, cognition and disease risk in 24,648 UK Biobank participants](https://www.medrxiv.org/content/10.64898/2026.06.29.26355335)

**作者**：Yu, R.; Shao, S.; Xu, F.
**机构**：Shandong First Medical University（通讯：Feng Xu）
**平台**：medRxiv | **日期**：2026-07-05（v3） | **DOI**：10.64898/2026.06.29.26355335
**链接**：https://www.medrxiv.org/content/10.64898/2026.06.29.26355335

**一句话概要**：3D DenseNet121在24648名UK Biobank参与者上训练5种MRI模态脑年龄预测模型，发现不同MRI模态的脑年龄差距（BAG）对应不同的疾病风险图谱和因果生活方式因素。

**主要贡献**：
- 贡献1：5种MRI模态（T1、T2 FLAIR、T1+T2融合、dMRI、SWI）各自产生的BAG与不同临床终点关联——dMRI-BAG预测AD（HR 1.34），T2 FLAIR-BAG预测全因痴呆（HR 1.26）和脑血管病（HR 1.11），SWI-BAG与认知速度相关性最强。
- 贡献2：双样本孟德尔随机化确立了生活方式对BAG的因果效应——体育活动、新鲜水果、油性鱼类和咖啡为保护因素，吸烟和饮酒加速脑衰老。
- 贡献3：T1+T2融合模型从灰质向白质重新分配了约7个百分点的注意力（Grad-CAM）——说明多模态融合不是线性组合，而是一种定性的神经解剖学基础重塑。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
> **背景**：脑年龄差距（BAG）作为脑健康生物标志物已广泛应用于神经退行性疾病研究，但几乎所有现有模型都依赖单一MRI模态（T1为主）。**动机**：大脑衰老涉及灰质、白质、亚皮层核团和脑血管等多个组织舱室——单一模态是否足以捕捉这些差异？**突破点**：这是迄今为止规模最大的多模态脑年龄研究（24648人，5种模态），更重要的是揭示了"模态特异性"——预测准确率最高的T1+T2融合模型，其下游疾病预测力并非最优。这说明模型选择时不能只看MAE，必须结合下游验证。**局限**：UK Biobank的选择偏倚（健康志愿者偏多）限制了向一般人群的推广；外部验证仅用PPMI（帕金森）队列；生活方式MR分析受到水平多效性潜在干扰。**Future work**：将多模态BAG整合进临床风险预测工具；探索T1+T2融合模型的生物学基础（为何灰质→白质重新分配？）；在更多样化人群中验证模态特异性。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | ClawBench: LLM for ACMG/AMP variant interpretation | LLM, variant calling, clinical genomics | AI agentic genomics安全评估框架 |
| bioRxiv | atroplex: pan-transcriptome graphs | alternative splicing, long-read | isoform复杂度图索引框架 |
| bioRxiv | Improving Generalizability in Whole-Cell Antibiotic Discovery Through Active Learning | active learning, OOD, drug discovery | AL将先导化合物命中率提升5倍 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-07-05 07:30 UTC ~ 2026-07-07 07:30 UTC*
