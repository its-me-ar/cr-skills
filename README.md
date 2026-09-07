# cr-skills — topic-based code review for AI agents

Portable **code review skill pack** for AI coding agents. Point the agent at **any repository**, share **your review topics**, and get **`CODE-REVIEW.html`**.

The agent **detects the tech stack itself**. You only choose **what to review**.

**Repository:** https://github.com/its-me-ar/cr-skills

---

## Recommended install (all OS — macOS, Linux, Windows)

Requires **Git** and **Node.js** (v16+). Run from the **repo you want to review**:

```bash
git submodule add https://github.com/its-me-ar/cr-skills.git .cr-skills 2>/dev/null; git submodule update --init .cr-skills && node .cr-skills/install.mjs
```

This adds `cr-skills` as a submodule and copies `.cursor/` into your project.

**Update to latest cr-skills:**

```bash
git submodule update --remote .cr-skills && node .cr-skills/install.mjs
```

**Install for other agents too:**

```bash
node .cr-skills/install.mjs --all
```

| Flag | Installs |
|------|----------|
| *(default)* | Cursor → `.cursor/` |
| `--antigravity` | `GEMINI.md` at repo root |
| `--claude` | `.claude/skills/topic-code-review/` + `CLAUDE.md` |
| `--all` | Cursor + Antigravity + Claude |

> **Why submodule + `install.mjs`?** One command works on every OS (no `cp` vs `xcopy`). Your team pins a cr-skills version in git and can update when ready.

**After clone** (teammates must init submodule once):

```bash
git submodule update --init .cr-skills && node .cr-skills/install.mjs
```

---

## Quick start (Cursor)

1. Install (command above) in your target repo.
2. Open the **target repo** in Cursor (not `.cr-skills`).
3. In Agent chat:

```
/code-review
```

Or with topics:

```
/code-review Security Measures, API Design, Testing Coverage
```

4. Open `CODE-REVIEW.html` when done.

---

## What you get

| Item | Purpose |
|------|---------|
| `/code-review` command | Starts the review workflow |
| `topic-code-review` skill | Detect stack, score topics, write HTML |
| `html-template.html` | Report layout (14px headings, 12px body) |
| `examples/topic-lists.md` | NestJS, Angular, K8s, Go, generic menus |
| `install.mjs` | Cross-platform copy into any repo |

Each topic: **Strengths**, **Improvements**, **Suggestions**, score **1–4**.

---

## Workflow

```text
Target repo → submodule + install.mjs → /code-review + your topics → CODE-REVIEW.html
```

1. You open the app repo and install cr-skills.
2. Agent detects stack from the codebase.
3. You share topics (or answer when asked).
4. Agent writes `CODE-REVIEW.html`.

---

## Manual install (alternative)

If you prefer not to use a submodule:

```bash
git clone https://github.com/its-me-ar/cr-skills.git /tmp/cr-skills
node /tmp/cr-skills/install.mjs --all
```

Or copy `.cursor` by hand from a cloned cr-skills repo.

---

## Use with different AI agents

### Cursor (default)

```bash
node .cr-skills/install.mjs
```

Then `/code-review` in Agent chat.

### Antigravity

```bash
node .cr-skills/install.mjs --antigravity
```

Start a chat: *Run a code review. Ask me for topics. Output CODE-REVIEW.html.*

### Claude Code

```bash
node .cr-skills/install.mjs --claude
```

Ask: *Run code review using topic-code-review skill. Ask for my topics.*

### Any chat (no skills)

Paste `.cr-skills/.cursor/skills/topic-code-review/SKILL.md` as your first message, then list topics.

---

## Topics (you choose)

Examples: [`examples/topic-lists.md`](examples/topic-lists.md) (also at `.cr-skills/examples/topic-lists.md` after install).

Includes NestJS, Angular, Kubernetes, Go, and generic lists.

---

## Report format

- **File:** `CODE-REVIEW.html` (repo root)
- **Headings:** 14px — `Topic Name | Score: X/4`
- **Body:** 12px — Strengths / Improvements / Suggestions
- **Scoring:** 1 = critical → 4 = strong

---

## Repository layout

```text
cr-skills/
├── install.mjs                 # Cross-platform installer
├── README.md
├── .cursor/
│   ├── commands/code-review.md
│   └── skills/topic-code-review/
├── examples/topic-lists.md
└── templates/
    ├── antigravity/GEMINI.md
    └── claude/CLAUDE.md
```

---

## Tips

- Commit `.cr-skills` submodule reference so the team uses the same skill version.
- Add `CODE-REVIEW.html` to `.gitignore` if you do not want reports committed.
- Redact secrets before reviewing repos with `.env` files.
- Monorepos: tell the agent *focus on `backend/`* or name the primary stack.

---

## Optional: URL for UI checks

For **Web Accessibility** or **UI/UX** topics, provide a running app URL when asked.
