import React, { useEffect , useState } from 'react'
import Question from './Question'
import { useFetch } from './useFetch'
// import Form from './components/Form/Form'
// import Loading from './components/Loading/Loading'
// import { useGlobalContext } from './context'
// import Questions from './components/Questions/Questions'


function App() {
   const { loading, data } = useFetch()
   const [page, setPage] = useState(0)
  const [questions, setQuestions] = useState([])
  const [index , setIndex] = useState(0)
//  const { loading , waiting , data , questions , page }  =    useGlobalContext()

//  if(loading) {
//    return <Loading/>
//  }

//  if(waiting) {
//    return <Form/>
//  }

useEffect(() => {
  if (loading) return
  setQuestions(data[page])
}, [loading, page])
 

const nextPage = () => {
  setPage((oldPage) => {
    let nextPage = oldPage + 1
    if (nextPage > data.length - 1) {
      nextPage = 0
    }
    return nextPage
  })
}
const prevPage = () => {
  setPage((oldPage) => {
    let prevPage = oldPage - 1
    if (prevPage < 0) {
      prevPage = data.length - 1
    }
    return prevPage
  })
}

const handlePage = (index) => {
  setPage(index)
}


const incorrect_answers = questions[0].incorrect_answers
let answers = [...incorrect_answers]
// const tempIndex = Math.floor(Math.random() * 4) 
// if (tempIndex === 3) {
//   answers.push(correct_answer)
// } else {
//   answers.push(answers[tempIndex])
//   answers[tempIndex] = correct_answer
// }


  return (
      //  <Questions/>
     <>
      { console.log(questions)}

      { questions.map( (question , index) => {
           return (
             <Question key={index} {...question} />
           )
      })}
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

{!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPage}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className='next-btn' onClick={nextPage}>
              next
            </button>
          </div>
        )}

        
     </>
    )
}

export default App