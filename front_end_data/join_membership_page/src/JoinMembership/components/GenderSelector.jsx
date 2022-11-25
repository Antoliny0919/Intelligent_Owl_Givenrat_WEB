import React, { useState } from 'react';
import '../css/GenderSelector.css';


export default function GenderSelector({ keyWord }) {

  const changeStyle = (e) => {
    console.log(e);
  }


  return (
    <label className="gender-selector-button-area">
      <input type="radio" name="contact" defaultChecked onClick={changeStyle}></input>
      <span className="gender-selector-keyword">{keyWord}</span>
    </label>
  )
}