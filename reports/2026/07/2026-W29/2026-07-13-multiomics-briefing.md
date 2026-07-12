# 🧬 多组学研究简报
**2026年7月13日（周一）| 近48小时精选**

> 搜索范围：2026-07-11 ~ 2026-07-13 | 数据源：bioRxiv, medRxiv, ArXiv q-bio

---

## 📊 整体趋势评述

本期简报聚焦于**基因组基础模型的可解释性突破**与**空间多组学技术的持续深化**两个主题。Evo 2等大规模基因组基础模型的内部表征可解释性研究正在填补"黑箱"空白，通过协方差探针将隐空间转化为可解读的致病性信号，标志着基础模型从"性能竞争"转向"知识提取"的新阶段。空间组学方面，骨肉瘤转移前niche的线粒体谱系解析、空间蛋白基因组同细胞匹配，以及肿瘤免疫架构的联合建模，进一步推动了从二维组织学到三维分子解剖学的范式转变。

---

## 📑 精选论文

### 🔬 论文 1：基因组基础模型Evo 2内部表征的可解释性突破

**标题**：Interpretable variant effect prediction from genomic foundation model embeddings

**作者**：Pearce, M. T.; Dooms, T.; Yamamoto, R.; et al.

**机构**：Arc Institute / Stanford University

**平台**：bioRxiv (Genomics) | **日期**：2026-07-11 | **DOI**：10.64898/2026.04.10.717844

**链接**：https://doi.org/10.64898/2026.04.10.717844

**一句话概要**：通过探测Evo 2基因组基础模型的内部表征，构建协方差探针实现变体致病性的可解释预测。

**主要贡献**：
- 发现/揭示：Evo 2的7B参数序列嵌入中包含丰富的二阶结构信息，可通过协方差探针捕获。
- 发现/揭示：协方差特征在预测变体致病性方面匹配或超越专用变体效应预测工具（如CADD、EVE）。
- 发现/揭示：探针提取的特征可追溯到特定基因组功能元件，实现了"从嵌入到生物学机制"的可解释链路。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
基础模型时代的一个核心矛盾是：强大性能背后究竟编码了什么生物学知识？此前Evo 2、DNABERT等模型已展示出色的零样本预测能力，但可解释性始终是临床转化的主要障碍。该工作通过协方差探针将变体效应预测问题从黑箱推向白箱，具有重要的方法论意义。**动机**清晰：基础模型若要进入临床决策支持，必须回答"为什么预测该变体有害"而非仅给出分数。**突破点**在于利用二阶统计量（协方差矩阵）而非简单线性投影，保留嵌入空间中的交互结构。需注意：探针的可解释性依赖于Evo 2预训练语料库的覆盖度，对罕见变异或非编码区域的泛化能力仍需系统评估。此外，协方差探针的计算成本随嵌入维度平方增长，在全基因组尺度应用时需权衡效率。

---

### 🔬 论文 2：35种疾病的遗传相关性图谱揭示精神-癌症共病的双向遗传架构

**标题**：A Genetic Atlas of Direct and Inverse Neuropsychiatric-Cancer Comorbidity

**作者**：Flores-Rodero, M.; Fores-Martos, J.; Sanchez-Orti, J. V.; et al.; Valencia, A.; Tabares-Seisdedos, R.; Sanchez-Valle, J.

**机构**：University of Valencia / German Cancer Research Center (DKFZ)

**平台**：bioRxiv (Genomics) | **日期**：2026-07-11 | **DOI**：10.64898/2026.07.10.737193

**链接**：https://doi.org/10.64898/2026.07.10.737193

**一句话概要**：通过LDSC和HDL方法分析9种精神疾病×16种癌症的遗传相关性，构建共病遗传结构图谱。

