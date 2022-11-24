import { Fragment } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { state, againSearch } from '../../Atom';

import InputKeyWordArea from './InputKeyWordArea';
import MemberInfoInputArea from './MemberInfoInputArea';
import DuplicationCheckArea from './DuplicationCheckArea';
import DetailAddressInputArea from './DetailAddressInputArea';
import MemberGenderSelector from './MemberGenderSelector';
import BirthDateInputArea from './BirthDateInputArea';
import '../css/FormBlock.css';

export default function FormBlock() {

  const inputData = useRecoilValue(state);
  const [againButton, setAgainButton] = useRecoilState(againSearch);


  // 동적으로 script태그 추가 --> 해당 스크립트태그에 src속성값에 있는 해당 자바스크립트 코드를 실행(카카오 주소검색기능)
  const openAddressPage = (e) => {

    if (e.target.id === 'address-page' || e.target.className === 'check-button again-button')
    {
      const script = document.createElement('script');
      script.src = "http://localhost:3000/AddressPage.js";
      script.async = true;
      document.body.appendChild(script);
      setAgainButton(true);

      
    } else {
      return;
    }

  }



  return (
      <div className='form-block-container'>
        {inputData.form_section.map(({ keyWord, placeholder, inputType, Duplication, attentionBlock, id}) => {
            return (
              <div className='member-data-input-area' key={id}>
                {/* InputKeyWord --> 해당 인풋태그의 키워드 */}
                <InputKeyWordArea keyWord={keyWord} attentionBlock={attentionBlock}></InputKeyWordArea>
                {/* 실질적인 인풋태그가 들어갈 위치 필요한 속성  */}
                <MemberInfoInputArea 
                placeholder={placeholder} 
                inputType={inputType}
                openAddressPage={openAddressPage}
                ></MemberInfoInputArea>
                {/* Duplication --> 중복같이 확인이 필요한 영역에 존재하는 확인버튼 */}
                {Duplication && <DuplicationCheckArea></DuplicationCheckArea>}
                {/* 주소입력에만 해당하는 영역 false --> Fragment, true --> againButton이 true가 될시(주소 서칭이 완료되었을때)주소 재검색 버튼 표시 */}
                {keyWord === '주소' ? againButton && <div className='duplication-check-area'><button id='again-button-hide' onClick={openAddressPage} type='button'>⚲ 주소 재검색</button></div> : <Fragment></Fragment>}
              </div>
              )
          })}
        
        <DetailAddressInputArea></DetailAddressInputArea>
        <MemberGenderSelector></MemberGenderSelector>
        <BirthDateInputArea></BirthDateInputArea>
      </div>
  )
}