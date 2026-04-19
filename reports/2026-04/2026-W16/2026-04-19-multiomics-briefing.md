# 多组学研究简报 - 2026年4月19日

## 📊 本期精选（4篇）

---

### 1. SpatialCOC: 空间多组学数据整合与跨组学校正框架

**标题**: SpatialCOC: an integrative framework for spatial continuous mapping and cross-omics correction in spatial multi-omics data

**作者**: Xiuyu Li 等（西安交通大学）

**期刊**: Nature Communications

**链接**: https://www.nature.com/articles/s41467-026-71882-2

**发表日期**: 2026年4月16日

**一句话概要**: 提出了一种深度学习框架SpatialCOC，用于解析空间多组学数据中的空间模式和调控机制，实现连续空间映射和跨组学校正。

**主要贡献**:
- 开发了首个同时处理空间连续映射和跨组学校正的整合框架
- 采用隐式神经表示（Implicit Neural Representation）技术，实现高分辨率空间连续映射
- 引入跨组学注意力机制，有效校正不同组学层之间的系统偏差
- 在多种组织类型（脑、脾、胸腺、淋巴结）上验证，性能优于现有方法

**Critical 简评**: 空间多组学领域的关键痛点在于如何整合不同模态数据的同时保留空间信息。SpatialCOC的创新在于将连续映射和批次校正统一到一个框架中，这对肿瘤微环境研究特别有价值。代码已开源（https://github.com/xjtu-omics/SpatialCOC）。

---

### 2. 整合光遗传fMRI与空间转录组学揭示脑网络基因特征

**标题**: Integrating optogenetic fMRI and spatial transcriptomics to reveal circuit-specific gene signatures in fronto- and hippo-thalamic networks

**作者**: 研究团队

**期刊**: Nature Communications

**链接**: https://www.nature.com/articles/s41467-026-71923-w

**发表日期**: 2026年4月18日

**一句话概要**: 通过整合光遗传功能磁共振成像（ofMRI）和空间转录组学，解码代谢基因表达与脑功能网络组织之间的关联。

**主要贡献**:
- 首次在清醒小鼠中实现配对ofMRI和空间转录组学数据采集
- 识别出与功能连接相关的代谢基因表达特征
- 揭示了丘脑-皮层和海马-丘脑网络中的环路特异性基因签名
- 为连接组-转录组桥接研究提供了新的方法学范式

**Critical 简评**: 这项研究填补了神经影像与分子生物学之间的鸿沟。传统上，fMRI数据难以与基因表达直接关联，而该方法通过空间转录组学实现了分子层面与功能网络层面的对接，对理解神经精神疾病机制具有潜在价值。

---

### 3. PUFFIN: 功能监督的蛋白质单元发现框架

**标题**: Protein Unit Discovery with Functional Supervision (PUFFIN)

**作者**: Gökçe Uludoğan 等

**期刊**: ISMB 2026 (arXiv预印本)

**链接**: https://arxiv.org/abs/2604.14796

**发表日期**: 2026年4月16日

**一句话概要**: 提出PUFFIN框架，通过联合学习结构划分和功能监督，数据驱动地发现蛋白质功能单元。

**主要贡献**:
- 创新性地将结构划分与功能监督相结合，自动发现蛋白质功能单元
- 采用图神经网络结合结构感知池化机制，将蛋白质划分为多残基单元
- 发现的功能单元与InterPro注释具有有意义的对应关系
- 为结构-功能关系分析提供了可解释的框架

**Critical 简评**: 蛋白质功能单元的自动识别是计算生物学的重要问题。PUFFIN不依赖人工注释，完全数据驱动地发现功能单元，这对于理解蛋白质进化和新功能预测具有重要意义。代码已开源：https://github.com/boun-tabi-lifelu/puffin

---

### 4. Mamba-SSM结合LLM推理用于生物标志物发现

**标题**: Mamba-SSM with LLM Reasoning for Biomarker Discovery: Causal Feature Refinement via Chain-of-Thought Gene Evaluation

**作者**: Pushpa Kumar Balan 等

**期刊**: ICLR 2026 Workshop (arXiv预印本)

**链接**: https://arxiv.org/abs/2604.14334

**发表日期**: 2026年4月15日

**一句话概要**: 探索使用Mamba状态空间模型结合大语言模型链式思维推理，从RNA-seq数据中识别癌症生物标志物。

**主要贡献**:
- 首次将Mamba SSM应用于TCGA乳腺癌RNA-seq数据分析
- 使用DeepSeek-R1进行链式思维推理，从50个候选基因中筛选出17个基因
- LLM过滤后的基因集（17个）显著优于原始梯度显著性基因集（50个），AUC从0.832提升至0.927
- 发现"选择性忠实性"现象：即使未全面召回已知标志物，针对性去除混杂因素仍能提升性能

**Critical 简评**: 这是将大语言模型推理能力引入生物标志物发现的一次有趣尝试。值得注意的是，LLM筛选出的基因中仅35.3%是已验证的BRCA标志物，但性能却优于包含更多已知标志物的原始集。这提示我们：传统验证数据库可能并非性能的唯一标准，LLM的推理可能捕捉到了新的生物学信号。

---

## 🔬 整体趋势评述

### 1. 空间多组学整合成为热点
本周Nature Communications连续发表两篇空间多组学相关研究，反映了该领域的持续热度。SpatialCOC和ofMRI+空间转录组研究代表了两个不同方向：前者专注于计算方法创新，后者强调多模态实验整合。

### 2. AI驱动的方法学创新
- **状态空间模型（SSM）**：Mamba架构开始应用于单细胞/转录组数据分析
- **大语言模型**：LLM的推理能力被引入生物标志物发现和基因功能注释
- **深度学习+蛋白质**：PUFFIN展示了图神经网络在蛋白质结构-功能关系解析中的潜力

### 3. 从相关性到因果性
Mamba-SSM论文中提到的"因果特征精炼"反映了领域趋势：从单纯寻找差异表达基因，转向理解基因与表型之间的因果机制。

---

## 📌 附：已发送论文去重列表更新

本次报告新增4篇论文，已追加至去重列表。

**报告生成时间**: 2026-04-19 07:30 (Asia/Hong_Kong)
