import { getRules } from '../../services/api-calls'
import { useState, useEffect } from 'react'



const Rules = (props) => {
  const [rules, setRules] = useState([])

  console.log(rules);


  useEffect(()=> {
    getRules()
    .then(ruleData => setRules(ruleData.results))
  }, [])



  return ( 
    <>
    <div className='app'>
      <div className='largeCard'>
      {rules.map(rule=> <h2>{rule.name}</h2>)}

      </div>
    </div>
    </>
   )
}
 
export default Rules