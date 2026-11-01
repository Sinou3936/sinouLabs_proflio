## 이번 주 핵심 뉴스

GitHub가 10월 28일 연례 보고서 Octoverse 2026을 공개했습니다. GitHub에서 AI 에이전트(스스로 작업을 이어가는 AI 도우미)의 비중이 크게 늘었다는 내용입니다.

- 2026년 9월 기준 풀 리퀘스트(코드 변경을 합쳐 달라는 요청)의 40% 이상이 AI 에이전트의 초안에서 시작됐습니다. 3월에는 17%였습니다.
- 9월 한 달에만 에이전트가 시작한 풀 리퀘스트가 1억 1천만 건이었습니다. GitHub는 모든 에이전트 사용을 감지할 수 없어 이 수치가 최소치라고 설명합니다.
- 같은 날 GitHub Universe 행사에서는 작업에 맞춰 AI 모델을 골라 쓰는 Copilot Fusion도 소개됐습니다.

## 왜 눈여겨봤나

AI 코딩 도구가 실험 단계를 지나 개발의 기본 방식이 되어 간다는 숫자이기 때문입니다. 체감이 아니라 GitHub의 자체 집계라는 점에서 근거가 있습니다. 다만 "AI 초안으로 시작된" 비율일 뿐, 그 코드가 검토 후 얼마나 그대로 쓰였는지는 이 수치만으로 알 수 없습니다.

## 시노우랩스가 느낀 점

혼자 앱을 만드는 입장에서 AI 도우미는 이미 든든한 동료입니다. 하비허브와 약봄처럼 Flutter와 Firebase로 만드는 앱도 반복 작업이나 초안 작성은 AI에 맡기면 시간을 크게 아낄 수 있다고 생각합니다.

다만 초안이 빨리 나올수록 확인할 몫은 오히려 커진다고 봅니다. 하비허브처럼 Cloud Functions로 서버 쪽 동작을 처리하는 앱은 AI가 쓴 코드가 의도대로 움직이는지 살펴야 합니다. 약봄은 복약 알람이 제때 울려야 의미가 있는 앱이라, 화면이 꺼진 상태에서도 알람이 뜨는지 사람이 직접 확인해야 합니다. 앞으로도 AI가 만든 변경은 직접 읽고 실제 기기에서 눌러 본 뒤 반영하려 합니다.

## 출처

- [Octoverse 2026: commits and pushes reach new highs as developers build with agents (GitHub Blog)](https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/)
- [GitHub Universe 2026: Evolving every layer of the stack (GitHub Blog)](https://github.blog/news-insights/company-news/github-universe-2026-evolving-every-layer-of-the-stack/)
- [GitHub Universe: Copilot Fusion launches as agents start 40% of PRs (The Next Web)](https://thenextweb.com/news/github-universe-copilot-fusion-octoverse-agents)
