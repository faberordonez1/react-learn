import { useEffect, useState } from 'react'
import { getMovies } from '../service/api'

export function useMovies ({ query }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getNewMovies = async () => {
      const newMovies = await getMovies(query)
      setMovies(newMovies)
    }

    getNewMovies()
  }, [query])

  return { movies }
}
