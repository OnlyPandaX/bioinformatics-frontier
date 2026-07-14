# 🧬 多组学研究简报
**2026年7月15日（周三）| 近48小时精选**

> 搜索范围：2026-07-12 ~ 2026-07-15 | 数据源：Nature, bioRxiv, medRxiv, ArXiv

---

## 📊 整体趋势评述

本期简报聚焦两大主线：**长读长多组学**和**单细胞/空间多组学**正在从描述性研究走向机制解析与临床转化——星形细胞瘤长读长DNA+RNA联合测序揭示复发时的DNA→RNA级联传递规律；儿童脓毒症MOFA整合四层组学找到跨队列可重现的炎症主轴；AML单细胞多组学锁定LSC表面标志物并完成前瞻分选验证。这些工作共同指向一个方向：**多组学技术正从"获得数据"向"精确干预"跃迁**。

---

## 📑 精选论文

### 🔬 论文 1：长读长多组学揭示星形细胞瘤复发时DNA→RNA进化轨迹

**标题**：Long read multi-omics sequencing reveals DNA-to-RNA evolutionary remodeling trajectories of recurrent astrocytoma

**作者**：Sherif Rashad, Dai Ando, Shunichi Yamashita, et al.
**机构**：东北大学（Tohoku University）
**平台**：bioRxiv | **日期**：2026-07-14 | **DOI**：10.64898/2026.07.12.738108
**链接**：https://www.biorxiv.org/content/10.64898/2026.07.12.738108v1

**一句话概要**：配对PacBio HiFi全基因组+Kinnex全长转录组揭示星形细胞瘤复发时遗传/表观变异向RNA isoform层面的系统性传递。

**主要贡献**：
- 发现复发肿瘤保留核心 glioma driver 身份，同时获得个体特异性的体细胞变异、拷贝数、结构变异、杂合性丢失（LOH）和DNA甲基化重塑
- 长读长转录组发现大量基因水平和 isoform 使用层面的复发相关基因表达重塑，揭示了短读长技术无法捕捉的 isoform 切换事件
- 建立分母感知整合框架（denominator-aware integration framework），阐明拷贝数变异提供广泛的RNA剂量效应，而表达体细胞变异和等位基因/单倍型特异性转录本使用决定个体化分子后果

**🔍 Critical 简评**：⭐⭐⭐⭐
星形细胞瘤复发机制是胶质瘤领域的核心难题。历史上主要靠短读长测序研究基因层面变化，无法解析 isoform 层面的重编程——而肿瘤复发往往涉及可变剪接驱动的蛋白变体（如EGFRvIII）。PacBio HiFi + Kinnex 的组合提供了等位基因分辨率的DNA+RNA配对视图，这是技术层面的重要突破。denominator-aware 整合框架尤其值得注意：它解决了肿瘤样本纯度异质性导致的拷贝数推断偏差问题。局限在于6例患者规模较小，亟需扩展到更大队列验证轨迹规律。**Future work**：该框架可推广至其他复发实体瘤（如胶质母细胞瘤），并与空间多组学结合解析复发肿瘤的空间克隆结构。

---

### 🔬 论文 2：多组学整合识别儿童脓毒症可重现的炎症应答主轴

**标题**：Multi-omics integration identifies a reproducible inflammatory host-response axis in pediatric sepsis

**作者**：Meriem Ait Oumelloul, Ali Saadat, Vito Zanotelli, et al.
**机构**：洛桑联邦理工学院（EPFL），瑞士儿童脓毒症研究（Swiss Pediatric Sepsis Study）
**平台**：bioRxiv | **日期**：2026-07-13 | **DOI**：10.64898/2026.07.06.736269
**链接**：https://www.biorxiv.org/content/10.64898/2026.07.06.736269v1

**一句话概要**：基因组+转录组+蛋白质组+代谢组四层整合发现儿童脓毒症跨队列可重现的炎症主轴，RNA单层数据可近似预测。

**主要贡献**：
- 整合22例确诊细菌性脓毒症儿童的基因组、bulk转录组、蛋白质组和代谢组数据（Swiss Pediatric Sepsis Study）
- 多组学因子分析（MOFA）识别出以转录组变异为主导、蛋白质组和代谢组协同支持的全身性炎症主轴
- 该主轴与CRP水平和病情严重程度评分代理变量相关，并可投射至独立验证队列复现，具有临床转化潜力
- 发现代谢层面驱动因素包括循环炎症介质升高和氨基酸代谢改变

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
脓毒症异质性是精准医学的经典难题——临床表现相似的患者可能具有截然不同的分子驱动机制。这项工作的重要意义在于：① 四层组学正交验证炎症主轴的稳健性；② RNA单层数据即可近似捕捉该主轴，降低临床转化门槛；③ 跨独立队列验证是脓毒症研究稀缺的关键证据。值得关注的是，J. Fellay是细菌感染免疫遗传学领域权威（Nature/Science发表多篇GWAS因果推断论文），方法学可信度高。局限包括样本量仍偏小（n=22），且为横截面数据，无法追踪治疗应答动态。**Future work**：纵向采样结合单细胞转录组解析细胞类型特异性应答。

---

### 🔬 论文 3：单细胞多组学高分辨率锁定人类急性髓系白血病干细胞并完成前瞻分选验证

