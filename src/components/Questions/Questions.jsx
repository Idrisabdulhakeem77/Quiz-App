import React  from 'react'
import { useGlobalContext } from '../../context'
import './question.css'


function Questions() {
  const { questions , index , checkAnswer , nextQuestion}  = useGlobalContext()

  const { question , incorrect_answers , correct_answer} = questions[index]

  let answers = [...incorrect_answers]
  const tempIndex = Math.floor(Math.random() * 4) 
  if (tempIndex === 3) {
    answers.push(correct_answer)
  } else {
    answers.push(answers[tempIndex])
    answers[tempIndex] = correct_answer
  }
     return (
    <>
       <article className='question-container'>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className='option-container'>
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  className='options'
                  onClick={() => checkAnswer(correct_answer === answer)}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              )
            })}
          </div>
            <button className='next-btn' onClick={nextQuestion}> Next Question</button>
        </article>

    </>
   
  )
}

export default Questions