export default function CardMovie ({ movie }) {
  const { titulo, anio, poster } = movie
  return (
    <div className='movie'>
      <img src={poster} alt={titulo} />
      <h4>{titulo}</h4>
      <p>{anio}</p>
    </div>
  )
}
