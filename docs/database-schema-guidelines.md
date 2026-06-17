# Database Schema Guidelines

이 문서는 Vericus 데이터베이스 스키마의 설계 지침만 설명합니다. 실제 migration, SQL, ORM 모델은 이 문서 작업에서 만들지 않습니다.

## Principles

- References와 evidence를 분리합니다.
- Raw artifact와 compact summary를 분리합니다.
- `tool_runs`는 모든 도구 실행의 감사 로그 역할을 합니다.
- Evidence는 가능하면 append-only 성격으로 다룹니다.
- Reports는 references, evidence, tool_runs로 추적 가능해야 합니다.
- Secret, token, password는 저장하지 않습니다.
- 외부 문서에는 `source`, `fetched_at`, `trust_level`, `approval_status` 같은 메타데이터를 둡니다.
- Timestamp는 timezone-aware를 전제로 합니다.
- Schema 변경은 향후 migration으로만 수행합니다.

## Initial candidate tables

초기 후보 테이블 이름은 다음과 같습니다. 이 목록은 설계 방향을 문서화하기 위한 것이며, 실제 스키마 구현이 아닙니다.

- `cases`
- `case_plan_steps`
- `references`
- `evidence`
- `tool_runs`
- `artifacts`
- `reports`
- `approvals`
- `knowledge_documents`
- `knowledge_chunks`
