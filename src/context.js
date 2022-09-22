import React , { useState , useEffect , useContext} from "react";
import axios from 'axios'
import paginate from "./utils";


const AppContext = React.createContext()

const API_ENDPOINT = 'https://opentdb.com/api.php?'


const table = {
     Vehicles: 28,
     Celebrities: 26,
     Animals: 27,
   }


const AppProvider = ({ children}) => {
     const [loading , setLoading] = useState(false)
     const [data , setData ] = useState([])
     const [waiting , setWaiting] = useState(true)
     const [questions, setQuestions] = useState([])
     const [page , setPage] = useState(0)
     const [index, setIndex] = useState(0)
     const [correct, setCorrect] = useState(0)
     const [error, setError] = useState(false)
     const [quiz, setQuiz] = useState({
          amount: 10,
          category: 'Vehicles',
          difficulty: 'easy',
          type : "multiple"
        })
     
         const fetchQuestion =  async (url) => {
          try { 
               setLoading(true)

               const response = await axios.get(url)
               const data = response.data.results
               
               setWaiting(false)
               setLoading(false)
               setQuestions(data)
               setData(paginate(data))
               console.log(questions)
               

          } catch(err) {
               console.log(err)
          }
            
         }

        const handleChange = (e) => {
          const name = e.target.name
          const value = e.target.value
          setQuiz({ ...quiz, [name]: value })
        }


        const handleSubmit =(e) => {
           e.preventDefault() 

           const { amount , category ,  difficulty , type  } = quiz 
           console.log(quiz)

           const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`

         

           fetchQuestion(url)
        }

     return <AppContext.Provider value={{ handleChange , quiz , handleSubmit ,loading , waiting ,  page , setQuestions , questions ,index  , setIndex , data } }> { children} </AppContext.Provider>
}

const useGlobalContext = () => {
     return useContext(AppContext)
}

export { AppProvider , useGlobalContext }