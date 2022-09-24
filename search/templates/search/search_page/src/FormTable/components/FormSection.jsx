import '../css/FormSection.css'

export default function FormSection({ inputText, inputStyle }) {

  return (
    <div className={inputStyle}>
      <span className="item-attribution-name">{inputText}</span>
      <input className="item-attribution-inputspace" id="change-size"></input>
    </div> 
  )
}