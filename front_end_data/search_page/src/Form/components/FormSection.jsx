import { useRecoilValue } from 'recoil';
import { inputTextControl } from '../../Atom';
import '../css/FormSection.css';

export default function FormSection({ inputText, inputStyle, queryName }) {

  const text = useRecoilValue(inputTextControl);

  const inputValueChange = (e) => {
    e.target.value = e.nativeEvent.data;
    console.log(e.target.value);
    console.log(e);
  }


  return (
    <div className={inputStyle}>
      <span className="item-attribution-name">{inputText}</span>
      <input name={queryName} className="item-attribution-inputspace" id="change-size"></input>
    </div> 
  )
}