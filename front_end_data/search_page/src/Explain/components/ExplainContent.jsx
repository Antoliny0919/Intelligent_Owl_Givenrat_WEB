import '../css/ExplainContent.css';

export default function ExplainContent () {
  
  return (
    <div id="explain-content-block">
        <p className='dividing-line'>🌕 사용법 🌕</p>
        <p className='dividing-line'>공산품 검색 입력창에 원하는 공산품의 키워드를 입력하면 됩니다.</p>
        <p className='dividing-line'>하지만 입력하기 전에 약간의 형식을 지켜주셔야 합니다!</p>
        <div id="guideline-rule">
          <p>🔥 형식(규칙) 🔥</p>
          <p>첫번째 입력칸에는 '가격'을 입력해주세요!</p>
          <p>두번째 입력칸에는 '품명'을 입력해주세요!</p>
          <p>세네번째 입력칸에는 해당 공산품의 '속성'을 입력해주면 됩니다</p>
          <p>꼭 모든 입력칸을 다 채울필요는 없습니다.</p>
          <p>마음에 드는 입력칸을 채운다음 입력버튼을 클릭해주세요!</p>
        </div>

    </div>
  )
}