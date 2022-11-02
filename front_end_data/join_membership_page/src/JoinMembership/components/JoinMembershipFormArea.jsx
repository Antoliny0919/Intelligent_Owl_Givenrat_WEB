import FormBlock from './FormBlock';
import '../css/JoinMembershipFormArea.css';

export default function JoinMembershipFormArea() {
  return (
    <div id='join-membership-form-area'>
      <h1 id='join-membership-text'>회원가입</h1>
      <div id='input-attention'>
        필수입력사항
        <span className='attention-marker'>*</span>
      </div>
      <div className='divide-line'></div>
      <form>
        <FormBlock></FormBlock>
      </form>
    </div>
  )
}