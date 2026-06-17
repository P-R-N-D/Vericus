# Vericus Copilot Instructions

Follow [`docs/CONTEXT.md`](../docs/CONTEXT.md) first. It is the canonical source of truth for AI-facing instructions.

Guardrails:

- Collect evidence; leave final judgment to humans.
- Keep references separate from live evidence.
- Do not use root, sudo, or administrator privileges.
- Do not run destructive commands.
- Do not write or commit secrets, API keys, passwords, or tokens.
- Do not create DB migrations, implement ORM/schema changes, install packages, or change lockfiles without explicit approval.
