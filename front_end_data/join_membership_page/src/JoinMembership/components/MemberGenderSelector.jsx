import { useRecoilValue } from 'recoil';
import { state } from '../../Atom';
import InputKeyWordArea from './InputKeyWordArea';
import GenderSelector from './GenderSelector';
import '../css/MemberGenderSelector.css';


export default function MemberGenderSelector() {

  const inputData = useRecoilValue(state);
  const compress = inputData.gender_selector_form_section;

  return (
    <div className='member-data-input-area'>
      <InputKeyWordArea keyWord={compress.keyWord} attentionBlock={compress.attentionBlock}></InputKeyWordArea>
      <div id='gender-selector-container'>
        <GenderSelector></GenderSelector>
      </div>
    </div>
  )
}