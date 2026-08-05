# 🧬 多组学研究简报
**2026年8月6日（周四）| 近48小时精选**

> 搜索范围：2026-08-04 ~ 2026-08-06 | 数据源：Nature, ArXiv, bioRxiv, medRxiv

---

## 📊 整体趋势评述

本期简报聚焦于两大主题：**基因组基础模型**迈入长上下文时代——CENO 将基因组建模扩展至 1M token 上下文窗口并在进化条件化、变异效应预测、enhancer 设计上展现能力；**空间组学**持续深化，H&E 引导的空间蛋白组学解决 TNBC 复发风险区域识别，合成器校准方法使空间转录组跨样本比较成为可能，注意力机制可解释性则为蛋白语言模型提供了功能注解新路径。

---

## 📑 精选论文

### 🔬 论文 1：CENO — 百万 token 基因组世界模型

**标题**：CENO: A Genome-Scale World Model for Evolutionary Sequence Interpretation and Programmable Regulatory Design

**作者**：Ma, M.; Wu, Y.; Chen, X.; Jiang, F.; Lin, P.; Ye, D.; Sun, Y.; Zhang, Y.; Shi, T.; Zhao, Y.; Ouyang, W.; Zhou, B.; Bai, L.; Ren, Y.

**机构**：Shanghai AI Lab

**平台**：bioRxiv | **日期**：2026-07-30 | **DOI**：10.64898/2026.07.28.741284

**链接**：https://doi.org/10.64898/2026.07.28.741284

**一句话概要**：提出基因组世界模型 CENO，在 1M token 超长上下文中统一进化解读与可编程增强子设计。

**主要贡献**：
- 发现基于 Mamba + Sparse Attention + MoE 混合架构，可在 1M token 上下文上维持核苷酸级分辨率，同时保留局部 DNA 语法。
- 发现后训练阶段融入多序列比对进化信息，显著提升变异效应预测（VEP）性能，并产生跨物种进化富集信号。
- 揭示在无微调零样本条件下，长上下文延续即可涌现跨人类细胞类型和小鼠组织的染色质边界相关注意力模式。
- 证明 CENO 驱动的可编程增强子设计工作流在 mouse cortex 中生成功能性增强子候选序列。

**🔍 Critical 简评**：⭐⭐⭐⭐
基因组基础模型的上下文长度竞赛已从短序列（<10k）扩展至全基因组尺度。CENO 的核心贡献在于将世界模型（World Model）概念引入基因组——不仅做分类/回归，更要求模型维持状态、评估反事实（突变效果）、生成候选序列，这与 AlphaFold3 代表的结构建模路线形成互补。值得注意的是，进化条件化（evolutionary conditioning）通过后训练 MSA 上下文使模型学习到跨物种约束，这是此前模型所缺乏的，但也意味着其性能高度依赖 MSA 质量和覆盖度。实用性上，增强子设计的 wet-lab 验证规模尚小（需扩展验证），且 1B 参数模型的计算成本可能限制在资源受限场景的应用。值得关注的后续：与 ENFORMER/ChromeLens 的基准比较，以及在非编码疾病变异（GWAS）中的应用。

---

### 🔬 论文 2：H&E 引导空间蛋白组学揭示三阴性乳腺癌复发风险区域

**标题**：Spatial proteomics guided by H&E-based AI reveals recurrence-risk niches in triple-negative breast cancer

**作者**：Yesung Cho, Ji Hwan Park, Chanil Kim, Hyewon Kim, Honglan Li

**机构**：Seoul National University（推断）

**平台**：bioRxiv (q-bio) | **日期**：2026-08-04 | **DOI**：10.1101/2026.07.29.741574（推断）

**链接**：https://doi.org/10.1101/2026.07.29.741574

**一句话概要**：深度学习 H&E 图像预测复发风险，空间蛋白组验证风险区域分子特征，发现 TNBC 复发 niche 特异性蛋白程序。

**主要贡献**：
- 发现基于 H&E 的深度学习可识别 TNBC 复发风险热区，且该热区与空间蛋白组学测定的特定蛋白表达程序高度吻合。
- 揭示 TNBC 复发风险区域富集免疫逃逸和上皮-间质转化（EMT）相关蛋白，提示空间维度上的异质性是复发预测的关键因子。
- 证明 H&E 引导的靶向蛋白组学策略可在临床常规活检样本上实施，具有直接转化价值。

**🔍 Critical 简评**：⭐⭐⭐⭐
H&E 是临床上最普及、成本最低的组织病理切片；深度学习模型已可从 H&E 预测分子特征，但这些"推断"往往缺乏实验验证——本研究正是填补这一鸿沟的典型案例。核心创新在于 outcome-informed 设计：不是盲目在 H&E 上叠加蛋白组，而是先用 AI 生成分子风险热图，再有针对性地验证。这解决了传统空间组学（Visium、CosMx）成本高、样本量受限的问题。局限性：单瘤种验证（TNBC），泛化性待确认；空间蛋白组学技术平台未详细说明；临床转化需在前瞻性大队列中验证。趋势上，H&E + AI → 分子预测 → 空间蛋白组验证的工作流可能成为精准肿瘤学新范式。

---

