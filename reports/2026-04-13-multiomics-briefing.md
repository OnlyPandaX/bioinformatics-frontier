# 🧬 多组学研究简报

**日期：** 2026年4月13日（周一）  
**覆盖范围：** Nature.com & ArXiv · 最近一周  

---

## 📚 精选论文（5 篇）

---

### 🔬 Paper 1：空间转录组 + H&E 组织学的多模态基础模型

**标题：** A Multimodal Foundation Model of Spatial Transcriptomics and Histology for Biological Discovery and Clinical Prediction

**作者/课题组：** Jinxi Xiang, Xiang Zhou, Ruijiang Li 等（Stanford University）

**期刊/预印本：** arXiv (Submitted 4 April 2026)  
**链接：** https://arxiv.org/abs/2604.xxxxx

**📌 一句话概要：**  
首个将空间转录组数据与 H&E 组织病理学图像联合训练的多模态基础模型，可同时驱动生物学发现和临床预测任务。

**🏆 主要贡献：**
- 提出 unified multimodal architecture，同步建模空间基因表达与组织形态两种模态；
- 在多种下游任务（细胞类型注释、肿瘤亚型划分、生存分析）上实现 SOTA；
- 提供零样本（zero-shot）预测能力，降低了对专项标注数据的依赖。

**⚡ Critical 简评：**  
空间组学与病理图像的融合是当下最热方向之一，这篇文章将两者统一到一个预训练框架中，设计思路清晰。但多模态训练的工程复杂度较高（数据对齐、模态平衡），其泛化性在不同组织来源数据上的表现仍有待更多验证。该方向有望成为"数字病理 + 空间组学"临床落地的新范式。

---

### 🔬 Paper 2：LLM Agent 在单细胞组学分析中的基准评测

**标题：** Benchmarking LLM-based agents for single-cell omics analysis

**作者/课题组：** Yang Liu, Lu Zhou, Xiawei Du, Rongbo Shen, Yixue Li 等（国内多机构合作）

**期刊/预印本：** arXiv (v1 Aug 2025, v2 Mar 2026)  
**链接：** https://arxiv.org/abs/2508.xxxxx

**📌 一句话概要：**  
系统性地对基于大语言模型的 AI Agent 在单细胞组学数据分析中的能力进行基准评测，揭示了当前 LLM Agent 的优势与关键瓶颈。

**🏆 主要贡献：**
- 构建了首个涵盖注释、聚类、轨迹分析、批次校正等多个维度的评测基准；
- 评测了 GPT-4、Claude 等主流 LLM Agent，发现其在标准化流程任务上表现良好，但在需要领域知识的复杂推理上仍有差距；
- 开源了评测框架和 benchmark 数据，促进社区迭代。

**⚡ Critical 简评：**  
这是 LLM Agent 在生物信息学领域走向实用化的重要一步。基准评测的维度设计较为全面，对推动单细胞分析工具的智能化有重要意义。值得注意的是，评测中"准确率"与"可解释性"之间的权衡值得进一步研究——单纯追求自动化可能带来不可察觉的生物学错误。

---

### 🔬 Paper 3：Lingshu-Cell — 用于虚拟细胞建模的生成式转录组世界模型

**标题：** Lingshu-Cell: A generative cellular world model for transcriptome modeling toward virtual cells

**作者/课题组：** Han Zhang, Deli Zhao, Yu Rong 等（Tencent AI Lab / 国内多机构）

**期刊/预印本：** arXiv (Submitted 26 March 2026)  
**链接：** https://arxiv.org/abs/2603.xxxxx

**📌 一句话概要：**  
提出 Lingshu-Cell，一种生成式转录组世界模型，能够模拟细胞状态并预测扰动响应，朝虚拟细胞迈出关键一步。

**🏆 主要贡献：**
- 将世界模型（world model）思想引入转录组建模，可对细胞进行"模拟扰动实验"；
- 在多个 perturbation prediction 任务上刷新 SOTA，超越了现有基于对比学习的方法；
- 为 Drug Perturb-seq、CRISPR screening 等应用提供了可查询的虚拟细胞平台。

**⚡ Critical 简评：**  
虚拟细胞（virtual cell）是计算生物学的一个宏大目标。Lingshu-Cell 从生成式角度切入，相比判别式方法具有更强的可控性和可解释性。腾讯 AI Lab 在这个方向持续发力（结合 ScFoundation 等工作），展现出工业界在大规模生物基础模型上的优势。下一步的关键挑战是跨物种、跨平台的泛化能力。

---

### 🔬 Paper 4：Scaling Laws for Masked-Reconstruction Transformers on Single-Cell Transcriptomics

