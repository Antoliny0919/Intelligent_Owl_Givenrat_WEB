import { Fragment } from "react";
import '../css/AccountInputArea.css';

export default function AccountInputArea({ titleName, placeholderName, inputType}) {
  
  return (
    <Fragment>
      <div className="input-area">
        <p className="title-area">{titleName}</p>
        <input
        type={inputType}
        autoComplete="all" 
        placeholder={placeholderName}
        className="id-area"
        >
        </input>
      </div>
    </Fragment>
  )
}