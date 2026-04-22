# 多组学研究简报
**日期：** 2026年4月16日

---

## 📌 今日精选

### 1. 健康人类肝脏空间转录组图谱

**标题：** A spatial atlas of the healthy human liver from live donors

**期刊：** Nature (2026年4月15日)

**作者：** Oran Yakubovsky, Keren Bahar Halpern, Shalev Itzkovitz (Weizmann Institute of Science)

**链接：** https://www.nature.com/articles/s41586-026-10377-y

**一句话概要：** 首个基于活体肝移植供体的健康人类肝脏空间转录组图谱，揭示了人类特有的肝细胞功能区域化模式。

**主要贡献：**
- 结合10X Visium、MERFISH、Visium HD和snRNA-seq，绘制了高分辨率人类肝脏空间转录组图谱
- 发现人类肝脏区域化模式与小鼠等哺乳动物存在显著差异：糖异生相关基因PCK2、关键尿素循环酶在人类中呈中央静脉周富集
- 鉴定了早期脂肪肝中肝细胞基因表达的动态变化，揭示潜在的代偿性适应机制

**Critical简评：** 这项研究解决了长期困扰领域的一个关键问题——如何获得"真正健康"的人类肝脏参考组织。活体肝移植供体经过严格医学筛查，避免了脑死亡供体和病变周围组织的转录组偏倚。研究发现人类肝脏区域化模式的独特性，对于理解肝脏疾病的空间特征和药物代谢具有重要意义。

---

### 2. 早期结直肠癌中的肿瘤-胎儿可塑性

**标题：** Emergence of oncofetal plasticity is ubiquitous in early colorectal cancers

**期刊：** Nature (2026年4月15日)

**作者：** Julian R. Buissant des Amorie, Joris H. Hageman, Hugo J. G. Snippert (University Medical Center Utrecht)

**链接：** https://www.nature.com/articles/s41586-026-10344-7

**一句话概要：** 转移相关的肿瘤-胎儿细胞状态在结直肠癌最早期的侵袭前沿即已出现，由特化的成纤维细胞亚群诱导产生。

**主要贡献：**
- 对19例T1期结直肠癌进行空间转录组学分析，发现侵袭前沿普遍存在High Relapse Cell (HRC)特征
- 建立多区域类器官生物库，证明侵袭前沿表型由微环境因素而非肿瘤细胞内在遗传驱动
- 鉴定了"滋养细胞样癌相关成纤维细胞"(trophocyte-like CAFs)，通过TGFβ和前列腺素信号诱导肿瘤-胎儿可塑性

**Critical简评：** 这项研究挑战了"转移能力是晚期癌症特征"的传统观念。通过精细的时空解析，作者发现转移相关的细胞状态在恶性肿瘤转化后几乎立即出现。研究还揭示了正常组织架构（隐窝轴上的成纤维细胞分区）如何在肿瘤中被"重用"来驱动侵袭前沿的细胞可塑性。这为早期干预提供了新的靶点思路。

---

### 3. 抗体设计的多目标贝叶斯优化

**标题：** BOAT: Navigating the Sea of In Silico Predictors for Antibody Design via Multi-Objective Bayesian Optimization

**期刊：** AISTATS 2026 (arXiv预印本，2026年4月15日)

**作者：** Alexandra Gessner 等

**链接：** https://arxiv.org/abs/2604.13980

**一句话概要：** 提出BOAT框架，通过贝叶斯优化联合优化多种抗体特性，实现高效的多目标抗体工程。

**主要贡献：**
- 开发"即插即用"的多目标贝叶斯优化框架，结合不确定性感知代理模型与遗传算法
- 系统比较了代理驱动优化与昂贵生成式方法的性能边界
- 建立了序列维度和Oracle成本对优化效果的实用限制

**Critical简评：** 抗体优化是一个典型的多目标问题——需要同时平衡亲和力、特异性、稳定性等多个属性。传统方法采用序贯过滤流水线，计算成本高且效率低。BOAT框架提供了一个优雅的解决方案，能够同时优化多个预测特性。对于计算蛋白质设计领域，这种方法论上的进步值得关注。

---

### 4. 蛋白质优化的多目标强化学习

**标题：** STOMP: Pareto-Optimal Offline Reinforcement Learning via Smooth Tchebysheff Scalarization

**期刊：** arXiv预印本 (2026年4月14日)

**作者：** Aadyot Bhatnagar 等

**链接：** https://arxiv.org/abs/2604.13175

**一句话概要：** 提出STOMP算法，通过平滑切比雪夫标量化实现蛋白质语言模型的多目标对齐，在催化活性和特异性等多属性优化中表现优异。

**主要贡献：**
- 将多目标强化学习本身框架化为一个标量化优化问题
- 提出Smooth Tchebysheff Optimization方法，克服线性标量化无法恢复Pareto前沿非凸区域的缺陷
- 在9个蛋白质工程任务设置中，8个达到了最高的超体积指标

**Critical简评：** 与BOAT（贝叶斯优化路径）形成互补，STOMP走的是强化学习路径。两者都针对计算蛋白质设计中的多目标优化问题，但技术路线不同。STOMP的创新在于将经典的切比雪夫标量化方法平滑化，使其可与直接偏好优化(DPO)框架兼容。这对于希望用RLHF方法微调蛋白质语言模型的研究者具有参考价值。

---

### 5. Igκ可变区编辑的线性RAG扫描机制

**标题：** Linear RAG scanning mediates editing of Igκ variable region repertoires

**期刊：** Nature (2026年4月15日)

**作者：** Xiang Li, Hongli Hu, Frederick W. Alt (Harvard Medical School)

**链接：** https://www.nature.com/articles/s41586-026-10362-5

**一句话概要：** 揭示Igκ轻链二次重排采用线性RAG扫描机制，而非之前假设的扩散机制。

**主要贡献：**
- 首次阐明Igκ二次Vκ-to-Jκ重排的分子机制——线性RAG扫描
- 发现Cer/Sis元件的删除/位移是从"双环扩散"机制转换为"单环线性扫描"的发育开关
- 证明强RSS和转录介导的扫描障碍协同促进邻近Vκ的使用

**Critical简评：** 这项工作解决了抗体轻链多样性产生机制的一个长期悬而未决的问题。研究者通过巧妙的遗传学实验，证明Igκ的二次重排采用与Igh类似的线性扫描机制，而非之前假设的扩散机制。对于理解B细胞受体编辑和自身免疫耐受具有重要意义。

---

## 📊 趋势评述

本周研究呈现几个明显趋势：

1. **空间组学走向"健康参考"**：肝脏空间图谱研究开创了使用活体移植供体作为健康参考的先例，这将成为组织图谱研究的质量标杆。

2. **肿瘤-胎儿可塑性的时空解析**：结直肠癌研究表明，转移相关的细胞状态并非晚期事件，而是在恶性转化后立即出现。这改变了我们对肿瘤进展时间线的理解。

3. **多目标优化方法进入蛋白质设计**：两篇独立工作（BOAT和STOMP）从不同角度解决计算蛋白质设计中的多目标优化问题，表明该问题正在成为领域焦点。

4. **免疫受体编辑机制的精细化理解**：Igκ二次重排机制的阐明，为理解B细胞耐受和自身免疫提供了新的分子基础。

---

*本简报由AI自动生成，仅供参考*
