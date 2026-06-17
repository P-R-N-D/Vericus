# Vericus Skills

이 디렉터리는 Vericus에서 반복 작업, 도구 사용, 절차 단위로 참조할 skill 문서 골격을 보관합니다. `SKILL.md`는 소스 폴더마다 만들지 않고, Playwright evidence 수집, API evidence 수집, 취약점 스캔, 컴플라이언스 RAG, 시각 판단, DB migration 절차처럼 반복 가능한 작업 단위로 작성합니다.

## Skills

- [`playwright-evidence`](playwright-evidence/SKILL.md): GUI/browser evidence 수집 절차
- [`postman-api-evidence`](postman-api-evidence/SKILL.md): Newman/Postman CLI 기반 API evidence 수집 절차
- [`vulnerability-scan`](vulnerability-scan/SKILL.md): CLI scanner 결과 수집 및 evidence 정규화 절차
- [`compliance-rag`](compliance-rag/SKILL.md): 컴플라이언스 근거 검색, source grading, human review 절차
- [`visual-judge`](visual-judge/SKILL.md): 필요 시 vision model 기반 시각 판단 절차
- [`db-migration`](db-migration/SKILL.md): 향후 DB migration 작업 시 따를 절차
