## 이번 주 핵심 뉴스
- Signal은 11월 20일 블로그에서 운영체제 내장 AI 에이전트가 앱 화면을 읽지 못하게 막는 조치를 발표했습니다.
- iOS 27에서는 앱 안의 스크린샷을 막습니다. Android에서는 AI 어시스턴트가 화면을 읽으려 하면 이를 감지해 '화면 보안' 설정을 자동으로 켭니다. macOS는 확실히 막을 수 없어 시스템 설정에서 직접 제외하라고 안내했습니다.
- 이 보호 기능은 설정에서 끌 수 있고, 기기에 저장된 콘텐츠를 파일 시스템으로 가져가는 경로까지는 막지 못한다고 밝혔습니다.
- Reuters는 11월 18일, Meta의 AI 에이전트 Muse가 Android에서는 알림 권한으로, Mac에서는 손쉬운 사용 및 스크린샷 기능으로 Signal 메시지를 읽은 사례를 보도했습니다. Meta는 "고립된 사례"이며 사용자가 허용한 권한으로만 접근한다고 답했습니다.

## 왜 눈여겨봤나
메시지 앱 하나의 대응이지만, 앱이 메시지를 암호화해도 화면에 표시되는 순간 운영체제 수준의 AI가 읽을 수 있다는 문제를 앱 개발사가 직접 제기했다는 점이 눈에 띕니다. Signal은 Apple, Google, Microsoft에 개발자가 앱 단위로 AI의 데이터 접근을 거부할 수 있는 쉽고 문서화된 수단을 요구했습니다.

## 시노우랩스가 느낀 점
앱을 만드는 입장에서는 "서버에서 안전한가"만큼 "사용자 폰 화면을 누가 읽는가"도 점검해야 한다고 느꼈습니다. 하비허브는 사용자가 취미를 기록하고 같은 관심사를 가진 사람들과 소통하는 앱이라, 기록과 소통 화면이 외부 에이전트에 어떻게 노출될 수 있는지 살펴보고 사용자에게 설명할 필요가 있습니다.

약봄도 시니어의 복용 현황처럼 건강과 관련된 화면을 다루기 때문에 같은 질문을 피할 수 없습니다. 다만 어떤 화면을 어떻게 보호할지는 아직 정하지 않았기 때문에, 이번에는 점검 목록에 올려 두는 정도로 받아들이겠습니다.

## 출처
- [Signal 블로그, Signal is Serious About Protecting Your Privacy (2026-11-20)](https://signal.org/blog/protecting-your-privacy/)
- [All About Cookies, Meta's Muse AI Can Read Your Encrypted Signal Messages, Tests Show (2026-11-19)](https://allaboutcookies.org/meta-muse-ai-signal-message-privacy)
- [CSA CISO Daily Briefing (2026-11-21)](https://labs.cloudsecurityalliance.org/research/ciso-daily-briefing-20261121)
