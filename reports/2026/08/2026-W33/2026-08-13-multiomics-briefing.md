# 🧬 多组学研究简报
**2026年8月13日（周四）| 近48小时精选**

> 搜索范围：2026-08-11 ~ 2026-08-13 | 数据源：Nature, ArXiv, bioRxiv, medRxiv

---

## 📊 整体趋势评述

本期简报呈现两条主线：**①多模态基础模型继续渗透生物组学**，VOICE 将 H&E 形态图像与空间转录组配对训练，直接从病理图像预测单细胞基因表达；**②组学数据标准化与整合方法持续突破**，FELIX 解决了混血基因组 GWAS 难题，CRISPR-FOIL 为染色质环路功能研究提供可编程工具，血浆滴定方案则试图为跨平台蛋白质组建立物理标尺。三者共同指向：多组学 AI 的瓶颈正从「数据不足」转向「跨模态/跨平台可比性」这一基础设施问题。

---

## 📑 精选论文

### 🔬 论文 1：视觉-组学基础模型从 H&E 图像预测单细胞基因表达

**标题**：VOICE: A Vision-Omics Foundation Model Integrating Direct and Retrieval-Based Prediction of In-situ Single-Cell Gene Expression

**作者**：Xin Luo, Yicheng Tao, Haoxuan Zeng, et al.
**机构**：University of Science and Technology of China / Tsinghua（推断）
**平台**：arXiv (q-bio.BM) | **日期**：2026-08-08 | **DOI**：10.48550/arXiv.2608.08366
**链接**：https://arxiv.org/abs/2608.08366

**一句话概要**：视觉基础模型与转录组基础模型对齐后双分支融合，实现从常规 H&E 病理图像直接预测单细胞分辨率基因表达。

**主要贡献**：
- 提出 VOICE 多模态基础模型，在 2300 万细胞上通过对比学习对齐病理形态表征与单细胞转录组表征
- 双预测分支：直接回归分支从形态预测表达；检索分支从相似参照细胞借用表达信息，弥补形态无信号基因
- 按基因动态融合两分支——形态可预测基因权重趋近直接回归，难预测基因权重趋近检索
- 在保留患者、载玻片和部分重叠基因面板上泛化，7 项指标全面超越此前单细胞表达预测方法

**🔍 Critical 简评**：⭐⭐⭐⭐
现有空间转录组技术（Xenium、Visium）成本高、样本量受限，而医院积累的 H&E 切片是真正的海量资源。VOICE 的核心 insight 是：不是所有基因都有形态学信号，用 retrieval 分支补足直接回归的盲区是聪明之举——类似 LLM 里的 retrieval-augmented generation。局限在于：①依赖配对的 Xenium+H&E 训练数据，成本仍然较高；②模型在癌症以外组织类型的泛化性尚未充分验证；③per-gene fusion weight 的可解释性值得深挖（哪些基因形态不可预测？为什么？）。Future work 可探索结合 WSI 级别的全局上下文而非仅细胞中心 patch，以及扩展到蛋白质组、代谢组等更多模态。

---

### 🔬 论文 2：可编程 CRISPR 工具工程化调控活细胞染色质三维折叠

**标题**：CRISPR-FOIL: A Programmable CRISPR Tool to Engineer and Illuminate Chromatin Folding in Live Human Cells

**作者**：Chung, Y.-C.; Willey, S.; He, S.-L.; Wise, N.; Tu, L.-C.
**机构**：The Ohio State University Wexner Medical Center
**平台**：bioRxiv (Cell Biology) | **日期**：2026-08-11 | **DOI**：10.64898/2026.08.09.743771
**链接**：https://www.biorxiv.org/content/10.64898/2026.08.09.743771v1

**一句话概要**：CRISPR-FOIL 以可编程方式在活细胞内构建或拆除染色质环路，首次实现环路工程化操控与功能解读同步进行。

**主要贡献**：
- 建立 CRISPR-FOIL 系统：通过 guide RNA 引导的 DNA 结合蛋白在活细胞中招募或移除 CTCF/cohesin 等环路形成因子
- 实现环路构建（de novo loop formation）与环路拆除（loop deletion）双向操控，验证环路形成对基因激活的充分必要性
- 揭示染色质压缩通过物理限制转录机器访问 DNA 抑制基因表达；空间近接（enhancer-promoter）则通过环路介导激活基因
- 提供可量化的环路工程化工具链，为系统性解析 3D 基因组功能元件奠定方法学基础

**🔍 Critical 简评**：⭐⭐⭐⭐
染色质三维结构是基因调控的核心机制，但此前缺乏在活细胞中可编程操控环路形成的工具——大多数研究依赖 Hi-C 的观察性数据。CRISPR-FOIL 的意义在于从「观察」到「操控」的范式跃迁，类似于 CRISPR-Cas9 从「敲除」到「编辑」的跨越。局限：①目前聚焦于已知环路锚点，新环路设计仍依赖先验知识；②长期追踪（多细胞周期）下环路稳定性有待验证；③在原代细胞而非细胞系中的效率尚未系统评估。值得关注的方向：将 CRISPR-FOIL 与单细胞多组学（scRNA-seq + Hi-C）联用，系统绘制环路-转录因果网络。

---

### 🔬 论文 3：血浆滴定建立跨平台蛋白质组定量物理标尺

