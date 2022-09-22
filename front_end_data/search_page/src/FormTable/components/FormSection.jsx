import '../css/FormSection.css'

export default function FormSection({ inputText }) {

  return (
    <div className="inputspace-block">
      <span className="item-attribution-name">{inputText}</span>
      <input className="item-attribution-inputspace"></input>
    </div> 
  )
}