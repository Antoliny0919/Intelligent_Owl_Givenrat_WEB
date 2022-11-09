import '../css/InputKeyWordArea.css';

export default function InputKeyWordArea({ keyWord, attentionBlock}) {
  return (
    <div className="keyword-area">
      <label className="input-key-word">{keyWord}</label>
      {attentionBlock && <span className='attention-marker'>*</span>}
    </div>
  )
}