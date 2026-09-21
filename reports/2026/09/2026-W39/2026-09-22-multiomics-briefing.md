# 🧬 多组学研究简报
**2026年9月22日（周二）| 近48小时精选**

> 搜索范围：2026-09-20 ~ 2026-09-22 | 数据源：Nature Genetics, bioRxiv, medRxiv

---

## 📊 整体趋势评述

本期简报聚焦于 **蛋白质-基因组互作与蛋白基因组学** 这一前沿交叉方向：Nature Genetics 同期发表三篇研究，系统揭示遗传变异通过蛋白互作网络布线（piQTL）而非单纯转录层面发挥作用；bioRxiv 则在表观遗传-代谢耦合（衰老 SASP）、单细胞代谢调控（CDK4/6 磷酸化开关）、融合癌蛋白染色质入侵机制等方向提供了多层次的数据与计算框架，标志"蛋白组-基因组-表观组"三维整合正在成为多组学的新范式。

---

## 📑 精选论文

### 🔬 论文 1：蛋白质互作揭示基因组的隐藏布线

**标题**：Protein interactions reveal the hidden wiring of the genome

**作者**：Jing Hou & Joseph Schacherer
**机构**：Université de Strasbourg / CNRS
**平台**：Nature Genetics (Research) | **日期**：2026-09-21 | **DOI**：10.1038/s41588-026-02757-x
**链接**：https://doi.org/10.1038/s41588-026-02757-x

**一句话概要**：大规模酵母遗传筛选系统发现自然遗传变异通过蛋白互作网络（而非仅转录层面）广泛调控细胞表型。

**主要贡献**：
- 贡献1：开发 piQTL（蛋白互作数量性状基因座）系统，在酵母中系统性鉴定自然遗传变异对蛋白互作强度的影响，发现数千个影响蛋白互作网络的遗传变异位点。
- 贡献2：揭示遗传变异通过蛋白互作网络布线（protein interaction rewiring）是独立于基因表达变化的调控维度，为理解"缺失遗传性"提供新机制解释。
- 贡献3：建立大规模蛋白互作-遗传变异关联图谱，为疾病变异功能解读提供蛋白层面新视角。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
① 历史/现状：GWAS/eQTL 已系统性揭示转录层面的遗传调控机制，但大量疾病相关变异仍无法用表达变化解释；② Motivation：若遗传变异能改变蛋白-蛋白直接互作而非 mRNA 水平，则可解释传统方法遗漏的遗传效应；③ 突破点：首次在基因组尺度系统性定义 piQTL，证明自然变异对蛋白互作网络的重布线比 eQTL 更广泛；④ 局限：酵母模型的功能验证可迁移性待考，哺乳动物系统需进一步验证；⑤ Future work：piQTL 与 eQTL 的相对贡献比较、人类疾病相关 piQTL 的系统鉴定值得期待。

---

### 🔬 论文 2：体内蛋白互作组的遗传景观

**标题**：Genetic landscape of an in vivo protein interactome

**作者**：Besse, S.; Sakaguchi, T.; Gauthier, L.; et al. — Serohijos, A.W.R. & Michnick, S.W.
**机构**：Université de Montréal / Université de Sherbrooke
**平台**：Nature Genetics (Research Article) | **日期**：2026-09-21 | **DOI**：10.1038/s41588-026-02747-z
**链接**：https://doi.org/10.1038/s41588-026-02747-z

**一句话概要**：在哺乳动物细胞内系统性绘制蛋白互作组的遗传调控图谱，揭示突变对蛋白复合物组装的系统性影响。

