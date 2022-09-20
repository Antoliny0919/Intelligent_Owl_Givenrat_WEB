import React, { Component } from 'react';
import '../css/MainContentDeco.css';

export default class MainIntroduce extends Component {
    render() {
        return (
            <div className='area __IntroduceBlock'>
                <a className='wrap' href={this.props.startRoot}>
                    <button className='startButton'>🌼 시작하기 🌼</button>
                </a>
                <img src={this.props.imgPath} alt='No-Img'></img>
            </div>
        )
    }
}