## 이번 주 핵심 뉴스

- 구글이 11월 20일 Gemini 플랫폼의 '시맨틱 거버넌스 정책'을 프리뷰로 소개했고, 23일 방어 시험 결과를 공개했습니다.
- 에이전트가 호출하려는 도구를 Agent Gateway가 실행 전에 정책 엔진으로 보내고, LLM 판정기가 사용자 요청이나 정책과 어긋난다고 보면 막습니다.
- 사용자 의도 검사는 기본으로 켜져 있습니다. 차단 없이 기록만 하는 드라이런 모드로 판정 결과를 먼저 확인한 뒤 적용하라고 구글은 권합니다.
- 구글이 gemini-2.5-flash 에이전트로 돌린 AgentDojo 시험에서 공격 성공률은 48.7%에서 0.9%로 낮아졌고, 정상 작업 성능은 평균 2.6%p 줄었습니다.
- 판정기가 LLM이라 결과가 달라질 수 있고, 적응형 공격은 측정하지 않았다고 구글도 밝혔습니다.

## 왜 눈여겨봤나

에이전트 보안 이야기는 "어떤 권한을 줄 것인가"에서 끝나는 경우가 많습니다. 이번 소식은 허용된 권한 안에서도 "지금 이 호출이 사용자가 요청한 일인가"를 따로 확인한다는 점이 달랐습니다. 문서 속에 숨은 지시 때문에 삭제 호출이 일어나는 예시가 특히 와닿았습니다.

## 시노우랩스가 느낀 점

앱이 AI에게 도구를 쥐여 줄수록 권한 목록만으로는 부족하다는 점을 다시 느꼈습니다. 하비허브는 Gemini와 Cloud Functions를 쓰는 앱이라, 만약 AI가 서버 함수를 직접 호출하는 구조로 넓힌다면 사용자가 쓴 글이나 채팅 속 문장이 지시처럼 읽히지 않게 하는 문제부터 따져야 할 것 같습니다.

다만 이 기능은 프리뷰이고, 수치는 구글이 직접 낸 시험 결과이며 판정도 확률적입니다. 1인 개발 입장에서는 그대로 믿기보다 "기록부터 해 보고 나중에 막는다"는 드라이런 순서를 배워 두고, 점검 목록에 올려 두려고 합니다.

## 출처

- [Google Developers Blog, Check what your AI agents do before they do it with Semantic governance policies (2026-11-20)](https://developers.googleblog.com/check-what-your-ai-agents-do-before-they-do-it-with-semantic-governance-policies/)
- [Google Developers Blog, Did the user ask for this? Securing AI agents against intent hijacking with Semantic governance policies (2026-11-23)](https://developers.googleblog.com/did-the-user-ask-for-this-securing-ai-agents-against-intent-hijacking-with-semantic-governance-policies/)
- [Google Cloud 문서, Semantic governance policies overview](https://docs.cloud.google.com/gemini-enterprise-agent-platform/govern/policies/semantic-governance-overview)
- [Google Cloud 문서, Adversarial benchmarking](https://docs.cloud.google.com/gemini-enterprise-agent-platform/govern/policies/adversarial-benchmarking)
- [Help Net Security, Google's semantic governance policies can block an AI agent's tool call before it runs (2026-11-23)](https://www.helpnetsecurity.com/2026/11/23/google-semantic-governance-policies/)
