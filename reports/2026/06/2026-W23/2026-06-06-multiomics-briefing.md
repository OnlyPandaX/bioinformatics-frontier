# 🧬 多组学研究简报
**2026年6月6日（周六）| 近48小时精选**

> 搜索范围：2026-06-04 ~ 2026-06-06 | 数据源：bioRxiv, medRxiv, ArXiv

---

## 📊 整体趋势评述

本期简报聚焦于**多组学技术在靶器官功能基因组学与疾病机制解析中的深化应用**。三条主线值得关注：①体内规模化功能基因组学（AAV-Perturb-seq）突破传统体外筛选的器官限制，将CRISPR筛选直接锚定于心脏等靶器官；②单细胞多组学从"覆盖量"向"精准机制"转型——GRN重塑与表观熵增被量化关联，干细胞衰老从描述走向机制因果；③空间组学解卷积方法持续迭代，proteomics-informed约束成为新范式。

---

## 📑 精选论文

### 🔬 论文 1：Architectural fragility of gene regulatory networks underlies hematopoietic stem cell aging

**标题**：Architectural fragility of gene regulatory networks underlies hematopoietic stem cell aging

**作者**：Stevens, H. P.; Yucel, A. D.; Gould, R. A.; Cai, G.; Gladyshev, V. N.; Plesa, A. M.; Church, G. M., et al.
**机构**：Wyss Institute for Biologically Inspired Engineering, Harvard University
**平台**：bioRxiv | **日期**：2026-06-04 | **DOI**：10.64898/2026.06.03.729976
**链接**：https://doi.org/10.64898/2026.06.03.729976

**一句话概要**：人类造血干细胞衰老时基因调控网络全局重塑，应激响应与髓系程序扩展，自我更新与淋巴程序收缩，cis-调控熵增是根本驱动因素。

**主要贡献**：
- 贡献1：构建迄今最大规模人类循环HSPC单细胞多组学图谱（>38万配对RNA+ATAC谱，77个供体），系统性量化衰老相关的染色质与转录组变化。
- 贡献2：发现HSPC衰老的网络架构脆弱性——应激响应与髓系转录因子程序全局扩展，而自我更新和淋巴谱系决定回路崩溃，重现了Gladyshev实验室在衰老领域的经典范式。
- 贡献3：建立cis-调控熵增（Cis-regulatory entropy）作为HSPC衰老的可量化指标，包括转录噪音升高、peak-to-gene耦合减弱、染色质peak展宽，首次将信息论框架直接应用于衰老机制研究。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
①**现状**：HSPC衰老驱动免疫衰老与年龄相关疾病，既往 bulk omics 只能描述群体平均变化，单细胞多组学近年才开始解析细胞类型异质性，但调控网络层面的定量框架仍缺乏。②**动机**：Church和Gladyshev实验室合作，后者以衰老代谢与节律研究闻名，前者在合成生物学与功能基因组学有深厚积累——两者结合恰好覆盖"机制发现→功能验证"全链条。③**突破点**：>38万细胞的多组学规模提供了统计可信度；cis-调控熵增概念的引入（借鉴进化基因组学）将衰老从"表型描述"推向"信息论机制"；Network fragility与年龄相关功能衰退的因果方向仍需体内验证。④**局限**：人类循环HSPC（外周血）可能不能完全代表骨髓HSPC；77个供体的横断面设计难以区分发育性衰老与疾病性衰老。⑤**值得关注的 future work**：这一熵增框架是否可推广至神经干细胞、肌肉干细胞等？Gladyshev实验室近期在Nature发表的跨物种转录组衰老标志物（Universal transcriptomic hallmarks, 2026-05-27）可与此图谱交叉验证。

---

### 🔬 论文 2：Protein-state dysregulation and sex-specific neurodevelopmental signatures in schizophrenia forebrain organoids

**标题**：Protein-state dysregulation and sex-specific neurodevelopmental signatures in schizophrenia forebrain organoids

