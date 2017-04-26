[![All Contributors](https://img.shields.io/badge/all_contributors-3-blue.svg?style=flat-square)](#contributors)
[![Build Status](https://travis-ci.org/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-aitor-nestor-omar-35l2v3-1.svg?branch=master)](https://travis-ci.org/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-aitor-nestor-omar-35l2v3-1)

# Práctica: Creación de paquetes npm
Repositorio para el módulo npm de la figura geométrica "square" (aitor-nestor-omar)

Enlace a la [práctica](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicamodulestrategypattern.html)

### Creación del paquete npm Shape
Para poder crear paquetes y poder subirlos a [npm](https://www.npmjs.com/), debemos darnos de alta en la plataforma. Es recomendable logearse con el mismo ID de [GitHub](https://github.com/).

* Una vez tengamos el código de la aplicación que queramos subir en forma de paquete funcionando correctamente y testeado, comprobaremos que nuestro ```package.json```esté completo.
```json
"name": "@aitor-nestor-omar/ull-shape",
"version": "1.0.0",
"description": "Repositorio para el módulo npm de shape (aitor-nestor-omar)",
``` 
* Nos logeamos con nuestra cuenta ```npm``` en nuestra terminal (sólo es necesario una vez por sesión)
```shell
$ npm adduser
```
* Para publicar el paquete, realizamos el siguiente comando dentro del repositorio donde tengamos el código del paquete que queremos subir.
```shell
$ npm publish --access=public
```
* Accedemos a nuestra cuenta de ```npm``` y observamos que nuestro paquete se ha subido correctamente.

### Uso de documentation.js
[Documentation.js](http://documentation.js.org/) es una herramienta generadora de documentación para JavaScript, con sintáxis [JSDoc](http://usejsdoc.org/).

* Para hacer uso de esta herramienta, debemos instalarla en nuestra máquina de forma global a través del siguiente comando:
```shell
$ npm install -g documentation
```
* Una vez instalada, debemos especificar de dónde se cogeran los comentarios a convertir en documentación vía HTML y dónde se guardarán los archivos de la documentación. Para ello, lo especificamos de la siguiente forma en el ```package.json```:
```json
"scripts": {
    "doc": "documentation build ./lib/square.js -f html -o docs"
  },
```
* Para finalizar, realizaremos el siguiente comando para que la herramienta pueda coger estos comentarios y convertirlos en documentación web:
```shell
$ npm run doc
```
* Para ver la documentación, accederemos a los ```Settings``` del repositorio, al apartado de ```GitHub Pages``` y le diremos que el ```Source``` viene de ```master branch /docs folder```, guardamos y se desplegará nuestra documentación realizada con ```documentation.js``` en ```GitHub Pages```.

![documentation.js en GH Pages](http://i.imgur.com/5MfhFJJ.png)

* Enlace a la documentación en [GH Pages](https://ull-esit-dsi-1617.github.io/creacion-de-paquetes-npm-aitor-nestor-omar-35l2v3-1/)

### Autores de la práctica
* [Aitor Bernal Falcón](https://chinegua.github.io/)
* [Néstor García Moreno](https://nestor-gm.github.io/)
* [Omar Mendo Mesa](https://ozzrocker95.github.io/)
