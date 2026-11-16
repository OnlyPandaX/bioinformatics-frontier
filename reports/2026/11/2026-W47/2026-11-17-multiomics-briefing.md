# 多组学研究简报
**2026年11月17日（周二）| 最近48小时精选**

> 搜索范围：2026-11-14 23:43 UTC ~ 2026-11-16 23:43 UTC  
> 数据源：Nature 系列期刊、arXiv q-bio.GN/q-bio.QM/q-bio.CB、bioRxiv、medRxiv

## 整体趋势评述

本期研究一端继续把基因扰动、拷贝数变化与转录响应连接到单细胞层面，并用空间或染色质读出来定位细胞状态；另一端则把血浆蛋白组和肠道宏基因组推进到大队列风险分层。共同方向是从分子图谱走向可检验的功能或临床假设，但现阶段不少跨尺度解释仍依赖特定分析流程、观察性关联或尚待同行评审的预印本。

## 精选论文

### 论文 1：在单细胞中联测 CRISPR 编辑与转录响应

**标题**：Joint single-cell capture of Cas9 edits and transcriptomes reveals on- and off-target effects on gene expression

**作者**：Michael H. Lorenzini、Brad Balderson、Shanna N. Lavalle 等（Lorenzini 与 Balderson 共同第一作者）  
**机构**：Salk Institute for Biological Studies；通讯作者 Graham McVicker 属 Salk Institute  
**平台**：Nature Methods | **日期**：2026-11-16 | **DOI**：10.1038/s41592-026-03319-z  
**链接**：https://www.nature.com/articles/s41592-026-03319-z

**一句话概要**：Superb-seq 将单细胞编辑结果与转录变化直接配对。

**主要贡献**：
- 将 Cas9 编辑、T7 原位转录和单细胞 RNA 测序整合，在同一细胞内连接编辑位点与表达响应。
- 在三个细胞系共分析约 35,000 个细胞；K562 实验中识别到 5,761 个已编辑细胞及 36 个脱靶位点。
- 发现 19 个脱靶编辑位点与差异表达相关，其中 9 个关联呈细胞类型特异性，并与 Perturb-seq 及四种 bulk 脱靶检测方法比较。

**Critical 简评**：既有 pooled CRISPR 与单细胞表达筛查通常难以在同一细胞中确认实际编辑结果，Superb-seq 针对这一测量缺口提供了直接读出。其主要价值不只是发现潜在脱靶，而是把编辑基因型与转录后果对应起来。摘要报告的脱靶位点与表达差异是关联证据，不能单凭此判定每个效应的因果方向；后续仍需在更多编辑工具、细胞类型和独立验证实验中评估灵敏度与特异度。  
**简评评分**：★★★★☆（4/5）

### 论文 2：血浆蛋白组识别胰岛素抵抗及心代谢风险

**标题**：Plasma proteomics identifies insulin resistance signatures predictive of cardiometabolic disease risk

**作者**：Jeppe Kjærgaard、Nigel Kurgan、Justus F. Gräf 等（前两位共同第一作者）  
**机构**：Novo Nordisk Foundation Center for Basic Metabolic Research, University of Copenhagen；通讯作者 Atul S. Deshmukh 属该中心  
**平台**：Nature Metabolism | **日期**：2026-11-16 | **DOI**：10.1038/s42255-026-01662-1  
**链接**：https://www.nature.com/articles/s42255-026-01662-1

**一句话概要**：循环蛋白特征提升胰岛素敏感性评估与心代谢风险预测。

**主要贡献**：
- 以高胰岛素-正常血糖钳夹表型分析 161 人血浆，识别出 488 个与胰岛素敏感性相关的蛋白，并推断其组织来源。
- 用 13 种蛋白加临床变量构建胰岛素敏感性预测模型，报告决定系数 R²=0.67。
- 在约 20,000 名 UK Biobank 参与者中，模型对 2 型糖尿病的 concordance index 为 0.86，高于 TG/HDL 比值的 0.74；另在 1,700 人独立队列评估预测表现。

**Critical 简评**：胰岛素抵抗缺少易扩展且能反映多组织生物学的直接评估手段，钳夹表型与深度蛋白组的结合为血液替代指标提供了生物学锚点。多队列验证和与常用代谢指标的比较增强了结果的转化相关性，但区分能力的提升尚不等同于临床净获益。模型还需要前瞻性评估校准、不同人群中的可迁移性、检测成本，以及蛋白信号在临床决策中是否改变管理和结局。  
**简评评分**：★★★★☆（4/5）

### 论文 3：基于拷贝数信息的单细胞肿瘤细胞分层

**标题**：InferPloidy enables CNV guided tumor cell stratification and biomarker discovery from single cell RNA sequencing

**作者**：Dawon Hong、Wonjung Sung、Jaeyoung Chae、Jucheol Moon、Jong-chan Lee、Sunjoo Jeong、Seokhyun Yoon  
**机构**：Dankook University（RNA Cell Biology Laboratory 与 Electronics & Electrical Engineering）；合作者单位包括 CHA Bundang Medical Center、California State University Long Beach 和 Seoul National University Bundang Hospital  
**平台**：Communications Biology | **日期**：2026-11-16 | **DOI**：10.1038/s42003-026-11298-2  
**链接**：https://www.nature.com/articles/s42003-026-11298-2

**一句话概要**：InferPloidy 用 CNV 推断结果加速单细胞肿瘤细胞分类。

