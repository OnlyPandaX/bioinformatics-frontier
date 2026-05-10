# 多组学研究简报 | 2026-05-10

> 搜索窗口：2026-05-08 ~ 2026-05-10（48小时）| 数据来源：Nature、ArXiv、bioRxiv、medRxiv

---

## 📌 本期精选（5篇）

### 1. Single-cell splicing analysis with ISSAC links cell type-specific and cell state-dependent sQTLs to neurological disorders

| 字段 | 内容 |
|------|------|
| **作者** | ZHANG Y, Wang W, Tan ZY, *et al.*; Boxiang Liu（通讯）|
| **平台** | medRxiv（Publish Ahead of Print）|
| **链接** | https://doi.org/10.1101/2026.05.06.26352548 |
| **日期** | 2026-05-08（v2）|
| **类别** | health informatics / genomics |

**一句话概要**：ISSAC方法通过广义线性混合模型直接量化单细胞可变剪接QTL，在300万个人脑细胞核中发现31,318个细胞类型特异性sQTL，并关联194个阿尔茨海默病偏向基因。

**主要贡献**：
- 提出ISSAC（单细胞剪接QTL分析框架），突破传统pseudobulk方法的局限，可直接检测细胞类型特异性和细胞状态依赖性sQTL
- 应用于722名捐赠者的背外侧前额叶皮层（DLPFC）约300万细胞核，鉴定31,318个独立cis-sQTL（7种主要细胞类型）和16,861个cis-sQTL（67种亚细胞类型）
- 约67%的sGenes与eGenes无重叠，揭示剪接调控的独立性
- 发现369个受细胞状态（树突发育、突触信号）调控的sQTL，194个阿尔茨海默病（AD）偏向sGenes
- 功能验证：rs11549690通过调控TRPT1第7外显子跳跃影响神经质风险

**Critical简评**：ISSAC首次在单细胞分辨率下系统解析了剪接QTL的细胞类型特异性和状态依赖性，样本量（722例人脑）和细胞通量（300万细胞核）均创该领域新高。将sQTL与6种神经精神疾病（AD、肌萎缩侧索硬化、帕金森病、路易体痴呆、精神分裂症）共定位，为复杂疾病的剪接调控机制提供了新视角。方法学上，ISSAC优于pseudobulk方法1.4-2.5倍，且能捕获传统方法无法发现的细胞状态依赖性遗传效应，对神经精神疾病研究具有重要推动力。（基于摘要推断）

---

### 2. Spatial imprints of emergent cardiomyocyte states in the pressure-overloaded heart

| 字段 | 内容 |
|------|------|
| **作者** | Liu Y, Coles AM, Castiglione J, *et al.*; Pallav Kosuri（通讯）|
| **平台** | bioRxiv（genomics类别）|
| **链接** | https://doi.org/10.1101/2026.05.04.721738 |
| **日期** | 2026-05-08（v1）|
| **类别** | genomics / spatial transcriptomics |

**一句话概要**：MERFISH空间转录组（>40万细胞）揭示压力超负荷心脏中 cardiomyocyte 的代谢/促纤维化状态连续谱，证明微环境印记决定疾病进展。

**主要贡献**：
- 结合MERFISH空间转录组与Cellouette（改进的细胞分割方法），对压力超负荷小鼠心脏 >400,000 个细胞进行转录谱、空间组织和物理连接分析
- 发现cardiomyocytes在应激下呈现连续转录状态谱，晚期状态以代谢转换和促纤维化为特征
- 通过网络分析（物理细胞连接 + 细胞类型特异性转录谱）发现：促纤维化CM进展与特定局部微环境紧密关联
- CM代谢转换可通过邻近非CM细胞的转录模式推断，揭示疾病中的微环境印记
- 为理解心脏压力超负荷异质性结局提供资源

**Critical简评**：本研究将空间转录组学应用于心脏病学的核心问题——压力超负荷诱导的心力衰竭异质性。技术亮点在于Cellouette改进了心肌细胞（CM）这种大而复杂的细胞的分割精度，使>40万细胞的空间解析成为可能。生物学发现上，"微环境印记"（microenvironmental imprints）概念新颖：CM的转录状态转换不是细胞自主的，而是由局部邻域细胞网络决定的。这对理解心衰的细胞间通讯机制具有重要意义。与2026-05-09 Nature空间生态型论文形成方法学互补——一个用空间转录组解析心脏，一个用机器学习解析肿瘤微环境。（基于摘要推断）

