// let API = 'https://api.themoviedb.org/3/movie/550';
const API = 'https://api.themoviedb.org/3/search/collection'
const apiKey = 'e1ee3a585e3ff2efd9d0a990db15e813'

export async function getMovies (query) {
  return fetch(API + '?api_key=' + apiKey + '&query=' + query)
    .then((resp) => resp.json())
    .catch((error) => {
      console.error('Error:', error)
    })
}

export async function getUrlImg () {
  let URL_IMG = ''

  if (URL_IMG) return URL_IMG

  const API_CONFIG = 'https://api.themoviedb.org/3/configuration?api_key=' + apiKey
  return fetch(API_CONFIG)
    .then((resp) => resp.json())
    .then(({ images }) => {
      const baseUrl = images.secure_base_url
      const size = images.still_sizes[1]
      URL_IMG = baseUrl + size
      return URL_IMG
    })
    .catch(() => '')
}