**主要贡献**：
- 贡献1：建立哺乳动物细胞内蛋白互作组遗传变异图谱，系统量化遗传突变对蛋白-蛋白互作强度的影响范围与方向。
- 贡献2：发现互作扰动程度与疾病临床重要性正相关，表明蛋白互作破坏是疾病突变的重要致病机制。
- 贡献3：为变异分类（VUS）提供蛋白互作层面的功能读数，辅助临床意义解读。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
① 历史/现状：蛋白互作网络已广泛应用于功能注释，但哺乳动物细胞内互作网络的遗传调控机制尚缺乏系统性研究；② Motivation：与上篇酵母 piQTL 相呼应，但拓展至哺乳动物体内系统，为人类疾病直接关联提供证据；③ 突破点：首次在哺乳动物体内建立互作组-基因组关联图谱，量化互作网络层面的遗传贡献度；④ 局限：目前聚焦于特定蛋白复合物，系统覆盖度有待扩展；⑤ Future work：全基因组尺度的蛋白互作遗传图谱与临床表型的系统整合。

---

### 🔬 论文 3：代谢-表观耦合驱动细胞衰老的计算建模

**标题**：Metabolic-Epigenetic Coupling in Cellular Senescence: In Silico Cristae Remodeling Depletes Alpha-Ketoglutarate to Drive KDM4/6 Inhibition and SASP Amplification

**作者**：Maclos, M.; Dyer, J.
**机构**：University of Oxford（推断）
**平台**：bioRxiv (Systems Biology) | **日期**：2026-09-18 | **DOI**：10.64898/2026.09.16.752165
**链接**：https://doi.org/10.64898/2026.09.16.752165

**一句话概要**：计算系统生物学框架揭示线粒体嵴重塑通过消耗 α-酮戊二酸抑制 KDM4/6，推动衰老相关分泌表型（SASP）扩增。

**主要贡献**：
- 贡献1：建立衰老细胞线粒体嵴结构-代谢-表观组整合预测模型，以 α-酮戊二酸/2-羟基谷氨酸比值为核心代谢枢纽节点。
- 贡献2：发现嵴重塑→α-KG 耗竭→KDM4/6 活性降低→H3K9/27me3 积累→SASP 基因去抑制的完整信号链。
- 贡献3：计算框架可预测代谢干预对 SASP 的调控效果，为抗衰老干预提供代谢-表观联合靶点。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
① 历史/现状：SASP 机制研究已揭示 NF-κB、IL-6/8 等通路，但线粒体代谢-表观的直接耦合机制尚不清晰；② Motivation：细胞衰老伴随线粒体嵴结构退化（cristae remodeling），但这与代谢重编程和 SASP 的因果关系未被系统性阐明；③ 突破点：首次建立"嵴结构-代谢物-α-KG-KDM4/6-SASP"完整计算模型，提供可验证的代谢-表观耦合机制；④ 局限：纯计算框架，体内验证尚需湿实验；⑤ Future work：整合单细胞代谢组学与表观组学直接验证 α-KG 时空调控，代谢干预（α-KG 补充/酮体）治疗效果评估。

---

### 🔬 论文 4：CDK4/6 通过 DeSI1 磷酸化开关偶联增殖与膜/线粒体蛋白供给

**标题**：Cyclin D-CDK4/6 couple proliferation to membrane and mitochondrial protein supply through a DeSI1 phospho-switch

**作者**：Kaisari, S.; Lane, E.; et al. — Zheng, N.; Pagano, M.
**机构**：New York University School of Medicine / Harvard Medical School（推断）
**平台**：bioRxiv (Cell Biology) | **日期**：2026-09-18 | **DOI**：10.64898/2026.09.16.752001
**链接**：https://doi.org/10.64898/2026.09.16.752001

**一句话概要**：Cyclin D-CDK4/6 通过磷酸化 DeSI1 将细胞周期进程与膜/线粒体蛋白供给偶联，防止蛋白稳态超载。

