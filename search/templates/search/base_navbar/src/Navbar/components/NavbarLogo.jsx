import React, {Component} from 'react';
import NavbarMini from './NavbarMini';
import '../css/NavbarLogo.css';
import { Fragment } from 'react';


export default class NavbarLogo extends Component {
    
    render() {
        return (
            <Fragment>
                <NavbarMini combineContentImgPath={this.props.combineContentImgPath}></NavbarMini>
                <a className='navBar __logoBox' href={this.props.link}>
                    <img 
                    className='navbar __logoImg'
                    src={this.props.imgPath}
                    >
                    </img>
                </a>
            </Fragment>

        );
    }
}

