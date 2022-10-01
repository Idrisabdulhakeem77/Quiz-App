import React , { useState , useEffect , useContext} from "react";
import axios from 'axios'


const AppContext = React.createContext()

const API_ENDPOINT = 'https://opentdb.com/api.php?'


const table = {
     Vehicles: 28,
     Celebrities: 26,
     Animals: 27,
   }


const AppProvider = ({ children}) => {
     const [loading , setLoading] = useState(false)
     const [waiting , setWaiting] = useState(true)
     const [questions, setQuestions] = useState([])
      const [index, setIndex] = useState(0)
     const [error , setError] = useState()
     const [correct, setCorrect] = useState(0)
     const [quiz, setQuiz] = useState({
          amount: 10,
          category: 'Vehicles',
          difficulty: 'easy',
          type : "multiple"
        })
     const [isshowResult , setShowResult] = useState(false)
const fetchQuestion =  async (url) => {
     setLoading(true)
     setShowResult(false)
      const response = await axios.get(url)
       if (response) {
          const data = response.data.results
            if (data.length > 0) {
                 setQuestions(data)
                 setLoading(false)
                 setWaiting(false)
                 setError(false)
               } else {
                 setWaiting(true)
                 setError(true)
               }
             } else {
               setWaiting(true)
             }
 }


 const  showResult = ()  => {
      setShowResult(true)
 }

 const closeShowResult = () => {
      setShowResult(false)
 }
 

 const handleChange = (e) => {
          const name = e.target.name
          const value = e.target.value
          setQuiz({ ...quiz, [name]: value })
 }
const playAgain = () => {
      setWaiting(true)
      setCorrect(0)
      showResult(false)
}
 const nextQuestion = () => {
     setIndex((oldIndex) => {
       const index = oldIndex + 1
       if (index > questions.length - 1) {
          showResult()
         return 0
       } else {
         return index
       }
     })
   }

   const checkAnswer = (value) => {
     if (value) {
       setCorrect((oldState) => oldState + 1)
     }
     nextQuestion()
   }

        const handleSubmit =(e) => {
           e.preventDefault() 

           const { amount , category ,  difficulty   } = quiz 
            
          let type = quiz.type
           
           console.log(type)
           const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=${type === "True/False" ? "boolean" : "multiple"}`

         
           fetchQuestion(url)
        }
 
     return <AppContext.Provider value={{ handleChange , quiz , handleSubmit ,loading , waiting ,  setQuestions , questions ,index  , setIndex , checkAnswer  , showResult , closeShowResult  , nextQuestion , correct  , isshowResult , playAgain   } }> { children} </AppContext.Provider>
}

const useGlobalContext = () => {
     return useContext(AppContext)
}

export { AppProvider , useGlobalContext }