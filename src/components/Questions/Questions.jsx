import React , {useState} from 'react'
import './question.css'
import { useGlobalContext } from '../../context'
import { useEffect } from 'react'

function Questions() {
     
    const {questions  , index ,setIndex , data , loading , page , setQuestions} = useGlobalContext()
    const [correct, setcorrect] = useState(0)
  
    useEffect(() => {
      if(loading) return
      console.log(data , page ) 

      setQuestions(data[page])
    } , [loading , page])


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

    const prevQuestion = () => {
       setIndex(oldIndex => oldIndex -1)
    }
   

    // const checkAnswer = (value) => {
    //    if(value) {
    //      setcorrect(oldState => oldState + 1)
    //    } 

    //    nextQuestion()
    // }
 

    useEffect(() => {
       setQuestions(data[page])
    } , [page , loading])


    // const { question, incorrect_answers, correct_answer } = questions[index]
    // let answers = [...incorrect_answers]
    // const tempIndex = Math.floor(Math.random() * 4) 
    // if (tempIndex === 3) {
    //   answers.push(correct_answer)
    // } else {
    //   answers.push(answers[tempIndex])
    //   answers[tempIndex] = correct_answer
    // }
   
  return (
    <>
     {/* <div className='question-container'>
        <section>
           <article>
              <h2 dangerouslySetInnerHTML={ { __html : question}}/>
              <div className="option-container">
                  {answers.map((answer , index) => {
                      return (
                        <label key={index} className="options">
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

           {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevQuestion}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className='next-btn' onClick={nextQuestion}>
              next
            </button>
          </div>
        )}
         
        </section>
    </div> */}
        { console.log(questions)}
    </>
   
  )
}

export default Questions