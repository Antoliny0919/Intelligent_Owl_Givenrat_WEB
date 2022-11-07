import { Fragment } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { state, againSearch } from '../../Atom';

import InputKeyWordArea from './InputKeyWordArea';
import MemberInfoInputArea from './MemberInfoInputArea';
import DuplicationCheckArea from './DuplicationCheckArea';
import '../css/FormBlock.css';

export default function FormBlock() {

  const inputData = useRecoilValue(state);
  const [againButton, setAgainButton] = useRecoilState(againSearch);


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

  const addressInputComplete = (e) => {
    console.log(e);
  }


  return (
      <div className='form-block-container'>
        {inputData.form_section.map(({ keyWord, placeholder, inputType, Duplication, attentionBlock }) => {
            return (
              <div className='member-data-input-area'>
                <InputKeyWordArea keyWord={keyWord} attentionBlock={attentionBlock}></InputKeyWordArea>
                <MemberInfoInputArea 
                placeholder={placeholder} 
                inputType={inputType}
                openAddressPage={openAddressPage}
                addressInputComplete={addressInputComplete}
                ></MemberInfoInputArea>
                {Duplication && <DuplicationCheckArea></DuplicationCheckArea>}
                {keyWord === '주소' ? againButton && <div className='duplication-check-area'><button id='again-button-hide' onClick={openAddressPage} type='button'>⚲ 주소 재검색</button></div> : <Fragment></Fragment>}

              </div>
              )
          })}

      </div>
  )
}