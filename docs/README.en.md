# Vericus

Vericus is an evidence-driven workspace for GUI/CLI testing, vulnerability analysis, compliance validation, and audit evidence reporting.

## Direction

- Use RAG to retrieve and organize reference material.
- Use LangGraph-style orchestration to coordinate agent execution flows.
- Treat outputs from tools such as Playwright, Newman/Postman CLI, and CLI scanners as live evidence.
- Leave final legal, security, and audit judgments to human reviewers.

## Documentation structure

- Use [`docs/AGENTS.md`](AGENTS.md) as the AI-facing instruction source.
- Split human-facing explanation documents into Korean and English files.
- See [`database-schema-guidelines.en.md`](database-schema-guidelines.en.md) for database schema design guidelines.
- See [`README.ko.md`](README.ko.md) for Korean documentation.
