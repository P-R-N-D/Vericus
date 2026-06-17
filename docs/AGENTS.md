# Vericus Agent Guidelines

이 문서는 Vericus 레포지토리에서 Codex, Claude Code, GitHub Copilot, Cursor 등 자동화 에이전트가 공통으로 따라야 하는 canonical source of truth입니다. 다른 에이전트 관문 파일은 이 문서를 우선 참조해야 합니다.

## Project purpose

Vericus는 GUI/CLI 테스트, 취약점 분석, 컴플라이언스 검증, 감사 증거 리포팅을 위한 evidence-driven workspace입니다. RAG, LangGraph 기반 오케스트레이션, tool-based execution을 활용해 사람이 검토할 수 있는 근거 중심 작업 공간을 지향합니다.

## Core principles

- Agent는 증거를 수집하고 정리하며, 최종 판단은 사람이 합니다.
- RAG는 판단 근거(reference)이고, GUI/CLI/API/tool output은 live evidence입니다.
- Reference와 evidence를 반드시 분리합니다.
- Root, sudo, administrator 권한이 필요한 작업은 수행하지 않습니다.
- Destructive command를 실행하지 않습니다.
- Secret, API key, password, token을 작성하거나 커밋하지 않습니다.
- 실제 접속 정보, 운영 서버 정보, 비공개 자격 증명은 문서나 예시에 포함하지 않습니다.

## Architecture direction

### Frontend

- Case workspace
- Plan/context view
- GUI/CLI/API replay
- Evidence timeline
- Report review

### Backend

- RAG retrieval
- LangGraph orchestration
- Policy check
- Tool dispatch
- Evidence storage
- Report generation

## Tool roles

- Playwright: GUI/browser evidence 수집
- Newman/Postman CLI: API test evidence 수집
- CLI scanners: vulnerability/compliance evidence 수집
- Local/online LLM: planning, summarization, visual judgment, report drafting

## Development principles

- Agent orchestration, policy checks, tool execution, evidence storage를 분리합니다.
- Tool 실행 전 policy check를 수행합니다.
- Uncontrolled browser exploration보다 deterministic evidence collection을 우선합니다.
- Report는 reference와 evidence로 역추적 가능해야 합니다.
- Tool output은 가능한 한 raw artifact와 compact summary를 분리해 보존합니다.
- Human review가 필요한 법률, 보안, 감사 판단은 자동 확정하지 않습니다.

## Repository guardrails

- DB schema 구현, migration 파일 생성, ORM 모델 수정은 별도 승인 없이 하지 않습니다.
- Backend/frontend 기능 구현은 명시 요청이 있을 때만 수행합니다.
- 패키지 설치와 lockfile 변경은 명시 요청이 있을 때만 수행합니다.
- `.env` 파일은 만들지 않습니다. 필요한 경우 `.env.example`만 작성합니다.
- README와 LICENSE 정책은 훼손하지 않습니다.
