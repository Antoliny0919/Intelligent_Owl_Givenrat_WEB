import FormBase from './components/FormBase';
import TableBase from './components/TableBase';
import './css/FormTableBase.css';

export default function FormTableBase() {
  
  const state = {
    // form칸 왼쪽에 있을 심벌 이미지
    form_image : require('./img/questionbox.png'),

    // 첫번째 폼 라인의 데이터
    form_first_section: [
      [
        // 가격 인풋 데이터
        {name: '💲 가격 💲',
        style: 'inputspace-block price',
        number: 1}
      ],
      [
        // 품명 인풋 데이터
        {name: '📦 품명 📦',
        style: 'inputspace-block name',
        number: 2}
      ],
    ],

    // 두번째 폼 라인의 데이터(세번째, 네번째 인풋은 같은 데이터를 가짐)
    form_second_section: [
      [
        // 속성 인풋 데이터
        {name: '🔑 속성 🔑',
        style: 'inputspace-block attribute',
        number: 3}
      ],
      [
        //속성 인풋 데이터
        {name: '🔑 속성 🔑',
        style: 'inputspace-block attribute',
        number: 4}
      ],
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
      <span id="dividing-line"></span>
      <TableBase>
      </TableBase>
    </div>
  )
}