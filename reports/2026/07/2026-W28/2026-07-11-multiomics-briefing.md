# 🧬 多组学研究简报
**2026年7月11日（周六）| 近48小时精选**

> 搜索范围：2026-07-09 ~ 2026-07-11 | 数据源：bioRxiv, medRxiv, ArXiv q-bio

---

## 📊 整体趋势评述

本期简报聚焦三项技术突破与两项疾病多组学解析：①体内空间转录组学突破传统活检局限，实现无创全器官分子图谱；②大规模前瞻性泛癌磷酸化蛋白质组学将蛋白质后修饰层面纳入精准医学；③吸烟相关AT2细胞突变持续性从基因组层面解释戒烟后肺腺癌风险不降之谜。AI+生物学方向DrugGen 2引入疾病语境感知生成模型，为多组学驱动的药物发现提供新范式。

---

## 📑 精选论文

### 🔬 论文 1：ENDO-Genome — 体内无创空间转录组学

**标题**：In Vivo Spatial Transcriptomics for Bleeding-free Profiling Human Internal Organs

**作者**：Sun, H.; Guo, F.; Zhao, X.; Wan, Y.; Zhang, X.; et al.

**机构**：推测为国内团队（Sun, H. / Guo, F.; 深圳/广州机构）

**平台**：medRxiv | **日期**：2026-07-09 | **DOI**：10.64898/2026.07.06.26357355

**链接**：https://doi.org/10.64898/2026.07.06.26357355

**一句话概要**：开发 ENDO-Genome 系统，通过微创体内采样实现活体器官空间转录组分析，突破传统空间组学临床应用壁垒。

**主要贡献**：
- 贡献1：设计了体内微创采样+空间转录组整合系统 ENDO-Genome，实现无需切除活检即可获取器官级空间分子图谱
- 贡献2：覆盖多个人体内部器官，填补了体内空间转录组学的技术空白
- 贡献3：为临床手术导航和术中分子诊断提供了全新工具链

**🔍 Critical 简评**：⭐⭐⭐⭐☆
空间转录组学自2018年 Visium 商业化以来快速发展，但传统方法仍依赖新鲜组织切片，无法在体内直接采样。本工作将取样环节微创化，将空间转录组学推向体内场景，这是技术路径上的关键一步。其 Motivation 明确：临床医生亟需实时分子信息但无法做切除性活检。突破点在于整合了体内采样与空间组学文库构建两个模块。然而需要关注：体内环境（血液、温度、pH）对 RNA 完整性的影响、采样量与检测深度的权衡，以及临床监管路径。Future work：与腔镜手术集成，在更大队列中验证临床决策辅助价值。

---

### 🔬 论文 2：大规模前瞻性泛癌磷酸化蛋白质组学

**标题**：Prospective pan-cancer phosphoproteomics at clinical scale extends therapeutic options in precision oncology

**作者**：Schneider, A.; Wortmann, J.; Bang Jensen, C.; et al.（共47位）

**机构**：DKFZ（德国癌症研究中心）/ NCT / DKTK MASTER 团队

**平台**：bioRxiv | **日期**：2026-07-09 | **DOI**：10.64898/2026.07.08.737171

**链接**：https://doi.org/10.64898/2026.07.08.737171

**一句话概要**：1,998例前瞻性泛癌样本蛋白质组+磷酸化蛋白质组分析，构建 TOPAS 评分体系将蛋白质信号通路活性引入精准医学决策。

