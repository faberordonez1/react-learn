# Iniciar nuevo proyecto con Vite

Posicionarse en la carpeta project y ejecutar

```bash
npm create vite@latest
```
* Solicitara el nombre del proyecto 

# React

* Componentes deben ser en PascalCase
* properties y css en linea en camelCase
* Los estados nunca se deben mutar

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
