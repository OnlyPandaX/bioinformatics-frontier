# 🧬 多组学研究简报
**2026年10月2日（周四）| 近48小时精选**

> 搜索范围：2026-09-30 ~ 2026-10-02 | 数据源：bioRxiv, medRxiv, ArXiv（Nature 需登录，本轮跳过）

---

## 📊 整体趋势评述

本期论文呈现出"跨模态生成建模"与"隐私安全推理"两条并行加速线。一方面，生成式 AI 正在从单模态表征向双向跨模态推理跃迁——COSMIC 连接核形态与转录组、OmniVCBench 为虚拟细胞定义证据溯源基准，标志着 AI for Biology 正从预测工具走向可解释的科学代理。另一方面，基因组基础模型的参数量爆炸（MoE 15B+）使隐私推理从可选项变为必选项，CipherGenome 揭示了即使单个专家服务器也能以 99.8% 准确率重构输入序列的严重威胁。同时，单细胞时间维度记录技术（scReMeMber-Seq）和影像表型组学图谱（UKB 心脏/脂肪 IDP）的推进，表明基础数据层的时空分辨率仍在持续深化。

---

## 📑 精选论文

### 🔬 论文 1：COSMIC — 生成式建模连接核形态与基因表达

**标题**：Generative modeling reveals the connection between nuclear morphology and gene expression

**作者**：Wen, S.; Vinas, R.; Bues, J.; Lambert, C.; Grenningloh, N.; Ferrari, T.; Bugani, E.; Pezoldt, J.; Love, J.; Wan, Y.; Karthaus, W.; Deplancke, B.; Brbic, M.
**机构**：EPFL（瑞士洛桑联邦理工学院），MLBio Lab
**平台**：bioRxiv | **日期**：2026-09-30 | **DOI**：10.64898/2026.01.22.700673
**链接**：https://www.biorxiv.org/content/10.64898/2026.01.22.700673v1

**一句话概要**：双向生成框架定量分解核形态与转录组的跨模态方差，连接细胞外观与分子身份。

**主要贡献**：
- 提出COSMIC双向生成框架，基于IRIS配对成像+单细胞转录组数据，在2100万细胞核上预训练，实现"从形态预测表达"和"从表达预测形态"的双向跨模态推理
- 在前列腺癌细胞中，COSMIC通过形态-转录协同变化区分化疗敏感与耐药状态，鉴定与肿瘤状态关联的形态相关基因
- 应用于斑马鱼胚胎发育空间转录组数据，揭示局部细胞邻域如何影响形态-表达关系，证明组织微环境对形态学-转录组耦合的调控作用

**🔍 Critical 简评**：⭐⭐⭐⭐☆
核形态学自19世纪病理学以来就是细胞身份的经典标志，但形态与转录组之间的定量因果关系长期缺乏系统框架。COSMIC的动机正是填补这一空白——其突破点在于利用IRIS技术获取同一单细胞的图像与转录组配对数据，使跨模态生成成为可能。然而，2100万核预训练虽规模可观，核形态信息量远低于转录组全谱，双向生成的不对称性意味着形态→表达方向的预测能力可能受限。Future work方向包括将框架扩展至3D核结构、整合染色质空间组织信息，以及在临床病理切片中验证形态-基因关联的预后价值。

---

### 🔬 论文 2：scReMeMber-Seq — 甲基化记忆记录器重建单细胞轨迹

**标题**：Joint recording of past and present transcriptomes reconstructs single-cell trajectories

**作者**：AYDIN, Z.; OVCHINNIKOVA, S.; UNTERWEGER, I. A.; CERRIZUELA, S.; PONT, N.; WUST, V.; BOERS, R.; ZIRNGIBL, K.; CAN, O.; SPATUZZI, M.; TRABOULSI, T.; SUN, X.; KORKMAZ, A.; ORTICA, S.; FOLEY, T.; VOLK, K.; KLEBER, S.; SANZ-MOREJON, A.; Hasan, M.; Gribnau, J.; ANDERS, S.; MARTIN-VILLALBA, A.; BALLY-CUIF, L.
**机构**：Institut Pasteur and CNRS UMR3738, Paris, France（斑马鱼神经遗传学实验室）
**平台**：bioRxiv | **日期**：2026-09-30 | **DOI**：10.64898/2026.09.28.755048
**链接**：https://www.biorxiv.org/content/10.64898/2026.09.28.755048v1

**一句话概要**：甲基化记忆记录器在单细胞中同时捕获过去转录状态与当前转录组/甲基化组。

