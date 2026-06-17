# DB Migration Skill

## When to use

현재는 DB 수정 금지입니다. 향후 사용자 승인 후 별도 작업으로 schema 변경이나 migration을 수행해야 할 때 절차 지침으로만 사용합니다.

## Inputs

- 사용자 승인 내역
- 변경 목적과 영향 범위
- 기존 schema와 migration 상태
- rollback 계획

## Outputs

- Migration 계획
- 검토 체크리스트
- 실행 및 rollback 절차
- Human approval 기록

## Safety rules

- 현재 작업에서는 DB migration, SQL, ORM/schema 구현을 만들지 않습니다.
- Schema 변경은 사용자 승인 후 별도 작업으로 수행합니다.
- Secret, token, password를 migration이나 seed 데이터에 포함하지 않습니다.
- Migration은 향후 migration 파일을 통해서만 수행합니다.
- Destructive schema change는 별도 위험 검토와 승인 없이는 수행하지 않습니다.

## Procedure

1. 사용자 승인 여부를 확인합니다.
2. 변경 목적, 영향 범위, rollback 계획을 문서화합니다.
3. Existing schema와 migration history를 검토합니다.
4. Migration 초안을 작성하기 전에 review checkpoint를 둡니다.
5. 승인 후 migration을 작성합니다.
6. 테스트 DB에서 적용과 rollback을 검증합니다.
7. Report와 evidence/tool_runs 추적 가능성을 확인합니다.

## Test method

- 승인 기록이 있는지 확인합니다.
- Migration apply/rollback이 테스트 환경에서 재현되는지 확인합니다.
- ORM/schema와 migration이 일치하는지 확인합니다.
