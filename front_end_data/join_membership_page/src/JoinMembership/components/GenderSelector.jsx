import '../css/GenderSelector.css';


export default function GenderSelector({ keyWord }) {

  return (
    <label className="gender-selector-button-area">
      <input type="radio" name="contact" defaultChecked pattern={keyWord}></input>
      <span className="gender-selector-keyword">{keyWord}</span>
    </label>
  )
}