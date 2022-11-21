import { Fragment } from "react";
import '../css/GenderSelector.css';

export default function GenderSelector({ keyWord}) {
  return (
    <Fragment>
      <label className="gender-selector-button-area">
        <input type="radio" name="contact" checked></input>
        <span className="gender-selector-keyword">{keyWord}</span>
      </label>
    </Fragment>
  )
}