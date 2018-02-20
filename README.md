# ShoppingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

##### In case `livereload` is not working on your dev enviroment: #####

First remove the `node_modules` directory and re-install by Running the `npm install` command, If it still not working as expected than try to run `ng serve` with the `--poll` option of `1000` or `2000` e.g `ng serve --poll=1000`

## Build Production.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

##### Push production build to `gh-pages` #####
Install [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) by running the `npm i -g angular-cli-ghpages` command
run `ng build --prod --base-href https://yaronmiro.github.io/yna/ && ngh`


<!-- ## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). -->