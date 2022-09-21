import React from 'react'
import { useGlobalContext } from '../../context'

function Questions() {
    const { setQuestions , data  , loading , questions} = useGlobalContext()

    if(loading) return
       setQuestions(data)
  return (
    <div>
        { console.log(questions)}
    </div>
  )
}

export default Questions