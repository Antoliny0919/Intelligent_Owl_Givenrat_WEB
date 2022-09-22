import ExplainGuide from './components/ExplainGuide';
import ExplainContent from './components/ExplainContent';
import './css/ExplainBase.css';
import { useState } from 'react';

export default function ExplainBase() {

  // 공산품 검색 가이드 라인 버튼 텍스트, 클래스
  const state = {
    open_guideline_text: '공산품 검색 가이드라인 열기🌼',
    close_guideline_text: '공산품 검색 가이드라인 닫기🌼',

    open_guideline_class: 'open-guideline-button',
    close_guideline_class: 'close-guideline-button',
  }

  // 가이드 라인 설명 열고 닫기위한 불리언값
  const [readMore, setReadMore] = useState(false);

  // 공산품 검색 가이드 라인 버튼 style 변화
  const [buttonClass, setButtonClass] = useState(state.open_guideline_class);

  // 공산품 검색 가이드 라인 버튼 클릭에 대한 텍스트 변경
  const [buttonText, setButtonText] = useState(state.open_guideline_text);

  // 가이드 라인 설명 열고 닫을 수 있게 해주는 함수
  const changeReadMore = () => {
    if (readMore === false) {
      setReadMore(!readMore);
      setButtonText(state.close_guideline_text);
      setButtonClass(state.close_guideline_class);
    }
    else {
      setReadMore(!readMore);
      setButtonText(state.open_guideline_text);
      setButtonClass(state.open_guideline_class);
    }
  }

  
  return (
    <explain id="explain-area">
      <div className='explain-image-block'>
        
      </div>
      {readMore && <ExplainContent></ExplainContent>}

      <ExplainGuide 
      guideline_button_text={buttonText}
      guideline_button_style={buttonClass}
      read_more_func={changeReadMore}
      ></ExplainGuide>
    </explain>
  )
}