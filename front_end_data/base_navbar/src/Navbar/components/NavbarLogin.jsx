import React from 'react';
import '../css/NavbarLogin.css'

export default function NavbarLogin({ login }) {
    return (
        <a className='NavBar __login'href={login.link}>{login.title}</a>
    )
}


