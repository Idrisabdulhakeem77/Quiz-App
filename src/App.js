import React from 'react'
import Form from './components/Form/Form'
import Loading from './components/Loading/Loading'
import { useGlobalContext } from './context'
import Questions from './components/Questions/Questions'


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
     
     {!loading && (
          <div className='btn-container'>
            <button className='prev-btn'>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}

                >
                  {index + 1}{ console.log(data)}
                </button>
              )
            })}
            <button className='next-btn'>
              next
            </button>
          
          </div>
        )}
    </div>
  )
}

export default App