import React, {Component} from 'react';
import '../css/NavbarContent.css';

export default class NavbarContent extends Component {
    render() {
        const contents = this.props.content.map((element) => {
        return <a 
            className='navBar __content' 
            key={element.id} 
            href={element.link}
            >
            {element.title}
            </a>
        })

        return (
            <ul className='navBar __contentBlock'>
                {contents}
            </ul>
        )
    }
}
