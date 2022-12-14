import React from 'react';
import '../css/NavbarContent.css';

export default function NavbarContent({ content }) {

    return (
        <ul className='navBar __contentBlock'>
                {content.map(({ id, title, link}) => {
                    return <a
                    className='navBar __content'
                    key={id}
                    href={link}
                    >
                    {title}
                    </a>
            }
            )}
        </ul>

    )
}

