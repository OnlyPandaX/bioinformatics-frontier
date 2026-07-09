# 🧬 多组学研究简报
**2026年7月10日（周五）| 近48小时精选**

> 搜索范围：2026-07-08 ~ 2026-07-10 | 数据源：bioRxiv, medRxiv, ArXiv（Nature RSS 本运行受 Cloudflare 拦截，未能确认新文）

---

## 📊 整体趋势评述

本期呈现三条清晰主线：**人群规模多组学整合**开始把遗传、蛋白质组与代谢组锚定到同一解剖坐标（白质纤维图谱）；**AI/基础模型**继续向全原子免疫受体设计渗透；**单细胞/单核方法浪潮**从稳健的 bulk 解卷积延伸到单核染色质 QTL 定位，持续把细胞分辨率推进到新的生物与临床场景。与此同时，转化型单细胞研究正将 CAR-T 耐药机制具体化为可量化的"抗 CAR 免疫"应答，凸显方法浪潮如何直接反哺临床洞察。

---

## 📑 精选论文

### 🔬 论文 1：白质微结构的空间分辨基因组-分子图谱

**标题**：A spatially resolved genomic molecular atlas of human white-matter microstructure

**作者**：Reinhardt, A., Jiang, Z., Li, T., et al.
**机构**：University of North Carolina at Chapel Hill（通讯：Zhu, H.）
**平台**：medRxiv | **日期**：2026-07-09 | **DOI**：10.64898/2026.07.06.26357381
**链接**：https://scholar.google.com/scholar?q=10.64898%2F2026.07.06.26357381

**一句话概要**：遗传、蛋白质与代谢效应首次共定位于同一条白质纤维通路。

**主要贡献**：
- 发现：沿 6,090 条图谱对齐纤维通路、609,000 个采样点，在 72,185 名 UK Biobank 参与者中绘制白质分数的遗传效应空间图谱，每个位点呈现从单点至多通路的空间足迹，反映"区域多基因性"而非整条通路遗传性。
- 发现：新鉴定 258/186/298 个此前未报道的 FA/MD/AD 位点，并在 ABCD 青少年队列中复制了 315 个 FA 位点中的 157 个。
- 揭示：多组学整合鉴定 97 个蛋白质组与 161 个代谢组关联，脂质代谢物（亚油酸、磷脂酰胆碱）信号最强，且与遗传信号在胼胝体汇聚，将遗传变异、疾病风险与系统脂质代谢置于同一局段。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
白质研究长期将 GWAS、脑影像与循环分子各自为战，缺乏同一解剖框架下的整合。本工作的核心动机正是把遗传变异、循环分子状态与脑疾病映射到同一条纤维解剖上。突破点在于将三个分子层整合到 6,090 条纤维通路的相同坐标，揭示"区域多基因性"概念，并把脂质代谢与阿尔茨海默病等疾病的定位遗传效应相连，是人群规模多组学锚定解剖的范例。局限在于依赖 UK Biobank 的 DW-MRI 与血浆蛋白/代谢物，组织分辨率受限于影像体素，缺乏单细胞/空间精度，因果推断仍依赖孟德尔随机化。值得关注的 future work 是结合空间转录组/蛋白质组提升分辨率，并在神经退行疾病中验证脂质–遗传汇聚的治疗意义。

---

### 🔬 论文 2：IgGM2 — 自适应免疫受体设计的全原子基础模型

**标题**：IgGM2: An All-Atom Foundation Model for Adaptive Immune Receptor Design

**作者**：Ma, J., Wu, F., Yao, L., et al.
**机构**：Shanghai Jiao Tong University（通讯：Hou, T. / Yan, J.）
**平台**：bioRxiv | **日期**：2026-07-09 | **DOI**：10.64898/2026.07.09.737510
**链接**：https://doi.org/10.64898/2026.07.09.737510

**一句话概要**：统一全原子生成框架联合设计抗体与 TCR 的序列和构象。

**主要贡献**：
- 提出：IgGM2，一个"结构到设计"的统一全原子生成框架，先学习免疫受体围绕固定靶标结构的定位，再将此靶标条件结构先验迁移到 CDR 设计。
- 证明：在结构预测基准上比 AlphaFold3 更好地捕捉受体–靶标空间关系（FoldBench），并在 TCR-pMHC 建模上表现强劲。
- 改进：在序列设计基准上提升氨基酸恢复率与基于 Rosetta 的界面偏好指标，生成更有利的结合界面。

