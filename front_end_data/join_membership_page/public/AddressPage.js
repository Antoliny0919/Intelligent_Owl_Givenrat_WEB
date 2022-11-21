
new daum.Postcode({
  oncomplete: function(data) {

  var roadAddr = data.roadAddress;
  
  var extraRoadAddr = false; // 참고 항목 변수

  // 법정동명이 있을 경우 추가한다. (법정리는 제외)
  // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
  if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
      extraRoadAddr += data.bname;
  }
  // 건물명이 있고, 공동주택일 경우 추가한다.
  if(data.buildingName !== '' && data.apartment === 'Y'){
      extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
  }
  // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
  if(extraRoadAddr !== ''){
      extraRoadAddr = ' (' + extraRoadAddr + ')';
  }

  if (roadAddr) {
      try {

        // 처음 roadAddr 성공시 기존 주소 입력칸의 어트리뷰트를 변경
        // 해당 입력칸이 읽기모드가 되어 주소검색 기능을 해제 + 해당 버튼에 주소값이 채워짐(roadAddr)
        var buttonTag = document.getElementById("address-page");
        buttonTag.readOnly = true;
        buttonTag.id = "address-in";

        // 처음 roadAddr 성공시 숨겨둔 재검색 버튼이 등장
        const againButton = document.getElementById("again-button-hide");
        againButton.removeAttribute('id');
        againButton.className = "check-button again-button";

        // 처음 roadAddr 성공시 숨겨둔 상세주소 input 공간이 등장
        // 해당 상세주소공간에 우편번호가 입력됨
        const detailAddressArea = document.getElementById("detail-hide");
        var detailAddressInput = document.getElementById('detail-address');

        detailAddressArea.removeAttribute('id');


      } catch {
        // 처음 roadAddr 성공시 id값을 변환했기 때문에 다른 id값으로 접근
        var buttonTag = document.getElementById("address-in");
        var detailAddressInput = document.getElementById('detail-address');
      } finally {
        buttonTag.value = roadAddr;
        detailAddressInput.value = '(' + data.zonecode + ')';
      }

  }

  }
}).open();
