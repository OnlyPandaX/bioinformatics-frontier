# 🧬 Bioinfo Weekly Summary | 2026-W22

**Bioinfo Weekly Summary v1.0.0**
**周期**: 2026-05-25 (周一) ~ 2026-05-31 (周日)
**生成时间**: 2026-05-31

---

## 📊 一、周概览

| 来源 | 日报数 | 论文总数（去重前） |
|------|--------|-------------------|
| journal-briefing (EAlert Tracker) | 5 | 105 |
| multiomics-briefing | 6 | ~30 篇精选 |
| **合计** | **11** | **~135 篇** |

> 注：journal-briefing 跨日存在重复收录（如 Hallmarks of Cancer、POSTN+myofibroblasts 等多次出现），去重后实际独立论文约 60-70 篇。multiomics-briefing 已精选，重复率低。

### 期刊分布亮点
- **Cell**: 15+ 篇（含 Hallmarks of Cancer 25周年专题、KRAS 相分离、空间转录组嗅觉图谱等）
- **Nature**: 14 篇（含小胶质细胞修复功能、人类胚胎时空转录组图谱等重磅）
- **Nature Computational Science**: 9 篇（专刊：蛋白质语言模型、空间转录组对齐基准、网络生物学基础模型量化）
- **Nature Cancer**: 11 篇（CD40 激动剂、铁死亡抵抗、脑膜转移等）
- **Science Translational Medicine**: 2 篇（卵巢癌 PARPi 耐药）
- **Nature Communications**: 4+ 篇
- **bioRxiv/ArXiv/medRxiv**: 多组学精选约 20 篇

---

## 🌟 二、重点期刊论文评述（journal-briefing）

### 1. The Hallmarks of Cancer: 25 years guiding discovery and therapy

- **期刊**: Cell | **日期**: 2026-04-16 | **DOI**: 10.1016/j.cell.2026.03.033
- **作者**: Cell Editorial Team
- **关键词**: 癌症标志、综述、治疗范式

**评述**: Hanahan & Weinberg 的 Hallmarks of Cancer 框架自 2000 年提出以来，已成为肿瘤生物学最具影响力的概念体系。本综述系统回顾 25 年来该框架如何指导发现与治疗，不仅更新了新兴标志（如表观遗传重编程、多态性微生物组），更重要的是反思了"标志"框架本身的局限——它倾向于将癌症简化为离散功能模块，而真实的肿瘤进化是连续、情境依赖的过程。25 周年之际，Cell Press 专门举办 Hallmarks of Cancer Symposium（2026），标志着该框架进入"后标志"时代的讨论。

---

### 2. Farnesylation-driven KRAS phase separation promotes colon tumor growth

- **期刊**: Cell | **日期**: 2026-05-27
- **作者**: Wang X, Zhang Y, Lu M 等
- **关键词**: KRAS、相分离、法尼基化、结直肠癌

**评述**: KRAS 是肿瘤研究中最"顽固"的靶点之一。本研究发现法尼基化修饰驱动 KRAS 发生液-液相分离（LLPS），形成凝聚体促进结肠肿瘤生长。这一发现将 KRAS 的膜定位机制从"脂锚定"模型扩展到"相分离组织"模型，为理解 KRAS 信号的空间调控提供了新框架。法尼基转移酶抑制剂（FTI）在临床上长期未达预期，但本研究提示 FTI 的作用可能不仅在于阻断膜定位，还在于破坏 KRAS 相分离——这为 FTI 的重新评估提供了理论依据。

---

### 3. Genomic instability drives POSTN(+) myofibroblasts via STING-WNT axis to promote immunosuppression and PARPi resistance in ovarian cancer

- **期刊**: Science Translational Medicine | **日期**: 2026-05-27 | **DOI**: 10.1126/scitranslmed.ady2719
- **作者**: Liu D, Tao K, Cai C 等
- **关键词**: 卵巢癌、PARPi 耐药、STING-WNT、肿瘤微环境