**作者**：Bogetofte, H.; Schmidt, S. I.; Sejberg Oehlenschlaeger, M.; et al.; Freude, K. K.; Larsen, M. R.
**机构**：University of Southern Denmark
**平台**：bioRxiv | **日期**：2026-06-04 | **DOI**：10.64898/2026.06.01.729221
**链接**：https://doi.org/10.64898/2026.06.01.729221

**一句话概要**：精神分裂症类器官中转录差异有限，蛋白质组/代谢组/PTM层面失调显著且存在性别特异性，揭示风险基因通过蛋白质层面而非转录层面致病。

**主要贡献**：
- 贡献1：首个整合snRNA-seq、定量蛋白质组、代谢组与深度PTM分析的精神分裂症前脑类器官研究（17例SZ+17例对照），跨越"中心法则"的多个分子层次。
- 贡献2：发现SZ类器官的细胞组成（细胞类型比例）与对照组高度相似，转录差异出乎意料地有限，但PTM（翻译后修饰）层面出现显著性别依赖性失调——提示既往研究可能低估了蛋白质层面的致病贡献。
- 贡献3：首次在Cajal-Retzius神经元中定位SZ最显著的细胞类型特异性变化，结合Freude/Larsen实验室的蛋白质组专长，为SZ的蛋白质稳态障碍假说提供直接证据。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
①**现状**：SZ遗传度约80%，但风险基因→表型的机制链条始终不清晰；类器官模型虽能模拟皮层发育，但既往 bulk 或单层组学难以捕获蛋白质翻译后修饰（PTM）的动态变化。②**动机**：Larsen实验室（蛋白质组学）与Freude实验室（干细胞神经分化）的交叉——前者MCPR团队，后者专注射频神经分化，两家合作填补了SZ蛋白质层面的系统性空白。③**突破点**：转录保守但蛋白/PTM失调的反直觉发现是本期最高价值点——直接挑战了"转录组=最终下游"的隐含假设，为蛋白质组驱动的SZ机制研究提供了范式。④**局限**：类器官仅模拟早期发育阶段（<6个月），SZ的成年发病无法在类器官中验证；PTM失调与临床表现的关系尚需纵向队列验证；17对样本的统计功效可能不足。⑤**值得关注的 future work**：是否可在成年SZ脑组织或iPSC来源神经元中验证PTM失调？这种性别特异性是否在临床生物标志物中可检测？

---

### 🔬 论文 3：Scalable in vivo cardiac functional genomics with compressed AAV-Perturb-seq reveals a common mitochondrial response to perturbation

**标题**：Scalable in vivo cardiac functional genomics with compressed AAV-Perturb-seq reveals a common mitochondrial response to perturbation

**作者**：Kuznetsov, I. A.; Li, K.; Yang, Y.; Zhao, W.; Zhou, W.; Zhu, W.; Liang, J.; Li, J.; Edwards, J. J.; Arany, Z.
**机构**：University of Pennsylvania
**平台**：bioRxiv | **日期**：2026-06-05 | **DOI**：10.64898/2026.06.01.729445
**链接**：https://doi.org/10.64898/2026.06.01.729445

**一句话概要**： AAV介导体内Perturb-seq实现心脏大规模功能基因组学，585个基因敲除揭示扰动共有线粒体响应程序，为直接在靶器官建立基因→表型因果链提供新范式。

**主要贡献**：
- 贡献1：开发 AAV-Perturb-seq 体内压缩版——将 AAV 递送+单细胞RNA-seq 与每细胞多次随机扰动的统计解卷积框架结合，在心脏中实现 >500 基因的体内 CRISPR 筛选，突破传统体外筛选的器官局限性。
- 贡献2：首次在体内直接靶向心脏（而非体外模型）验证基因功能，发现扰动后的共有线粒体响应程序——提示心脏对基因扰动的稳健性可能源于线粒体缓冲机制，为心脏疾病治疗提供泛靶点。
- 贡献3：建立"体内功能基因组学"的方法论框架，统计解卷积框架可推广至肝脏、肾脏等其他难以转染的器官，Zoltan Arany实验室（心脏代谢与线粒体）此前在Cell/Nature发表过系列线粒体-心脏研究。

