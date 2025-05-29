export default function CardMovie ({ movie }) {
  const URL_IMG = 'https://image.tmdb.org/t/p/w342'
  const { poster_path, name } = movie
  return (
    <div className='movie'>
      <img src={URL_IMG + poster_path} alt={name} />
      <br />
      <h4>{name}</h4>
    </div>
  )
}
