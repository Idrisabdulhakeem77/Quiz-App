import React from 'react'
import { useGlobalContext } from '../../context'
import './results.css'

function Results() {
    const {correct , isshowResult , questions , playAgain } = useGlobalContext()
  return (
    <div  className={`${isshowResult ? "show-result isOpen" : "show-result"}`}>
         <div className='content'>
              <h1>Your Results</h1>
              <p> { correct} out of {questions.length}</p>
              <p>
               You answered {((correct / questions.length) * 100).toFixed(0)}% of
               questions correctly
        </p> 
          <div className='btn-container'>
              <button> Check Answers</button>
              <button onClick={playAgain}> Play Again</button>  
          </div>
         </div>
    </div>
  )
}

export default Results