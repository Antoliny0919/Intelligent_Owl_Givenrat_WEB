import '../css/ExplainGuide.css';

export default function ExplainGuide({ guideline_button_text, guideline_button_style, read_more_func }) {
  
  return (
    <button 
    className={guideline_button_style}
    onClick={read_more_func}
    >{guideline_button_text}</button>
  )
}