**主要贡献**：
- 贡献1：完成迄今最大规模前瞻性泛癌磷酸化蛋白质组研究（1,998例，涵盖成人/儿童罕见或晚期癌症）
- 贡献2：开发 TOPAS（Tumor Proteome Activity Status）评分，量化46种临床相关激酶活性状态
- 贡献3：揭示蛋白质后修饰层面（磷酸化）相较基因组层面可发现额外可操作靶点，拓展了分子肿瘤委员会（MTB）的治疗选项

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
精准医学的核心瓶颈在于基因组学无法捕捉蛋白水平的激活状态。NGS时代我们学会了看"蓝图"（DNA），但真正执行功能的"工人"是蛋白质。本研究以临床可及的前瞻性研究设计，填补了蛋白质层面实时活性监测的证据空白。TOPAS评分的临床实用性是关键创新——将复杂的磷酸化数据转化为可解释的临床指标。局限：1,998例虽已是同类最大规模，但泛癌异质性意味着亚组样本量仍有限；磷酸化动态变化（采样时间、治疗节点）需标准化。Future work：与基因组联合建模，构建真正的多组学MTB决策支持系统。

---

### 🔬 论文 3：吸烟如何"锁定"肺癌风险——AT2细胞基因组证据

**标题**：Persistence of tobacco-mutated alveolar progenitor cells after smoking cessation mirrors long term risk of lung adenocarcinoma

**作者**：Przybilla, M. J.; Ammar, A.; Selway-Clarke, H.; Lawson, A. R. J.; Chapman, M. S.; Janes, S. M.; et al.

**机构**：Wellcome Sanger Institute / UCL Cancer Institute / University College London

**平台**：bioRxiv | **日期**：2026-07-09 | **DOI**：10.64898/2026.07.06.736766

**链接**：https://doi.org/10.64898/2026.07.06.736766

**一句话概要**：分析806个AT2细胞基因组，发现吸烟诱导的突变在戒烟后仍持续存在于肺泡祖细胞中，从克隆演化角度解释戒烟后肺腺癌风险不降之谜。

**主要贡献**：
- 贡献1：对806个AT2细胞进行全基因组测序，系统解析吸烟对肺泡祖细胞突变累积的影响
- 贡献2：发现戒烟后AT2细胞突变负荷持续升高，而非随戒烟时间下降，提示已建立的突变克隆不可逆
- 贡献3：揭示鳞癌风险骤降而腺癌风险持续的原因是两类癌细胞起源于不同突变累积轨迹的细胞类型

**🔍 Critical 简评**：⭐⭐⭐⭐☆
这一发现回答了一个重要的流行病学悖论：戒烟显著降低鳞状细胞肺癌风险，但肺腺癌风险几乎不变。传统解释停留在"吸烟时间越长风险越高"，本研究从单细胞基因组水平揭示了机制——AT2细胞（肺腺癌起源细胞）在吸烟期间积累突变，戒烟后这些克隆不仅不消失，反而继续演化。历史/现状：吸烟致突变的研究已有很多，但此前缺乏直接解析AT2细胞基因组层面的工作。突破：806个AT2的WGS是迄今最大规模的肺上皮干细胞基因组测序。局限：806个细胞覆盖的个体数量和肺区域有限；缺乏纵向采样验证克隆动态。Future work：纵向研究追踪戒烟前后同一患者的AT2克隆演化。

---

### 🔬 论文 4：首个韩国人泛基因组参考

**标题**：A Korean pangenome reference of 14 healthy individuals supports structural variant analysis in disease genomes

**作者**：Shin, D.-H.; Jeon, J.; Joe, S.; Bhak, J.; et al.

**机构**：Korean Genomics Institute (KOGIC) / 大邱庆北科学技术院（DGIST）/ Korean Reference Genome (KOREF) 团队

**平台**：medRxiv | **日期**：2026-07-09 | **DOI**：10.64898/2026.07.06.26357367

**链接**：https://doi.org/10.64898/2026.07.06.26357367

**一句话概要**：构建首个基于14名健康韩国人的图泛基因组参考（K-PanRef），包含13个高质量韩国人双倍体基因组组装，支持疾病基因组结构变异分析。

