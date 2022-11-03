import '../css/MemberInfoInputArea.css';

export default function InputBlock({ placeholder, inputType, openAddressPage }) {
  
  return (
    <div className="input-container">
      {placeholder ? 
      <input className="input-area"type={inputType} placeholder={placeholder} autoComplete="on"></input> 
      : <button id="address-page" type={inputType} onClick={openAddressPage}>⚲ 주소 검색</button>}
    </div>
  )
}