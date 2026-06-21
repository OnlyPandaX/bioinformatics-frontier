# 🔬 Bioinfo Weekly Summary v1.0.0

**周期**：2026-W25（6月15日 周一 ~ 6月21日 周日）  
**生成时间**：2026-06-21 11:00 HKT  
**数据源**：multi-omics-briefing v1.7.0 + EAlert Tracker v3.9.2

---

## 📊 周概览

| 来源 | 篇数 |
|------|------|
| journal-briefing（期刊追踪） | 5 期，共 96 篇 |
| multiomics-briefing（多组学简报） | 6 期，共 30 篇 |
| **合计** | **~126 篇** |

### 期刊分布（journal-briefing）
Nature Biotechnology 集中爆发（6月18-19日连续10+篇），Nature 主刊从周三开始大幅放量，Molecular Cell 周四周五各9篇。Trends in Immunology 前半周活跃。

### 主题分布（multiomics-briefing 精选 30 篇）
- 空间组学方法与资源：9 篇
- 3D基因组/染色质架构：4 篇
- 单细胞功能基因组学/Perturb-seq：5 篇
- 蛋白质组学：4 篇
- AI/基础模型：4 篇
- 神经退行性/衰老：3 篇
- 遗传学/因果推断：4 篇

---

## 🔥 重点期刊论文评述（journal-briefing）

### 1. Spatial distribution of the proteome in the human body and in cancers

**期刊**：Nature | **日期**：2026-06-17 | **DOI**：10.1038/s41586-026-10660-y  
**作者**：Yue L, Jiang W, Li S, Luo M… Guo T 等（西湖大学郭天南团队）

**评述**：郭天南团队利用DIA-MS绘制了涵盖58种健康成人组织、22种胎儿组织和25种癌症类型的人类蛋白质组空间分布图谱，定量13,609种蛋白质。这是蛋白质水平跨组织系统比较的里程碑——从2014年两个"人类蛋白质组草稿"到今天终于实现接近全组织的空间覆盖。但需注意"空间分布"仍在bulk层面，尚未达单细胞分辨率。该工作与同期EasySCP（单细胞蛋白质组学肝脏区带化）形成互补，共同推动空间蛋白质组学从概念验证走向常规应用。

---

### 2. Pythia provides deep learning-driven precision in CRISPR–Cas9 genome engineering

**期刊**：Nature Biotechnology | **链接**：https://nature.com/articles/s41587-025-02818-2

**评述**：CRISPR-Cas9的脱靶和效率预测一直是基因编辑领域的核心工程问题。Pythia将深度学习引入Cas9切割效率/特异性预测，从方法验证层面推进到实用工程工具。值得关注的是与Perturb-DBiT（空间CRISPR筛选）和PertCurve（连续扰动建模）共同构成的"基因编辑精准化"趋势——从设计（Pythia）到执行（Perturb-DBiT）到分析（PertCurve）的全链路优化。

---

### 3. Netrin1 blockade alleviates resistance to chemotherapy in pancreatic cancer

**期刊**：Nature | **链接**：https://nature.com/articles/s41586-026-10436-4

**评述**：胰腺癌化疗耐药是临床最棘手的问题之一。Netrin1阻断解除耐药的发现，代表了肿瘤微环境靶向从免疫检查点向更广泛的信号网络扩展的趋势。与本周同期的肿瘤-on-chip CAR-T模型、抗体-瓶刷前药偶联物等一起，体现了肿瘤治疗策略从"单一靶点"到"微环境重塑"的范式转变。

---

### 4. Expanding the human proteome with microproteins and peptideins

**期刊**：Nature | **链接**：https://nature.com/articles/s41586-026-10459-x

**评述**：人类蛋白质组的"暗物质"——小开放阅读框（smORF）编码的微蛋白/肽类——正在被系统性地发掘。该工作扩展了注释蛋白质组的边界，对药物靶标发现（特别是抗体药物和肽类药物）有直接意义。与"master proteins保护致命突变"（Nature News Feature）呼应，暗示蛋白质组的功能空间比我们认知的更广。

---

### 5. An aminoacyl-tRNA synthetase governs dsRNA-mediated trade-off between longevity and innate immunity

**期刊**：Molecular Cell

**评述**：氨酰-tRNA合成酶通过调控线粒体dsRNA水平平衡寿命与先天免疫——这是本周最引人深思的机制发现之一。寿命延长往往伴随免疫抑制的trade-off，而FARS-1/FARSA似乎在这一权衡中扮演"节拍器"。该发现将翻译机器、线粒体RNA稳态和衰老免疫学三个领域连接起来，为"健康老龄化"提供了新的分子框架。

---

## 🧬 重点多组学/预印本论文评述

### 1. 白蛋白作为肝脏再生"AND门"整合功能性状态信号

**平台**：bioRxiv | **DOI**：10.64898/2026.06.10.731465  
**机构**：MIT (Kristin A. Knouse)

**评述**：本周最具概念创新性的发现。白蛋白通过结合视黄醇和长链脂肪酸构成逻辑"AND门"——视黄醇丢失（损伤信号）+脂肪酸升高（增殖信号）双条件同时满足时解除HGF抑制，启动再生。将布尔逻辑引入分子信号传导的概念框架极其优雅，确保再生仅在真正需要时启动。非靶向代谢组学的巧妙运用使该发现成为"假设驱动+发现驱动"融合的典范。机制主要在斑马鱼和小鼠中验证，人类临床转化路径尚需探索。

---

### 2. TOP1介导的神经元基因组损伤是ALS/FTD/AD的共享机制

**平台**：bioRxiv (v4) | **DOI**：10.1101/2025.03.03.641186  
**机构**：Boston Children's Hospital / Harvard Medical School

