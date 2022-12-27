import '../css/SymbolArea.css';

export default function SymbolArea({ logoImgPath }) {
  return (
    <div id="symbol-area-container">
      <img src={logoImgPath} id="symbol-img"></img>
      <span id="symbol-text">공산품 검색</span>
    </div>
  )
}