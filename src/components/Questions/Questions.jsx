import React from 'react'
import { useGlobalContext } from '../../context'

function Questions() {
     
    const {questions  , index } = useGlobalContext()
  
    const { question, incorrect_answers, correct_answer } = questions[index]
    let answers = [...incorrect_answers]
    const tempIndex = Math.floor(Math.random() * 4) // returns a number within 0 to 4
    if (tempIndex === 3) {
      answers.push(correct_answer)
    } else {
      answers.push(answers[tempIndex])
      answers[tempIndex] = correct_answer
    }
   
  return (
    <>
     <div>
        <section>
           <article>
              <h2 dangerouslySetInnerHTML={ { __html : question}}/>
              <div className="option-container">
                  {answers.map((answer , index) => {
                      return (
                        <label>
                        <input
                          type="radio"
                          name='options'
                          value={answer}
                          
                        />
                        { answer }
                      </label>
                      )
                  })}
              </div>
           </article>
         
        </section>
    
    </div>

  
    </>
   
  )
}

export default Questions