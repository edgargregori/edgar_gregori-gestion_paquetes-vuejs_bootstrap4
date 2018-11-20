
# vue-bootstrap 
# Bibliografia "8 Practical Bootstrap Projects" publicado por  Copyright © 2018 SitePoint Pty. Ltd.

> A Vue.js project

# instalación de Bootstrap sin la dependencia de jQuery o el javascript de Bootstrap.

``` bash
$ npm i -g vue-cli

$ vue init bootstrap-vue/webpack-simple getting-started  #https://bootstrap-vue.js.org/ # http://yuche.github.io/vue-strap/

$ cd getting-started
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).



# push an existing repository from the command line
``` bash
$ git remote add origin git@github.com:edgargregori/edgar_gregori-gestion_paquetes-vuejs_bootstrap4.git
$ git push -u origin master
```


# "git commit --amend" 
## lee permite combinar cambios preconfigurados con la confirmación anterior en lugar de crear una confirmación completamente nueva. Ej para la terminal.
``` bash
$ git add .

$ git commit --amend  --no-edit # no guardar cambios en el editor de textos, es decir salirse sin modificar ni guardar.

$ git pull # traer los cambios de github para fusionar con la rama local. Hacer este paso alternativamente antes que "git commit --amend"

$ git push -u origin master
```
