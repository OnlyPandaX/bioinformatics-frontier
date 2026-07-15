# 🧬 多组学研究简报
**2026年7月16日（周四）| 近48小时精选**

> 搜索范围：2026-07-14 ~ 2026-07-16 | 数据源：Nature, bioRxiv, medRxiv

---

## 📊 整体趋势评述

本期呈现"从关联到机制"的多组学方法学主线：RNA–蛋白一致性图谱揭示转录本并非蛋白的可靠代理、空间脂质–转录组联绘胶质母细胞瘤代谢生态位、泛癌磷酸化框架将修饰位点与互作蛋白丰度定量耦合，以及单细胞蛋白质组学首个跨实验室 QC 基准——整合与标准化正成为多组学从描述走向可解释、可复现的关键支点；临床端，循环 uPAR 与结直肠癌基因组景观的整合提示独立于基因组不稳定性的进展标志物。

---

## 📑 精选论文

### 🔬 论文 1：RNA↔蛋白一致性图谱——转录本为何不是蛋白的可靠代理

**标题**：An integrated atlas of RNA to protein concordance across human tissues and cell types

**作者**：Finney, C. A.; Shvetcov, A. et al.
**机构**：（通讯机构信息无法确认）
**平台**：bioRxiv | **日期**：2026-07-14 | **DOI**：10.1101/2026.07.13.738336
**链接**：https://www.biorxiv.org/content/10.1101/2026.07.13.738336

**一句话概要**：基因级 RNA→蛋白翻译一致性是可测属性，约半数基因 RNA 不能代理蛋白。

**主要贡献**：
- 发现：整合 Tabula Sapiens 与 Human Brain Cell Atlas 单细胞转录组及 Human Protein Atlas 细胞类型分辨率免疫组化，建成 488,190 观测、覆盖 11,154 基因、24 组织、53 细胞类型的配对图谱，证实 RNA 仅解释蛋白约 40% 方差。
- 发现：定义抑制率将基因分为一致/可变/抑制三类，池化相关 ρ≈0.4 源自三类混合，且一致性取决于基因×组织互作。
- 发现：抑制可由序列独立预测，溯源至翻译效率降低与组装依赖降解而非 mRNA 衰减；发布 concordR R 包，并审计显示神经退行候选脑靶蛋白几乎无一在蛋白水平成立。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
历史/现状：以 RNA 代理蛋白是单细胞图谱与靶点发现的默认假设，但二者对应关系长期缺乏系统量化。Motivation：弄清"哪些基因可靠翻译"对靶点评选与机制解读至关重要。突破点：用大规模配对观测首次给出基因级一致性分类，并证明可从序列预测抑制。局限：单细胞转录组与蛋白免疫组化来自不同来源/分辨率，细胞类型对齐存在近似；样本偏组织而非真正单细胞配对。future work：扩展到发育与疾病状态，并纳入翻译组与蛋白稳定性直接测量。

---

### 🔬 论文 2：空间脂质–转录组联绘胶质母细胞瘤代谢生态位

**标题**：Spatial Single Cell Lipid-Transcriptomic Coupling Reveals Metabolic Niches in Glioblastoma

**作者**：Hendriks, T. F. E.; Eijkel, G. B. et al.
**机构**：（通讯机构信息无法确认）
**平台**：bioRxiv | **日期**：2026-07-14 | **DOI**：10.1101/2026.07.13.738204
**链接**：https://www.biorxiv.org/content/10.1101/2026.07.13.738204

**一句话概要**：同片整合 MALDI-MSI 脂质成像与空间转录组，解析胶质母细胞瘤核心–侵袭区代谢生态位。

**主要贡献**：
- 发现：在 10 例 GBM 同一切片联用单细胞 MALDI-MSI 与空间转录组，校正患者特异信号后识别核心–侵袭区共有空间组织模式。
- 发现：肿瘤核心富集星形样恶性细胞与免疫细胞，侵袭区少突前体贡献更高；但两类细胞共享转录状态空间，区域身份由共享状态的重排塑造。
- 发现：增殖/缺氧/ECM 重塑/TAM 吞噬/T 细胞浸润/脂质合成等程序呈空间结构化；MALDI-MSI 揭示核心富集膜与储存脂类、侵袭区富集膜周转脂类，脂质–转录整合暴露区域特异性脂质–基因耦合。

**🔍 Critical 简评**：⭐⭐⭐⭐
历史/现状：空间转录组已刻画 GBM 细胞组成，但代谢层面的空间分辨率不足。Motivation：肿瘤核心与侵袭前沿代谢背景差异显著却鲜有空间脂质证据。突破点：同片双模态（脂质成像+转录组）联绘，首次在空间上耦合脂质物种与基因程序。局限：MALDI-MSI 空间分辨率低于单细胞转录组，脂质注释受数据库覆盖限制；样本量 n=10 仍偏小。future work：纳入蛋白质/磷酸化层与免疫代谢功能验证。

---

### 🔬 论文 3：泛癌磷酸化框架耦合修饰位点与互作蛋白丰度

**标题**：A Multi-Omics Framework Reveals Phosphorylation-Dependent Control of Protein Interactions

**作者**：Ogata, K.; Matabaro, E. et al.
**机构**：（通讯机构信息无法确认；Beltrao 团队通常隶属 EMBL-EBI）
**平台**：bioRxiv | **日期**：2026-07-14 | **DOI**：10.1101/2026.07.14.738447
**链接**：https://www.biorxiv.org/content/10.1101/2026.07.14.738447

**一句话概要**：以互作蛋白丰度为读数反推磷酸化功能，泛癌 1,006 肿瘤鉴定 6,160 个修饰–互作关联。