**🔍 Critical 简评**：⭐⭐⭐⭐
免疫受体设计长期被拆分为结构预测与逆折叠/序列设计，或仅聚焦单一受体类别（抗体或 TCR）。本工作的动机是联合建模序列、全原子构象与靶标结合几何——现有方法只解决部分问题。突破点在于联合生成 CDR 残基身份与全原子受体结构，使框架几何随所设计 CDR 自适应，无需独立逆折叠或外源侧链打包；结构到设计的策略优于模块化 pipeline。局限在于评估主要基于基准数据集与 Rosetta 界面指标，缺乏湿实验结合亲和力/活性的验证，训练数据偏向已知结构。future work 应指向湿实验验证生成受体的结合功能、扩展至多特异性/工程化受体，并整合抗原表位多样性。

---

### 🔬 论文 3：Rectangle — 单细胞指导的多尺度稳健解卷积

**标题**：Rectangle: robust and scalable multiscale deconvolution informed by single-cell RNA sequencing data

**作者**：Eder, B., Rigato, I., Dietrich, A., et al.
**机构**：University of Innsbruck（通讯：Theis, F. / Finotello, F.）
**平台**：bioRxiv | **日期**：2026-07-09 | **DOI**：10.64898/2026.07.07.736950
**链接**：https://doi.org/10.64898/2026.07.07.736950

**一句话概要**：多尺度解卷积桥接单细胞分辨率与 bulk RNA-seq 的规模。

**主要贡献**：
- 提出：Rectangle，一个 scverse Python 框架，以多尺度方式在多个分辨率层级捕捉细胞组成，实现单细胞指导的 bulk RNA-seq 解卷积。
- 揭示：在跨方法基准中，Rectangle 在准确性、分辨率、低溢出、可扩展性与对未知细胞内容的鲁棒性上均表现强劲。
- 证明：通过显式建模参考中未代表的未知细胞内容，使群体规模细胞类型/状态分析在不全面单细胞测序的场景下可行。

**🔍 Critical 简评**：⭐⭐⭐⭐
bulk RNA-seq 适合大队列但丢失细胞异质性；现有单细胞指导解卷积常无法分辨相近细胞表型、扩展性差，或忽略参考外细胞内容。本工作的动机是在大规模队列与临床场景中，以远低于单细胞测序的成本进行细胞状态分析。突破点是"多尺度解卷积 + 显式未知内容建模"，在 benchmark 中全面优于现有方法且可扩展高效。局限在于性能仍依赖单细胞参考的质量与覆盖，未知内容建模是近似，对极端稀疏 bulk 数据或全新细胞状态的泛化未充分探讨。future work 宜整合空间信息、支持蛋白质组/表观参考，并在真实临床队列中验证生物标志物发现。

---

### 🔬 论文 4：GAMETE — 单核分辨率下水稻花粉染色质可及性的遗传图谱

**标题**：GAMETE maps the genetic architecture of chromatin accessibility in rice pollen at single-nucleus resolution

**作者**：Liu, Y., Xia, C., Li, J., et al.
**机构**：Huazhong Agricultural University（作物遗传改良全国重点实验室；通讯：Xie, W.）
**平台**：bioRxiv | **日期**：2026-07-09 | **DOI**：10.64898/2026.07.04.736471
**链接**：https://doi.org/10.64898/2026.07.04.736471

**一句话概要**：单核 ATAC 联合基因型推断绘制花粉染色质可及性 QTL。

