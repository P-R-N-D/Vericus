# Vericus Skills

This directory contains AI-facing skill documents for repeatable tasks, tools, and procedures. Do not create a `SKILL.md` file for every source folder. Create skill documents for reusable workflows such as GUI evidence collection, API evidence collection, vulnerability scanning, compliance RAG, visual judgment, and future DB migration procedures.

## Skills

- [`playwright-evidence`](playwright-evidence/SKILL.md): collect GUI and browser evidence.
- [`postman-api-evidence`](postman-api-evidence/SKILL.md): collect API evidence with Newman/Postman CLI.
- [`vulnerability-scan`](vulnerability-scan/SKILL.md): normalize CLI scanner output as evidence.
- [`compliance-rag`](compliance-rag/SKILL.md): separate internal RAG, external sources, and human review.
- [`visual-judge`](visual-judge/SKILL.md): use vision models only when structured evidence is not enough.
- [`db-migration`](db-migration/SKILL.md): define future DB migration procedure; do not change DB schema now.
