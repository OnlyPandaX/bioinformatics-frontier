# 🧬 Bioinfo Weekly Summary v1.0.0

**周次**: 2026-W33（Aug 10 – Aug 16, 2026）
**生成日期**: 2026-08-16
**工具**: Bioinfo Weekly Summary v1.0.0（依赖：multi-omics-briefing v1.6.0 + ealert-tracker v3.5.0）

---

## 📊 周概览

| 类型 | 篇数 | 来源 |
|------|------|------|
| Journal Briefing | 6 篇 | 2026-08-11 ~ 08-16（每日监控） |
| Multi-omics Briefing | 5 篇 | 2026-08-12 ~ 08-16（每48h） |
| **合计** | **11 篇** | 覆盖 Nature/Cell/Nat Biotech/Nat Commun/Trends/bioRxiv/medRxiv/ArXiv |

**本周期刊分布**：Nature（18篇/单日）、Cell（14篇/单日）、Nature Biotechnology（12篇/单日）、Trends（14篇/单日）、Science（7篇/单日）、Nature Communications、Cancer Cell 等。

---

## 🔬 重点期刊论文评述（Journal Briefing 精选）

### 1. Spatial multi-omics landscape of colorectal cancer macro- and micrometastases
**来源**: *Cancer Cell*, 2026 Jul 9 | DOI: 10.1016/j.ccell.2026.06.009
**作者**: Liu Y, Jadhav AS, Pan Y, et al.

**🔍 Critical 评述**：⭐⭐⭐⭐⭐
本研究对结直肠癌宏转移与微转移灶进行空间多组学解析，系统描绘了转移灶与原发瘤之间的分子差异图谱。亮点在于揭示了微转移灶（肉眼不可见）已具备与宏转移相似的分子特征，提示早期分子诊断的临床价值。该工作将空间组学推向临床转化方向，是理解肿瘤转移异质性的重要里程碑。

---

### 2. Spatial biomarker discovery via interpretable semantic learning in histopathology
**来源**: *Cancer Cell*, 2026 Jun 11 | DOI: 10.1016/j.ccell.2026.05.014
**作者**: Liang J, Jiang X, Reitsam NG, et al. | **通讯**: Kather JN（DKFZ）

**🔍 Critical 评述**：⭐⭐⭐⭐
可解释语义学习在病理组学中的应用，是空间组学从"观察"到"发现"的关键一步。传统组织病理学依赖专家肉眼读片，本文通过可解释 AI 模型自动从 H&E 图像中提取空间生物标志物，在多个大型独立队列中验证泛化性。可解释性设计（输出热图+生物学解释）使模型可被临床接受，是 AI 病理学的务实推进路线。

---

### 3. Rb-driven transcription limits its tumour-suppressive effects in breast cancer
**来源**: *Nature*, 2026 Aug 12 | DOI: 10.1038/s41586-026-10886-w
**作者**: Watt AC, Ahn A, et al. | **通讯**: André F, Goel S

**🔍 Critical 评述**：⭐⭐⭐⭐
Rb（视网膜母细胞瘤蛋白）作为经典的抑癌基因，其失活机制已研究数十年，但本文揭示了一个反直觉的发现：Rb 驱动的转录程序在乳腺癌中反而限制其自身的抑癌功能。这挑战了"Rb 抑制 = 肿瘤促进"的简单线性认知，提示 Rb 的抑癌作用具有细胞状态依赖性，对精准医疗时代重新评估 RB1 突变乳腺癌患者的治疗策略有直接意义。

---

### 4. Neural checkpoint therapy in lung cancer
**来源**: *Trends in Cancer*, 2026 Aug | DOI: 10.1016/j.trecan.2026.06.014
**作者**: Das G, Zhao H, Wong STC

**🔍 Critical 评述**：⭐⭐⭐⭐
感觉神经正在成为肿瘤免疫的新调节轴——这一概念从神经科学跨入肿瘤学，揭示了神经系统与肿瘤微环境之间的直接对话。本文系统综述了肺癌中"神经检查点"的分子机制，提出神经信号与免疫检查点的 crosstalk 为联合治疗提供了全新靶点。神经-免疫轴的发现让"冷肿瘤"变"热"的策略从免疫细胞扩展到了神经系统。

