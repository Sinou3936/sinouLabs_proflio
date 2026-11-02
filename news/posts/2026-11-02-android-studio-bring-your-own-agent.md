## 이번 주 핵심 뉴스

- 구글은 2026년 10월 28일(미국 기준) Android Dev Summit에 맞춰 안드로이드 스튜디오(공식 앱 개발 도구) 새 버전 "Rabbit 2"를 내놓았습니다.
- "Bring Your Own Agent(내 AI 도우미 가져오기)" 기능이 정식(stable)으로 나왔습니다. 개방형 규약 ACP를 지원하는 AI 코딩 도우미 40종 이상을 도구 안에서 골라 쓸 수 있고, Claude Agent, OpenAI Codex, 구글 Antigravity가 예로 소개됐습니다.
- 터미널용 Android CLI도 Claude Code와 Codex용 공식 플러그인으로 나왔습니다. 구글 내부 테스트에서 미리보기 명령을 쓴 AI 도우미는 화면(UI) 작업을 77% 더 빨리 끝냈고, 토큰(AI 사용량)은 최대 3배 적게 썼다고 합니다.

## 왜 눈여겨봤나

그동안은 AI 도우미에 따라 작업 도구까지 바꿔야 하는 경우가 많았습니다. 이번에는 구글이 공식 도구를 열어 "도우미는 원하는 것으로 고르세요"라고 한 셈입니다. 수치는 구글 자체 테스트라 저희 환경에서도 같을지는 알 수 없지만, 개발 도구가 특정 AI에 묶이지 않는 쪽으로 가는 신호로 봤습니다(추정).

## 시노우랩스가 느낀 점

저희는 Flutter로 앱을 만드는 1인 개발 스튜디오입니다. 혼자 일하는 입장에서는 도우미가 똑똑해지는 것만큼, 작업 방식에 맞게 고를 수 있다는 점이 반가웠습니다.

다만 화면 코드를 빨리 써 준다고 실제 기기 동작까지 보장되지는 않습니다. 약봄은 화면이 꺼져 있어도 잠금 화면 위로 알람이 떠야 하고, 하비허브는 실시간 채팅이 끊기지 않아야 합니다. 화면 꺼짐 알림, 오프라인, 기기별 정책은 실제 기기로 확인하고 있습니다. 새 기능의 효과는 직접 써 본 뒤 말씀드리겠습니다.

도구가 편해져도 앱의 책임은 만든 사람에게 있습니다. AI가 쓴 코드도 읽고 이해한 다음 내보내겠습니다.

## 출처

- [What's new in Android developer tools and performance at Android Dev Summit (Android Developers Blog)](https://developer.android.com/blog/posts/android-dev-summit-26-developer-tools-performance)
- [Google opens Android development to third-party AI agents and unveils new Gemini APIs (The Decoder)](https://the-decoder.com/google-opens-android-development-to-third-party-ai-agents-and-unveils-new-gemini-apis/)
- [Android Studio Now Accepts Any AI Coding Agent (TechTimes)](https://www.techtimes.com/articles/329715/20261030/android-studio-now-accepts-any-ai-coding-agent-google-sets-2027-foldable-deadline.htm)
