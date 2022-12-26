import {Fragment} from 'react';
import FormImgArea from './FormImgArea';
import FormSection from './FormSection';
import '../css/FormBlock.css';

export default function FormBlock({ formSection, searchFunc, symbolImgPath }) {
  
  return (
      <Fragment>
        <FormImgArea symbolImgPath={symbolImgPath}></FormImgArea>
        <form id="search-form">
          <div id="form-section-container">
            {formSection.map((position) => {
              return position.map(({name, style, queryName}) => {
                return <FormSection key={name} queryName={queryName} inputText={name} inputStyle={style}></FormSection>
              })
            })}
          </div>
          <button button id="form-submit-button" type="submit" onClick={searchFunc}>검색 ⚲</button>
        </form>
      </Fragment>
  )
}