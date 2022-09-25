import { useState, useEffect } from 'react'
import axios from 'axios'
import paginate from './utils'
const url = "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple"

export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getProducts = async () => {
     const response = await axios.get(url)
     const data = response.data.results

    setData(paginate(data))
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return { loading, data }
}