**主要贡献**：
- 提出：GAMETE 框架，整合 MPS-ATAC-seq（高通量单核 ATAC-seq）与稳健的基因型推断和稀疏单核数据遗传定位计算策略。
- 发现：在杂交稻花粉中同步分析 4,887 个单倍体核的染色质可及性与基因型，揭示微孢子中 gypsy 逆转录转座子可及性意外升高、并在精细胞中沉默前的"监察间隙"，可能贡献基因组扩张。
- 鉴定：构建单细胞重组图谱，定位 16,113 个染色质可及性 QTL（caQTL），48.6% 呈现明显细胞类型特异性，并发现调控花粉必需基因 DTM1 的转作用 caQTL。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
群体研究掩盖细胞异质性，而单细胞分析的极端稀疏性长期阻碍稳健遗传定位；配子发生中细胞类型特异性调控的遗传基础因而难解。本工作动机是在无需后续世代的情况下解析配子发生中染色质可及性的遗传架构。突破点是同步分析染色质可及性与基因型，首次在单核分辨率下绘制 caQTL 图谱并发现 48.6% 细胞类型特异性，还揭示逆转录转座子"监察间隙"与基因组扩张的联系。局限在于主要在杂交稻花粉体系验证，作物普适性与跨物种推广待检验，caQTL 功能验证仍有限。future work 应拓展至其他作物与发育阶段，结合多组学验证 caQTL 因果，并探索逆转录转座子监察机制。

---

### 🔬 论文 5：抗 CAR 免疫驱动 GD2-CAR T 治疗弥漫性中线胶质瘤的获得性耐药

**标题**：Anti-CAR Immunity Drives Acquired Therapeutic Resistance to GD2-CAR T Cell Therapy in Diffuse Midline Glioma

**作者**：Chen, Y., Reynolds, K., Koch, M. R. A., et al.
**机构**：Stanford University（通讯：Majzner, R. G. / Cochran, J. R.）
**平台**：medRxiv | **日期**：2026-07-09 | **DOI**：10.64898/2026.06.25.26356492
**链接**：https://scholar.google.com/scholar?q=10.64898%2F2026.06.25.26356492

**一句话概要**：抗 CAR 免疫应答驱动 GD2-CAR T 治疗弥漫性中线胶质瘤耐药。

**主要贡献**：
- 发现：对接受静脉+脑室内序贯 GD2-CAR T 的 DMG 患者脑脊液（CSF）进行纵向 scRNA+TCR 测序，显示工程化 CAR T 细胞持久性与克隆扩增有限，非工程化淋巴细胞主导 CSF 免疫区室。
- 揭示：外周血 T 细胞产生靶向 CAR 构建体鼠源/连接区表位的抗 CAR 反应性，伴随循环人抗 CAR 抗体（HACA）出现，且 HACA 与疾病进展时间相关、与 CAR T 持久性负相关。
- 证明：CSF B 细胞克隆扩增产生 HACA，直接削弱 GD2-CAR T 细胞的细胞毒活性，确立抗 CAR 免疫为获得性耐药的重要贡献者。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
GD2-CAR T 在 H3K27M+ DMG 显示临床获益，但多数患者应答持久性有限；CAR-T 的耐药机制（尤其抗 CAR 免疫）此前不清晰。本工作动机是识别限制 GD2-CAR T 持久性的获得性耐药机制以指导联合策略。突破点在于通过纵向体液（CSF）+ 单细胞（scRNA/TCR）整合，确证系统性+中枢抗 CAR T/B 细胞应答，并将 HACA 水平与 CAR T 持久性/疾病进展定量关联。局限在于样本量受罕见 DMG 限制、为观察性队列，HACA 与预后的因果方向需干预研究确认。future work 应设计降低免疫原性的 CAR 构建体、联合免疫抑制或表位屏蔽以克服抗 CAR 耐药。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | BertST: BERT-based Spatial Domain Identification in Patient Data | spatial transcriptomics, transformer | BERT 空间域识别 |
| bioRxiv | MOSANIC: Learning the spatial cell-cell communication network | spatial, transcriptomics | 空间细胞通讯网络枢纽脆弱性 |
| medRxiv | A Korean pangenome reference of 14 healthy individuals | pangenome, structural variant | 首个图基韩裔泛基因组 K-PanRef |
| medRxiv | In Vivo Spatial Transcriptomics for Bleeding-free Profiling Human Internal Organs (ENDO-Genome) | spatial transcriptomics, clinical | 微创体内空间转录组采样系统 |
| bioRxiv | A five-dimensional functional state space for fingerprinting disease transcriptomes | transcriptomics | 5 维疾病转录组功能状态空间 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-07-08 00:00 UTC ~ 2026-07-10 23:30 UTC（近48小时）*