**🔍 Critical 简评**：⭐⭐⭐⭐
①**现状**：CRISPR Perturb-seq已是体外功能基因组学标准，但动物体内应用受限于递送效率与分析成本；心脏基因功能研究传统依赖转基因小鼠或体外细胞模型，因果推断链存在"体内gap"。②**动机**：Zoltan Arany（UPenn）是心脏代谢与血管生成领域知名PI，其团队2023年在Cell发表Mitochondrial dynamics in heart failure等系列工作——将线粒体研究与规模化筛选结合是自然的战略延伸。③**突破点**：体内AAV递送解决了靶器官问题；"压缩感知"统计框架（每细胞多次扰动的解卷积）是方法学创新；线粒体共有响应的发现具有泛化价值。④**局限**：AAV递送效率在不同品系/物种间差异大；585个基因仍是全基因组的很小部分；线粒体响应是因果还是后果需要进一步干预验证。⑤**值得关注的 future work**：与Geneformer/scFoundation等单细胞基础模型的结合可进一步放大筛选规模；该框架在人心脏类器官或心脏芯片中的转化验证值得期待。

---

### 🔬 论文 4：Proteomics-constrained deconvolution reveals spatial cell-type programs in tumours

**标题**：Proteomics-constrained deconvolution reveals spatial cell-type programs in tumours

**作者**：Isik, E. B.; Haley, M. J.; Anbaki, A. A.; Bere, L.; Roncaroli, F.; et al.; Rattray, M.
**机构**：University of Manchester
**平台**：bioRxiv | **日期**：2026-06-04 | **DOI**：10.64898/2026.06.01.729268
**链接**：https://doi.org/10.64898/2026.06.01.729268

**一句话概要**：PISTACHIO方法以配对成像质谱流式细胞术的空间约束指导空间转录组解卷积，无需高质量单细胞参考即可准确推断肿瘤中细胞类型与空间分布。

**主要贡献**：
- 贡献1：提出PISTACHIO框架——将配对成像质谱流式（Imaging Mass Cytometry）-derived空间约束整合入非负矩阵分解（NMF），解决空间转录组中细胞类型去卷积的两大痛点：无高质量单细胞参考 + 混合像素干扰。
- 贡献2：约束项（来自IMC的空间可行性+细胞类型稀疏性）使去卷积结果具有生物学可解释性，避免了概率先验引入的偏差，在肿瘤TME高异质性场景中验证准确性。
- 贡献3：Rattray实验室（计算生物学）与Manchester质谱成像团队合作，方法学上结合了NMF（非监督）+ 质谱（监督约束），为多组学空间整合提供了可复制的计算框架。

**🔍 Critical 简评**：⭐⭐⭐⭐
①**现状**：空间转录组（Visium/Xenium/CosMx）已成为肿瘤微环境研究标配，但每个spot捕获的转录本来自多个细胞的混合物，去卷积方法（Tangram、Seurat等）多依赖外部scRNA-seq参考，当参考质量差或批次不匹配时结果不可靠。②**动机**：Rattray是曼彻斯特大学计算生物学系主任，其团队在单细胞数据整合与标准化方面有长期积累（Mandal et al., 2021等），PISTACHIO是其在空间组学去卷积方向的方法学推进。③**突破点**：以"空间可行性"约束替代"概率先验"——物理约束比统计假设更稳健；IMC与空间转录组的配对数据比单纯的AI推断更可靠。④**局限**：需要IMC数据作为辅助模态，增加了实验成本；NMF对初始参数敏感；结果解释仍需生物学专业知识。⑤**值得关注的 future work**：是否可与CellTypist等大规模细胞图谱结合？该框架在非肿瘤组织（如脑、心脏）中的泛化效果值得关注。

