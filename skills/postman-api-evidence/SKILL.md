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

- Mask tokens, secrets, passwords, and API keys.
- Do not send state-changing requests to production without explicit approval.
- Use only approved collections and environments.
- Do not store or commit real credentials.

## Procedure

1. Confirm the collection, environment, and endpoint scope.
2. Identify state-changing requests and sensitive variables.
3. Run only approved Newman/Postman CLI commands.
4. Parse the result JSON.
5. Summarize status codes, latency, and assertion failures.
6. Mask tokens and secrets.
7. Store raw results separately from compact summaries.

## Test method

- Verify that the result JSON can be parsed.
- Verify that status, latency, and assertion summaries match the raw output.
- Verify that no sensitive value remains in output or artifacts.
