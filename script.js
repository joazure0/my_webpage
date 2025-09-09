// 방명록에 새 인삿말 추가
function addGreeting() {
  const input = document.getElementById('greetingInput');
  const message = input.value.trim();
  if (message === '') {
    alert('메시지를 입력해주세요!');
    return;
  }

  const list = document.getElementById('greetingList');
  const li = document.createElement('li');
  li.textContent = message;
  list.appendChild(li);
  
  input.value = '';
}
