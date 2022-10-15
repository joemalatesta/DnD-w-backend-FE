import React, { useState, useEffect, useRef } from 'react'
import { getRaceList } from '../../services/api-calls'
import { getClassList } from '../../services/api-calls'
import { getClassStats } from '../../services/api-calls'
import { getRaceStats } from '../../services/api-calls'
import * as charSheetService from '../../services/charSheetService'
import { useNavigate } from 'react-router-dom'
import D20 from '../../components/Die/D20/D20'
import D10 from '../../components/Die/D10/D10'

  const CreateChar = () => {
  const navigate = useNavigate()
  const [hitPoints, setHitPoints] = useState(null)
  const [hitDie, setHitDie] = useState(null)
  const [races, setRaces] = useState([])
  const [classes, setClasses] = useState([])
  const [roll, setRoll] = useState()
  const [STR, setSTR] = useState(null)
  const [DEX, setDEX] = useState(null)
  const [CON, setCON] = useState(null)
  const [INT, setINT] = useState(null)
  const [WIS, setWIS] = useState(null)
  const [CHA, setCHA] = useState(null)
  const [roll1, setRoll1] = useState(0)
  const [roll2, setRoll2] = useState(0)
  const [roll3, setRoll3] = useState(0)
  const [roll4, setRoll4] = useState(0)
  const [roll5, setRoll5] = useState(0)
  const [roll6, setRoll6] = useState(0)
  const [currentCharClass, setCurrentCharClass] = useState({})
  const [currentCharRace, setCurrentCharRace] = useState({})
  const [conBonus, setConBonus] = useState()
  const [raceConBonus, setRaceConBonus] = useState(null)
  const [charSheet, setCharSheet] = useState([])
  const [count, setCount] = useState(0)
  const formElement = useRef()
  const [toggle,setToggle]=useState(false)
  const [validForm, setValidForm] = useState(false)
  const [validButton, setValidButton] = useState(false)
  const [inv, setInv] = useState([])
  const [rollToPass, setRollToPass ] = useState()
  const [target, setTarget] = useState()
  
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    race: '',
    level: 1,
    background:'',
    experience: 0,
  })
  const backgrounds =['Acolyte', 'Charlatan', 'Criminal', 'Entertainer', 'Folk', 'Guild Artisan', 'Hermit', 'Noble', 'Outlander', 'Sage', 'Sailor', 'Soldier', 'Urchin']

  useEffect(() => {
    formElement.current.checkValidity() && hitPoints!==null && STR!==null && DEX!==null&& CON!==null && INT!==null && WIS!==null && CHA!==null ? setValidForm(true) : setValidForm(false)
  }, [formData,STR,DEX,CON,WIS,INT,CHA,hitPoints])
  
  useEffect(() => {
    CON!==null && hitDie !==null && raceConBonus !== null ?setValidButton(true) : setValidButton(false)
  }, [CON,hitDie])

  useEffect(() =>{

  },[rollToPass,count])

  useEffect(()=> {
    getClassList()
    .then(classData => setClasses(classData.results))
    getRaceList()
    .then(raceData => setRaces(raceData.results))
    getBonuses()
  }, [currentCharRace])

  useEffect(() => {
    const getInv =()=>{
      currentCharClass.starting_equipment?.map(stuff => {
        setInv([...inv, stuff.equipment.name])
      })    
    }
    getInv()
  }, [currentCharClass]);


  const handleAddCharSheet = async (newCharSheetData) => {
    const newCharSheet = await charSheetService.create(newCharSheetData)
    setCharSheet([...charSheet, newCharSheet])
    navigate(`/MyCharacters`)
  }

  const handleClassChange = (e) => {
    getClassStats(e.target.value.toLowerCase())
    .then(charClassData => setCurrentCharClass(charClassData))
    .then(setHitDie(currentCharClass.hit_die))
  }
  
  const handleRaceChange = (e) => {
    getRaceStats(e.target.value.toLowerCase())
    .then(charRaceData => setCurrentCharRace(charRaceData))
  }
  
  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
    console.log(formData);
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    const form={
      name: formData.name,
      class: formData.class,
      race: formData.race,
      level: formData.level,
      align: formData.align,
      background: formData.background,
      str: STR,
      dex: DEX,
      con: CON,
      int: INT,
      wis: WIS,
      cha: CHA,
      inv: inv,
      experience: formData.experience,
      hitDie: '',
      hitPoints: hitPoints,
    }
    handleAddCharSheet(form)
  }
  
  function handleToggleRoll () {
    setRollToPass(roll1)
    statRoll()
    setToggle(!toggle)
  }

  
  useEffect(() => {
    const table = {
      3: -4,
      4: -3,
      5: -3,
      6: -2,
      7: -2,
      8: -1,
      9: -1,  
      10: 0,
      11: 0,
      12: 1,
      13: 1,
      14: 2,
      15: 2,
      16: 3,
      17: 3,
      18: 4,
      19: 4,
      20: 5
    }
    setConBonus(table[CON])    
  }, [CON]);

  
  function rollDSix () {
    let d6Roll = [1,2,3,4,5,6]
    const randomNumber = (value) => { 
      let item = value[Math.floor(Math.random() * value.length)]
      return item
    }
    return randomNumber(d6Roll)
  }
  
  function statRoll (){
    if (count < 6) {
      let roll1 = rollDSix()
      let roll2 = rollDSix()
      let roll3 = rollDSix()
      let statNumber = roll1 + roll2 + roll3 + 2
      if(count === 0)setRoll1(statNumber)
      if(count === 1)setRoll2(statNumber)
      if(count === 2)setRoll3(statNumber)
      if(count === 3)setRoll4(statNumber)
      if(count === 4)setRoll5(statNumber)
      if(count === 5)setRoll6(statNumber)
      statNumber = 0
      setCount(count + 1)
    }
  }
  
  const getBonuses = () => {
    currentCharRace.ability_bonuses?.map(abil => {
      if(abil.ability_score.index === 'con' ){
        setRaceConBonus(abil.bonus)
      }else
      setRaceConBonus(0)
    })
  }

  const getHP = () => {
    let num = currentCharClass.hit_die
    console.log(num);
    let hP = Math.floor(Math.random()* num)
    console.log(hP);
    hP = hP + 2
    console.log(hP)
    setRoll(hP)
    console.log(roll);
    hP = hP + conBonus + raceConBonus 
    if(hP<=0){
      setHitPoints(1)
    }else{
      setHitPoints(hP)
    }
  }

  const handleRollToPass = () =>{
 
    if(roll1!==null){
      setRollToPass(roll2)
      setRoll1(null)
      return
    }
    else if(roll2!==null){
      setRollToPass(roll3)
      setRoll2(null)
      return
    }
    else if (roll3!==null){
      setRollToPass(roll4)
      setRoll3(null)
      return
    }
    else if(roll4!==null){
      setRollToPass(roll5)
      setRoll4(null)
      return
    }
    else if(roll5!==null){
      setRollToPass(roll6)
      setRoll5(null)
      return
    }
    else if(roll6!==null){
      setRoll6(null)
      return
    }

    setRollToPass(null)
  }

  const submitStatToAttrubute=()=>{
  
    if(target==='STR'){
      setSTR(rollToPass)
      handleRollToPass()
      return
    }
    if(target==='DEX'){
      setDEX(rollToPass)
      handleRollToPass()
      return  
    }
    if(target==='CON'){
      setCON(rollToPass)
      handleRollToPass()
      return
    }
    if(target==='INT'){
      setINT(rollToPass)
      handleRollToPass()
      return
    }
    if(target==='WIS'){
      setWIS(rollToPass)
      handleRollToPass()
      return
    }
    if(target==='CHA'){
      setCHA(rollToPass)
      handleRollToPass()
      return
    }
  }

  const handleCombo = (e) => {
    submitStatToAttrubute()
    handleSwitchAttrib(e)
    handleRollToPass()
  } 

  const handleSwitchAttrib =(e)=>{
    if(count===6)setRollToPass(roll1)
    if(count===6)setCount(count + 1)
    setTarget(e?.target?.value)
    return target
  } 


  // **************************************************************************************************************************************************
  return ( 
    <div className='charSheet'>
      <div className='app'>
        <div className='card title'>
          <h2>Character Deets</h2>
        </div>
      </div>
      <div className='app'>
        <div className='grid'>
          <div className='card'>
            <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
              <div>
                <label className="form-label">
                  Character's Name
                </label>
                <input 
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  />
              </div>
              <div>
                <label className="form-label">
                  Character's Class<br/>
                </label>
                <div 
                  type="text"
                  className="form-control"
                  id="class"
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  required
                  >
                  <select onChange={ value =>  handleClassChange(value) } name="class" id="class">
                    <option>Pick Class</option>
                    {classes.map((char) => (
                      <option value={char.name} key={char.index}  >{char.name}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="form-label">
                  Character's Race<br/>
                </label>    
                <div 
                  type="text"
                  className="form-control"
                  id="race"
                  name="race"
                  value={formData.race}
                  onChange={handleChange}
                  required
                  >
                  <select onChange={ value =>  handleRaceChange(value) } name="race" id="race">
                    <option>Pick Race</option>
                    {races.map((race) => (
                      <option value={race.name} key={race.index}>{race.name}</option>
                      ))}
                  </select>
                </div>
                <label className="form-label">
                  Character's Alignment<br/>
                </label> 
                <div 
                  type="text"
                  className="form-control"
                  id="align"
                  name="align"
                  value={formData.align}
                  onChange={handleChange}
                  required
                  >
                  <select name="align" id="align">
                    <option>Pick Alignment</option>
                      <option value='Lawful Good' >Lawful Good</option>
                      <option value='Neutral Good' >Neutral Good</option>
                      <option value='Chaotic Good' >Chaotic Good</option>
                      <option value='Lawful Neutral' >Lawful Neutral</option>
                      <option value='Neutral' >Neutral</option>
                      <option value='Chaotic Neutral' >Chaotic Neutral</option>
                      <option value='Lawful Evil'>Lawful Evil</option>
                      <option value='Neutral Evil' >Neutral Evil</option>
                      <option value='Chaotic Evil' >Chaotic Evil</option>
                  </select>
                </div>
                <label className="form-label">
                  Character's Background<br/>
                </label>    
                <div 
                  type="text"
                  className="form-control"
                  id="background"
                  name="background"
                  value={formData.background}
                  onChange={handleChange}
                  required
                  >
                  <select name="background" id="background">
                    <option>Pick Background</option>
                    {backgrounds.map((bg,idx) => (
                      <option value={bg} key={idx}>{bg}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div>
                <br />        
              </div>
              <div className="form-control">
                  <label className="form-label">
                    Character's Attr:<br/>
                  </label>   
                  <h5 className="form-control" value={STR} name="str" id="str" >STR: {STR}</h5>
                  <h5 className="form-control" value={DEX} name='dex' id='dex' >DEX: {DEX}</h5>
                  <h5 className="form-control" value={CON} name='con' id='con' >CON: {CON}</h5>
                  <h5 className="form-control" value={INT} name='int' id='int' >INT: {INT}</h5>
                  <h5 className="form-control" value={WIS} name='wis' id='wis' >WIS: {WIS}</h5>
                  <h5 className="form-control" value={CHA} name='cha' id='cha' >CHA: {CHA}</h5>   

              </div>
              <div>
                <button
                  type="submit"
                  disabled={!validForm}
                  >
                  Add Character
                </button>
              </div>
            </form>
          </div>
          <div className='stats'>
              {count < 6?
                <>
                  <h3>Attributes Rolls</h3>
                  <button onClick={() => {handleToggleRoll()} }>Roll Stat</button>
                </>
              :
                <>
                  <h2>Place your stat</h2>
                  <h3> {roll6===null ? 'Done' : rollToPass }</h3> 
                  <div
                    statname='statname'
                    id='id'
                  >
                    <select statname="statname" id="id" onChange={(id)=>handleSwitchAttrib(id)}>
                      <option statname=''></option>
                      <option statname='str' id='str' hidden={ STR===null ? false : true}>STR</option>
                      <option statname='dex' id='dex' hidden={ DEX===null ? false : true}>DEX</option>
                      <option statname='con' id='con' hidden={ CON===null ? false : true}>CON</option>
                      <option statname='int' id='int' hidden={ INT===null ? false : true}>INT</option>
                      <option statname='wis' id='wis' hidden={ WIS===null ? false : true}>WIS</option>
                      <option statname='cha' id='cha' hidden={ CHA===null ? false : true}>CHA</option>
                    </select>  
                    <button disabled={target? false : true } onClick={(e)=> handleCombo(e)} >Add Stat</button>
                  </div>
                  <br/>
                </>
              }
            <h5 hidden={roll1 === null ? true : false }>1st Roll: {roll1}</h5>
            <h5 hidden={roll2 === null ? true : false }>2nd Roll: {roll2}</h5>
            <h5 hidden={roll3 === null ? true : false }>3rd Roll: {roll3}</h5>
            <h5 hidden={roll4 === null ? true : false }>4th Roll: {roll4}</h5>
            <h5 hidden={roll5 === null ? true : false }>5th Roll: {roll5}</h5>
            <h5>{ roll6===null ? 'All Stats Placed' : `6th Roll: ${roll6}`}</h5>
          </div> 
          <div className='card'> 
            <h2>Hit Points</h2> 
            
            Your roll: {roll}          
            <h5>Race Bonus: {raceConBonus}</h5>          
            <h5>Constitution Bonus: {conBonus}</h5>          
            <h5>Class Hit Die: D{currentCharClass.hit_die}</h5>
            <button hidden={ hitPoints===null ? false : true } type="submit" disabled={!validButton} onClick={getHP}>Roll for HP</button>
            <h3  type="number"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.hitPoints}
                  onChange={handleChange}
                  required>{hitPoints}</h3>    
            <h2>Starting Proficiencies</h2>
            {currentCharRace.starting_proficiencies?.length ?
              <div>
                {currentCharRace.starting_proficiencies?.map((stat) => (
                  <p value={stat.name} key={stat.index}>{stat.name}</p>
                ))}
              </div>
            :
              <p>They got no special SKILLZ</p>
            }    
            <h2>Sub Races</h2>
            {currentCharRace.subraces?.length ?
              <div>
                {currentCharRace.subraces?.map((stat) => (
                  <p value={stat.name} key={stat.index}>{stat.name}</p>
                ))} 
              </div>
            :
              <p>No Sub Races</p>
            }
           
          </div> 

              <D20 />

        </div>
        </div>
              <D10/>
        <section>
        </section>
        
    </div>
  )
}

export default CreateChar