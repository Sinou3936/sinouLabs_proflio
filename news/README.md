# AI소식지 글 추가 방법

1. `news/posts/_template.md`를 `news/posts/<slug>.md`로 복사해서 본문 작성
   - slug는 영문 소문자와 하이픈만 사용 (예: `2026-10-27-gpt-news`)
2. `news/posts.json` **맨 위**에 항목 추가
   ```json
   {
     "slug": "2026-10-27-gpt-news",
     "title": "글 제목",
     "date": "2026-10-27",
     "summary": "목록에 보일 한 줄 요약",
     "tags": ["태그"]
   }
   ```
3. 커밋 후 푸시하면 끝 (빌드 과정 없음)

## 구조
- `index.html`: 글 목록 (`posts.json`을 읽어 표시)
- `post.html?slug=...`: 글 상세 (`posts/<slug>.md`를 읽어 렌더링)
- 이미지는 `assets/news/`에 넣고 본문에서 `../assets/news/파일명`으로 참조

## 참고
- 로컬 확인은 `python3 -m http.server` 후 `/news/` 접속 (파일 직접 열기는 fetch가 막힘)
- 본문은 JS로 렌더링되므로 검색 노출이 중요해지면 빌드 단계(GitHub Actions) 추가 검토