---

### 3. MYC pathway reprogramming through a TIP60 coactivator switch in neuroendocrine lineage transition in prostate cancer

| 字段 | 内容 |
|------|------|
| **作者** | Sun Z, Zhao J, Khan Z, *et al.*; Charles Sawyers（通讯）|
| **平台** | bioRxiv（cancer biology类别）|
| **链接** | https://doi.org/10.1101/2026.05.05.723058 |
| **日期** | 2026-05-08（v1）|
| **类别** | cancer biology / multi-omics |

**一句话概要**：神经内分泌前列腺癌（NEPC）中MYC通路发生辅因子切换（TIP60替代BRD8），所有NEPC模型均依赖TIP60乙酰转移酶活性，为MYC驱动的NE疾病提供新治疗靶点。

**主要贡献**：
- 使用同源PRAD和NEPC小鼠tumoroids，鉴定NEPC细胞获得的新转录因子依赖网络
- ASCL1是NE谱系命运的关键调节因子，MYCL在NEPC生长和存活中起下游作用（通过招募TIP60/KAT5乙酰转移酶）
- 所有NEPC模型均显著依赖TIP60，且其H2A.Z乙酰转移酶活性为NEPC所必需
- NEPC中TIP60复合物亚基发生切换：BRD8（读取乙酰化标记）新纳入TIP60-C
- MYC通路成瘾的NE状态伴随：辅因子切换（TIP60替代SRCAP进行H2A.Z交换）+ 共激活因子切换（TIP60替代常规共激活因子作用于MYC靶基因）
- NE特异性MYCL与TIP60耦合，揭示通过药理抑制TIP60靶向MYC驱动的NE疾病的新机会

**Critical简评**：Sawyers实验室在前列腺癌神经内分泌转化领域的又一力作。核心发现是"辅因子切换"范式：从腺癌（PRAD）到神经内分泌癌（NEPC），MYC家族成员从MYC切换为MYCL，组蛋白乙酰转移酶从SRCAP切换为TIP60，共激活因子也发生相应切换。这种多层级切换使NEPC对TIP60抑制高度敏感，为NEPC这种致命亚型提供了精准治疗靶点。研究结合了tumoroid模型、转录因子扰动筛选、共激活复合物质谱分析等多组学手段，系统解析了谱系转换的分子逻辑。（基于摘要推断）

---

### 4. Postnatal Reprogramming Shapes Human Intestinal Epithelial Immune Competency

| 字段 | 内容 |
|------|------|
| **作者** | Lee CH-J, Fawkner-Corbett D, Christoforidou Z, *et al.*; Agne Antanaviciute（通讯）|
| **平台** | bioRxiv（cell biology类别）|
| **链接** | https://doi.org/10.1101/2026.05.05.722861 |
| **日期** | 2026-05-08（v1）|
| **类别** | cell biology / multi-omics |

**一句话概要**：整合单细胞多组学和空间转录组定义出生后肠上皮适应程序——干细胞增强子重塑先于转录改变，BHLHE40是早期生命中干扰素/NF-κB信号的衰减调节器。

**主要贡献**：
- 整合单细胞多组学（scRNA-seq + scATAC-seq）和空间转录组，定义出生后肠上皮适应机制
- 发现异步发育轨迹：出生后上皮重编程以代谢、连接结构和先天防御的协同变化为特征
- 出生后上皮干细胞呈现动态增强子重塑，可及性经常先于转录（表观遗传预备）
- 胎儿干性元件在转录降低的情况下仍保持可及，保留可塑性潜能
- 出生后上皮经历骨髓细胞顺序归巢，随后是先天T细胞，围上皮B细胞在婴儿期晚些时候定位
- 使用发育阶段特定的类器官，证明上皮对炎症刺激的反应具有年龄依赖性且早期生命受限
- 鉴定BHLHE40作为早期生命调节因子，减弱干扰素-和NF-κB驱动的信号传导

