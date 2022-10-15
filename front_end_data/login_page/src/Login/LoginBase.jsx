import LoginFormArea from './components/LoginFormArea';
import './css/LoginBase.css';


export default function LoginBase() {

  const state = {
    loginLogoImg: require('./img/givenrat_logo.png'),
    inputText: [
      [
        {
          titleName: '아이디',
          placeholderName: '아이디를 입력해주세요.',
        }
      ],
      [
        {
          titleName: '비밀번호',
          placeholderName: '비밀번호를 입력해주세요.',
        }
      ],
    ]

  }

  
  return (
    <div id="login-page-layout-container">
      <div id="sizing-block">
        <LoginFormArea
        loginLogoImg={state.loginLogoImg}
        inputText={state.inputText}
        ></LoginFormArea>
      </div>
    </div>
  )
}