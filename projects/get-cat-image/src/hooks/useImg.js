import { useEffect, useState } from 'react'
/**
 * Custom hook para hacer el fetch de la imagen de un gato de acuerdo a la palabra recibida.
 *
 * @export
 * @param {*} { palabra } Palabra que se usará para buscar la imagen del gato en la API.
 * @return {*}{ urlImg }
 * @description Este hook recibe una palabra y realiza una petición a la API de Cataas para obtener una imagen de un gato que diga esa palabra.
 * Si la palabra es válida, se construye la URL de la imagen y se guarda en el estado `urlImg` que posteriormente se exporta.
 * Si la palabra es inválida o no se proporciona, no se realiza ninguna petición y `urlImg` permanece indefinido.
 */
export function useImg ({ palabra }) {
  const [urlImg, setUrlImage] = useState()

  useEffect(() => {
    if (!palabra) return
    const getUrlApiImg = (fr) => 'https://cataas.com/cat/says/' + fr + '?json=true'

    fetch(getUrlApiImg(palabra))
      .then(resp => resp.json())
      .then(res => setUrlImage(res.url))
  }, [palabra])

  return { urlImg }
}
