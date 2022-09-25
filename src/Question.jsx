import React from 'react'

function Question({ question ,correct_answer ,incorrect_answers }) {
  return (
    
    <div>
        <h2  dangerouslySetInnerHTML={{__html: question}}/>   
        { console.log(correct_answer , incorrect_answers)}
        
    </div>
  )
}

export default Question