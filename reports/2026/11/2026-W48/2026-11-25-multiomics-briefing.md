# 🧬 多组学研究简报
**2026年11月25日（星期三）| 近48小时精选**

> 搜索范围：2026-11-22 23:37:43 UTC ~ 2026-11-24 23:37:43 UTC | 数据源：Nature 系列、arXiv、bioRxiv、medRxiv

## 📊 整体趋势评述

本期研究把分辨率进一步推向长读长单细胞转录本、复杂结构变异和肿瘤空间蛋白图谱，同时开始用干预数据检验多模态模型从相关性走向可迁移扰动预测的能力。AI 方法呈现出一个值得关注的共同信号：在单细胞扰动和跨模态整合中，结构清楚的线性分解或显式因果模型可提供有竞争力的基线，但因果方向和跨队列临床效用仍需独立验证。

## 📑 精选论文

### 🔬 论文 1：单细胞长读长揭示视网膜转录本异构体

**标题**：Iso-Seq enables discovery of novel isoform variants in human retina at single-cell resolution

**作者**：Luozixian Wang et al.; Raymond C. B. Wong（通讯作者）

**机构**：Centre for Eye Research Australia；University of Melbourne, Department of Surgery

**平台**：Nature Communications | **日期**：2026-11-24 | **DOI**：10.1038/s41467-026-78606-6
**链接**：https://www.nature.com/articles/s41467-026-78606-6

**一句话概要**：以单细胞全长测序描绘人视网膜转录本异构体。

**主要贡献**：
- 建立包含3名供者23,523个视网膜细胞核的全长转录本图谱，覆盖10类主要细胞。
- 识别15,967种已知和7,617种新异构体，并发现部分基因在主要视网膜细胞类型间使用不同启动子。
- 揭示遗传性视网膜疾病相关基因的新转录本变体及主要细胞类型间的差异剪接。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
短读长单细胞 RNA 测序擅长刻画细胞类型表达，却难以完整解析转录本结构与异构体。该研究以 Iso-Seq 的全长读段补上这一技术缺口，并提供细胞类型分辨的视网膜转录本资源。23,523个细胞核带来较高测序规模，但生物学供者仅3名，异构体在人群和疾病样本中的普遍性尚不确定。后续可在更多供者和疾病队列中验证候选转录本，并通过蛋白或功能实验确认其生物学效应。

---

### 🔬 论文 2：长读长解析 15q13.3 致病拷贝数变异形成机制

**标题**：Distinct mechanisms of CNV formation at the human 15q13.3 locus

**作者**：Wolfram Höps et al.（David Porubsky 与 Höps 为共同第一作者；Evan E. Eichler 与 Christian Gilissen 共同指导）

**机构**：Radboud University Medical Center, Department of Human Genetics；University of Washington, Department of Genome Sciences

**平台**：Nature Communications | **日期**：2026-11-24 | **DOI**：10.1038/s41467-026-79333-8
**链接**：https://www.nature.com/articles/s41467-026-79333-8

**一句话概要**：解析倒位多态性如何改变15q13.3致病变异风险。

**主要贡献**：
- 以10个患者—父母三联体的长读长组装及581条群体对照单倍型，解析复杂的15q13.3区域。
- 指出两类复发性 CNV 主要通过非等位同源重组形成，且易感性受大型倒位多态性影响。
- 识别至少18种结构单倍型，并报告 BP4-BP5 CNV 易感性存在明显祖源差异；与6种类人猿比较后，发现相关重复结构扩张具有近期且偏人类特异的特征。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
15q13.3 是与精神分裂症、发育迟缓和癫痫相关的复发性 CNV 热点，但复杂重复区长期难以完整组装，限制了断点机制研究。长读长解析结合群体单倍型比较，使研究能够把倒位背景、重组热点和不同 CNV 结构联系起来。祖源间超过十倍的易感性差异值得重视，不过病例三联体仅10组，群体差异估计及其临床风险解释仍需更广泛、祖源均衡的样本验证。后续应扩大病例和群体覆盖，并检验倒位结构对生殖系重组及个体 CNV 风险的预测价值。

---

### 🔬 论文 3：线性框架统一单细胞扰动预测与基因识别

**标题**：How Far Can Linear Go? BiPert, a Unified Framework for Single-Cell Perturbation Modelling

**作者**：Abhishek Sharma, Aleksej Zelezniak

**机构**：arXiv 论文页面未列作者机构

**平台**：arXiv（q-bio.CB、q-bio.GN、q-bio.QM；预印本，尚未同行评审） | **日期**：2026-11-23 | **DOI**：10.48550/arXiv.2611.31227（arXiv 页面标注 DataCite 注册处理中）
**链接**：https://arxiv.org/abs/2611.31227

**一句话概要**：用共享与特异响应分解统一扰动效应预测和靶基因识别。

**主要贡献**：
- 提出 BiPert，以共享分量和扰动特异分量的线性分解同时处理正向表达响应预测与反向扰动基因识别。
- 在未见细胞系的预测任务中优于不使用外部生物学知识的比较方法，少样本扩展 BiPert-FS 可用约10个实测扰动适配新细胞系。
- BiPert-ID 在未见细胞系和供者的单细胞表达数据中识别扰动基因，并发现扰动效应跨情境越稳定时越容易识别。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
深度模型已广泛用于单细胞扰动响应预测，但跨细胞背景泛化和结果可解释性仍是难点。BiPert 将正向预测与反向靶点识别放进同一线性分解，并报告少量扰动即可适配新细胞系，提示简单模型仍可能有实用竞争力。现有结论来自预印本摘要，摘要未给出各基准的效应量、数据集覆盖和所有外部验证细节，尚不足以判断优势在不同扰动设计下是否稳健。值得进一步比较其对非线性和组合扰动的适应性，并在独立实验筛选中验证识别结果。

