import TableBodyItem from './TableBodyItem';

export default function TableBodyTbody({ items }) {
  return (
    <tbody>
      {items.map((item) => {
        return (
        <tr className='tbody-item-block' key={item.id}>
          <TableBodyItem item={item}></TableBodyItem>
        </tr>)
      })}
    </tbody>
  )
}