# 🧬 多组学研究简报
**2026年10月1日（周四）| 近48小时精选**

> 搜索范围：2026-09-29 ~ 2026-10-01 | 数据源：bioRxiv, medRxiv, ArXiv

---

## 📊 整体趋势评述

本期论文呈现出"基因组变异→蛋白质表型"因果链解析与单细胞多组学方法学创新的两条主线。西湖大学杨剑团队的SV/VNTR蛋白质组图谱首次在群体规模上量化了结构变异对血浆蛋白的解释力（~8%遗传力），填补了从大规模基因组变异到蛋白质组变异之间的关键空白；匹兹堡大学Das实验室的FOCAL框架与清华大学聂再清团队的CellMSA分别从可解释机器学习和上下文建模两个角度突破单细胞组学分析瓶颈。同时，单细胞蛋白质型分析（proteoform）与神经退行性疾病外周免疫多组学继续升温，标志着多组学研究正从"多模态数据整合"向"因果机制解析"和"单分子分辨率"纵深推进。

---

## 📑 精选论文

### 🔬 论文 1：结构变异与VNTR的蛋白质组图谱

**标题**：A proteome atlas of structural variation and VNTR effects on complex traits and diseases

**作者**：Yuan, P.; Bai, W.; Hou, J.; Yang, J.
**机构**：Jian Yang (通讯作者), 西湖大学统计遗传学讲席教授/新基石研究员
**平台**：medRxiv | **日期**：2026-09-29 | **DOI**：10.64898/2026.09.26.26364064
**链接**：https://www.medrxiv.org/content/10.64898/2026.09.26.26364064v1

**一句话概要**：利用长读长组装参考面板在UK Biobank 5.4万人中系统量化结构变异对2923种血浆蛋白的影响。

**主要贡献**：
- 发现SV和VNTR合计解释约8.0%的蛋白质丰度变异遗传力，其中123种蛋白主要由SV驱动（>80%）
- 鉴定8,065个SV-蛋白和4,101个VNTR-蛋白独立关联，其中601个不太可能由小变异驱动，常扰动活跃调控元件、TAD边界和转录后机制
- 整合基因表达与复杂性状数据识别1,353个蛋白-性状关联对，如MAN1A2高度多效插入关联86种表型、SULT2A1 3'UTR缺失与胆石症相关

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
结构变异（SV）和可变数目串联重复（VNTR）在短读长时代长期是基因组学的"暗物质"，因其难以从Illumina数据中可靠检出。本研究利用长读长组装参考面板在5.4万人中imputed SV/VNTR并将其与Olink蛋白组关联，直接回答了"结构变异对蛋白质组有多大贡献"这一基础问题。~8%的遗传力占比虽不是压倒性的，但考虑到SV的检出仍不完整，实际贡献可能更高。亮点在于整合分析揭示了具体因果候选（如MAN1A2的广泛多效性、SULT2A1的胆石症机制），提供了从SV→蛋白→疾病的可操作假说链。局限在于imputation方法依赖长读长参考面板质量，且血浆蛋白组不能代表组织特异性蛋白变异。未来工作应扩展至组织蛋白质组并整合三维基因组数据以解析TAD边界扰动的下游效应。

---

### 🔬 论文 2：帕金森病外周免疫单细胞图谱与TCR克隆动力学

**标题**：Peripheral Immune Alterations and T Cell Clonal Dynamics Across the Parkinson's Disease Spectrum

**作者**：Rosen, M.; Narcis Majos, J. O.; Mattei, D.; Mejia, E.; Perez Mandry, C.; Jang, B.; ...; Domingo, A.
**机构**：Icahn School of Medicine at Mount Sinai / NYU Grossman School of Medicine（IRB批准来源）
**平台**：medRxiv | **日期**：2026-09-29 | **DOI**：10.64898/2026.09.23.26363800
**链接**：https://www.medrxiv.org/content/10.64898/2026.09.23.26363800v1

**一句话概要**：168名供体63万个PBMC的scRNA-seq+TCR配对分析揭示帕金森病全谱系外周免疫动态重塑。

**主要贡献**：
- 鉴定跨PD谱系的免疫组成广泛变化，包括特发性PD中初始B细胞减少和初始CD8+ T细胞增加
- 揭示线粒体和氧化磷酸化程序的疾病阶段依赖性重塑：前驱期活性增高→显性期活性降低，反映外周免疫状态的动态转变
- 高分辨率T细胞分析识别性别依赖的细胞毒CD8+ T细胞状态变化和TCR克隆多样性，TCR基序分析揭示疾病相关受体组预测PD相关、病毒和自身免疫抗原特异性

