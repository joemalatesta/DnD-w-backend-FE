import React, { useState, useEffect } from 'react';
import { getDetails } from '../../services/api-calls';
import { useLocation, useNavigate } from 'react-router-dom';


const MonsterDetails = () => {
  const [monsterDetails, setMonsterDetails] = useState({})
  let location = useLocation()
  let navigate = useNavigate()
  useEffect(() => {
    getDetails(location.state.monster.url)
    .then(monsterData => setMonsterDetails(monsterData))
  }, [] )

  console.log(monsterDetails);

  return ( 
    <>
    <div className='app'>
      
      <div className='largeCard'>
        <h3>Monster Deets</h3>
        <h2>{monsterDetails.name}</h2>
        <h4>Hit Points: {monsterDetails.hit_points}</h4>
        <h4>Alignment: {monsterDetails.alignment}</h4>
        <h4>Size: {monsterDetails.size}</h4>
        <h4>Type: {monsterDetails.type}</h4>
        <h4>AC: {monsterDetails.armor_class}</h4>
        <h4>Actions:</h4>
        {monsterDetails.actions ?
          <>
            {monsterDetails.actions.map(action => 
              <div key={action.name}>
                <h4 >{action.name}</h4>
                <h5>{action.desc}</h5>
              </div>
            )}
          </>
          :
          <p>This poor monster has no actions. Womp womp.</p>
        }
      </div>
    </div>  
    <button onClick={()=> navigate('/monster-list')}>Back</button>
  </>
  );
}
 
export default MonsterDetails;