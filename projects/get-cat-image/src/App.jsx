import './App.css'
import { usePalabra } from './hooks/usePalabra'
import { useImg } from './hooks/useImg'
import Otro from './components/Otro'

export default function App () {
  const { palabra, actualizarPalabraRandom } = usePalabra()
  const { urlImg } = useImg({ palabra })

  return (
    <main>
      <button onClick={actualizarPalabraRandom}> Refresh</button>
      <h3> {palabra}</h3>
      {urlImg && <img src={urlImg} alt='Imagen recomendada para la palabra' />}
      <Otro />
    </main>
  )
}
