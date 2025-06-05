# Proyectos
[Start Project](/projects/start/)
* Implimentación inicial y pruebas

[hola Mundo](/projects/00-hola-mundo/) 
* Props 
* Use State

[Ball Hover](/projects/ball-hover/)
* Use Effects con event listener

[get cat image](/projects/get-cat-image/)
* Custom Hooks
* Uso custom hook en otro componente
* Use State
* Use Effects

[Triki](/projects/triki/)
* Juego Triki
* Use State

[Search Movies](/projects/search-movies/)
* Use State

# Iniciar nuevo proyecto con Vite

Posicionarse en la carpeta project y ejecutar

```bash
npm create vite@latest
```
* Solicitara el nombre del proyecto 

# React ⚛️

* Componentes deben ser en PascalCase
* properties y css en linea en camelCase

## Use State
* Los estados nunca se deben mutar

## Use Efect
**Dependencias**  Array con las variables que si cambian, se debe ejecutar el useEffect

* Dentro de un condicional no meter un hook (el hook siempre esta a nivel ppal), dentro de un hook si se puede meter un condicional

```jsx
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