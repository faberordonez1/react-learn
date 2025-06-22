# Proyectos
[Start Project](/projects/start/)
* Implimentación inicial y pruebas

[hola Mundo](/projects/00-hola-mundo/) 
* Props 
* Use State
* Property childen

[Ball Hover](/projects/ball-hover/)
* Use Effects con event listener

[get cat image](/projects/get-cat-image/)
* Custom Hooks
* Uso custom hook en otro componente
* Use State
* Use Effects
* Test con Playwrite

[Triki](/projects/triki/)
* Juego Triki
* Use State

[Search Movies](/projects/search-movies/)
* Use State
* Use Ref
* Use Callback
* Use Memo

# MonoRepo
 Se crea un repositorio monorepo multipaquete para crear multiples proyectos

 ```bash
 npm init y //incializa el repositorio 
 ```

 Se crea una carpeta projects y se ingresa a la carpeta
  ```bash
  mkdir projects
  cd projects
 ```

 Se debe ejecutar el comando para crear el nuvo proyecto con vite
```bash
npm create vite@latest
```

# Iniciar nuevo proyecto con Vite

Posicionarse en la carpeta project y ejecutar

```bash
npm create vite@latest
```
* Solicitara el nombre del proyecto 

# React ⚛️

* Componentes deben ser en PascalCase
* properties y css en linea en camelCase

## Property Chlidren
* Se usa para proyectar contenido de un padre a un hijo
```jsx
//Padre
export default function App () {
  const users = [{ userName: 'kikobeats', name: 'Kiko Beats',}]
  
  return (
    <div>
      {users.map(({ userName, name}) => (
        <FollowCard key={userName} userName={userName}>
            {name}
        </FollowCard>
      ))}
    </div>
  )
```

```jsx
// Hijo
export default function FollowCard ({ userName,  children }) {
   return (
      <div className='tw-followCard-info'>
          <strong>{children}</strong>{/* Contenido proyectado desde el padre */}
          <span className='tw-followCard-infoUserName'>@{userName}</span>
      </div>
  )
}
```


## Hook Use State
* Los estados nunca se deben mutar

```jsx
const [isFollowing, setIsFollowing] = useState(initialFollowing)

function handleClick () {
    setIsFollowing(!isFollowing)
}

const text = isFollowing ? 'Siguiendo' : 'Seguir'
<span className='tw-followCard-text'>{text}</span>}
```

## Hook Use Efect
**Dependencias**  Array con las variables que si cambian, se debe ejecutar el useEffect

* Dentro de un condicional no meter un hook (el hook siempre esta a nivel ppal), dentro de un hook si se puede meter un condicional

```jsx
  /** useEffect: Se ejecuta en los siguientes casos
   * 1. Al renderizar el componente por primera vez(en dev se ejecuta 2 veces, por el modo estricto que ejecuta cleanup )
   * 2. Al cambiar el valor de las dependencias
   */
  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e
      setPosition({ x: clientX, y: clientY })
    }

    if (enable) {
      /* La escucha de eventos siempre debe ir dentro del useEffect, para evitar que se ejecute c/vez
      renderiza el componente */
      window.addEventListener('mousemove', handleMove)
    }

    /** Limpiar Efecto: Se ejecuta al eliminar el componente, al cambiar el valor de las dependencias
     o al ejecutar el ussefect de nuevo    */
    return () => {
      window.removeEventListener('mousemove', handleMove)
    }
  }, [enable])
  // [] -> solo se ejecuta una vez cuando se monta el componente
  // [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined -> se ejecuta cada vez que se renderiza el componente
```

## Hook Use Memo 
```jsx
/** Se organizan las movies siempre y cuando cambien las dependencias con useMemo */
const sortedMovies = useMemo(() => {
  return sort ? [...movies].sort((a, b) => a.titulo.localeCompare(b.titulo)) : movies
}, [sort, movies])
```

## Hook Use Ref
```jsx
 /** Valor que persiste incluso entre renders con Hook useRef */
  const previousQuery = useRef(query)

  previousQuery.current = query // Se actualiza el valor del hook con el nuevo valor de query
```

## Hook Use Callback

```jsx
/**  Para que la función solo se renderice una vez, incluso si el 
 * componente se renderiza multiples veces se crea con useCallback */
const debunceGetMovies = useCallback(
    debounce(search => getNewMovies({ query: search }), 500)
    , [])
```

# Suscripciones de Eventos en navegador
getEventListeners(window);


# Confetti

```bash
 npm i canvas-confetti -E
 ```


```js
import confetti from 'canvas-confetti'
confetti()
```

# Linter Standard
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


```bash
 npm install standard -D
 ```
* Add in Packaje.json

```json
"scripts": {
    // Otros scripts
    "lint": "standard",
    "lint-standard": "standard",
    "lint-standard-fix": "standard --fix"
  },

 "eslintConfig": {
    "extends":"./node_modules/standard/eslintrc.json"
  },
  "standard": {
    "ignore": [
      "eslint.config.js"
    ]
  }
```

`eslint.ignore`
```
eslint.config.js
vite.config.js
node_modules
package-lock.json
dist
```

`setting vscode`
```json
"eslint.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "eslint.workingDirectories": [
    "."
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.format.enable": true,
  "javascript.format.enable": false,
  "typescript.format.enable": false
```

# Netlify drop
[Netlify drop](https://app.netlify.com/drop)

# Implementar React con vite

* [Intalar Plugin en Vite y crear  vite.config](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react-swc)
* [Instalar react react-dom y configurar punto de entrada](https://es.react.dev/learn/add-react-to-an-existing-project)
* [NPM react](https://www.npmjs.com/package/react)

# Testing con Playwright

```bash
npm init playwright@latest
```
Ver si pasan los test
```bash
npx playwright test
```

# Framework CSS class less

* Water.css (Opcion a usar) se abre CDN y se copia el css
* Bolt.css

# Debunce con libreria just de angus

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