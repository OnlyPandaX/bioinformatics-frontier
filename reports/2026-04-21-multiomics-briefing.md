# 🧬 多组学研究简报 | 2026-04-21

> **本期关键词**：RNA 语言模型、Kinome 深度分析、肠菌-宿主空间互作、全身体节细胞图谱

---

## 📌 整体趋势评述

本期（4月14–21日）Nature Methods 和 Nature Biotechnology 共发表多组学/单细胞相关**原创研究**共 5 篇，涵盖三大主题：

1. **RNA 基础模型加速进化与功能预测**（Orthrus，Nature Methods，Apr 17）
2. **临床批准激酶抑制剂的突变体层面深度分析**（Nature Biotechnology，Apr 20），推动精准医疗与老药新用
3. **全身体节细胞图谱与肠菌空间多组学**（Nature Methods，Apr 14），代表组织/器官级别多组学解析的前沿

> ⚠️ **去重提示**：已与 sent-papers.json 交叉比对，本期所有论文均为新发表，均在 7 天窗口期内，符合发送条件。

---

## 🔬 精选论文

---

### 📄 Paper 1：Orthrus — 跨物种进化驱动的 RNA 基础模型

| 字段 | 内容 |
|------|------|
| **标题** | Orthrus: toward evolutionary and functional RNA foundation models |
| **作者** | Philip Fradkin, Ruian Shi, Taykhoom Dalal, Brendan J. Frey, Quaid Morris, Bo Wang 等 |
| **期刊** | Nature Methods |
| **发表日期** | 2026-04-17 |
| **DOI** | 10.1038/s41592-026-03064-3 |
| **链接** | https://www.nature.com/articles/s41592-026-03064-3 |

**📝 一句话概要**  
Orthrus 是首个基于剪接异构体和直系同源转录本对比学习预训练的 RNA 基础模型，在多种 RNA 性质与功能预测任务中超越现有基因组基础模型。

**🔬 主要贡献**  
- 提出 **Orthrus**——开源 RNA 语言模型，通过对比学习（contrastive learning）融合进化信息（剪接异构体 + 直系同源转录本）
- 预训练策略有别于其他基因组基础模型，在 mRNA 稳定性、翻译效率、RNA 结合蛋白结合位点等任务上实现 SOTA
- 首个将进化保守性模式显式编码进预训练目标的 RNA foundation model

**⚡ Critical 简评**  
Orthrus 的核心创新在于"进化即监督信号"。通过拼接 isoform 与 orthologous transcripts 的配对关系，模型学到的不是单纯的序列规律，而是跨物种功能约束。这对非编码区功能注释、RNA 疗法设计（如 ASO/siRNA 优化）有直接价值。相比于纯 sequence-only 的模型，Orthrus 展现了"结构化生物学先验"的重要性。⚗️ **方法学意义**：可作为多组学数据中 RNA 层面的通用特征编码器。

---

### 📄 Paper 2：临床批准激酶抑制剂的突变体层面深度图谱

| 字段 | 内容 |
|------|------|
| **标题** | Comprehensive profiling of clinically approved kinase inhibitors reveals mutation-specific inhibitors and opportunities for drug repurposing |
| **作者** | Mehlam Saifudeen, Songli Zhu, Shuguang Liang, Taranjit S. Gujral 等 |
| **期刊** | Nature Biotechnology |
| **发表日期** | 2026-04-20 |
| **DOI** | 10.1038/s41587-026-03090-8 |
| **链接** | https://www.nature.com/articles/s41587-026-03090-8 |

**📝 一句话概要**  
大规模系统性检测已获 FDA 批准的激酶抑制剂对疾病相关突变体激酶的抑制活性，揭示了老药新用的巨大潜力，拓展了可药用的 kinome 图谱。

**🔬 主要贡献**  
- 对近 **100 种临床批准激酶抑制剂** 在 **300+ 疾病相关突变体激酶** 上进行系统性结合活性筛选
- 揭示了众多"脱靶抑制"实例：部分老药对突变体激酶有显著活性，可作为潜在 repurposing 候选
- 建立了激酶-药物相互作用的突变体层面定量图谱数据库

**⚡ Critical 简评**  
这是迄今为止规模最大的临床批准激酶抑制剂突变体层面分析。与既往主要聚焦野生型激酶的研究不同，本文明确纳入疾病相关突变体，直接回答了"同一抑制剂对不同突变体效果是否不同"这一临床关切。⚗️ **精准医疗价值**：对某些"非预期"抑制活性进行深入机制研究，可能为耐药或难治性癌症提供新的联合用药策略。

---

### 📄 Paper 3：肠菌-宿主空间互作组学新方法

| 字段 | 内容 |
|------|------|
| **标题** | Host–microbiome maps（Research Highlight，原文来自 de Vlaminck Lab, Cornell） |
| **作者** | Iwijn de Vlaminck 团队（原文发表于 Cell） |
| **期刊** | Nature Methods |
| **发表日期** | 2026-04-14 |
| **DOI** | 10.1038/s41592-026-03074-1 |
| **链接** | https://www.nature.com/articles/s41592-026-03074-1 |

