import { useState, useCallback, useRef, useMemo } from 'react'
import { getMovies } from '../service/api'

export function useMovies ({ query, error, sort }) {
  const [movies, setMovies] = useState([])
  const [errors, setErrors] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  /** Valor que persiste incluso entre renders con Hook useRef */
  const previousQuery = useRef(query)

  /** Se crea funcion con usecallback, para que solo se renderice la primera vez  */
  const getNewMovies = useCallback(async ({ query }) => {
    if (previousQuery.current === query) return // control para no repetir mismo search

    try {
      setIsLoading(true)
      setErrors(null)
      previousQuery.current = query // Se actualiza el valor del hook con query
      const newMovies = await getMovies(query)
      setMovies(newMovies)
    } catch (e) {
      setErrors(e.message)
    } finally {
      setIsLoading(false)
    }
  }, [])

  /** Se organizan las movies siempre y cuando cambien las dependencias con useMemo */
  const sortedMovies = useMemo(() => {
    return sort ? [...movies].sort((a, b) => a.titulo.localeCompare(b.titulo)) : movies
  }, [sort, movies])

  return { movies: sortedMovies, getNewMovies, isLoading }
}
