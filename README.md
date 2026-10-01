# The Evening Walk

An economics blog built with [Jekyll](https://jekyllrb.com) and hosted free on GitHub Pages.
You write each essay as a Markdown file, and GitHub turns it into a web page.

## 1. Put it online (one-time setup, about 10 minutes)

1. Create a free account at [github.com](https://github.com) if you don't have one.
2. Create a new **public** repository called `evening-walk` (or any name you like).
3. On the repository page, click **Add file → Upload files**, drag in *everything inside this folder* (not the folder itself), and click **Commit changes**.
4. Open `_config.yml` in the repo, click the pencil icon, and change:
   - `url:` to `https://YOUR-USERNAME.github.io`
   - `baseurl:` to `"/evening-walk"` (the repository name with a slash in front)
   - `title`, `tagline` and `description` if you've chosen a different name
5. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, pick `main` and `/ (root)`, and save.
6. After a minute or two the site is live at `https://YOUR-USERNAME.github.io/evening-walk/`.

Tip: if you name the repository `YOUR-USERNAME.github.io` instead, the site lives at that shorter address and `baseurl` should be `""`.

## 2. Write a new essay

Create a file in `_posts/` named `YEAR-MONTH-DAY-short-title.md`, for example
`_posts/2026-10-05-why-rates-are-sticky.md`. Start it with this block:

```markdown
---
layout: post
title: "Your headline"
description: "One sentence that appears under the headline and on the home page."
tags: [Monetary policy, Malaysia]
walk_note: "Optional. The question or argument from the walk that started this essay."
sources:
  - title: "Publication, “Article title”, date"
    url: "https://link-to-the-source"
---

Your essay starts here. Write normal paragraphs.

## A subheading

More text.
```

Everything else happens automatically: the home page, the Topics filter, reading time, previous/next links and the RSS feed.

**Markdown basics:** `## Subheading`, `**bold**`, `*italic*`, `[link text](https://...)`, `- bullet`, `> pull quote`, `---` for a section break.

**Tags:** use the same spelling and capitals every time (`Fiscal policy`, not `fiscal-policy` one week and `Fiscal Policy` the next), because each spelling becomes its own filter button.

## 3. Adding a chart

Paste this into a post and change the values:

```liquid
{% include chart.html
   type="bar"
   title="What the chart shows, and its units"
   labels="2022, 2023, 2024, 2025"
   values="10, 12, 9, 14"
   unit="%"
   source="Source: where the data came from" %}
```

(Those numbers are placeholders. Always use real data and name the source.)

| Option | What it does |
|---|---|
| `type` | `bar`, `line`, `pie` or `doughnut` |
| `labels` | Categories or years, separated by commas |
| `values` | The numbers, same order as the labels |
| `series` | Name of the first data series (shows a legend) |
| `values2`, `series2` | An optional second series to compare |
| `prefix`, `unit` | Put `$` before or `%`/`bn` after each number |
| `horizontal` | `"true"` turns a bar chart sideways (good for long labels) |
| `source` | Small source line under the chart |

Charts adapt to light and dark mode on their own. The chart library only loads on pages that have a chart, so other pages stay fast.

## 4. Adding a key number

```liquid
{% include stat.html number="$1.2trn" label="What the number means, in one line" %}
```

## 5. Changing the look

All colours and fonts are set at the top of `assets/css/main.css` under `:root`. Change `--accent` or `--night` to recolour the whole site.

## Files at a glance

```
_config.yml          site name, description, links
_posts/              your essays (one Markdown file each)
about.md             the About page
index.html           home page
topics.html          the Topics filter page
_layouts/            page templates
_includes/           reusable pieces: header, footer, chart, key number
assets/css/main.css  all styling
assets/js/           light/dark toggle, topic filter, charts
```

## Optional: preview on your own computer

Install Ruby, then in this folder run `bundle install` once and `bundle exec jekyll serve`. Open http://localhost:4000/evening-walk/. You don't need this; editing on GitHub works fine.
