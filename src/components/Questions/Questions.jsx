import React , {useState} from 'react'
import { useGlobalContext } from '../../context'

function Questions() {
     
    const {questions  , index ,setIndex } = useGlobalContext()
    const [correct, setcorrect] = useState(0)
  
    const { question, incorrect_answers, correct_answer } = questions[index]
    let answers = [...incorrect_answers]
    const tempIndex = Math.floor(Math.random() * 4) // returns a number within 0 to 4
    if (tempIndex === 3) {
      answers.push(correct_answer)
    } else {
      answers.push(answers[tempIndex])
      answers[tempIndex] = correct_answer
    }

    // const nextQuestion = () => {
    //   setIndex(oldState => oldState + 1)
    // }
    const nextQuestion = () => {
    
      setIndex((oldIndex) => {
        const index = oldIndex + 1
        if (index > questions.length - 1) {
          return 0
        } else {
          return index
        }
      })
    }
   

    const checkAnswer = (value) => {
       if(value) {
         setcorrect(oldState => oldState + 1)
       } 

       nextQuestion()
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
                        <label key={index}>
                        <input
                          type="radio"
                          name='options'
                          value={answer}
                          onClick={(e) => checkAnswer(correct_answer === e.target.value)}
                         
                          
                        />
                        { answer }
                      </label>
                      )
                  })}
              </div>
           </article>
         
        </section>
    
    </div>

    { console.log(correct)}
    </>
   
  )
}

export default Questions