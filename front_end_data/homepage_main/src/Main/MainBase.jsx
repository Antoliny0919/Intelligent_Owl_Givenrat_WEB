import React, {Component} from 'react';
import MainContent from './components/MainContent';
import MainTimer from './components/MainTimer';
import './css/MainBase.css';



class MainBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Main이미지 500px * 500px(1:1)
            mainImg: {imgPath: require('./Img/givenratOwl.png')},
            
            // Main이미지 옆에 들어갈 subImg 500 * 500(1.5:1)
            subImg: {imgPath: require('./Img/givenratNewBlackboard.png')},

            // MainTimer로 전달 (타이머)
            time: new Date(),

            // 시작하기! 버튼의 경로
            startRoot: {Path: '#'}
        }
    }

    tick() {
        this.setState({
            time: new Date(),
        });
    }
    
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    render() {
        return (
            <main>
                <div className='main'>
                    <div className='time'>
                        <MainTimer
                        time={this.state.time.toLocaleTimeString()}>    
                        </MainTimer>
                    </div>
                    <div className='main __content __notebook'>
                        <MainContent
                        mainImgPath={this.state.mainImg.imgPath}
                        subImgPath={this.state.subImg.imgPath}
                        startRoot={this.state.startRoot.Path}
                        ></MainContent>
                    </div>
                </div>
            </main>

        )
    }
}


export default MainBase;