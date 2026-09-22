# 🧬 多组学研究简报
**2026年9月23日（周三）| 近48小时精选**

> 搜索范围：2026-09-21 ~ 2026-09-23 | 数据源：Nature 系列, bioRxiv, medRxiv, ArXiv

---

## 📊 整体趋势评述

本期 48 小时窗口的核心线索是 **"把遗传关联放回调控语境里"**：单细胞多组学 QTL、疾病特异的 sc-eQTL 图谱、以及从序列到功能（S2F）模型迁移推断的因果调控网络，都在试图弥合复杂疾病"缺失的调控"缺口——不再只问"哪个变异"，而是问"在哪个细胞状态、哪个祖先背景、哪条调控链上"。方法层面，纳米孔长读长转录组上的高精度变异检出（RNA 层面诊断）与"同一张切片上先后做空间代谢组+空间蛋白组"的实验范式，标志多组学从"测得更多"转向"在同一坐标上测得彼此可对齐"。蛋白互作组的时序化（InterVir/PROTEA）与基因组基础模型的临床迁移，则是本期另一条值得跟踪的整合抓手。

---

## 📑 精选论文

### 🔬 论文 1：纳米孔转录组数据的高精度 SNP 检出工具

**标题**：NanoTS: a deep learning tool for accurate SNP calling in nanopore long-read transcriptome data

**作者**：Zelin Liu, Feng Wang, Robert Wang, ... Lan Lin & Yi Xing（通讯作者：Robert Wang, Yi Xing）
**机构**：Center for Computational and Genomic Medicine, Children's Hospital of Philadelphia（美国费城儿童医院计算与基因组医学中心）
**平台**：Nature Methods (Brief Communication, Open Access) | **日期**：2026-09-22 | **DOI**：10.1038/s41592-026-03225-4
**链接**：https://doi.org/10.1038/s41592-026-03225-4

**一句话概要**：用深度学习从纳米孔长读长转录组数据中高精度检出 SNP 并判定致病位点基因型。

**主要贡献**：
- 贡献1：提出等位基因分相堆叠（allele-phased pileup）策略并整合跨读单倍型信息，采用卷积+全连接子网络架构；在 ≥5 条支持 reads 时，direct RNA 与 cDNA 数据的 F1 分别 >0.980 / >0.966，precision、recall 均 >0.979（dRNA）/ >0.957（cDNA）。
- 贡献2：针对长读长转录组变异检出的老大难——等位失衡（allelic imbalance），显著优于 Clair3-RNA 与 LongcallR；cDNA 中 ALT 比例 0.05–0.20 时 F1 提升 0.338–0.478（vs Clair3-RNA）、0.497–0.635（vs LongcallR）。
- 贡献3：在 422 个免疫出生缺陷（IEI）基因的靶向 TEQUILA-seq 数据（25 例孟德尔遗传病患者）中准确检出并分型 32 个已知致病变异（含 PIGN、PMM2 等 CDG 位点），展示 RNA 层面临床诊断潜力。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
① 历史/现状：纳米孔长读长转录组能一次读通全长转录本并直接检出 RNA 修饰，但较高错误率使其变异检出一直落后于 Illumina 短读与 PacBio HiFi；② Motivation：转录组变异检出受基因间覆盖极不均、isoform 多样性、等位特异表达与建库伪影困扰，标准长读 DNA caller 直接套用会明显掉性能；③ 突破点：把"等位+链向"分相堆叠、单倍型定相与上下文熵/覆盖等 6 类特征显式喂入网络，专治等位失衡这一"低频但关键"的场景，并在 dRNA/cDNA/靶向三种协议上一致领先；④ 局限：训练与多数评估基于 GIAB 样本（HG001–HG005），真实临床异质样本的外推、同聚物等困难区域的精度天花板仍需更多验证；⑤ Future work：向肿瘤异质克隆、RNA 编辑与单倍型特异表达扩展，以及作为 RNA 层面诊断（而非仅基因组）的标准化流程落地。

