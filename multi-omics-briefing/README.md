# Multi-Omics Daily Briefing

🧬 Automated daily multi-omics research briefing generator.

🧬 每日多组学研究简报自动生成工具

---

## Features / 功能

- Searches Nature, ArXiv, bioRxiv, medRxiv for papers published in the **last 48 hours**
- Curates 3-5 high-impact research papers
- Generates structured Markdown briefings
- Auto-pushes to GitHub
- Sends skip notification when no relevant papers are found

- 搜索 Nature、ArXiv、bioRxiv、medRxiv **最近48小时**发表的论文
- 精选 3-5 篇高价值研究
- 生成结构化 Markdown 简报
- 自动推送到 GitHub
- 当天无相关论文时发送跳过通知

## Quick Start / 快速开始

```bash
# Run the generator / 运行生成器
python scripts/generate_briefing.py

# Push to GitHub / 推送到 GitHub
bash scripts/auto-push-briefing.sh
```

## Schedule / 定时任务

Runs daily at **07:30** (Asia/Shanghai), timeout 600s.

每天 **07:30** (Asia/Shanghai) 自动运行，超时 600 秒。

## Report Path / 报告保存路径

```
~/Documents/bioinformatics-frontier/reports/YYYY/MM/YYYY-Wxx/YYYY-MM-DD-multiomics-briefing.md
```

## Author / 作者

胖达 🐼

---

## Changelog / 更新日志

### v1.7.0 (2026-05-28)

- Added bioRxiv/medRxiv API as data sources
- 48-hour search window (covers timezone differences across publishers)
- Deduplication via `sent-papers.json` (auto-purges records >30 days)
- Config sync: SKILL.md, config.json, package.json version alignment

### v1.5.0 (2026-04-29)

- Auto-cleanup of dedup list (`sent-papers.json`): retain last 30 days only
- Python-based purge of expired entries
- Updated cron prompt with auto-cleanup logic

### v1.4.0 (2026-04-25)

- Search strategy refactored: switched to 48-hour window
- Skip notification when no relevant papers found
- Execution time adjusted to 07:30 (Asia/Shanghai)

### v1.3.0 (2026-04-22)

- Strengthened report path conventions with correct/incorrect examples

### v1.2.0 (2026-04-17)

- Report archiving restructured to `YYYY/MM/YYYY-Wxx/` format

### v1.1.0 (2026-04-13)

- Added deduplication mechanism (`sent-papers.json`)

### v1.0.0 (2026-04-08)

- Initial release: Nature + ArXiv search, daily auto-run
