# cr-skill — topic-based code review for AI agents

Portable **code review skill pack** for AI coding agents. Point the agent at **any repository**, share **your review topics**, and get a simple **`CODE-REVIEW.html`** report.

The agent **detects the tech stack itself** (NestJS, Angular, Django, etc.). You only choose **what to review**.

---

## What you get

| Item | Purpose |
|------|---------|
| `/code-review` command | Starts the review workflow |
| `topic-code-review` skill | Full rules: detect stack, score topics, write HTML |
| `html-template.html` | Report layout (14px headings, 12px body) |
| `examples/topic-lists.md` | Sample NestJS / Angular / generic topic menus |
| `templates/antigravity/GEMINI.md` | Antigravity project instructions |

**Output:** `CODE-REVIEW.html` at the root of the repo under review.

Each topic includes **Strengths**, **Improvements**, **Suggestions**, and a **1–4 score**.

---

## Quick start (Cursor)

### 1. Clone this repo (skill pack)

```bash
git clone https://github.com/YOUR_ORG/cr-skill.git
```

### 2. Clone the repo you want to review

```bash
git clone https://github.com/YOUR_ORG/your-app.git
cd your-app
```

### 3. Copy the agent config into the target repo

```bash
cp -R /path/to/cr-skill/.cursor ./.cursor
```

### 4. Open the target repo in Cursor

Open `your-app` as the workspace (not `cr-skill`).

### 5. Run the review

In Agent chat:

```
/code-review
```

If you did not pass topics on the command line, the agent **asks which topics to cover**.

With topics inline:

```
/code-review Security Measures, API Design, Testing Coverage
```

### 6. Open the report

```bash
open CODE-REVIEW.html
```

---

## Workflow (all agents)

```text
Clone cr-skill → copy agent folder into target repo → open target repo → /code-review + topics → CODE-REVIEW.html
```

1. **You** provide the repository (clone and open it).
2. **You** copy the agent folder from `cr-skill` into that repo.
3. **Agent** detects stack from files (`package.json`, Docker, ORM, etc.).
4. **You** share topics (or answer when asked).
5. **Agent** reviews only those topics and writes `CODE-REVIEW.html`.

---

## Use with different AI agents

This repo ships **Cursor** config under `.cursor/`. For other tools, copy or adapt as below.

### Cursor (default)

```bash
cp -R /path/to/cr-skill/.cursor ./.cursor
```

Then run `/code-review` in Agent chat.

### Antigravity

Copy to the **root** of the repo under review:

```bash
cp /path/to/cr-skill/templates/antigravity/GEMINI.md ./GEMINI.md
```

Start a chat:

> Run a code review. Ask me for topics. Output CODE-REVIEW.html.

If your build only has project instructions, paste `GEMINI.md` there.

### Claude Code

```bash
mkdir -p .claude/skills/topic-code-review
cp /path/to/cr-skill/.cursor/skills/topic-code-review/SKILL.md .claude/skills/topic-code-review/
cp /path/to/cr-skill/.cursor/skills/topic-code-review/html-template.html .claude/skills/topic-code-review/
```

Optional pointer at repo root:

```bash
cp /path/to/cr-skill/templates/claude/CLAUDE.md ./CLAUDE.md
```

Ask: *Run code review using topic-code-review skill. Ask for my topics.*

> Claude Code folder names may vary by version. If `.claude/skills/` is not picked up, paste `SKILL.md` into project instructions.

### Any chat (no skills)

Paste `.cursor/skills/topic-code-review/SKILL.md` as your first message, then list topics.

---

## Topics (you choose)

Review **only topics you share**. Examples: [`examples/topic-lists.md`](examples/topic-lists.md).

**NestJS-style:** Project Structure & Setup, NestJS Architecture, API Design, Security Measures, Testing Coverage, …

**Angular-style:** Component Architecture, Routing and Navigation, Forms and Validation, Web Accessibility, …

**Mixed:** List backend topics, then add: *Also add a short Frontend Review summary.*

---

## Report format

- **File:** `CODE-REVIEW.html` (repo root)
- **Headings:** 14px — `Topic Name | Score: X/4`
- **Body:** 12px — Strengths / Improvements / Suggestions
- **Scoring:** 1 = critical, 2 = risky, 3 = good, 4 = strong
- **No** `Context:` lines

---

## Repository layout

```text
cr-skill/
├── README.md
├── .gitignore
├── .cursor/
│   ├── commands/code-review.md
│   └── skills/topic-code-review/
│       ├── SKILL.md
│       └── html-template.html
├── examples/topic-lists.md
└── templates/
    ├── antigravity/GEMINI.md
    └── claude/CLAUDE.md
```

---

## Optional: URL for UI checks

For **Web Accessibility** or **UI/UX** topics, provide a running app URL when asked. Static review works without a URL.

---

## Roadmap / known gaps

| Gap | Plan |
|-----|------|
| GitHub publish | Push repo; link from team docs |
| Claude paths | Confirm `.claude/skills/` for your version |
| Antigravity command | Use `GEMINI.md` + natural language |
| CI validation | Lint skill files on PR |
| More topic packs | Extend `examples/topic-lists.md` |
| Custom output path | Tell agent: *write to `docs/reviews/CR-123.html`* |

---

## Tips

- Open the **target app repo** as the workspace, not `cr-skill`.
- Add `CODE-REVIEW.html` to the target `.gitignore` if you do not want it committed.
- Redact secrets before reviewing repos with `.env` files.
- Monorepos: say *focus on `backend/`* or *primary stack is NestJS*.
