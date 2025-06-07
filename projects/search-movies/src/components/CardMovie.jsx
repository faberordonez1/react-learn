export default function CardMovie ({ movies }) {
  const hayPelis = movies.length > 0

  function Pelis () {
    return (
      <>
        {movies.map(({ titulo, anio, poster, id }) =>
          <div className='movie' key={id}>
            <img src={poster} alt={titulo} />
            <h4>{titulo}</h4>
            <p>{anio}</p>
          </div>
        )}
      </>
    )
  }

  function SinResultados () {
    return <h4> Sin Resultados</h4>
  }

  return hayPelis ? <Pelis /> : <SinResultados />
}
