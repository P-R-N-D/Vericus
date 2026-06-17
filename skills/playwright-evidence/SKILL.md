# Playwright Evidence Skill

## When to use

GUI/browser 화면, 접근성 구조, 네트워크, 콘솔 상태를 evidence로 수집해야 할 때 사용합니다.

## Inputs

- 대상 URL 또는 로컬 앱 주소
- 허용된 탐색 경로와 테스트 시나리오
- 마스킹해야 할 민감 정보 목록
- 저장할 artifact 위치 또는 case 식별자

## Outputs

- Screenshot
- Accessibility snapshot summary
- Form fields summary
- Cookies summary
- Network summary
- Console errors summary
- Evidence metadata

## Safety rules

- 상태 변경 action은 수행하지 않습니다.
- 로그인, 결제, 삭제, 제출 등 side effect가 있는 동작은 명시 승인 없이 실행하지 않습니다.
- 민감 payload, cookie, token, password는 마스킹합니다.
- Uncontrolled browser exploration보다 deterministic evidence collection을 우선합니다.

## Procedure

1. 수집 목적과 허용된 URL 범위를 확인합니다.
2. 상태 변경 가능성이 있는 action을 식별하고 제외합니다.
3. Playwright로 지정된 화면에 접근합니다.
4. Screenshot과 accessibility snapshot summary를 수집합니다.
5. Form fields, cookies, network, console errors를 요약합니다.
6. 민감 정보를 마스킹합니다.
7. Raw artifact와 compact summary를 분리해 evidence로 정리합니다.

## Test method

- 수집된 screenshot과 summary가 지정된 URL/시나리오에 대응하는지 확인합니다.
- 상태 변경 action이 실행되지 않았는지 확인합니다.
- 민감 payload가 마스킹되었는지 확인합니다.
