import FormGroup from './FormGroup';
import '../css/FormBlock.css';

export default function FormBlock({ imgPath, formSection, searchProductFunc }) {
  
  return (
    <div id='search-form-area'>
      <div id='form-area-padding'>
        <img src={imgPath} id='form-image'></img>
        <div>
          <form id="form-main">
            <FormGroup
            formSection={formSection}
            searchProductFunc={searchProductFunc}
            ></FormGroup>
          </form>
        </div>
      </div>
    </div>
  )
}