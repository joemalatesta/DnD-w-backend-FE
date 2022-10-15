import React, { useState } from 'react';
import { useEffect } from 'react';
import "./D20.css"


const D20 = () => {
  const [face, setFace] = useState()
  const die = document.getElementById('die')

  let sides = 20
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
    die.setAttribute('data-face', face)
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
          <div id="die">
            <figure className="face face-1"></figure>
            <figure className="face face-2"></figure>
            <figure className="face face-3"></figure>
            <figure className="face face-4"></figure>
            <figure className="face face-5"></figure>
            <figure className="face face-6"></figure>
            <figure className="face face-7"></figure>
            <figure className="face face-8"></figure>
            <figure className="face face-9"></figure>
            <figure className="face face-10"></figure>
            <figure className="face face-11"></figure>
            <figure className="face face-12"></figure>
            <figure className="face face-13"></figure>
            <figure className="face face-14"></figure>
            <figure className="face face-15"></figure>
            <figure className="face face-16"></figure>
            <figure className="face face-17"></figure>
            <figure className="face face-18"></figure>
            <figure className="face face-19"></figure>
            <figure className="face face-20"></figure>
          </div>
        </div>
        <div>
          <button onClick={(e)=>handleRollDie(e)} >Roll Da Die</button>
        </div>
      </form>
    </>
  )
}
  
 export default D20 