import React, {Component} from 'react';
import '../css/NavbarLogin.css'

export default class NavbarLogin extends Component {
    render() {
        return(
            <a className='NavBar __login'href={this.props.login.link}>{this.props.login.title}</a>
        )
    }
    
}

