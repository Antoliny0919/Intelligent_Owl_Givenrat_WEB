import React, { Component } from "react";
import MainImg from './MainImg';
import MainIntroduce from "./MainContentDeco";


export default class MainContent extends Component {

    render() {

        return(
            <div className='main __contentFlexBlock'>
                <MainImg imgPath={this.props.mainImgPath}></MainImg>
                    <div className='main area subImg'>
                        <MainIntroduce 
                        imgPath={this.props.subImgPath}
                        startRoot={this.props.startRoot}
                        ></MainIntroduce>
                    </div>
            </div>

        )
    }
}