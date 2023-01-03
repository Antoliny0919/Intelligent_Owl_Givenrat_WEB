import { useRecoilState } from 'recoil';
import { inputKeyWord } from '../Atom'; 
import FormBlock from './components/FormBlock';
import './css/FormBase.css';


const INPUTCOUNT = 5;

export default function FormBase() {

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
  

  const state = {
    // form칸 왼쪽에 있을 심벌 이미지
    form_image: require('./img/questionbox.png'),

    section_data: [
      // 첫번째행 섹션 데이터(가격, 품명, 브랜드)
      [
        [
          {
            id: 1,
            inputName: '가격',
            style: 'inputspace-block price',
            queryName: 'product_price',
            isButton: false,
          }
        ],
        [
          {
            id: 2,
            inputName: '품명',
            style: 'inputspace-block name',
            queryName: 'product_name',
            isButton: false,
          }
        ],
        [
          {
            id: 3,
            inputName: '브랜드',
            style: 'inputspace-block brand',
            queryName: 'product_brand',
            isButton: false,
          }
        ],
      ],
      
      // 두번째행 섹션 데이터(속성1, 속성2, +submit 버튼)
      [
        [
          {
            id: 4,
            inputName: '속성',
            style: 'inputspace-block attribute',
            queryName: 'product_first_attribute',
            isButton: false,
          },
        ],
        [
          {
            id: 5,
            inputName: '속성',
            style: 'inputspace-block attribute',
            queryName: 'product_second_attribute',
            isButton: false,
          }
        ],
      ],
    ],

    button_data: [
      [
        {
          id: 1,
          buttonName: '⚲ 검색',
          style: 'form-submit-button search',
          onClickMethod: searchProduct,
          type: "button",
        }
      ],
      [
        {
          id: 2,
          buttonName: '⎋ 초기화',
          style: 'form-submit-button initialization',
          onClickMethod: false,
          type: "reset",
        }
      ],
    ]
  }

  return (
    <div id="search-form-container-padding">
      <div id="search-form-container-margin">
        <div id="search-form-block">
          <FormBlock
          sectionData={state.section_data}
          buttonData={state.button_data}
          searchFunc={searchProduct}
          symbolImgPath={state.form_image}
          ></FormBlock>
        </div>
      </div>
    </div> 
  )
}

