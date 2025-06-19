# React + Vite


# Enunciado

Crea una aplicación para buscar películas

API a usar: - https://www.omdbapi.com/
Consigue la API Key en la propia página web registrando tu email.

Requerimientos:

✅ Necesita mostrar un input para buscar la película y un botón para buscar.  
✅ Lista las películas y muestra el título, año y poster.  
✅ Que el formulario funcione.  
✅ Haz que las películas se muestren en un grid responsive.  
✅ Hacer el fetching de datos a la API  

Primera iteración:  
✅ Evitar que se haga la misma búsqueda dos veces seguidas.  
✅ Haz que la búsqueda se haga automáticamente al escribir.  
✅ Evita que se haga la búsqueda continuamente al escribir (debounce)  

## Framework CSS class less

* Water.css (Opcion a usar) se abre CDN y se copia el css
* Bolt.css

## Debunce con libreria just de angus

[just](https://github.com/angus-c/just)

```bash
npm install just-debounce-it
```
Uso
```js
import debounce from "just-debounce-it";

  /**  Para que se renderice solo una vez se crea con useCallback */
const debunceGetMovies = debounce(search => getNewMovies({ query: search }), 300)
```