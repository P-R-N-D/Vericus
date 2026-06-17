---
name: postman-api-evidence
description: Collect API test evidence safely with Newman or Postman CLI.
---

# Postman API Evidence Skill

## When to use

Use this skill when you need to collect API test evidence with Newman or Postman CLI.

## Inputs

- Postman collection file or collection identifier
- Environment file or approved variable set
- Allowed endpoint scope
- Tokens, secrets, or variables that must be masked

## Outputs

- Newman result JSON
- Status summary
- Latency summary
- Assertion failure summary
- Evidence metadata

## Safety rules

- Do not persist unredacted request or response bodies, environment variables, tokens, API keys, cookies, or secrets.
- Redact sensitive API evidence before writing persistent artifacts.
- Store only redacted raw results as artifacts when sensitive values may appear.
- Do not send state-changing requests to production without explicit approval.
- Use only approved collections and environments.
- Do not store or commit real credentials.

## Procedure

1. Confirm the collection, environment, and endpoint scope.
2. Identify state-changing requests and sensitive variables.
3. Run only approved Newman/Postman CLI commands.
4. Parse the result JSON.
5. Summarize status codes, latency, and assertion failures.
6. Redact tokens, secrets, cookies, API keys, and sensitive request or response bodies before writing persistent artifacts.
7. Store only redacted raw results as artifacts when sensitive values may appear.
8. Store raw results separately from compact summaries.

## Test method

- Verify that the result JSON can be parsed.
- Verify that status, latency, and assertion summaries match the raw output.
- Verify that no sensitive value remains in persistent output or artifacts.
