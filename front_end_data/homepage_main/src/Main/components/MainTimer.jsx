import React, { Component } from 'react';
import '../css/MainTimer.css';

export default class MainTimer extends Component {
    render() {
        return (
            <div className='timeFlexBlock'>
                <h1>
                    {this.props.time}
                </h1>
            </div>
        )
    }
}