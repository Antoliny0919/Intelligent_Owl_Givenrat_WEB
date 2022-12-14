import React from "react";
import '../css/NavbarMini.css';

export default function NavbarMini({ combineContentImgPath }) {
    return (
        <a className='combineContent hide' href='#!'>
            <img className='hide-bar' src={combineContentImgPath} alt="no"></img>
        </a>

    )
}
