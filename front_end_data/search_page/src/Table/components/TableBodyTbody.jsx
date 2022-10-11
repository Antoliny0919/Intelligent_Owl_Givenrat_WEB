import TableBodyItem from './TableBodyItem';
import { useRecoilValue } from 'recoil';
import { products, if_no_data } from '../../Atom';
import '../css/TableBodyTbody.css';


export default function TableBodyTbody({ readDetailFunc, readHiddenFunc }) {
  const items = useRecoilValue(products)
  const noDataImg = useRecoilValue(if_no_data)
  return (
    <tbody>
      {items.map((item) => {
        return (
        <tr className='tbody-item-block' 
        key={item.id} 
        onMouseOver={readDetailFunc} 
        onMouseLeave={readHiddenFunc}
        >
          <TableBodyItem item={item}></TableBodyItem>
        </tr>)
      })}
      {/* 검색했는데 데이터가 하나도 없을때 이미지 */}
      {noDataImg && <tr><td>이시현 입니다!</td></tr>}
    </tbody>
  )
}