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
        var buttonTag = document.getElementById("address-page");
        const againButton = document.getElementById("again-button-hide");
        const detailAddressArea = document.getElementById("detail");
        detailAddressArea.value = "("+ data.zonecode + ")"; 
        buttonTag.readOnly = true;
        buttonTag.id = "address-in";
        againButton.removeAttribute('id');
        againButton.className = "check-button again-button";
      } catch {
        var buttonTag = document.getElementById("address-in");
      } finally {
        buttonTag.value = roadAddr;
      }

  }

  }
}).open();