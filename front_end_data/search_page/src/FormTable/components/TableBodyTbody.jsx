import TableBodyItem from './TableBodyItem';
import '../css/TableBodyTbody.css';

export default function TableBodyTbody({ items, readDetailFunc, readHiddenFunc, noDataImg }) {
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
      {noDataImg && <h1>이시현 입니다!</h1>}
    </tbody>
  )
}