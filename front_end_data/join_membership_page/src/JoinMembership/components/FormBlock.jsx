import InputKeyWordArea from './InputKeyWordArea';
import MemberInfoInputArea from './MemberInfoInputArea';
import DuplicationCheckArea from './DuplicationCheckArea';
import '../css/FormBlock.css';

export default function FormBlock() {
  return (
      <div className='form-block-container'>
        <InputKeyWordArea></InputKeyWordArea>
        <MemberInfoInputArea></MemberInfoInputArea>
        <DuplicationCheckArea></DuplicationCheckArea>
      </div>
  )
}