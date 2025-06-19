import { useState, useCallback } from 'react'
import './App.css'
import CardMovie from './components/CardMovie'
import { useMovies } from './hooks/useMovies'
// import { useMovies2 } from './hooks/useMovies2'
// import { getQueryNativo } from './service/utils'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { error, query, setQuery, inputRef } = useSearch()
  const { movies, getNewMovies, isLoading } = useMovies({ query, error, sort })
  // const { movies, setQuery2 } = useMovies2({ query })

  /** Metodo por defecto, por si no se requiere validaciones haciendo uso del form
   * con react, EN ESTE CASO NO SE USA, en su lugar se hace a traver de handleChange
   */
  function handleSubmit (e) {
    e.preventDefault()
    // getQueryNativo(e,inputRef)
    getNewMovies({ query })
  }

  /**  Para que se renderice solo una vez se crea con useCallback */
  const debunceGetMovies = useCallback(
    debounce(search => getNewMovies({ query: search }), 500)
    , [])

  function handleChange (e) {
    // Aqui se pueden realizar otros controles antes del effect
    const search = e.target.value
    setQuery(search)// Se amarra estado al efect para hacer validaciones
    debunceGetMovies(search)
  }

  function handleChecked () {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscar Peliculas</h1>
        <form onSubmit={handleSubmit}>
          {/* ref={inputRef} */}
          <input name='buscar' type='text' placeholder='Buscar Pelicula ...' value={query} onChange={handleChange} />
          <input type='checkbox' onChange={handleChecked} checked={sort} />
          <button>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {isLoading ? <p>Cargando...</p> : <CardMovie movies={movies} />}
      </main>
    </div>
  )
}

export default App