**📝 一句话概要**  
利用 **原位多腺苷酸化（in situ polyadenylation）** 技术结合 H&E 染色，在小鼠结肠癌模型中以单组织分辨率绘制肠菌-宿主互作图谱，细菌 RNA 富集效率提升高达 99 倍。

**🔬 主要贡献**  
- 开发基于酵母 Poly(A) 聚合酶的原位 RNA 捕获方法，使细菌 RNA 丰度提升 **99 倍**，同时保留宿主基因表达信息
- 在四个解剖区域（盲肠→结肠）量化 Lachnospiraceae、Clostridiaceae、Oscillospiraceae 等菌群的组织空间分布差异
- 与 bulk meta-transcriptome 数据高度相关，验证了方法的可靠性

**⚡ Critical 简评**  
肠菌与宿主的空间互作是当前微生物组研究的"最后一公里"难题——既往 bulk 方法丢失空间信息。本文用极简方法（poly(A) 延伸）解决了细菌无 poly(A) 尾、难以原位测序的核心瓶颈。⚗️ **方法学亮点**：无需特殊设备，适配 FFPE/冰冻切片，与空间转录组流程高度兼容，有望推广至其他宿主-微生物互作体系。

---

### 📄 Paper 4：CUBIC 全身体节/器官细胞图谱

| 字段 | 内容 |
|------|------|
| **标题** | Establishing whole-body cellomics（Research Highlight，原文来自 Ueda Lab） |
| **作者** | Ueda 等（原文发表于 Cell） |
| **期刊** | Nature Methods |
| **发表日期** | 2026-04-14 |
| **DOI** | 10.1038/s41592-026-03072-3 |
| **链接** | https://www.nature.com/articles/s41592-026-03072-3 |

**📝 一句话概要**  
CUBIC Body/Organ Atlas 完成新生小鼠全器官和全身体节级别的单细胞分辨率细胞图谱，涵盖所有主要器官，并展示了药物毒性的全器官单细胞响应分析。

**🔬 主要贡献**  
- 整合优化的 **CUBIC 组织透明化** + **exMOVIE 光片显微镜**（30 mm 工作距离，50 fps），实现全机体高速高分辨率成像
- 建立 10+ 年积累的标准化体节/器官分割、注释与配准流程
- 展示毒理学应用：全器官单细胞水平量化药物诱导的器官毒性反应

**⚡ Critical 简评**  
从 Hooke 发现细胞（1665年）到真正实现"全身体细胞图谱"花了几百年。本文代表了 **全身级单细胞图谱** 的里程碑——不仅是技术成就，更是范式转换：从此可以用单细胞分辨率回答"药物/疾病如何影响全身所有器官的细胞组成"。⚗️ **下一个前沿**：从成像图谱转向多组学图谱（scRNA-seq + 空间代谢组 + 蛋白组），构建真正意义上的"全身多组学细胞图谱"。

---

### 📄 Paper 5：单细胞基础模型中间层揭示最优生物表征

| 字段 | 内容 |
|------|------|
| **标题** | Intermediate Layers Encode Optimal Biological Representations in Single-Cell Foundation Models |
| **作者** | Vincenzo Yuto Civale, Roberto Semeraro, Alberto Magi 等 |
| **期刊/预印本** | arXiv（发表于 2026-04-16） |
| **链接** | arXiv 预印本 |

**📝 一句话概要**  
系统性分析了主流单细胞基础模型各隐含层的表征质量，发现中间层编码最优生物学表征，而非传统认为的最深层，为模型可解释性与层选择提供了理论依据。

**🔬 主要贡献**  
- 首次系统揭示单细胞基础模型不同 Transformer 层捕获的生物学意义差异
- 中间层（而非顶层）在细胞类型注释、批次校正等下游任务中表现最优
- 为单细胞基础模型的架构设计和层选择提供了可解释性框架

**⚡ Critical 简评**  
本文是对单细胞基础模型"黑箱"特性的关键解谜。传统 NLP 领域认为顶层 token 包含最丰富的语义信息，但单细胞领域的多模态特性（基因表达矩阵→细胞身份）使得中间层反而成为"生物学信息瓶颈"。⚗️ **实际应用**：选择中间层表征作为细胞嵌入，比顶层/平均池化更有利于下游分析，是方法学的重要修正。

---

## 🗺️ 本周技术热力图

| 技术/主题 | 热度 | 备注 |
|----------|------|------|
| RNA Foundation Model | 🔥🔥🔥 | Orthrus 代表进化+功能双驱动新范式 |
| Kinome Drug Repurposing | 🔥🔥🔥 | 精准医疗与突变体层面分析主流化 |
| 空间多组学 | 🔥🔥 | 组织原位方法持续突破 |
| 全身体节图谱 | 🔥🔥 | 全身细胞图谱走向实用化 |
| 单细胞基础模型可解释性 | 🔥 | 中间层表征成为新研究方向 |

---

*报告生成时间：2026-04-21 08:49 HKT | 数据来源：Nature Methods, Nature Biotechnology, arXiv*
*由 🐼 胖达自动生成 | 多组学研究简报*
