import '../css/MemberInfoInputArea.css';


export default function InputBlock({ placeholder, inputType, openAddressPage }) {
  

  return (
    <div className="input-container">
      {/* placeholder가 존재하지 x --> 주소입력 버튼같은 경우 다른 형식의 input을 사용 */}
      {placeholder ?
      <input className="input-area"type={inputType} placeholder={placeholder} autoComplete="on"></input> 
      :<input id="address-page"
      type={inputType} 
      onClick={openAddressPage} 
      value="⚲ 주소 검색"></input>}
    </div>
  )
}