**评述**: PARP 抑制剂耐药是卵巢癌治疗的重大挑战。本研究揭示了基因组不稳定性 → cGAS-STING 激活 → WNT 信号 → POSTN+ 成纤维细胞分化 → 免疫抑制微环境的完整因果链。亮点在于将先天免疫感知（STING）与发育信号（WNT）在肿瘤微环境重塑中直接关联，解释了为何高基因组不稳定的肿瘤反而更易耐药——因为 STING 信号在肿瘤细胞中的效应并非激活抗肿瘤免疫，而是通过旁分泌重塑基质。这一发现对 PARPi + 免疫检查点抑制剂的联合策略设计有直接启示。

---

### 4. Targeting arginine metabolism reverses bone immunosuppressive microenvironment and metastasis in ARID1A-deficient triple negative breast cancer

- **期刊**: Nature Communications | **日期**: 2026-05-26 | **DOI**: 10.1038/s41467-026-73574-3
- **作者**: Pan S, Wang J, Wang B 等
- **关键词**: 三阴性乳腺癌、精氨酸代谢、骨转移、ARID1A

**评述**: ARID1A 缺失型 TNBC 的骨转移是临床难题。本研究发现 ARID1A 缺失导致精氨酸代谢重编程，创造免疫抑制性骨微环境。靶向精氨酸代谢可逆转这一状态，抑制骨转移。代谢-免疫交叉是当前肿瘤研究的核心前沿之一，本研究将表观遗传缺陷（ARID1A）→ 代谢重编程（精氨酸）→ 免疫逃逸（骨微环境）串联起来，为合成致死策略之外的 ARID1A 缺陷型肿瘤治疗提供了新思路。

---

### 5. Mesenchymal drift: A convergent framework for the hallmarks of aging

- **期刊**: Cell | **链接**: Cell fulltext
- **关键词**: 衰老、间充质漂移、整合框架

**评述**: 与 Hallmarks of Cancer 的"离散标志"框架不同，本研究提出衰老的"间充质漂移"（Mesenchymal drift）概念，认为衰老的核心不是多个独立标志的叠加，而是细胞命运向间充质状态系统性偏移的趋同过程。这一框架试图统一解释衰老的多种表型——纤维化、慢性炎症、干细胞耗竭——均可视为间充质漂移的不同表现。如果成立，靶向间充质漂移上游调控因子可能比逐一干预衰老标志更有效。这是本周最具概念创新性的论文之一。

---

## 🔬 三、重点预印本/Nature 论文评述（multiomics-briefing）

### 1. 人类胚胎时空转录组图谱（Nature）

- **标题**: Spatiotemporal transcriptome atlas of human embryos after gastrulation
- **作者**: Pan J et al. | **期刊**: Nature (2026-05-27) | **DOI**: s41586-026-10545-0
- **技术**: Stereo-seq + snRNA-seq

**评述**: 人类早期胚胎发育时空组学的里程碑工作。13 个 CS12-23 期完整胚胎、77 个矢状切面的 Stereo-seq 数据，填补了人类原肠胚形成后至器官发生早期的时空转录组空白。与小鼠 E8.5-E10.5 对应时期的人类数据极度稀缺，本研究提供的参考图谱对先天性疾病的机制研究具有不可替代的价值。Stereo-seq 的亚细胞分辨率使得细胞互作和空间信号梯度的解析成为可能。

---

### 2. COVID-19 重症干扰素响应异质性与脂质代谢免疫调节轴（bioRxiv）

- **标题**: Systemic Multi-Omics Analysis Reveals Interferon Response Heterogeneity and Links Lipid Metabolism to Immune Alterations in Severe COVID-19
- **作者**: Lira-Junior R, Ambikan A 等 (Karolinska Institutet) | **DOI**: 10.1101/2025.03.14.643374
- **技术**: 转录组 + 蛋白组 + 代谢组 + 免疫活化标志物

