import LoginFormLogo from '../components/LoginFormLogo';
import LoginFormMain from '../components/LoginFormMain';
import '../css/LoginFormArea.css';


export default function LoginFormArea({ loginLogoImg }) {
  return (
    <div id="login-form-area">
      <LoginFormLogo loginLogoImg={loginLogoImg}></LoginFormLogo>
      <LoginFormMain></LoginFormMain>
    </div>
  )
}