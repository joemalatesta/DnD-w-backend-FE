// import D4 from '../../components/Die/D4/D4'
import D6 from '../../components/Die/D6/D6'
// import D8 from '../../components/Die/D8/D8'
import D10 from '../../components/Die/D10/D10'
import D20 from '../../components/Die/D20/D20'

const Dice = (props) => {
  return ( 
    <>
      <div className='dice'>
        <D6 />
        <D10 />
        <D20 />
      </div>
    </>
  )
}
 
export default Dice