import React, { Component } from 'react';
import '../css/MainImg.css'

export default class MainImg extends Component {
    render() {
        return (
            <div className='main __ImgBlock __notebook'>
                <img src={this.props.imgPath}></img>
            </div>
        )
    }
}