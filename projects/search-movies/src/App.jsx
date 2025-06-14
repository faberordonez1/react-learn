import './App.css'
import CardMovie from './components/CardMovie'
import { useMovies } from './hooks/useMovies'
// import { useMovies2 } from './hooks/useMovies2'
import { useSearch } from './hooks/useSearch'

function App () {
  const { error, query, setQuery, inputRef } = useSearch()
  const { movies } = useMovies({ query })
  // const { movies, setQuery2 } = useMovies2({ query })

  /** Metodo por defecto, por si no se requiere validaciones haciendo uso del form
   * con react, EN ESTE CASO NO SE USA, en su lugar se hace a traver de handleChange
   */
  function searchMoviesOther (e) {
    e.preventDefault()
    const query = e.target[0].value // Op1 nativo html js
    const query2 = inputRef.current?.value// Op2 usando use ref
    const getQuery = (e) => {
      const fields = new FormData(e.target)
      // const fildsObj = Object.fromEntries(fields) // SI hay multiples campos pasa a Obj
      return fields.get('buscar')
    }
    const query3 = getQuery(e)// Op3 usando el form nativo html js recomendado
    console.log(query || query2 || query3)

    // setQuery2(query || query2 || query3)
  }

  function handleChange (e) {
    // Aqui se pueden realizar otros controles antes del effect
    setQuery(e.target.value)// Se amarra estado al efect para hacer validaciones
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscar Peliculas</h1>
        <form onSubmit={searchMoviesOther}>
          <input name='buscar' type='text' ref={inputRef} placeholder='Buscar Pelicula ...' onChange={handleChange} />
          <button>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <CardMovie movies={movies} />
      </main>
    </div>
  )
}

export default App
