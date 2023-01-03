import '../css/ExplainBlock.css';

export default function ExplainBlock({ id, title, explainImg, explainText, style }) {
  return (
    <div className="explain-block-container">
      <div className="explain-step-block">
        <span className="explain-step-area step">STEP {id}</span>
        <span className="explain-step-area divide"> | </span>
        <span className="explain-step-area">{title}</span>
      </div>
      <img src={explainImg} className="explain-img"></img>
      <span className={style}>
        {explainText.map((item) => {
          return <p>{item}</p>
        })}
      </span>
    </div>

  )
}