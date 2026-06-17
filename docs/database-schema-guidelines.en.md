# Database Schema Guidelines

This document describes database schema design guidelines for Vericus. It does not create migrations, SQL, or ORM models.

## Principles

- Keep references separate from evidence.
- Keep raw artifacts separate from compact summaries.
- Use `tool_runs` as the audit log for all tool executions.
- Treat evidence as append-only when possible.
- Make reports traceable to references, evidence, and tool runs.
- Do not store secrets, tokens, or passwords.
- For external documents, keep metadata such as `source`, `fetched_at`, `trust_level`, and `approval_status`.
- Assume timezone-aware timestamps.
- Apply future schema changes only through migrations.

## Initial candidate tables

The initial candidate table names are listed below for design discussion only. This list is not a schema implementation.

- `cases`
- `case_plan_steps`
- `references`
- `evidence`
- `tool_runs`
- `artifacts`
- `reports`
- `approvals`
- `knowledge_documents`
- `knowledge_chunks`
