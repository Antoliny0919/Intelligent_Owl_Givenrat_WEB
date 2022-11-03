import { Fragment, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { state } from '../../Atom';

import InputKeyWordArea from './InputKeyWordArea';
import MemberInfoInputArea from './MemberInfoInputArea';
import DuplicationCheckArea from './DuplicationCheckArea';
import '../css/FormBlock.css';

export default function FormBlock() {

  const inputData = useRecoilValue(state)

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  const openAddressPage = (e) => {
    e.preventDefault();
    const script = document.createElement('script');
    script.src = "http://localhost:3000/AddressPage.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }

  // http://localhost:3000/AddressPage.js


  return (
    <Fragment>
      <div className='form-block-container'>
        {inputData.form_section.map(({ keyWord, placeholder, inputType, Duplication, attentionBlock }) => {
            return (
              <div className='member-data-input-area'>
                <InputKeyWordArea keyWord={keyWord} attentionBlock={attentionBlock}></InputKeyWordArea>
                <MemberInfoInputArea placeholder={placeholder} inputType={inputType}></MemberInfoInputArea>
                {Duplication && <DuplicationCheckArea></DuplicationCheckArea>}
              </div>
              )
          })}
      </div>
      <button onClick={openAddressPage}></button>
    </Fragment>
  )
}