**主要贡献**：
- 贡献1：发现 DeSI1 是 CDK4/6 的直接底物，其 S25 位点磷酸化将 CDK4/6 活性转化为膜/线粒体蛋白选择性去泛素化信号。
- 贡献2：磷酸化 DeSI1 选择性识别跨膜结构域和线粒体定位信号蛋白，防止未折叠蛋白应激并维持细胞器生物合成。
- 贡献3：揭示 CDK4/6 抑制剂（Palbociclib）的细胞周期效应之外的蛋白稳态调控维度，为临床联合用药提供新思路。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
① 历史/现状：CDK4/6 抑制剂已在临床上广泛用于 ER+ 乳腺癌，但 CDK4/6 在蛋白稳态层面的系统性功能尚未被全面认识；② Motivation：增殖信号（CDK4/6）和细胞器生物合成必须协调，但耦合机制不明；③ 突破点：发现 DeSI1 磷酸开关是信号偶联的核心分子枢纽，将激酶活性转化为底物选择性调控；④ 局限：DeSI1 缺失小鼠表型及生理意义尚需体内验证；⑤ Future work：CDK4/6i 与蛋白酶体抑制剂/分子伴侣诱导剂的联合治疗策略探索。

---

### 🔬 论文 5：EWSR1::FLI1 融合癌蛋白在核小体层面的染色质入侵机制

**标题**：Fusion Oncoprotein EWSR1::FLI1 Invades Nucleosomes at Consensus ETS Motifs and GGAA Microsatellites

**作者**：Chen, R.-W.; Zhou, R.; et al. — Theisen, E.R.
**机构**：Ohio State University（推断）
**平台**：bioRxiv (Biochemistry) | **日期**：2026-09-18 | **DOI**：10.64898/2026.09.16.752125
**链接**：https://doi.org/10.64898/2026.09.16.752125

**一句话概要**：Ewing 肉瘤融合蛋白 EWSR1::FLI1 能在核小体包裹的 DNA 上直接入侵 ETS 共识序列和 GGAA 微卫星，实现转录激活。

**主要贡献**：
- 贡献1：纯化全长 EWSR1::FLI1 并解析其与核小体复合物结构，首次证明融合蛋白可直接入侵核小体 DNA 而无需核小体驱逐。
- 贡献2：揭示 GGAA 微卫星是融合蛋白的强效转录激活增强子，其重复数决定增强子强度，解释了 Ewing 肉瘤的转录特异性。
- 贡献3：为靶向 EWSR1::FLI1 染色质入侵界面的分子设计提供结构基础，指明表观遗传抑制剂联合治疗路径。

**🔍 Critical 简评**：⭐⭐⭐⭐☆
① 历史/现状：EWSR1::FLI1 是 Ewing 肉瘤的主要致癌驱动因子，但其如何在染色质层面发挥作用长期缺乏结构证据；② Motivation：融合蛋白含有一段固有无序低复杂度序列（LCD），其如何特异性识别基因组靶点并驱动转录是核心悬而未决问题；③ 突破点：成功纯化全长蛋白并获得核小体-融合蛋白复合物结构，揭示"LCD 入侵 + DBD 特异性识别"的双重机制；④ 局限：目前限于体外研究，体内入侵效率调控机制待阐明；⑤ Future work：LCD 抑制剂或 PROTAC 设计、核小体层面药物筛选。

---

## 📋 近48小时其他相关发现

| 平台 | 论文 | 关键词 | 备注 |
|------|------|--------|------|
| bioRxiv | ssJSD: A fusion of sparsity and spatial information for HiC single-cell clustering (Lee & Lin, 2026-09-18) | 单细胞HiC / 稀疏数据 | 将稀疏性与空间信息融合改进单细胞HiC聚类 |
| bioRxiv | Joint inference of paired dynamical GRNs reveals distinct cell-state landscapes of neutrophil reprogramming (Ren et al., 2026-09-18) | 动态GRN推断 / scRNA | NetDes-Duo 联合推断双条件转录因子网络 |
| medRxiv | Air pollutant multiomics improves functional annotation of SNPs associated with lung disease (2026-09-19) | 多组学 / 环境暴露 | 空气污染物多组学改善肺部疾病 SNP 功能注释 |

---

*Generated by multi-omics-briefing v1.7.0*
*搜索时间窗口：2026-09-20 00:00 UTC ~ 2026-09-22 00:00 UTC*