---

### 🔬 论文 2：衰老过程中的单细胞多组学 QTL 图谱

**标题**：Single-cell multiomic QTL mapping reveals state-dependent genetic regulation and associated gene during cellular senescence

**作者**：X. Yi, X. Wang, K. Liu, ... D. Huang & M. J. Li（通讯作者：Xianfu Yi）
**机构**：Department of Bioinformatics, State Key Laboratory of Experimental Hematology（通讯作者 Xianfu Yi）
**平台**：bioRxiv (Genetics) | **日期**：2026-09-21 | **DOI**：10.64898/2026.09.17.752532
**链接**：https://doi.org/10.64898/2026.09.17.752532

**一句话概要**：用 100 名供体血管内皮细胞衰老前后的单细胞多组学 QTL，解析状态依赖的非编码遗传调控。

**主要贡献**：
- 贡献1：生成 100 名基因分型供体来源的原代人脐静脉内皮细胞（HUVEC）在增殖态与复制性衰老态的单细胞 multiome（ATAC+RNA）图谱，完成状态分辨的 eQTL 与 caQTL 定位。
- 贡献2：引入协方差感知的多元 QTL 映射，识别染色质可及性-表达联合 QTL（caeQTL），找回单模态扫描遗漏的、不对称且跨模态分布的关联，并结合精细定位、染色质状态注释、遗传力富集与 SNP-to-gene 算法给出正交支持。
- 贡献3：机制层面锁定 rs2019090 通过"衰老放大、等位特异、HMGA1 相关"的增强子-启动子调控影响 PDGFD 表达与内皮表型，为心血管复杂位点提供候选因果变异与效应基因。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
① 历史/现状：eQTL/caQTL 已广泛用于解读非编码变异，但绝大多数图谱基于单一细胞状态，难以刻画细胞状态转换如何"重写"遗传效应；② Motivation：细胞衰老是心血管等复杂疾病的核心过程，非编码风险位点是否只在衰老态才"生效"长期缺乏系统性证据；③ 突破点：同批供体、同一细胞类型、两种状态的配对设计 + 多元联合 QTL，直接证明调控效应存在状态依赖性并从相关走向因果；④ 局限：HUVEC 为单一细胞模型，衰老诱导方式（复制性）与体内衰老的对应关系有限，多组织、多细胞类型普适性待验证；⑤ Future work：把状态分辨 QTL 扩展到更多细胞类型与人群，并结合扰动实验验证 rs2019090–PDGFD 的因果链。

---

### 🔬 论文 3：系统性红斑狼疮的多祖先单细胞调控图谱（SLEmap）

**标题**：Single-cell multi-ancestry regulatory map of systemic lupus erythematosus

**作者**：H. Jang, C. Sutherland, W. Lee, ... G. Trynka & E. E. Davenport（通讯作者：Emma E. Davenport）
**机构**：Sanger Institute, Wellcome Genome Campus / Open Targets（英国桑格研究所）
**平台**：bioRxiv (Genetics) | **日期**：2026-09-21 | **DOI**：10.64898/2026.09.18.752560
**链接**：https://doi.org/10.64898/2026.09.18.752560

**一句话概要**：构建 281 例系统性红斑狼疮患者的多祖先外周血单细胞 eQTL 图谱，定位疾病遗传变异。

**主要贡献**：
- 贡献1：建立 SLEmap——281 例 SLE 患者 PBMC 的单细胞表达定量性状基因座（sc-eQTL）图谱，鉴定 5,656 个基因中的 18,608 个独立 eQTL。
- 贡献2：其中 149 个信号（66 个基因）与 SLE GWAS 位点共定位，近一半共定位仅在细胞类型层级分析中被检出，凸显细胞语境对解读疾病相关变异的关键性；多祖先数据识别出跨祖先稳健的调控信号并提升信号分辨率。
- 贡献3：多数共定位在健康队列（OneK1K）sc-eQTL 中无法检出，说明疾病特异性调控是主要来源，并指向包括 NF-κB 通路在内的细胞类型特异机制。

