#!/bin/bash

# Script para actualizar los proveedores

# NORMALIZE.CSS
# https://github.com/necolas/normalize.css

if [ -e _normalize.scss ]; then
	rm _normalize.scss
fi
wget https://raw.githubusercontent.com/necolas/normalize.css/master/normalize.css
mv normalize.css _normalize.scss
echo "normalize actualizado"


# SANITIZE.CSS
# https://github.com/10up/sanitize.css

if [ -e sanitize.scss ]; then
	rm sanitize.scss
fi
# wget https://raw.githubusercontent.com/10up/sanitize.css/master/sanitize.css | mv sanitize.scss
# mv sanitize.css sanitize.scss
wget https://raw.githubusercontent.com/10up/sanitize.css/master/sanitize.scss
mv sanitize.scss _sanitize.scss
echo "sanitize actualizado"
