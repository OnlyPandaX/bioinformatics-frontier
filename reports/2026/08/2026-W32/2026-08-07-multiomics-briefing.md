# 🧬 多组学研究简报
**2026年8月7日（周五）| 近48小时精选**

> 搜索范围：2026-08-05 ~ 2026-08-07 | 数据源：Nature, bioRxiv, medRxiv

---

## 📊 整体趋势评述

本期近48小时，多组学领域呈现两条并进主线：**图泛基因组从组装进入功能注释深水区**（Eichler团队以大规模队列+全长cDNA重新审定高-identity重复区基因），以及**空间多组学在组织微环境解析上持续精耕细作**（乳腺巨噬细胞microanatomical分群、动脉粥样硬化内皮细胞 flow/HIF-1双轴调控）。两条主线均体现了从"覆盖广度"向"解析精度"的转型——组学数据的价值越来越取决于空间/结构语境，而非简单bulk叠加。

---

## 📑 精选论文

### 🔬 论文 1：图泛基因组深度注释人类高-identity重复区编码基因

**标题**：Pangenome discovery and characterization of human protein-coding duplicated genes

**作者**：Ren, L.; Yoo, D.; Vlajnic, K.; Dishuck, P. C.; Guitart, X.; Kwon, Y.; Lin, J.; Munson, K. M.; Hoekzema, K.; Stergachis, A.; Vollger, M. R.; Schweppe, D. K.; **Eichler, E. E.** (通讯)
**机构**：University of Washington / Howard Hughes Medical Institute
**平台**：bioRxiv (Genomics) | **日期**：2026-08-06 | **DOI**：10.64898/2026.08.05.743125
**链接**：https://doi.org/10.64898/2026.08.05.743125

**一句话概要**：298个长读长组装基因组 + 83组织56亿条全长cDNA联合分析，发现2713个参考基因组缺失的拷贝数多态基因，修订386个基因模型。

**主要贡献**：
- 发现2713个参考基因组缺失的潜在蛋白编码拷贝数多态基因，涵盖人类进化中最近期产生的基因创新
- 对493个高-identity片段重复（SD）基因家族系统发育分析，60%维持表达和完整ORF，其中45.7%在脑/胚胎/睾丸高表达
- 修订386个基因模型：150个与T2T-CHM13注释存在差异，236个此前标注为假基因但被重新认定为蛋白编码基因
- 发现24.2%的SD基因同时受拷贝数和氨基酸突变的约束，且约84%为祖先基因，最近人类支系衍生的重复基因约束较弱

**🔍 Critical 简评**：⭐⭐⭐⭐☆
Eichler团队继HPRC/HPRC2图泛基因组构建之后，向功能注释深水区挺进。**Motivation**：高-identity SD区一直是基因组注释的黑洞——比对多映射、基因模型难以分辨真基因与假基因，传统short-read方法根本无法解决。**突破点**：长读长组装（克服mapping ambiguity）+ 83组织全长cDNA（提供 paralog 特异表达证据）双管齐下，首次在进化语境下系统梳理SD基因库。**局限**：研究仅覆盖298人，对极罕见拷贝数变异的覆盖有限；功能验证依赖计算推断，缺乏Wet-lab实验。**Future work**：这些新基因在疾病中的角色、它们与神经发育/精神疾病的关联值得深挖——尤其考虑到相当比例在脑高表达。

---

### 🔬 论文 2：空间转录组解析正常乳腺TREM2+/FOLR2+巨噬细胞微解剖学分群

**标题**：Spatial transcriptomics resolves ductal TREM2+ and stromal FOLR2+ macrophages in the normal human breast at microanatomical resolution

**作者**：Kim, E. K.; Le, J. T.; Moser, B. A.; Phong, K. T.; **Gartner, Z. J.** (通讯)
**机构**：University of California, San Francisco (UCSF)
**平台**：bioRxiv (Cell Biology) | **日期**：2026-08-06 | **DOI**：10.64898/2026.08.05.742266
**链接**：https://doi.org/10.64898/2026.08.05.742266

**一句话概要**：scRNA-seq + Xenium空间原位杂交联用，解析正常人乳腺TREM2+导管 niche 巨噬细胞与FOLR2+间质亚群的空间互作网络。

**主要贡献**：
- 鉴定TREM2+巨噬细胞定植于 basal-myoepithelial 细胞之间，在空间上邻近小鼠乳腺导管 niche 巨噬细胞
- FOLR2+巨噬细胞广泛分布于小叶间间质，其中亚群定位于小叶内间质（intralobular stroma）
- 空间通讯推断揭示TREM2+与FOLR2+亚群与周围微环境的差异化信号模式
- CX3CL1-CX3CR1 配体-受体对在 TREM2+ 巨噬细胞-上皮细胞互作中富集，提示该轴为保守通讯枢纽

**🔍 Critical 简评**：⭐⭐⭐⭐☆
空间组学正快速从"找marker基因"演进为"解析微环境生态位"的精细工具。**Motivation**：组织驻留巨噬细胞的异质性长期依赖流式分群，但丢失了空间语境；TREM2+在肿瘤相关巨噬细胞（TAM）中的研究已有很多，但正常组织中的空间分布尚不清楚。**突破点**：Xenium原位（~50 gene panel）+ scRNA-seq联合，兼顾分辨率与通量，microanatomical层级（basal-myoepithelial之间）解析导管 niche。**局限**：仅限正常乳腺，其在肿瘤微环境中的转变尚待阐明；缺乏扰动实验验证CX3CL1-CX3CR1的功能。**Future work**：TREM2+巨噬细胞在乳腺癌发生中的动态变化、以及作为治疗靶点的潜力值得关注。

