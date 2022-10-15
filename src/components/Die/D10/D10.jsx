import React from 'react';
import { useState, useEffect } from 'react';
import "./D10.css"


const D10 = () => {
  const [face10, setFace10] = useState()
  const d10 = document.getElementById('d10')

  let sides = 10
  let initialSide = 1
  let lastFace
  let timeoutId
  let animationDuration  = 50
 
  useEffect(() => {
    setFace10(Math.floor((Math.random() * sides)) + initialSide)
  }, [])
  
  const randomFace = () => {
    let face1 = Math.floor((Math.random() * sides)) + initialSide
    console.log(face1);
    lastFace = face1 === lastFace ? randomFace() : face1
    return face1
  }

  const rollTo = (face) => {
    clearTimeout(timeoutId)
    d10?.setAttribute('data-face', face)
  }

  const handleRollDie = (evt) => {
    evt.preventDefault()  
    rollTo(face10)
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
          <div className="d10">
            <figure className="face face-0"></figure>
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
        <button onClick={(e)=> handleRollDie(e)} >Coming soon</button>
      </form>
    </>
  )
}
  
 export default D10 