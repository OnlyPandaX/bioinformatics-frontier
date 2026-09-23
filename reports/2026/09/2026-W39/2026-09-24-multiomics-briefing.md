# 🧬 多组学研究简报
**2026年9月24日（周四）| 近48小时精选**

> 搜索范围：2026-09-22 ~ 2026-09-24 | 数据源：Nature, bioRxiv, medRxiv

---

## 📊 整体趋势评述

本期由**人群规模单细胞图谱**主导：PsychAD 联盟在 Nature Genetics / Nature / Nature Medicine 密集发表三篇姊妹论文，以百万级核、上千供体的前额叶皮层数据，把疾病遗传学从"组织平均"推进到"细胞类型与细胞状态"分辨率，并用图神经网络直接刻画 AD 表型相关细胞。与这一"深"（更精细的细胞层级）相呼应的是测量模态的**横向扩张**——空间脂质组学把小鼠脑映射到微米级"lipizone"，单细胞蛋白质组学则把通量推到每天近 300 个单细胞。共同指向同一个判断：多组学正从"测得多"转向"测得到单个细胞、且能与遗传变异挂钩"。

---

## 📑 精选论文

### 🔬 论文 1：前额叶皮层的细胞类型特异性遗传调控图谱

**标题**：Single-nucleus atlas of cell-type specific genetic regulation in the human brain

**作者**：Biao Zeng, Hui Yang, Prashant N. M., Sanan Venkatesh, Deepika Mathur, et al.
**机构**：Icahn School of Medicine at Mount Sinai（PsychAD Consortium）
**平台**：Nature Genetics | **日期**：2026-09-23 | **DOI**：10.1038/s41588-026-02733-5
**链接**：https://doi.org/10.1038/s41588-026-02733-5

**一句话概要**：以 560 万个细胞核、1384 名多祖先供体绘制前额叶皮层的细胞类型特异性基因调控图谱。

**主要贡献**：
- 发现：构建覆盖 8 大细胞类、27 个亚类的单核多祖先调控图谱，鉴定 14,258 个基因的遗传调控效应，其中 981 个在"类"层级、857 个在"亚类"层级表现出细胞类型特异性。
- 揭示：调控变异与疾病性状的共定位在细胞层级暴露出阿尔茨海默病、精神分裂症等的新候选基因，而这些信号在 bulk 组织分析中不可见。
- 提出：单核分辨率的动态遗传调控分析，将 eQTL 从静态组织平均扩展为细胞状态依赖的调控解读。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
细胞类型特异性 eQTL 长期受限于样本量：早期脑 eQTL 研究（如 ROSMAP）虽做到组织层级，却难以回答"信号来自哪种细胞"。本文用 560 万核、1384 名多祖先供体的规模，把这一问题在产品层面解决，且样本多样性是多数同类研究未覆盖的。突破点在于"多分辨率"设计——同时给出类层级的稳健信号与亚类层级的特异信号，并以此挽救 bulk 分析漏掉的疾病共定位。局限在于结论仍以相关性为主，细胞类型特异性调控与真实因果基因之间还隔着功能验证；此外前额叶单一脑区限制了向其他脑区的外推。值得关注的是该图谱与同批 Nature / Nature Medicine 论文的数据互操作，未来若能将细胞特异性调控与蛋白/表型层级打通，会成为脑疾病靶点发现的公共底座。

---

### 🔬 论文 2：跨脑疾病转录组脆弱性的单细胞图谱

**标题**：Single-cell atlas of transcriptomic vulnerability across brain disorders

**作者**：Donghoon Lee, Mikaela Koutrouli, Nicolas Y. Masse, Gabriel E. Hoffman, et al.
**机构**：Icahn School of Medicine at Mount Sinai（PsychAD Consortium）
**平台**：Nature（Vol. 657, pp. 988–1002）| **日期**：2026-09-23 | **DOI**：10.1038/s41586-025-09573-z
**链接**：https://doi.org/10.1038/s41586-025-09573-z

**一句话概要**：整合 1494 名供体、630 万核，刻画八种常见脑疾病在前额叶皮层的细胞脆弱性。

**主要贡献**：
- 发现：以 1494 名独立供体、逾 630 万个细胞核构建背外侧前额叶皮层的人群尺度单细胞转录组图谱，队列涵盖正常对照与 AD、弥漫性路易体病、血管性痴呆、帕金森病、tau 病等八类常见复杂脑病。
- 揭示：在同一坐标系下比较不同疾病的转录组脆弱性，直接把"哪种细胞在哪种病中先失稳"变成可检索的图谱问题。
- 提出：以人群尺度单细胞数据作为脑疾病病因学比较分析的统一框架。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
脑疾病的转录组研究长期碎片化：每篇论文一个队列、一种疾病、一套处理流程，跨病比较几乎无从谈起。本文的价值首先在于"同一把尺子"——同一脑区、同一处理与整合流程覆盖八种疾病，使脆弱性差异具备可比性，而 1494 名供体的规模也让罕见细胞类型的统计更可信。突破点是人群尺度 + 多疾病设计的组合，这在脑科学里此前没有先例。局限是仍为关联性图谱，疾病标签与死后病理的对应、以及治疗/共病等混杂因素难以完全剥离；单脑区也限制了网络层面的推断。future work 应聚焦于把脆弱性图谱与遗传调控（姊妹论文）及蛋白/表型层级耦合，形成从"哪类细胞"到"哪个分子"的闭环。

