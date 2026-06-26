# 🧬 多组学研究简报
**2026年6月27日（周六）| 近48小时精选**

> 搜索范围：2026-06-25 ~ 2026-06-26 | 数据源：Nature Biotechnology, Nature Genetics, Nature Communications, ArXiv

---

## 📊 整体趋势评述

本期简报聚焦三个技术前沿：**空间组学分辨率边界持续突破**——Spatial-EV-seq 将空间转录组学拓展至细胞外囊泡层面，实现组织内 EV 的空间图谱绘制；**AI 驱动的基因组解读走向临床决策支持**——Nature Genetics 同期发表剪接预测 AI 和近完美基因组测序两篇重磅文章，分别从变异解读和测序质量两个维度推动精准医学落地；**AI Agent 开始接受长程单细胞生物学任务检验**——scBench-Long 基准揭示当前最强模型仅达成 25.4% 轨迹通过率，AI for Omics 的可靠性评估框架正在建立。

---

## 📑 精选论文

### 🔬 论文 1：空间EV组学新技术——在组织内绘制细胞外囊泡的空间转录组全景

**标题**：Spatially resolved profiling of extracellular vesicles in tissues with Spatial-EV-seq

**作者**：Qianxi Wen, Xing Na, Yuming Lu, Qiannan Zhang, Zhicheng Zha, et al.

**机构**：北京大学/清华大学（推测，DOI 来源于 Nature Biotechnology 中国团队署名）

**平台**：Nature Biotechnology | **日期**：2026-06-26 | **DOI**：10.1038/s41587-026-03192-3

**链接**：https://doi.org/10.1038/s41587-026-03192-3

**一句话概要**：开发 Spatial-EV-seq 技术，在组织原位对细胞外囊泡（EV）进行空间分辨的转录组分析，填补了 EV 空间定位与分子组成联合解析的技术空白。

**主要贡献**：
- 发现1：建立了可在福尔马林固定石蜡包埋（FFPE）组织上进行 EV 空间转录组测序的实验流程，无需新鲜组织即可完成
- 发现2：实现了细胞外囊泡与来源细胞的联合空间分析，揭示了肿瘤微环境中 EV 的空间互作网络
- 发现3：提供了配套分析工具包（GitHub: BuckyEv/Spatial-EV-seq），数据已上传 GSA（CRA039683）

**🔍 Critical 简评**：⭐⭐⭐⭐☆
空间转录组领域正经历从 mRNA 捕获到多模态原位分析的技术进化阶段（从 Visium 到 MERFISH 再到 Spatial-EV-seq）。本工作的关键突破在于将研究对象从细胞内 mRNA 延伸至细胞外囊泡——EV 是肿瘤细胞与免疫细胞通讯的核心介质，长期缺乏空间分辨率的分子表征手段。Spatial-EV-seq 的出现填补了这一空白。局限方面：技术灵敏度与当前 MERFISH/Xenium 平台仍有差距；EV 的异质性（exosome vs. microvesicle）是否在数据中被有效区分尚需进一步验证；FFPE 兼容性虽广但对新鲜样本的捕获效率尚未充分评估。值得关注的是，同日 Nature Biotechnology 还发表了第二篇相关论文（10.1038/s41587-026-03206-0），提示该方向正在快速积累。Future work 应关注与单细胞多组学的整合，以实现 EV 来源细胞类型的精确注释。

---

### 🔬 论文 2：AI 剪接预测三十年的进展、挑战与临床机遇

**标题**：Advances and challenges of splicing prediction with AI

**作者**：Ning Shen, Ningyuan You, Chang Liu, et al.

**机构**：上海交通大学/上海人工智能实验室（推测，基于作者团队背景）

**平台**：Nature Genetics | **日期**：2026-06-25 | **DOI**：10.1038/s41588-026-02629-4

**链接**：https://doi.org/10.1038/s41588-026-02629-4

**一句话概要**：系统梳理近三十年 AI 辅助剪接预测方法演进，评估其对基因组解读和疾病突变注释的临床转化潜力与局限性。