---

### 5. Ketogenic diet mediates intestinal tumorigenesis through lipids not ketones
**来源**: *Nature*, 2026 Aug 14 | DOI: 10.1038/s41586-026.10779-y
**作者**: （原文信息待验证）

**🔍 Critical 评述**：⭐⭐⭐⭐
生酮饮食近年来被广泛研究用于代谢疾病和抗肿瘤，但其机制一直存在争议——是酮体的代谢产物，还是饮食本身改变了脂质代谢？本文通过严格的实验设计，揭示肠道肿瘤的发生是通过**脂质代谢重编程**而非酮体信号介导。这一发现对生酮饮食作为肿瘤辅助治疗的安全性评估有重要警示意义，也为肠道脂质代谢靶点发现提供了新线索。

---

## 🧬 重点预印本 / Nature 论文评述（Multi-omics Briefing 精选）

### 1. VOICE — 视觉-组学基础模型从 H&E 图像预测单细胞基因表达
**来源**: ArXiv q-bio.BM | 2026-08-08 | DOI: 10.48550/arXiv.2608.08366
**作者**: Xin Luo, Yicheng Tao, Haoxuan Zeng, et al. | **机构**: USTC/Tsinghua

**🔍 Critical 评述**：⭐⭐⭐⭐⭐
> **本周最强突破性工作。**

这是视觉基础模型（Path foundation model）与转录组基础模型（scRNA foundation model）首次通过对比学习实现跨模态对齐，并在真实 H&E 图像上直接预测单细胞分辨率基因表达。其创新性在于双分支设计：**直接回归分支**利用形态学信号预测可及基因；**检索分支**从参照细胞库借用信息补充形态盲区，按基因动态融合——本质上是 LLM 时代 RAG 思想在空间组学的首次系统实现。

**对领域的影响**：H&E 是全球医院库存量最大的组织学数据（每例患者常规检查），而空间转录组（Xenium/Visium）成本高昂、无法普及。VOICE 使"免费 H&E → 有价值的分子信息"成为可能，将彻底改变病理 AI 的价值天花板。**值得关注的局限**：训练需要配对的 Xenium+H&E 数据，成本仍高；在非癌组织上的泛化性待验证。

---

### 2. GEP-NET 精准医疗 — 磷酸蛋白组学驱动低突变负荷肿瘤个性化靶点发现
**来源**: bioRxiv Cancer Biology | 2026-08-09 | DOI: 10.64898/2026.07.31.742097
**作者**: Pu T, Joughin BA, et al. | **机构**: MIT Koch Institute / NIH（Yaffe Lab）

**🔍 Critical 评述**：⭐⭐⭐⭐⭐
> **计算蛋白组学临床转化的标杆案例。**

胃肠胰神经内分泌肿瘤（GEP-NET）是典型的"低突变负荷、冷肿瘤"——基因组测序找不到可靶向驱动基因。本文从蛋白质翻译后修饰层面（磷酸化）寻找漏洞：KMEA（Kinase Motif Enrichment Analysis）框架将磷酸蛋白组学数据转化为激酶活性谱，发现 mTOR/CK2 特异性激活，并提出个性化用药策略（依维莫司/CX-4945）。关键意义：激酶组学+已有获批药物的组合，为精准医学"最后一块拼图"——低突变负荷肿瘤——提供了可行路径。

---

### 3. Protein language models and the long tail of functional diversity
**来源**: bioRxiv Bioinformatics | 2026-08-14 | DOI: 10.64898/2026.08.14.744703
**作者**: Ria Vinod, Samir Char, et al. | **机构**: Broad Institute

