# 🧬 多组学研究简报
**2026年6月3日（周三）| 近48小时精选**

> 搜索范围：2026-06-01 ~ 2026-06-03 | 数据源：Nature, ArXiv, bioRxiv, medRxiv

---

## 📊 整体趋势评述

本期主题聚焦于**生物基础模型的范式升级**：从被动推理到主动交互——癌症基因组基础模型TESSERA用单一表征同时支撑变异致病性、分子分型和治疗选择，蛋白质AgentPLM将工具调用嵌入生成解码循环实现在线纠错，两者的共同逻辑是让模型学会"何时该停下来检查"。与此同时，液体活检的细胞层面拓展（循环单核细胞转录组）与蛋白质表示学习的层次化探索，分别从临床和基础两端重新定义了信号检测的边界。

---

## 📑 精选论文

### 🔬 论文 1：癌症基因组基础模型

**标题**：A Foundation Model for the Cancer Genome

**作者**：Sidhom, J.-W., Baras, A. S., Elemento, O., Shah, M. A.
**机构**：（通讯作者信息无法确认）
**平台**：bioRxiv Bioinformatics | **日期**：2026-06-01 | **DOI**：10.64898/2026.05.27.728319
**链接**：https://www.biorxiv.org/content/10.1101/2026.05.27.728319v1

**一句话概要**：自监督癌症基因组基础模型TESSERA，单次预训练表征同时支撑变异致病性、分型、预后与治疗选择

**主要贡献**：
- 提出TESSERA，通过掩码token重建+跨模态对比学习，在体细胞SNV和拷贝数片段上联合预训练，学习癌症基因组的联合结构
- 单一表征一次生成后无需重训练即可复用，支撑5类下游任务：变异致病性预测、泛癌分型、无监督分子亚型、预后分层、反事实治疗效应估计
- 在转移性结直肠癌中，发现TP53+/KRAS+/17p-三特征规则作为FOLFOX vs FOLFIRI化疗选择的候选预测生物标志物，且该标志物可解释

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
癌症基因组解读长期依赖逐基因查询知识库，忽略共变异与全基因组CNA模式。TESSERA的动机正是将"一次一个变异"的范式转向联合表征学习。突破点在于跨模态对比目标将SNV和CNA两个模态锚定到共享空间，且反事实估计首次在基因组基础模型中输出可解释的治疗选择规则。局限：依赖TCGA等回顾性数据训练，前瞻性验证尚未开展；CNA分辨率限于片段级而非碱基级。值得关注：该模型框架天然可扩展至甲基化或转录组模态——多组学癌症基础模型的下一步。

---

### 🔬 论文 2：Agentic蛋白质语言模型

**标题**：AgentPLM: Agentic Protein Language Models with Reasoning-Augmented Decoding for Protein Sequence Design

**作者**：Rahman, S., Rahman, M. R.
**机构**：（通讯作者信息无法确认）
**平台**：ArXiv cs.AI / q-bio.QM | **日期**：2026-06-01 | **ArXiv ID**：2606.02386
**链接**：https://arxiv.org/abs/2606.02386

**一句话概要**：PLM+工具调用+策略优化实现蛋白质序列设计的在线纠错生成

**主要贡献**：
- 提出Reasoning-Augmented Decoding (RAD)，在自回归生成过程中交错调用ESMFold/FoldX/AutoDock Vina等工具获取生物物理反馈
- 设计Contrastive Agent Policy Optimisation (CAPO)，轨迹级DPO扩展，训练策略端到端学习何时利用oracle反馈而非简单模仿高适应度序列
- 在酶设计、抗体优化、热稳定性、PPI界面设计和零样本适应度预测5个基准上达到SOTA，抗体top-10%命中率显著超越最强被动基线

**🔍 Critical 简评**：⭐⭐⭐⭐
蛋白质语言模型虽已展现生成能力，但本质上是被动oracle——一次前向传播，无法在违反约束时纠正自身。AgentPLM将"思维链"范式引入蛋白质设计，首次实现生成-验证-修正的闭环。突破在于CAPO不是简单模仿高适应度轨迹，而是学习反馈的信息量。局限：工具调用增加推理延迟；ICML Workshop论文，完整评估规模有限；目前工具API固定，可扩展性待验证。Future work方向：多工具组合策略学习和更复杂的约束满足场景。

---

### 🔬 论文 3：循环单核细胞转录组检测胶质瘤

**标题**：Sensitive Glioma Detection and Recurrence Monitoring Using a Machine Learning Model Based on Circulating Monocytes

**作者**：Wu, W., Chai, R., Xia, P., et al.
**机构**：（通讯作者信息无法确认）
**平台**：medRxiv Oncology | **日期**：2026-06-01 | **DOI**：10.64898/2026.05.29.26354409
**链接**：https://www.medrxiv.org/content/10.1101/2026.05.29.26354409v1

**一句话概要**：循环CD14+单核细胞转录组重编程信号构建胶质瘤无创诊断与复发监测模型