**🔍 Critical 简评**：⭐⭐⭐⭐
PD的外周免疫异常近年受到关注，但多数研究仅涉及单一疾病阶段和有限的免疫表型。本研究覆盖特发性、遗传性、前驱性PD的完整谱系，样本量（168人/63万细胞）在同类研究中属大规模。最有趣的发现是线粒体程序在前驱期→显性期的"先升后降"双向变化，暗示外周免疫从代偿到衰竭的动态过程，与中枢神经系统的线粒体功能障碍形成呼应。TCR基序分析预测抗原特异性的方向有价值，但预测的病毒/自身免疫抗原仍需实验验证。局限在于横截面设计难以建立因果时序，外周免疫是否能反映中枢神经炎症仍不确定。未来纵向队列采样和CSF-血液配对比较将有助于厘清外周-中枢免疫串扰。

---

### 🔬 论文 3：CellMSA—上下文建模的单细胞表征学习

**标题**：CellMSA: Context Modeling for Single-Cell Representation Learning

**作者**：Suyuan Zhao, Minghao Liu, Yizhen Luo, Zaiqing Nie
**机构**：Zaiqing Nie (通讯作者), 清华大学
**平台**：ArXiv | **日期**：2026-09-30 | **arXiv ID**：2609.38908
**链接**：https://arxiv.org/abs/2609.38908

**一句话概要**：提出跨批次和细胞类型的上下文建模方法，突破单细胞基础模型独立编码细胞的局限。

**主要贡献**：
- 提出将跨批次一致性和变异性信息融入单细胞表征学习的上下文建模范式，而非独立编码每个细胞或仅同批次去噪
- 通过比较一致性和变异性建立细胞上下文，使模型能学习更丰富的基因表达模式
- （基于摘要推断）在多种下游任务中展示上下文建模相比独立编码的表征质量提升

**🔍 Critical 简评**：⭐⭐⭐⭐
当前单细胞基础模型（如scGPT、Geneformer）主要将每个细胞作为独立样本编码，或仅在批次内做去噪，本质上浪费了批次间和细胞类型间的丰富关系信息。CellMSA的核心思想——通过跨批次一致性和变异性建立"细胞上下文"——在方法论上是一个有意义的转变，类似于NLP从词级编码到上下文感知编码的演进。不过，此方向已有多项同期工作（如scPoli、scArches的迁移学习框架），CellMSA需在更多任务和数据集上展示其独特优势。局限在于上下文建模的计算开销可能限制其在大规模图谱上的可扩展性，且如何平衡批次效应去除与生物学变异保留仍是一个开放问题。未来值得关注的方向是将上下文建模与空间转录组、时间序列数据结合。

---

### 🔬 论文 4：凝胶限域滚环扩增实现单细胞蛋白质型分析

**标题**：Gel-Confined Rolling-Circle Amplification Enables Sensitive Single-Cell Proteoform Analysis

**作者**：Luyao Zhao, Yanjun Yang, Yaochao Zheng, Yuhao Zhang, Zhengfu Huang, William Teng, Lucas Yatcyshyn, Jiahwei Cheong, Jonathan Arnold, Jin Xie, Kenan Song, Xianqiao Wang, Yiping Zhao, Xianyan Chen, Yao Yao, Leidong Mao, Yang Liu
**机构**：Leidong Mao (通讯作者), 乔治亚大学工程学院
**平台**：ArXiv | **日期**：2026-09-28 | **arXiv ID**：2609.36251
**链接**：https://arxiv.org/abs/2609.36251

**一句话概要**：在聚丙烯酰胺凝胶中直接进行滚环扩增，实现单细胞蛋白电泳分离后的高灵敏度proteoform分析。

**主要贡献**：
- 开发RCAmp-scWB策略，在单细胞蛋白电泳分离后于凝胶内直接进行滚环扩增，实现信号放大同时保留电泳分辨率
- 通过反应-传输模型识别试剂进入与扩增产物限域之间的平衡，支持信号放大的同时保持分离能力
- 实现对蛋白翻译后修饰和加工产生的proteoform状态的分辨率分析，突破大多数单细胞蛋白检测仅测丰度的局限

