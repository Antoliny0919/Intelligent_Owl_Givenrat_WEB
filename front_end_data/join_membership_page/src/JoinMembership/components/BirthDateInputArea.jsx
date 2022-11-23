import { useRecoilValue } from 'recoil';
import { state } from '../../Atom';
import InputKeyWordArea from './InputKeyWordArea';
import BirthDateBlock from './BirthDateBlock';
import '../css/BirthDateInputArea.css';


export default function BirthDateInputArea() {

  const inputData = useRecoilValue(state);
  const compress = inputData.birth_date_from_section;

  return (
    <div className='member-data-input-area'>
      <InputKeyWordArea keyWord={compress.title} attentionBlock={compress.attentionBlock}></InputKeyWordArea>
      <div id='birth-date-input-container'>
        <div id='birth-date-input-area'>
          {compress.form_data.map(({ placeholder, maxLength, divide }) => {
            return <BirthDateBlock placeholder={placeholder} maxLength={maxLength} divide={divide}></BirthDateBlock>
          })}
        </div>

      </div>

    </div>
  )
  
}