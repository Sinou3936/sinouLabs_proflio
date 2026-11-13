## 이번 주 핵심 뉴스

- 보안 업체 Cequence Security가 KPMG 싱가포르의 참여로 만든 보고서를 11월 11일 공개했습니다. 2026년 10월 한 주 동안 5개 업종의 AI 에이전트 방문 25만 건 이상을 분석했습니다.
- 에이전트 방문의 약 7분의 1은 열람을 넘어 예약, 구매, 로그인, 계정 관리까지 수행했습니다.
- 한 통신사에서는 신원을 밝히지 않은 에이전트 요청이 하루 약 100건에서 최대 3만 2천 건으로 늘었고, 고객으로 로그인해 다단계 인증까지 통과했습니다.
- 한 온라인 마켓에서는 'Google-Agent'를 자칭한 방문이 실제 에이전트 방문 전체보다 많았지만 모두 로그인에 실패했습니다. 업체는 훔친 비밀번호의 대량 대입 시도로 봤고, Google은 관련이 없습니다.
- 이름보다 실제 행동을 보고, 결제·계정 변경 같은 위험한 행동에 추가 인증을 두라는 권고가 나왔습니다.

## 왜 눈여겨봤나

에이전트가 사람 대신 로그인하는 일이 늘면 이름표만으로 접속한 쪽을 구분하기는 어려워집니다. 작은 서비스도 로그인 같은 민감한 지점부터 행동 기준으로 살펴야 한다는 이야기라 골랐습니다. 다만 수치는 보안 업체가 직접 조사·발표한 것이라 업체 관점임을 감안해야 합니다.

## 시노우랩스가 느낀 점

약봄은 복약과 가족의 복용 현황 확인처럼 건강과 관련된 정보를 다루고, 가족 연결도 계정을 바탕으로 이뤄집니다. 로그인 시도가 비정상적으로 몰릴 때 Firebase 기반 구성에서 어디까지 걸러낼 수 있는지 다시 점검해 보려 합니다.

하비허브는 커뮤니티 앱이라 가짜 계정이나 반복 로그인 시도가 남의 일이 아닙니다. Cloud Functions로 서버 쪽 로직을 두고 있어, 위험한 행동에 추가 확인을 두라는 권고가 참고가 됐습니다. 모든 접속을 의심하기보다 중요한 행동을 골라 지키는 쪽이 사용자 경험에도 낫다고 느꼈습니다.

## 출처

- [Agentic AI Governance - KPMG and Cequence Partnership (Cequence 공식 블로그)](https://www.cequence.ai/blog/kpmg-ai-agent-governance)
- [Cequence Security and KPMG Collaborate on Joint Report Examining how Organisations can Govern and Secure Agentic AI (CybersecAsia, PR Newswire 보도자료)](https://cybersecasia.net/pr-newswire/cequence-security-and-kpmg-collaborate-on-joint-report-examining-how-organisations-can-govern-and-secure-agentic-ai/)
- [Bots pose as AI agents, AI agents pose as humans, and defenses believe both (Help Net Security)](https://www.helpnetsecurity.com/2026/11/12/bots-ai-agent-impersonation/)
- [Cequence and KPMG report finds AI agents signing in and buying for customers without identifying themselves (Compare the Cloud)](https://www.comparethecloud.net/news/cequence-and-kpmg-report-finds-ai-agents-signing-in-and-buying-for-customers-without-identifying-the)