**Critical简评**：这项研究将"出生后适应"这一经典发育生物学问题推向了多组学新高度。技术路线亮眼：scRNA-seq + scATAC-seq + 空间转录组三位一体，同时捕获转录、表观和空间信息。核心发现是"表观遗传预备"——增强子可及性在转录之前就已改变，提示上皮在出生时已为后续免疫挑战做好准备。BHLHE40作为早期生命免疫调节因子的鉴定具有 translational 价值，可能解释新生儿对感染的易感性机制。与成人肠道免疫研究形成重要对照。（基于摘要推断）

---

### 5. Predicting Enzyme pH Optima from Structure Using Equivariant Graph Neural Networks (pHoptNN)

| 字段 | 内容 |
|------|------|
| **作者** | SinhaRoy R, Clauss C, Ivanikov I, Kuenze G（通讯）|
| **平台** | bioRxiv（bioinformatics类别）|
| **链接** | https://doi.org/10.1101/2026.01.18.700076 |
| **日期** | 2026-05-08（v2）|
| **类别** | bioinformatics / computational biology |

**一句话概要**：pHoptNN利用E(n)-等变图神经网络从3D蛋白质结构预测酶最适pH，在12,000个酶的数据集上达到0.588 pH单位的RMSE，显著优于序列方法EpHod（0.879）。

**主要贡献**：
- 提出pHoptNN：基于E(n)-等变图神经网络，直接从3D蛋白质结构预测酶pH最优值（pH opt）
- 在约12,000个具有实验测定pH opt值和高置信度结构模型（来自PDB和AlphaFold3）的数据集上训练
- 将酶表示为原子级分子图，整合结构、化学和静电特征
- 通过遗传搜索和贝叶斯搜索策略进行广泛超参数优化
- 在留出测试集上达到RMSE = 0.588 pH单位，显著优于基于序列的方法EpHod（RMSE = 0.879）
- 在不同酶类和pH范围内保持稳健预测性能
- 证明基于结构的等变深度学习在酶pH opt预测中的实用性，凸显pHoptNN加速酶发现和工程流程的潜力

**Critical简评**：酶最适pH是酶工程和生物技术领域的关键参数，但实验测定费时费力。pHoptNN的核心创新在于利用E(n)-等变GNN捕获3D结构的几何特征（旋转/平移等变性），这比基于序列或传统机器学习的方法有根本优势。0.588 pH单位的RMSE意味着可以准确预测pH opt ± 0.6个单位，对工业酶筛选已有实用价值。数据集规模（12K酶）和结构上基于AlphaFold3预测，体现了结构预测革命对酶工程的反哺。未来方向：整合活性位点pKa计算可能进一步提升精度。（基于摘要推断）

---

## 🧭 整体趋势评述

**本期主题：单细胞/空间分辨率 × 多组学整合 × 疾病机制解析**

1. **单细胞分辨率下的遗传调控解析进入新阶段**：ISSAC方法（论文1）代表单细胞QTL研究从表达（eQTL）向剪接（sQTL）的扩展，且能捕获细胞状态依赖性遗传效应，为复杂疾病提供新的分子机制视角。

2. **空间转录组学从方法学走向生物学发现**：两篇空间转录组研究（论文2、4）分别解析心脏压力超负荷和肠道出生后适应，证明空间背景对理解细胞状态转换和微环境印记不可或缺。

3. **癌症谱系转换的分子逻辑被系统解析**：NEPC中MYC/TIP60辅因子切换（论文3）揭示了谱系可塑性的多层级调控机制，为精准治疗提供新靶点。

4. **结构AI加速酶工程**：pHoptNN（论文5）将等变GNN应用于酶性质预测，体现了结构生物学与机器学习的交叉融合趋势。

**技术方法学亮点**：MERFISH + Cellouette（心脏）、scRNA + scATAC + 空间转录组（肠道）、等变GNN（酶学）

---

*Generated by multi-omics-briefing v1.7.0*  
*Report saved to: `~/Documents/bioinformatics-frontier/reports/2026/05/2026-W19/2026-05-10-multiomics-briefing.md`*
