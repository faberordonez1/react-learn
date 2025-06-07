import './App.css'
import { useEffect, useState } from 'react'
import { getMovies, getUrlImg } from './service/api'
import CardMovie from './components/CardMovie'

function App () {
  const [movies, setMovies] = useState([])

  async function searchMovies (e) {
    e.preventDefault()
    const query = e.target[0].value
    if (!query) return

    const newMOvies = await getMovies(query)
    setMovies(newMOvies)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscar Peliculas</h1>
        <form onSubmit={(e) => { searchMovies(e) }}>
          <input type='text' placeholder='Buscar Pelicula ...' />
          <button>Buscar</button>
        </form>
      </header>
      <main>
        {
          movies.map(movie => <CardMovie movie={movie} key={movie.id} />)
        }

      </main>
    </div>
  )
}

export default App
