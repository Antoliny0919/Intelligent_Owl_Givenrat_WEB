import { useRecoilValue } from 'recoil';
import { againSearch, state } from '../../Atom';

import '../css/DetailAddressInputArea.css';
import { Fragment } from 'react';


export default function DetailAddressInputArea() {

  const inputState = useRecoilValue(againSearch);
  const inputData = useRecoilValue(state)
  const compress = inputData.detail_address_form_section;

  return(
    // inputState 주소검색기능을 성공적으로 완료했을시 true 변환(상세주소 입력칸이 나타나게 됨)
    <div>
      {inputState ?
      <div className='member-data-input-area detail-hide info-true'>
        <div className='blank-area'></div>
        <div className='input-container'>
          <input className="input-area" id='detail-address' type={compress.inputType} autoComplete="on"></input> 
        </div>
      </div>
      : <Fragment></Fragment>}

      <div className='information-guide-area detail-hide'>
        <div className='blank-area'></div>
        <span className='information-guide'>* 상세주소를 입력해주세요 *</span>
      </div>
    </div>

  )
}