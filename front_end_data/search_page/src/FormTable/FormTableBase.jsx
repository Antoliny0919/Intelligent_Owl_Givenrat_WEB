import { useEffect, useState } from 'react';
import { getProducts } from '../products_data';
import FormBase from './components/FormBase';
import TableBase from './components/TableBase';
import './css/FormTableBase.css';


const INPUTCOUNT = 4;

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
        queryName: 'price',
        }
      ],
      [
        // 품명 인풋 데이터
        {name: '📦 품명 📦',
        style: 'inputspace-block name',
        queryName: 'name',
        }
      ],
    ],

    // 두번째 폼 라인의 데이터(세번째, 네번째 인풋은 같은 데이터를 가짐)
    form_second_section: [
      [
        // 속성 인풋 데이터
        {name: '🔑 속성 🔑',
        style: 'inputspace-block attribute',
        queryName: 'attribute',
        }
      ],
      [
        //속성 인풋 데이터
        {name: '🔑 속성 🔑',
        style: 'inputspace-block attribute',
        queryName: 'attribute',
        }
      ],
    ]
  }

  // 공산품 데이터
  const [items, setItems] = useState([]);

  // 공산품 데이터 페이지네이션(다음 데이터가 있는지 확인)
  const [nextPage, setNextPage] = useState('');

  // 공산품 검색 키워드(input.value)
  const [searchKeyWord, setSearchKeyWord] = useState('');

  // 공산품 데이터 가져오기
  const handleLoad = async (options) => {
    const { results, next} = await getProducts(options);
    if (nextPage === '') {
      setItems(results);

    // next가 null일경우 다음데이터가 없음(모든 데이터를 가져옴)
    } else if (next === null) {
      setNextPage(next);
      setItems([...items, ...results]);
      return;

    // 기존데이터에 받은데이터를 추가(read more)
    } else {
    setItems([...items, ...results]);
    }

    // next로 오는 값이(url) --> 쿼리값만 추출
    const position = next.indexOf('?');
    const getQuery = next.slice(position+1);
    setNextPage(getQuery);
  };


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

  
  const handleReadMore = () => {
    handleLoad({nextPage, searchKeyWord});
  }

  useEffect(() => {
    handleLoad({nextPage, searchKeyWord});
  }, [searchKeyWord]);

  return (
    <div id="search-form-data-area">
      <span id="dividing-line"></span>
      <FormBase
      imgPath={state.form_image}
      formFirstSection={state.form_first_section}
      formSecondSection={state.form_second_section}
      searchProductFunc={searchProduct}
      >
      </FormBase>
      <span id="dividing-line"></span>
      <TableBase
      items={items}
      nextData={nextPage}
      readMoreFunc={handleReadMore}
      >
      </TableBase>
    </div> 
  )
}