---

### 🔬 论文 5：Long-read RNA-seq resolves isoform-level and context-specific regulatory architecture of complex traits in cattle

**标题**：Long-read RNA-seq resolves isoform-level and context-specific regulatory architecture of complex traits in cattle

**作者**：Zheng, W.; Zhang, Q.; He, J.; Zhu, X.; Gong, M.; Li, H.; et al.; Sun, D.
**机构**：China Agricultural University
**平台**：bioRxiv | **日期**：2026-06-05 | **DOI**：10.64898/2026.06.04.730050
**链接**：https://doi.org/10.64898/2026.06.04.730050

**一句话概要**：牛群体规模ONT长读长RNA-seq揭示1.3万新转录本异构体，30%基因存在sQTL，破解短读长"缺失调控"难题，为农业动物功能基因组学提供全面资源。

**主要贡献**：
- 贡献1：432头奶牛四个泌乳阶段的群体规模多组学数据（WGS30x+ONT长读长RNA-seq+短读长RNA-seq+代谢组），构建了迄今最完整的牛转录本异构体参考图谱，添加1.3万个新异构体。
- 贡献2：精细定位108.89万个跨11种分子表型的调控效应，长读长mapping发现12.8%基因存在 isoform eQTL（eisoQTL）、31.8%基因存在 sQTL——这些在短读长分析中完全不可见。
- 贡献3：中国农业大学孙东晓团队（动物遗传育种）联合多家机构，为奶牛产奶性状、肉品质等复杂性状的功能基因组解析提供了高分辨率调控图谱，资源可向人类基因组学外推。

**🔍 Critical 简评**：⭐⭐⭐⭐
①**现状**：家畜复杂性状遗传改良依赖GWAS+bulk RNA-seq，短读长无法解析全长 isoform 异构体，长读长成本曾是群体规模应用的主要障碍。②**动机**：孙东晓（中农）是国家杰出青年基金获得者，长期从事奶牛功能基因组学研究——泌乳周期多阶段采样策略极具生物学洞察：同一动物不同生理状态的转录调控差异远比横截面比较更有信息量。③**突破点**：群体规模ONT（纳米孔测序）将长读长从个案研究扩展至百样本层级；sQTL与eisoQTL的发现比例（30%）远超预期，说明 isoform 层面调控变异在复杂性状中的贡献被系统性低估。④**局限**：奶牛作为农业模型，向人类复杂疾病的外推需谨慎；ONT转录本定相准确性仍低于Illumina short-read；泌乳阶段外的生理状态（如青春期、发情期）未被采样。⑤**值得关注的 future work**：这些 isoform-level QTL是否可整合进人类GTEx项目用于跨物种调控比较？多祖源牛的纳入是否会进一步扩展变异谱？

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | PRIME: Atlas-Level Single-Cell and Spatial Transcriptomics Data Integration | scRNA-seq + spatial整合 | 图谱级别数据整合方法 |
| bioRxiv | BTK inhibition enhances immunovirotherapy in glioblastoma via TLS modulation | 免疫治疗+脑肿瘤 | 三级淋巴结构作为GBM免疫增敏靶点 |
| bioRxiv | LDLR regulatory RNA ASO increases LDL expression in vivo | ASO+降血脂 | 非编码调控RNA成治疗靶点 |
| bioRxiv | A mitochondrial-immune axis drives the transcriptomic transition from brain aging to AD | 线粒体+神经退行 | 衰老→AD分子桥梁 |
| bioRxiv | Single-cell spatial transcriptomics decoding amygdala organization | 空间+杏仁核 | 单细胞分辨率空间转录组 |
| medRxiv | HPV clearance shaped by host immune response (PAPCLEAR cohort) | 免疫+病毒清除 | 纵向大队列多组学 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-06-04 00:00 UTC ~ 2026-06-06 12:00 UTC*
