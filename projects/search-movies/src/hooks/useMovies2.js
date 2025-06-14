import { useEffect, useState } from 'react'
import { getMovies } from './../service/api'

export function useMovies2 () {
  const [movies, setMovies2] = useState([])
  const [query, setQuery2] = useState(null)

  useEffect(() => {
    if (!query) return

    const getNewMovies = async () => {
      const newMOvies = await getMovies(query)
      setMovies2(newMOvies)
    }
    getNewMovies()
  }, [query])

  return { movies, setQuery2 }
}
