# 🧬 多组学研究简报
**2026年9月9日（周三）| 近48小时精选**

> 搜索范围：2026-09-07 ~ 2026-09-09 | 数据源：Nature, bioRxiv, medRxiv, ArXiv

---

## 📊 整体趋势评述

本期共同主题是「多模态单细胞图谱从描述走向机制推断」：三篇图谱级工作分别把同核多组学+空间、跨物种比较、单基因组克隆分析用于回答谱系更新、基因调控与肿瘤起源的因果问题；同时 AI 模型开始承担"体外学习→体内应用"的跨模态迁移推断。蛋白质组学侧则出现标志性转化信号——衰老时钟被整合进 II 期临床试验终点设计，生物标志物研究正从队列走向监管级应用场景。

---

## 📑 精选论文

### 🔬 论文 1：用体外扰动图谱反推体内细胞信号历史

**标题**：Reconstructing signaling histories of single cells via perturbation screens and transfer learning

**作者**：Nicholas T. Hutchins, Miram Meziane, Claire Lu, Maisam Mitalipova, David S. Fischer, Pulin Li, et al.
**机构**：Whitehead Institute / MIT（通讯 Pulin Li）
**平台**：Nature Methods | **日期**：2026-09-08 | **DOI**：10.1038/s41592-026-03213-8
**链接**：https://doi.org/10.1038/s41592-026-03213-8

**一句话概要**：体外扰动图谱训练神经网络，从体内单细胞数据反推信号活动与历史

**主要贡献**：
- 提出：构建人类多能干细胞高通量体外信号扰动图谱（组合式信号扰动），作为学习可迁移"信号响应签名"的训练数据
- 开发：IRIS 神经网络模型，可高精度、带时间分辨率地推断体内细胞类型经历的信号活动与信号历史
- 揭示：将 IRIS 应用于小鼠胚胎单细胞图谱，发现组合信号编码使用的全局特征、识别有生物学意义的异质性，并沿多种发育谱系重建信号历史

**🔍 Critical 简评**：⭐⭐⭐⭐½
细胞间通讯推断长期依赖配体-受体共表达这类间接方法，而合成信号记录器又低通量、难以用于体内，两者都缺乏时间精度——本工作的动机正是补上"信号历史"这一块。其突破在于用标准化体外扰动数据训练可迁移的神经响应模型，把体内 scRNA-seq 变成信号活动的时间记录仪，且作者验证了不同细胞类型共享保守的信号响应签名。局限同样明显：体外→体内迁移依赖跨物种与跨体系的保守性，扰动组合空间巨大但图谱只能覆盖子集，时间分辨率仍受采样密度制约。未来若与人类组织/类器官图谱及空间组学结合，有望直接指导细胞命运工程与再生策略设计。

---

### 🔬 论文 2：人鼠肾上腺跨物种图谱改写皮质更新模型

**标题**：Human and mouse adrenal glands are characterized by species-specific steroidogenic states and tissue turnover

**作者**：Maria E. Kastriti, Denis Maksimov, Julia Krupinova, ..., Peter V. Kharchenko, Igor Adameyko, et al.
**机构**：Medical University of Vienna 等跨国团队（通讯 Igor Adameyko / Peter V. Kharchenko）
**平台**：Nature Genetics | **日期**：2026-09-08 | **DOI**：10.1038/s41588-026-02737-1
**链接**：https://doi.org/10.1038/s41588-026-02737-1

**一句话概要**：人鼠肾上腺单细胞+空间图谱，揭示物种特异类固醇合成状态与更新机制

**主要贡献**：
- 发现：人类存在年龄相关的球状带（ZG）细胞状态，具直接合成皮质醇能力，且胆固醇平衡推断呈性别差异
- 揭示：跨物种比较显示 ZF 标志物明显分化、人类网状带（ZR）在小鼠无对应结构、增殖细胞中 SHH–WNT4 信号差异——小鼠"向心性更新模型"不能直接外推到人
- 证明：基于罕见克隆嵌合个体的谱系证据，支持人类 WT1⁻ 被膜→ZG 转分化及血管平滑肌细胞→类固醇生成细胞转分化；人类增殖性 SF1⁺EZH2⁺ 细胞弥散分布于整个皮质，而非如小鼠般局限于 ZG

