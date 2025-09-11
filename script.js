// 방명록에 새 인삿말 추가하는 함수
function addGreeting() {
  const input = document.getElementById('greetingInput'); 
  // document.getElementById는 js 자체 함수기능으로 원리를 이해하기보단
  // 자체 기능을 가져와서 쓰는 것이기 때문에 작동 방식만 이해하면 된다.

  // 작동방식: 입력값에서 ID가 greetingInput으로 되어 있는 값을 찾는다

  // guestbook.html에서 입력값의 ID를 greetingInput으로 정했기에 
  // 이를통해 입력값을 찾아 input이라는 변수에 저장할 수 있다

  const message = input.value.trim();
  // trim == 다듬다
  // 앞 뒤의 여백을 제거해서 message라는 변수에 최종 입력값을 저장한다

  if (message === '') {
    // 만약 메시지를 입력하지 않고 버튼을 눌렀다면

    alert('메시지를 입력해주세요!');
    // alert == 알림
    // 경고문을 띄운다

    return;
    // return == 돌아가다
    // 문제가 생겼을시 즉시 처음으로 돌아간다
    // return이 실행될 경우 밑의 코드들은 실행되지 않는다
  }
  // 참고) js에서 = 사용
  // a = b는 b의 값을 a로 바꾼다는 뜻이다. 즉, a가 3 b가 5였으면 a,b 둘 다 5로 바뀜
  // a == b는 a와 b의 값만 비교하는 것이다. a가 5, b가 문자열로 쓴 '5'여도 자동으로 같은 값으로 판정한다
  // a === b는 엄격한 비교로, 값과 타입이 모두 일치해야 a와 b가 일치한다고 판정한다


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
  // 입력한 인삿말 값이 들어올 li라는 가상의 공간을 만든다

  li.textContent = message;
  // 위에서 방금 지정한 li라는 가상의 공간에서 우리가 받은 입력값, message라는 변수를 문자열로 저장한다
  // 아직까지는 가상의 공간에 저장했기 때문에 홈페이지를 사용하는 유저의 눈에는 보이지 않는다.

  list.appendChild(li);
  // append == 이어붙이다, Child == 자식
  // li에 저장된 값을 위에서 document.getElementById('greetingList');로 저장한 위치에 하위 요소로 이어붙인다

  // 이때부터 유저가 저장한 메시지가 방명록 저장위치에 저장되어 유저의 눈으로 볼 수 있게 된다
  
  input.value = '';
  // 입력된 값을 빈칸으로 초기화 시켜서 다음 값을 받을 수 있게 비워둔다
}
