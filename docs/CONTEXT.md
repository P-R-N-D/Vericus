# Vericus Agent Guidelines

This file is the canonical source of truth for AI-facing context and instructions in this repository. Read it before following any bridge file, tool-specific rule, or generated suggestion.

## Project purpose

Vericus is an evidence-driven workspace for GUI/CLI testing, vulnerability analysis, compliance validation, and audit evidence reporting. It combines RAG, LangGraph-style orchestration, and tool-based execution to help humans review traceable evidence.

## Current application scaffold

The initial runnable application scaffold uses these primary stacks:

- Frontend: Next.js, React, TypeScript, Tailwind CSS, axios, SweetAlert2, and Playwright.
- Backend: Django, Django REST Framework, Django Admin, Django ORM, and django-cors-headers.
- Local integration: the frontend calls Django through `/api` during local development using Next.js rewrites from `/api/*` to `http://127.0.0.1:8000/api/*`.
- Health endpoint: Django exposes `GET /api/health/` for frontend/backend integration checks.
- Admin: Django Admin is enabled at `/admin/` and reserved for internal operator/admin workflows.

FastAPI and SQLAlchemy are not part of the initial backend stack. FastAPI may be considered later only as a separate tool-runner or streaming service after explicit approval. Docker, Nginx, K8s, Helm, and deployment manifests are not part of the current scaffold.

## Document roles

- AI-facing documents define instructions that agents must follow.
- Human-facing documents explain project intent and structure for people.
- `docs/CONTEXT.md` is the canonical AI-facing instruction and context file.
- [`docs/ARCHITECTURE.md`](ARCHITECTURE.md) describes the LangGraph graph, subgraphs, tool dispatch, evidence flow, and current application scaffold boundaries.
- [`docs/STATE-SCHEMA.md`](STATE-SCHEMA.md) describes LangGraph state, evidence object, tool run, and runbook schema concepts.
- [`docs/TESTING.md`](TESTING.md) describes testing strategy for GUI, API, CLI scanner, document-only changes, and scaffold checks.
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

The primary frontend stack is Next.js + React + TypeScript + Tailwind CSS. The frontend API client uses axios. Frontend alert/modal UX uses SweetAlert2.

The Next.js frontend is reserved for product-style case workspace, evidence timeline, report review, visual artifact viewer, and reviewer/admin UI.

### Backend

The primary backend stack is Django + Django REST Framework + Django Admin. Django ORM is the primary ORM. Django Admin is reserved for internal operator/admin workflows.

The backend direction includes:

- RAG retrieval
- LangGraph-style orchestration
- Policy checks
- Tool dispatch
- Evidence storage
- Report generation

Do not add custom domain models, custom migrations, SQL, SQLAlchemy, Alembic, FastAPI, Docker, Nginx, K8s, Helm, or deployment manifests without explicit approval.

## Tool roles

- Playwright collects GUI and browser evidence and is required for UI/web design changes.
- Newman/Postman CLI collects API test evidence when API collection testing is in scope.
- CLI scanners collect vulnerability and compliance evidence when explicitly approved.
- Local or online LLMs support planning, summarization, visual judgment, and report drafting.

## Development rules

- Separate agent orchestration, policy checks, tool execution, and evidence storage.
- Run a policy check before tool execution.
- Prefer deterministic evidence collection over uncontrolled browser exploration.
- Make reports traceable to references, evidence, and tool runs.
- Store raw artifacts separately from compact summaries when possible.
- Mark legal, security, and audit conclusions for human review.
- UI/web design changes must include Playwright-based visual testing.
- Backend changes must at least run Django checks.
- API changes should be checked through Django/DRF endpoint tests or manual endpoint verification until a fuller test suite is added.

## Repository guardrails

- Do not implement DB schema changes without explicit approval.
- Do not create migrations without explicit approval.
- Do not edit ORM models without explicit approval.
- Do not implement backend or frontend features unless explicitly requested.
- Do not install packages or change lockfiles unless explicitly requested.
- Preserve existing README and LICENSE policy.
