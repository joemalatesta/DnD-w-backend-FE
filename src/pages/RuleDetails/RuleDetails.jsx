
import { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { getDetails } from "../../services/api-calls"
import RuleParagraph from "../Rules/RuleParagraph"

const RuleDetails = () => {
  const [ruleDetails, setRuleDetails] = useState({})
  let location = useLocation()
  let navigate = useNavigate()

  useEffect(() => {
    getDetails(location?.state?.rule?.url)
    .then(ruleData => setRuleDetails(ruleData))
  }, [] )

 


  return ( 
    <>
      <div className="app">
        <div className="app largeCard" >
          <div className="app">
            <h1>{ruleDetails.name}</h1>
          </div>
          <RuleParagraph details={ruleDetails.desc} />
          <button onClick={()=> navigate('/rules')}>Back</button>
        </div>
      </div>
    </>
   )
}
 
export default RuleDetails