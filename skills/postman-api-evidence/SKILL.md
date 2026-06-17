# Postman API Evidence Skill

## When to use

Newman/Postman CLI 기반으로 API test evidence를 수집해야 할 때 사용합니다.

## Inputs

- Postman collection 파일 또는 collection 식별자
- Environment 파일 또는 변수 목록
- 실행 범위와 허용된 endpoint
- 마스킹해야 할 token/secret 목록

## Outputs

- Newman 실행 결과 JSON
- Status summary
- Latency summary
- Assertion failure summary
- Evidence metadata

## Safety rules

- Token, secret, password, API key는 마스킹합니다.
- 운영 시스템에 상태 변경을 일으키는 요청은 명시 승인 없이 실행하지 않습니다.
- 허용된 collection/environment만 사용합니다.
- 실제 자격 증명을 저장하거나 커밋하지 않습니다.

## Procedure

1. Collection, environment, endpoint 범위를 확인합니다.
2. 상태 변경 요청과 민감 변수를 식별합니다.
3. 허용된 Newman/Postman CLI 실행만 수행합니다.
4. 결과 JSON을 파싱합니다.
5. Status, latency, assertion failure를 요약합니다.
6. Token/secret을 마스킹합니다.
7. Raw result와 compact summary를 evidence로 분리합니다.

## Test method

- 결과 JSON이 파싱 가능한지 확인합니다.
- Status, latency, assertion failure 요약이 원본 결과와 일치하는지 확인합니다.
- 민감 정보가 출력과 artifact에 남지 않았는지 확인합니다.