**🔍 Critical 简评**：⭐⭐⭐⭐⭐
① 历史/现状：sc-eQTL 图谱（如 OneK1K、DICE）已证明细胞类型解析能提升变异到基因的映射，但多以健康人为主、且样本量与祖先多样性有限；② Motivation：SLE 遗传风险高度细胞类型特异，健康队列的调控图谱可能整体"脱靶"，需要疾病、多祖先、大样本的专用资源；③ 突破点：直接把"疾病状态 + 细胞类型 + 多祖先"三个维度叠在一张图谱上，量化出近半数共定位只能靠细胞层级分析捞回，给出可复用的资源与方法范式；④ 局限：仅为外周血 PBMC，缺失靶器官（肾、皮肤）调控信息，横断面设计无法区分因果与继发效应，样本量与单细胞深度仍受平台限制；⑤ Future work：纵向与治疗分层队列、跨组织图谱扩展，以及基于共定位信号的功能验证与药物靶点优先级化。

---

### 🔬 论文 4：从序列到功能模型迁移，因果推断基因调控网络

**标题**：DeepSCENIC: transfer learning from sequence-to-function models enables causal gene regulatory network inference

**作者**：G. Partel, S. De Winter, V. Konstantakos, C. H. Blaauw & S. Aerts（通讯作者：Stein Aerts）
**机构**：VIB Center of AI & Computational Biology, VIB-KU Leuven Center for Brain and Disease Research（比利时 VIB-KU Leuven）
**平台**：bioRxiv (Bioinformatics) | **日期**：2026-09-22 | **DOI**：10.64898/2026.09.18.752607
**链接**：https://doi.org/10.64898/2026.09.18.752607

**一句话概要**：把序列到功能模型迁移到单细胞多组学图谱，实现因果化的基因调控网络推断。

**主要贡献**：
- 贡献1：提出 DeepSCENIC，将 Enformer、Borzoi 等预训练序列到功能（S2F）模型迁移到单细胞多组学图谱，同时预测单细胞基因表达与染色质可及性，补上了 S2F 模型缺少"细胞 trans 环境"的短板。
- 贡献2：高保真恢复 TF–调控元件（TF-RE）相互作用，无需 PWM 先验即可捕捉 de novo TF 结合 motif；在对照大规模 CRISPRi 筛选时，增强子-基因（RE-TG）关联优于基于相关的基线。
- 贡献3：训练后的模型可作为机制模拟器预测细胞状态转变中的扰动效应，在黑色素瘤细胞系图谱中准确重演从黑色素细胞样到间质样的转录漂移。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
① 历史/现状：S2F 深度模型已成为解读顺式调控密码的重要工具，但通常忽略转录因子的细胞层面 trans 环境；而 GRN 推断方法多依赖启发式或简单 PWM，未充分利用增强子的组合语法——两派长期各管一段；② Motivation：要把"序列语法"和"细胞状态"接起来，才能从相关性走向因果、并支持扰动预测；③ 突破点：用迁移学习把两者焊接，且以 CRISPRi 大规模筛选为基准验证 RE-TG 关联，论证闭环相对扎实；④ 局限：迁移效果依赖预训练 S2F 模型质量与物种/组织覆盖，GRN 的"因果"仍受限于可观测扰动空间，黑色素瘤案例为单一细胞系验证；⑤ Future work：扩展到更多细胞状态与疾病图谱、把预测扰动与湿实验闭环筛选绑定，以及与单细胞多组学 QTL 类方法的交叉验证。

---

### 🔬 论文 5：同一张切片上先后做空间代谢组与空间蛋白组

**标题**：Integrated Spatial Metabolomics and Proteomics from the Same Tissue Section Using a Conductive ITO-PET Slide

**作者**：H. Wang, Y. Li, P. Xue（通讯作者：Yan Li）
**机构**：Institute of Biophysics, Chinese Academy of Sciences（中国科学院生物物理研究所）
**平台**：bioRxiv (Molecular Biology) | **日期**：2026-09-21 | **DOI**：10.64898/2026.09.07.749981
**链接**：https://doi.org/10.64898/2026.09.07.749981

