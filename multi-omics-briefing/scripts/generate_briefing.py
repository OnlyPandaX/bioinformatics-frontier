#!/usr/bin/env python3
"""
多组学研究简报生成器 v1.7.1
搜索 ArXiv、bioRxiv、medRxiv 最近48小时的论文，生成结构化简报

使用方法:
    python3 generate_briefing.py [--date YYYY-MM-DD] [--dry-run]
"""

import os
import sys
import json
import argparse
from datetime import datetime, timedelta
from pathlib import Path
import urllib.request
import urllib.parse
import xml.etree.ElementTree as ET

# 配置
CONFIG = {
    "search_keywords": [
        "multi-omics", "bioinformatics", "computational biology",
        "genomics", "transcriptomics", "proteomics", "metabolomics",
        "single-cell", "spatial transcriptomics", "AI biology", "deep learning"
    ],
    "sources": {
        "arxiv": True,
        "biorxiv": True,
        "medrxiv": True,
        "nature": False,  # Nature 需要 RSS/网页抓取，暂未实现
    },
    "base_dir": os.path.expanduser("~/Documents/bioinformatics-frontier/reports"),
    "max_papers": 10,
    "hours": 48,
}

SKILL_VERSION = "1.7.1"


def get_iso_week_path(date_str):
    """根据日期生成 YYYY/MM/YYYY-Wxx/ 子目录路径"""
    dt = datetime.strptime(date_str, "%Y-%m-%d")
    year = dt.year
    month = dt.month
    week = dt.isocalendar()[1]
    return f"{year}/{month:02d}/{year}-W{week:02d}/"


def search_arxiv(days=2):
    """搜索 ArXiv 最近 N 天的论文"""
    print(f"🔍 搜索 ArXiv (最近 {days} 天)...", flush=True)
    
    # 计算日期范围
    end_date = datetime.now()
    start_date = end_date - timedelta(days=days)
    date_query = f"submittedDate:[{start_date.strftime('%Y%m%d')}0000 TO {end_date.strftime('%Y%m%d')}2359]"
    
    # 构建查询 - 正确 URL 编码
    query_parts = [urllib.parse.quote(date_query)]
    for keyword in CONFIG["search_keywords"][:5]:  # 限制关键词数量
        query_parts.append(f"all:{urllib.parse.quote(keyword)}")
    
    query = "+AND+".join(query_parts)
    url = f"http://export.arxiv.org/api/query?search_query={query}&start=0&max_results={CONFIG['max_papers']}&sortBy=submittedDate&sortOrder=descending"
    
    try:
        with urllib.request.urlopen(url, timeout=30) as response:
            data = response.read()
        
        root = ET.fromstring(data)
        ns = {'atom': 'http://www.w3.org/2005/Atom'}
        
        papers = []
        for entry in root.findall('atom:entry', ns):
            title = entry.find('atom:title', ns).text.strip().replace('\n', ' ')
            published = entry.find('atom:published', ns).text[:10]
            summary = entry.find('atom:summary', ns).text.strip().replace('\n', ' ')
            arxiv_id = entry.find('atom:id', ns).text.split('/abs/')[-1]
            
            papers.append({
                "title": title,
                "published": published,
                "summary": summary[:500],  # 限制摘要长度
                "arxiv_id": arxiv_id,
                "url": f"https://arxiv.org/abs/{arxiv_id}",
                "source": "ArXiv",
            })
        
        print(f"  ✅ 找到 {len(papers)} 篇论文", flush=True)
        return papers
    
    except Exception as e:
        print(f"  ❌ ArXiv 搜索失败: {e}", flush=True)
        return []


def search_biorxiv(start_date, end_date):
    """搜索 bioRxiv 最近 N 天的论文"""
    print(f"🔍 搜索 bioRxiv ({start_date} ~ {end_date})...", flush=True)
    
    url = f"https://api.biorxiv.org/details/biorxiv/{start_date}/{end_date}"
    
    try:
        with urllib.request.urlopen(url, timeout=30) as response:
            data = json.loads(response.read().decode('utf-8'))
        
        if data.get('messages', {}).get('status') == 'ok':
            papers = []
            for item in data.get('collection', [])[:CONFIG['max_papers']]:
                papers.append({
                    "title": item.get('title', ''),
                    "published": item.get('date', ''),
                    "summary": item.get('abstract', '')[:500],
                    "doi": item.get('doi', ''),
                    "url": f"https://doi.org/{item.get('doi', '')}",
                    "source": "bioRxiv",
                })
            
            print(f"  ✅ 找到 {len(papers)} 篇论文", flush=True)
            return papers
        else:
            print(f"  ⚠️ bioRxiv API 返回异常", flush=True)
            return []
    
    except Exception as e:
        print(f"  ❌ bioRxiv 搜索失败: {e}", flush=True)
        return []


