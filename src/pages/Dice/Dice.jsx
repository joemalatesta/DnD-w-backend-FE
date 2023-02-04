import D10 from '../../components/Die/D10/D10'
import D20 from '../../components/Die/D20/D20'
import D6 from '../../components/Die/D6/D6'

const Dice = (props) => {
  return ( 
    <>
      <D6 />
      <D10 />
      <D20 />
    </>
  )
}
 
export default Dice