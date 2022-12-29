import FormSection from './FormSection';
import '../css/FormGroup.css';

export default function FormGroup({rowSectionData}) {
  return (
    <div id="form-section-container">
      {rowSectionData.map((section) => {
        return section.map(({id, inputName, style, queryName}) => {
          return <FormSection key={id} queryName={queryName} inputText={inputName} inputStyle={style}></FormSection>
        })
      })}
    </div>
  )
}