**主要贡献**：
- 发现：以稳定复合体未结合亚基易被降解为原理，用嵌套线性回归在 1,006 例泛癌数据中控制转录等协变量，识别 3,038 个磷酸位点与互作蛋白丰度的 6,160 个关联。
- 发现：映射到 AlphaFold 预测复合体，239 个位点落于互作界面、402 个位点关联区室特异性定位，提示磷酸化亦通过区室重定位调控互作。
- 发现：NKAP 与 NUF2 磷酸位点突变的亲和纯化质谱实验支持部分预测，提供结构知情的磷酸化组优先级资源。

**🔍 Critical 简评**：⭐⭐⭐⭐
历史/现状：数十万人类磷酸化位点功能未知，传统靠保守性或结构优先级排序。Motivation：多数位点缺乏功能读数。突破点：以"互作伙伴丰度"为表型读数，把修饰–互作耦合大规模量化并叠加结构注释。局限：依赖稳定复合体降解假设，对瞬时/弱互作不敏感；泛癌混合可能抹平组织特异调控。future work：扩展至更多位点与单细胞/时间分辨磷酸化，并结合功能筛选验证。

---

### 🔬 论文 4：单细胞蛋白质组学首个跨实验室 QC 基准

**标题**：Defining Quality Control Standards for Single-Cell Proteomics by Inter-Laboratory Benchmarking

**作者**：van Puyenbroeck, S.; Claeys, T. et al.（HUPO Single Cell Initiative）
**机构**：HUPO Single Cell Initiative（跨 7 实验室）
**平台**：bioRxiv | **日期**：2026-07-14 | **DOI**：10.1101/2026.07.13.738155
**链接**：https://www.biorxiv.org/content/10.1101/2026.07.13.738155

**一句话概要**：HUPO 跨 7 实验室基准表明，软件选择比仪器厂商更影响单细胞蛋白质组鉴定与定量。

**主要贡献**：
- 发现：HUPO 单细胞倡议首次跨 7 实验室、标准化 384 孔板、Orbitrap Astral 与 timsTOF Ultra2 基准，集中分析 6 款 DIA 软件。
- 发现：软件选择对鉴定深度与定量精度影响大于仪器厂商；多层 QC 可检出分选泄漏、LC 误配、色谱柱退化与位点特异性移液失败。
- 发现：同厂商仪器间定量相关性最强；依次校正板号与孔位可恢复清晰细胞类型分离，提供从板设计到批次校正的跨实验室 QC 框架。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
历史/现状：单细胞蛋白质组可量化单细胞中数千蛋白，但缺社区级 QC，生物解读受限。Motivation：跨实验室可复现性是技术落地的瓶颈。突破点：首个跨平台、多软件基准，给出数据驱动 QC 标准。局限：仅两类仪器、标准样本，未覆盖更多平台与真实异质组织；DIA 软件迭代快。future work：纳入更多仪器/样本类型，建立持续更新的社区基准与认证样本。

---

### 🔬 论文 5：循环 uPAR 联合基因组景观刻画结直肠癌进展

**标题**：Integrative analysis of circulating proteolytic biomarkers and genomic landscape in colorectal cancer

**作者**：Pankratova, E. D.; Rubina, K. A. et al.
**机构**：（通讯机构信息无法确认）
**平台**：medRxiv | **日期**：2026-07-14 | **DOI**：10.1101/2026.07.14.26357715
**链接**：https://scholar.google.com/scholar?q=Integrative+analysis+of+circulating+proteolytic+biomarkers+and+genomic+landscape+in+colorectal+cancer
（注：medRxiv 原文链接受反爬限制返回 403，改用 Google 学术检索）

**一句话概要**：循环 uPAR 随结直肠癌分期阶梯升高，且独立于 TMB/MSI 等基因组不稳定性指标。

**主要贡献**：
- 发现：53 例结直肠肿瘤患者测得循环 uPA/uPAR，51 例配对肿瘤–正常 WGS，揭示以 TP53/APC 为主的异质突变景观，仅少数高 TMB/MSI。
- 发现：循环 uPAR 在 CRC 显著高于健康对照，随肿瘤分期阶梯上升、IV 期最高；uPA 仅呈非显著趋势且不随分期变化。
- 发现：uPA/uPAR 与 TMB、MSI、HRD 及主要驱动基因（TP53/KRAS/FBXW7/BRAF/NRAS/PIK3CA）突变状态均无显著相关，提示 uPAR 作为进展标志物相对独立于基因组不稳定性。

**🔍 Critical 简评**：⭐⭐⭐
历史/现状：液体活检多聚焦 ctDNA，蛋白水解标志物与基因组整合有限。Motivation：CRC 临床与分子异质性强，需可整合的循环标志物。突破点：明确 uPAR 作为分期相关、独立于基因组不稳定性的进展标志物。局限：样本量小（n≈53）、横断面、缺乏独立验证队列；uPAR 机制关联未深入。future work：扩大队列并前瞻性验证 uPAR 在风险分层与疗效监测中的增量价值。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | AI-enabled reconstruction of 3D spatial multi-omics at single-cell resolution | spatial multi-omics, AI | 方法学，值得后续跟踪 |
| bioRxiv | Lemonite: interpretable integration of transcriptomics & metabolomics | multi-omics integration | 调控代谢物推断 |
| medRxiv | Integrated plasma & urinary cfDNA profiling for bladder cancer (Ta–T4) | cfDNA, multi-omic | 非侵入检测 |
| medRxiv | Establishing wastewater metagenomics as quantitative pathogen monitoring | metagenomics | 污水宏基因组监测 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-07-14 ~ 2026-07-16（近48小时）*
