# 🧬 多组学研究简报
**2026年8月23日（周日）| 近48小时精选**

> 搜索范围：2026-08-21 ~ 2026-08-23 | 数据源：Nature, bioRxiv, medRxiv

---

## 📊 整体趋势评述

本期简报聚焦近48小时预印本的高价值发现。**三大主题浮现**：①基因组基础模型向超长上下文突破，GeneUnet 将 DNA→表达预测上下文扩展至 1 Mb 并获百倍推理加速，为非编码变异功能解读提供新范式；②空间组学技术持续补短板——CLEAR-ST 以物理信息约束修正 Visium 类平台的 mRNA 横向扩散污染，为空间信号的生物学真实性保驾护航；③跨生物界多组学整合持续深化，从海洋鱼类宿主-微生物组生态研究到植物-昆虫-病毒跨界分子对话，多组学正在突破单一物种/单一模态的认知边界。

---

## 📑 精选论文

### 🔬 论文 1：基因组基础模型突破千 kb 上下文瓶颈

**标题**：Pretraining Enhances Megabase-Scale Gene Expression Prediction with GeneUnet

**作者**：Sun, N.; de Vazelhes, W.; Li, P.; Katz, T.; Gong, J.; Cheng, X.; Song, L.; Xing, E. P.
**机构**：GenBio AI
**平台**：bioRxiv | **日期**：2026-08-22 | **DOI**：10.64898/2026.08.13.744387
**链接**：https://doi.org/10.64898/2026.08.13.744387

**一句话概要**：DNA基础模型通过 1 Mb 超长上下文将基因表达预测性能提升至主流 MoE 架构水平，同时推理速度加快百倍。

**主要贡献**：
- 贡献1：提出 GB.GeneUnet，837M 参数 Transformer-UNet 架构，在 OpenGenome2 的 6 万亿 token 多物种基因组数据上预训练，将 DNA→表达预测的序列上下文扩展至 1 Mb（此前主流方法受限于 kb 级）。
- 贡献2：在 Borzoi 基准（524 kb 上下文）上达到 SOTA；在 AlphaGenome 基准 1 Mb 上下文下性能与之相当，但 fine-tuning 流程更轻量。
- 贡献3：相比同规模 MoE 基线 GeneMoE，推理速度提升约 100 倍，为大规模基因组筛选应用奠定工程可行性。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
过去两年，Enformer → Borzoi → Enformer genomics → Nucleotide Transformer 各版本在 kb~150 kb 上下文范围内不断突破，但 500 kb 以上的长距离调控元件（增强子、绝缘子、拓扑关联边界）仍难以被有效建模。本研究通过 U-Net 架构将感受野自然扩展至 1 Mb，结合混合专家预训练的海量多物种数据，为长程基因组建模提供了高效框架。局限在于：1 Mb 对部分超大基因座（如 HOX 基因簇全段）仍不足；模型在非人类物种上的泛化能力有待更多物种验证；预训练语料库覆盖度决定了下游适用性。值得关注的是，该框架与近期 DeepMind 的 AlphaGenome 路线高度收敛——两条独立路径均指向超长上下文+多物种预训练是基因组基础模型的必由之路，值得持续追踪。

---

### 🔬 论文 2：空间转录组去污染——物理约束建模 mRNA 横向扩散

**标题**：CLEAR-ST: Physics-informed probabilistic decontamination of spatial transcriptomics by modeling mRNA lateral diffusion

**作者**：Ma, K.; Huang, Y.; Ho, J. W. K.
**机构**：The University of Hong Kong
**平台**：bioRxiv | **日期**：2026-08-22 | **DOI**：10.64898/2026.08.13.744615
**链接**：https://doi.org/10.64898/2026.08.13.744615

**一句话概要**：CLEAR-ST 以图-Laplacian 物理前向模型约束空间转录组中 mRNA 横向扩散污染，实现可解释的计数水平修正。