---

### 🔬 论文 4：用扰动数据检验跨模态因果模型

**标题**：Multi-omics causal deep learning reveals regulatory structure while interventions refine perturbation predictions

**作者**：Shervin Goudarzi et al.（Vikram Nandi、Nuo Liu、Hani Goodarzi）

**机构**：UC Berkeley；Arc Institute（作者页面列示机构；未明确标注通讯作者）

**平台**：bioRxiv（预印本，尚未同行评审） | **日期**：2026-11-24 | **DOI**：10.64898/2026.11.22.768440
**链接**：https://www.biorxiv.org/content/10.64898/2026.11.22.768440v1

**一句话概要**：结合单细胞 RNA 与蛋白数据及基因扰动检验调控预测。

**主要贡献**：
- 提出跨模态因果变分自编码器 CMC-VAE，在基因和蛋白潜在网络中建模基因—基因、蛋白—蛋白及基因—蛋白关系。
- 基于809,130个 CITE-seq 观测细胞学习网络，并报告其可恢复共表达、转录因子调控及免疫信号特征。
- 使用 CRISPR 筛选检验响应排序和 RNA 到蛋白响应迁移；进一步显示干预微调可改善留出扰动预测，但仅凭观测数据不能恢复调控方向。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
单细胞多模态观测扩大了 RNA 与蛋白联合分析的规模，但观测相关性本身无法区分调控方向与共同响应。CMC-VAE 将潜在网络映射回实测特征，并用 CRISPR 扰动评估部分预测，为跨模态关系增加了干预层面的检验。摘要同时承认，仅靠观测数据无法确定调控方向；而模型在多大程度上优于简单基线，仍取决于筛选数据划分和跨实验迁移。后续需要完全独立的扰动队列及更系统的方向性验证，避免把预测关联解释为已确立的因果网络。

---

### 🔬 论文 5：空间蛋白质组刻画透明细胞肉瘤微环境

**标题**：Spatial proteomics identifies a myeloid-dominated, compartmentalized microenvironment and a proliferation-associated prognostic signature in clear cell sarcoma

**作者**：Simon Haefliger et al.; Clear Cell Sarcoma Consortium

**机构**：作者单位包括 University of Zurich/ETH Zurich、University of Bonn、University College London 等；medRxiv 页面未明确标注通讯作者

**平台**：medRxiv（预印本，尚未同行评审） | **日期**：2026-11-23 | **DOI**：10.64898/2026.11.20.26368290
**链接**：https://www.medrxiv.org/content/10.64898/2026.11.20.26368290v1

**一句话概要**：以空间蛋白组解析透明细胞肉瘤的免疫分区与增殖表型。

**主要贡献**：
- 在多机构、52名患者的临床注释队列中，以成像质谱流式分析超过500万个细胞。
- 描绘肿瘤中心以髓系细胞为主、侵袭前沿含较多淋巴细胞的空间免疫差异，并识别与较短总生存期相关的增殖性肿瘤细胞表型。
- 结合深度视觉蛋白质组和 H&E 图像模型刻画增殖信号，并提出 c-MET、B7-H3 作为候选抗体药物偶联物靶点。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
透明细胞肉瘤罕见，既有研究对其肿瘤微环境空间结构和肿瘤细胞异质性认识有限。该工作利用大规模单细胞空间蛋白测量，并把细胞表型、增殖特征和组织图像预测相联系，提供了后续分层研究的候选方向。52名患者虽对罕见病研究有价值，但预后关联和图像模型仍需独立队列验证，候选治疗靶点也不能等同于疗效证据。作为尚未同行评审的预印本，后续应报告外部验证性能并通过功能实验评估靶点可及性和治疗窗口。

## 🔎 检索与核验说明

- 检索窗口按执行时刻计算为2026-11-22 23:37:43 UTC至2026-11-24 23:37:43 UTC。Nature 论文、bioRxiv 与 medRxiv 页面提供日级发布日期；arXiv 页面提供精确提交时间。对只有日期、且日期落在窗口边界之外的记录不作纳入。
- Nature 系列通过 genomics、transcriptomics、proteomics、bioinformatics 和 microbiology 主题 RSS 检索，并逐篇核对 Nature 页面；arXiv 使用 Atom API 查询 `q-bio.GN`、`q-bio.QM`、`q-bio.CB`；bioRxiv 与 medRxiv 分别查询各自的 `details/biorxiv` 和 `details/medrxiv` API 端点。
- 入选论文的标题、作者、日期、平台/期刊、DOI 和页面链接均与各自原始页面或 API 记录核对；机构仅在来源明确列出时注明，未明确标注处已如实说明。以 DOI 与标题和近30天 `sent-papers.json` 记录去重。
- 三篇预印本尚未同行评审；所有贡献和 Critical 简评基于公开摘要与平台元数据，不替代全文审读或独立实验验证。

*Generated by multi-omics-briefing v1.7.0*

*搜索时间窗口：2026-11-22 23:37:43 UTC ~ 2026-11-24 23:37:43 UTC*
