import { useState } from 'react'
import './App.css'
import Lottery from './LotteryGame.jsx'
import { sum } from './helper.js'

function App() {

  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  }

  return (
    <>
    <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}
export default App