def filter_by_keywords(papers):
    """根据关键词过滤论文"""
    filtered = []
    keywords_lower = [k.lower() for k in CONFIG["search_keywords"]]
    
    for paper in papers:
        title_lower = paper.get("title", "").lower()
        summary_lower = paper.get("summary", "").lower()
        
        # 检查是否包含任意关键词
        if any(kw in title_lower or kw in summary_lower for kw in keywords_lower):
            filtered.append(paper)
    
    return filtered


def deduplicate_papers(papers):
    """去重论文（基于标题相似度）"""
    seen_titles = []
    unique_papers = []
    
    for paper in papers:
        title = paper.get("title", "").lower()
        
        # 检查是否与已有论文相似
        is_duplicate = False
        for seen in seen_titles:
            # 简单去重：检查标题前50字符是否相同
            if title[:50] == seen[:50]:
                is_duplicate = True
                break
        
        if not is_duplicate:
            seen_titles.append(title)
            unique_papers.append(paper)
    
    return unique_papers


def generate_briefing(papers, output_file):
    """生成简报 Markdown"""
    if not papers:
        print("⚠️ 无相关论文，跳过简报生成", flush=True)
        return None
    
    # 生成 Markdown 内容
    content = f"""# 多组学研究简报 {datetime.now().strftime('%Y-%m-%d')}

> 由 multi-omics-briefing v{SKILL_VERSION} 生成

## 精选论文 ({len(papers)} 篇)

"""
    
    for i, paper in enumerate(papers, 1):
        content += f"### {i}. {paper['title']}\n\n"
        content += f"- **来源**: {paper['source']}\n"
        content += f"- **日期**: {paper.get('published', 'N/A')}\n"
        content += f"- **链接**: {paper.get('url', 'N/A')}\n"
        if paper.get('summary'):
            content += f"- **摘要**: {paper['summary'][:200]}...\n"
        content += "\n---\n\n"
    
    # 写入文件
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✅ 简报已生成: {output_file}", flush=True)
    return output_file


def main():
    parser = argparse.ArgumentParser(description="Multi-Omics Daily Briefing Generator")
    parser.add_argument("--date", help="指定日期 (YYYY-MM-DD)，默认今天")
    parser.add_argument("--dry-run", action="store_true", help="仅打印，不生成文件")
    args = parser.parse_args()
    
    # 确定日期
    if args.date:
        target_date = datetime.strptime(args.date, "%Y-%m-%d")
    else:
        target_date = datetime.now()
    
    date_str = target_date.strftime("%Y-%m-%d")
    print(f"📅 生成日期: {date_str}", flush=True)
    
    # 计算日期范围
    end_date = target_date
    start_date = end_date - timedelta(days=CONFIG["hours"] // 24 + 1)
    start_str = start_date.strftime("%Y-%m-%d")
    end_str = end_date.strftime("%Y-%m-%d")
    
    # 搜索论文
    all_papers = []
    
    if CONFIG["sources"]["arxiv"]:
        arxiv_papers = search_arxiv(days=CONFIG["hours"] // 24 + 1)
        all_papers.extend(arxiv_papers)
    
    if CONFIG["sources"]["biorxiv"]:
        biorxiv_papers = search_biorxiv(start_str, end_str)
        all_papers.extend(biorxiv_papers)
    
    # 过滤 + 去重
    filtered = filter_by_keywords(all_papers)
    unique = deduplicate_papers(filtered)
    
    print(f"📊 统计: {len(all_papers)} 篇搜索结果 → {len(filtered)} 篇过滤后 → {len(unique)} 篇去重后", flush=True)
    
    # 生成简报
    if args.dry_run:
        print("🔍 Dry run 模式，不生成文件", flush=True)
        print(json.dumps(unique, indent=2, ensure_ascii=False))
        return
    
    week_subdir = get_iso_week_path(date_str)
    output_dir = os.path.join(CONFIG["base_dir"], week_subdir)
    os.makedirs(output_dir, exist_ok=True)
    
    output_file = os.path.join(output_dir, f"{date_str}-multiomics-briefing.md")
    generate_briefing(unique, output_file)
    
    print(f"✅ 完成！版本: multi-omics-briefing v{SKILL_VERSION}", flush=True)


if __name__ == "__main__":
    main()
