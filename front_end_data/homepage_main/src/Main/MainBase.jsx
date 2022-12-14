import MainContent from './components/MainContent';
import './css/MainBase.css';


export default function MainBase() {
    const state = {
        // Main이미지 500px * 500px(1:1)
        mainImg: {imgPath: require('./Img/givenratOwl.png')},

        // Main이미지 옆에 들어갈 subImg 500 * 500(1.5:1)
        subImg: {imgPath: require('./Img/givenratNewBlackboard.png')},

        // 시작하기! 버튼의 경로
        startRoot: {Path: '#'}
    }

    return (
        <main>
            <div className='main'>
                <div className='main __content __notebook'>
                    <MainContent
                    mainImgPath={state.mainImg.imgPath}
                    subImgPath={state.subImg.imgPath}
                    startRoot={state.startRoot.Path}
                    ></MainContent>
                </div>
            </div>
        </main>
    )
}
