import React, { Component } from "react";
import '../css/NavbarMini.css';

export default class NavbarMini extends Component {
    render() {
        return(
            <a className='combineContent hide' href='#'>
                <img className='hide-bar' src={this.props.combineContentImgPath}></img>
            </a>


        )
    }
}