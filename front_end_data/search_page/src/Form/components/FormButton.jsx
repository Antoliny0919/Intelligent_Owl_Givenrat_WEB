import '../css/FormButton.css';


export default function FormButton({id, buttonName, style, method, type}) {
  return (
    <div>
      <input type={type} method={method} className={style} key={id} value={buttonName}></input>
    </div>
  )
}