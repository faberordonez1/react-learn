export function fetchFrase () {
  const API_FRASES = 'https://catfact.ninja/fact'

  return fetch(API_FRASES).then(res => res.json()).then((resp) => {
    const [primeraPalabra] = resp.fact.split(' ')
    return primeraPalabra
  })
}
