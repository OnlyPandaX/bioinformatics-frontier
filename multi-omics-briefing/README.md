# 🧬 Multi-Omics Daily Briefing Skill

> 每日自动搜索 Nature + ArXiv 多组学相关论文，生成结构化简报并推送到 GitHub。

## 功能特性

- 🔍 **多源搜索** — 自动抓取 Nature.com 和 ArXiv 最近 7 天论文
- 🎯 **智能筛选** — 精选 3-5 篇高价值研究，支持去重机制
- 📝 **结构化输出** — 每篇论文含标题、作者、期刊、链接、概要、Critical 简评
- 📊 **趋势评述** — 每周汇总整体研究趋势
- 🚀 **自动推送** — 生成后自动推送到 GitHub 仓库
- ⏰ **定时任务** — 每天 8:30 AM 自动运行（Asia/Shanghai）
- 🔁 **去重机制** — 基于 `sent-papers.json` 避免重复发送

## 覆盖领域

| 领域 | 说明 |
|------|------|
| 多组学整合 |  epigenomics, proteomics, metabolomics |
| 计算生物学 | bioinformatics, computational biology |
| 基因组 / 转录组 | genomics, transcriptomics |
| 单细胞 / 空间组学 | single-cell, spatial transcriptomics |
| AI + 生物学 | AI for biology, foundation models |

## 目录结构

```
multi-omics-briefing/
├── SKILL.md                      # Skill 核心说明（供 AI Agent 读取）
├── README.md                     # 本文件
├── config.json                   # 配置文件
├── sent-papers.json              # 已发送论文去重列表
├── scripts/
│   ├── generate_briefing.py      # 简报生成脚本（主入口）
│   └── auto-push-briefing.sh     # 自动推送脚本
└── reports/                      # 简报输出目录（由 cron 任务使用）
    └── YYYY/MM/YYYY-Wxx/
        └── YYYY-MM-dd-multiomics-briefing.md
```

> **报告保存路径**：`reports/YYYY/MM/YYYY-Wxx/`（按年 / 月 / ISO 周划分）

## 快速开始

### 手动运行

```bash
cd ~/Documents/bioinformatics-frontier/multi-omics-briefing

# 生成简报
python scripts/generate_briefing.py

# 推送 GitHub
bash scripts/auto-push-briefing.sh
```

### 定时任务配置（OpenClaw cron）

```json
{
  "id": "83b6aea6-6ed0-4fd0-866f-b857803c99f6",
  "name": "每日多组学研究简报",
  "enabled": true,
  "schedule": {
    "kind": "cron",
    "expr": "30 8 * * *",
    "tz": "Asia/Shanghai"
  },
  "sessionTarget": "isolated",
  "payload": {
    "kind": "agentTurn",
    "message": "运行 multi-omics-briefing skill，生成今日多组学研究简报",
    "timeoutSeconds": 600
  },
  "delivery": {
    "mode": "announce",
    "channel": "qqbot",
    "to": "YOUR_QQ_ID"
  }
}
```

## 去重机制

每篇文章只发送一次，除非有正当理由（后续进展、被其他研究引用、趋势变化等）。列表文件位于 `sent-papers.json`。

## 依赖

- Python 3.8+
- Git
- 网络访问（web_fetch / web_search）
- OpenClaw cron 环境（定时任务）

## 更新日志

| 版本 | 日期 | 变更 |
|------|------|------|
| 1.2.0 | 2026-04-20 | 修复报告保存路径为 `YYYY/MM/YYYY-Wxx/` 结构 |
| 1.1.0 | 2026-04-13 | 新增去重机制（sent-papers.json） |
| 1.0.0 | 2026-04-08 | 初始版本 |

---

**作者**：胖达 🐼  
**许可证**：MIT
