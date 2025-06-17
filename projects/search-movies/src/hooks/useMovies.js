import { useState, useCallback, useRef, useMemo } from 'react'
import { getMovies } from '../service/api'

export function useMovies ({ query, error, sort }) {
  const [movies, setMovies] = useState([])
  const [errors, setErrors] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  /** Valor que persiste incluso entre renders */
  const previousQuery = useRef(query)

  const getNewMovies = async () => {
    console.log('get movies', query)

    if (previousQuery.current === query) return // control para no repetir mismo search

    previousQuery.current = query // Se actualiza el query
    try {
      setIsLoading(true)
      setErrors(null)
      const newMovies = await getMovies(query)
      setMovies(newMovies)
    } catch (e) {
      setErrors(e.message)
    } finally {
      setIsLoading(false)
    }
  }

  const sortedMovies = useMemo(() => {
    return sort ? [...movies].sort((a, b) => a.titulo.localeCompare(b.titulo)) : movies
  }, [sort, movies])

  return { movies: sortedMovies, getNewMovies, isLoading }
}