**🔍 Critical 简评**：⭐⭐⭐⭐½
肾上腺皮质终身更新，但"干细胞由外向内迁移分化"的经典模型几乎全部来自啮齿类，人类特异机制长期空白，这是本工作要填的核心缺口。作者用单细胞+空间转录组图谱并罕见地借助克隆嵌合个体做谱系推断，直接对两物种进行系统比较，产出多个可检验的新模型（如被膜来源细胞与血管平滑肌向类固醇细胞的转分化）。局限在于谱系结论依赖极稀有的嵌合样本、无法做谱系示踪级别的功能验证。未来结合肾上腺皮质癌/增生临床样本验证这些状态与转分化节点，可能为内分泌肿瘤提供新的细胞起源框架。

---

### 🔬 论文 3：人类精子发生的单核多组学+空间调控图谱

**标题**：A single-nucleus multiomic and spatial atlas of gene regulation in human spermatogenesis

**作者**：J. Bhaskaran, E. Ing-Simmons, I. Balaguer Balsells, S. Di Persio, ..., N. Neuhaus, J. M. Vaquerizas, et al.
**机构**：MRC Laboratory of Medical Sciences, London, UK（通讯 Juan M. Vaquerizas）
**平台**：bioRxiv (Genomics) | **日期**：2026-09-08 | **DOI**：10.64898/2026.09.04.749409
**链接**：https://doi.org/10.64898/2026.09.04.749409

**一句话概要**：同核染色质可及性+基因表达与空间转录组整合，绘制精子发生调控网络

**主要贡献**：
- 构建：同一细胞核内同时 profiling 染色质可及性与基因表达、并整合组织空间转录组的人类精子发生多组学图谱
- 推断：高置信基因调控网络，解析生精细胞与体细胞区室中已知及新型候选调控因子的阶段特异活性，定位曲细精管微环境内空间受限的信号互作
- 关联：将不育相关遗传变异映射到细胞类型特异的候选增强子与靶基因；并对临床隐精子症样本进行初步调控剖析

**🔍 Critical 简评**：⭐⭐⭐⭐
男性不育的遗传基础大部分落在非编码区，但精子发生中"哪个增强子调控哪个基因、在哪种细胞里起作用"缺乏系统参考，核心动机即建立这一调控坐标系。同核 snRNA+snATAC 加空间转录组的三模态设计，使其能同时给出细胞身份、调控元件活性与空间邻域信息，比既往单模态图谱前进了一步；把 GWAS/不育风险位点锚定到具体增强子-靶基因对也具备直接的临床解释力。作为预印本，调控网络的假阳性率与隐精子症样本的代表性尚待同行评议与更大队列检验。未来如扩展至不同不育亚型并配套 CRISPR 功能验证，有望成为生殖医学变异解读的参考资源。

---

### 🔬 论文 4：正常肾细胞单基因组分析锁定肾癌起始步骤

**标题**：Single genome analysis of normal cells identifies the early steps of kidney cancer

**作者**：J. P. Margaria, G. B. Pipitone, A. Larcher, ..., F. Supek, I. Franco, et al.
**机构**：IRCCS Ospedale San Raffaele, Milan（通讯 Irene Franco）
**平台**：bioRxiv (Cancer Biology) | **日期**：2026-09-07 | **DOI**：10.64898/2026.09.03.749153
**链接**：https://doi.org/10.64898/2026.09.03.749153

**一句话概要**：正常肾单元基因组分析揭示新突变特征，关联缺氧与肾癌起始

**主要贡献**：
- 开发：克隆扩增法在同一细胞上同时获取高置信基因组与基因表达数据，实现正常肾细胞"单基因组"水平分析
- 发现：新突变特征特异标记一类损伤激活的近端肾小管细胞，并存在于 96% 透明细胞肾细胞癌中；该突变过程活跃于高转录活性 DNA 区，影响 VHL 基因驱动变异的发生
- 提出：结合体外实验提示氧可用性扰动（缺氧）是该突变过程的诱因，把肾组织常见的内源性应激与过度突变、癌起始直接联系起来

**🔍 Critical 简评**：⭐⭐⭐⭐
正常细胞如何跨过癌变"起跑线"是肿瘤演化的核心未解问题，而肾癌尤其特别：VHL 驱动变异在正常肾小管中即可检出，传统 bulk 测序无法分辨发生在哪些细胞。本工作用单基因组+同细胞表达的双模态克隆分析，把突变特征锚定到具体细胞亚群，并给出"缺氧→高转录区突变→VHL 损伤"的可检验因果链，方法学上很有价值。局限是突变特征的独立队列验证与缺氧因果性仍需更多证据，且单细胞扩增技术本身的误差率需谨慎控制。若能扩展到癌前病变前瞻队列并结合 lineage tracing，将直接检验"损伤激活细胞是肾癌细胞-of-origin"这一假说。

