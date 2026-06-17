---
name: visual-judge
description: Use vision models only when structured evidence is insufficient.
---

# Visual Judge Skill

## When to use

Use this skill when structured Playwright evidence is not enough and a local VLM or online vision model may help with visual assessment.

## Inputs

- Screenshot or image artifact
- Structured Playwright evidence
- Visual question and allowed scope
- Sensitive regions that must be masked

## Outputs

- Visual observation summary
- Confidence and limitation note
- Evidence links
- Human review flag when needed

## Safety rules

- Use structured Playwright evidence as the default basis.
- Use image-based judgment only when needed.
- Do not send every step screenshot to an LLM.
- Mask sensitive image regions.
- Do not auto-finalize audit, security, or legal conclusions from visual judgment.

## Procedure

1. Check whether structured evidence is sufficient.
2. Select screenshots only when visual review is needed.
3. Mask sensitive regions.
4. Choose a local VLM or online vision model if approved for the task.
5. Record observations, limitations, and confidence.
6. Link the result to evidence.
7. Mark uncertain or high-impact conclusions for human review.

## Test method

- Verify that vision model use was necessary.
- Verify that screenshot masking was applied.
- Verify that the result links back to evidence and states limitations.
