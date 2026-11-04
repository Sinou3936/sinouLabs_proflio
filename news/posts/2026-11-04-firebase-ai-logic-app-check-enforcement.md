## 이번 주 핵심 뉴스

- Firebase(구글의 앱 개발 플랫폼)는 2026년 11월 2일부터 Firebase AI Logic(앱에서 Gemini를 부르는 기능)에 App Check(정상 앱의 요청인지 확인하는 장치)를 필수로 적용한다고 공지했습니다.
- 아직 App Check를 적용하지 않은 프로젝트에도 자동으로 적용되며, 유효한 확인 값(토큰)이 없는 요청은 차단됩니다.
- App Check가 들어 있지 않은, 이미 출시된 앱 버전의 요청도 막힙니다.
- 10월 27일부터 콘솔에서 자동 적용을 임시로 미룰 수 있게 됐지만, 2027년 1월 21일 이후에는 더 미룰 수 없습니다.

## 왜 눈여겨봤나

지난 #2에서는 AI Studio 안드로이드 앱에 App Check가 기본 적용된 소식을 다뤘습니다. 이번에는 범위가 Firebase AI Logic을 쓰는 프로젝트 전체로 넓어졌고, 선택이 아닌 필수가 됐으며, 연기에도 마감일이 있습니다. 이미 배포된 옛 버전 앱이 갑자기 AI 기능을 못 쓰게 될 수 있다는 점이 특히 눈에 띄었습니다.

## 시노우랩스가 느낀 점

저희는 Flutter와 Firebase로 앱을 만드는 1인 개발 스튜디오이고, 하비허브에서는 7일마다 Gemini가 활동을 분석해 피드백을 줍니다. Gemini를 앱에서 직접 부르는지, 서버(Cloud Functions)를 거치는지에 따라 영향이 달라서 구조를 정확히 확인하는 것이 먼저라고 느꼈습니다.

서버 쪽 규칙이 바뀌면 업데이트하지 않은 옛 버전이 먼저 영향을 받을 수 있고, 이는 최신 버전만 쓰는 데모에서는 잘 드러나지 않습니다.

새 기능을 붙이는 일보다 이미 내보낸 버전이 어떻게 되는지 확인하는 일이 더 중요할 때가 있습니다. 저희는 배포된 버전을 실기기로 다시 확인하는 습관을 지키겠습니다.

## 출처

- [Firebase 릴리스 노트, 2026년 10월 27일 항목 (Firebase)](https://firebase.google.com/support/releases)
- [Firebase AI Logic FAQ 및 문제 해결, App Check 항목 (Firebase)](https://firebase.google.com/docs/ai-logic/faq-and-troubleshooting)
- [Firebase AI Logic 데이터 거버넌스 문서, App Check 필수화 안내 (Firebase)](https://firebase.google.com/docs/ai-logic/data-governance)
