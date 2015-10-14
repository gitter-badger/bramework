#Arquitectura LESS

* [Introducción](#introducci%C3%B3n)
* [Flujo de trabajo](#flujo-de-trabajo)
* [Iconos](#iconos)
* [Arquitectura](#arquitectura)

---

##Introducción

Todos los estilos **CSS** del sitio se encuentran en `/src/css/`.

Dentro de ese directorio nos encontramos el directorio `sass/` y el archivo donde se encuentran todos los estilos del sitio, el `style.css` (además, puede haber un `style.min.css`).

Dentro del directorio `/src/css/sass/`, en los distintos archivos que tenemos ahí, es donde nosotros aplicaremos nuestros propios estilos. Estos archivos están unificados en el archivo `style.scss`, que una vez procesado nos crea el `style.css` en el directorio `/src/css/`.

En el código que hay escrito, todo lo que pueda dar lugar a confusión intentaré acompañarlo de un comentario explicatorio. Además, en el [tablón de Trello](https://trello.com/b/IzLg4nk4) puede haber explicaciones o alternativas a algunos elementos.

Los comentarios relativos a funciones de *SASS* que no se muestren una vez procesadas (variables, algunos mixings, etc), se escribirán con las dos barras `//`, de ésta manera tampoco se mostrará el comentario.

Las **variables**, a diferencia de otros *frameworks*, no se muestran todas en un mismo archivo. Considero mas práctico colocar cada variable en el archivo en el cual la usaremos por norma general. Por ejemplo, las variables correspondientes a la tipografía están todas en el archivo `typography.scss`, etc.

##Flujo de trabajo
Lo primero y más recomendable es tener ***grunt* «escuchando»** simplemente escribiendo el comando `grunt` en la terminal, estando en el directorio apropiado. (Ver [README.md](https://github.com/barcia/bramework/blob/master/README.md)).

Haciendo esto, cada vez que guardemos cualquier cambio en un archivo `.scss` o `.js`, todo el código se procesará y juntará automáticamente.

Principalmente escribiremos código en los directorios `components/` para crear pequeños elementos reutilizables, `layout/` para crear bloques de código o elementos de interfaz y en el directorio `pages/` para añadir estilos más específicos.


##Iconos y Emojis
Para los iconos y los emojis no utilizo clases sino los **_data-* attributes_**. Aunque por especificación no estén diseñados para eso, sino para «almacenar datos personalizados privados a la página o aplicación», no están restringidos únicamente a ese uso, y considero que se consigue un HTML más limpio y legible.

Para añadir un icono a un elemento simplemente añadimos el atributo **`data-icon="{nombre del icono}"`**.

Por ejemplo:

```html
<button data-icon="add">Añadir</button>
<span data-emoji="smile"></span>
```

Como cada fuente de iconos o de emojis suele tener muchos mas iconos de los que utilizamos, una **buena práctica** es comentarlos todos con dos barras `//` para que no se procesen y descomentar sólo los que vayamos a utilizar. Así reduciremos mucho el tamaño de nuestro `.css` final.


##Arquitectura

```
sass/
|
|– base/
|   |– _base.scss
|   |– _shame.scss
|   |– _standard.scss
|   |– _typography.scss
|
|– components/
|   |– _buttons.scss
|   |-...
|
|– layout/
|   |– _navbar.scss
|   |– _sidebar.scss
|   |-...
|
|– libraries/
|   |– colors/
|   |   |-_brand-colors.scss
|   |   |-{etc...}
|   |
|   |– mixings/
|   |   |-_animation.scss
|   |   |-_border.scss
|   |   |-_breackpoints.scss
|   |   |-{etc...}
|   |
|   |– _colors.scss
|   |– _debug.scss
|   |– _mixins.scss
|   |– _placeholders.scss
|   |– _print.scss
|
|– pages/
|   |– ...
|
|- themes/
|   |- material-design/
|   |   |– components/
|   |   |   |- _buttons.scss
|   |   |   |- _cards.scss
|   |   |   |- _lists.scss
|   |   |   |-{etc...}
|   |   |
|   |   |– layout/
|   |   |   |- _navbar.scss
|   |   |   |- _posts.scss
|   |   |   |-{etc...}
|   |   |
|   |   |– libraries/
|   |       |- _icons.scss
|   |       |- _shadows.scss
|   |       |-{etc...}
|   |
|   |- _material-design.scss
|   |- {etc...}
|
|– vendor/
|   |– _normalize.scss
|   |– _reset.scss
|   |– _swibe.scss
|   |- {etc...}
|
|– style.scss
```

###base/

  * **_base.scss:**
  Algunas variables y algunos estilos muy globales.
  
  * **_shame.scss:**
  En este archivo irán *hacks* o pequeñas soluciones no muy correctas de las que ningún front-end estaría orgulloso. :flushed:

  * **_standard.scss:**
  Aquí están los estilos básicos o estándar escritos por el autor. (una especie de *Normalize.css* personal)

  * **typography.scss:**
  Todos los estilos relativos a la **tipografía** del sitio (y sus variables). Además incluye la mayoría de los elementos relacionados con el texto (listas, citas, etc.).


###components/
Aquí van todos los **componentes** que se utilizan en el *framework*. Puedes añadir los que quieras o modificarlos a tu gusto. Los que sean más genéricos.

Ojo, no confundir componentes con los bloques de *layout*. Los componentes son elementos mas pequeños, y los bloques de *layout* son elementos mas grandes creados, en parte, con varios componentes.

###layout/
Aquí debes colocar los módulos que crees usando mayormente los componentes. Son **bloques de código** mas grandes que deberían ser reutilizables en varios sitios de la web. Por ejemplo un *footer*, un *sidebar*, un menú, un formulario, etc.

###libraries/
*Mixins* y variables que pueden agilizar el desarrollo web.

* **_debug.scss:**
  Por defecto, este archivo no lo procesaremos. Lo utilizamos sólo cuando queremos **depurar** nuestro HTML. Añade cajas rojas o amarillas en los elementos el los que falta algo.

>  Por ejemplo, añadirá una caja roja a todos los `<a>` que no tengan un `href` correcto, y una caja amarilla a todos los `<a>` que no tengan un `title` (puesto que no es obligatorio, pero sí muy recomendable).


* **_placeholders.scss:**
  Son una serie de clases para utilizar en el HTML de forma puntual. Si el proyecto está bien planificado, seguramente utilices pocos y podrás eliminar (o mejor comentar con dos barras `//`) la mayoría, puesto que utilizarás uno o dos, pero si no están comentados sí se procesan todos.

* **_print.scss:**
  Son estilos que solo se aplicarán en caso de que alguien *imprima* nuestra web. Es recomendable dejarlos, sobretodo si en nuestra web hay artículos u otro contenido que alguien pueda querer imprimir.

  No son propios, están importados de [Boilerplate](https://html5boilerplate.com/).

###pages/
Aquí debes colocar archivos con los estilos de las **páginas únicas**. Por ejemplo los estilos de la página de contacto, etc.

###themes/
Aquí están los elementos de *components*, *layout* y *libraries* creados previamente para cada tema visual. Puedes (y debes) no compilar cada tema que no uses.

###vendor/
Aquí van las librerías y estilos de **elementos externos**.