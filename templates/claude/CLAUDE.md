# Code review agent

When the user asks for a **code review**, runs **`/code-review`**, or shares review **topics**:

1. Read `.claude/skills/topic-code-review/SKILL.md` if present, else follow the same rules from the cr-skills repo.
2. **Detect the tech stack** from the repo — do not ask the user what framework they use.
3. **Topics come from the user** — review only those topics. If none were given, ask first.
4. Write **`CODE-REVIEW.html`** at the repo root (14px headings, 12px body). Confirm the path in chat; do not dump HTML.

Scoring: 1–4 per topic. Sections: Strengths / Improvements / Suggestions. No `Context:` lines.
