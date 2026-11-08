# 多组学研究简报
**2026年11月9日（周一）| 近48小时精选**

> 检索窗口：2026-11-07 07:31 HKT 至 2026-11-09 07:31 HKT（2026-11-06 23:31 UTC 至 2026-11-08 23:31 UTC）
> 数据源：Nature 系列、arXiv q-bio.GN/q-bio.QM/q-bio.CB、bioRxiv、medRxiv
> 日期精度：Nature 页面及预印本 API 公开日期为日级，未提供所有条目的精确发布时间；边界日期记录据平台日期纳入。

## 整体趋势评述

本期研究共同把分子测量放回组织、细胞谱系和生态环境中解释：单细胞双组学和空间组学分别补上谱系与组织结构信息，跨尺度 QTL 将细胞类型调控连接到蛋白质组等分子表型。微生物群体基因组学则展示了公共基因组、长读长和功能实验对耐药传播与环境适应研究的互补价值。多个工作已将关联信号推进到体外或空间验证，但因果性、代表性抽样和跨队列泛化仍是重要边界。

## 精选论文

### 1. Retrospective single cell lineage tracing with highly mutable homopolymers

**作者**：Pin-Chung Cheng et al.；通讯作者 Kun Zhang  
**机构**：Altos Labs；University of California, San Diego  
**期刊/日期**：Nature Communications，2026-11-07  
**DOI**：[10.1038/s41467-026-79104-5](https://doi.org/10.1038/s41467-026-79104-5)  
**链接**：[Nature Communications 原文](https://www.nature.com/articles/s41467-026-79104-5)

**一句话概要**：以高突变同聚物标记和甲基化读出重建单细胞谱系与细胞类型。

**主要贡献**：
- 提出 RETrace2，以高突变同聚物作为谱系标记；作者报告其信息量约为常规微卫星重复序列的两倍，并改进标记覆盖与扩增、测序误差控制。
- 在同一细胞中联合谱系追踪与稀疏甲基化读出，兼顾细胞类型识别；体外 ground-truth 模型用于验证谱系推断。
- 在 Msh2 缺失小鼠的脑、肾和肝中重建多器官谱系树，报告在微卫星不稳定背景下可达到少于五次细胞分裂的估计分辨率。

**Critical 简评（基于摘要）**：体细胞突变谱系追踪长期受标记密度、测序噪声和细胞类型读出不足限制，RETrace2 的价值在于把谱系与甲基化信息置于同一细胞测量框架。高突变同聚物提升了可用标记密度，也带来突变饱和、重复性和测序误差需要共同控制的问题。摘要中的体内演示集中于 Msh2 缺失小鼠，不能直接说明其在正常组织或其他遗传背景下具有相同分辨率。后续应在独立组织与更广泛基因型中比较谱系准确率，并评估其对长期组织更新和疾病克隆演化的适用范围。

### 2. Global population genomics of *E. coli* ST69 reveals cross-host dissemination, ecological adaptations and epidemic multidrug resistance plasmids

**作者**：Iva Sukkar et al.；通讯作者 Iva Sukkar、Adam Valcek  
**机构**：Charles University；Wageningen Bioveterinary Research  
**期刊/日期**：npj Antimicrobials and Resistance，2026-11-07  
**DOI**：[10.1038/s44259-026-00298-1](https://doi.org/10.1038/s44259-026-00298-1)  
**链接**：[Nature Portfolio 原文](https://www.nature.com/articles/s44259-026-00298-1)

**一句话概要**：整合全球基因组与长读长测序解析大肠杆菌 ST69 的宿主传播和耐药适应。

**主要贡献**：
- 将捷克 160 株 ST69 分离株与 6,747 个公开基因组联合分析，描绘其跨宿主、跨生态位的遗传分布。
- 通过长读长测序识别与耐药决定因子传播相关的 IncN pST1 和 IncF 质粒谱系，并比较人、动物及环境来源的毒力质粒特征。
- 全基因组关联分析提出与环境适应相关的基因组特征；功能实验显示一个水平获得的代谢操纵子可支持以 D-glucosaminate 作为唯一碳源生长。

**Critical 简评（基于摘要）**：ST69 的全球扩散涉及耐药质粒、毒力和生态适应，单一地区队列难以揭示其跨宿主遗传背景；本研究的公开基因组整合和长读长质粒解析扩大了比较尺度。代谢操纵子的功能实验为计算关联提供了初步机制支撑。公开基因组的地理和宿主采样并非均衡设计，网络中的近缘关系也不能单独证明直接传播方向；实验验证目前集中于单一代谢表型。未来需要标准化 One Health 监测、长读长追踪质粒传播，并在宿主相关环境中检验候选适应机制。

### 3. Multi-omics and machine learning reveal a senescence-associated lipid-metabolic macrophage phenotype driving immunosuppression and poor prognosis in colorectal cancer

**作者**：Bo Zhao et al.；通讯作者 Bo Zhao、Neng Jiang、Yubin Huang、Biqi Li  
**机构**：广西医科大学第二附属医院；广西医科大学  
**期刊/日期**：Scientific Reports，2026-11-07  
**DOI**：[10.1038/s41598-026-80104-0](https://doi.org/10.1038/s41598-026-80104-0)  
**链接**：[Scientific Reports 原文](https://www.nature.com/articles/s41598-026-80104-0)

**一句话概要**：整合多组学与单细胞数据刻画结直肠癌中的衰老相关脂代谢巨噬细胞。

**主要贡献**：
- 定义 SALM 巨噬细胞亚群，其特征涉及衰老、脂质代谢及 IL-10/STAT3 信号，并据摘要提出其与免疫抑制性微环境相关。
- 结合单细胞分析和空间多重免疫荧光，报告肿瘤前沿 p16⁺CD68⁺IL-10⁺ 细胞富集，并分析其与 T 细胞的潜在配体互作。
- 基于 SALM 特征建立预后模型；作者报告在 TCGA 与 GSE39582 合并队列的嵌套交叉验证中 AUC 为 0.972，并进行了空间及 qPCR 验证。

**Critical 简评（基于摘要）**：肿瘤相关巨噬细胞存在明显功能异质性，单细胞和空间读出有助于将代谢状态与组织位置联系起来。该研究把衰老和脂质代谢特征组合成可检验的细胞亚群，并以空间染色补充计算分析。摘要报告的高 AUC 来自合并队列内部验证，尚不能替代独立外部队列评估；配体互作和空间共定位也不足以单独证明这些细胞因果性地“驱动”免疫抑制。后续应使用独立前瞻队列验证模型校准，并通过细胞扰动实验检验 SALM 状态与治疗反应之间的因果联系。

### 4. Three-dimensional mapping of human lung fibrosis identifies spatial coupling between tissue microarchitecture and maladaptive repair states

**作者**：J. A. Bell et al.；通讯作者 Mark G. Jones  
**机构**：University of Southampton；NIHR Southampton Biomedical Research Centre  
**平台/日期/版本**：bioRxiv，2026-11-08，v1（预印本，未经同行评审）  
**DOI**：[10.64898/2026.11.05.764175](https://doi.org/10.64898/2026.11.05.764175)  
**链接**：[bioRxiv 原文](https://www.biorxiv.org/content/10.64898/2026.11.05.764175v1)

**一句话概要**：将三维组织结构与空间组学结合，解析肺纤维化修复状态的空间组织。

**主要贡献**：
- 整合 3D X-ray histology 与空间组学，构建人肺纤维化的体积多模态图谱，用于直接分析微结构与空间分子程序的关系。
- 识别肺泡-毛细血管单元崩解与早期纤维化相关，并描述周边上皮异常分化及基质重塑。
- 将局部纤维化核心描述为胶原成熟和基质稳定化的空间枢纽；图谱定义的组织状态特征在独立患者队列中与肺功能和死亡结局相关。

**Critical 简评（基于摘要）**：肺纤维化通常以二维切片和平均分子信号刻画，三维组织结构与空间组学的整合提供了更贴近组织尺度的分析视角。该研究将肺泡-毛细血管结构变化、局部细胞状态与临床结局关联，提出可供后续验证的组织状态模型。摘要支持的是空间关联和跨队列结局关联，尚未证明结构崩解会因果性地驱动所述修复状态；同时这是尚未经同行评审的预印本，作者披露了若干行业咨询或商业关系。后续可通过纵向样本和针对基质力学信号的扰动实验检验该模型，并独立复现其临床关联。

### 5. A multi-scale cell-type resolved map of trans-regulatory architecture in the aging human brain

**作者**：Xuewei Cao et al.；通讯作者 Kushal K. Dey  
**机构**：Memorial Sloan Kettering Cancer Center（通讯作者单位；研究涉及多机构及 ADSP Functional Genomics Consortium）  
**平台/日期/版本**：medRxiv，2026-11-08，v1（预印本，未经同行评审）  
**DOI**：[10.64898/2026.11.05.26367384](https://doi.org/10.64898/2026.11.05.26367384)  
**链接**：[medRxiv 原文](https://www.medrxiv.org/content/10.64898/2026.11.05.26367384v1)

**一句话概要**：以跨尺度转调控 QTL 图谱连接脑细胞类型、遗传变异与多类分子表型。

**主要贡献**：
- 提出 TransMap，将多尺度 trans-QTL 定位与多表型遗传共定位结合，并以局部共调控程序表型提升弱效应信号的发现能力。
- 在模拟中报告相较既有方法提高 9.2%–36.7% 的 trans-QTL 检出能力且维持受控的 I 型错误率；随后应用于衰老脑 bulk 与单核转录组，并整合蛋白质组、糖蛋白组和代谢组指标。
- 在平均约 476 名供体的数据中识别多层次调控关联，并报告神经元 cis 调控信号与胶质细胞协调性 trans 响应之间的联系，辅以共培养和空间转录组证据。

**Critical 简评（基于摘要）**：trans-QTL 效应通常较弱且多重检验负担高，利用共调控程序聚合信号是提高检出力的一种合理策略。该框架同时整合转录组和多类生物标志物，并以共培养及空间数据为部分调控关系提供补充证据。摘要中的数万条关联仍主要是统计发现，且平均供体规模约 476；共定位和中介分析也不能单独确立因果调控方向。作为未经同行评审的预印本，结果仍需独立队列复现，并通过靶向扰动检验优先级最高的 cis-trans-生物标志物链路。

## 检索与核验说明

- Nature 系列：以 Crossref DOI 元数据发现候选，并逐篇核对 Nature Portfolio 原文页的标题、作者、期刊、发布日期、通讯作者/机构及摘要。
- arXiv：使用官方 Atom API 分别查询 q-bio.GN、q-bio.QM、q-bio.CB；精确窗口内未返回相关新提交。
- bioRxiv 与 medRxiv：分别使用各自平台的 details API 分页检索，并核对对应预印本原文页；未将两家平台或 API 混用。
- 以 DOI 和标题比对本地 `sent-papers.json`，本期五篇均为新记录；清理阈值为 2026-10-10，本次未发现超过 30 天的记录。
- 日期精度说明：Nature 页面及预印本 API 对本期记录公开的是日级日期，未提供统一的发布时间时刻，因此无法对边界日逐篇验证到小时。
- 本简报的概要与 critical 简评依据各论文公开摘要；预印本未经同行评审。检索与整理使用了 AI 辅助，所有书目信息以链接的原始平台记录为准。

*Generated by multi-omics-briefing v1.7.0*  
*搜索时间窗口：2026-11-06 23:31 UTC ~ 2026-11-08 23:31 UTC*
