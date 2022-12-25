import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { inputKeyWord, products, page, if_no_data } from '../Atom';
import { getProducts } from '../products_data';
import TableBlock from './components/TableBlock';
import './css/TableBase.css';


const PRODUCTSCOUNT = 11

export default function TableBase() {

  // 공산품 데이터
  const [items, setItems] = useRecoilState(products);

  // 공산품 데이터 페이지네이션(다음 데이터가 있는지 확인)
  const [nextPage, setNextPage] = useRecoilState(page);

  // 공산품 데이터 검색시 키워드에 해당하는 데이터가 없을때
  const [noDataImg, setNoDataImg] = useRecoilState(if_no_data);

  // form영역에서 키워드를 입력하고 검색버튼을 눌렀을시 쿼리데이터 가져오기
  const searchKeyWord = useRecoilValue(inputKeyWord);
  
  // 공산품 데이터 가져오기
  const handleLoad = async (options) => {
    const { results, next, count} = await getProducts(options);

    // 검색 기능을 통한 데이터가 하나도 없을때
    if (count === 0 ) {
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
    setNoDataImg(false);
    }

    // next로 오는 값이(url) --> 쿼리값만 추출
    const position = next.indexOf('?');
    const getQuery = next.slice(position+1);
    setNextPage(getQuery);
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
    <div id="table-data-area">
      <TableBlock
      readMoreFunc={handleReadMore}
      readDetailFunc={readDetail}
      readHiddenFunc={readHidden}
      >
      </TableBlock>
    </div> 
  )
}