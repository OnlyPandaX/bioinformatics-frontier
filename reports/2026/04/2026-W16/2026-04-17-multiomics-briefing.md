# 多组学研究简报 | 2026-04-17

> 时间窗口：2026-04-10 ~ 2026-04-17 (7天)

---

## 📌 今日精选 (5篇)

### 1. PRiMeFlow: Capturing Complex Expression Heterogeneity in Perturbation Response Modelling

**作者**: Zichao Yan, Yan Wu, Mica Xu Ji, Rory Stark et al.

**来源**: arXiv:2604.13986 | 提交日期: 2026-04-15

**链接**: https://arxiv.org/abs/2604.13986

**一句话概要**: 基于流匹配(Flow Matching)的端到端方法，直接在基因表达空间建模遗传和小分子扰动的效应。

**主要贡献**:
- 提出PRiMeFlow框架，采用分布拟合方法精确近似单细胞基因表达的实证分布
- 在PerturBench上进行广泛基准测试验证性能
- U-Net架构参数化速度场，直接在基因表达空间操作
- **荣获首届ARC Virtual Cell Challenge通用奖**

**Critical 简评**: 扰动响应预测是计算生物学核心难题，PRiMeFlow的流匹配方法绕过了传统生成模型的复杂性，直接建模表达分布。获奖证明其实用价值，值得关注其在药物发现中的应用潜力。

---

### 2. Nested Atoms Model: Clustering Big Population-Scale Single-Cell Data

**作者**: Arhit Chakrabarti, Yang Ni, Yuchao Jiang, Bani K. Mallick

**来源**: arXiv:2604.11731 | 提交日期: 2026-04-13

**链接**: https://arxiv.org/abs/2604.11731

**一句话概要**: 贝叶斯非参数方法实现群体规模单细胞数据的双层聚类，同时捕获个体遗传异质性和细胞类型异质性。

**主要贡献**:
- 提出Nested Atoms Model (NAM)，解决嵌套/层次数据聚类问题
- 在OneK1K数据集验证：982个个体、127万细胞、配对基因型数据
- 同时利用细胞基因表达和个体基因型进行双层聚类
- 快速变分贝叶斯推理算法实现高维数据扩展

**Critical 简评**: 群体规模单细胞研究(eQTL等)需要同时考虑个体和细胞两个层次，NAM填补了现有方法无法整合群体级变量的空白。OneK1K数据集的应用展示了其发现遗传-细胞类型关联的能力。

---

### 3. Cross-Modal Knowledge Distillation from Spatial Transcriptomics to Histology

**作者**: Arbel Hizmi, Artemii Bakulin, Shai Bagon, Nir Yosef

**来源**: arXiv:2604.09076 | CVPR 2026 CVMI Workshop | 提交日期: 2026-04-10

**链接**: https://arxiv.org/abs/2604.09076 | Project: https://cross-modal-distillation.github.io/

**一句话概要**: 将空间转录组衍生的组织微环境结构知识蒸馏到仅H&E病理模型，实现从昂贵ST到廉价病理的迁移。

**主要贡献**:
- 跨模态知识蒸馏框架：训练时用配对ST+H&E，推理时仅需H&E
- 在多种组织类型和疾病背景下验证，显著优于无监督形态学基线
- 恢复生物学意义的邻域组成，经细胞类型分析确认
- 解决空间转录组成本高、稀缺 vs H&E丰富但信号粗糙的矛盾

**Critical 简评**: 空间转录组的临床转化受限于成本，而H&E病理切片无处不在。该方法实现了"训练用ST，推理用H&E"的实用范式，有望大幅扩展空间组学发现的临床应用范围。

---

### 4. Gene regulatory landscape dissected by single-cell four-omics sequencing

**作者**: Yujie Chen, Zhiyuan Liu, Dong Xing et al.

**来源**: Nature | DOI: s41586-026-10322-z

**链接**: https://www.nature.com/articles/s41586-026-10322-z

**一句话概要**: 单细胞四组学测序同时解析基因组构象、组蛋白修饰、染色质可及性和基因表达，揭示调控景观动力学。

**主要贡献**:
- 开发CHARM方法，单细胞水平同时测定四种组学
- 揭示表观基因组谱的动力学和核内空间聚类
- 实现跨细胞类型和组织的调控景观精细分析
- 数据已公开：GEO GSE303006, 代码：github.com/skelviper/CHARM

**Critical 简评**: 四组学联合测定是单细胞多组学的新高度，将基因组三维结构与表观遗传和转录联系起来。该方法为理解基因调控的全景视图提供了前所未有的分辨率。

---

### 5. Single-cell spatiotemporal dissection of the human maternal–fetal interface

**作者**: Cheng Wang, Yan Zhou, Jingjing Li et al.

**来源**: Nature | DOI: s41586-026-10316-x

**链接**: https://www.nature.com/articles/s41586-026-10316-x

**一句话概要**: 人类母胎界面单细胞时空图谱，覆盖孕早期至足月，揭示细胞类型、状态、空间生态位及妊娠并发症相关细胞状态。

**主要贡献**:
- 单核多组学(snRNA-seq + snATAC-seq) + 亚微米空间图谱
- 覆盖孕周5-39周，191,735个配对多组学细胞核
- 解析19种主要细胞类型、瞬时状态和轨迹
- 原位映射细胞间通讯，识别先兆子痫、早产、流产相关细胞状态

**Critical 简评**: 人类妊娠生物学长期缺乏跨孕期的系统性单细胞图谱。该研究填补空白，为理解正常妊娠和病理妊娠提供了分子基础，对产前诊断和干预具有重要价值。

---

## 📊 整体趋势评述

### 本周亮点

1. **扰动响应建模突破**: PRiMeFlow在ARC Virtual Cell Challenge获奖，标志流匹配方法在单细胞扰动预测领域的成熟

2. **群体规模分析新工具**: NAM解决了一个关键痛点——如何同时聚类个体和细胞，为eQTL等群体研究提供新方法

3. **跨模态迁移实用化**: 知识蒸馏从ST到H&E，解决了空间组学临床转化的成本障碍

4. **多组学技术新高**: Nature四组学方法将基因组三维结构纳入单细胞多组学视野

5. **妊娠生物学里程碑**: 母胎界面时空图谱覆盖全孕期，为妊娠疾病研究奠定基础

### 技术趋势

- **流匹配(Flow Matching)** 正在扰动响应建模中崭露头角
- **知识蒸馏** 成为解决昂贵组学→廉价病理迁移的关键技术
- **贝叶斯非参数** 在大规模层次数据聚类中展现优势
- **多组学整合** 从双组学向三组学、四组学快速演进

### 应用前景

- 药物发现：PRiMeFlow类型的扰动预测模型
- 临床病理：ST→H&E知识蒸馏实现低成本空间组学分析
- 群体遗传：NAM类型方法用于eQTL、细胞类型特异性遗传效应研究
- 生殖医学：母胎界面图谱指导妊娠并发症早期诊断

---

*生成时间: 2026-04-17 08:30 (Asia/Hong_Kong)*
