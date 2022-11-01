import JoinMembershipLogo from './components/JoinMembershipLogo';
import JoinMembershipFormArea from './components/JoinMembershipFormArea';
import './css/JoinMembershipBase.css';

export default function JoinMembershipBase() {
  
  const state =
    {
      logo_img_path: require('./img/givenratOwl.png')
    }
  


  return (
    <div id="join-membership-page-layout-container">
      <div id="sizing-block">
        <div id="join-membership-content-area">
          <JoinMembershipLogo img_path={state.logo_img_path}></JoinMembershipLogo>
          <JoinMembershipFormArea></JoinMembershipFormArea>
        </div>
      </div>
    </div>
  )
}