# 🧬 多组学研究简报
**2026年10月31日（周六）| 近48小时精选**

> 检索窗口：2026-10-29 07:38 HKT ~ 2026-10-31 07:38 HKT  
> 数据源：Nature Portfolio、arXiv q-bio.GN/q-bio.QM/q-bio.CB、bioRxiv API、medRxiv API  
> Nature Portfolio 在窗口内未发现同时满足主题相关、未发送条件的新论文。以下预印本尚未经同行评审；所有论文均与本地去重状态核对。

---

## 📊 整体趋势评述

本期研究从单一模态描述转向把细胞状态、代谢或染色质信号与组织空间背景共同建模，感染和退变研究都在尝试把跨模态关联收敛为可检验的候选机制。方法方面，逐分子空间解码与可编排的临床基因组 AI 代理拓展了分析尺度和工作流，但其稳健性仍需独立队列、前瞻性评估及功能实验支撑。

---

## 📑 精选论文

### 🔬 论文 1：临床基因组解释的技能化代理

**标题**：[Advancing Clinical Genomic Analysis with a Skill-Centred Agent](https://arxiv.org/abs/2610.40556)  
**作者**：Qiaoyu Zheng et al.（arXiv 页面列出 13 位作者）  
**机构**：arXiv 条目未提供作者机构，未核实  
**平台**：arXiv（cs.AI；q-bio.GN）| **日期**：2026-10-29 17:40:24 UTC | **DOI**：10.48550/arXiv.2610.40556  
**链接**：[arXiv 摘要页](https://arxiv.org/abs/2610.40556) | [DOI](https://doi.org/10.48550/arXiv.2610.40556)

**一句话概要**：以可执行技能编排大模型，辅助临床基因组解释。

**主要贡献**：
- 提出 ClinGeX，以 105 项可执行技能配合任务检索与依赖感知编排，支持临床变异分析。
- 在 223 个时间留出测试案例中，任务级宏平均一致率为 71.7%，高于摘要所列最强对照的 45.7%。
- 在 45 位临床基因组专业人员参与的平衡人机协作实验中，报告解释一致率提高、解读时间缩短；另提供 11 位专业人员、96 次自选分析的探索性真实场景反馈。

**🔍 Critical 简评**：临床基因组解读需要整合持续更新的指南、数据库与计算证据，人工流程的可扩展性有限。该工作把领域技能显式化，并同时报告基准测试和人机协作结果，较单纯展示模型输出更接近实际工作流。摘要中的真实场景评估规模小且为自选、非干预观察，尚不足以说明常规部署后的净获益或错误风险。下一步应在多中心前瞻性场景中审计错误类型、临床影响及知识库和模型更新后的性能漂移；目前为预印本。

---

### 🔬 论文 2：肺炎克雷伯菌感染的跨组学宿主反应

**标题**：[Integrative multi-omics decoding of the host response to Klebsiella pneumoniae infection reveals an itaconate-centred metabolic-immune axis and a spatially organised inflammatory programme](https://www.biorxiv.org/content/10.64898/2026.10.29.762801v1)  
**作者**：Y. Zhao et al.（通讯作者：Xiongxiong Lu）  
**机构**：Ruijin Hospital, Shanghai Jiao Tong University School of Medicine  
**平台**：bioRxiv | **日期**：2026-10-30 | **DOI**：10.64898/2026.10.29.762801  
**链接**：[bioRxiv 论文页](https://www.biorxiv.org/content/10.64898/2026.10.29.762801v1) | [DOI](https://doi.org/10.64898/2026.10.29.762801)

**一句话概要**：联合多组学解析肺炎克雷伯菌感染的代谢免疫与空间反应。

**主要贡献**：
- 整合 16 个公开数据集，涵盖 bulk/宿主-病原 RNA-seq、单细胞 RNA-seq、代谢组和 Visium 空间转录组。
- 将中性粒细胞炎症状态与 itaconate 等代谢变化联系起来，并描绘感染组织内的空间差异。
- 报告十基因宿主反应分类器在两个独立外部队列中的 AUC 为 0.884–0.912。

**🔍 Critical 简评**：既有感染组学研究往往分别描述转录、代谢或组织定位，难以串联宿主反应的不同层次。该分析的主要推进是把公开多模态证据放在同一框架中，并提出可由实验检验的 itaconate-免疫轴和空间生态位。跨研究数据的样本来源、模型和测量流程不一，可能影响整合结果；分类器表现也不能单独证明候选机制具有因果作用。后续应在前瞻性人群样本中复现空间和代谢信号，并通过扰动实验检验 itaconate 相关通路。

---

### 🔬 论文 3：骨关节炎软骨下骨的单核多组学图谱

**标题**：[Single-nucleus multiome profiling reveals osteocyte-centered remodeling of human subchondral bone across osteoarthritis severity](https://www.biorxiv.org/content/10.64898/2026.10.29.762653v1)  
**作者**：Y. Uchida et al.（通讯作者：Martin Lotz）  
**机构**：The Scripps Research Institute  
**平台**：bioRxiv | **日期**：2026-10-30 | **DOI**：10.64898/2026.10.29.762653  
**链接**：[bioRxiv 论文页](https://www.biorxiv.org/content/10.64898/2026.10.29.762653v1) | [DOI](https://doi.org/10.64898/2026.10.29.762653)

**一句话概要**：单核多组学揭示骨关节炎软骨下骨的骨细胞重塑。

**主要贡献**：
- 对 89 个膝样本进行 bulk RNA-seq，并对 16 位供者开展单核基因表达与染色质可及性联合分析，纳入难以获取的骨细胞。
- 在 61,570 个细胞核中解析 26 种细胞状态，并报告骨祖细胞、骨细胞比例及骨细胞 SMAD2/3 motif 活性随疾病严重度变化。
- 提出软骨-骨交界处软骨细胞 FN1 信号可能参与骨细胞 TGF-β/SMAD2/3 相关重塑。

**🔍 Critical 简评**：骨细胞嵌于矿化基质中，长期限制了对人类软骨下骨细胞组成和调控状态的单细胞研究。该研究通过机械分离细胞核获得骨细胞图谱，并将转录变化与染色质 motif 活性结合；预先设定假设并报告多重检验校正，也增强了分析的可解释性。多组学样本仅 16 位供者，且横断面关联和推断的细胞间信号不能确认 FN1 的因果作用。后续需扩大独立人群，并通过空间定位及细胞扰动验证软骨-骨通讯链条。

---

### 🔬 论文 4：逐分子推断空间转录程序

**标题**：[Molecule-resolved inference reveals the spatial organization of transcriptional programs](https://www.biorxiv.org/content/10.64898/2026.10.29.762960v1)  
**作者**：Y. Si et al.（通讯作者：Hyun Min Kang）  
**机构**：University of Michigan, Ann Arbor  
**平台**：bioRxiv | **日期**：2026-10-30 | **DOI**：10.64898/2026.10.29.762960  
**链接**：[bioRxiv 论文页](https://www.biorxiv.org/content/10.64898/2026.10.29.762960v1) | [DOI](https://doi.org/10.64898/2026.10.29.762960)

**一句话概要**：从单个 RNA 分子的空间上下文推断转录程序。

**主要贡献**：
- 提出 FICTURE2，直接为单个空间 RNA 分子推断其所属转录程序，不要求先做细胞分割或空间分箱。
- 在统一框架下表征从毫米级连续变化到微米级亚细胞定位的空间模式。
- 摘要报告其速度比替代方法快数个数量级，并支持无监督及参考引导分析。

**🔍 Critical 简评**：空间转录组常先把分子聚合到细胞或网格中，这可能掩盖亚细胞尺度的表达差异。FICTURE2 将分析单位下沉到单分子，并以空间分布组织转录程序，为同时观察细胞身份和局部功能状态提供了方法学路线。摘要没有给出速度比较的具体基准、误差校准或跨平台失败边界，因此“快数个数量级”仍需结合完整方法和独立复现解读。未来应系统评估不同测序分辨率下的程序稳定性、置信度及与原位实验的对应关系。

---

### 🔬 论文 5：免疫治疗后的淋巴细胞稳定性与线粒体遗传背景

**标题**：[Post-ICB Lymphocyte Stability Following Immune Checkpoint Blockade Is Coupled to Mitochondrial Haplotype and Clinical Outcome in Advanced Melanoma](https://www.medrxiv.org/content/10.64898/2026.10.30.26366523v1)  
**作者**：S. Sun et al.（通讯作者：Benjamin P. Fairfax）  
**机构**：University of Oxford  
**平台**：medRxiv | **日期**：2026-10-30 | **DOI**：10.64898/2026.10.30.26366523  
**链接**：[medRxiv 论文页](https://www.medrxiv.org/content/10.64898/2026.10.30.26366523v1) | [DOI](https://doi.org/10.64898/2026.10.30.26366523)  
**核验说明**：题名、作者、日期、机构和 DOI 与 medRxiv API 记录一致；medRxiv 落地页在本次访问中触发反自动化验证，未能独立读取页面正文。

**一句话概要**：关联免疫治疗后淋巴细胞变化、线粒体单倍型与黑色素瘤结局。

**主要贡献**：
- 将首周期免疫检查点阻断后外周淋巴细胞数量保持情况定义为稳定性指标，并报告其与转移性黑色素瘤总生存相关。
- 结合 T 细胞代谢分析、转录组和线粒体单倍型，提出 haplogroup T 与淋巴细胞不稳定及较差结局相关。
- 配对单细胞 RNA-seq 结果显示相关患者的 CD8⁺ T 细胞状态差异，包括较少的 progenitor-exhausted 细胞及较低克隆持续性。

**🔍 Critical 简评**：免疫治疗早期、易获取的反应指标具有临床吸引力，而遗传背景可能解释患者间免疫细胞反应差异。该研究把外周血计数、线粒体代谢、单细胞状态与结局联系起来，提出了可进一步验证的临床分层假设。现有摘要呈现的是观察性关联和中介分析，不能证明线粒体单倍型导致治疗反应或生存差异；所述 haplogroup T 频率也提示人群背景可能影响可推广性。需要在独立、多祖源前瞻性队列中预注册阈值并评估其相对于现有临床指标的增益。

---

*检索窗口：2026-10-28 23:38 UTC ~ 2026-10-30 23:38 UTC。arXiv 日期/版本据 arXiv API 与摘要页核验；bioRxiv 和 medRxiv 分别据各自平台 API 核验。*  
*Generated by multi-omics-briefing v1.7.0*
