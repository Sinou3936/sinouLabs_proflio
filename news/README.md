# AI소식지 운영 가이드

## 발행 규칙
- 매주 월 · 수 · 금, 한 편에 뉴스 1개 + 느낀 점 (요약 없음)
- 분량 600~900자, 존댓말
- 제목: `[AI소식지 #회차] 핵심 뉴스 + 한마디 관점`
  - 예: `[AI소식지 #1] 구글 새 모델 출시, 앱 개발자가 반가운 이유`
- 본문 구조: 이번 주 핵심 뉴스 → 왜 눈여겨봤나 → 시노우랩스가 느낀 점 → 출처
- 느낀 점에서 시노우랩스 제품을 언급할 때 약봄에만 치우치지 말고, 뉴스와 맞는 제품(약봄, 하비허브 등)을 골라 연결

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
