import { useState, useEffect } from 'react'


function useFetchData(url) {

  const [ data, setData ] = useState(null)
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try{
        const response = await fetch(url)
        const jsonData = await response.json()
        setData(jsonData)

      } catch(error){
        setError(error)

      } finally{
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return {data, loading, error}
}

export default useFetchData