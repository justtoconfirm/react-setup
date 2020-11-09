# React setup

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install
```
$ git clone https://github.com/justtoconfirm/react-setup.git

$ cd react-setup
$ npm install
```

## Build
```
# Run in production mode
$ npm run build

# Run in development mode
$ npm run build:dev
```

## Run

This command will run the webpack-dev-server on port 8080. If an incorrect URL is entered, an Error (404) page will be displayed.

```
$ npm run start
```

+ Homepage: http://localhost:8080/
+ About: http://localhost:8080/about
+ Contact: http://localhost:8080/contact

## Lint
```
# Lint JavaScript code in src directory to check for syntax errors
$ npm run lint

# Fix errors using Standard
$ npm run lint:fix
```

## Test
```
$ npm run test
```

## Storybook
```
$ npm run storybook
```

## Webpack Bundle Analyzer
```
# Run the production build to generate the stats.json file
$ npm run build

# Generate Bundle report
$ npm run analyzer
```