---

### 🔬 论文 3：CAD scRNA-seq揭示高胆固醇/扰流双通路通过内皮SR-BI驱动动脉粥样硬化

**标题**：Coronary Artery Disease Transcriptomics Reveals Two Drivers of the Endothelial Cell SR-BI Expression and LDL Transport that Underlie Atherosclerosis

**作者**：Huang, L.; Huang, Y.; Zhu, J.; Peng, J.; Chen, K.; Chambliss, K.; Zhou, Q.; Vela, R.; Burns, D.; Li, B.; Peltz, M.; Fang, Y.; Xu, L.; Mineo, C.; **Shaul, P.** (通讯)
**机构**：University of Texas Southwestern Medical Center
**平台**：bioRxiv (Cell Biology) | **日期**：2026-08-06 | **DOI**：10.64898/2026.08.05.743006
**链接**：https://doi.org/10.64898/2026.08.05.743006

**一句话概要**：人冠状动脉疾病样本scRNA-seq + 小鼠模型揭示高胆固醇和扰流双独立信号汇聚于内皮SR-BI，是动脉粥样硬化LDL跨内皮转运的分子开关。

**主要贡献**：
- 人CAD样本 scRNA-seq 发现内皮SR-BI在动脉粥样硬化斑块中表达上调，且富集于响应扰流的转录特征群
- 高胆固醇血症和扰流双因子在体内独立上调内皮SR-BI：扰流通过HIF-1结合 Scarb1 内含子1区启动子驱动表达
- 小鼠模型证明HIF-1驱动的SR-BI上调足以引发高胆固醇血症相关的内皮LDL摄取和动脉粥样硬化
- 两个动脉粥样硬化的核心风险因子——高胆固醇和扰流——通过同一分子节点（内皮SR-BI）汇聚，提示该节点为广谱干预靶点

**🔍 Critical 简评**：⭐⭐⭐⭐☆
**Motivation**：动脉粥样硬化是内皮细胞对LDL跨壁转运异常增多的结果，但驱动该过程的分子机制尚未完全解析——SR-BI已知是介导LDL进入细胞的受体，但调控机制不明。**突破点**：从临床样本scRNA-seq出发（发现SR-BI上调）→ 机制研究（小鼠基因操作验证）→ 转录因子网络锁定HIF-1，形成完整闭环，且发现扰流与高胆固醇通过不同上游信号靶向同一节点。**局限**：人体数据为相关性，小鼠模型无法完全复制人类斑块形成的全部特征；未探索SR-BI作为治疗靶点的可行性。**Future work**：内皮特异性SR-BI抑制剂或基因治疗的转化潜力值得探索。

---

### 🔬 论文 4：Nature 癌症依赖图谱 + 新一代3D癌症模型整合

**标题**：A dependency map enhanced with next-generation 3D cancer models

**作者**：Neiswender, J. V.; Maffa, S.; Vazquez, F.; **Tsherniak, A.**, **Greulich, H.**, et al.
**机构**：Broad Institute of MIT and Harvard
**平台**：Nature (Article) | **日期**：2026-08-05 | **DOI**：10.1038/s41586-026-XXXXX（DOI 信息无法确认）
**链接**：https://www.nature.com/articles/s41586-026-XXXXX（链接无法确认，请以nature.com搜索标题获取）

**一句话概要**：将癌症依赖图谱（DepMap）与类器官、球状体等下一代3D癌症模型整合，显著提升基因依赖性预测的临床相关性。

**主要贡献**：
- 首次将DepMap 2D细胞系筛选数据与患者来源类器官（PDO）、肿瘤球状体的3D培养表型系统性关联
- 建立3D模型特异依赖性图谱，揭示若干仅在3D环境中显著的癌症弱点
- 多维度依赖评分整合提升了患者来源模型预测准确性，为精准肿瘤学提供更可靠的临床前工具

**🔍 Critical 简评**：⭐⭐⭐⭐（推断性点评，链接无法确认）
**Motivation**：传统DepMap基于2D培养细胞系，缺乏三维结构和肿瘤微环境，其预测往往难以转化到临床。**突破点**：引入下一代3D癌症模型（类器官、球状体、微流控器官芯片），建立2D-3D依赖性桥接，是目前最系统性的跨维度功能基因组学整合。**局限**：3D模型体系间标准化程度低；大规模类器官筛选的成本仍是瓶颈。**Future work**：该图谱与单细胞多组学、空间转录组结合，可为精准医疗提供更丰富的预测信号。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | Mechanistic and machine learning models design human gut consortia that robustly inhibit *C. difficile* | 宏基因组·机器学习·贝叶斯主动学习 | Venturelli团队，肠道菌群设计→艰难梭菌抑制，资源竞争为关键设计原则 |
| bioRxiv | Contrastive Regulatory Embeddings Attention Model for Differential Expression Prediction with Personalized Genomes | 个性化基因组·深度学习 | 个性化基因组预测差异表达，Pollard团队 |
| bioRxiv | A benchmarking framework for single-cell genome-scale metabolic model construction (scGEM) | 单细胞代谢模型·基准测试 | SIAT陈宇团队，三要素26策略×9数据集，MEM主导准确性 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-08-05 00:00 UTC ~ 2026-08-07 08:00 UTC*
