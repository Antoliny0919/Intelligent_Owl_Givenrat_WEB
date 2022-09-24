import FormSection from './FormSection';
import '../css/FormGroup.css';

export default function FormGroup({ formSectionData }) {
  return (
    <div className='form-group'>
      {formSectionData.map((position) => {
        return position.map(({name, style}) => {
          return <FormSection inputText={name} inputStyle={style}></FormSection>
        })
      })}
    </div>
  )
}