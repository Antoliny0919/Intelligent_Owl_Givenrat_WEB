import { Fragment } from 'react';
import '../css/BirthDateBlock.css';


export default function BirthDateBlock({ placeholder, maxLength, divide }) {
  return (
    <Fragment>
      <div>
        <input className='birth-date-data' type="text" placeholder={placeholder} maxLength={maxLength}></input>
      </div>
      {divide && <span className='birth-date-divide-line' ></span>}
    </Fragment>
  )
}