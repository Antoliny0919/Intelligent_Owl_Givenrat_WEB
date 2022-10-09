import TableBodyItem from './TableBodyItem';
import '../css/TableBodyTbody.css';

export default function TableBodyTbody({ items, readDetailFunc, readHiddenFunc }) {
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
    </tbody>
  )
}