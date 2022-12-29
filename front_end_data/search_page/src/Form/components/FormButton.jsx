import '../css/FormButton.css';


export default function FormButton({id, buttonName, style, method}) {
  return (
    <div>
      <button onClick={method} className={style} key={id}>{buttonName}</button>
    </div>
  )
}