import React, { Component } from 'react';
import '../css/MainContentDeco.css';

export default class MainIntroduce extends Component {
    render() {
        return (
            <div className='area __IntroduceBlock'>
                <a className='wrap' href={this.props.startRoot}>
                    <button className='startButton'>πΌ μμνκΈ° πΌ</button>
                </a>
                <img src={this.props.imgPath} alt='No-Img'></img>
            </div>
        )
    }
}