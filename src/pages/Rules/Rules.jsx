import { getRules } from '../../services/api-calls'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";


const Rules = (props) => {
  const [rules, setRules] = useState([])

  useEffect(()=> {
    getRules()
    .then(ruleData => setRules(ruleData.results))
  }, [])



  return ( 
    <>
    <div className='app'>
      <h1 className='title card'>The Rules</h1>
      <div className='largeCard'>
        {rules.map(rule=> 
          <div  key={rule.index}>
          <Link
            to='/rule-details'
            state={{ rule }}
            >{rule.name}</Link><br/>
          </div>
        )}
      </div>
      
    </div>
    </>
   )
}
 
export default Rules