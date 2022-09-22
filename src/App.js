import React from 'react'
import Form from './components/Form/Form'
import Loading from './components/Loading/Loading'
import { useGlobalContext } from './context'
import Questions from './components/Questions/Questions'
import Counter from './components/Timer/Timer'


function App() {
 const { loading , waiting , data , questions , page }  =    useGlobalContext()

 if(loading) {
   return <Loading/>
 }

 if(waiting) {
   return <Form/>
 }

  
   
  return (
    <div>
       <Questions/>
       <Counter/>
    </div>
  )
}

export default App