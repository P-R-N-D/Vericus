# Vericus

Vericus는 GUI/CLI 테스트, 취약점 분석, 컴플라이언스 검증, 감사 증거 리포팅을 지원하기 위한 evidence-driven workspace입니다.

## 방향

- RAG는 판단 근거를 찾고 정리하는 데 사용합니다.
- LangGraph 스타일의 오케스트레이션은 에이전트 실행 흐름을 구성하는 데 사용합니다.
- Playwright, Newman/Postman CLI, CLI scanner 같은 도구 결과는 live evidence로 취급합니다.
- 최종 법률, 보안, 감사 판단은 사람이 검토합니다.

## 문서 구조

- AI-facing 지침은 [`docs/AGENTS.md`](AGENTS.md)를 기준으로 합니다.
- 사람이 읽는 설명 문서는 한국어/영어를 분리합니다.
- DB 스키마 설계 지침은 [`database-schema-guidelines.ko.md`](database-schema-guidelines.ko.md)를 참고하세요.
- 영어 문서는 [`README.en.md`](README.en.md)를 참고하세요.