**评述**: 本周最高质量的系统性多组学研究。核心发现——"高 ISG 表达 ≠ 有效免疫"——挑战了干扰素在 COVID-19 中的主流认知。ISG 三分类内型（LIS/MIS/HIS）框架揭示了免疫活化与代谢抑制的解偶联现象，血浆转移实验提供了功能性因果证据。这一发现对早期 IFN-β 治疗 COVID-19 临床试验的失败提供了机制解释，也提示精准免疫治疗需基于内型分层而非临床严重度。

---

### 3. 长读长 RNA-seq 揭示皮层胶质细胞 isoform 复杂度（bioRxiv）

- **标题**: Long-read transcriptomics of purified human cortical cell types exposes glial isoform complexity and disease-relevant transcript architecture
- **作者**: Yang A, Rodriguez M 等 (Mount Sinai) | **DOI**: 10.1101/2025.11.25.690524
- **技术**: FANS + 长读长/短读长 RNA-seq

**评述**: 颠覆性发现——少突胶质细胞和小胶质细胞的 isoform 多样性高于神经元，挑战了"皮层转录复杂度主要由神经元驱动"的传统认知。35-56% 的新注释 isoform 和疾病相关基因异常剪接的富集，揭示了标准短读长注释"隐藏"的致病层。这一发现对神经精神疾病的转录组学研究范式有深远影响——基于短读长的差异剪接分析可能系统性遗漏了胶质细胞中的关键转录变异。

---

## 📈 四、领域趋势

### 🔥 本周研究热点

1. **空间组学从技术验证走向参考图谱**
   - 人类胚胎时空转录组图谱（Nature）标志着空间组学进入"基础设施"建设阶段
   - 空间转录组对齐基准（Nat Comput Sci）、SpCAST（ArXiv）、Geometry-First 生成重构（ArXiv）持续推动方法学创新
   - v-CyCIF 实现 FFPE 临床样本 3D 空间多组学，打破临床档案样本空间分析瓶颈

2. **AI 基础模型的生物学解释与工程化竞争**
   - SIGnature（Nat Biotech）：单细胞基础模型从特征提取器升级为生物学解释工具
   - Carbon（Hugging Face）vs Evo2：DNA 语言模型进入工程化竞争，争论焦点从"模型规模"转向"tokenization-数据-任务对齐"
   - 网络生物学基础模型量化（Nat Comput Sci）：资源高效推理使大规模部署成为可能
   - C3P（ArXiv）：对比学习 bridging 基因组语言模型与调控语义的鸿沟

3. **肿瘤免疫微环境的系统性重编程**
   - CD40 激动剂（Nature Cancer 专题）：FAP×CD40 DARPin、溶瘤病毒+细胞因子、髓系细胞可塑性
   - 铁死亡抵抗机制（TMEM87A/Golgi pH 稳态）和脑膜转移前微生态位
   - 鼻咽癌多组学分型与诱导化疗响应（Nat Cancer）

4. **CRISPR 方法论反思与衰老框架创新**
   - 高 MOI sgRNA 多重化筛选（Nature Methods）挑战低 MOI 教条
   - Mesenchymal drift 框架（Cell）统一衰老多种表型

5. **联邦学习与环境暴露组学**
   - FPLIER：隐私保护下跨中心转录组通路分解
   - ToxiTaRGET：3,607 个多组学数据集的环境毒理资源平台

---

## 🔭 五、下周关注方向

1. **SIGnature 后续影响**：单细胞基础模型归因分析能否改变"哪些基因重要"的判定范式？关注社区对归因分数可靠性的讨论

2. **Hallmarks of Cancer 25 周年后续**：Cell Press Symposium 是否提出"后标志"框架？关注社交媒体/博客讨论

3. **人类胚胎时空图谱数据开放**：Stereo-seq 数据是否公开可及？对先天疾病研究的催化效应

4. **KRAS 相分离的功能验证**：FTI 是否确实破坏 KRAS LLPS？体内外数据的一致性

5. **Nature Cancer CD40 专题的临床转化**：FAP×CD40 DARPin（MP0317）和 RO7300490 的 I 期数据解读

---

*Generated by Bioinfo Weekly Summary v1.0.0*
*Data sources: EAlert Tracker v3.9.1 + multi-omics-briefing v1.7.0*
