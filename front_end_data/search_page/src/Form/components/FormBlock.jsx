import FormGroup from './FormGroup';
import '../css/FormBlock.css';

export default function FormBlock({ imgPath, formFirstSection, formSecondSection, searchProductFunc }) {
  
  return (
    <div id='search-form-area'>
      <div id='form-area-padding'>
        <img src={imgPath} id='form-image'></img>
        <div>
          <form id="form-main">
            <FormGroup
            formSectionData={formFirstSection}
            ></FormGroup>
            <FormGroup
            formSectionData={formSecondSection}
            >
            </FormGroup>
            <button id="form-submit-button" type="submit" onClick={searchProductFunc}>검색 ⚲</button>
          </form>
        </div>
      </div>
    </div>
  )
}