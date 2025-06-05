import { useImg } from '../hooks/useImg'

export default function Otro () {
  const { urlImg } = useImg({ palabra: 'gato' })
  return (
    <>
      {urlImg && <img src={urlImg} alt='Imagen recomendada para la palabra gato' />}
    </>
  )
}
