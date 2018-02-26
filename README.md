# ShoppingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.

## Development server

Run `ng serve --host 0.0.0.0 --open` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically open on the browser and reloads if you change any of the source files.

##### In case `livereload` is not working on your dev enviroment: #####

First remove the `node_modules` directory and re-install by Running the `npm install` command, If it still not working as expected than try to run `ng serve` with the `--poll` option of `1000` or `2000` e.g `ng serve --poll=1000`

## Build Production.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

Run `ng serve --prod` to test the production code on a local server

##### Push production build to `gh-pages` #####
Install [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) by running the `npm i -g angular-cli-ghpages` command
run `ng build --prod --base-href https://yaronmiro.github.io/yna/ && ngh`
