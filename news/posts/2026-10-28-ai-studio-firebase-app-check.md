## 이번 주 핵심 뉴스

Google AI Studio로 만드는 안드로이드 앱에 API 키 보안 장치가 기본으로 들어갔습니다.

- 10월 26일 Firebase 릴리스 노트에 따르면, Google AI Studio에서 생성형 AI 기능이 들어간 안드로이드 앱을 만들면 Firebase AI Logic과 App Check가 자동으로 설정됩니다.
- 앱 안에 API 키를 넣지 않고도 Gemini 모델을 호출할 수 있습니다.
- 테스트할 때는 AI Studio가 자동으로 관리하는 디버그 토큰을, Google Play 배포용(릴리스) 빌드에서는 미리 설정된 사이트 키로 reCAPTCHA Enterprise를 사용합니다.
- 공식 문서 기준으로 Play 콘솔 내부 테스트 트랙 게시까지만 지원하며, 정식 출시는 Play 콘솔에서 직접 관리해야 합니다.

## 왜 눈여겨봤나

앱 파일(APK)에 API 키를 그대로 넣으면 누군가 키를 꺼내 쓸 수 있고, 그 요금이 개발자에게 청구될 수 있습니다. 알고 있어도 귀찮아서 미루기 쉬운 부분인데, 이번에는 "요청이 진짜 내 앱에서 왔는지 확인하는 장치"가 기본값으로 들어왔습니다.

## 시노우랩스가 느낀 점

하비허브는 사용자의 취미 활동 기록을 Gemini가 분석해 피드백을 주는 앱이라, AI 호출 비용과 남용 방지는 남의 일이 아닙니다. 1인 개발에서는 보안 설정이 "나중에 할 일"로 밀리기 쉬운데, 처음부터 기본으로 갖춰져 있으면 그만큼 부담이 줄어듭니다.

다만 이번 소식은 AI Studio로 만드는 안드로이드 앱에 관한 내용이고, Flutter로 만든 앱에 그대로 적용된다는 뜻은 아닙니다. 그래도 "AI 기능에는 앱 인증을 기본으로 붙인다"는 방향은 시노우랩스도 점검 기준으로 삼으려 합니다. 편리한 도구일수록 무엇이 자동으로 설정됐는지 직접 확인하는 습관이 필요하다고 느꼈습니다.

## 출처

- [Release Notes, Google AI Studio integration 항목 (Firebase)](https://firebase.google.com/support/releases)
- [Add Firebase to your Google AI Studio app (Firebase Docs)](https://firebase.google.com/docs/ai-assistance/ai-studio-integration)
- [Build Android apps in Google AI Studio (Google AI for Developers)](https://ai.google.dev/gemini-api/docs/aistudio-android)