**标题**：Single cell multi-omics enables high-resolution identification and functional purification of human acute myeloid leukemia stem cells

**作者**：Asel Ediriwickrema, Yoshiya Nakauchi, Thomas Kohnke, et al.
**机构**：斯坦福大学（Stanford University），Majeti Lab
**平台**：bioRxiv | **日期**：2026-07-13 | **DOI**：10.64898/2026.07.12.737989
**链接**：https://www.biorxiv.org/content/10.64898/2026.07.12.737989v1

**一句话概要**：单细胞多组学定义CD34+CD90-CLL1-CD69+CD53-表型即可纯化LSC，前瞻分选移植验证干性富集。

**主要贡献**：
- 分析大样本bulk基因表达数据 + 单细胞多组学检测，识别在临床预后不良AML亚群中特异富集的预后基因标志
- 据此定义并前瞻分离 CD34+CD90-CLL1-CD69+CD53- 免疫表型LSC，移植实验（limiting dilution xenotransplantation）证实富集了真实的干细胞活性
- 解决了该领域长期难题：现有bulk来源LSC基因标志无法在单细胞分辨率区分LSC和bulk白血病细胞

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
LSC（L白血病干细胞）是AML治疗抵抗和复发的根本原因，但缺乏可靠的单细胞层面标志物限制了从基础研究到临床的转化。Majeti Lab是LSC研究的全球领军团队（2010年代即定义了LSC概念和CD123等标志），这项工作整合单细胞多组学手段解决了标志物筛选的核心难题——5 marker组合在单细胞层面精确区分LSC与bulk群体。limiting dilution移植是LSC验证的金标准，结果可信。临床意义重大：该标志组合可直接转化为流式细胞术分选方案，用于AML微小残留病（MRD）监测和CAR-T靶点开发。局限在于需要多色流式验证（当前5 marker组合对临床流式仪要求较高），且需在更多AML亚型中验证。

---

### 🔬 论文 4：SAGA乙酰转移酶降解破坏共有乙酰化回路，全面瓦解AML细胞身份

**标题**：Disrupting a Convergent Acetylation Circuit Collapses Leukemic Identity Across AML Subtypes

**作者**：Aniruddha J. Deshpande, Chih-Ya Chiang, Miguel Perales Garcia, et al.
**机构**：Sanford Burnham Prebys医学发现研究所
**平台**：bioRxiv | **日期**：2026-07-14 | **DOI**：10.64898/2026.07.13.737885
**链接**：https://www.biorxiv.org/content/10.64898/2026.07.13.737885v1

**一句话概要**：全基因组CRISPR筛选+SAGA PROTAC降解剂揭示H3K9ac回路为AML跨亚型共同依赖，MYC/HOXA簇去乙酰化触发细胞身份崩溃。

**主要贡献**：
- 利用>1000个癌细胞系的基因组规模依赖性数据，鉴定SAGA组蛋白乙酰转移酶复合物为AML和血液恶性肿瘤的选择性染色质依赖
- 药理学降解SAGA催化亚基KAT2A/KAT2B（cereblon-recruiting PROTAC GSK983），在遗传多样性AML细胞系、原始患者样本和KMT2A重排模型中均显示强效抗白血病活性
- 机制研究揭示KAT2A/B降解导致全基因组H3K9ac降低，MYC/MYB和HOXA cluster等核心AML致癌基因位点的不对称丢失最为显著，触发白血病细胞身份崩溃和分化

**🔍 Critical 简评**：⭐⭐⭐⭐
这项工作的逻辑链极为清晰：① 基因组规模筛选 → 发现SAGA为AML选择依赖；② PROTAC降解 → 证明靶向可行性；③ H3K9ac ChIP-seq → 揭示机制（关键位点丢失）。"共有乙酰化回路"（convergent acetylation circuit）的概念很关键——它解释了为什么不同遗传背景的AML共享同一染色质依赖。GSK983作为cereblon-recruiting PROTAC，理论上可利用现有的分子胶降解剂临床基础设施快速转化。值得关注：KAT2A/B在正常造血中也有作用，脱靶毒性需要仔细评估。**Future work**：与BCL-2抑制剂联用的协同效应、患者来源异种移植（PDX）模型的长期生存获益评估。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | MolMAE: Surface-Centric Multimodal Masked Autoencoder（DOI: 10.64898/2026.07.11.737987） | 多模态分子表征学习 | 表面为中心的MAE用于分子属性预测，July 14 |
| ArXiv | Adapting Evidential Neural Networks to Test-Time Neighbor Fusion（arXiv:2607.11091） | 测试时融合+分子属性预测 | 测试时邻居融合改进ENNs，July 13 |
| ArXiv | A quantitative model for MITF rheostat population dynamics（arXiv:2607.11820） | 黑色素瘤细胞状态动态 | MITF蛋白水平调控肿瘤适应度，July 13 |
| medRxiv | Clinical validation of large-scale functional assays（DOI: 10.64898/2026.07.10.26357766） | 功能验证规模化 | 2120个基因-功能检测临床验证，July 14 |
| medRxiv | Endocrine-metabolic network architecture in PCOS（DOI: 10.64898/2026.07.10.26357756） | 网络医学+多囊卵巢综合征 | 内分泌代谢网络架构，July 14 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-07-12 23:30 UTC ~ 2026-07-14 23:30 UTC*
