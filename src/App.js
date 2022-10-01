import React, { useEffect , useState } from 'react'
import axios from 'axios'
import paginate from './utils'
import Form from './components/Form/Form'
import Loading from './components/Loading/Loading'
import { useGlobalContext } from './context'
import Questions from './components/Questions/Questions'
import Results from './components/Results/Results'


function App() {
  
 const { loading , waiting , questions , page }  =    useGlobalContext()


 if(loading) {
   return <Loading/>
 }

 if(waiting) {
   return <Form/>
 }

return (

      <div>
            <Results/>
            <Questions/>
      </div>
  )
}

export default App