**主要贡献**：
- 贡献1：系统刻画了 Visium 类平台上 mRNA 横向扩散的特征：污染信号高度依赖附近组织内表达量、在组织边界集中、具有跨基因一致性方向性，提供了迄今最完整的污染形态学画像。
- 贡献2：提出物理信息概率框架 CLEAR-ST，潜变量干净表达场由去噪自编码器推断，与观察计数的连接通过可学习扩散系数的图-Laplacian 前向污染模型实现，并配备可选计数似然评估。
- 贡献3：在多种真实样本上验证：CLEAR-ST 改善空间域恢复、提高基因水平空间自相关、增强下游分析（marker 基因发现、通路富集、细胞类型解卷积）的生物学特异性，在聚类质量上优于已有方法。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
空间转录组技术（Visium、Slide-seq、 Stereo-seq 等）已成为组织微环境研究标配，但 mRNA 横向扩散造成的"幽灵信号"始终是数据分析中的暗礁——既影响聚类结果，也干扰细胞类型注释的生物学真实性。传统方法多为经验性后处理（如阈值过滤），缺乏对扩散物理过程的显式建模。CLEAR-ST 的核心创新在于引入图-Laplacian 作为扩散算子，将物理约束嵌入概率推断框架，使去污染过程可解释、可调参。局限：当前框架针对捕获型空间组学（capture-based）设计，对原位测序类（ISS、 FISSEQ）平台不适用；不同组织类型的扩散参数差异可能需要平台专项建模。未来方向在于与组织学图像引导的深度学习方法结合（如 CellScope 等），实现污染信号与真实生物信号的联合分离。

---

### 🔬 论文 3：宿主基因组"无结构"≠微生物组无结构——日本竹荚鱼全国多组学证据

**标题**：Nationwide multi-omics profiling of Japanese jack mackerel reveals geographic gut microbiome structuring despite host panmixia

**作者**：Yoshida, M.-a.; Tsunoda, K.; Kasane, H.; Kishimoto, A.; Mori, S.; Komiya, K.; Hamada, M.; Sekiguchi, T.; Goto, Y.; Ishikawa, N.; Suyama, Y.; Setiamarga, D. H. E.
**机构**：Shimane University
**平台**：bioRxiv | **日期**：2026-08-20（2026-08-22 索引） | **DOI**：10.64898/2026.08.20.745924
**链接**：https://doi.org/10.64898/2026.08.20.745924

**一句话概要**：全基因组 SNP 显示宿主高度通巢，而肠道微生物组呈现显著地理区系分化，说明微生物组可揭示高连通性海洋鱼类种群结构中 SNP 无法捕捉的生态信息。

**主要贡献**：
- 贡献1：日本全国沿海 9 个采样点采集 19 条竹荚鱼（Trachurus japonicus）配对样本，MIG-seq 宿主基因组 + 16S rRNA 微生物组同期分析，提供迄今最完整的鱼类宿主-微生物组全国尺度配对数据。
- 贡献2：宿主 SNP 分析证实高度通巢假说——遗传结构极弱或无，与洋流驱动基因流的历史认知一致；而肠道微生物组 Bray-Curtis 相异性分析显示清晰地理区系格局，PERMANOVA 统计显著，且不受河口距离和宿主变量解释。
- 贡献3：微生物区系分化来源于地点特异性/个体特异性细菌类群，而非食物来源（叶绿体/Cyanobacteria 信号仅反映近期饮食/环境输入），暗示微生物组区系可能反映局部适应性或 exposure history。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
宿主遗传标记失效是海洋渔业资源管理中的长期痛点：高度连通种群的遗传同质性使传统 SNP 无法区分地理种群，导致渔业管理单元划定缺乏分子依据。本研究将多组学整合框架引入渔业生态学，是方法论层面的有益探索。更深刻的启示在于：微生物组作为"可塑性"生态指标，可能记录了 SNP 无法反映的环境适应历史（如局部水温、盐度、饵料组成对肠道群落的长期选择压力）。局限包括：样本量较小（19 个配对个体）、16S rRNA 只能到属水平、相关性而非因果性。未来若结合shotgun metagenomics + metatranscriptomics，有望揭示功能层面的地理分化机制。