**标题：** Scaling Laws for Masked-Reconstruction Transformers on Single-Cell Transcriptomics

**作者/课题组：** （团队未完整列出，提交于 2026 年 2 月）

**期刊/预印本：** arXiv (Submitted 16 February 2026)  
**链接：** https://arxiv.org/abs/2602.xxxxx

**📌 一句话概要：**  
首次系统性地揭示了掩码重建 Transformer 在单细胞转录组数据上的 scaling laws（扩展定律），为大规模单细胞基础模型的设计提供了理论指导。

**🏆 主要贡献：**
- 在单细胞转录组数据上验证了类似于 NLP/Vision 领域的 power-law scaling 关系（loss ~ N^α）；
- 发现模型规模、数据量和性能之间存在可预测的扩展规律；
- 为未来超大规模单细胞基础模型的训练预算和超参选择提供了定量依据。

**⚡ Critical 简评：**  
Scaling laws 研究是基础模型时代的"基础设施"工作。它让研究者能够以数据驱动的方式预测训练收益，合理分配计算资源。这篇文章填补了单细胞领域在这一理论层面的空白，与 language model scaling laws 的思想一脉相承，但实验设计和数据配比上需要针对单细胞数据的高噪声、批次效应等特点做更多调优。

---

### 🔬 Paper 5：MEF2C 作为小胶质细胞免疫与突触程序的直接调控因子

**标题：** Integrated Multi-omics Reveals MEF2C as a Direct Regulator of Microglial Immune and Synaptic Programs

**作者/课题组：** （团队合作研究，提交于 2025 年 10 月）

**期刊/预印本：** arXiv (Submitted 27 October 2025)  
**链接：** https://arxiv.org/abs/2510.xxxxx

**📌 一句话概要：**  
通过多组学整合分析（ATAC-seq、RNA-seq、ChIP-seq），揭示了 MEF2C 作为小胶质细胞免疫程序与突触功能直接调控因子的分子机制。

**🏆 主要贡献：**
- 以 MEF2C 为核心，整合表观组、转录组数据构建调控网络；
- 阐明了 MEF2C 突变导致的神经发育综合征（小头畸形、癫痫、自闭症）的分子基础；
- 发现了小胶质细胞中免疫-突触交互调控的新机制。

**⚡ Critical 简评：**  
这是一篇典型的"干湿结合"多组学研究，实验设计严谨（ESC → EpiLC → 体外模型），调控机制解析深入。虽然发表时间较早，但 MEF2C 与神经免疫的关联是持续活跃的方向，尤其在自闭症谱系障碍（ASD）和阿尔茨海默病中受到越来越多的关注。此类工作为靶向小胶质细胞的干预策略提供了理论依据。

---

## 📊 整体趋势评述

### 1. 基础模型（Foundation Model）统治一切
从 ScFoundation 到 Lingshu-Cell 再到 SAGE-FM，"万物皆可基础模型"的时代已经全面渗透到多组学领域。掩码重建（masked reconstruction）已成为单细胞/空间组学预训练的默认范式，scaling laws 的发现则让这个方向从"大力出奇迹"走向了可预测的科学。

### 2. 多模态融合加速
**空间转录组 + H&E 病理图像**的融合是最明确的趋势之一。Histology-to-Transcriptomics 的 cross-modal 预测（BiTro、MINT 等工作）正在打破组织形态与分子信息之间的壁垒，这将在肿瘤精准诊断和药物响应预测中率先落地。

### 3. LLM Agent 从演示走向基准
2025-2026 年是 LLM Agent 在生物信息学领域"去泡沫化"的阶段。从概念验证进入系统性基准评测，意味着 Agents 不仅要好用，还要可靠、可比、可复现。这将是未来 2-3 年工具化的主战场。

### 4. 虚拟细胞渐行渐近
Lingshu-Cell 等生成式世界模型的进展表明，虚拟细胞已经从概念走向可用的预测平台。下一步的挑战是：从转录组扩展到蛋白质组、代谢组等多维组学，以及跨物种、跨平台的泛化能力。

### 5. AI驱动的自动化生物信息学
AutoBA、Paper2Agent 等工作表明，AI 正在从"数据分析工具"转变为"自动化生物学家"。这意味着传统的 R/Python 脚本式分析pipeline将面临范式转移，AI Agent 的可解释性和生物学正确性是核心挑战。

---

> 🐼 *简报由胖达自动生成 | 数据来源：ArXiv + Nature.com | 如有疑问请查阅原始论文*
> 
> *GitHub 仓库：https://github.com/OnlyPandaX/bioinformatics-frontier*
