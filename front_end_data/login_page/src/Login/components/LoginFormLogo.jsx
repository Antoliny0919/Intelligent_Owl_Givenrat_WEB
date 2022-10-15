import '../css/LoginFormLogo.css'

export default function LoginFormLogo({ loginLogoImg }) {

  
  return (
    <div id="login-logo">
      <img src={loginLogoImg} width='230' height='70'></img>
      <div id="join-membership-area">
        <p className="join-membership-text">회원이 아니신가요?</p>
        <a className="join-membership-link" href='#'>회원가입 하기</a>
      </div>
    </div>
  )
}
