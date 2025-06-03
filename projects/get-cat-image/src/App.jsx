import { useEffect, useState } from 'react'
import { fetchFrase } from './services/Api'
import './App.css'

export default function App () {
  const [palabra, setPalabra] = useState()
  const [urlImg, setUrlImage] = useState()

  const getFrase = async () => {
    const palabra = await fetchFrase()
    setPalabra(palabra)
  }

  useEffect(() => {
    getFrase()
  }, [])

  useEffect(() => {
    if (!palabra) return
    const getUrlApiImg = (fr) => 'https://cataas.com/cat/says/' + fr + '?json=true'

    fetch(getUrlApiImg(palabra))
      .then(resp => resp.json())
      .then(res => setUrlImage(res.url))
  }, [palabra])

  const handleClick = () => getFrase()

  return (
    <main>
      <button onClick={handleClick}> Refresh</button>
      <h3> {palabra}</h3>
      {urlImg && <img src={urlImg} alt='Imagen recomendada para la palabra' />}
    </main>
  )
}
