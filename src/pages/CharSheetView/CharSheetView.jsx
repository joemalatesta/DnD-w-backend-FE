import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { getRaceList } from '../../services/api-calls'
import { getClassList } from '../../services/api-calls'
import { getClassStats } from '../../services/api-calls'
import { getRaceStats } from '../../services/api-calls'

const CharSheetView = () => {
  const {state} = useLocation()
  const navigate = useNavigate()
  const [strBonus, setStrBonus] = useState()
  const [dexBonus, setDexBonus] = useState()
  const [conBonus, setConBonus] = useState()
  const [intBonus, setIntBonus] = useState()
  const [wisBonus, setWisBonus] = useState()
  const [chaBonus, setChaBonus] = useState()
  const [currentCharRace, setCurrentCharRace] = useState({})
 
  const table = {
    3: "-4",
    4: "-3",
    5: "-3",
    6: "-2",
    7: "-2",
    8: "-1",
    9: "-1",  
    10:"+0",
    11:"+0",
    12:"+1",
    13:"+1",
    14:"+2",
    15:"+2",
    16:"+3",
    17:"+3",
    18:"+4",
  }

  const getBonuses = () => {
    setStrBonus(0)
    setDexBonus(0)
    setConBonus(0)
    setIntBonus(0)
    setWisBonus(0)
    setChaBonus(0)
    currentCharRace.ability_bonuses?.map((stat) => {
    
      if(stat.ability_score.index === 'str') {
        setStrBonus(stat.bonus)  
      }
      if(stat.ability_score.index === 'dex' ) {
        setDexBonus(stat.bonus)
      }
      if(stat.ability_score.index === 'con') {
        setConBonus(stat.bonus)
      }
      if(stat.ability_score.index === 'int') {
        setIntBonus(stat.bonus)
      }
      if(stat.ability_score.index === 'wis') {
        setWisBonus(stat.bonus)
      }
      if(stat.ability_score.index === 'cha') {
        setChaBonus(stat.bonus)
      }
    })
  }

  console.log(state);

  return ( 
    <>
          <div className='app charSheetCard'>
        <div id='charSheet'>
          <img 
            id='race-pic'
            style={{ width: "30px", height: "30px" }}
            src={`/images/${state.race}.png`} 
            alt="race-logo"
          />
          <img 
            id='class-pic'
            style={{ width: "30px", height: "30px" }}
            src={`/images/${state.class}.svg`} 
            alt="class-logo"
          />
          <div id='charName'>{state.name}</div>
          <div id='sheet-class'>{state.class}</div>
          <div id='sheet-level'>{state.level}</div>
          <div id='background'>{state.background}</div>
          <div id='playerName'>player name</div>
          <div id='sheet-race'>{state.race}</div>
          <div id='alignment'>{state.align}</div>
          <div id='sheet-str'>{state.str}</div>
          <div id='sheet-dex'>{state.dex}</div>
          <div id='sheet-con'>{state.con}</div>
          <div id='sheet-int'>{state.int}</div>
          <div id='sheet-wis'>{state.wis}</div>
          <div id='sheet-cha'>{state.cha}</div>
          <div id='inspir'>333</div>
          <div id='profBonus'>55</div>
          <div id='st-str'>str</div>
          <div id='st-dex'>dex</div>
          <div id='st-con'>con</div>
          <div id='st-int'>int</div>
          <div id='st-wis'>wis</div>
          <div id='st-cha'>cha</div>
          <div id='armorClass'>3</div>
          <div id='init'>16</div>
          <div id='speed'>22</div>
          <div id='str-bns'>{table[state.str]}</div>
          <div id='dex-bns'>{table[state.dex]}</div>
          <div id='con-bns'>{table[state.con]}</div>
          <div id='int-bns'>{table[state.int]}</div>
          <div id='wis-bns'>{table[state.wis]}</div>
          <div id='cha-bns'>{table[state.cha]}</div>
        </div>
      </div>
      <button onClick={()=> navigate('/AllCharacters')}>Back</button>
    </>
  );
}
 
export default CharSheetView



