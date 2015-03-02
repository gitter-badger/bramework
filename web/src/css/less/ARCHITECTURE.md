#Arquitectura LESS

* Flujo de trabajo
* Comentarios
* Iconos
* Variables (iran las necesarias en cada archivo)
* Temas (incluiran un prefijo identificativo md-*)

##Comentarios
Todo lo que pueda dar lugar a confusión irá acompañado de un comentario explicatorio.

Los comentarios relativos a funciones de LESS que no se muestren una vez compiladas (variables, algunos mixings, etc), se escribirán con las dos barras `//`, de ésta manera tampoco se mostrará el comentario.





[Arquitectura](#arquitectura)

* [base/](#base/)
    * [basic.less](#basic)
    * [typography.less](#typography)
* [components/](#components/)
* [libraries/](#libraries)
    * [color.less](#color)
    * [mixings.less](#mixings)
    * [mixings/](#mixings)
        * [animation](#animation)



##Arquitectura

###base/

####basic.less
Son los estilos básicos para unificar criterios entre distintos navegadores y establecer estilos muy globales. Creado a partir de una mezcla de estilos y directrices propias con [normalize.css](http://necolas.github.io/normalize.css/) (3.0.2).

También están aquí las variables relativas a la interfaz general así como los **_breackpoints_**.

####typography.less
Todos los estilos relativos a la tipografía del sitio (y sus variables LESS). Además incluye todos los elementos relacionados con el texto (listas, citas, etc.).


###components/
Aquí van todos los componentes que se utilizan en el *framework*. Puedes añadir los que quieras o modificarlos a tu gusto. El estilo de la mayoría varía según los temas que utilices.

###libraries/
*Mixings* y variables que pueden agilizar el desarrollo web.



####placeholders
Son una serie de clases para utilizar en el HTML de forma puntual. S el proyecto está bien planificado, seguramente utilices pocos y podrás eliminar (o mejor comentar con dos barras `//`) la mayoría, puesto que utilizarás uno o dos, pero estos sí se compilan todos.



```
less/
|
|– base/             # Engloba todos los estilos básicos
|   |– basic.less        # Reset/normalize
|   |– typography.less   # Reglas tipográficas y elementos relacionados con el texto
|
|– components/       # Componentes pequeños y reutilizables
|   |– _buttons.scss     # Botones
|   |– _carousel.scss    # Carousel
|   |– _cover.scss       # Cubierta
|   |– _dropdown.scss    # Dropdown
|   ...                  # Etc…
|
|– layout/           # Módulos formados por componetes que forman las partes principales del sitio
|   |– _navigation.scss  # Navegación
|   |– _grid.scss        # Sistema de retícula
|   |– _header.scss      # Encabezamiento
|   |– _footer.scss      # Pie de página
|   |– _sidebar.scss     # Barra lateral
|   |– _forms.scss       # Formularios
|   ...                  # Etc…
|
|– pages/
|   |– _home.scss        # Estilos específicos para la página de inicio
|   |– _contact.scss     # Estilos específicos para la página de contacto
|   ...                  # Etc…
|
|– temas/            # Estilos específicos para páginas concretas
|   |– _theme.scss       # Tema por defecto
|   |– _admin.scss       # Tema del administrador
|   ...                  # Etc…
|
|– libraries/        # Herramientas, mixings, helpers, etc
|   |– _variables.scss   # Variables Sass
|   |– _functions.scss   # Funciones Sass
|   |– _mixins.scss      # Mixins Sass
|   |– _helpers.scss     # Clases & placeholders
|
|– vendor/           # Librerías externas
|   |– _bootstrap.scss   # Bootstrap
|   |– _jquery-ui.scss   # jQuery UI
|   ...                  # Etc…
|
|
`– style.less             # Archivo principal de Less que engloba todos los demás.
```