**主要贡献**：
- 通过scRNA-seq发现胶质瘤患者循环CD14+单核细胞显著扩增并呈现分化阻滞与转录可塑性增加
- 基于单核细胞转录组构建集成ML诊断模型，交叉验证AUC=0.971，独立队列(n=567)AUC=0.877
- 术后复发检测AUC=0.969(51例)；前瞻性随访(n=30)中低模型评分与延长无进展生存显著相关(P=0.043)

**🔍 Critical 简评**：⭐⭐⭐⭐
胶质瘤因血脑屏障长期被认为缺乏外周血标志物。该研究利用肿瘤-宿主互作在单核细胞上的转录印迹，将液体活检从cfDNA/CTC拓展到功能免疫细胞层面，概念上令人兴奋。突破在于同时实现诊断和复发监测双功能。局限：独立队列中AUC从0.971降至0.877，泛化性仍需更大样本验证；单核细胞信号是否特异于胶质瘤vs其他脑肿瘤/脑损伤尚需厘清；前瞻性队列仅30例。值得关注：该思路可推广至其他"免疫隔离"器官肿瘤的外周检测。

---

### 🔬 论文 4：层次化蛋白质潜在表征

**标题**：Hierarchical latent representations reveal protein organization for functional discovery and design

**作者**：Guo, Z., Wang, Z., Wang, S., Chai, Y., Xu, K., Li, M., Li, W., Ou, G.
**机构**：Tsinghua University (Ou, G.)
**平台**：bioRxiv Bioinformatics | **日期**：2026-06-01 | **DOI**：10.64898/2026.02.14.705947
**链接**：https://www.biorxiv.org/content/10.1101/2026.02.14.705947v2

**一句话概要**：层次化序列表征框架压缩蛋白质为上下文依赖潜在态，统一功能发现、进化分析与蛋白设计

**主要贡献**：
- 开发层次化序列表征框架，将蛋白质压缩为上下文依赖潜在状态同时保留多尺度组织信息
- 发现全新纤毛蛋白ADMAP1（缺乏序列/结构同源性），验证其精子轴索组织与运动功能必需
- 自回归采样在潜在空间中设计合成肌动蛋白重塑蛋白，在关键功能界面大幅重写序列后仍保持F-actin切割活性

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
蛋白质功能注释依赖序列/结构同源性，但许多功能蛋白在两者层面均无可检测相似性。该工作的动机正是突破同源性依赖，从分布式序列组织信息中提取功能信号。突破在于ADMAP1的发现证明了"表示即检测器"的可行性——潜在空间中可捕获同源性和结构方法遗漏的功能类群。蛋白设计方面，序列重写保留活性挑战了"关键残基不可替代"的直觉。局限：目前限于特定蛋白家族验证；潜在空间的生物学可解释性仍需深入。值得关注：该框架统一了发现/分析/设计三任务，是蛋白质表示学习走向通用化的标杆。

---

### 🔬 论文 5：人类异着丝粒位点功能注释

**标题**：Characterization of Human Ectocentromeric Sites

**作者**：Saggese, P., Benetti, C., Boccalatte, F., Giunta, S.
**机构**：（通讯作者信息无法确认）
**平台**：bioRxiv Genomics | **日期**：2026-06-01 | **DOI**：10.64898/2026.05.28.728588
**链接**：https://www.biorxiv.org/content/10.1101/2026.05.28.728588v1

**一句话概要**：着丝粒外CENP-B结合位点的负选择约束与异质功能揭示基因组"第二着丝粒层"

**主要贡献**：
- 利用T2T组装在数百单倍型中绘制着丝粒外CENP-B box(ECS)保守性图谱，发现强负选择信号
- 分类四类ECS功能状态：无CENP-B结合(~84%)、CENP-B结合(~10%)、邻近CENP-B富集开放染色质(~6%)、无box的CENP-B结合位点(~700个)
- CENP-B敲降显著降低邻近基因表达，揭示CENP-B在着丝粒外的moonlighting调控功能；ECS以倒转方向同链排列影响拓扑折叠

**🔍 Critical 简评**：⭐⭐⭐⭐
着丝粒CENP-B的着丝粒外功能长期被忽视。该研究利用T2T组装首次系统注释ECS，发现负选择约束暗示功能必要性，这改变了对CENP-B仅作为着丝粒维持因子的传统认知。突破在于CENP-B的moonlighting调控角色和ECS通过方向性排列影响3D基因组折叠的机制假说。局限：CENP-B敲降实验限于单细胞系；ECS功能分类需更多实验验证而非仅基于多组学关联；约700个无box CENP-B结合位点的结合机制不明。值得关注：ECS与ALU重复的类比提示转座元件在着丝粒进化中的深层角色。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | Evolutionary constraints improve protein LLM predictions (D2D) | PLM + 进化约束 + 上位效应 | bioinformatics v2, 2026-06-01 |
| bioRxiv | Accurate MAG reconstruction from complex soil microbiome | HiFi+SR宏基因组 | genomics v2, 2026-06-01 |
| ArXiv | Structure-Informed MSA: Hardness Results | MSA+结构信息, NP完全 | q-bio.QM, 2026-06-01 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-06-01 23:30 UTC ~ 2026-06-03 07:30 HKT*
