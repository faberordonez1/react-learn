import { useState, useEffect } from 'react'
import { fetchFrase } from '../services/fetchFrase'

/**
 * Custom hook para obtener una palabra aleatoria de una API y setearla en el estado palabra.
 *
 * @return {{ palabra, actualizarPalabraRandom }}
 * @description Este hook hace un fetch a una API para obtener una palabra aleatoria y la almacena en el estado `palabra`, que posteriormente
 * se exporta junto con una función `actualizarPalabraRandom` que permite actualizar la palabra aleatoria manualmente.
 */
export function usePalabra () {
  const [palabra, setPalabra] = useState()

  /** Obtiene la palabra aleatoria y actuaiza el estado */
  const actualizarPalabraRandom = () => {
    fetchFrase().then(p => setPalabra(p))
  }

  /** Efecto para hacer fetch y actualizar la palabra, se saca el metodo actualizarPalabraRandom para poder exportarlo */
  useEffect(actualizarPalabraRandom, [])
  return { palabra, actualizarPalabraRandom }
}
