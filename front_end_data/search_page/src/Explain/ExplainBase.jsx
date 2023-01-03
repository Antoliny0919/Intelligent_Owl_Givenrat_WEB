import SymbolArea from './components/SymbolArea';
import ExplainBlock from './components/ExplainBlock';
import './css/ExplainBase.css';

export default function ExplainBase() {

  const state = {
    logoImgPath: require('./img/logo.png'),

    explainData: [
      [
        {
          id: 1,
          title: "키워드 찾기",
          explainImg: require('./img/step1_explain.png'),
          explainText: [
            "구매예정량 통계표에서 각 물품에 대한 키워드를 찾아주세요!",
            "(※ 품명이나 속성같은 경우에는 전체 데이터보단 일부 데이터를 찾아주세요.)",
            "Ex. 가쓰오우동장국(병) --> 품명: 가쓰오 or 품명: 우동장국",
            "(※ 가격은 위 그림 예시와 같이 개당단가를 찾아주세요.)"
          ],
          textStyle: "explain-text step1-text",
          imgStyle: "explain-img step1",
        }
      ],
      [
        {
          id: 2,
          title: "검색하기",
          explainImg: require('./img/step2_explain.gif'),
          explainText: [
            "찾은 키워드를 검색 입력 폼에 입력한 뒤 검색 버튼을 눌러주세요!",
            "(※ 가격은 ','없이 입력해주세요!)",
            "(※ 꼭 모든 입력칸을 채워야하는건 아닙니다.)",
          ],
          textStyle: "explain-text step2-text",
          imgStyle: "explain-img step2",
        }
      ],
      [
        {
          id: 3,
          title: "확인하기",
          explainImg: require('./img/step3_explain.png'),
          explainText: [
            "하단 공산품 목록에 입력하신 키워드가 모두 포함된 공산품이 나열됩니다!",
            "(※ 여러 데이터가 나열된다면 사용자가 발주하고자 하는 공산품과 일치하는 공산품을 선택하면 됩니다.)"
          ],
          textStyle: "explain-text step3-text",
          imgStyle: "explain-img step3",
        }
      ]
    ]
  }
  
  return (
    <div id="explain-area-container">
      <div id="explain-area-margin">
        <SymbolArea logoImgPath={state.logoImgPath}></SymbolArea>
        <div className="divide-line"></div>
        {state.explainData.map((item) => {
          return item.map(({id, title, explainImg, explainText, textStyle, imgStyle}) => {
            return <ExplainBlock
            id={id} 
            title={title} 
            explainImg={explainImg} 
            explainText={explainText} 
            textStyle={textStyle}
            imgStyle={imgStyle}>
            </ExplainBlock>
          })
        })}
        <div className="divide-line plus"></div>
      </div>
    </div>
  )
}