import React , {useEffect , useState } from 'react'
import './form.css'
import { useGlobalContext  } from '../../context'




function Form() {
    const { handleChange , quiz  , handleSubmit } = useGlobalContext()

    




  return (
    <main>
         <section className='quiz quiz-small'>
             <form className='form'>
                 <h2>Quiz App</h2>
                <div className='form-control'>
              <label htmlFor='amount'>Choose number of questions</label>
              <input
              value={quiz.amount}
               onChange={handleChange}
              type='number'
              name='amount'
              id='amount'
              className='form-input'
              min={1}
              max={50}
            />
          </div>

          <div className='form-control'>
              <label htmlFor='categories'>Select Category </label>
              <select
              name='category'
              id='category'
              className='form-input'
              value={quiz.categories}
              onChange={handleChange}
  
  
            >
              <option value='Vehicles'>Vehicles</option>
              <option value='Celebrities'>Celebrities</option>
              <option value='Animals'>Animals</option>
                </select>
          </div>

          <div className='form-control'>
            <label htmlFor='difficulty'>select difficulty</label>
            <select
              name='difficulty'
              id='difficulty'
              className='form-input'
               value={quiz.difficulty}
               onChange={handleChange}
        
            >
              <option value='easy'>easy</option>
              <option value='medium'>medium</option>
              <option value='hard'>hard</option>
            </select>
          </div> 

          <div className='form-control'>
             <label htmlFor='type'> Select Type:</label>
             <select name='type' id='type' className='form-input' value={quiz.type}   onChange={handleChange} >
               <option value= 'Multiple Choice'>Multiple Choice</option>
               <option value="True/False">True/False</option>
             </select>
          </div>

          <button type='submit'  className='submit-btn' onClick={handleSubmit}>
            start
          </button>
             </form>
         </section>
    </main>
   
  )
}

export default Form