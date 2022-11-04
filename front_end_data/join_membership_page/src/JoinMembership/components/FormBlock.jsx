import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { state } from '../../Atom';

import InputKeyWordArea from './InputKeyWordArea';
import MemberInfoInputArea from './MemberInfoInputArea';
import DuplicationCheckArea from './DuplicationCheckArea';
import '../css/FormBlock.css';

export default function FormBlock() {

  const inputData = useRecoilValue(state)

  const openAddressPage = (e) => {
    e.preventDefault();
    if (e.target.id === 'address-page')
    {
      const script = document.createElement('script');
      script.src = "http://localhost:3000/AddressPage.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      return;
    }

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
                ></MemberInfoInputArea>
                {Duplication && <DuplicationCheckArea></DuplicationCheckArea>}

              </div>
              )
          })}

      </div>
  )
}