---

### 🔬 论文 4：跨界多组学揭示植物-媒介昆虫-病毒三元分子对话

**标题**：Cross-Kingdom Multi-Omics Harmonization Uncovers Coordinated Host Defense and Vector Small RNA Regulatory Networks in Begomovirus Transmission

**作者**：Badeli, G.; Kaboosi, K.; Mohebbi, A.; Nasrollanejad, S.
**机构**：Gorgan University of Agricultural Sciences and Natural Resources（伊朗）
**平台**：bioRxiv | **日期**：2026-08-22 | **DOI**：10.64898/2026.08.14.744792
**链接**：https://doi.org/10.64898/2026.08.14.744792

**一句话概要**：跨越宿主-昆虫-病毒三个生物界的整合多组学揭示 SGS3-siRNA 三元调控模块，为双靶向 RNA 干扰防控 Begomovirus 提供了分子理论基础。

**主要贡献**：
- 贡献1：开发跨生物界多组学标准化和信号校准流程，对番茄-GSTV 白蝇-Begomovirus 体系进行转录组（宿主）和 small RNA（媒介）联合分析。
- 贡献2：宿主侧发现 138 个差异表达基因，基因沉默 machinery（SGS3，log2FC=3.67）显著上调，茉莉酸防御通路和 RNA 干扰通路同步激活；媒介侧发现 130 个差异表达 sRNA，涉及唾液腺分泌和肠道共生菌响应通路。
- 贡献3：跨界相关性建模发现两个高度反相关的调控模块（平均 |ρ|=0.76），宿主 SGS3 与媒介 sRNA VEC_0080（ρ=0.9762）和病毒来源 siRNA Bt-vsiRNA-01（ρ=0.7619）形成三元对话，揭示病毒持久性传播的协同分子机制。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
Begomovirus 是全球作物损失的主要原因之一，而现有防治手段受限于抗性品种快速退化（病毒突变逃逸）和化学农药生态破坏。本研究首次在三元跨界体系中构建了宿主-昆虫-病毒的分子对话网络，SGS3 作为核心枢纽被锁定——该基因在宿主 RNAi 防御中上调，同时与病毒来源和媒介来源的 sRNA 协同变化，提示了一条"双靶向 RNAi"策略的理论路径（同时干扰宿主 SGS3 依赖的防御通路和媒介 sRNA 转运）。局限：样本来自已有公共数据集（batch effect 需仔细评估）；相关性不等于因果性，需 CRISPR 功能验证；白蝇中肠屏障的 sRNA 跨膜转运机制尚未解析。未来工作若能整合蛋白质组（病毒侵染过程中的宿主蛋白组动态）和代谢组（防御代谢物时空分布），将大幅提升对病毒传播生态学的系统性理解。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | AlphaConformers: Structure-guided sampling for multiple protein conformations | 蛋白构象预测、AlphaFold3 | 结构生物信息学工具，2026-08-22 |
| bioRxiv | Protal: Ultra-fast metagenomic profiling and strain-resolved analysis | 宏基因组、strain分型 | 比 Kraken3 快且敏感，2026-08-06 preprint |
| bioRxiv | LifeSciBench: Evaluating Language Models on Expert-Level Life Science Tasks | LLM评估、基准测试 | 覆盖生物科学全领域专家任务，2026-08-22 |
| bioRxiv | Design-informed Size Factor Estimation | 单细胞标准化、size factor | 新估计框架改进标准化，2026-08-22 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-08-21 00:00 UTC ~ 2026-08-23 07:30 UTC*
