import React from 'react';
import NavbarMini from './NavbarMini';
import '../css/NavbarLogo.css';
import { Fragment } from 'react';

export default function NavbarLogo({ imgPath, link, combineContentImgPath}) {
    return (
        <Fragment>
            <NavbarMini combineContentImgPath={combineContentImgPath}></NavbarMini>
            <a className='navBar __logoBox' href={link}>
                <img 
                className='navbar __logoImg'
                src={imgPath}
                >
                </img>
            </a>
        </Fragment>
    )
}




