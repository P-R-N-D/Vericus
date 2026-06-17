# Playwright Evidence Skill

## When to use

Use this skill when you need to collect GUI or browser evidence from a page, flow, or component.

## Inputs

- Target URL or local app address
- Allowed navigation path and scenario
- Sensitive values or regions that must be masked
- Artifact destination or case identifier

## Outputs

- Screenshot
- Accessibility snapshot summary
- Form field summary
- Cookie summary
- Network summary
- Console error summary
- Evidence metadata

## Safety rules

- Do not perform state-changing actions.
- Do not submit forms, delete data, make payments, or trigger production side effects without explicit approval.
- Mask sensitive payloads, cookies, tokens, and passwords.
- Prefer deterministic evidence collection over uncontrolled browsing.

## Procedure

1. Confirm the evidence goal and allowed URL scope.
2. Identify and avoid state-changing actions.
3. Open the approved page with Playwright.
4. Capture screenshots and accessibility snapshot summaries.
5. Summarize form fields, cookies, network activity, and console errors.
6. Mask sensitive data.
7. Store raw artifacts separately from compact summaries.

## Test method

- Verify that screenshots and summaries match the approved scenario.
- Verify that no state-changing action was executed.
- Verify that sensitive payloads are masked.
