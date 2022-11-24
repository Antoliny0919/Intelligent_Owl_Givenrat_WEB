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
      <InputKeyWordArea keyWord={compress.title} attentionBlock={compress.attentionBlock}></InputKeyWordArea>
      <fieldset id='gender-selector-container'>
        {compress.form_data.map(({ keyWord, id }) => {
          return (
            <GenderSelector keyWord={keyWord} key={id}></GenderSelector>
          )
        })}
      </fieldset>
    </div>
  )
}