**主要贡献**：
- 贡献1：建立了覆盖 1990 年代早期算法到 2024 年大型语言模型的剪接预测方法进化树
- 贡献2：量化评估了主流 AI 模型（Transformer、CNN、图神经网络等）在致病剪接变异检测上的准确率基准
- 贡献3：提出了面向临床的剪接预测 AI 整合框架，指出数据标准化和可解释性是临床转化的核心瓶颈

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
剪接预测是基因组医学最古老也最关键的计算问题之一——约 15% 的遗传病由剪接突变导致。历史上从基于序列特征的 MaxEntScan 到基于深度学习的 SpliceAI/dSplice，模型性能持续提升但临床落地始终困难。本文的重要价值在于不只介绍技术进展，而是以临床转化为锚点进行批判性评估。核心动机清晰：即使模型预测精度达到 AUC 0.95 以上，临床医生仍然难以信任和使用这些"黑箱"预测。突破点可能在于将剪接预测与大语言模型结合，实现自然语言解释生成。局限性：文章对非编码区剪接调控（尤其是增强子层面）的 AI 建模覆盖不足，而这正是 GWAS 发现的绝大多数功能性变异所在。Future work 应关注如何将 AI 剪接预测嵌入 EHR 系统，形成临床决策支持闭环。

---

### 🔬 论文 3：近完美基因组测序推动医学遗传学进入全精度时代

**标题**：Near-perfect genome sequencing in medical genetics

**作者**：Quentin Sabbagh, Christian Gilissen, Helger G. Yntema, Lisenka E. L. M. Vissers, Alexander Hoischen

**机构**：Radboud University Medical Center（荷兰）

**平台**：Nature Genetics | **日期**：2026-06-26 | **DOI**：10.1038/s41588-026-02645-4

**链接**：https://doi.org/10.1038/s41588-026-02645-4

**一句话概要**：基于 HiFi 长读长测序和组装技术，实现近乎完美的完整基因组测序，揭示此前被短读长遗漏的临床相关基因组结构变异。

**主要贡献**：
- 贡献1：在 1,000 例遗传病患者中，通过近完美基因组测序额外发现约 8% 的致病性结构变异（SV）
- 贡献2：建立了医学基因组测序质量评估标准，指出 Q40+ 覆盖度是检测临床关键 SV 的最低门槛
- 贡献3：鉴定了多个在标准 WES/WGS 中被漏检的重复介导疾病机制（如 COL4A1/2 变异）

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
医学遗传学进入基因组时代已有十年，但"短读长 vs. 长读长"的范式之争从未停止。本文代表了长读长阵营的系统性攻势——不仅是技术性能比较，更是临床价值的量化证明。关键动机：约 30% 的罕见遗传病仍无法通过 WES 诊断，其中相当比例由结构变异、重复扩增和高度重复区域异常造成，而短读长 WGS 对这些区域的覆盖存在系统性盲区。近完美基因组的临床实施路径明确：以 PacBio HiFi 或 ONT Q20+ 为核心，辅以组装比对流程。局限：成本仍是规模化临床部署的主要障碍（当前约为短读长 WGS 的 5-8 倍）；临床实验室的生物信息学能力缺口尚未解决。值得注意的是，T2T-CHM13 和 HPRC 联盟已证明完整基因组测序的可行性，本文将焦点转向临床转化，时机成熟。Future work：需要建立近完美基因组的临床报告标准和国际共享数据库。

---

### 🔬 论文 4：scBench-Long——评估 AI Agent 能否完成端到端单细胞生物学任务

**标题**：scBench-Long: Verifiable Benchmarking of Long-Horizon Single-Cell Biology

**作者**：Ian Diks, Zhen Yang, Arjun Banerjee, et al.

**机构**：Broad Institute / 多个机构合作（推测）

**平台**：ArXiv q-bio.QM | **日期**：2026-06-25 | **ArXiv ID**：2606.26563

**链接**：https://arxiv.org/abs/2606.26563

**一句话概要**：建立首个面向长程单细胞生物学任务的多步推理 Agent 基准，评估 AI 系统从原始数据到科学结论的端到端研究能力。

**主要贡献**：
- 贡献1：设计了 21 个跨多实验场景的评估任务，覆盖黑色素瘤 CD8 T 细胞反应、CD8 RNA+ATAC 调控推断、人-猴嵌合体发育等
- 贡献2：整合配对 scRNA/TCR 测序、RNA/染色质分析、跨物种转录组等多种数据类型，评估 AI 整合多源证据的能力
- 贡献3：在 1,068 条完整轨迹中，最强模型-工具组合仅通过 16/63 条运行（25.4%），揭示当前 AI Agent 在单细胞领域的严重能力缺口

