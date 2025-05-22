export default function CardMovie({movie}) {
  const URL_IMG = 'https://image.tmdb.org/t/p/w342';
  const {overview, poster_path, name} = movie;
  return (
    <div  className="movie">
      <img src={URL_IMG+poster_path} alt={name} />
      <h2>{name}</h2>
      <p>{overview}</p>
    </div>  )
}