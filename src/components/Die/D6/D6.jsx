import React from 'react';
import { useState, useEffect } from 'react';
import "./D6.css"


const D6 = () => {
  const [face, setFace] = useState(1)
  const d6 = document.getElementById('d6')

  let sides = 6
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
    d6.setAttribute('data-face', face)
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
        <div className="d6content">
          <div id="d6">
            <figure className="face face-1">1</figure>
            <figure className="face face-2">2</figure>
            <figure className="face face-3">3</figure>
            <figure className="face face-4">4</figure>
            <figure className="face face-5">5</figure>
            <figure className="face face-6">6</figure>
          </div>
        </div>
        <button onClick={(e)=> handleRollDie(e)} >Roll D-6</button>
      </form>
    </>
  )
}
  
 export default D6