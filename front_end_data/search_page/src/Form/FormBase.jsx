import { useRecoilState } from 'recoil';
import { inputKeyWord } from '../Atom'; 
import FormBlock from './components/FormBlock';
import './css/FormBase.css';


const INPUTCOUNT = 4;

export default function FormBase() {

  const state = {
    // form칸 왼쪽에 있을 심벌 이미지
    form_image : require('./img/questionbox.png'),

    // 첫번째 폼 라인의 데이터
    form_first_section: [
      [
        // 가격 인풋 데이터
        {name: '💲 가격 💲',
        style: 'inputspace-block price',
        queryName: 'exact_price',
        }
      ],
      [
        // 품명 인풋 데이터
        {name: '📦 품명 📦',
        style: 'inputspace-block name',
        queryName: 'contains_name',
        }
      ],
    ],

    // 두번째 폼 라인의 데이터(세번째, 네번째 인풋은 같은 데이터를 가짐)
    form_second_section: [
      [
        // 속성 인풋 데이터
        {name: '🔑 속성 🔑',
        style: 'inputspace-block attribute',
        queryName: 'contains_first_attribute',
        }
      ],
      [
        //속성 인풋 데이터
        {name: '🔑 속성 🔑',
        style: 'inputspace-block attribute',
        queryName: 'contains_second_attribute',
        }
      ],
    ]
  }

  // 공산품 검색 키워드(input.value)
  const [searchKeyWord, setSearchKeyWord] = useRecoilState(inputKeyWord)

  // input에서 사용자가 입력한 keyword를 추출해서 query로 만듬
  const searchProduct = (e) => {
    e.preventDefault();
    let query = ``
    for (let i = 0; i < INPUTCOUNT; i++) {
      if (e.target.form[i].value === '') {
        continue;
      } else if (query === ``) {
        query += `${e.target.form[i].name}=${e.target.form[i].value}`
        continue;
      }
      query += `&${e.target.form[i].name}=${e.target.form[i].value}`
    }
    setSearchKeyWord(query);
  };


  return (
    <div id="search-form-data-area">
      <span id="dividing-line"></span>
      <FormBlock
      imgPath={state.form_image}
      formFirstSection={state.form_first_section}
      formSecondSection={state.form_second_section}
      searchProductFunc={searchProduct}
      >
      </FormBlock>
    </div> 
  )
}

