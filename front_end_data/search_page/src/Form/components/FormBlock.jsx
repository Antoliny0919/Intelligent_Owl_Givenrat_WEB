import {Fragment} from 'react';
import FormImgArea from './FormImgArea';
import FormGroup from './FormGroup';
import FormButton from './FormButton';
import '../css/FormBlock.css';

export default function FormBlock({ sectionData, buttonData, symbolImgPath }) {
  
  return (
      <Fragment>
        <FormImgArea symbolImgPath={symbolImgPath}></FormImgArea>
        <form id="search-form">
          {sectionData.map((item) => {
            return <FormGroup rowSectionData={item}></FormGroup>
          })}
          <div className='form-button-container'>
            {buttonData.map((item) => {
              return item.map(({id, buttonName, style, onClickMethod}) => {
                return <FormButton id={id} buttonName={buttonName} style={style} method={onClickMethod}></FormButton>
              })
            })}
          </div>
        </form>
      </Fragment>
  )
}