---

### 🔬 论文 3：用图神经网络刻画 AD 表型相关细胞

**标题**：AI-based characterization of Alzheimer's disease phenotypes from population-scale single-cell data

**作者**：Chenfeng He, Athan Z. Li, Kalpana Hanthanan Arachchilage, Chirag Gupta, et al.（共同通讯：Daifeng Wang, Panos Roussos）
**机构**：University of Wisconsin–Madison & Icahn School of Medicine at Mount Sinai（PsychAD Consortium）
**平台**：Nature Medicine | **日期**：2026-09-23 | **DOI**：10.1038/s41591-025-04128-1
**链接**：https://doi.org/10.1038/s41591-025-04128-1

**一句话概要**：用图神经网络从 600 万核中打分出与 AD 表型相关的单细胞，锁定脆弱与保护性亚群。

**主要贡献**：
- 提出：Phenotype Associated Single Cell encoder（PASCode）框架，将多种统计方法集成进图神经模型，稳健地为单细胞打分表型关联。
- 发现：从 584 名具有 AD 相关表型的供体中识别出约 150 万个"表型相关细胞"（PACs），并在 27 个脑细胞亚类中优先排序出与不同 AD 表型相关的亚群及其表达基因。
- 揭示：定位到参与 AD 病理的小胶质细胞亚群、基因表达兼具神经保护/神经毒性的反应性星形胶质亚型（可能赋予认知韧性），以及认知受损供体中兴奋/抑制失衡与线粒体功能障碍的增强。

**🔍 Critical 简评**：⭐⭐⭐⭐
AD 的多组学难题不在于数据少，而在于"表型"本身高度异质——认知受损与神经精神症状走的是不同分子路线，传统病例-对照框架会把它们平均掉。本文的动机正是把"表型"下沉到单个细胞：PASCode 用集成 + 图神经的方式给每个细胞打表型关联分，思路干净且可复用于其它疾病。亮点是同时给出脆弱（小胶质、兴奋/抑制失衡、线粒体）与保护（认知韧性相关的反应性星形胶质）两侧信号，跳出了"只找坏细胞"的惯性。局限在于 PAC 是统计打分、并非因果，图神经模型的可解释性仍依赖下游人工解读，且认知韧性组的样本量偏小。future work 值得验证这些亚群能否作为分层标志物或干预靶点，并用独立队列前瞻验证。

---

### 🔬 论文 4：小鼠脑的脂质组空间架构

**标题**：The lipidomic architecture of the mouse brain

**作者**：Luca Fusar Bassini, Halima Hannah Schede, Laura Capolupo, et al.（共同通讯：Giovanni D'Angelo, Gioele La Manno）
**机构**：EPFL（洛桑联邦理工学院）
**平台**：Nature | **日期**：2026-09-23 | **DOI**：10.1038/s41586-026-11050-0
**链接**：https://doi.org/10.1038/s41586-026-11050-0

**一句话概要**：在微米尺度绘制成年小鼠脑的膜脂质空间图谱，定义与功能解剖对齐的"lipizone"。

**主要贡献**：
- 发现：跨越性别与妊娠期，构建成年小鼠脑膜脂质的微米级空间图谱，提出"lipizone（脂质区带）"概念——脂质空间异质性聚成的区域恰与功能解剖对应，且部分lipizone捕捉到远端轴突末梢而非细胞体。
- 揭示：由 lipizone 推出灰质脂质组的组织原则（与连接性、细胞构筑相关），发现白质中一条小胶质细胞（少突胶质细胞）异质性新轴，并在脉络丛与脑室壁发现生化分区。
- 提出：脂质组架构可随生理需求重塑——妊娠雌鼠白质代谢激活，皮层（尤其第 4 层）发生 lipizone 特异性重塑；数据作为公共资源发布（https://lbae-v2.epfl.ch/）。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
相比转录组和蛋白组，脂质组长期缺少"空间尺度"的参照系：质谱能测脂，但很难讲清楚"哪一层、哪一类末梢的脂质构成不同"。本文用微米级空间脂质组把脑脂质映射成与解剖对齐的 lipizone，本质上是给脂质组补上了一张可与细胞图谱对照的坐标系，这是领域缺了很久的基础设施。突破点有二：一是发现 lipizone 能标记远端轴突末梢（超越细胞体领土），二是证明了脂质架构的可塑性（妊娠期重塑）——后者把脂质从"结构组分"提升为"生理状态的读出"。局限是当前限于小鼠、且脂质注释深度受质谱覆盖率约束，部分脂质身份仍需正交验证。future work 值得把这套坐标移植到人脑与神经病理样本，检验 lipizone 在 AD、脱髓鞘等中的改变。

