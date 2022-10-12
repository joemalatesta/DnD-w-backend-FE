import Markdown from 'markdown-to-jsx';



const RuleParagraph = (props) => {

  return(
    <>
     {props.details ?
      <Markdown>{props.details}</Markdown>
      :
      <>
      Loading
      </>
     }
    </>
  )
}
 
export default RuleParagraph