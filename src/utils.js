const paginate = (questions) => {
    const itemsPerPage = 1
    const numberOfPages = Math.ceil(questions.length / itemsPerPage)
  
    const newQuestions = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage
      console.log(start)
      return questions.slice(start, start + itemsPerPage)
    })
  
    return newQuestions
  }
  
  export default paginate
  
  
  