---

### 🔬 论文 5：多柱 nanoLC 实现高通量无标记单细胞蛋白质组学

**标题**：High-throughput label-free single-cell proteomics enabled by multicolumn NanoLC

**作者**：Chao Wang, Hsien-Jung L. Lin, Siqi Huang, Garrett D. Haynie, et al.（通讯：Ryan T. Kelly）
**机构**：Brigham Young University
**平台**：Nature Communications | **日期**：2026-09-24 | **DOI**：10.1038/s41467-026-78059-x
**链接**：https://doi.org/10.1038/s41467-026-78059-x

**一句话概要**：用多柱 nanoLC 平台把单细胞蛋白质组学通量推到每天近 300 个细胞而不牺牲深度。

**主要贡献**：
- 提出：多柱 nanoLC–MS 平台，实现 5 分钟分离窗口、约 100 nL/min 下 100% 占空比，单日可分析多达 288 个单细胞，近 1200 次连续进样保持稳定的保留时间重现性与可忽略的残留。
- 发现：单张 250 pg 酶解进样可鉴定约 5000 个蛋白，单个 HeLa 细胞平均约 4000 个蛋白（最高超过 5100），与更长梯度的前沿工作相当；累计分析超过 4000 个样本。
- 揭示：将流程应用于 783 个 LPS 处理的 RAW264.7 巨噬细胞，在均一炎症刺激下仍观察到显著的细胞间异质性。

**🔍 Critical 简评**：⭐⭐⭐⭐
单细胞蛋白质组学的核心矛盾一直是"深度 vs 通量"：常规 nanoLC 梯度长、通量低，导致多数 SCP 研究只能停留在几十到上百个细胞，做不了真正的队列。本文的工程解法——多柱并行、把占空比拉到 100%——直接把这个瓶颈打开了一个数量级（288 SPD），同时用混合物种标准证明定量准确性在长时采集下基本保持，这一点比单纯刷通量更有说服力。局限是"无标记 + 60 min 级总时长"仍限制了极稀有细胞类型与临床大队列的即时应用，且约 4000 蛋白/细胞对低丰度调控蛋白的覆盖仍有限。future work 可关注与有标记（如 plexDIA）方案的互补，以及把该通量用于临床样本的异质性/耐药研究。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | An atlas of eukaryotic centromere architecture reveals recurrent evolutionary dynamics | 基因组/着丝粒演化 | 覆盖 325 个 Darwin Tree of Life 组装，建模着丝粒架构在植物/动物中的循环转换，整理 165 物种、2300 万+卫星重复；通讯 I. Henderson（Cambridge） |
| bioRxiv | Coevolutionary mining of prokaryotic non-coding elements with a genome language model | 基因组语言模型/ncRNA | 提出 Minerva，用基因组语言模型从序列直接预测局部相互作用（碱基配对、蛋白接触、重复基序）；150 个细菌基因组中 84.3% 预测基因间碱基配对落在已知注释之外；含 B. Hie 等 |
| bioRxiv | Transcription factors read a second regulatory code in chromatin | 染色质/转录因子 | NCAP-SELEX 系统绘制 269 个人类 TF 的核小体 DNA 识别图，揭示核小体上存在区别于裸 DNA 的"第二套调控密码"，并用冷冻电镜结构解释机制（通讯 Y. Yin） |
| bioRxiv | Targeted single-nucleus sequencing of 39,800 neurons reveals extensive low-frequency somatic variants | 体细胞突变/神经退行 | Tapestri 平台对 FTLD-TDP type C 与对照的 39,800 个神经元做单核扩增子测序，揭示广泛存在的 <1% 超低频体细胞突变图景（含 R. Rademakers 等） |
| bioRxiv | A platform for deep topographic multiomic mapping of the bone marrow environment in multiple myeloma | 空间多组学/蛋白基因组学 | 空间三组学流程（LCM 基因组 + LC-MS/MS 蛋白组 + 单细胞空间转录组）经数字共配准分析骨髓瘤骨穿样本，解析亚克隆的空间生态位（通讯 S. Rao, U. Oppermann） |
| bioRxiv | Lineage-informed factor analysis reveals heritable programs of single-cell gene expression | 单细胞/谱系追踪 | 提出 scPFA，用系统发育先验沿谱系演化潜因子，从单细胞谱系追踪数据中恢复可遗传的基因表达程序（Staklinski & Siepel） |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-09-21 23:30 UTC ~ 2026-09-23 23:30 UTC*
