import './App.css'
import responseMovies from './result.json'
import { useState } from 'react'
import { getMovies } from './service/api'
import CardMovie from './components/CardMovie'

function App () {
  const [movies, setMovies] = useState([])

  const urlImage = 'https://image.tmdb.org/t/p/w342'

  // let API = 'https://api.themoviedb.org/3/movie/550';
  const API = 'https://api.themoviedb.org/3/search/collection'
  const api_key = 'e1ee3a585e3ff2efd9d0a990db15e813'

  let URL_IMG = ''
  const API_CONFIG = 'https://api.themoviedb.org/3/configuration?api_key=' + api_key
  fetch(API_CONFIG)
    .then((resp) => resp.json())
    .then(({ images }) => {
      const baseUrl = images.secure_base_url
      const size = images.still_sizes[3]
      URL_IMG = baseUrl + size
    // movies = responseMovies.results;
    })
    .catch((error) => {
      console.error('Error:', error)
    }
    )

  // fetch(API + '?api_key=' + api_key+ '&query=batman')
  // .then((resp)=> resp.json())
  // .then((json) => {
  //   console.log(json);
  // })
  // .catch((error) => {
  //   console.error('Error:', error);
  // });

  async function searchMovies (e) {
    e.preventDefault()
    const query = e.target[0].value
    if (!query) return

    const newMOvies = await getMovies(query)
    // console.log('new MOvies',newMOvies);
    // newMOvies = responseMovies.results;

    setMovies(newMOvies.results)
  }

  return (
    <main className='container'>
      <form onSubmit={(e) => { searchMovies(e) }}>
        <h1>Search Movies</h1>
        <input type='text' placeholder='Search for a movie...' />
        <button>Search</button>
      </form>
      <div className='App'>
        {
          movies.map(movie => movie?.poster_path && <CardMovie movie={movie} key={movie.id} />)
        }

      </div>
    </main>
  )
}

export default App
