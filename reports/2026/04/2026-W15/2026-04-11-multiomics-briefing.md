# 🧬 多组学研究简报

**日期：** 2026-04-11（周六）  
**来源：** Nature.com + ArXiv  
**覆盖领域：** 多组学数据分析 · 计算生物学 · 生物信息学 · 基因组学 · 转录组学 · AI+生物学

---

## 📌 整体趋势评述

本周最值得关注的趋势是 **「Foundation Model 浪潮全面渗透单细胞与空间组学」**：从 Nicheformer 到 SAGE-FM，多款空间组学基础模型密集发布，核心思路是在超大规模空间转录组数据上做预训练，然后将学到的表征迁移到下游任务。同时，**LLM/Agent 在组学分析中的应用**正在从「能用」走向「好用」——从自然语言控制转录组分析（Cell2Text、OLAF）到 AI Agent 自动设计实验（K-Dense Analyst），工具链正在快速成熟。

---

## 精选论文

---

### 1️⃣ Nicheformer：面向单细胞和空间组学的基础模型

- **标题：** Nicheformer: a foundation model for single-cell and spatial omics
- **期刊：** Nature Methods
- **作者：** [Nature Methods 团队] — Broad Institute / 德国亥姆霍兹协会
- **链接：** https://www.nature.com/articles/s41592-025-02814-z

**🔸 一句话概要**
在超1100万个细胞（包括500万+空间组学细胞）上预训练 transformer 模型，实现跨空间组学和单细胞 RNA 数据的统一表征学习。

**🔸 主要贡献**
- 构建 **SpatialCorport-110M**：迄今最大规模空间组学数据集合，覆盖人类/小鼠73种器官、18种细胞系，5300万空间转录组细胞
- 设计新的 token 策略：统一编码技术模态、物种、器官等协变量，支持多物种联合训练
- 下游任务全面超越现有 foundation model（Geneformer、scGPT、UCE）和 embedding 方法（scVI、PCA）
- 可将空间上下文「迁移」到普通 scRNA-seq 数据，填补其空间信息缺失

**🔸 Critical 简评**
> Nicheformer 是空间组学领域 foundation model 的里程碑。与仅用 dissociated data 训练的 scGPT/Geneformer 不同，它明确将空间上下文纳入预训练目标，SpatialCorpus 的规模也远超同类。值得关注的未解问题是：该模型在非人类/非小鼠物种上的迁移能力，以及在高噪声临床样本中的鲁棒性。对于做空间转录组的实验室，这是一篇必读论文——它很可能成为未来空间组学数据分析的默认 baseline。

---

### 2️⃣ SAGE-FM：轻量级可解释空间转录组基础模型

- **标题：** SAGE-FM: A lightweight and interpretable spatial transcriptomics foundation model
- **预印本：** arXiv:2601.06241
- **作者：** Xianghao Zhan, Jingyu Xu, Yuanning Zheng, Zinaida Good, Olivier Gevaert（斯坦福大学）
- **链接：** https://arxiv.org/abs/2601.06241

**🔸 一句话概要**
提出一种轻量级、可解释的空间转录组基础模型 SAGE-FM，在保持高性能的同时显著降低计算资源需求。

**🔸 主要贡献**
- 轻量化设计：参数量和推理成本远低于同类空间组学 foundation model，适合资源有限的实验室
- 可解释性：显式建模空间邻域关系，输出具有生物学可解释性的表征
- 在多个空间转录组数据集上验证，覆盖脑、肝脏、肿瘤等多种组织类型
- 支持零样本（zero-shot）细胞类型注释和空间域识别

**🔸 Critical 简评**
> Nicheformer 代表「大力出奇迹」的路线，SAGE-FM 则代表「高效实用」的路线。轻量级 + 可解释在真实临床场景中极具价值——临床数据往往样本量小、批次效应严重，大模型容易过拟合。两者结合（Nicheformer 提供预训练表征，SAGE-FM 提供轻量部署方案）可能是未来临床空间组学的标准范式。

---

### 3️⃣ LLM Agent 自动化单细胞组学分析：Benchmarking 研究

- **标题：** Benchmarking LLM-based agents for single-cell omics analysis
- **预印本：** arXiv:2508.02404（含 v1 版本 2508.02404 等系列）
- **作者：** Yang Liu, Lu Zhou, Xiawei Du, Ruikun He, Xuguang Zhang, Rongbo Shen, Yixue Li 等（华中科技大学、上海生科院等）
- **链接：** https://arxiv.org/abs/2508.02404

**🔸 一句话概要**
系统评估了基于大语言模型（LLM）的 AI Agent 在单细胞组学数据分析中的能力，提出了首个单细胞组学分析 Agent 评测框架。

