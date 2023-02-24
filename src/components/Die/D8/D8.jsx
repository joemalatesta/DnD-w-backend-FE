import React from 'react';
import { useState, useEffect } from 'react';
import "./D8.css"


const D8 = () => {
  const [face, setFace] = useState()
  const d10 = document.getElementById('d8')

  let sides = 8
  let initialSide = 1
  let lastFace
  let timeoutId
  let animationDuration  = 50
 
  useEffect(() => {
    setFace(Math.floor((Math.random() * sides)) +initialSide)
  }, [face, initialSide, sides])
  
  const randomFace = () => {
    let face1 = Math.floor((Math.random() * sides)) + initialSide
    lastFace = face1 === lastFace ? randomFace() : face1
    return face1
  }
  
  const rollTo = (face) => {
    clearTimeout(timeoutId)
    d10.setAttribute('data-face', face)
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
        <div className="content">
          <div id="d8">
            <figure className="face face-1"></figure>
            <figure className="face face-2"></figure>
            <figure className="face face-3"></figure>
            <figure className="face face-4"></figure>
            <figure className="face face-5"></figure>
            <figure className="face face-6"></figure>
            <figure className="face face-7"></figure>
            <figure className="face face-8"></figure>
          </div>
        </div>
        <button onClick={(e)=> handleRollDie(e)} >Roll D-8</button>
      </form>
    </>
  )
}
  
 export default D8