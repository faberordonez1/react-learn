
import './App.css'
import responseMovies from './result.json'
// import { getUrlImg } from './service/api';


function App() {

  let urlImage = 'https://image.tmdb.org/t/p/w342';

  // let API = 'https://api.themoviedb.org/3/movie/550';
  let API ='https://api.themoviedb.org/3/search/collection';
  let api_key ='e1ee3a585e3ff2efd9d0a990db15e813';
  let movies = responseMovies.results;  

  
  let URL_IMG=''
  let API_CONFIG = 'https://api.themoviedb.org/3/configuration?api_key='+api_key;
  fetch(API_CONFIG)
  .then((resp)=> resp.json())
  .then(({images}) => {
    let baseUrl = images.secure_base_url;
    let size =images.still_sizes[3];
    URL_IMG = baseUrl + size;
    movies = responseMovies.results;
  })
  .catch((error) => {
    console.error('Error:', error);
  }
  );


  fetch(API + '?api_key=' + api_key+ '&query=batman')
  .then((resp)=> resp.json())
  .then((json) => {
    console.log(json);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  

  return (
    <>
    <div >
      <h1>Search Movies</h1>
      <input type="text" placeholder="Search for a movie..." />
      <button>Search</button>
    </div>
    <div className= "App">
      {
         movies.map(movie =>{
          return (
            <div key={movie.id} className="movie">
              <img src={urlImage+movie.poster_path} alt={movie.name} />
              <h2>{movie.name}</h2>
              <p>{movie.overview}</p>
            </div>
          )
        })
      }

    </div>
    </>
  )
}

export default App
