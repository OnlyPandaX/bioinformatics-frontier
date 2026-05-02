# EAlert Tracker 安装和使用指南

## 安装

### 前置依赖

- **Node.js** >= 18（tracker.js v3.5 主程序）
- **Python 3**（email_reader.py v2.0 备用脚本）
- **npm**（Node.js 包管理器）

### 方式 1：从源代码安装

```bash
# 克隆仓库
git clone https://github.com/OnlyPandaX/bioinformatics-frontier.git
cd bioinformatics-frontier/ealert-tracker

# 安装依赖
npm install
```

### 方式 2：复制到 OpenClaw workspace

```bash
cp -r ealert-tracker ~/.qclaw/workspace/
cd ~/.qclaw/workspace/ealert-tracker
npm install
```

## 配置

### 第一步：配置 Gmail

1. **生成 App Password**
   - 访问 https://myaccount.google.com/apppasswords
   - 选择应用：Mail
   - 选择设备：Mac/Windows/Linux
   - 点击"生成"
   - 复制 16 位密码（格式：`xxxx xxxx xxxx xxxx`）

2. **创建 .env 文件**
   
   在 `ealert-tracker/` 目录下创建 `.env`：
   
   ```bash
   # IMAP Configuration
   IMAP_HOST=imap.gmail.com
   IMAP_PORT=993
   IMAP_USER=your_email@gmail.com
   IMAP_PASS=xxxx_xxxx_xxxx_xxxx
   
   # SMTP Configuration (邮件发送)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=xxxx_xxxx_xxxx_xxxx
   SMTP_FROM=your_email@gmail.com
   
   # 报告发送邮箱
   TARGET_EMAIL=your_target@email.com
   ```

### 第二步：订阅期刊

访问以下网站订阅 Table of Contents 邮件：

- **Nature**: https://www.nature.com/nemail
- **Cell**: https://www.cell.com/alerts
- **Science**: https://www.science.org/action/showPreferences?menuTab=Alerts
- **Springer**: https://www.springer.com/gp/authors/alerts
- **Wiley**: https://onlinelibrary.wiley.com/

### 第三步：配置 Google Scholar Alerts（v3.4+）

1. 访问 https://scholar.google.com/alerts
2. 搜索研究者姓名，如 "Shane Crotty"
3. 设置邮件发送到配置的 Gmail 地址
4. 首次会收到确认邮件，tracker.js 会自动跳过确认邮件

## 使用

### 手动运行（v3.5 推荐）

```bash
# 运行追踪（最近 24h，默认）
node scripts/tracker.js

# 查看输出
# - Markdown 报告: reports/YYYY/MM/YYYY-Wxx/report_YYYY-MM-DD.md
# - 邮件发送到 TARGET_EMAIL
# - QQ Bot 推送
```

### 手动运行（Python 备用）

```bash
# 仅读取邮件，不做过滤和元数据补全
python3 scripts/email_reader.py

# 输出: /tmp/journal_emails.json + /tmp/journal_emails.txt
```

### 创建定时任务

使用 OpenClaw cron 创建每日任务：

```bash
openclaw cron add \
  --name "EAlert Tracker - 每日科研期刊追踪" \
  --schedule "0 8 30 * * *" \
  --timezone "Asia/Hong_Kong" \
  --message "运行 ealert-tracker 追踪期刊" \
  --timeout 600
```

## 报告格式

### v3.5 报告字段（每篇论文必须包含）

| 字段 | 说明 | 必填 |
|------|------|------|
| 原文标题 | English original title | ✅ |
| 期刊 | 期刊名 | ✅ |
| 日期 | 发表日期 | ✅ |
| 作者列表 | PubMed 提取 | ✅ |
| 通讯作者单位 | 最后一位作者 | 推荐 |
| 链接 | 原始/DOI/搜索 fallback | ✅ 必须有 |
| DOI | 如有 | 有则填 |
| 研究问题 | 核心科学问题 | ✅ 不能为空 |
| 主要贡献 | 2-3 个关键发现 | ✅ |
| 摘要要点 | 300-500 字 | ✅ |
| 专家点评 | 3-5 句 Critical Thinking | ✅ 不能为空 |

### 链接 Fallback 逻辑

1. 原始链接 → 优先使用
2. DOI → `https://doi.org/xxx`
3. Google 搜索 → `https://www.google.com/search?q=标题+期刊名`

**每篇论文必须有至少一个链接！**

## 故障排除

### 问题 1：IMAP 连接失败

**错误信息**: `IMAP connection failed: Invalid credentials`

**解决方案**:
- 确认 App Password 正确（16 位，无空格）
- 确认 IMAP 已在 Gmail 设置中启用
- 检查 `.env` 文件中的 `IMAP_USER` 和 `IMAP_PASS`

### 问题 2：未找到论文

**原因**:
- 邮箱中没有期刊目录邮件
- 期刊还未发送最新目录
- 关键词不匹配（检查 `references/keywords.md`）

**解决方案**:
- 确认已订阅期刊
- 检查邮箱中是否有期刊邮件
- 扩展 `tracker.js` 中 `CONFIG.targetKeywords` 的关键词

### 问题 3：作者字段解析错误

**原因**: 邮件 HTML 中作者信息与摘要混在一起

**解决方案**:
- tracker.js v3.5 会尝试从 PubMed 补全作者信息
- 如果 PubMed 也无法获取，显示"见原文"

### 问题 4：Cron 任务超时

**解决方案**:
- 增加 `timeoutSeconds` 至 600s
- 检查 IMAP 连接是否稳定

---

**版本**: 3.5.0
**更新**: 2026-05-02