**标题**：Plasma titration provides a physical ruler for cross-platform proteomics

**作者**：Liu, Y.; Wang, H.; Zhang, Y.; Lu, R.; Xu, W.; Hou, W.; Zhu, Y.; et al.
**机构**：State Key Laboratory of Genetics and Development of Complex Phenotypes, School of Life Sciences and Human Phenome Institute, Fudan University, Shanghai, China.
**平台**：bioRxiv (Molecular Biology) | **日期**：2026-08-11 | **DOI**：10.64898/2026.08.09.740864
**链接**：https://www.biorxiv.org/content/10.64898/2026.08.09.740864v1

**一句话概要**：以血浆滴定作为物理标尺统一亲和性与质谱平台蛋白定量读数，解决跨平台蛋白质组数据 AI 整合的根本障碍。

**主要贡献**：
- 发现亲和性（抗体/核酸适配体）平台与质谱平台蛋白读数存在系统性差异，无统一标准无法判断是生物学差异还是技术假象
- 提出血浆滴定方案：以已知浓度的混合血浆作为物理参考标准，使两种平台的定量值可换算到同一度量体系
- 在多个大型队列中验证跨平台可比较性，显著提升 AI 模型的跨队列预测准确性
- 建立跨平台蛋白质组整合的通用范式，为大规模血浆蛋白质组图谱的 Meta-analysis 奠定基础

**🔍 Critical 简评**：⭐⭐⭐⭐
血浆蛋白质组是精准医学最重要的生物液体，但亲和性平台（如 Olink、SomaScan）与质谱平台各自为战，同一蛋白在不同平台可能给出矛盾结论，阻碍了 AI 模型的跨队列泛化。这篇文章从第一性原理出发：没有 ground truth，就无法区分生物差异和技术假象——所以引入物理标尺创造 ground truth。这个思路类似于代谢组学中内标（internal standard）的概念，但扩展到了跨平台层面。局限：①标定方案需要额外的实验成本；②滴定曲线假设线性响应，非线性蛋白可能需要修正；③仅验证了血浆基质，其他体液有待测试。长远来看，如果能建立国际统一的蛋白质组物理标准，将极大加速生物标志物发现和临床转化。

---

### 🔬 论文 4：混血基因组图谱的祖先感知 GWAS 统一框架

**标题**：A unified framework for local-ancestry-aware genetic association analysis across biobanks

**作者**：Hu, L.; Tan, T.; Yuan, K.; Wang, Y.; Gorissen, B. L.; Lin, Y.-S.; Kore, P.; et al.
**机构**：Broad Institute of Harvard and MIT, Massachusetts General Hospital
**平台**：medRxiv (Genetic and Genomic Medicine) | **日期**：2026-08-11 | **DOI**：10.64898/2026.08.09.26360047
**链接**：https://www.medrxiv.org/content/10.64898/2026.08.09.26360047v1

**一句话概要**：FELIX 框架无需离散祖先分类即可对混血基因组进行局部祖先感知 GWAS，避免现有框架丢失大量参与者的核心问题。

**主要贡献**：
- 揭示现有 GWAS 框架的两难：要么排除无法归入单一祖先的参与者（丢失信息），要么忽略祖先特异性效应（引入混杂）
- 提出 FELIX：基于局部祖先追踪的关联分析框架，在连续基因组区域上建模祖先效应，无需离散分类
- 在 UK Biobank、All of Us 等大型 biobank 中验证，保留所有参与者同时准确识别祖先特异性效应
- 可扩展至多祖先 Meta-analysis，为构建更全面的全球疾病遗传图谱提供方法学支撑

**🔍 Critical 简评**：⭐⭐⭐⭐
现有的 GWAS 主流分析框架几乎都是为欧洲血统设计的——要么将非欧洲参与者排除，要么强制将其归入单一祖先类别，忽略了混血个体基因组中不同片段具有不同祖先来源这一现实。随着大型 biobank（如 All of Us 纳入大量非裔、拉丁裔、亚裔参与者）的崛起，这个问题的紧迫性日益凸显。FELIX 的核心创新是将局部祖先感知引入线性混合模型，在保留统计功效的同时避免了离散分类引入的偏倚。局限：①计算成本随样本量和祖先数目增长；②局部祖先推断的准确性（尤其是稀有祖先）仍有限制；③尚未在多种族大规模 Meta-GWAS 中系统验证。值得关注的方向：将 FELIX 与多组学整合（eQTL、pQTL 共定位）结合，构建跨祖先的因果疾病基因图谱。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | Independent evolution of flavour and parthenocarpy in fig（Ikegami et al.） | multi-omics, transcriptomics | 无花果多组学比较基因组学，果实风味与单性结实独立进化 |
| bioRxiv | Self-Supervised AI Discovery of Histomorphological Phenotypes from Routine Mesothelioma Biopsies（Seyedshahi et al., Glasgow） | cancer, integration | 临床小活检自监督AI，间皮瘤亚型诊断 |
| bioRxiv | L1CAM×CD3 双特异性抗体胰腺癌临床前模型（Wandmacher et al., Kiel） | cancer, tumor | TME复杂建模，免疫治疗新靶点 |
| ArXiv | muxvizpy: multilayer biological network analysis（Baldan et al.） | bioinformatics, integration | 多层生物网络Python库 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-08-11 00:00 UTC ~ 2026-08-13 00:00 UTC*
