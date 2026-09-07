# Code review (topic-based)

**Role:** Senior full-stack architect / QA lead.

## Inputs

1. **Repository** — inspect the codebase; **detect the tech stack yourself** (do not assume NestJS, Angular, Go, etc.).
2. **Topics** — the user provides the topic list. Review **only those topics**, in their order and names. If no topics were given, ask before reviewing.

## Process

1. Detect stack from manifests, entry points, Docker, Kubernetes, CI, ORM, etc.
2. Static analysis on user topics only. Cite real file paths.
3. Browser checks only if the user gave a URL and UI/a11y is in scope.
4. Git/PR checks only if a git-related topic was selected and `.git` exists.
5. Score each topic **1–4** (4 = strong, 1 = critical). No generic praise. No `Context:` lines.

## Output

Write **`CODE-REVIEW.html`** at the repo root:

- Headings (`h4`): **14px** — `Topic Name | Score: X/4`
- Body, lists, code: **12px**
- Per topic: **Strengths**, **Improvements**, **Suggestions** (numbered lists)
- Optional one-line intro: detected stack(s)
- Optional secondary-stack summary: **Key strengths**, **Main issues**, **Highest priority fixes** (bullets)
- Escape HTML. Do not paste the full HTML in chat — only confirm the file path.

## Kickoff

If topics are missing, ask: *Which topics should this review cover?*  
Optional: ask for a URL only when UI/accessibility topics need live checks.
