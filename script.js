// 방명록에 새 인삿말 추가하는 함수
function addGreeting() {
  const input = document.getElementById('greetingInput'); 
  // document.getElementById는 js 자체 함수기능이기에 원리를 이해하기보단 작동 방식만 이해하면 된다.

  // 작동방식: html페이지(document)에서 ID가 greetingInput으로 되어 있는 값을 찾는다

  // guestbook.html에서 입력값의 ID를 greetingInput으로 정했기에 
  // 유저가 방명록에 작성한 인삿말 입력값을 찾아 input이라는 변수에 저장할 수 있다

  const message = input.value.trim();
  // trim = 다듬다
  // 앞 뒤의 여백을 제거해서 message라는 변수에 최종 입력값을 저장한다

  if (message === '') {
    // 만약 메시지를 입력하지 않고 버튼을 눌렀다면

    alert('메시지를 입력해주세요!');
    // alert = 경보
    // 경고문을 띄운다

    return;
    // return = 돌아가다
    // 문제가 생겼을시 즉시 코드 진행을 멈추고 처음으로 돌아간다
    // return이 실행될 경우 밑의 코드들은 실행되지 않는다
  }
  // 참고, 몰라도 됨) js에서 = 사용
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
  
  // 이전에 언급한 바와같이 document는 html페이지를 뜻한다
  // 즉, 현재 페이지에서 id가 greetingList인 리스트의 위치를 찾아내서 list라는 변수에 저장할 수 있다


  /*
  우리가 가진 message, 인삿말은 텍스트로만 저장되어있다.
  이 텍스트를 바로 가져다 이어붙이는 것도 가능은 하지만, 복합적인 이유로 보통은 해당 방식을 채택하지는 않는다.
  
  가장 추천되는 방식은 우리가 위에서 저장한 list에서 js 자체 함수를 사용하여 이어붙일 수 있도록
  message의 타입을 단순 텍스트에서 하나의 element로 바꿔주는 것이다.
  */
  
  const li = document.createElement('li');
  // createElement = 새로운 요소를 만들다
  // message를 대입해줄 비어있는 element를 li라는 이름으로 하나 새로 만든다
  

  li.textContent = message;
  // 방금 생성한 li라는 element의 텍스트 부분에 우리가 아까 저장한 인삿말 입력값, message를 삽입한다.
  // 이 방식을 사용할 경우 li는 element의 형태를 유지하면서, 텍스트값만 message로 바뀌었기에 
  // 인삿말 입력값은 보관하면서, element를 대상으로 쓸 수 있는 js 자체 함수들을 사용할 수 있게된다.

  list.appendChild(li);
  // append = 이어붙이다, Child = 자식
  // li라는 element에 저장된 값을 위에서 리스트의 위치를 저장한 list의 밑에 이어붙인다

  // message를 li라는 element로 변환시키지 않았을 경우 appendChild를 바로 사용할 수 없다.

  // 이때부터 유저가 저장한 메시지가 list의 위치, "방명록 목록"이라는 글자 밑에 저장되어 유저의 눈으로 볼 수 있게 된다
  
  input.value = '';
  // 입력된 값을 빈칸으로 초기화 시켜서 다음 값을 받을 수 있게 비워둔다
}