**主要贡献**：
- 发现/揭示：部分精神疾病（如精神分裂症）与特定癌症存在"负遗传相关"（inverse comorbidity），即精神疾病患者罹患某些癌症的风险反而降低。
- 发现/揭示：双向（direct）共病和精神疾病保护性效应的遗传信号可追溯至不同的功能基因组区域。
- 发现/揭示：局部遗传相关性分析揭示了comorbidity相关基因的染色体三维邻近特征，提示染色质构象介导的基因调控可能是潜在机制。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
精神疾病与癌症之间的流行病学关联已被广泛报道，但其遗传基础此前缺乏系统性解析。**现状**方面，神经精神疾病与癌症的共病研究多停留在现象描述层面，遗传机制尚不清晰。**动机**：该研究首次在GWAS规模系统刻画35种疾病的pairwise遗传相关性网络，采用LDSC和HDL两种互补方法提高稳健性。**突破点**：通过局部遗传相关性分析（而非全基因组水平）定位功能基因组区域，为机制研究提供了精准靶点。**局限性**：GWAS汇总统计量的固有偏倚（winner's curse等）可能影响相关性估计；精神分裂症的保护性效应是否源于生活方式因素（吸烟减少等）的混淆仍需进一步剖析。**值得关注的future work**：将蛋白质组学数据整合进来，解析comorbidity相关基因的分子功能层次。

---

### 🔬 论文 3：线粒体谱系追踪+空间转录组解析骨肉瘤转移前niche的细胞命运切换机制

**标题**：Spatial mitochondrial lineage tracing uncovers a premetastatic niche and microenvironment programmed fate switching in osteosarcoma

**作者**：Xue, Y.; Su, Z.; Su, J.; et al.; Ho, J. W. K.

**机构**：The University of Hong Kong (HKU)

**平台**：bioRxiv (Bioinformatics) | **日期**：2026-07-11 | **DOI**：10.64898/2026.07.09.737611

**链接**：https://doi.org/10.64898/2026.07.09.737611

**一句话概要**：整合scRNA-seq、空间转录组和线粒体变异谱系追踪，揭示COL3A1祖细胞向ALPL/THY1命运分支并建立转移前niche的分子路径。

**主要贡献**：
- 发现/揭示：骨肉瘤恶性细胞经历从COL3A1祖细胞到ALPL成骨系和THY1间充质系的两条分歧命运路径。
- 发现/揭示：THY1间充质命运分支与转移前niche形成相关，提示细胞命运决定驱动转移潜能。
- 发现/揭示：空间转录组鉴定出转移前niche特有的免疫抑制微环境，肿瘤相关巨噬细胞（TAM）与肿瘤细胞的空间邻近是转移的关键调控因子。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
肿瘤转移的细胞命运决定机制是多组学研究的核心前沿之一。**现状**：传统Bulk测序无法区分细胞内异质性，而现有单细胞研究缺乏对细胞谱系关系的直接追踪。**动机**：该研究创新性地将线粒体基因组变异（内源性谱系条码）与空间转录组相结合，解决了scRNA-seq丢失空间信息的痛点。**突破点**：线粒体突变作为天然谱系追踪工具，无需基因工程改造，且与转录组数据天然匹配，实现了从谱系→空间→转录的三维整合。**局限**：线粒体突变率存在组织/细胞类型偏好性，可能影响某些组织的追踪覆盖率；转移前niche的因果关系而非相关性需通过功能实验验证。**Future work**：将该方法扩展到人类肿瘤活检样本，结合多区域采样，构建完整的转移演化图谱。

---

### 🔬 论文 4：PerturbMatch：利用Guide Multiplets将Perturb-seq效率提升至新高度

**标题**：Joint analysis of multiply perturbed cells improves statistical power and cost efficiency in Perturb-seq

**作者**：Yeung, J.; Tan, J.; Wang, L.; et al.; Forrest, W. F.; Xie, S.

**机构**：Genentech / Stanford University

**平台**：bioRxiv (Genomics) | **日期**：2026-07-11 | **DOI**：10.64898/2026.07.10.737863

