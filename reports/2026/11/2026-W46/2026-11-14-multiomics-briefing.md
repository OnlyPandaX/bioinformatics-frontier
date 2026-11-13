# 多组学研究简报
**2026年11月14日（星期六）| 近48小时精选**

> 检索窗口：2026-11-11 23:34 UTC ~ 2026-11-13 23:34 UTC  
> 数据源：Nature 系列、arXiv q-bio.GN/q-bio.QM/q-bio.CB、bioRxiv、medRxiv

## 整体趋势评述

本期研究呈现两条互补路线：一方面以预训练和跨模态蒸馏提升单细胞数据的可用性，并用严格扰动检验揭示蛋白语言模型的表征边界；另一方面将基因组、转录组、表观组和蛋白组连接到细胞状态或临床表型。共同趋势是从“整合更多数据”转向检验跨模态表征能否经受外部数据、功能实验和反事实扰动的验证。

## 精选论文

### 论文 1：单细胞跨模态知识迁移

**标题**：scMomer: a pretraining framework for inferring robust cellular representations from single-cell transcriptomes  
**作者**：Yuhang Liu, Quan Zou, Ran Su et al.  
**通讯作者与机构**：Ran Su（天津大学）；Leyi Wei（澳门理工大学）  
**平台**：Nature Communications | **日期**：2026-11-12 | **DOI**：10.1038/s41467-026-78811-3  
**链接**：[期刊页面](https://www.nature.com/articles/s41467-026-78811-3) | [DOI](https://doi.org/10.1038/s41467-026-78811-3)

**一句话概要**：将单细胞染色质知识迁移到仅以 RNA 为输入的细胞表征模型。

**主要贡献**：
- 提出三阶段预训练流程，先学习单模态表示，再以配对数据对齐模态，最后将 scATAC-seq 知识蒸馏到 RNA 输入的学生模型。
- 在不要求每个待分析样本都具备配对染色质数据的情况下，推断具备多模态知识的细胞表示。
- 摘要报告其在跨模态转换、细胞注释、药物反应、扰动预测和基因属性预测等任务上优于所比较的方法。

**🔍 Critical 简评**：单细胞多组学能提供互补信息，但配对模态数据的覆盖不足限制了多模态模型的实际使用。scMomer 的关键思路是把配对数据中学到的染色质知识迁移到仅有转录组的场景，因而降低了推断时对完整 multiome 测量的依赖。摘要称其在多类任务上表现较好，但未给出样本划分与跨队列泛化细节，不能据此排除数据集偏差或任务特定收益。后续应在独立平台、组织和扰动数据上检验表示稳定性，并报告不同细胞类型与批次下的性能变化。

### 论文 2：发光器官演化的比较多组学分析

**标题**：Comparative genomics analysis of luminescent and non-luminescent fireflies reveals mechanisms underlying adult light organs development  
**作者**：Xinhua Fu, Xinlei Zhu, Gang Wu  
**通讯作者与机构**：Gang Wu（华中农业大学）  
**平台**：Nature Communications | **日期**：2026-11-13 | **DOI**：10.1038/s41467-026-78505-w  
**链接**：[期刊页面](https://www.nature.com/articles/s41467-026-78505-w) | [DOI](https://doi.org/10.1038/s41467-026-78505-w)

**一句话概要**：揭示萤火虫发光器官丢失伴随基因家族收缩与调控网络重塑。

**主要贡献**：
- 构建非发光萤火虫 *Pristolycus diversecostatus* 的高质量基因组，并与发光近缘种 *Aquatica leii* 开展比较多组学分析。
- 将发光器官丢失与多个基因家族收缩及三类核心代谢模块的转录重编程联系起来。
- 通过 RNAi 验证 Laccase2 对发光器官完整性和生物发光的作用，并识别与角质层透明度相关的调控因子及 homeobox 中心调控网络。

**🔍 Critical 简评**：复杂性状的获得与丢失常通过比较基因组寻找候选变化，但单纯的跨物种关联难以区分原因与伴随结果。该研究将高质量基因组、转录层面的比较和 RNAi 功能验证结合起来，使候选调控机制不止停留在基因清单层面。摘要中的功能验证集中于 Laccase2，其他代谢模块与 homeobox 网络仍主要是机制线索；物种比较也难以完全排除谱系背景差异。后续可在更多萤火虫谱系中检验这些模块是否重复出现，并对候选调控因子开展定向扰动。

### 论文 3：蛋白语言模型的接触图不变性检验

**标题**：Protein Language Models Fail To Capture Contact Predictions Under Invariant Relabeling  
**作者**：Paarth Batra, Aryan Keluskar  
**平台**：arXiv q-bio.QM（v1；作者注明接收于 NeurIPS 2026 的 ICBINB workshop）| **日期**：2026-11-12 | **DOI**：10.48550/arXiv.2611.16881  
**链接**：[arXiv 页面](https://arxiv.org/abs/2611.16881v1) | [DOI](https://doi.org/10.48550/arXiv.2611.16881)

**一句话概要**：以氨基酸字母置换检验蛋白语言模型接触图的表征不变性。

**主要贡献**：
- 设计全局氨基酸字母双射置换，在保留比对层面统计量的同时改变模型看到的字母标签。
- 对比发现，Potts 与逆协方差估计在置换下保持不变，而 ESM-2、MSA Transformer 和 AMPLIFY 的接触图预测明显退化。
- 通过不同模型规模、Hamming 距离控制和生化分组干预，提出模型依赖规范氨基酸身份而非仅依赖共进化统计的“alphabet anchoring”解释。

**🔍 Critical 简评**：蛋白语言模型的接触图准确率常被视为其捕捉进化约束的证据，但准确率本身无法说明模型依赖了哪些信息。本文用经典统计方法应保持不变的字母置换构造诊断测试，并跨三种模型架构揭示其预测对规范字母身份敏感。该置换属于强人工扰动，结果更适合作为表征偏差的压力测试，而不能单独证明模型在自然序列任务中普遍失效。未来可用更贴近生物学、且保持结构或同源信息的干预复核这一现象，并测试其对突变效应与远缘泛化的影响。该文为预印本/会议 workshop 论文，不应等同于期刊同行评审研究。

### 论文 4：MAFB 与 MAF 协同塑造抗炎巨噬细胞状态

**标题**：MAFB and MAF cooperatively orchestrate human anti-inflammatory macrophage identity via autocrine Interleukin-10  
**作者**：Alejandro del Castillo-Buey, Israel Rios, Miriam Simon-Fuentes et al.  
**通讯作者与机构**：Angel L. Corbi（Centro de Investigaciones Biológicas, CSIC）  
**平台**：bioRxiv（v1，未经同行评审）| **日期**：2026-11-13 | **DOI**：10.64898/2026.11.11.765660  
**链接**：[bioRxiv 页面](https://www.biorxiv.org/content/10.64898/2026.11.11.765660v1) | [DOI](https://doi.org/10.64898/2026.11.11.765660)

**一句话概要**：解析 MAFB/MAF 协同建立人抗炎巨噬细胞状态的多组学机制。

**主要贡献**：
- 在人 M-CSF 诱导的单核细胞来源巨噬细胞中整合蛋白组、转录组和表观组，并发现 MAFB 与 MAF 形成染色质相关异二聚体。
- 提出 MAFB 主要锚定整体细胞身份，而 MAF 对局部转录程序进行调节；两者共同作用于 IL10 位点。
- 通过中和实验提出内源 IL-10 自分泌反馈对抗炎状态建立和维持均有必要，并报告两种转录因子对吞噬、凋亡细胞清除及 T 细胞活化的不同作用。

**🔍 Critical 简评**：巨噬细胞的抗炎状态受转录网络和细胞因子反馈共同控制，但相关因子的冗余性使各自作用难以拆分。该研究以多组学结合中和实验和功能测量，提出 MAFB 与 MAF 分工协作、并由 IL-10 自分泌回路稳定细胞状态的模型。现有摘要聚焦于体外 M-CSF 诱导的人单核细胞来源巨噬细胞，因此是否适用于组织驻留巨噬细胞或疾病微环境尚不清楚；该工作也尚未经同行评审。后续应在原代组织样本及体内模型中验证调控层级和细胞因子反馈的必要性。

### 论文 5：罕见功能变异的人类表型图谱

**标题**：The phenomic landscape of rare gain- and loss-of-function variation  
**作者**：Meltem Ece Kars, David Stein, Yiming Wu et al.  
**通讯作者与机构**：Yuval Itan（Icahn School of Medicine at Mount Sinai）  
**平台**：medRxiv（v1，未经同行评审）| **日期**：2026-11-13 | **DOI**：10.64898/2026.11.11.26367788  
**链接**：[medRxiv 页面](https://www.medrxiv.org/content/10.64898/2026.11.11.26367788v1) | [DOI](https://doi.org/10.64898/2026.11.11.26367788)

**一句话概要**：在多祖源生物库中刻画罕见功能变异与临床表型的关联。

**主要贡献**：
- 在 50,067 人的临床生物库中分析 18,214 个基因，对 1,244 项二元表型和 202 项定量性状开展罕见变异关联分析。
- 按预测的功能获得与功能丧失效应分层后，发现部分信号在合并不同功能类别时会减弱，并报告跨祖源及祖源相关关联。
- 以 MESA 蛋白组数据跟进 VNN1 功能丧失变异与 BMI 的关联，发现变异携带者循环 vanin-1 水平降低，并与身体组成及心代谢表型相关。

**🔍 Critical 简评**：传统罕见变异负荷分析常把方向相反的功能效应合并，可能掩盖基因—表型信号。本文在大规模临床表型扫描中按预测的功能获得/丧失分层，并用外部蛋白组观察为 VNN1 关联提供了分子层面的补充线索。主要限制是功能类别来自预测且临床生物库可能存在转诊与表型记录偏倚；关联和蛋白组伴随变化本身不能确立致病机制。后续需在独立、多祖源队列复现主要信号，并对重点变异开展功能实验。该文为未经同行评审的预印本，不应用作临床解释依据。

## 检索与核验说明

- Nature 系列通过 Nature 官方检索页筛选近期组学、单细胞和计算生物学研究，再逐篇核对期刊页面上的题名、作者、通讯作者、机构、发布日期和 DOI。
- arXiv 使用官方 API 查询 q-bio.GN、q-bio.QM、q-bio.CB，并按提交时间窗口筛选；本期收录论文的分类、作者、提交日、摘要和 DOI 均核对 arXiv 原始页面。
- bioRxiv 与 medRxiv 分别查询各自平台 API；排除仅在窗口内更新的旧稿件，并以平台页面、版本和 DOI 元数据核验新稿。两篇预印本均明确标注未经过同行评审。
- 按 DOI 与本地 `sent-papers.json` 去重。本期简评依据来源摘要撰写；摘要未提供的信息未作推断。检索与综合使用了 AI 辅助工具。

*Generated by multi-omics-briefing v1.7.0*  
*搜索时间窗口：2026-11-11 23:34 UTC ~ 2026-11-13 23:34 UTC*
