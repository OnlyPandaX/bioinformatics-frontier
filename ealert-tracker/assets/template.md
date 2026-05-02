# 📚 科研期刊追踪报告

**日期**: {{DATE}}
**监控期刊**: Nature、Science、Cell 系列及主流生物学期刊
**目标领域**: 生物信息学、计算生物学、癌生物学、免疫学、AI for Science、多组学
**追踪研究者**: {{RESEARCHERS}}

---

## 📊 统计
- **今日相关论文**: {{COUNT}} 篇
- **期刊分布**: {{JOURNAL_STATS}}
- **Scholar Alert**: {{SCHOLAR_COUNT}} 篇

---

## 📰 论文详情

{{PAPER_SECTIONS}}

---

## 🔬 综合评述

{{SUMMARY}}

---

**生成时间**: {{DATETIME}}
**工具**: EAlert Tracker v3.5.0

---

## 论文条目模板

每篇论文应包含以下字段（不能为空）：

### N. 📖/🔔 论文标题

| 项目 | 内容 |
|------|------|
| **原文标题** | English original title（与中文标题不同时显示） |
| **期刊** | 期刊名 |
| **日期** | 发表日期 |
| **作者列表** | 从 PubMed 提取，格式：LastName Initials |
| **通讯作者单位** | 最后一位作者单位 |
| **链接** | 原始链接 / DOI 链接 / Google 搜索链接（三选一，必须有） |
| **DOI** | 如有 |

**研究问题**: 🔴 必须填！从摘要背景句或标题推断核心科学问题

**主要贡献**: 从摘要提炼 2-3 个关键发现

**摘要要点**: 完整摘要（300-500字）

**💡 专家点评**: 🔴 必须填！3-5 句 Critical Thinking，包含：
- 历史意义/研究现状
- Motivation（为什么做这个研究）
- 潜在价值
- Future work 方向
- ⚠️ 不要写"研究质量有保障"这种套话

---

## 点评模板（按领域）

### 肿瘤/免疫
```
历史背景 → motivation → 临床转化价值 → future work
```

### 单细胞/组学
```
技术发展历程 → 为什么重要 → 泛化价值 → 局限性 → future work
```

### AI/机器学习
```
领域现状 → motivation → 泛化能力 → 可解释性 → future work
```

### 衰老
```
范式转变 → motivation → 人群验证 → future work
```

### 通用
```
研究背景 → motivation → 创新点 → 局限性 → future work
```

---

## 链接 Fallback 逻辑

1. 如果有原始链接 → 显示 `[点击访问](url)`
2. 如果没有链接但有 DOI → 显示 `https://doi.org/xxx`
3. 如果都没有 → 显示 `[Google 搜索](https://www.google.com/search?q=标题+期刊名)`

**每篇论文必须有至少一个链接！**