**主要贡献**：
- 开发scReMeMber-Seq技术，利用DCM-Polr2b（TimeMachine）脉冲诱导+单细胞甲基化组-转录组测序（scMT），在同一个细胞内同时读取"历史转录快照"和"当前分子状态"
- 在小鼠神经干细胞中，scDCMome（单细胞DCM甲基化谱）精准区分细胞类型，并跨多次细胞分裂记录静息-激活状态转换
- 在斑马鱼胚胎中，scDCMome解析从祖细胞到神经元的个体化转录轨迹，实现体内实时细胞命运轨迹重建

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
单细胞轨迹推断是单细胞领域的"圣杯"难题，现有方法（RNA velocity、伪时间）本质上从快照推断动力学，缺乏真正的历史信息。scReMeMber-Seq的动机正是突破这一根本局限——通过DNA甲基化作为"分子磁带"记录过去的转录状态，首次在同一细胞内实现时间维度的纵向追踪。其突破点在于DCM甲基化标记的可累积性与可逆性，使其能跨细胞分裂保留信息。局限方面，DCM-Polr2b系统依赖转基因构建，短期难以推广至人体样本；甲基化标记的衰减速率和读取噪声也需进一步表征。Future work方向包括扩展至更多物种和疾病模型、提升时间分辨率至小时级，以及与其他谱系追踪技术（Cas9 barcode）的联合使用。

---

### 🔬 论文 3：UK Biobank 心脏与脂肪影像表型基因组图谱

**标题**：Genomic atlas of cardiac and adiposity imaging phenotypes

**作者**：Tsao, H. M.; Smith, L.; Richard, A.; Singh, U.; Hasebe, M.; Su, C.-Y.; Yang, Y.; Xiao, H.; Nguyen, T.; Smadbeck, P.; Flannick, J.; Lu, T.; Yoshiji, S.
**机构**：McGill University（加拿大麦吉尔大学）
**平台**：medRxiv | **日期**：2026-09-30 | **DOI**：10.64898/2026.07.28.26358969
**链接**：https://www.medrxiv.org/content/10.64898/2026.07.28.26358969v1

**一句话概要**：UKB 7.5万人心脏MRI+6.6万人DXA脂肪表型全基因组图谱，鉴定1305个关联信号。

**主要贡献**：
- 构建UK Biobank 42个影像表型（IDP）的全基因组测序图谱：11个心脏MRI性状（≤75,562人）和31个DXA脂肪性状（≤66,194人），鉴定1,305个独立关联信号
- 整合精细定位（FLAMES）、cS2G、Open Targets L2G和罕见变异负荷检验，系统优先化效应基因；基因架构以心脏域和脂肪域内为主，跨域共享集中在瘦体重、体型、生长和血流动力学信号
- 在All of Us 257,716名参与者中验证IDP多基因评分：左心室舒张末容积（LVEDV）评分关联心肌病和心衰，性别调整后臀股脂肪评分与2型糖尿病负相关；LV复合评分与DCM多基因评分联合改善扩张型心肌病风险预测

**🔍 Critical 简评**：⭐⭐⭐⭐☆
影像表型（IDP）作为内表型（endophenotype）的概念由GWAS领域提出已久，但心脏与脂肪影像的全基因组系统性整合在规模和深度上仍属前沿。该研究的动机是利用影像定量性状替代异质性临床终点，提高遗传发现的统计功效和机制分辨率。突破点在于跨域分析揭示了心脏与脂肪遗传架构的选择性共享模式，以及TBX2等候选效应基因在血管平滑肌细胞和周细胞中的富集。局限在于IDP本身仍为较粗的器官级表型，缺乏细胞类型分辨率；All of Us验证队列中非欧洲祖先样本量有限。Future work方向包括将IDP精细化为节段级或像素级表型、与心脏单细胞图谱整合解析效应基因的细胞类型特异性，以及将LV复合评分推向临床风险分层。

---

### 🔬 论文 4：OmniVCBench — AI虚拟细胞证据溯源推理基准

**标题**：OmniVCBench: Benchmarking Evidence-Grounded Multimodal Reasoning Towards AI Virtual Cells

**作者**：Manyu Li, Xunkai Li, Yongfu Xiong, Yi Liu, Rong-Hua Li, Guoren Wang
**机构**：Beijing Institute of Technology（北京理工大学计算机学院）
**平台**：ArXiv (cs.AI, q-bio.QM) | **日期**：2026-09-29 | **ID**：2609.37773
**链接**：https://arxiv.org/abs/2609.37773

**一句话概要**：以图为核心、可溯源的AI虚拟细胞多模态推理基准，补齐"解释"维度评估。