**🔍 Critical 简评**：⭐⭐⭐⭐
单细胞蛋白质组学目前主要依赖质谱或抗体阵列，前者灵敏度有限，后者无法区分翻译后修饰产生的proteoform多样性。RCAmp-scWB的核心创新是将滚环扩增——一种DNA信号放大技术——适配到凝胶电泳后的蛋白质检测中，理论上可将检测灵敏度提升数个量级。反应-传输建模指导实验设计的方法论值得称道，体现了工程学思维在生物分析中的价值。局限在于该方法目前仍依赖于抗体偶联的DNA探针（需为每个目标蛋白设计探针），通量和多路复用能力远低于质谱。且凝胶电泳的一维分离能力可能限制proteoform的分辨深度。未来值得关注的是将此平台与多重标记和微流控自动化结合，提升通量至单细胞蛋白质组学的实用水平。

---

### 🔬 论文 5：FOCAL—可解释机器学习耦合基因调控网络揭示细胞命运调控子回路

**标题**：Interpretable machine learning coupled to gene regulatory networks uncovers subcircuits underlying cell fate decisions

**作者**：Rarani, Z. H.; Keshari, S.; Sachan, A.; Saini, A.; Pease, N. A.; Fan, J.; Fu, A.; Liu, Y. C.; Gurkar, A. U.; Delgoffe, G. M.; Singh, H.; Das, J.
**机构**：Jishnu Das (通讯作者), 匹兹堡大学免疫学与计算系统生物学系
**平台**：bioRxiv | **日期**：2026-09-29 | **DOI**：10.64898/2026.09.28.754797
**链接**：https://www.biorxiv.org/content/10.64898/2026.09.28.754797v1

**一句话概要**：提出FOCAL框架，将可解释机器学习的潜在因子与基因调控网络耦合，识别驱动细胞命运决定的关键调控子回路。

**主要贡献**：
- 提出FOCAL范式，通过将状态特异性和动态GRN与结果监督的可解释潜在因子耦合，绕开传统拓扑度量方法的循环性问题
- 在B细胞和T细胞中识别GIFs（GRNs coupled to Interpretable latent Factors），优先排序已建立状态的调控子网络及其前的瞬态调控事件
- 通过谱系定义TF的扰动实验学习潜在因子，在祖细胞群体中识别分化前的替代命运转录倾向，发现并经体内外实验验证NFATC2-IRF8在活化B细胞中的新型协作——协同抑制浆外分化并促进生发中心B细胞命运

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
GRN推断是单细胞组学的基础设施级问题，但长期面临两难：拓扑度量方法（如度中心性）因用同一网络既计算指标又做排序而产生循环性，而可解释机器学习虽能识别判别性潜在因子却不建模调控链接。FOCAL的突破在于将两者解耦再桥接——用可解释ML学习与表型结果监督的因子，再用这些因子指导GRN中的子网络优先排序，从宏观TF节点下沉到状态特异的TF-基因连接。NFATC2-IRF8的发现和体内外实验验证展示了从计算到实验的完整闭环。该方法论对免疫学以外的领域（肿瘤、发育、衰老）均有广泛适用性。局限在于FOCAL仍依赖于现有GRN推断质量，且扰动实验的覆盖度限制了可发现的调控关系。未来值得关注将FOCAL应用于空间转录组以解析空间-调控耦合。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| ArXiv | OmniVCBench: Benchmarking Evidence-Grounded Multimodal Reasoning Towards AI Virtual Cells | AI virtual cell, benchmark | 6,077个图表QA对评估AIVC证据解读能力 |
| ArXiv | CancerZigZag: Iterative Seed-Anchored Diffusion for Single-Cell State Transitions | diffusion model, cancer, single-cell | 扩散模型生成健康→肿瘤状态映射 |
| ArXiv | DoAtlas-2: Self-Evolving Causal Biomedical Discovery | causal inference, knowledge graph | 771资源/72万人/8分子层/470万文献记录 |
| ArXiv | CipherGenome: Homomorphic Inference for Genomic MoE | privacy, genome foundation model | 同态加密保护基因组MoE推理 |
| ArXiv | Continuous Variational Synthesis | DNA synthesis, generative model | 变分合成模型连续空间训练+后量化 |
| ArXiv | AmbiModBench: Gene Perturbation Prediction Beyond Shared Responses | benchmark, perturbation, single-cell | 揭示现有扰动预测模型共享响应而非基因特异 |
| ArXiv | From DNA Design to DNA Slimming | DNA design, agentic | 删除式DNA序列精简设计任务定义 |
| bioRxiv | Comprehensive in silico analysis of cerebellar vulnerability in PCH | systems biology, neurodegeneration | 多层级变异-表达整合分析 |
| medRxiv | Plasma immune signatures in FTLD | proteomics, neurodegeneration | 多重血浆蛋白组免疫签名 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-09-29 00:00 UTC ~ 2026-10-01 02:41 UTC*
