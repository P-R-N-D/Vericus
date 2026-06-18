# Vericus Architecture

Vericus is an evidence-driven workspace. Agents should collect, preserve, summarize, and trace evidence for human review rather than making final legal, security, compliance, or audit judgments.

This document describes the AI-facing architecture direction for planning and review. It also records the current initial application scaffold boundaries.

## Current runnable scaffold

- Frontend stack: Next.js, React, TypeScript, Tailwind CSS, axios, SweetAlert2, and Playwright.
- Backend stack: Django, Django REST Framework, Django Admin, Django ORM, and django-cors-headers.
- Local integration: Next.js rewrites `/api/*` to the Django backend at `http://127.0.0.1:8000/api/*` during local development.
- Health endpoint: Django exposes `GET /api/health/` for frontend/backend connectivity checks.
- Admin route: Django Admin is enabled at `/admin/` for internal operator/admin workflows.

The Next.js frontend is reserved for product-style case workspace, evidence timeline, report review, visual artifact viewer, and reviewer/admin UI. Django REST Framework is the initial API layer. Django ORM is the primary ORM.

FastAPI and SQLAlchemy are not part of the initial backend stack. FastAPI may be considered later only as a separate tool-runner or streaming service after explicit approval. Docker, Nginx, K8s, Helm, deployment manifests, production settings, custom domain DB models, custom migrations, SQL schema work, Alembic, and Prisma are not part of this scaffold.

## LangGraph-style orchestration overview

Vericus uses LangGraph-style orchestration as a planning model for coordinating context retrieval, policy review, tool execution, evidence collection, state updates, and report generation.

The orchestration should keep these responsibilities separate:

- Context and reference retrieval
- Planning and runbook selection
- Policy checks before tool execution
- Tool dispatch and tool result capture
- Evidence redaction and storage
- State updates
- Human-review-oriented report drafting

Agents should prefer explicit, traceable steps over uncontrolled exploration.

## Top-level graph example

A typical top-level graph may contain these conceptual nodes:

1. **Intake request**: capture the user request, target, constraints, and declared scope.
2. **Classify domain**: identify whether the case is GUI, API, CLI scanner, vulnerability, compliance, audit, or mixed-domain work.
3. **Retrieve context/reference**: gather approved project context and external reference material separately from live evidence.
4. **Build plan**: create a bounded plan or runbook with expected evidence and stop conditions.
5. **Policy check**: verify scope, safety constraints, allowed tools, and approval requirements before any tool execution.
6. **Execute tool**: run only approved tools and actions that satisfy the policy check.
7. **Collect evidence**: capture artifacts, screenshots, traces, logs, summaries, and metadata from tool output.
8. **Update state**: record tool results, evidence, hypotheses, missing evidence, risk level, and human review requirements.
9. **Generate report**: draft a report that is traceable to references, evidence, and tool runs while leaving final judgment to humans.

## Major subgraphs

### Playwright GUI evidence

The Playwright GUI evidence subgraph collects browser-based evidence for UI behavior, workflows, and visual state. It should capture screenshots, traces, relevant DOM context, accessibility observations, and concise summaries when in scope. UI changes must include Playwright-based visual testing and should not be evaluated only through DOM or accessibility snapshots when visual evidence is relevant.

### Postman/Newman API evidence

The Postman/Newman API evidence subgraph collects API request and response evidence from approved collections and environments. It should avoid state-changing production requests unless explicitly approved and should redact sensitive request and response content before persistent storage.

### Vulnerability scanner evidence

The vulnerability scanner evidence subgraph coordinates allowlisted CLI scanner actions. It should capture scanner findings as evidence, preserve enough metadata for traceability, and avoid root, sudo, administrator privileges, destructive commands, and unapproved auto-fix behavior.

### Compliance RAG/reference analysis

The compliance RAG/reference analysis subgraph retrieves and summarizes approved policies, standards, control descriptions, and project documents. Its output is reference material, not live evidence. Reports should label this material as references and should not treat it as proof that a system behaved in a particular way.

### Visual judge

The visual judge subgraph supports human review by comparing screenshots, visual baselines, or UI artifacts when requested and in scope. It should describe observable differences, uncertainty, and missing evidence rather than making final human judgments.

## Reference and evidence separation

References and evidence must remain separate throughout the workflow.

- **References** are retrieved context, documentation, standards, policies, or guidance used to plan and interpret a case.
- **Evidence** is live output collected from GUI, API, CLI, scanner, or other tool execution for a specific case.

A report should make clear which claims are supported by references, which are supported by evidence, and which require human review.

## Policy before tool execution

Every tool execution must be preceded by a policy check. The policy check should consider:

- User authorization and declared scope
- Allowed tools and allowed targets
- Whether the action is read-only or state-changing
- Required human approval
- Stop conditions
- Redaction needs
- Artifact handling requirements

Tool execution should not proceed when policy status is unclear.

## Safety guardrails

Agents must follow these guardrails:

- Do not use root, sudo, or administrator privileges.
- Do not run destructive commands.
- Do not write or commit secrets, API keys, passwords, tokens, or real server credentials.
- Keep references separate from live evidence.
- Collect evidence and leave final judgment to humans.
