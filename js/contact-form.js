// 문의 폼 전송 (Web3Forms가 받아서 Gmail로 전달, 사이트는 서버가 없어 직접 메일 발송 불가)
const form = document.getElementById('contact-form');

if (form) {
  const statusEl = form.querySelector('.cf-status');
  const submitBtn = form.querySelector('button[type="submit"]');

  // 키가 비어 있으면 폼을 숨긴 채로 둔다 (키 없이 배포돼도 깨진 폼이 보이지 않게)
  const accessKey = form.querySelector('input[name="access_key"]').value.trim();
  if (accessKey) form.hidden = false;

  // 결과 메시지 표시 (성공/실패에 따라 색만 바꿈)
  const showStatus = (text, ok) => {
    statusEl.textContent = text;
    statusEl.dataset.state = ok ? 'ok' : 'error';
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // 스팸 봇 차단: 사람에게 안 보이는 칸이 채워져 있으면 전송하지 않음
    if (form.querySelector('input[name="botcheck"]').checked) return;

    submitBtn.disabled = true;
    showStatus('보내는 중…', true);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        form.reset();
        showStatus('문의가 전송됐어요. 적어주신 이메일로 답변드릴게요.', true);
      } else {
        showStatus('전송에 실패했어요. 잠시 후 다시 시도하거나 위 이메일로 보내주세요.', false);
      }
    } catch {
      // 네트워크 오류 등
      showStatus('전송에 실패했어요. 잠시 후 다시 시도하거나 위 이메일로 보내주세요.', false);
    } finally {
      submitBtn.disabled = false;
    }
  });
}
