#!/bin/bash

# Script para actualizar los proveedores


# NORMALIZE.CSS
# https://github.com/necolas/normalize.css
if [ -e _normalize.scss ]; then
	rm _normalize.scss
fi
wget https://raw.githubusercontent.com/necolas/normalize.css/master/normalize.css
mv normalize.css _normalize.scss


# SANITIZE.CSS
# https://github.com/10up/sanitize.css
if [ -e _sanitize.scss ]; then
	rm _sanitize.scss
fi
wget https://raw.githubusercontent.com/10up/sanitize.css/master/sanitize.scss
mv sanitize.scss _sanitize.scss


# HTML5Doctor RESET.CSS
# https://github.com/richclark/HTML5resetCSS
if [ -e _reset.scss ]; then
	rm _reset.scss
fi
wget https://raw.githubusercontent.com/richclark/HTML5resetCSS/master/reset.css
mv reset.css _reset.scss
