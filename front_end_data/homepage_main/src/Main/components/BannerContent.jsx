import '../css/BannerContent.css';

export default function BannerContent({ BannerImg }) {

  return (
    <div id='banner-content-area'>
      <img src={BannerImg} alt="no_img" id="banner-img"></img>
      <h1 id="banner-text">기벤라트는 당신의 업무를 효율적으로 해결해줍니다.</h1>
      <button id="banner-start-button">시작하기</button>
    </div>
  )
}