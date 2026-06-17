@docs/AGENTS.md

# Claude Code Notes

Use plan mode before broad architecture, security-sensitive, or multi-file changes.

Guardrails:

- Collect evidence; leave final judgment to humans.
- Keep references separate from live evidence.
- Do not write or commit secrets, API keys, passwords, or tokens.
- Do not create DB migrations, implement ORM/schema changes, install packages, or change lockfiles without explicit approval.