**🔍 Critical 评述**：⭐⭐⭐⭐
**挑战主流 PLM 训练范式的基础性工作。** 分析 GigaRef（33.4 亿序列）发现：43% 的序列为单例（singleton），被常规相似性聚类采样策略系统性排除——这意味着当前主流 PLM（ESM-2、AlphaFold2-Multimer）的训练数据存在系统性盲点。更重要的是，本文证明单例序列携带更密集的蛋白质域内容（域级同源性），且可被 PLM 学习而非仅是噪声。**这是 PLM 数据工程范式转变的前奏**——微软 Dayhoff Atlas 已开始将单例纳入训练，2026 下半年 PLM 社区或将迎来数据策略重构的讨论。

---

## 📈 领域趋势：本周研究热点

### 🔥 热度图

| 主题 | 本周强度 | 趋势 |
|------|---------|------|
| **空间组学 / 病理 AI** | ⭐⭐⭐⭐⭐ | 爆发，VOICE + 可解释语义学习双星闪耀 |
| **肿瘤免疫微环境** | ⭐⭐⭐⭐⭐ | 持续热潮，神经检查点、TLS、胆汁酸多靶点涌现 |
| **蛋白质语言模型** | ⭐⭐⭐⭐ | 新数据策略挑战主流范式 |
| **cfDNA 片段组学** | ⭐⭐⭐⭐ | 工具链标准化阶段，pyfraglib 填补基础设施空白 |
| **基因编辑工具工程** | ⭐⭐⭐ | CRISPR-FOIL 实现染色质环路可编程操控 |
| **多模态基础模型** | ⭐⭐⭐⭐ | 从单模态共享表征向"保留差异"范式转变（MBTA） |
| **罕见病基因组** | ⭐⭐⭐ | nf-cavalier + FELIX 推动临床基因组标准化 |

### 🧭 本周方法学主题词云
> `空间多组学` `流匹配` `基础模型对齐` `cfDNA片段组学` `激酶组学` `可解释AI` `图泛基因组` `单例序列` `多智能体` `神经-免疫轴` `线粒体转移` `染色质环路`

---

## 🔭 下周关注方向

1. **VOICE 类方法扩展**：关注视觉-组学融合是否向蛋白质组、代谢组拓展，以及配对数据成本问题是否有解决方案（弱监督/自监督）

2. **PLM 数据策略重构**：单例序列的纳入是否会在 2026 下半年形成主流共识？关注微软 Dayhoff Atlas 和 Meta ESM3 的后续更新

3. **肿瘤免疫新靶点临床转化**：神经检查点（Neural checkpoint）、GABA 免疫抑制轴、GEP-NET 激酶靶点——这三个方向最快可能在临床试验阶段看到数据

4. **cfDNA 片段组学标准化**：pyfraglib 发布后社区采纳情况，以及与 Olink/SomaScan 等商业平台的交叉验证

5. **图泛基因组实用化**：PanSVmerger 解决了多等位基因冗余，GRCh38/hs1 的下游分析工具有望加速成熟

---

## 📚 本周阅读推荐

| 优先级 | 论文 | 一句话推荐理由 |
|--------|------|-------------|
| ⭐⭐⭐⭐⭐ | VOICE (ArXiv 2608.08366) | 视觉-组学基础模型元年之作，重新定义病理 AI 上限 |
| ⭐⭐⭐⭐⭐ | GEP-NET KMEA (bioRxiv) | 计算蛋白组学→临床靶点的完整闭环演示 |
| ⭐⭐⭐⭐ | PLM Long Tail (bioRxiv) | 挑战 PLM 训练范式的第一性原理分析 |
| ⭐⭐⭐⭐ | Rb Breast Cancer (Nature) | 颠覆经典抑癌基因认知的机制研究 |
| ⭐⭐⭐⭐ | Ketogenic Diet Lipids (Nature) | 重新定义生酮饮食抗肿瘤机制的实验证据 |

---

*报告由 Bioinfo Weekly Summary v1.0.0 自动生成*
*数据来源：EAlert Tracker v3.5.0 + multi-omics-briefing v1.6.0*
*周次覆盖：2026-08-10 ~ 2026-08-16（Asia/Hong_Kong）*