**评述**：469个神经元单细胞WGS揭示ALS、FTD和AD共享TOP1介导的体细胞Indel突变模式，效应量呈疾病梯度（FTD 76% > AD 61% > ALS 22%）。这一发现将TDP-43和tau两种看似独立的蛋白病理学统一到DNA损伤修复框架下，是神经退行性疾病领域的范式级工作。局限性：v4仍为预印本且样本量有限，缺乏神经元亚型分层分析。

---

### 3. Perturb-Seq全图谱揭示调控网络枢纽驱动人类谱系规范

**平台**：bioRxiv (v3) | **DOI**：10.64898/2025.12.15.694070  
**机构**：UT Southwestern Medical Center

**评述**：首次在心肌细胞分化中系统扰动近全部~2000个人类TF，用数据证明了发育调控是分布式枢纽网络而非master regulator层级——这对统治发育生物学数十年的"主调控基因"概念提出了根本性挑战。MEF2-PRC1互作执行替代命运压制的发现、以及将功能基因组数据转化为可预测疾病变异效应的Transformer模型，都是亮点。

---

### 4. 固有免疫中可遗传单细胞转录状态塑造功能异质性

**平台**：bioRxiv | **DOI**：10.64898/2026.06.17.732820  
**机构**：Polish Academy of Science (Pawel Paszek)

**评述**：概念性突破。通过经典的fluctuation test在哺乳动物免疫细胞中直接量化了转录遗传性——特定基因（如CD36）的转录状态可持续25+细胞分裂并影响感染易感性。挑战了"单细胞异质性=随机噪声"的简单假设，将遗传性直接与免疫功能因果关联。CD36的细胞密度依赖性提示旁分泌正反馈，可能在高密度组织中形成空间模式化。

---

### 5. 跨物种染色质可及性定位HIVEP3为胸腺上皮成熟驱动因子

**平台**：bioRxiv | **DOI**：10.64898/2026.06.16.732438  
**机构**：Center for Research in Transplantation and Translational Immunology (Matthieu Giraud)

**评述**：跨物种（人/小鼠/大鼠）scATAC-seq比较筛选出HIVEP3作为mTEC成熟和自身抗原表达的新调控因子。选择大鼠（免疫更接近人类）而非小鼠做功能验证是明智之举。Hivep3缺失导致多器官T细胞浸润和慢性炎症，为AIRE独立的中枢耐受途径提供了新证据。与IBDverse（110万回肠细胞图谱）共同指向免疫细胞在疾病中的因果角色。

---

## 📈 领域趋势

### 趋势一：空间功能基因组学——从描述性图谱到因果推断

本周最具方向感的趋势。Perturb-DBiT（Nature Biotechnology）实现空间CRISPR筛选映射total RNA；AD小胶质细胞空间域（Nature Medicine）从认知韧性人群反推拐点；STACAME实现跨物种空间转录组对齐。空间组学正从"画地图"升级为"在地图上做实验"。

### 趋势二：单细胞蛋白质组学实用化

郭天南团队Nature人体蛋白质组空间图谱 + EasySCP单细胞肝脏区带化 + "Deeper is not always better"反思DIA深度策略，三者同期出现。简化流程（"Easy"是特性而非妥协）和重新审视通量-深度权衡，标志着空间蛋白质组学正从方法开发走向常规生物学发现。

### 趋势三：3D基因组的单等位基因分辨率

CoPhasing（单倍型解析3D基因组）+ 染色质折叠重复基序语法 + Domino（果蝇染色质绝缘），共同推动3D基因组从"群体平均"走向"等位基因特异性"。同源染色体间的结构差异可能是基因调控差异的重要来源，此前被bulk方法掩盖。

### 趋势四：可解释性与因果推断的双路径合流

SAE解读单细胞基础模型（可机械式解释）+ Het-seq因果推断（数据层面因果）+ PertCurve连续扰动建模，共同指向"不只是预测，而是理解和控制"的范式转变。这是AI for Science从黑箱到白箱的关键一步。

### 趋势五：衰老-免疫权衡的分子机制

氨基酸tRNA合成酶平衡寿命与免疫、卵巢衰老的时空协调失调、线粒体-溶酶体偶联驱动衰老——本周多篇论文从不同角度揭示衰老不是单一通路的退化，而是多系统协调的渐进性丧失。

---

## 🔭 下周关注方向

1. **Perturb-DBiT + PertCurve 的整合应用**：空间CRISPR筛选产出连续扰动强度数据，PertCurve的曲线建模能否直接应用于空间扰动数据？这可能催生"空间功能基因组学2.0"。

2. **白蛋白AND门机制的跨器官验证**：肝脏再生的AND门逻辑是否在其他再生器官（如肺、肾、皮肤）中存在类似的分子"功能状态报告"机制？

3. **HIVEP3与自身免疫病的关联**：在APECED/APS-1患者中筛查HIVEP3变异作为修饰因子；肿瘤免疫治疗中评估HIVEP3对胸腺稳态重建的影响。

4. **单细胞基础模型嵌入质量**：Theis团队基准测试结果值得关注——如果重建质量不理想，当前scGPT/scFoundation/Geneformer的嵌入策略可能需要根本性重新审视。

5. **Nature Biotechnology集中发文的后续影响**：本周Nat Biotech 10+篇同时上线（CAR-T on-chip × 2、蛋白质设计、CRISPR精准化、单细胞蛋白质组学基准等），关注这些工作的社区讨论和复现进展。

---

*Generated by Bioinfo Weekly Summary v1.0.0*
*Week: 2026-W25 (2026-06-15 ~ 2026-06-21)*
