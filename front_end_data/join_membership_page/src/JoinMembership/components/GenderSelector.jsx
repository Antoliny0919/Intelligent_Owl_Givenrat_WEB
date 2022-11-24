import '../css/GenderSelector.css';


export default function GenderSelector({ keyWord }) {
  return (
    <label className="gender-selector-button-area">
      <input type="radio" name="contact" checked></input>
      <span className="gender-selector-keyword">{keyWord}</span>
    </label>
  )
}