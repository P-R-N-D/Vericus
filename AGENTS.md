# Vericus Codex Entry Point

Codex는 작업 전에 [`docs/AGENTS.md`](docs/AGENTS.md)를 canonical source of truth로 읽고 따라야 합니다.

핵심 guardrail:

- Agent는 증거를 수집하고, 최종 판단은 사람이 합니다.
- Reference와 live evidence를 분리합니다.
- Root/sudo/administrator 권한 작업과 destructive command를 금지합니다.
- Secret, API key, password, token을 작성하거나 커밋하지 않습니다.
- 별도 승인 없이 DB migration, ORM/schema 구현, 패키지 설치, lockfile 변경을 하지 않습니다.
