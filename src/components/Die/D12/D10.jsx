import React from 'react';
import { useState, useEffect } from 'react';
import "./D10.css"


const D10 = () => {
  const [face, setFace] = useState()
  const d10 = document.getElementById('d10')

  let sides = 10
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
    console.log(typeof(d10))
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
          <div id="d10">
            <figure className="face face-10"></figure>
            <figure className="face face-1"></figure>
            <figure className="face face-2"></figure>
            <figure className="face face-3"></figure>
            <figure className="face face-4"></figure>
            <figure className="face face-5"></figure>
            <figure className="face face-6"></figure>
            <figure className="face face-7"></figure>
            <figure className="face face-8"></figure>
            <figure className="face face-9"></figure>
          </div>
        </div>
        <button onClick={(e)=> handleRollDie(e)} >Roll D-10</button>
      </form>
    </>
  )
}
  
 export default D10 