**一句话概要**：用 ITO-PET 导电载玻片在同一组织切片上顺序完成空间代谢组与空间蛋白组检测。

**主要贡献**：
- 贡献1：开发并系统评估 ITO-PET 导电载玻片，兼容 MALDI 质谱成像（MALDI-MSI）与激光显微切割串联液质（LCM-LC-MS）对同一张切片的顺序分析，解决两类技术对载玻片要求互相冲突的难题。
- 贡献2：以小鼠脑组织为模型，ITO-PET 的 MALDI-MSI 性能与常规 ITO-glass 高度一致（谱图 Pearson R = 0.90），离子检出覆盖、代谢物注释、信号强度分布与空间分子模式均得以保持。
- 贡献3：MALDI 之后仍可进行切割模式 LCM 并获得与常规 PEN-glass 相当的蛋白组信号强度与鉴定蛋白组数；在脑、肾、肺、脾、肝等多组织中验证了信号强度分布、前体离子数与蛋白组鉴定在 MALDI 前后的可比性与重叠度。

**🔍 Critical 简评**：⭐⭐⭐☆☆
① 历史/现状：空间代谢组（MALDI-MSI）与空间蛋白组（LCM-LC-MS）各自成熟，但要在"同一张切片、同一坐标系"上联合，受制于载玻片导电性与切割性能的取舍，此前多靠相邻切片近似对齐；② Motivation：多组学整合最大的误差源之一就是"不同切片/不同坐标"带来的空间错配，原位共测能从根上消除该误差；③ 突破点：用 ITO-PET 一张片子兼容两种物理过程，给出了可量化的性能等价证据与多组织验证，工程性扎实；④ 局限：本质是平台/流程方法学工作，生物发现有限；顺序分析对切片完整性、时间间隔与代谢物损失的影响，跨实验室可复现性仍需更多独立验证；⑤ Future work：与空间转录组串联成"代谢-蛋白-转录"三模态同切片流程，并推进到病理样本与临床 FFPE 场景。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| Nature Methods | SVPG: a pangenome-based structural variant detection approach and rapid augmentation of pangenome graphs with new samples（10.1038/s41592-026-03219-2） | 结构变异 / 泛基因组 | 基于单倍型泛基因组参考做 SV 检出，rar/somatic SV 改善明显，泛基因组图扩充提速近 10 倍（21 Sep 2026） |
| bioRxiv | MINT infers the latent single-cell spatial transcriptome from paired histology（10.64898/2026.09.16.751717） | 空间转录组 | 无需外部单细胞参考，从配对 H&E 形态推断细胞级空间转录组；人肺腺癌中解析 TLS 结构（22 Sep 2026） |
| bioRxiv | A Temporal Interactome Atlas across RNA Viruses reveals Convergent Vulnerabilities for Antiviral Repurposing（10.64898/2026.09.21.753288） | 蛋白互作组 / 抗病毒 | InterVir 图谱 + PROTEA 框架刻画 5 种 RNA 病毒时序互作组；10 化合物实测抗病毒有效（22 Sep 2026） |
| bioRxiv | Multi-omics analyses reveal environmentally adaptive cell-state remodeling during human iPSC biomanufacturing（10.64898/2026.05.26.727850） | 多组学 / 生物制造 | 蛋白+代谢+转录整合，揭示搅拌悬浮生物工艺下 hiPSC 状态重塑与发育程序的关系（21 Sep 2026） |
| ArXiv | Retracing the Process of Translation: Proteome-wide mapping of stable transcriptomic predictors of protein abundance in cancer cells（2609.24004） | 蛋白丰度 / 翻译 | 蛋白质组范围映射转录本特征对蛋白丰度的稳定预测（21 Sep 2026） |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-09-21 00:00 UTC ~ 2026-09-23 00:00 UTC*
