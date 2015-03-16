#Bramework

* [Presentación](#presentaci%C3%B3n)
* [Descripción](#descripci%C3%B3n)
* [Guía de estilo](#gu%C3%ADa-de-estilo)
* [Funcionamiento](#funcionamiento)
    * [Navegadores](#navegadores)
    * [Lenguajes](#lenguajes)
    * [Librerías externas](#librer%C3%ADas-y-herramientas-externas)
    * [Directorios y archivos adjuntos](#directorios-y-archivos-adjuntos)
* [Arquitectura](#arquitectura)
* [*Grunt*](#grunt)
* [Registro de Cambios](#registro-de-cambios)
* [Contribuír](#contribu%C3%ADr)
* [Licencia](#licencia)
* [Créditos](#cr%C3%A9ditos)

##Presentación
**Bramework** es un *framework* para crear sitios web.

* Autor: [Iván Barcia](http://ivanbarcia.eu)
* Version: 0.1-ALPHA
* Trello: https://trello.com/b/IzLg4nk4
* Comunidad: [Google+](https://plus.google.com/communities/104938291205143609131/stream/957ba9b5-234b-4260-a6e7-f6a8ab29a7a3)

##Descripción
**Bramework** realmente no está creado con el objetivo de ser un *framework* de uso general, de hecho estoy bastante en contra de utilizar *frameworks* «genéricos», sinó que se trata de un proyecto personal y es por eso que está adaptado a mis necesidades y forma de trabajo. Aún así, está disponible para todo el mundo y mínimamente documentado, por si a alguien le puede resultar de utilidad.

El objetivo principal es tener una base para agilizar la creación de sitios web en HTML y CSS, aunque también incluye los archivos básicos para adaptarlo fácilmente a la creación de temas para algunos CMS. Pero no sólo me sirve como base para mis proyectos, sinó como un lugar donde  explorar y experimentar en torno a todo lo relacionado con el desarrollo web.

Está creado desde cero a partir de conocimientos propios, pero adquiriendo ideas, conceptos o incluso pequeños trozos de código de otros *frameworks*. Tampoco sigue ninguna tendencia o guía de estilo en concreto, pero después de leer y estudiar algunas, puede tener influencias o conceptos de varias como pueden ser [BEM](https://en.bem.info/), [SMACSS](https://smacss.com/), [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/), [OOCSS](http://oocss.org/), [KISS](http://es.wikipedia.org/wiki/Principio_KISS), etc.

No se utilizan *grids* por decisión personal. Raramente encuentro utilidad a un *grid* predefinido, puesto que el tiempo que me llevaría adaptarlo a mi proyecto suele ser superior al que lleva crear esa interfaz desde cero, perfectamente adaptada a mis necesidades. Además, suelen estar construídos simplemente con `<div>`, algo que puede resultar en un HTML poco semántico.

Puedes seguir el desarrollo de éste *framework* en su [repositorio de Github](https://github.com/barcia/bramework), pero también utilizo continuamente un [tablón de Trello](https://trello.com/b/IzLg4nk4) público donde hay muchas explicaciones de ciertos elementos, una hoja de ruta, un registro de los errores detectados o mejoras en proceso, y muchas mas cosas interesantes. Además, también hay una [comunidad en Google+](https://plus.google.com/communities/104938291205143609131/stream/957ba9b5-234b-4260-a6e7-f6a8ab29a7a3) donde puedes dejar comentarios, preguntar dudas, ayudar a otras personas, etc.

##Guía de Estilo
Por normal general intento utilizar sólo clases para los estilos CSS, y reservar los ID's para utilizar con JavaScript. Aún así, como también solemos utilizar clases con JavaScript, añado a éstas una clase distinta con el prefijo `js-` que utilizaremos exclusivamente con JS. Así, utilizando clases exclusivamente con CSS o con JS será más complicado que cometamos errores y más sencillo identificar la función de cada clase.

Ejemplo:

```html
<div id="item4" class="card js-card">
  <h1>Title</h1>
  <p>Content</p>
</div>
```
Ciertos elementos, como por ejemplo los iconos, se introduccen con _data-* attributes_. Aunque por especificación no estén diseñados para eso, sinó para «almacenar datos personalizados privados a la página o aplicación», no están restringidos únicamente a ese uso.

##Funcionamiento

###Navegadores
En el diseño web siempre intento estudiar y utilizar los últimos estándares. Es por eso que en éste *framework* no garantiza el soporte a navegadores web obsoletos o antiguos.

###Lenguajes
* HTML
* CSS (Con el preprocesador LESS)
* JavaScript

###Librerías y herramientas externas
* [Less.js](http://lesscss.org/)
* [Grunt.js](http://gruntjs.com/)
* [Git](http://git-scm.com/)
* [Normalize.css](http://necolas.github.io/normalize.css/)
* [Material design icons](https://github.com/google/material-design-icons)

###Directorios y archivos adjuntos
* **README.md:** Archivo en formato *Markdown* que contiene toda la información del proyecto.
* **LICENSE.md:** Archivo en formato *Markdown* que define el tipo de licencia.
* **CONTRIBUTING.md:** Archivo en formato *Markdown* que especifica las formas en las que puedes colaborar con el proyecto.
* **CHANGELOG.md:** Archivo en formato *Markdown* que registra los cambios de cada versión.
* **web/:** Directorio que contiene todo el código.
  * **index.html:** Página de inicio. Es un HTML base completamente preconfigurado.
  * **styleguide.html:** Contiene los elementos mas importantes de HTML para comprobar como se ven con los estilos del sitio.
  * **components.html:** Un documento que contiene la mayoría de los componentes del sitio (tarjetas, mensajes, etc.), para poder ver cómo se construyen.
  * **manifest.json:** Contiene metadatos asociados a aplicaciones web. [+info](https://trello.com/c/phxju5pj)
  * **browserconfig.xml:** Contiene metadatos para aplicaciones web en sistemas operativos de Microsoft. [+info](https://trello.com/c/Gm5FWYJt)
  * **humans.txt:** Es un archivo que muestra, entre otras cosas, información de las personas que han intervenido en la web. [+info](https://trello.com/c/WrNFJ047)
  * **.grunt/:** Directorio oculto que contiene todos los archivos de Grunt.
  * **src/:**
    * **css/:** Contiene todos los archivo que tengas que ver con estilos CSS o preprocesadores.
    * **font/:** Archivos de fuentes tipográficas o de iconos.
    * **img/:** Contiene todas las imágenes del sitio.
    * **js/:** Contiene todos los archivos JavaScript del sitio.

##Arquitectura
Puedes ver la arquitectura y directrices de los estilos CSS en [web/src/css/less/ARCHITECTURE.md](web/src/css/less/ARCHITECTURE.md).

##Grunt
Todos los archivos de *Grunt* se encuentran en el directorio oculto: `/web/.grunt/`. Por lo tanto, para trabajar con *grunt* debemos meternos con la terminal en ese directorio.

###Comandos:
* **`grunt`** - pone a *grunt* en escucha, y ante cualquier cambio en un .LESS o un .JS ejecuta las tareas correspondientes.
* **`grunt all`** - Ejecuta todas las tareas del proyecto.
* **`grunt css`** - Procesa el `style.less` creando así un `style.css`.
* **`grunt script`** - Junta todos los .JS en un solo archivo.

##Registro de cambios
Ver [registro de cambios](CHANGELOG.md).

##Contribuír
En [este documento](CONTRIBUTING.md) tienes toda la información sobre como puedes contribuír.

##Licencia
Todo el código es software libre bajo una [licencia MIT](LICENSE.md) ([+info](http://es.wikipedia.org/wiki/Licencia_MIT)).
Las librerías y herramientas externas tienen su propia licencia y podría no ser la misma.

##Créditos
Desarrollado por Iván Barcia en Galicia, SPAIN.