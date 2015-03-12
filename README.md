#Bramework
####Un *framework* creado por Iván Barcia

###Índice
* [Información](#informacion)
    * [Presentación](#presentacion)
    * [Guía de estilo](#guia-de-estilo)
    * [Navegadores](#navegadores)
    * [Lenguajes de programación](#lenguajes-de-programacion)
    * [Librerías y herramientas externas](#librerias-y-herramientas-externas)
    * [Registro de cambios](#registro-de-cambios)
    * [Licencia](#licencia)
    * [Contribuír](#contribuir)
    * [Créditos](#creditos)
* [Arquitectura](#arquitectura)
* [Comandos de *Grunt*](#comandos-de-grunt)
* [Temas](#temas)
* [Utilidades](#utilidades)

##Información
###Presentación
**Bramework** es un *framework* para crear sitios web rápidamente. Está creado desde cero a partir de conocimientos propios, pero también adquiriendo ideas, conceptos o incluso trozos de código de otros *frameworks* y guías de estilo.

Realmente no está creado con el objetivo de ser un *framework* de uso general, de hecho estoy bastante en contra de utilizar *frameworks* genéricos, sinó que se trata de un proyecto personal y es por eso que está adaptado a mis necesidades y forma de trabajo. Aún así, está disponible para todo el mundo y mínimamente documentado, por si a alguien le puede resultar de utilidad.

El objetivo principal es dar una base para agilizar la creación de sitios web en HTML, aunque también inclúye los archivos básicos para adaptarlo fácilmente a la creación de temas para Wordpress. No sólo lo creo como base, sinó para experimentar y explorar todos los elementos posibles que existen en el desarrollo web (etiquetas, funciones, etc.)

Para los estilos utilizo el preprocesador [Less.js](http://lesscss.org/). Intento utilizar muchos [*mixings paramétricos*](http://lesscss.org/features/#mixins-feature), de forma que si no se utilizan no se compilen. Así, puedo añadir un número alto de estilos predefinidos, temas, etc. sin que eso signifique que aumenta el tamaño final del CSS, evitando compilar (en la medida de lo posible) código que no utilizaremos.

No se utilizan *grids* por decisión personal. Raramente encuentro utilidad a un *grid* predefinido, puesto que el tiempo que me llevaría adaptarlo a mi proyecto suele ser superior al que lleva crear esa interfaz desde cero, perfectamente adaptada a mis necesidades. Además, suelen estar construídos simplemente con `<div>`, algo que no es en absoluto semántico en HTML.

###Guía de estilo
Por normal general, se intentan utilizar sólo clases para los estilos CSS, y reservar los ID's para utilizar con JavaScript. Aún así, también solemos utilizar clases con JavaScript, para eso creamos una clase distinta con el prefijo `js-` que utilizaremos exclusivamente con JS.

Ejemplo
```
<div id="item4" class="card js-card">
    <h1>Title</h1>
    <p>Content</p>
</div>
```
Ciertos elementos, como por ejemplo los iconos, se introduccen con _data-* attributes_. Aunque por especificación no estén diseñados para eso, sinó para «almacenar datos personalizados privados a la página o aplicación», no están restringidos únicamente a ese uso.

###Navegadores
En el diseño web siempre intento utilizar y promover el uso de los últimos estándares. Es por eso que en éste *framework* no se garantiza ni se promueve dar soporte a navegadores web obsoletos o antiguos.

###Lenguajes de programación
* HTML
* CSS
* LESS
* JavaScript
* PHP

###Librerías y herramientas externas
* [Less.js](http://lesscss.org/)
* [Grunt.js](http://gruntjs.com/)
* [jQuery.js](http://jquery.com/)
* [Normalize.css](http://necolas.github.io/normalize.css/)
* [Material design icons](https://github.com/google/material-design-icons)

###Registro de cambios
Ver [registro de cambios](CHANGELOG.md).

###Licencia
Todo el código es software libre bajo una [licencia MIT](LICENSE.md) ([+info](http://es.wikipedia.org/wiki/Licencia_MIT)) excepto las librerías y herramientas externas, que tienen su propia licencia y podría no ser la misma.

###Contribuír
En [éste documento](CONTRIBUTING.md) tienes toda la información sobre como puedes contribuír.

###Créditos
Desarrollado por Iván Barcia en Galicia, España.

##Arquitectura
Puedes ver la arquitectura y directrices de los estilos en [web/src/css/less/ARCHITECTURE.md](web/src/css/less/ARCHITECTURE.md)

##Comandos de *Grunt*


##Temas
Son simplemente estilos predefinidos de algunos elementos que se pueden aplicar en forma de *mixings*.
Solamente serán compilados los elementos que se utilicen de cada tema, por lo que no es necesario eliminar los que no se utilicen.


##Utilidades
* StyleGuide.html
* Components.html
* Development.less
* mixing/helper.less