**链接**：https://doi.org/10.64898/2026.07.10.737863

**一句话概要**：PerturbMatch通过统计分析框架重新利用被传统方法丢弃的guide multiplet细胞，显著提升Perturb-seq统计功效和成本效益。

**主要贡献**：
- 发现/揭示：guide multiplet细胞中多扰动的联合信号比单guide细胞更丰富，可恢复传统设计丢失的25-40%信息量。
- 发现/揭示：高guide负担细胞呈现应激和细胞周期抑制特征，需通过统计校正消除批次效应。
- 发现/揭示：PerturbMatch在成本降低50%的前提下达到与传统设计相当的统计功效。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
Perturb-seq是功能基因组学的核心技术，但成本高昂限制了筛选规模。**现状**：现有方法主动丢弃multiplet细胞，导致大量数据浪费；基于one-guide-per-cell的设计在成本与规模之间存在固有矛盾。**动机**：从信息论角度，multiplet并非纯粹噪声——多扰动的联合效应本身就携带单扰动无法获取的遗传互作信息。**突破点**：PerturbMatch通过概率图模型分离multiplet中的独立效应，并利用层次贝叶斯框架共享跨guide信息，实现统计功效的"免费午餐"。**局限**：对高guide负担细胞（>3 guides）的应激反应校正依赖模型假设，在生物学高stress场景下可能失效；不同扰动间的毒性竞争可能掩盖真实的遗传互作信号。**Future work**：将PerturbMatch扩展至混合CRISPRi/CRISPRa的混合扰动实验设计。

---

### 🔬 论文 5：CellTok——将单细胞转录组离散化为原生语言 token

**标题**：Tokenizing single-cell transcriptomes as a native language for large language models

**作者**：Xiao, C.; Ding, Y.; Bian, H.; Chen, Y.; Wei, L.; Zhang, X.

**机构**：Shanghai Jiao Tong University / Tsinghua University

**平台**：bioRxiv (Bioinformatics) | **日期**：2026-07-11 | **DOI**：10.1101/2025.10.22.684047

**链接**：https://doi.org/10.1101/2025.10.22.684047

**一句话概要**：CellTok将连续单细胞转录组向量量化为离散token序列，赋予预训练LLM原生处理单细胞数据的能力。

**主要贡献**：
- 发现/揭示：向量量化（Vector Quantization）可将高维scRNA谱转换为紧凑的离散token序列，保留细胞身份信息的同时实现10-50倍压缩。
- 发现/揭示：tokenized细胞可与自然语言token混合输入预训练LLM，实现跨模态零样本细胞类型注释和扰动响应预测。
- 发现/揭示：token序列的排列不变性使CellTok对技术噪声（批次效应、测序深度）具有鲁棒性。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
LLM与单细胞生物学的融合是2024-2026年的核心趋势之一。**现状**：此前尝试将scRNA数据输入LLM的方法（如scFoundation、Geneformer）多依赖定制架构，而CellTok尝试"不做任何修改"地将通用LLM应用于单细胞领域。**动机**：NLP领域的核心假设是离散token的组合能够编码丰富语义；CellTok验证这一假设在生物学语境中的有效性。**突破点**：向量量化层的端到端可学习性使token词汇表自适应数据分布，而非手工设计。**局限**：VQ的离散化必然损失信息，对稀有细胞类型或微弱信号的恢复能力有待评估；token词汇表大小选择（codebook size）对下游任务的敏感性尚需系统研究；与专用单细胞基础模型（如scGPT）的性能比较缺失，难以判断"通用LLM+tokenization"范式的真实增益。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | Cell-type-resolved spatial proteogenomics from matched genome and proteome of the same cells | 空间蛋白基因组，同细胞多组学 | 2026-07-10，值得关注的新技术 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-07-11 07:30 UTC ~ 2026-07-13 07:30 UTC*
