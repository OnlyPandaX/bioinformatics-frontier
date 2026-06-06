# 🧬 多组学研究简报
**2026年6月7日（周日）| 近48小时精选**

> 搜索范围：2026-06-05 ~ 2026-06-07 | 数据源：Nature, ArXiv q-bio, bioRxiv, medRxiv

---

## 📊 整体趋势评述

本期论文集中反映基因组学领域的两个深层审视：一是多组学整合的"承诺与现实"之争——HADACA3基准测试表明多数据源整合并不必然提升解卷积性能，直指领域内"数据越多越好"的隐性假设；二是基因组基础模型从"刷榜竞赛"进入"方法论自觉"阶段——LDARNet挑战固定tokenization范式，GENEB揭示模型排名因任务类别剧烈波动。两者共同指向组学计算领域正从工程堆叠走向因果理解。

---

## 📑 精选论文

### 🔬 论文 1：多组学整合解卷积的承诺与边界

**标题**：On the Promises and Limits of Multi-omics Integration for Deconvolution: The HADACA3 Benchmark

**作者**：Hugo Barbot, Elise Amblard, Nicolas Homberg, et al.
**机构**：TAGC, CIML; APTIKAL, LIG; IMT, UT3
**平台**：ArXiv (q-bio.QM) | **日期**：2026-06-04 | **arXiv ID**：2606.05980
**链接**：https://arxiv.org/abs/2606.05980

**一句话概要**：多组学整合是否真正提升组织解卷积性能？25万+管线基准测试给出否定答案。

**主要贡献**：
- 贡献1：提出HADACA3社区驱动基准，覆盖9组匹配DNAm+RNA数据集，测试>250,000条分析管线
- 贡献2：揭示多组学整合并不一致优于单组学方法，数据源组合策略的影响远大于整合算法本身
- 贡献3：建立解卷积评估标准化协议，为"多组学整合"假设提供首个系统性反证

**🔍 Critical 简评**：⭐⭐⭐⭐☆
多组学整合长期被视为计算生物学的"默认最优路径"，但系统性的反证一直缺失。HADACA3以社区竞赛+大规模基准的组合填补了这一空白，其"整合未必更优"的核心结论对领域假设构成实质性挑战。局限在于当前仅覆盖DNAm+RNA两种模态，是否外推至蛋白质组/代谢组等场景仍待验证。值得追踪的是，何种条件下多模态整合确实带来增益——这可能是比"整合本身"更关键的科学问题。

---

### 🔬 论文 2：线粒体-免疫轴驱动脑衰老到阿尔茨海默病的转录组转变

**标题**：A mitochondrial-immune axis drives the transcriptomic transition from brain aging to Alzheimer's disease

**作者**：Pal, A., Arif, S., Karthikeyan, I., Waisberg, E., Guarnieri, J. W., et al.
**机构**：（通讯作者信息无法从API确认）
**平台**：bioRxiv Bioinformatics | **日期**：2026-06-05 | **DOI**：10.64898/2026.06.03.729900
**链接**：https://doi.org/10.64898/2026.06.03.729900

**一句话概要**：整合多脑区小鼠衰老图谱+人类aging-to-AD队列，揭示线粒体-免疫轴驱动衰老→AD转录组转变。

**主要贡献**：
- 贡献1：跨物种整合分析（小鼠多脑区衰老图谱+人类aging-to-AD队列+独立验证集），定义衰老→AD的分子转变区间
- 贡献2：揭示线粒体功能衰退先于神经炎症激活，驱动从"正常衰老"到"神经退行"的关键转变
- 贡献3：鉴定区分衰老与AD的特异性基因程序，为治疗窗口划定提供转录组证据

**🔍 Critical 简评**：⭐⭐⭐⭐☆
衰老如何转变为AD是神经退行性疾病的核心未解问题。本研究以整合转录组学跨物种跨脑区的方式，将"时间轴"引入分子层面分析，突破了既往静态case-control设计的局限。线粒体-免疫轴的发现与近期Nature衰老多组学系列研究（Gladyshev Lab衰老标志、Mootha Lab mtDNA突变机制）形成互补。局限在于bulk转录组的细胞类型分辨率不足，空间异质性未被捕捉——结合空间转录组可能进一步细化转变区间的解剖定位。

---

### 🔬 论文 3：增强子中心方法揭示巨噬细胞增强子与心血管疾病关联

**标题**：An enhancer-centric approach applied to human immune system epigenomes revealed the association of macrophage enhancers with cardiovascular disease

**作者**：Arcila-Galvis, J. E., Were, F., Juan, D., Del-Rio, J., Lamb, C. A., Hambleton, S., et al.
**机构**：（通讯作者信息无法从API确认）
**平台**：bioRxiv Genomics | **日期**：2026-06-05 | **DOI**：10.64898/2026.06.02.728745
**链接**：https://doi.org/10.64898/2026.06.02.728745

**一句话概要**：以增强子为中心解析免疫表观组，发现巨噬细胞增强子与心血管疾病GWAS信号的特异性关联。

