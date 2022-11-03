import '../css/MemberInfoInputArea.css';

export default function InputBlock({ placeholder, inputType }) {
  
  return (
    <div className="input-container">
      <input className="input-area"type={inputType} placeholder={placeholder} autoComplete="on"></input>
    </div>
  )
}