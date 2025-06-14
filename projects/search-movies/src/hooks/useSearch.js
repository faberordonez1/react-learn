import { useEffect, useState, useRef } from 'react'

export function useSearch () {
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')// Ideal para validar forms
  const inputRef = useRef(true) // Genera refencia a un componente HTML(no obligatorio HTML)
  // y persiste entre renders por default en true para validaciones« en usseefect

  useEffect(() => {
    // Controla el set error en el render inicial
    if (inputRef.current) {
      inputRef.current = query === ''// Cambia el valor de ref al primer cambio del query
      return
    }
    if (query === '') {
      setError('No se puede realizar consulta con campos vacios')
      return
    }

    if (query.length < 3) {
      setError('Las busquedas deben tener más de 3 caracteres')
      return
    }

    setError(null)
  }, [query])

  return { error, query, setQuery, inputRef }
}
