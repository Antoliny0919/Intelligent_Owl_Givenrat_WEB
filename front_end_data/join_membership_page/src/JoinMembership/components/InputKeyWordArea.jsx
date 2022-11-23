import '../css/InputKeyWordArea.css';

export default function InputKeyWordArea({ keyWord, attentionBlock}) {
  return (
    <div className="keyword-area">
      <span className="input-key-word">{keyWord}</span>
      {/* 필수 입력사항에 대한 표시 --> attentionBlock */}
      {attentionBlock && <span className='attention-marker'>*</span>}
    </div>
  )
}