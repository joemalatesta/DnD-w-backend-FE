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
        <div className='largeCard'>
          <h1 className='app'>The Rules</h1>
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