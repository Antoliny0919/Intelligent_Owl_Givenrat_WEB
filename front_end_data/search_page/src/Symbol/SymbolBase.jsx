import { Fragment } from 'react';
import SymbolImage from './components/SymbolImage';
import SymbolText from './components/SymbolText';
import './css/SymbolBase.css';

export default function SymbolBase() {

  const state = {
    symbol_imgpath: require('./Img/version1_MoveImage.gif'),
    symbol_text_imgpath: require('./Img/magnifying_glass.png'),
    symbol_text: '공산품 검색!',
  }

  return (
    <Fragment>
      <main>
        <div id="symbol-image-area">
          <div className="symbol-image-block">
            <SymbolImage imgPath={state.symbol_imgpath}></SymbolImage>
          </div>
        </div>
      </main>
      <maintext id="symbol-text-area">
        <div className="symbol-text-block">
          <SymbolText 
          text={state.symbol_text}
          imgPath={state.symbol_text_imgpath}
          ></SymbolText>
        </div>
      </maintext>
    </Fragment>
  )
}