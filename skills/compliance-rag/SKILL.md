# Compliance RAG Skill

## When to use

Use this skill when you need to support compliance analysis with internal RAG, external official source candidates, and clearly marked model background knowledge.

## Inputs

- Policy, control, or compliance question
- Internal knowledge base retrieval results
- External official source candidates
- Related evidence and tool runs

## Outputs

- Reference summary
- Source grading result
- Evidence links
- Items requiring human review

## Safety rules

- Do not treat RAG-only output as a final conclusion.
- Keep internal RAG, external source candidates, and model background knowledge separate.
- Mark legal, security, and audit conclusions for human review.
- Record source, fetched time, trust level, and approval status when possible.

## Procedure

1. Define the question and scope.
2. Summarize internal RAG results as reference candidates.
3. Summarize external official source candidates separately.
4. Label any model background knowledge as non-authoritative context.
5. Apply source grading.
6. Link live evidence to references without merging them.
7. Mark final judgment items for human review.

## Test method

- Verify that references and evidence remain separate.
- Verify that source grading is recorded.
- Verify that human-review items are not auto-finalized.