---

### 🔬 论文 5：蛋白组衰老时钟进入 2a 期临床试验终点评估

**标题**：Integration of proteomic aging clocks in a phase 2a clinical trial supports simultaneous geroprotective assessment

**作者**：Alex Zhavoronkov, Fedor Galkin, Shan Chen, ..., Mahdi Moqri, Alexander Tyshkovskiy, Vadim N. Gladyshev, et al.
**机构**：Insilico Medicine（阿布扎比/上海/剑桥）等 17 家机构（通讯 Vadim N. Gladyshev, Brigham and Women's Hospital / Harvard Medical School）
**平台**：Nature Biotechnology | **日期**：2026-09-07 | **DOI**：10.1038/s41587-026-03286-y
**链接**：https://doi.org/10.1038/s41587-026-03286-y

**一句话概要**：六个蛋白组衰老时钟同测抗纤维化 2a 期试验血清，治疗组生物学年龄一致降低

**主要贡献**：
- 评估：在已发表的 12 周特发性肺纤维化 rentosertib 2a 期试验血清蛋白组上，平行比较 6 个蛋白组衰老时钟（ProtAge、OrganAge、PAC、ipfP3GPT、PAOPAC 等）
- 发现：六个时钟结果一致——治疗组生物学年龄较对照组降低，尽管时钟间存在方差；验证了蛋白组时钟作为干预效应读数的可重复性
- 提出：蛋白组时钟单独无法解耦衰老与疾病特异效应，但结合通路分析可识别衰老相关（衰老/代谢）的潜在抗衰老偏移；支持"双用途"试验设计——在特定疾病 II 期试验中同步整合衰老终点

**🔍 Critical 简评**：⭐⭐⭐⭐
表观遗传时钟在临床试验中读数不一致、跨模型共识差且机制解释弱，而蛋白是生物学变化的直接效应分子——用蛋白组时钟做药物"是否延缓衰老"的读数，动机清晰。本工作首次（据摘要）在同一 II 期试验数据上系统比较 6 个蛋白时钟并得到方向一致的结论，还示范了通路层面的抗衰老解读，向"试验即衰老干预证据"迈出务实一步。局限在于：这是对公开数据的事后分析而非前瞻设计，12 周窗口短，且作者坦承时钟无法自行区分"治好了病"与"延缓了衰老"，通路推断属间接证据。未来关键是前瞻性双终点试验设计与跨队列时钟校准，把生物学年龄推为监管可接受的替代终点。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| Nature Genetics (Review) | Mechanisms underlying disease-causing variants in promoters and enhancers | 非编码变异 | Bickmore 团队综述，DOI: 10.1038/s41588-026-02743-3 |
| bioRxiv (Cancer Biology, v2) | The Indian Cancer Genome Atlas: A Multi-Omics Resource for Advancing Cancer Research | 多组学资源 | 印度乳腺癌 125 例 WGS+RNA+蛋白组同队列资源（2026-09-08 更新版） |
| bioRxiv (Cell Biology) | Multimodal profiling establishes ovarian fibrosis as a measurable and targetable hallmark of human reproductive aging | 多模态/衰老 | 超声弹性成像+ECM 指纹+scRNA 同个体整合（Northwestern，2026-09-08） |
| bioRxiv (Bioinformatics) | AtlasFold: Protein structure prediction with metagenomic-scale language models | 蛋白基础模型 | AtlasLM-3B 含宏基因组序列，结构预测达 PLM 最优（KAIST，2026-09-07/08） |
| medRxiv (Genetic Medicine) | Enhanced power and transferability for genetics-driven metabolomic biomarker discovery in admixed American cohorts | 遗传×代谢组 | 混血人群代谢组生物标志物发现功效提升（2026-09-07） |
| bioRxiv (Bioinformatics) | EvSpark: Lossless Speculative Decoding for Hybrid DNA Foundation Models | DNA 基础模型 | 混合架构投机解码提速方案（2026-09-08） |
| Nature Genetics | Cohesin prevents local mixing of condensed euchromatic domains in living human cells | 3D 基因组 | 活细胞成像染色质区室化（2026-09-08） |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-09-08 23:30 UTC ~ 2026-09-08 23:50 UTC*
