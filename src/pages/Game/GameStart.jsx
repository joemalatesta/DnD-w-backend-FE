import CharStats from "../../components/Game/CharStats/CharStats"
import HitPoints from "../../components/Game/HitPoints/HitPoints"
import GameMap from '../../components/Game/GameMap/GameMap'
import { useLocation } from "react-router-dom"
import { useState } from "react"

const GameStart = () => {
  const {state} = useLocation()
  const [viewDm, setViewDm] = useState(true)
  const [viewMap, setViewMap] = useState(true)
  const [viewCharStats, setViewCharStats] = useState(false)
  const [viewHp, setHp] = useState(false)
  const [viewInv, setInv] = useState(false)

  const toggleDmView =() =>{
    setViewDm(!viewDm)
  
  }

  const toggleMapView =() =>{
    console.log("Clicked");
    setViewMap(!viewMap)
    setHp(!viewHp)
    setInv(!viewInv)
    setViewCharStats(!viewCharStats)
    console.log(viewCharStats);
  }


  return ( 
    <>
          <button onClick={()=>toggleMapView()}>toggle MAP view</button>
      <div className="app">
        <div className="app inline">
          <CharStats viewCharStats={viewCharStats} state={state}/>
          <GameMap viewMap={viewMap}/>
        </div>
        <div >
            <HitPoints viewHp={viewHp} state={state}/>
        </div>
        <div hidden={viewInv ? true : false} className={viewInv ? '' : "app card"}>
            <div>Inventory stuff</div>
        </div>
        <div hidden={viewDm ? true : false} className={viewDm ? '' : "app card"}>
            <div>this is for the dungeon masters modal</div>
        </div>
      </div>
    </>
   )
}
 
export default GameStart