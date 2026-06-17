# DB Migration Skill

## When to use

Use this skill only for future DB migration work after explicit user approval. Do not change the database schema in the current documentation setup work.

## Inputs

- User approval record
- Change purpose and impact scope
- Existing schema and migration state
- Rollback plan

## Outputs

- Migration plan
- Review checklist
- Execution and rollback procedure
- Human approval record

## Safety rules

- Do not create DB migrations, SQL, or ORM/schema implementations in the current task.
- Perform schema changes only as a separate approved task.
- Do not include secrets, tokens, or passwords in migrations or seed data.
- Apply schema changes only through future migration files.
- Do not perform destructive schema changes without separate risk review and approval.

## Procedure

1. Confirm explicit user approval.
2. Document the purpose, impact scope, and rollback plan.
3. Review the existing schema and migration history.
4. Add a review checkpoint before drafting a migration.
5. Draft the migration only after approval.
6. Validate apply and rollback behavior in a test environment.
7. Verify report traceability to evidence and tool runs.

## Test method

- Verify that approval is recorded.
- Verify that apply and rollback steps are reproducible in a test environment.
- Verify that ORM/schema definitions match the migration.
