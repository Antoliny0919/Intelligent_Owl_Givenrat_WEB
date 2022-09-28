import '../css/FormSection.css'

export default function FormSection({ inputText, inputStyle, queryName }) {

  return (
    <div className={inputStyle}>
      <span className="item-attribution-name">{inputText}</span>
      <input name={queryName} className="item-attribution-inputspace" id="change-size"></input>
    </div> 
  )
}