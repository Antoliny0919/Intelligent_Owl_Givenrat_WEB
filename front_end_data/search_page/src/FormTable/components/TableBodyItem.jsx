import { Fragment } from 'react';
import '../css/TableBodyItem.css';

export default function TableBodyItem({ item }) {
  return (
    <Fragment>
      <td className='tbody-item-size'>{item.name}</td>
      <td className='tbody-item-size'>{item.attribute}</td>
      <td className='tbody-item-size'>{item.brand}</td>
      <td className='tbody-item-size'>{item.price}</td>
      <td className='tbody-item-size'>{item.code_number}</td>
    </Fragment>
  )
}