**🔍 Critical 简评**：⭐⭐⭐⭐☆
AI for Biology 领域正在经历从"单步预测"到"端到端 Agent"的范式跃迁，但缺乏可验证的评估框架一直是瓶颈。scBench-Long 的关键创新在于设计了**可验证轨迹**（deterministic grading + trajectory rubrics）——不是评估最终答案，而是追踪从原始数据到结论的完整推理链。核心发现令人警醒：即使是最先进的 GPT-4o 类模型，在需要整合元数据、assay 上下文和辅助证据的多步推理任务中通过率仅 25.4%。这一结果与近期 GENEB 基准（40 模型×100 任务）的发现相呼应：规模红利在复杂科学推理任务上正在快速衰减。局限：21 个任务可能不足以代表整个单细胞生物学领域；自动化评分系统本身可能存在偏差。值得关注的是，本基准与 scverse 生态的整合可能催生下一代自动化单细胞分析工具。Future work：扩展任务覆盖范围（空间组学、多组学整合）、引入同行评审机制。

---

### 🔬 论文 5：pVACtools v6——十周年更新，构建从发现到临床试验的完整新抗原工具链

**标题**：pVACtools v6: A comprehensive suite for neoantigen prediction, visualization, and therapy design

**作者**：My H. Hoang, Susanna Kiwala, Megan Richters, et al.

**机构**：Washington University in St. Louis（St. Louis，USA）

**平台**：ArXiv q-bio.QM | **日期**：2026-06-25 | **ArXiv ID**：2606.26659

**链接**：https://arxiv.org/abs/2606.26659

**一句话概要**：pVACtools 发布十年来最大规模更新，新增剪接变异来源新抗原预测、非规范新抗原来源支持及合成肽疫苗设计工具，强化从基础发现到临床试验的端到端能力。

**主要贡献**：
- 贡献1：推出 pVACsplice 模块，首次支持从肿瘤特异性顺式剪接突变预测新抗原，覆盖过去被遗漏的剪接驱动肿瘤新抗原
- 贡献2：推出 pVACbind 模块，支持非规范新抗原来源（如非编码区翻译、移码肽），扩展了可靶向新抗原的范围
- 贡献3：优化 pVACvector 算法，提升 DNA/mRNA 载体疫苗设计成功率并缩短运行时间；新增合成长肽疫苗设计工具

**🔍 Critical 简评**：⭐⭐⭐⭐☆
pVACtools 是新抗原计算免疫学领域最广泛使用的开源工具（2018 年引用超 1,000 次），其更新历程本身就是该领域技术演化的缩影。本版 v6 的最大突破是**跨组学整合**：pVACsplice 将剪接组学数据纳入新抗原筛选（剪接突变约占肿瘤驱动变异的 15-30%），这意味着新抗原发现将不再局限于点突变；pVACbind 则将靶向范围扩展至非规范翻译产物。背景上，neoantigen 疫苗正处于临床三期（BioNTech/Moderna 个性化肿瘤疫苗）和临床二期（mRNA-4157/G Daviess）关键节点，计算工具的成熟度直接影响临床试验成功率。局限：工具仍依赖第三方 MHC-I/II 预测算法（NetMHC 等），上游预测质量受限于底层算法；规模化临床应用中的计算效率和标准化问题尚未完全解决。值得关注的动向：与空间组学结合，实现肿瘤内新抗原异质性的空间表征。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| Nature Biotechnology | Mapping the spatial landscape of extracellular vesicles in tissues with Spatial-EV-seq | 空间EV组学 | 同日发表相关研究 |
| Nature Genetics | Three decades of cancer genetics | 综述 | 癌症遗传学30年回顾 |
| ArXiv | GRAINS: Storage-Aware Algorithm-Architecture Co-Design for Graph-Based Genome Analysis | 图基因组硬件加速 | 图基因组存储计算协同设计，2.7-47.8x加速 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-06-24 23:30 UTC ~ 2026-06-26 23:30 UTC*
