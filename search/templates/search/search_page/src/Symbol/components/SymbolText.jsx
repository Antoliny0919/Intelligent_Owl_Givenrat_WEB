import { Fragment } from "react";
import '../css/SymbolText.css';

export default function SymbolText({ text, imgPath }) {
  return (
    <div class="symbol-text-items">
      <img class="symbol-item"src={imgPath}></img>
      <h1 class="symbol-item">{text}</h1>
    </div>
  )
}