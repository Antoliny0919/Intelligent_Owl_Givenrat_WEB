import LoginFormArea from './components/LoginFormArea';
import './css/LoginBase.css';


export default function LoginBase() {

  const state = {
    loginLogoImg: require('./img/givenrat_logo.png'),
  }

  
  return (
    <div id="login-page-layout-container">
      <div id="sizing-block">
        <LoginFormArea loginLogoImg={state.loginLogoImg}></LoginFormArea>
      </div>
    </div>
  )
}