### 🔬 论文 3：蛋白语言模型注意力位点可解释性

**标题**：Interpreting Protein Language Models: high attention sites predict functional regions

**作者**：Sophia J. Pribus, Russ B. Altman, Gowri Nayar

**机构**：Stanford University

**平台**：bioRxiv | **日期**：2026-08-04 | **DOI**：10.64898/2026.07.29.741641

**链接**：https://doi.org/10.64898/2026.07.29.741641

**一句话概要**：ESM-2 高注意力位点可分类为结构核心、致病核心、结构致病或低置信四类，揭示 PLM 内部表征与蛋白质功能的对应关系。

**主要贡献**：
- 发现 ESM-2 编码早期对特定残基赋予最高注意力的位点（HA sites）可通过无监督聚类分为功能注释的亚群：结构核心、结构致病、核心致病、低置信。
- 揭示 HA 位点与 AlphaMissense 致病性预测的显著关联，表明 PLM 内部表征已编码变异效应信息。
- 提出 HA 位点可作为 PLM 可解释性的锚点，为理解模型决策和功能注解提供新的计算框架。

**🔍 Critical 简评**：⭐⭐⭐⭐
PLM（ESM-2、AlphaFold2）的可解释性是当前计算生物学最活跃的议题之一——这些模型性能卓越，但"黑箱"本质阻碍了其在严格监管场景（药物审批、临床诊断）的应用。本研究从注意力机制切入，提供了首个系统性的 HA 位点功能注解框架。值得注意的是，HA 分类（四类）与预期生物学功能的高度吻合表明 ESM-2 在预训练中已习得进化约束和结构信息的隐式表征。局限：基于 AlphaMissense 作为 ground truth，但 AlphaMissense 本身是模型预测，存在循环性；残基级功能注解的 wet-lab 验证尚缺乏；注意力因果性未通过干预实验验证。实用价值：可作为变异效应预测的辅助解释工具，值得关注的后续：将 HA 框架扩展至其他 PLM（ProtBERT、ESM-3）并建立基准评测。

---

### 🔬 论文 4：空间转录组样本可比性的合成器校准方法

**标题**：Scale-Aware Compositional Inference Improves Reproducibility and Uncovers Convergent Aging Programs in Spatial Transcriptomics

**作者**：Parmaksiz, D.; Manjila, S. B.; McGovern, K.; Shin, D.; Bjerke, I. E.; Paul, A.; Silverman, J.; Kim, Y.

**机构**：The Pennsylvania State University

**平台**：bioRxiv | **日期**：2026-07-30 | **DOI**：10.64898/2026.07.27.740958

**链接**：https://doi.org/10.64898/2026.07.27.740958

**一句话概要**：建模组合约束而非移除归一化效应，实现空间转录组跨样本可比推断，揭示衰老跨数据集趋同程序。

**主要贡献**：
- 发现现有空间差异表达方法基于 bulk RNA-seq 的归一化假设不适用于空间数据，导致跨样本比较产生系统性偏倚。
- 提出组合感知（compositional-aware）推断框架，对 total RNA 丰度变化建模而非移除，显著提升模拟数据和多平台真实数据的校准准确性。
- 揭示在老化小鼠大脑中，细胞信号、膜稳态和神经血管相关的衰老程序在多个独立数据集中趋同出现，支持跨技术平台的生物学稳健性。

**🔍 Critical 简评**：⭐⭐⭐⭐
空间转录组的"可重复性危机"是领域内公认的痛点——同一组织、不同平台（Visium、Xenium、CosMx）或不同样本量下，同一基因的空间表达模式可能完全相反，根本原因在于现有方法将组学数据当作 bulk 数据处理，而忽略了空间数据的组合性（compositional）本质。本文的理论贡献是引入组合约束建模，将归一化步骤从"移除"改为"建模"，这一概念转变看似简单但对领域影响深远。生物学发现（衰老趋同程序）印证了方法的有效性。局限：当前仅在 brain 数据验证，泛化至其他组织待确认；计算复杂度可能限制在超大切片上的应用。趋势上，样本级校准将成为空间组学数据分析的新标准。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | *Transposons contribute to splice-isoform diversity in the Drosophila brain* (Treiber/Oxford) | 转录组, TE, 可变剪接 | 反驳质疑研究，v3更新，RT-PCR 验证7个TE外显子化位点 |
| bioRxiv | *Short-term, Long-term, and Genetic Determinants of Human Plasma Proteome Variability* (Benacom et al.) | 蛋白质组, 昼夜节律, 生物标志物 | 43%生物标志物呈24h节律性，忽略短期动态影响模型预测稳健性 |
| bioRxiv | *Single-cell transcriptomics reveals a multiphasic Wolbachia host infection trajectory* (Jacobs/UCSC) | 单细胞, 共生菌, 感染轨迹 | scRNA-seq 揭示 wMel 建立感染的宿主演化轨迹 |
| ArXiv | *Self-supervised DXA representations encode multi-system disease risk, biological aging and heritability* (Sasson/LeCun/Weizmann) | 影像组, 自监督, 生物年龄 | JEPA 自监督学习 DXA 影像，生物年龄差45%死亡风险 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-08-04 00:00 UTC ~ 2026-08-06 07:30 UTC*
