import '../css/MemberInfoInputArea.css';


export default function InputBlock({ placeholder, inputType, openAddressPage, addressInputComplete}) {
  

  return (
    <div className="input-container">
      {placeholder ?
      <input className="input-area"type={inputType} placeholder={placeholder} autoComplete="on"></input> 
      :<input id="address-page"
      type={inputType} 
      onClick={openAddressPage} 
      onChange={addressInputComplete}
      value="⚲ 주소 검색"></input>}
    </div>
  )
}