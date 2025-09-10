// 방명록에 새 인삿말 추가하는 함수
function addGreeting() {
  const input = document.getElementById('greetingInput'); 
  // js 자체 함수기능
  // 입력값에서 ID가 greetingInput으로 되어 있는 값을 찾는다
  // guestbook.html에서 입력값의 텍스트 부분의 ID를 
  // greetingInput으로 정했기 때문에 텍스트 값만 input에 저장된다.

  const message = input.value.trim();
  // trim == 다듬다
  // 앞 뒤의 여백을 제거하여 준다.

  if (message === '') {
    // 만약 메시지를 입력하지 않고 버튼을 눌렀다면

    alert('메시지를 입력해주세요!');
    // alert == 알림
    // 경고문을 띄워주는 기능

    return;
    // return == 돌아가다
    // 문제가 생겼을시 즉시 처음으로 돌아간다
    // return이 실행될 경우 밑의 코드들은 실행되지 않는다
  }


  const list = document.getElementById('greetingList');
  // <div class="box">
  //     <h2>방명록 목록</h2>
  //     <ul id="greetingList">
  //       <!-- 인삿말이 여기에 추가됩니다 -->
  //     </ul>
  //   </div>
  
  // guestbook.html에서 해당 부분의 위치, 인삿말이 올 greetingList의 위치를 저장하는 변수

  const li = document.createElement('li');
  // createElement == 새 값을 만들다
  // 입력한 인삿말 값이 들어올 li라는 공간을 만든다
  // 현재는 아무 값이 없기 때문에 안보임

  li.textContent = message;
  // js에서는 새 element를 만들 때 마다
  // textContent를 비롯한 기본적인 요소들이 내포된 채로 생성된다

  // li.textContent는 우리가 방금 생성한 li라는 element의
  // textContent라는 글자부분을 유저가 입력한 메시지로 바꾸는 것이다
  // 이 방식으로 li는 유저가 입력한 메시지를 저장하게 되었지만
  // 아직 어디에 위치할지 정해지지 않았기 때문에 가상의 공간에 존재만 할 뿐
  // 사용하는 유저의 눈에는 보이지 않는 상태이다.

  list.appendChild(li);
  // 이전에 우리가 저장한 인삿말이 올 위치 list
  // 해당 위치에 append == 이어붙이다, Child == 자식
  // li에 저장된 값을 list에 저장된 위치에 하위 요소로 이어붙인다
  // 이때부터 유저가 저장한 메시지가 방명록 저장위치에 저장되게 된다
  
  input.value = '';
  // 입력된 값을 빈칸으로 초기화 시켜서 다음 값을 받을 수 있게 비워둔다
}
