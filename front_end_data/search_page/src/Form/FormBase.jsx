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
    form_section_data: [
      [
        // 가격 인풋 데이터
        {
          name: '가격',
          style: 'inputspace-block price',
          queryName: 'product_price',
        }
      ],
      [
        // 품명 인풋 데이터
        {
          name: '품명',
          style: 'inputspace-block name',
          queryName: 'product_name',
        }
      ],
      [
        // 브랜드 인풋 데이터
        {
          name: '브랜드',
          style: 'inputspace-block brand',
          queryName: 'product_brand',
        }
      ],
      [
        {
        // 속성 인풋 데이터
          name: '속성',
          style: 'inputspace-block attribute',
          queryName: 'product_first_attribute',
        }
      ],
      [
        {
        //속성 인풋 데이터
          name: '속성',
          style: 'inputspace-block attribute',
          queryName: 'product_second_attribute',
        }
      ],
    ],
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
    <div id="search-form-container-padding">
      <div id="search-form-container-margin">
        <div id="search-form-block">
          <FormBlock 
          formSection={state.form_section_data}
          searchFunc={searchProduct}
          symbolImgPath={state.form_image}
          ></FormBlock>
        </div>
      </div>
    </div> 
  )
}

