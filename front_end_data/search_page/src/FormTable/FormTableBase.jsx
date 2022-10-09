import { useEffect, useState } from 'react';
import { getProducts } from '../products_data';
import FormBase from './components/FormBase';
import TableBase from './components/TableBase';
import './css/FormTableBase.css';


const INPUTCOUNT = 4;
const PRODUCTSCOUNT = 22

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

  // 공산품 데이터
  const [items, setItems] = useState([]);

  // 공산품 데이터 페이지네이션(다음 데이터가 있는지 확인)
  const [nextPage, setNextPage] = useState('');

  // 공산품 검색 키워드(input.value)
  const [searchKeyWord, setSearchKeyWord] = useState('');

  const [noDataImg, setNoDataImg] = useState(false)

  // 공산품 데이터 가져오기
  const handleLoad = async (options) => {
    const { results, next, count} = await getProducts(options);

    // 검색 기능을 통한 데이터가 하나도 없을때
    if (count == 0 ) {
      setItems(results);
      setNextPage('');
      setNoDataImg(true);
      return;
    }
    // 검색을 통해서 물건을 찾을때 무조건 count값이 PRODUCTSCOUNT(ALL)보다 작을 수밖에 없음
    // 찾은 물품만 렌더링
    else if (count < PRODUCTSCOUNT) {
      setItems(results);
      setNextPage('');
      setNoDataImg(false);
      return;
    
    } else if (next === null) {
    // next가 null일경우 다음데이터가 없음(모든 데이터를 가져옴)
    setNextPage(next);
    setItems([...items, ...results]);
    return;

    } else {
    // 기존데이터에 받은데이터를 추가(read more)
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

  // 더보기 클랙했을시 데이터 더 가져오기
  const handleReadMore = () => {
    handleLoad({nextPage, searchKeyWord});
  };

  // 해당 아이템에 마우스를 올렸을시 세부사항 보기
  const readDetail = (e) => {
    e.currentTarget.className = 'tbody-item-block detail';
  };

  const readHidden = (e) => {
    e.currentTarget.className = 'tbody-item-block';
  };


  useEffect(() => {
    handleLoad({nextPage, searchKeyWord});
  }, [searchKeyWord, noDataImg]);

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
      noDataImg={noDataImg}
      readMoreFunc={handleReadMore}
      readDetailFunc={readDetail}
      readHiddenFunc={readHidden}
      >
      </TableBase>
    </div> 
  )
}