import '../css/FormImgArea.css';

export default function FormImgArea({ symbolImgPath }) {
  return (
    <div id="form-symbol-img-area">
      <img src={symbolImgPath} id="symbol-img-search"></img>
    </div>
  )
}