**主要贡献**：
- 贡献1：提出"增强子中心"策略，从免疫细胞ATAC-seq数据直接提取增强子，绕过传统基因中心注释瓶颈
- 贡献2：揭示巨噬细胞特异性增强子与CVD GWAS变异的显著富集，远超其他免疫细胞类型
- 贡献3：将非编码GWAS变异的功能解释从"最近基因"范式转向"细胞类型-增强子"范式

**🔍 Critical 简评**：⭐⭐⭐⭐☆
GWAS变异的功能注释长期困于"最近基因"假设，增强子中心方法提供了概念上更合理的替代——直接从染色质可及性数据提取功能元件，再与疾病遗传信号对接。巨噬细胞-CVD的关联与心血管病理的炎症假说一致，但增强子中心方法的泛化性仍需在其他疾病系统中验证。值得追踪的是，结合空间表观组学（如空间ATAC-seq）能否进一步解析增强子活性的组织微环境依赖性。

---

### 🔬 论文 4：LDARNet——可学习分词的基因组基础模型

**标题**：LDARNet: DNA Adaptive Representation Network with Learnable Tokenization for Genomic Modeling

**作者**：Daria Ledneva, Denis Kuznetsov
**机构**：（通讯作者信息无法从ArXiv确认）
**平台**：ArXiv (cs.CL; q-bio.GN) | **日期**：2026-06-03 | **arXiv ID**：2606.04552
**链接**：https://arxiv.org/abs/2606.04552

**一句话概要**：120M参数基因组基础模型，可学习自适应分词边界无监督对齐启动子/剪接位点。

**主要贡献**：
- 贡献1：将H-Net动态分块从自回归扩展到MLM框架，结合BiMamba-2状态空间层+双向路由+比率正则化
- 贡献2：紧凑模型(<300M)中11/18任务胜出，5个组蛋白修饰任务超越20倍参数量模型
- 贡献3：FLOPs对照实验分离学习路由的贡献：相同计算下自适应分词比固定分词高14个百分点；学习到的边界无监督对齐启动子motif和剪接位点

**🔍 Critical 简评**：⭐⭐⭐⭐☆
基因组基础模型的tokenization长期被视为"工程选择"而非"科学问题"——k-mer/BPE/单核苷酸的选择几乎无生物学依据。LDARNet的核心突破在于将分词边界本身变为可学习参数，且学习到的边界自发收敛到功能性位点，这暗示序列的"自然分段"可能被模型发现而非被研究者预设。局限在于120M参数规模下与500M+模型的对比尚不完整，且长上下文场景（>100kb）的自适应分词行为未充分探索。

---

### 🔬 论文 5：GENEB——基因组基础模型为何难以比较

**标题**：GENEB: Why Genomic Models Are Hard to Compare

**作者**：Daria Ledneva, Mikhail Nuridinov, Denis Kuznetsov
**机构**：（通讯作者信息无法从ArXiv确认）
**平台**：ArXiv (cs.CL; cs.LG; q-bio.GN) | **日期**：2026-06-03 | **arXiv ID**：2606.04525
**链接**：https://arxiv.org/abs/2606.04525

**一句话概要**：40个基因组基础模型×100任务统一探测基准，揭示排行榜不稳定与规模幻觉。

**主要贡献**：
- 贡献1：构建GENEB——40个基因组基础模型在100个任务、13个功能类别的统一探测协议评估（含few-shot）
- 贡献2：证明聚合排行榜不稳定：模型排名跨任务类别剧烈波动，规模仅提供微弱且不一致的增益
- 贡献3：揭示架构与预训练对齐的影响频繁超过参数数量，挑战"更大即更好"的规模叙事

**🔍 Critical 简评**：⭐⭐⭐⭐☆
与LDARNet同团队同期发表，两者形成互补：一个挑战tokenization范式，一个挑战评估范式。GENEB的"排行榜不稳定"发现在方法论上具有根本意义——如果排名随任务类别翻转，任何单一"最优模型"声明都缺乏科学基础。与Carbon(Evo2竞品)、HADACA3(多组学整合幻灭)形成本期"祛魅三部曲"。局限在于统一探测协议可能低估某些模型的任务特定微调潜力，且100任务覆盖的功能类别边界仍可扩展。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| ArXiv | Cross-scale spatially-aware generative modeling of transcriptomic programs (2606.05870) | 空间转录组+神经退行+生成模型 | r=0.94预测脑退化空间模式，q-bio.NC |
| bioRxiv | circVDJ-seq for T cell clonotype detection (10.1101/2025.09.16.675546) | VDJ+空间多组学 | 3'-barcoding cDNA中低成本回收TCR克隆型 |
| bioRxiv | inGSEA: Improved GSEA with weighted integral statistic (10.64898/2026.06.02.729106) | GSEA方法学 | Anderson-Darling加权积分替代KS统计量 |
| ArXiv | p-adic Bi-Filtrations for Topological ML on Genomic Sequences (2606.06117) | p-adic数+TDA+基因组 | 低样本场景超Nucleotide Transformer v2 |
| bioRxiv | Human Genome-Scale ME-Models reveal cancer resource constraints (10.64898/2026.05.30.728988) | 代谢+基因表达+癌症 | ME-Models显式建模酶成本约束 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-06-05 07:30 HKT ~ 2026-06-07 07:30 HKT*
