#!/usr/bin/env bash
# save-briefing.sh
# 将多组学简报内容写入 bioinformatics-frontier 仓库并推送到 GitHub
# 用法: echo "简报内容" | bash save-briefing.sh
# 或:   bash save-briefing.sh "简报内容"

set -euo pipefail

REPO_DIR="$HOME/Documents/bioinformatics-frontier"
DATE=$(date +%Y-%m-%d)
REPORT_FILE="$REPO_DIR/reports/$DATE-multiomics-briefing.md"

# 读取内容：优先从参数读，否则从 stdin 读
if [ $# -ge 1 ]; then
  CONTENT="$1"
else
  CONTENT=$(cat)
fi

if [ -z "$CONTENT" ]; then
  echo "[save-briefing] ERROR: 内容为空，跳过" >&2
  exit 1
fi

# 写入文件
mkdir -p "$REPO_DIR/reports"
printf '%s\n' "$CONTENT" > "$REPORT_FILE"
echo "[save-briefing] 已写入: $REPORT_FILE"

# Git commit & push
cd "$REPO_DIR"
git add "reports/$DATE-multiomics-briefing.md"

if git diff --cached --quiet; then
  echo "[save-briefing] 内容无变化，跳过 commit"
  exit 0
fi

git commit -m "Daily briefing: $DATE"
git push origin main
echo "[save-briefing] 已推送到 GitHub ✅"
