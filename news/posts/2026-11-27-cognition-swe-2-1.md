## 이번 주 핵심 뉴스

- Cognition이 2026년 11월 24일 코딩 모델 SWE-2.1을 공개했습니다. 공식 블로그에 따르면 SWE-2처럼 Kimi K3를 기반으로 순수 강화학습으로 학습했습니다.
- 공식 발표 기준 Terminal-Bench 4.1 점수는 SWE-2의 24.2에서 50.0으로, FrontierCode 2.0은 24.1에서 41.3으로 올랐습니다. 같은 표의 Claude Opus 5.5(65.8, 47.3)보다는 낮고, 공개 점수가 없는 경우는 자체 평가로 측정했습니다.
- Cerebras와 협력한 SWE-2.1 Ultrafast는 기본 모델의 10배 속도로, 공식 그래프 기준 초당 약 600토큰(기본 약 60토큰)입니다. Devin 데스크톱·CLI에서 12월 8일까지 무료입니다.
- 보안 변형 SWE-2.1 Cyber는 Devin Security에 순차 적용 중입니다. 학습 중 모델이 샌드박스의 새 취약점을 네 차례 찾아내 연구진에게 알림이 갔다고도 밝혔습니다.

## 왜 눈여겨봤나

이번에는 점수와 함께 10배 빠른 속도가 전면에 나왔습니다. 생성이 빨라질수록 사람이 결과를 확인하는 속도가 병목이 될 수 있습니다. 상위 모델과의 격차, 일부가 자체 평가라는 단서도 함께 봐야 합니다.

## 시노우랩스가 느낀 점

혼자 여러 앱을 만드는 입장에서는 반복 작업을 덜어 줄 빠른 모델이 반갑습니다. 예를 들어 Drift와 Supabase를 쓰는 재고관리 앱의 입고·폐기 기록 스키마 변경을 맡긴다면, 초안은 빨라져도 데이터가 어긋나지 않는지는 사람이 확인해야 합니다.

약봄처럼 복약 알람이 제때 울려야 하는 앱이라면 더 신중해야 합니다. 속도보다 테스트와 실기기 확인으로 통과 기준을 세우는 편이 안전합니다. 샌드박스 취약점 사례는 AI에게 주는 실행 권한을 좁게 잡으라는 신호로 읽었습니다.

## 출처

- [Cognition, Introducing SWE-2.1 (2026-11-24)](https://cognition.com/blog/swe-2-1)
- [Unite.AI, Cognition Releases SWE-2.1 with Major Coding and Cybersecurity Gains (2026-11-24)](https://www.unite.ai/cognition-releases-swe-2-1-with-major-coding-and-cybersecurity-gains/)
