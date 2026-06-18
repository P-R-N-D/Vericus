# Vericus Agent Guidelines

This file is the canonical source of truth for AI-facing context and instructions in this repository. Read it before following any bridge file, tool-specific rule, or generated suggestion.

## Project purpose

Vericus is an evidence-driven workspace for GUI/CLI testing, vulnerability analysis, compliance validation, and audit evidence reporting. It combines RAG, LangGraph-style orchestration, and tool-based execution to help humans review traceable evidence.

## Document roles

- AI-facing documents define instructions that agents must follow.
- Human-facing documents explain project intent and structure for people.
- `docs/CONTEXT.md` is the canonical AI-facing instruction and context file.
- [`docs/ARCHITECTURE.md`](ARCHITECTURE.md) describes the LangGraph graph, subgraphs, tool dispatch, and evidence flow.
- [`docs/STATE-SCHEMA.md`](STATE-SCHEMA.md) describes LangGraph state, evidence object, tool run, and runbook schema concepts.
- [`docs/TESTING.md`](TESTING.md) describes testing strategy for GUI, API, CLI scanner, and document-only changes.
- `skills/*/SKILL.md` files define task- or tool-level execution procedures.
- Human-facing explanation documents should be split by language, for example `docs/<topic>.ko.md` and `docs/<topic>.en.md`.

## Core rules

- Collect evidence; do not make the final human judgment.
- Treat RAG output as reference material.
- Treat GUI, CLI, API, and tool output as live evidence.
- Keep references separate from evidence.
- Do not use root, sudo, or administrator privileges.
- Do not run destructive commands.
- Do not write or commit secrets, API keys, passwords, tokens, or real server credentials.
- Do not create `.env` files. Use `.env.example` only when explicitly needed.

## Architecture direction

### Frontend

- Case workspace
- Plan and context views
- GUI, CLI, and API replay
- Evidence timeline
- Report review

### Backend

- RAG retrieval
- LangGraph-style orchestration
- Policy checks
- Tool dispatch
- Evidence storage
- Report generation

## Tool roles

- Playwright collects GUI and browser evidence.
- Newman/Postman CLI collects API test evidence.
- CLI scanners collect vulnerability and compliance evidence.
- Local or online LLMs support planning, summarization, visual judgment, and report drafting.

## Development rules

- Separate agent orchestration, policy checks, tool execution, and evidence storage.
- Run a policy check before tool execution.
- Prefer deterministic evidence collection over uncontrolled browser exploration.
- Make reports traceable to references, evidence, and tool runs.
- Store raw artifacts separately from compact summaries when possible.
- Mark legal, security, and audit conclusions for human review.

## Repository guardrails

- Do not implement DB schema changes without explicit approval.
- Do not create migrations without explicit approval.
- Do not edit ORM models without explicit approval.
- Do not implement backend or frontend features unless explicitly requested.
- Do not install packages or change lockfiles unless explicitly requested.
- Preserve existing README and LICENSE policy.