**主要贡献**：
- 以图结构细胞分组和迭代概率建模区分正常与染色体拷贝数异常细胞。
- 在乳腺、肺、胰腺和结直肠癌数据中测试；作者报告其评估流程相较既有工具最高快约两个数量级。
- 将细胞分类用于肿瘤亚群及候选表面标志物探索，同时保留较少未分类细胞以供下游分析。

**Critical 简评**：肿瘤单细胞 RNA-seq 的恶性细胞识别既受 CNV 推断误差影响，也可能被高计算成本限制，InferPloidy 试图兼顾分层效率和下游可用细胞数。摘要报告的速度提升和与已发表标注的一致性值得关注，但验证范围集中于特定癌种数据和 InferCNV 输入流程。作者也指出来自其他 CNV 推断工具的输入仍需验证；此外，候选标志物的临床价值还需独立样本和实验验证。  
**简评评分**：★★★★☆（4/5）

### 论文 4：单细胞与空间多组学描绘人类卵巢衰老

**标题**：Single-cell and spatial multi-omics mapping of human ovarian aging across young and menopausal transition

**作者**：Jingjing Li、Cheng Wu、Yue Zhang 等  
**机构**：Women's Hospital, Zhejiang University School of Medicine；通讯作者 Yizhou Huang  
**平台**：bioRxiv（预印本，版本 1，尚未同行评审）| **日期**：2026-11-16 | **DOI**：10.64898/2026.11.12.765495  
**链接**：https://doi.org/10.64898/2026.11.12.765495

**一句话概要**：多组学空间图谱将颗粒细胞调控变化与卵巢衰老相连。

**主要贡献**：
- 整合单细胞转录组、染色质可及性及空间转录组，比较年轻、绝经转变期和绝经后的人类卵巢。
- 指出颗粒细胞出现显著年龄相关转录重塑，并将转录因子 HEYL 与绝经年龄遗传信号及颗粒细胞富集区域联系起来。
- 在人颗粒细胞样细胞、原代小鼠颗粒细胞及果蝇卵巢中开展 HEYL/Hey 扰动，观察到与衰老表型一致的变化。

**Critical 简评**：卵巢衰老研究常需跨越细胞组成、调控状态与组织空间结构，这项工作将三类测量与遗传分析结合，并进一步用扰动实验检验 HEYL 假设。功能实验为单纯关联增加了机制线索，但体外细胞和跨物种结果不能直接证明 HEYL 可在人类卵巢中作为干预靶点。摘要未提供足以评估人体供者覆盖度的细节，队列代表性及 HEYL 对生殖衰老的因果作用仍需独立人群和更贴近人体的验证；目前亦属未经同行评审的预印本。  
**简评评分**：★★★☆☆（3/5）

### 论文 5：北欧前瞻性队列中的肠道微生物组与心血管事件

**标题**：Gut microbiome associations with incident cardiovascular disease in Nordic populations

**作者**：Brooke N. Wolford、Susanna C. Larsson、Maria Nethander 等  
**机构**：Norwegian University of Science and Technology, Faculty of Medicine and Health Sciences；通讯作者 Brooke N. Wolford  
**平台**：medRxiv（预印本，版本 1，尚未同行评审）| **日期**：2026-11-16 | **DOI**：10.64898/2026.11.12.26367973  
**链接**：https://doi.org/10.64898/2026.11.12.26367973

**一句话概要**：多队列宏基因组分析检验肠道菌群与新发心血管病的关联。

**主要贡献**：
- 在四个北欧前瞻性队列中采用发现-复制设计；发现队列纳入 11,604 人，三个复制队列合计 20,965 人。
- 报告较高的菌群 Shannon 多样性和物种丰富度与较低的新发心血管病风险相关，并复制了九种物种及十一种功能模块的关联。
- 探索一条女性特异的口腔健康-肠道微生物路径；摘要报告遗传分析支持义齿使用对 Rothia mucilaginosa_A 相对丰度的影响。

**Critical 简评**：既往肠道菌群与心血管病研究常受样本规模和独立复制不足限制，本研究的多队列设计有助于筛出可重复信号。宏基因组功能模块与临床事件并行分析，为后续机制验证提供候选路径，但发现和复制队列仍属观察性研究。摘要中的遗传分析针对义齿使用与特定菌种丰度，不能据此确认整条菌群-代谢物-炎症-心血管链路的因果性；饮食、口腔健康和人群背景等因素仍需进一步控制与检验。该文尚未同行评审。  
**简评评分**：★★★☆☆（3/5）

## 检索与局限

- Nature 系列以 Nature 官方检索结果和文章页面核对标题、作者、刊名、日期、DOI、作者单位及摘要；bioRxiv 与 medRxiv 分别使用各自的 details API 核对题名、日期、版本、作者、通讯作者机构及摘要，并以 DOI 注册信息复核题名与 DOI。bioRxiv 论文正文页本次访问遇到 429 限流，因此该条目仅依据 API 元数据和摘要整理。
- arXiv 官方 Atom API 按 q-bio.GN、q-bio.QM、q-bio.CB 检索；在本期窗口内未发现符合条件的新提交。
- 预印本 API 与 Nature 页面提供的是日期级发表/收录信息，未提供可统一核验的小时级时间戳；本期按平台记录日期筛选，并以查询时页面已可访问为界。窗口为 UTC 时间。
- 简报与批判性评述使用 AI 辅助整理，判断依据限于各论文摘要及页面可核实元数据；不替代全文审读。bioRxiv 与 medRxiv 条目未经过同行评审。

*Generated by multi-omics-briefing v1.7.0*  
*搜索时间窗口：2026-11-14 23:43 UTC ~ 2026-11-16 23:43 UTC*
