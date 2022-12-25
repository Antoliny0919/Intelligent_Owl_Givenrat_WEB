import FormSection from './FormSection';
import '../css/FormGroup.css';

export default function FormGroup({ formSection, searchProductFunc }) {
  return (
    <div className='form-group'>
      {formSection.map((position) => {
        return position.map(({name, style, queryName}) => {
          return <FormSection key={name} queryName={queryName} inputText={name} inputStyle={style}></FormSection>
        })
      })}
      <button id="form-submit-button" type="submit" onClick={searchProductFunc}>검색 ⚲</button>
    </div>
  )
}