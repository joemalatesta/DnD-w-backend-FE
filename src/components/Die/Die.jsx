import React from 'react';
import "./style.css"


const Die = () => {

  const die = document.getElementById('die')
  const btn = document.getElementById('btn')
  let sides = 20
  let initialSide = 1
  let lastFace
  let timeoutId
  let animationDuration  = 100
  
  const randomFace = () => {
   
    let face = Math.floor((Math.random() * sides)) + initialSide
    lastFace = face === lastFace ? randomFace() : face
    return face;
  }
  
  const rollTo = (face) => {
    clearTimeout(timeoutId)
    die.setAttribute('data-face', face)
  }
  
  btn?.addEventListener('click', (evt)=>{
    evt.preventDefault()
    rollTo(die.setAttribute('href',evt))
    clearTimeout(timeoutId)
    timeoutId = setTimeout(function () {
      rollTo(randomFace())
    }, animationDuration)
    return false
  })

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
          <button id='btn'>Roll Da Die</button>
        </div>
      </form>
    </>
  )
}
  
 export default Die 