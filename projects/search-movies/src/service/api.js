const PATH = 'https://api.themoviedb.org/3/'
const apiKey = 'e1ee3a585e3ff2efd9d0a990db15e813'
const keyParam = '?api_key=' + apiKey
let pathURLImg = ''

export function fetchMovies (query) {
  const url = PATH + 'search/collection' + keyParam
  return fetch(url + '&query=' + query)
    .then((resp) => resp.json())
    .catch((error) => console.error('Error:', error))
}

export function getUrlImg () {
  if (pathURLImg) return pathURLImg

  return fetch(PATH + 'configuration' + keyParam)
    .then((resp) => resp.json())
    .then(({ images }) => {
      const baseUrl = images.secure_base_url
      const size = images.still_sizes[2] // images.still_sizes[3]
      pathURLImg = baseUrl + size

      return pathURLImg
    })
    .catch((e) => console.error('Error al obtener URL:', e))
}

export async function getMovies (query) {
  if (!query) return []

  const pathURLImg = await getUrlImg()
  const { results } = await fetchMovies(query)
  return results
    .filter(mov => mov.poster_path)
    .map(m => ({
      id: m.id,
      titulo: m.name,
      anio: 2025,
      poster: pathURLImg + m.poster_path
    }))
}
