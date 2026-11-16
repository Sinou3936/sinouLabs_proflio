## 이번 주 핵심 뉴스

- AI 모델 플랫폼 Fireworks AI가, 연구개발 장비를 맡긴 외부 클라우드 업체가 침해되면서 자사 개발 시스템까지 접근당했다고 밝혔습니다. 결제 정보와 일부 고객 데이터셋이 영향을 받았고, 10월 초에 이어 두 번째 보안 사고입니다.
- Notion은 이 사고로 Notion AI 대화 기록이 노출됐을 수 있고, 영향을 받은 워크스페이스는 1% 미만이라고 밝혔습니다. 대화에 입력한 이름, 이메일, API 토큰이 포함될 수 있습니다.
- Notion은 11월 3일부로 Fireworks와 연결을 끊고 Insights 기능을 중단했습니다. 대부분의 기록에는 누구의 것인지 알려 주는 정보가 없다고 설명했습니다.

## 왜 눈여겨봤나

사고가 난 곳은 Notion이 아니라 Notion이 AI 처리를 맡긴 외부 업체였습니다. AI 기능을 붙인 서비스에서는 사용자가 입력한 글이 어느 업체를 거치는지가 곧 보안의 범위가 된다는 점을 보여 줍니다. 다만 조사가 진행 중이고, 피해 규모는 업체 발표 기준입니다.

## 시노우랩스가 느낀 점

하비허브는 사용자의 기록과 활동을 Gemini로 분석해 7일마다 피드백을 드립니다. 사용자가 쓴 기록이 외부 AI로 전달되는 구조라서, 이번 사고가 남의 일처럼 보이지 않았습니다. 어떤 내용이 AI로 넘어가는지, 이름이나 연락처 같은 불필요한 정보가 섞이지 않는지 다시 점검해 보려 합니다.

약봄은 복약 정보를 다루는 만큼 외부 서비스에 맡기는 범위를 더 조심스럽게 봐야 한다고 느꼈습니다. 1인 개발이라 직접 만든 부분은 꼼꼼히 챙길 수 있어도, 연동한 서비스 쪽 사고는 막기 어렵습니다. 그래서 연동 서비스를 늘릴 때 무엇이 오가는지 먼저 확인하는 습관을 들이려 합니다.

## 출처

- [Cyberattack on Fireworks AI allowed hackers to access Notion customers' chat transcripts (TechCrunch)](https://techcrunch.com/2026/11/12/cyberattack-on-fireworks-ai-allowed-hackers-to-access-notion-customers-chat-transcripts/)
- [Notice about the Fireworks AI incident that may impact some Notion workspaces (Notion Help Center)](https://notion.com/help/security-incident-involving-a-third-party-ai-vendor)
- [October 2026 Security Incident Update (Fireworks AI 보안 공지)](https://fireworks.ai/security/bulletins/october-2026-security-incident-update)
- [October 2026 Security Incident (Fireworks AI 보안 공지)](https://fireworks.ai/security/bulletins/october-2026-security-incident)
- [Fireworks AI discloses new breach after cloud provider hack (BleepingComputer)](https://bleepingcomputer.com/news/security/fireworks-ai-discloses-new-breach-after-cloud-provider-hack)
