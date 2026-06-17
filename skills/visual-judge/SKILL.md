# Visual Judge Skill

## When to use

Playwright 구조화 증거만으로 판단하기 어렵고, 로컬 VLM 또는 온라인 vision model을 선택적으로 사용해 시각 판단을 보조해야 할 때 사용합니다.

## Inputs

- Screenshot 또는 이미지 artifact
- Playwright 구조화 증거
- 판단 질문과 허용 범위
- 마스킹해야 할 민감 영역

## Outputs

- Visual observation summary
- Confidence/limitation note
- Evidence 연결 정보
- Human review 필요 여부

## Safety rules

- 기본 근거는 Playwright 구조화 증거로 삼습니다.
- Image 판단은 필요할 때만 사용합니다.
- Screenshot을 매 step마다 LLM에 보내지 않습니다.
- 민감 정보가 포함된 이미지 영역은 마스킹합니다.
- 시각 판단은 최종 감사/보안 판단으로 자동 확정하지 않습니다.

## Procedure

1. 구조화 증거로 충분한지 먼저 평가합니다.
2. 필요한 경우에만 screenshot을 선택합니다.
3. 민감 영역을 마스킹합니다.
4. 로컬 VLM 또는 온라인 vision model 사용 여부를 결정합니다.
5. 시각 관찰, 한계, confidence를 기록합니다.
6. 관련 evidence와 연결합니다.
7. 필요한 항목은 human review로 표시합니다.

## Test method

- Vision model 호출이 필요한 경우에만 이루어졌는지 확인합니다.
- Screenshot 마스킹이 적용되었는지 확인합니다.
- 판단 결과가 evidence와 연결되고 한계가 기록되었는지 확인합니다.