**主要贡献**：
- 贡献1：发布首个韩国人图泛基因组参考（K-PanRef），平均组装质量 QV≈62.0，含首个完整韩国人参考基因组 KOREF1-G-TTAGGA
- 贡献2：与现有高加索人为主的参考基因组比较，发现大量韩国人群特有的结构变异（SV）
- 贡献3：为韩国/东亚人群疾病基因组学提供本土化基准，改善了结构变异检测的灵敏度和准确性

**🔍 Critical 简评**：⭐⭐⭐⭐☆
泛基因组（pangenome）概念自HPRC（人类泛基因组参考联盟）2022年发表首个参考以来，已认识到单一参考基因组无法覆盖全球人群遗传多样性。HPRC的26个基因组以高加索和非洲裔为主，本研究填补了东北亚人群（Korean）代表不足的缺口。其 Motivation 清晰：韩国人群的基因组医学需要反映自身遗传结构的参考。突破在于将14个高质量韩国人基因组整合为图参考，并发现大量现有参考遗漏的SV。局限：14人样本量仍有限，罕见变异覆盖不足；需与HPRC泛基因组互操作性（interoperability）验证。Future work：扩展至更大规模韩国人群队列，纳入疾病队列与癌症基因组。

---

### 🔬 论文 5：疾病语境感知生成式AI实现靶向药物设计

**标题**：DrugGen 2: A disease-aware language model for enhancing drug discovery

**作者**：Motahharynia, A.; Ghaffarzadeh-Esfahani, M.; Sheikholeslami, M.; Mazrouei, N.; Irajpour, M.

**机构**：（作者机构信息需补充）

**平台**：ArXiv | **日期**：2026-07-09 | **DOI**：10.64898/ArXiv 2607.08404

**链接**：https://arxiv.org/abs/2607.08404

**一句话概要**：DrugGen 2 引入疾病本体与靶点序列双条件约束，基于 GPT-2 微调的生成式框架从已有药物数据中学习靶点-疾病关联，超越仅基于靶点或分子属性的生成模型。

**主要贡献**：
- 贡献1：将疾病本体（disease ontology）作为生成条件引入分子设计，实现"靶点+疾病语境"双条件生成
- 贡献2：采用监督微调（SFT）+群体相对策略优化（GRPO）强化学习的二阶段策略，平衡化学有效性、新颖性和多样性
- 贡献3：在多个任务中验证了疾病语境感知对生成药物临床相关性的提升作用

**🔍 Critical 简评**：⭐⭐⭐⭐☆
传统生成式药物设计模型（如 DeepChem、VAE-based 方法）以靶点结构或一般分子属性为条件，忽略了疾病生物学语境对靶点行为和治疗结局的影响。本工作的核心动机在于引入疾病本体作为额外条件，使生成的分子更贴合临床治疗需求。技术路线：GPT-2微调 + GRPO强化学习是合理的工程选择，既利用了预训练语言模型的能力，又通过RL优化了多目标平衡。局限：仅在已有批准药物数据上验证，对全新靶点/罕见病的泛化能力待验证；分子-疾病-靶点三元组的数据质量和覆盖度直接影响模型上限；缺乏湿实验验证。Future work：在罕见病和癌症新靶点上验证生成分子的实验活性，探索多模态（分子+基因表达+疾病表型）联合条件生成。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | Schizophrenia-associated DNA methylation differences in the cortex are neuron-specific | 表观遗传/EWAS/神经精神疾病 | FANS分离神经/胶质细胞，SCZ相关甲基化差异具有细胞类型特异性 |
| medRxiv | Untargeted plasma proteomics and clinical phenotypes in adolescent depression | 蛋白质组/精神疾病 | 青少年抑郁症血浆蛋白质组学，识别生物亚型 |
| ArXiv | Causal ASCEND: Scalable Two-tier Causal Discovery on High Dimensional Multi-omics Data | 因果发现/多组学 | 利用层级结构实现基因组尺度因果发现（作者信息不完整） |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-07-09 00:00 UTC ~ 2026-07-11 23:59 UTC*
