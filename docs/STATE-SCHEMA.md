# Vericus AI-Facing State and Evidence Shapes

This is not a database schema. This document describes AI-facing state, evidence, tool run, and runbook shapes for planning and review.

The shapes below are conceptual pseudo-schemas. They are intended to help agents reason consistently about case state, references, live evidence, tool execution, and runbook steps. They are not tables, ORM models, migrations, or implementation requirements.

## CaseState conceptual fields

`CaseState` represents the working state for a case as an agent plans, collects evidence, updates hypotheses, and drafts reports for human review.

Conceptual fields:

- `case_id`: stable identifier for the case.
- `user_request`: original user request or normalized summary.
- `domain`: classified domain such as GUI, API, CLI scanner, vulnerability, compliance, audit, or mixed.
- `target`: declared target system, page, endpoint, repository area, document, or asset.
- `constraints`: scope limits, safety rules, approvals, and stop conditions.
- `references`: reference materials used for planning and interpretation.
- `plan`: current plan or runbook-level outline.
- `current_step`: active step in the plan.
- `evidence`: collected live evidence for the case.
- `tool_results`: tool run summaries and artifact references.
- `hypotheses`: tentative explanations or findings that still need evidence or review.
- `missing_evidence`: known gaps that limit confidence or require additional collection.
- `risk_level`: current risk assessment label for triage, not final judgment.
- `requires_human_review`: whether the case, claim, or report needs explicit human review.
- `final_report`: report draft or final human-reviewed report reference.

Conceptual pseudo-schema:

```json
{
  "case_id": "case identifier",
  "user_request": "request summary",
  "domain": "classified domain",
  "target": "declared target",
  "constraints": ["scope and safety constraint"],
  "references": ["Reference"],
  "plan": ["RunbookStep"],
  "current_step": "step identifier",
  "evidence": ["Evidence"],
  "tool_results": ["ToolRun"],
  "hypotheses": ["tentative claim"],
  "missing_evidence": ["evidence gap"],
  "risk_level": "triage label",
  "requires_human_review": true,
  "final_report": "report reference or draft summary"
}
```

## Reference shape

`Reference` represents context used to plan, compare, or interpret evidence. It is not itself live evidence unless separately collected as an artifact during a case.

Fields:

- `source_type`: document, standard, policy, repository file, external page, or other reference type.
- `source_name`: human-readable source name.
- `url`: source URL or repository path when applicable.
- `trust_level`: approved, internal, external, unverified, deprecated, or similar label.
- `fetched_at`: timestamp or date when the reference was retrieved or reviewed.
- `approval_status`: approved for use, pending review, rejected, or unknown.
- `summary`: concise summary relevant to the case.

Conceptual pseudo-schema:

```json
{
  "source_type": "reference type",
  "source_name": "source name",
  "url": "reference location",
  "trust_level": "trust label",
  "fetched_at": "retrieval timestamp",
  "approval_status": "approval label",
  "summary": "reference summary"
}
```

## Evidence shape

`Evidence` represents live case-specific output collected from approved tool execution or observation.

Fields:

- `evidence_id`: stable identifier for the evidence item.
- `evidence_type`: screenshot, trace, log, API response summary, scanner finding, visual comparison, or similar type.
- `source_tool`: tool or subgraph that collected the evidence.
- `artifact_ref`: reference to the stored artifact or redacted artifact.
- `redaction_status`: unredacted transient, redacted, reviewed, or not applicable.
- `summary`: concise evidence summary.
- `collected_at`: timestamp or date when evidence was collected.

Conceptual pseudo-schema:

```json
{
  "evidence_id": "evidence identifier",
  "evidence_type": "evidence type",
  "source_tool": "tool name",
  "artifact_ref": "artifact reference",
  "redaction_status": "redaction label",
  "summary": "evidence summary",
  "collected_at": "collection timestamp"
}
```

## ToolRun shape

`ToolRun` represents an approved tool action and its traceable result.

Fields:

- `tool_name`: approved tool name.
- `command_id` or `action_id`: stable identifier for the command or action.
- `params_summary`: safe summary of parameters without secrets or credentials.
- `started_at`: start timestamp.
- `finished_at`: finish timestamp.
- `status`: succeeded, failed, skipped, blocked by policy, or needs human approval.
- `raw_artifact_ref`: transient or protected raw artifact reference when permitted.
- `redacted_artifact_ref`: persistent redacted artifact reference when available.

Conceptual pseudo-schema:

```json
{
  "tool_name": "approved tool name",
  "command_id": "command identifier",
  "action_id": "action identifier",
  "params_summary": "safe parameter summary",
  "started_at": "start timestamp",
  "finished_at": "finish timestamp",
  "status": "tool status",
  "raw_artifact_ref": "protected raw artifact reference",
  "redacted_artifact_ref": "redacted artifact reference"
}
```

## RunbookStep shape

`RunbookStep` represents one bounded step in a plan.

Fields:

- `step_id`: stable step identifier.
- `purpose`: why the step is needed.
- `allowed_tools`: tools permitted for this step.
- `preconditions`: conditions that must be true before execution.
- `expected_evidence`: evidence expected from the step.
- `stop_conditions`: conditions that require stopping or returning for review.
- `human_approval_required`: whether explicit human approval is required before execution.

Conceptual pseudo-schema:

```json
{
  "step_id": "step identifier",
  "purpose": "step purpose",
  "allowed_tools": ["approved tool"],
  "preconditions": ["required condition"],
  "expected_evidence": ["expected evidence item"],
  "stop_conditions": ["condition that stops execution"],
  "human_approval_required": true
}
```
