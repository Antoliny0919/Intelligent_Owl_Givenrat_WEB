import SymbolArea from './components/SymbolArea';
import ExplainBlock from './components/ExplainBlock';
import './css/ExplainBase.css';

export default function ExplainBase() {

  const state = {
    logoImgPath: require('./img/logo.png')
  }
  
  return (
    <div id="explain-area-container">
      <div id="explain-area-margin">
        <SymbolArea logoImgPath={state.logoImgPath}></SymbolArea>
        <ExplainBlock></ExplainBlock>
      </div>
    </div>
  )
}