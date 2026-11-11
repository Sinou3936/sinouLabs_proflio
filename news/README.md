# AI소식지 운영 가이드

## 발행 규칙
- 매주 월 · 수 · 금, 한 편에 뉴스 1개 + 느낀 점 (요약 없음)
- 분량 600~900자, 존댓말
- 제목: `[AI소식지 #회차] 핵심 뉴스 + 한마디 관점`
  - 예: `[AI소식지 #1] 구글 새 모델 출시, 앱 개발자가 반가운 이유`
- 본문 구조: 이번 주 핵심 뉴스 → 왜 눈여겨봤나 → 시노우랩스가 느낀 점 → 출처
- 느낀 점에서 시노우랩스 제품을 언급할 때 약봄에만 치우치지 말고, 뉴스와 맞는 제품(약봄, 하비허브 등)을 골라 연결

## 주제 선정 규칙
특정 플랫폼(특히 Android·Firebase)에 쏠리지 않도록 아래 분류를 돌아가며 다룹니다.

| 분류 | 예시 |
| --- | --- |
| AI 모델·서비스 | OpenAI, Anthropic, Google, Meta, 국내 모델의 새 모델·가격·기능 |
| AI 에이전트·자동화 | 에이전트 프레임워크, MCP, 업무 자동화, 브라우저 에이전트 |
| 개발 도구·AI 코딩 | IDE, GitHub, CLI 코딩 도구, 코드 리뷰·테스트 자동화 |
| 모바일 | Android, iOS·Apple Intelligence, Flutter, 앱스토어 정책 |
| 웹·프론트엔드 | 브라우저 AI API, 웹 프레임워크, 디자인 도구 |
| 백엔드·클라우드 | 서버리스, DB, 클라우드 AI 서비스, Firebase, 비용·인프라 |
| 보안·정책 | 개인정보, AI 규제, 계정·인증 보안 |
| 일상 AI 서비스 | 건강·취미·생활 앱에 들어간 AI, 사용자 행동 변화 |

- 직전 2편과 같은 분류는 고르지 않습니다.
- 같은 회사·플랫폼 묶음(예: Google = Android·Firebase·Gemini·AI Studio, Apple, OpenAI)은 최근 5편 중 최대 2편까지만 다룹니다.
- 같은 기능·이슈(예: App Check)는 후속 뉴스라도 최근 10편 안에서는 다시 다루지 않습니다.
- 4편마다 1편 이상은 모바일 밖의 주제(웹, 백엔드, AI 모델, 일상 AI 서비스)로 씁니다.
- 분류는 `posts.json` 제목·태그와 아래 발행 이력으로 판단하고, 새 글을 올릴 때 이력에 한 줄 추가합니다.
- 규칙을 지키면서 쓸 만한 뉴스가 없으면, 규칙을 깨기보다 그날은 발행하지 않습니다.
- 초안 작성: 후보를 서로 다른 분류에서 3개 이상 찾은 뒤 규칙에 맞는 1개를 고르고, 초안 메타데이터 주석에 `category: <분류> | company: <회사·플랫폼>`을 함께 적습니다.
- 검수: 위 규칙을 어긴 초안은 "게시 불가(주제 규칙 위반)"로 판정합니다. 게시할 때는 아래 발행 이력 맨 아래에 `- #N <분류> / <회사·플랫폼>` 한 줄을 추가해 같은 커밋에 넣습니다.

### 발행 이력 (분류 / 회사·플랫폼)
- #1 AI 에이전트·자동화 / 1Password
- #2 모바일·백엔드 / Google (AI Studio, Firebase App Check)
- #3 개발 도구·AI 코딩 / GitHub
- #4 개발 도구·AI 코딩 / Google (Android Studio)
- #5 백엔드·클라우드 / Google (Firebase App Check)

## 글 추가 방법
1. `news/posts/_template.md`를 `news/posts/<slug>.md`로 복사해서 본문 작성
   - slug는 영문 소문자, 숫자, 하이픈만 사용 (예: `2026-10-27-gemini-update`)
2. `news/posts.json` **맨 위**에 항목 추가
   ```json
   {
     "slug": "2026-10-27-gemini-update",
     "title": "[AI소식지 #1] 핵심 뉴스 + 한마디 관점",
     "date": "2026-10-27",
     "tags": ["태그"]
   }
   ```
3. 커밋 후 푸시하면 끝 (빌드 과정 없음)

## 구조
- `index.html`: 글 목록 (`posts.json`을 읽어 표시)
- `post.html?slug=...`: 글 상세 (`posts/<slug>.md`를 읽어 렌더링)
- 이미지는 `assets/news/`에 넣고 본문에서 `../assets/news/파일명`으로 참조

## 방문자 카운터
- `js/visit-counter.js`가 Firestore `stats/total`, `stats/daily_YYYY-MM-DD`의 `count`를 +1 하고 푸터에 표시
- 같은 브라우저는 하루 1회만 카운트 (한국 시간 기준)
- 보안 규칙 원본은 레포 루트 `firestore.rules` (수정 시 Firebase 콘솔에도 다시 게시)

## 참고
- 로컬 확인은 `python3 -m http.server` 후 `/news/` 접속 (파일 직접 열기는 fetch가 막힘)
- 본문은 JS로 렌더링되므로 검색 노출이 중요해지면 빌드 단계(GitHub Actions) 추가 검토
