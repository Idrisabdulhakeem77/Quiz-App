import React, { useEffect , useState } from 'react'
import axios from 'axios'
import paginate from './utils'
// import Form from './components/Form/Form'
// import Loading from './components/Loading/Loading'
// import { useGlobalContext } from './context'
// import Questions from './components/Questions/Questions'


function App() {
  
  const [data , setData] = useState([])
  const [index , setIndex] = useState(0)
  const [page , setPage ] = useState(0)
  const [questions , setQuestions ] = useState([])
  const [correct, setcorrect] = useState(0)
  const [loading , setLoading] = useState(false)
  const [waiting , setWaiting] = useState(true)
   const [error, setError] = useState(false)
  //  const [answers , setAnswer] = useState([])


   const fetchQuestion = async() => {
    setLoading(true)
        const response = await axios.get('https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple')
       
        const data = response.data.results

       setData(paginate(data))
       setLoading(false) 
   }
//  const { loading , waiting , data , questions , page }  =    useGlobalContext()

//  if(loading) {
//    return <Loading/>
//  }

//  if(waiting) {
//    return <Form/>
//  }

useEffect(() => {
   fetchQuestion()
} , [])

useEffect(( ) =>  {
    setQuestions(data[page])
}, [loading , page ])


const questionPaginated = questions?.map(q => {
  const {  incorrect_answers, correct_answer } = q 
  let answers = [...incorrect_answers]
  const tempIndex = Math.floor(Math.random() * 4) // returns a number within 0 to 4
  if (tempIndex === 3) {
    answers.push(correct_answer)
  } else {
    answers.push(answers[tempIndex])
    answers[tempIndex] = correct_answer
  }
    
   return {answers}
}

   
  // setAnswer(answers)
)

  

  return (
      //  <div>
      //    <Questions/>
      //  </div>

      <div>
          {questionPaginated &&  console.log(questionPaginated[index]) }
          {/* { console.log(answers.answers)} */}
          
      </div>
  )
}

export default App