// 방문자 카운터 (Today / Total)
// 사용법: 페이지에 <span data-visit-counter></span> 두고 이 모듈을 type="module"로 로드
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getFirestore, doc, getDoc, writeBatch, increment } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const STORAGE_KEY = "sinoulabs_last_visit";

// 한국 시간 기준 날짜 (UTC 기준이면 오전 9시에 날짜가 바뀜)
function todayKST() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Seoul" }).format(new Date());
}

// localStorage는 사생활 보호 모드 등에서 막힐 수 있어 try/catch
function readLastVisit() {
  try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
}
function saveLastVisit(date) {
  try { localStorage.setItem(STORAGE_KEY, date); } catch (e) { /* 저장 실패 시 무시 */ }
}

async function run() {
  const targets = document.querySelectorAll("[data-visit-counter]");
  const db = getFirestore(initializeApp(firebaseConfig));
  const date = todayKST();
  const totalRef = doc(db, "stats", "total");
  const dailyRef = doc(db, "stats", "daily_" + date);

  // 같은 브라우저는 하루 1회만 카운트
  if (readLastVisit() !== date) {
    const batch = writeBatch(db);
    // merge + increment: 문서가 없으면 1로 생성, 있으면 +1 (보안 규칙과 일치)
    batch.set(totalRef, { count: increment(1) }, { merge: true });
    batch.set(dailyRef, { count: increment(1) }, { merge: true });
    await batch.commit();
    saveLastVisit(date);
  }

  if (!targets.length) return;
  const [total, daily] = await Promise.all([getDoc(totalRef), getDoc(dailyRef)]);
  const fmt = (snap) => (snap.exists() ? snap.data().count : 0).toLocaleString("ko-KR");
  const text = "Today " + fmt(daily) + " · Total " + fmt(total);
  targets.forEach((el) => { el.textContent = text; });
}

// 카운터 실패가 페이지에 영향 주지 않도록 조용히 처리
run().catch((err) => console.warn("[visit-counter]", err));