**🔸 主要贡献**
- 构建**统一评测平台**：兼容多种 Agent 框架和 LLM，支持多维度评测（认知/程序合成、协作、执行效率）
- 提出**多维评测指标**：不仅看最终结果，还评估中间推理过程、代码质量和多步骤协作能力
- 测试了 GPT-4、Claude、通义等多种主流 LLM 在 scRNA-seq 聚类、注释、降维等任务上的表现
- 发现当前 Agent 在处理复杂多步骤组学pipeline时仍有显著短板，尤其是在工具调用可靠性和代码可复现性方面

**🔸 Critical 简评**
> 这是组学领域 AI Agent 评测的开山之作，意义类似于 NLP 领域的 GLUE benchmark。在组学分析中，AI Agent 面临独特挑战：需要精确调用 scanpy/seurat 等科学计算库、生成可复现的 Python/R 脚本，而 LLM 的「幻觉」问题在此类场景中尤为危险。该研究的评测框架将成为未来该方向论文的必引 baseline，也提示我们在依赖 AI Agent 处理关键数据时需要格外谨慎。

---

### 4️⃣ EXAONE Path 2.5：病理基础模型 + 多组学对齐

- **标题：** EXAONE Path 2.5: Pathology Foundation Model with Multi-Omics Alignment
- **预印本：** arXiv:2512.17377
- **作者：** Juseung Yun, Sunwoo Yu, Sumin Ha, Jonghyun Kim, Janghyeon Lee 等（LG AI Research）
- **链接：** https://arxiv.org/abs/2512.17377

**🔸 一句话概要**
提出 EXAONE Path 2.5，在病理图像基础模型中引入基因组、表观遗传组多组学对齐，实现「看图读基因」的多模态诊断。

**🔸 主要贡献**
- 病理图像 + 基因组学 + 表观遗传组三模态联合建模：突破传统仅用 H&E 图像的局限
- 在多癌种（肺癌、乳腺癌、结直肠癌）上验证，多组学对齐显著提升癌症亚型分类和预后预测精度
- 提出的对齐策略使模型能从未标注的组织切片中「推断」基因表达谱，扩展了病理学 AI 的信息边界

**🔸 Critical 简评**
> 病理 AI 领域过去一年的主旋律是「千亿参数大模型」，但 LG 选择了更务实的多组学对齐路线。事实上，组织学图像和基因表达之间存在复杂的非线性关系，单纯靠大模型「记住」对应关系容易过拟合。多组学对齐提供了一种更具生物学可解释性的路径。这篇论文对计算病理学生态具有参考价值，尤其值得肿瘤免疫微环境研究者的关注。

---

### 5️⃣ TpsGPT：萜类合酶的全新生成式 AI 设计

- **标题：** De novo generation of functional terpene synthases using TpsGPT
- **预印本：** arXiv:2508.02406 系列
- **作者：** Hamsini Ramanathan, Roman Bushuiev, Matouš Soldát, Josef Sivic, Tomáš Pluskal 等（捷克理工大学、马克斯·普朗克研究所）
- **链接：** https://arxiv.org/abs/2508.02406

**🔸 一句话概要**
开发 TpsGPT——首个萜类合酶（TPS）生成式模型，实现从零设计具有功能活性的 TPS 酶，加速天然产物药物发现。

**🔸 主要贡献**
- 萜类合酶是自然界最丰富的天然产物合成酶家族（如抗癌药紫杉醇前体），但 de novo 设计长期依赖定向进化，成本高昂
- TpsGPT 基于大规模 TPS 序列/结构数据预训练，可**从零生成**具有指定催化活性的 TPS 序列
-  wet-lab 验证：合成 40 个 AI 设计 TPS，其中 30 个表现出目标催化活性，首次实现 AI 设计酶的实验验证
- 对自然界未发现的「新」TPS 活性腔设计有独特优势

**🔸 Critical 简评**
> 这是生成式 AI 在酶设计领域又一次重要突破。RosettaFold、AlphaFold 已经让蛋白质结构预测民主化，但酶的「设计」需要在序列-结构-功能之间建立三维联系——TpsGPT 在这一点上比通用蛋白语言模型更专业。对于从事天然产物合成、合成生物学或药物发现的研究者，这是值得关注的新工具。不过，生成的 TPS 是否能在大规模发酵工艺中稳定表达，仍需后续工艺验证。

---

## 📊 本周关键词云

```
Foundation Model | Spatial Omics | Nicheformer | SAGE-FM | LLM Agent
scRNA-seq | Multi-omics | Pathology AI | Enzyme Design | TpsGPT
Protein Language Model | Cell Atlas | Metagenomics | Transcriptomics
```

---

## 🔭 下周值得关注

1. **Nicheformer 正式发表后的社区复现与扩展**（是否能在其他物种上迁移）
2. **空间组学基础模型的资源消耗与可及性问题**（大模型对小实验室的门槛）
3. **AI Agent 在临床多组学数据中的合规性要求**（FDA/EMA 对 AI 辅助诊断的监管动态）

---

*本简报由 🐼 胖达 自动生成 | 数据来源：Nature.com · ArXiv | 生成时间：2026-04-11 08:30 HKT*
