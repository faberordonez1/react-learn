export function getQueryNativo (e, inputRef) {
  const query = e.target[0].value // Op1 nativo html js
  const query2 = inputRef.current?.value// Op2 usando use ref
  const getQuery = (e) => {
    const fields = new FormData(e.target)
    // const fildsObj = Object.fromEntries(fields) // SI hay multiples campos pasa a Obj
    return fields.get('buscar')
  }
  const query3 = getQuery(e)// Op3 usando el form nativo html js recomendado
  return query || query2 || query3
}
