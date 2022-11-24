import { useRecoilValue } from 'recoil';
import { againSearch, state } from '../../Atom';

import InputKeyWordArea from './InputKeyWordArea';
import '../css/DetailAddressInputArea.css';
import { Fragment } from 'react';


export default function DetailAddressInputArea() {

  const inputState = useRecoilValue(againSearch);
  const inputData = useRecoilValue(state)
  const compress = inputData.detail_address_form_section;

  return(
    // inputState 주소검색기능을 성공적으로 완료했을시 true 변환(상세주소 입력칸이 나타나게 됨)
    inputState ? 
    <div id='detail-hide' className='member-data-input-area'>
      <InputKeyWordArea keyWord={compress.keyWord} attentionBlock={compress.attentionBlock}></InputKeyWordArea>
      <div className='input-container'>
        <input className="input-area" id='detail-address' type={compress.inputType} autoComplete="on"></input> 
      </div>
    </div> 
    : <Fragment></Fragment>

  )
}