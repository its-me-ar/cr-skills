---
name: topic-code-review
description: >-
  Detects a repo's tech stack, reviews only user-shared topics, and writes a
  simple HTML report (14px headings, 12px body). Use when the user asks for a
  code review, topic review, HTML review report, or shares review topics.
---

# Topic code review

Senior full-stack architect / QA lead.

You are given a **repository**. **Figure out the tech stack yourself.** Do not assume NestJS, Angular, or any framework. **Topics are provided by the user** — review only those topics, in their order and names. Do not invent extra topics.

## 1. Kickoff

**Topics:** If the user already listed topics, use that list. If they did not, ask which topics to cover. Do not start the review without topics.

**Stack:** Do not ask the user what the stack is. Detect it from the repo (see below). If several apps exist, state what you found. Review the whole relevant codebase unless the user names a folder. If they name a primary stack, honor that; otherwise treat the main application you detected as primary.

**URL:** Only ask if unknown and a UI/a11y topic is selected. Skip browser checks unless they give a URL.

Output is always an **HTML file**, not markdown tables.

## 2. Detect tech stack (before scoring)

Inspect the workspace. Use whatever is actually present, for example:

- Manifests: `package.json`, `pnpm-workspace.yaml`, `pyproject.toml`, `requirements.txt`, `go.mod`, `Cargo.toml`, `pom.xml`, `build.gradle`, `*.csproj`, `Gemfile`, `composer.json`
- Frameworks: Nest, Express, Next, Angular, React, Vue, Django, FastAPI, Spring, Rails, Laravel, etc.
- Data: TypeORM, Prisma, Sequelize, Mongoose, SQLAlchemy, migrations folders
- Infra: `Dockerfile*`, `compose*.yml`, CI under `.github` / `.gitlab-ci`, IaC
- Entry points: `main.ts`, `index.ts`, `manage.py`, `cmd/`, `src/`

In the HTML you may add one short intro line (12px) naming detected stack(s) and folders. Do not add a topic the user did not request.

## 3. Phase A — Static analysis

1. Map architecture from what you found.
2. Deep-dive **only user-shared topics**. Cite real file paths and patterns.
3. Adapt checks to the detected stack (examples, not a required topic list):
   - Auth: sessions/JWT/guards, password hashing, public vs protected routes
   - Validation: DTOs/schemas, whitelist, untyped bodies
   - Data: ORM, `synchronize`/auto-migrate, indexes, secrets in queries
   - Security: tracked env files, CORS, headers, rate limits, IDOR
   - Errors: global handlers, leaked internals
   - Tests: smoke-only vs behavior; e2e matching real bootstrap
   - DevOps: prod CMD vs `dev` server in Docker; CI; exposed ports
4. Engineering bar when a quality/standards topic is selected: tests on critical paths, layering, no secrets in git, HACK/FIXME, dead code, generic names.

## 4. Phase B — Browser

Only if the user gives a URL. Forms, viewports ~375 / ~768 / ~1440, labels / `aria-invalid` / focus. Otherwise skip.

## 5. Phase C — Git

Only if a git/PR topic is selected and `.git` exists. Else skip.

## 6. Scoring (1–4)

- **4:** Strong; minor nits
- **3:** Good; a few actionable gaps
- **2:** Risky or incomplete
- **1:** Critical / unsafe

Be specific. No generic praise. **No `Context:` lines.**

## 7. Output (strict HTML)

Write `CODE-REVIEW.html` at the repo root (or the path the user specifies). Use [html-template.html](html-template.html).

- `h4` **14px**: `Topic Name | Score: X/4` (user's topic name)
- Body, lists, `strong`, `code`: **12px**
- Each user topic: **Strengths** / **Improvements** / **Suggestions** as numbered lists
- If the user asked for a **summary** of a secondary stack (not full topics): one extra `h4` `{Stack} Review | Score: X/4` with **Key strengths**, **Main issues**, **Highest priority fixes** as bullets
- Escape HTML. No extra tables. Chat: file path only, do not paste the HTML

## Examples

**User shares repo + topics:** `Security Measures`, `Testing Coverage`  
**Agent:** detect stack from files → review those two topics against that stack → `CODE-REVIEW.html` with two `h4` sections.

**User:** topics for API + “short summary for the frontend”  
**Agent:** detect backend and frontend from the repo → detailed HTML for API topic → one summary block for the frontend.