**主要贡献**：
- 定义AI虚拟细胞（AIVC）评估中被忽视的"解释组件"——即模型如何解读实验证据并形成生物学假说，而非仅运行模拟预测
- 构建OmniVCBench：以论文图表为载体的来源可溯源基准，覆盖多模态推理链路从证据阅读到假说生成
- 系统评估现有AIVC模型在证据解读层面的表现，揭示模拟预测高分≠证据理解能力，为虚拟细胞走向科学代理建立可量化的能力边界

**🔍 Critical 简评**：⭐⭐⭐⭐☆
AI虚拟细胞（AIVC）概念自2025年兴起以来，基准建设远落后于模型开发——现有评估仅关注预测精度，忽视了科学推理的核心环节。OmniVCBench的动机正是填补"预测—解释"鸿沟，其突破点在于"以图为核心"的设计选择，更贴近生物学家的实际工作流（论文图表是知识传播的主要载体）。来源可溯源的设计也使评估结果可审计。局限方面，以论文图表为输入依赖OCR/图表解析的前处理质量；生物学假说的"正确性"本身具有模糊性，评分标准的设计仍需领域共识。Future work方向包括扩展至多模态证据（表格+文本+代码）、引入专家评审交叉验证，以及从静态基准走向动态交互式评估。

---

### 🔬 论文 5：CipherGenome — 基因组MoE同态加密推理

**标题**：CipherGenome: Homomorphic Inference for Genomic Mixture-of-Experts

**作者**：Guang Yang, Fengchen Liu
**机构**：（作者机构未在论文中明确标注）
**平台**：ArXiv (cs.CR, cs.LG, q-bio.GN) | **日期**：2026-09-27 | **ID**：2609.35883
**链接**：https://arxiv.org/abs/2609.35883

**一句话概要**：揭示基因组MoE模型隐私泄露风险，提出同态加密推理协议保护15B参数模型。

**主要贡献**：
- 首次揭示基因组MoE模型的隐私威胁面：单个托管一个专家的服务器即可从注意力嵌入中以99.8% top-1准确率重构输入核苷酸序列
- 提出CipherGenome协议：将15.1B参数MoE基因组模型的嵌入层、注意力和路由器保留在可信瘦客户端，将每个专家计算外包至不可信加速器
- 在保持模型预测完全一致的前提下实现同态加密专家计算，证明隐私保护推理无需牺牲基因组基础模型的预测性能

**🔍 Critical 简评**：⭐⭐⭐⭐☆
基因组基础模型从数亿参数向数十亿MoE架构演进的过程中，推理所需的算力已超出大多数本地机器能力，隐私与可用性之间的矛盾日益尖锐。CipherGenome的动机不仅是技术优化，更是安全预警——99.8%序列重构攻击的成功率令人震惊，说明现有"发送序列到云端推理"模式存在实质隐私风险。突破点在于利用同态加密将专家计算外包而不泄露中间表征，且保持比特精确的预测一致性。局限方面，同态加密引入的计算开销（吞吐量、延迟）在论文中虽有讨论但实际部署性能仍待大规模验证；15.1B参数的MoE在加密后对边缘设备的内存压力仍需评估。Future work方向包括优化同态加密内核的GPU利用率、探索安全多方计算（MPC）替代方案，以及在真实临床基因组分析pipeline中端到端验证。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | BEACON: Accurate and scalable demultiplexing of scRNA-seq | single-cell, demultiplexing | UCSD，条形码多路复用解复用新方法 |
| ArXiv | CancerZigZag: Iterative Seed-Anchored Diffusion for Single-Cell State Transitions | cancer, single-cell, diffusion | 种子锚定扩散生成肿瘤相关单细胞候选云 |
| ArXiv | Stochastic gradient descent on the epigenetic landscape | epigenetic, plasticity, tumor heterogeneity | 表观遗传景观上的SGD统一框架 |
| ArXiv | DoAtlas-2: A Foundation for Self-Evolving Causal Biomedical Discovery | causal, knowledge graph, multimodal | 771研究资源/72万人/48国因果发现框架 |
| ArXiv | BarcodeMAE+: Rethinking Masked Pretraining for DNA Barcode Foundation Models | DNA, masked pretraining, foundation model | 重新审视DNA条形码基础模型的掩码预训练 |
| ArXiv | AmbiModBench: Benchmarking Gene Perturbation Prediction Beyond Shared Responses | perturbation, benchmark, single-cell | 基因扰动预测评估的三大缺陷修复 |
| ArXiv | GenoTrace: Inheritable Watermarks for Genome Foundation Model Distillation | watermark, distillation, genome model | 密码子感知水印继承至蒸馏学生模型 |
| ArXiv | BaseCamp: An Agentic AI Framework for Automating DNA Sequencing Data Pipelines | agentic AI, bioinformatics, automation | AI代理自动决策DNA测序分析流程 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-09-30 00:00 UTC ~ 2026-10-02 06:45 UTC*
