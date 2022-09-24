import FormGroup from '../components/FormGroup';
import '../css/FormBase.css';

export default function FormBase({ imgPath, formFirstSection, formSecondSection }) {
  
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
            <button id="form-submit-button" type="submit">검색 👀</button>
          </form>
        </div>
      </div>
    </div>
  )
}