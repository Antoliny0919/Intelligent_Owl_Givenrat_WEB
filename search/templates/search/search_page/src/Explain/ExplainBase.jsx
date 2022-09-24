import { useState } from 'react';
import ExplainMainImg from './components/ExplainMainContent';
import './css/ExplainBase.css';

export default function ExplainBase() {

  // 공산품 검색 가이드 라인 버튼 텍스트, 클래스
  const state = {
    open_guideline_text: '공산품 검색 가이드라인 열기🌼',
    close_guideline_text: '공산품 검색 가이드라인 닫기🌼',

    open_guideline_class: 'open-guideline-button',
    close_guideline_class: 'close-guideline-button',

  // 설명 파트에 나올 이미지
    explain_main_img_path: require('./img/search_main_img.png')
  }

  // 가이드 라인 설명 열고 닫기위한 불리언값
  const [readMore, setReadMore] = useState(true);

  // 공산품 검색 가이드 라인 버튼 style 변화
  const [buttonClass, setButtonClass] = useState(state.close_guideline_class);

  // 공산품 검색 가이드 라인 버튼 클릭에 대한 텍스트 변경
  const [buttonText, setButtonText] = useState(state.close_guideline_text);

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
    <div id="explain-area">
      <div id="explain-block">
        <ExplainMainImg 
        img_path={state.explain_main_img_path}
        guideline_button_text={buttonText}
        guideline_button_style={buttonClass}
        read_more_func={changeReadMore}
        readMore={readMore}
        >
        </ExplainMainImg>
      </div>
    </div>
  )
}