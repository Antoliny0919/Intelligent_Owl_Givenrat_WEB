import { Fragment } from "react";
import '../css/SymbolText.css';

export default function SymbolText({ text, imgPath }) {
  return (
    <div className="symbol-text-items">
      <img className="symbol-item"src={imgPath}></img>
      <h1 className="symbol-item">{text}</h1>
    </div>
  )
}