import FormSection from './FormSection';
import '../css/FormGroup.css';

export default function FormGroup({ formSectionData }) {

  return (
    <div className='form-group'>
      {formSectionData.map((item) => {
        return <FormSection inputText={item}></FormSection>
      })}
    </div>
  )
}