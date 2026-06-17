# Compliance RAG Skill

## When to use

컴플라이언스 검증을 위해 내부 RAG, 외부 공식 근거 후보, 모델 사전지식을 구분하고 source grading을 적용해야 할 때 사용합니다.

## Inputs

- 검증할 정책, 통제 항목, 질문
- 내부 knowledge base 검색 결과
- 외부 공식 근거 후보
- 관련 evidence와 tool_runs

## Outputs

- Reference summary
- Source grading 결과
- Evidence 연결 정보
- Human review가 필요한 판단 목록

## Safety rules

- RAG-only 결론을 최종 판단으로 확정하지 않습니다.
- 내부 RAG, 외부 공식 근거 후보, 모델 사전지식을 명확히 구분합니다.
- 법률/보안/감사 최종 판단은 human review로 표시합니다.
- 출처, fetched_at, trust_level, approval_status를 가능한 한 기록합니다.

## Procedure

1. 질문과 적용 범위를 정의합니다.
2. 내부 RAG 결과를 reference 후보로 정리합니다.
3. 외부 공식 근거 후보를 별도 reference로 정리합니다.
4. 모델 사전지식으로 보완한 내용은 별도 표시합니다.
5. Source grading을 적용합니다.
6. Live evidence와 reference를 연결하되 혼합하지 않습니다.
7. 최종 판단이 필요한 항목은 human review로 표시합니다.

## Test method

- Reference와 evidence가 분리되어 있는지 확인합니다.
- Source grading 근거가 기록되었는지 확인합니다.
- Human review 대상이 자동 확정되지 않았는지 확인합니다.
