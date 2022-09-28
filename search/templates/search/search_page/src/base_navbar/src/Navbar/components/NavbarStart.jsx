import React, {Component} from 'react';
import '../css/NavbarStart.css';

export default class NavbarStart extends Component {
    render() {
        return (
            <a className='NavBar __start'href={this.props.start.link}>{this.props.start.title}</a>
        )
    }
}

