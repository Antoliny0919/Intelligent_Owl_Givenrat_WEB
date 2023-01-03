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
            "(※ 품명이나 속성같은 경우에는 전체 데이터보단 일부 데이터를 찾아주세요!)",
            "Ex. 가쓰오우동장국(병) --> 품명: 가쓰오 or 품명: 우동장국",
            "(※ 가격은 위 그림 예시와 같이 개당단가를 찾아주세요!)"
          ],
          style: "explain-text step1",
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
            "(※ 꼭 모든 입력칸을 채워야하는건 아닙니다!)",
          ],
          style: "explain-text step2",
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
          return item.map(({id, title, explainImg, explainText, style}) => {
            return <ExplainBlock id={id} title={title} explainImg={explainImg} explainText={explainText} style={style}></ExplainBlock>
          })
        })}
      </div>
    </div>
  )
}