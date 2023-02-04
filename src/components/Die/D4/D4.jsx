import React from 'react';
import { useState, useEffect } from 'react';
import "./D4.css"


const D4 = () => {
  const [face, setFace] = useState(1)
  const d4 = document.getElementById('d4')

  let sides = 4
  let initialSide = 1
  let lastFace
  let timeoutId
  let animationDuration  = 50
 
  useEffect(() => {
    setFace(Math.floor((Math.random() * sides)) + initialSide)
  }, [face, initialSide, sides])
  
  const randomFace = () => {
    let face1 = Math.floor((Math.random() * sides)) + initialSide
    lastFace = face1 === lastFace ? randomFace() : face1
    return face1
  }

  const rollTo = (face) => {
    clearTimeout(timeoutId)
    d4.setAttribute('data-face', face)
  }

  const handleRollDie = (evt) => {
    evt.preventDefault()  
    rollTo(randomFace())
    clearTimeout(timeoutId)
    timeoutId = setTimeout(()=> {
      rollTo(randomFace())
    }, animationDuration)
    return false
  }
  return (
    <>
      <form>  
        <div className="d4content">
          <div id="d4">
            <figure className="face face-1"></figure>
            <figure className="face face-2"></figure>
            <figure className="face face-3"></figure>
            <figure className="face face-4"></figure>
          </div>
        </div>
        <button onClick={(e)=> handleRollDie(e)} >Roll D-4</button>
      </form>
    </>
  )
}
  
 export default D4