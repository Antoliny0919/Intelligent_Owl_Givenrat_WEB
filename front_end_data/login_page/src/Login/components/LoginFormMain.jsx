import AccountInputArea from './AccountInputArea';

export default function LoginFormMain( { inputText } ) {
  return (
    <form>
      {inputText.map((position) => {
        return position.map(({ titleName, placeholderName }) => {
          return <AccountInputArea titleName={titleName} placeholderName={placeholderName}></AccountInputArea>
        })

      })}
    </form>
  )
}