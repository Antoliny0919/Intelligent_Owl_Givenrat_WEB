import BannerContent from './components/BannerContent';
import './css/BannerBase.css';


export default function MainBase() {
    const state = {
        // Main이미지 500px * 500px(1:1)
        BannerImg: {imgPath: require('./Img/givenrat_logo.png')},

        // 시작하기! 버튼의 경로
        startRoot: {Path: '#'}
    }

    return (
        <div id="banner">
            <div id='banner-layout-container'>
                <div id='banner-layout-side-margin'>
                    <BannerContent BannerImg={state.BannerImg.imgPath}></BannerContent>
                </div>
            </div>
        </div>

    )
}
