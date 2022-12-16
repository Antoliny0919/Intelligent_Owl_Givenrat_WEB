import '../css/BannerContent.css';

export default function BannerContent({ BannerImg }) {

  return (
    <div id='banner-content-area'>
      <img src={BannerImg} alt="no_img" id="banner-img"></img>
    </div>
  )
}