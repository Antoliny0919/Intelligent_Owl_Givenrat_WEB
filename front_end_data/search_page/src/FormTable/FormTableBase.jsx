import FormBase from './components/FormBase';
import './css/FormTableBase.css';

export default function FormTableBase() {
  
  const state = {
    form_image : require('./img/questionbox.png'),
    form_first_section: [
      '💲 가격 💲',
      '📦 품명 📦',
    ],
    form_second_section: [
      '🔑 속성 🔑',
      '🔑 속성 🔑',
    ]
  }

  return (
    <div id="search-form-data-area">
      <span id="dividing-line"></span>
      <FormBase
      imgPath={state.form_image}
      formFirstSection={state.form_first_section}
      formSecondSection={state.form_second_section}
      >
      </FormBase>
    </div>
  )
}