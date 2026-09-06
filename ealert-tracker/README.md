# EAlert Tracker

📚 Automated scientific journal tracking system via Gmail IMAP.

📚 通过 Gmail IMAP 自动追踪科研期刊邮件的日报系统。

---

## Features / 功能

- Reads journal Table of Contents emails from Gmail (last 48 hours)
- Covers Nature, Science, Science Translational Medicine, Science Immunology, Science Advances, PNAS, Cell Press, and more
- Extracts all article titles and generates a structured Markdown report
- Accuracy-first principle: never fabricates fields; unconfirmed info is explicitly marked
- Auto-pushes to GitHub + sends QQ notification

- 从 Gmail 读取最近 48 小时的期刊目录邮件
- 覆盖 Nature、Science、Science Translational Medicine、Science Immunology、Science Advances、PNAS、Cell Press 等
- 提取所有文章标题，生成结构化 Markdown 报告
- 准确性优先原则：绝不捏造字段，无法确认时明确标注
- 自动推送 GitHub + 发送 QQ 通知

## Quick Start / 快速开始

```bash
# Set environment variables / 设置环境变量
export IMAP_USER="your_email@gmail.com"
export IMAP_PASS="your_app_password"

# Run tracker / 运行追踪器
node scripts/tracker.js
```

## Schedule / 定时任务

Runs daily at **08:00** (Asia/Shanghai), timeout 900s.

每天 **08:00** (Asia/Shanghai) 自动运行，超时 900 秒。

## Target Fields / 目标领域

Bioinformatics, computational biology, cancer biology, immunology, AI for Science, multi-omics, neuroscience, gene editing, microbiome, precision medicine.

生物信息学、计算生物学、癌生物学、免疫学、AI for Science、多组学、神经科学、基因编辑、微生物组、精准医疗。

## Accuracy Principle / 准确性原则

> ⚠️ **Highest priority / 最高优先级**: All fields (DOI, authors, date, abstract) must be verified via reliable APIs (PubMed, CrossRef). Unconfirmed fields are marked as "（信息无法确认）". Never guess.

## Author / 作者

胖达 🐼

---

## Changelog / 更新日志

### v3.9.2 (2026-05-28)

- Fixed PNAS email HTML title truncation (nested tag handling)
- Added PubMed title similarity check (70% threshold)
- Fixed datetime comparison (offset-naive vs offset-aware)
- Enhanced `is_skip_line()` filter for junk titles
- Fixed `normalizeJournalName()` regex for "Proceedings"

### v3.9.1 (2026-05-20)

- Hybrid approach: email trigger + web fetch for real abstracts + email body fallback

### v3.8.7 (2026-05-13)

- Report format upgrade (aligned with multi-omics briefing template)

### v3.8.0 (2026-05-09)

- Removed email sending; switched to QQ + GitHub push

### v3.4.0 (2026-04-29)

- Added Google Scholar Alerts support

### v3.0.0 (2026-04-15)

- Migrated from 126 email to Gmail
- Native imap + mailparser + nodemailer stack

### v1.0.0 (2026-04-08)

- Initial release
