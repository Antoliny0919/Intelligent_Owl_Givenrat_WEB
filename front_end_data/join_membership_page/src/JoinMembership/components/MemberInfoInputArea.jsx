import { useRecoilValue } from 'recoil';
import { addressInputCheck } from '../../Atom';
import '../css/MemberInfoInputArea.css';


export default function InputBlock({ placeholder, inputType, openAddressPage }) {
  
  const checker = useRecoilValue(addressInputCheck)

  return (
    <div className="input-container">
      {placeholder ? 
      <input className="input-area"type={inputType} placeholder={placeholder} autoComplete="on"></input> 
      : checker && <input id="address-page" type={inputType} onClick={openAddressPage} value="⚲ 주소 검색"></input>}
    </div>
  )
}