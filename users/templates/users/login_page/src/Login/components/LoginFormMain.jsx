import AccountInputArea from './AccountInputArea';
import AccountSubmitArea from './AccountSubmitArea';
import '../css/LoginFormMain.css';

export default function LoginFormMain( { inputText } ) {
  return (
    <form>
      <div id='input-container'>
        {inputText.map((position) => {
          return position.map(({ titleName, placeholderName, inputType }) => {
            return <AccountInputArea titleName={titleName} placeholderName={placeholderName} inputType={inputType}></AccountInputArea>
          })

        })}
      </div>
      <AccountSubmitArea></AccountSubmitArea>
    </form>
  )
}