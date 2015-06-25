#Arquitectura LESS

* [Introducción](#introducci%C3%B3n)
* [Flujo de trabajo](#flujo-de-trabajo)
* [Iconos](#iconos)
* [Arquitectura](#arquitectura)

---

##Introducción

Todos los estilos *CSS* del sitio se encuentran en `/src/css/`.

Dentro de ese directorio nos encontramos el directorio `less/` y el archivo donde se encuentran todos los estilos del sitio, el `style.css` (además, puede haber un `style.min.css`).

Dentro del directorio `/src/css/less/`, en los distintos archivos que tenemos ahí, es donde nosotros aplicaremos nuestros propios estilos. Estos archivos están unificados en el archivo `style.less`, que una vez procesado nos crea el `style.css` en el directorio `/src/css/`.

En el código que hay escrito, todo lo que pueda dar lugar a confusión intentaré acompañarlo de un comentario explicatorio. Además, en el [tablón de Trello](https://trello.com/b/IzLg4nk4) puede haber explicaciones o alternativas a algunos elementos.

Los comentarios relativos a funciones de *LESS* que no se muestren una vez procesadas (variables, algunos mixings, etc), se escribirán con las dos barras `//`, de ésta manera tampoco se mostrará el comentario.

Las **variables**, a diferencia de otros *frameworks*, no se muestran todas en un mismo archivo. Considero mas práctico colocar cada variable en el archivo en el cual la usaremos por norma general. Por ejemplo, las variables correspondientes a la tipografía estás todas en el archivo `typography.less`, los colores en `colors.less`, etc.

##Flujo de trabajo
Lo primero y más recomendable es tener ***grunt* «escuchando»** simplemente escribiendo el comando `grunt` en la terminal, estando en el directorio apropiado. (Ver [README.md](https://github.com/barcia/bramework/blob/master/README.md)).

Haciendo esto, cada vez que guardemos cualquier cambio en un archivo `.less` o `.js`, todo el código se procesará y juntará automáticamente.

Principalmente escribiremos código en los directorios `layout/` para crear bloques de código o «trozos» de interfaz y en el directorio `pages/` para añadir estilos más específicos.

Además, **antes** de comenzar con la maquetación, podemos crear o editar los [componentes](#components) que necesitemos, configurar los estilos [mas básicos y generales](#base) o añadir temas.


##Iconos
Para los iconos no utilizo clases sino los **_data-* attributes_**. Aunque por especificación no estén diseñados para eso, sino para «almacenar datos personalizados privados a la página o aplicación», no están restringidos únicamente a ese uso, y considero que se consigue un HTML más limpio y legible.

Para añadir un icono a un elemento simplemente añadimos el atributo **`data-icon="{nombre del icono}"`**.

Por ejemplo:

```html
<button data-icon="add">Añadir</button>
```

El archivo `.less` con la configuración de las fuentes de iconos está en el directorio [`vendor/`](#vendor).

Los archivos de las tipografías se cargan desde una fuente externa o bien se almacenan en `/src/font/` por lo que debemos asegurarnos que ponemos el directorio correcto en el archivo `.less`.

Por ejemplo:

```css
@font-face {
  font-family: 'material-design';
  src:url('../font/material/material.eot?-4ykr4x');
  src:url('../font/material/material.eot?#iefix-4ykr4x') format('embedded-opentype'),
  url('../font/material/material.woff?-4ykr4x') format('woff'),
  url('../font/material/material.ttf?-4ykr4x') format('truetype'),
  url('../font/material/material.svg?-4ykr4x#material-design') format('svg');
  font-weight: normal;
  font-style: normal;
}
```

Como cada fuente de iconos suele tener muchos mas iconos de los que utilizamos, una **buena práctica** es comentarlos todos con dos barras `//` para que no se procesen y descomentar sólo los que vayamos a utilizar. Así reduciremos mucho el tamaño de nuestro `.css` final.


##Arquitectura

```
less/
|
|– base/
|   |– basic.less
|   |– typography.less
|
|– components/
|   |– buttons.less
|   |– cards.less
|   |– code.less
|   |– images.less
|   |– lists.less
|   |– misc.less
|   |-...
|
|– layout/
|   |– ...
|
|– libraries/
|   |– mixings/
|   |   |-animation.less
|   |   |-border.less
|   |   |-columns.less
|   |   |-{etc...}
|   |
|   |– color.less
|   |– development.less
|   |– mixings.less
|   |– placeholders.less
|   |– print.less
|
|– pages/
|   |– ...
|
|– vendor/
|   |– material-fonts.less
|
|– style.less
```

###base/

  * **basic.less:**
  Son los **estilos básicos** para unificar criterios entre distintos navegadores y establecer estilos muy globales. Creado a partir de una mezcla de estilos y directrices propias con [normalize.css](http://necolas.github.io/normalize.css/) (3.0.2).

  También están aquí las variables relativas a la interfaz general así como los **_breackpoints_**.


  * **typography.less:**
  Todos los estilos relativos a la **tipografía** del sitio (y sus variables). Además incluye la mayoría de los elementos relacionados con el texto (listas, citas, etc.).


###components/
Aquí van todos los **componentes** que se utilizan en el *framework*. Puedes añadir los que quieras o modificarlos a tu gusto. Puedes cambiar muy fácilmente los estilos de la mayoría según los temas que le apliques.

Ojo, no confundir componentes con los bloques de *layout*. Los componentes son elementos mas pequeños, y los bloques de *layout* son elementos mas grandes creados, en parte, con varios componentes.

###layout/
Aquí debes colocar los módulos que crees usando mayormente los componentes. Son **bloques de código** mas grandes que deberían ser reutilizables en varios sitios de la web. Por ejemplo un *footer*, un *sidebar*, un menú, un formulario, etc.

###libraries/
*Mixings* y variables que pueden agilizar el desarrollo web.

* **color.less:**
  Una librería de variables que contiene todos los **colores** que se utilizan en el proyecto. Debería ser el único lugar en el que aparezcan colores en formato hexadecimal o rgb.


* **development.less:**
  Por defecto, este archivo no lo procesaremos. Lo utilizamos sólo cuando queremos **depurar** nuestro HTML. Añade cajas rojas o amarillas en los elementos el los que falta algo.

>  Por ejemplo, añadirá una caja roja a todos los `<a>` que no tengan un `href` correcto, y una caja amarilla a todos los `<a>` que no tengan un `title` (puesto que no es obligatorio, pero sí muy recomendable).


* **mixings.less:**
  El archivo que contiene los enlaces a todos los mixings. Si añadimos algún archivo nuevo en la carpeta `mixings/` debemos acordarnos de **añadir aquí la ruta** correcta.


* **placeholders.less:**
  Son una serie de clases para utilizar en el HTML de forma puntual. Si el proyecto está bien planificado, seguramente utilices pocos y podrás eliminar (o mejor comentar con dos barras `//`) la mayoría, puesto que utilizarás uno o dos, pero si no están comentados sí se procesan todos.

* **print.less:**
  Son estilos que solo se aplicarán en caso de que alguien *imprima* nuestra web. Es recomendable dejarlos, sobretodo si en nuestra web hay artículos u otro contenido que alguien pueda querer imprimir.

  No son propios, están importados de [Boilerplate](https://html5boilerplate.com/).

###pages/
Aquí debes colocar archivos con los estilos de las **páginas únicas**. Por ejemplo los estilos del `index.html`, de la página de contacto, etc.


###vendor/
Aquí van las librerías y estilos de **elementos externos**.