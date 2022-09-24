import ExplainGuide from './ExplainGuide';
import ExplainContent from './ExplainContent';
import '../css/ExplainMainContent.css';

export default function ExplainMainContent({ img_path, guideline_button_text, guideline_button_style, read_more_func, readMore }) {
  
  return (
    <div className='explain-image-block'>
        <img id='explain-image'src={img_path} alt="No"></img>
        <div id='explain-content'>
          {readMore && <ExplainContent></ExplainContent>}
          <ExplainGuide
          guideline_button_text={guideline_button_text}
          guideline_button_style={guideline_button_style}
          read_more_func={read_more_func}
          ></ExplainGuide>
          
        </div>
    </div>
  )
}