import { useEffect, useState } from 'react'
import { getFrase } from './services/Api'
import './App.css'

export default function App () {
  const [palabra, setPalabra] = useState()
  const [urlImg, setUrlImage] = useState()

  useEffect(() => {
    getFrase().then((primeraPalabra) => setPalabra(primeraPalabra))
  }, [])

  useEffect(() => {
    if (!palabra) return
    const getUrlApiImg = (fr) => 'https://cataas.com/cat/says/' + fr + '?json=true'

    fetch(getUrlApiImg(palabra))
      .then(resp => resp.json())
      .then(res => setUrlImage(res.url))
  }, [palabra])

  const handleClick = () => {
    console.log('click')
  }

  return (
    <main>
      <button onClick={handleClick}> Refresh</button>
      <h3> {palabra}</h3>
      {urlImg && <img src={urlImg} alt='Imagen recomendada para la palabra' />}
    </main>
  )
}
