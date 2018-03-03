# Observables + Redux + JSON API Example App

A minimal example to show how to use [observable-redux-json-api](https://github.com/kristerkari/observable-redux-json-api) library using [React](https://reactjs.org/) and [Express.js](https://expressjs.com/).

This example app includes both backend ([Express](https://expressjs.com/)) and frontend ([React](https://reactjs.org/)) to show you how you can use [Redux](https://redux.js.org/), [RxJS](http://reactivex.io/rxjs/) and [JSON API](http://jsonapi.org/) together.

## The app uses the following libraries

### Frontend

* [React](https://reactjs.org/)
* [Redux Observable](https://redux-observable.js.org/) (+ peer deps [Redux](https://redux.js.org/) and [RxJS](http://reactivex.io/rxjs/))
* [observable-redux-json-api](https://github.com/kristerkari/observable-redux-json-api) (+ peer dep [Redux Thunk](https://github.com/gaearon/redux-thunk))

### Backend

* [Express.js](https://expressjs.com/)
* [JSON API Serializer](https://github.com/SeyZ/jsonapi-serializer)

## Setup

### Step 1: Clone this repo

```sh
git clone git@github.com:kristerkari/observable-redux-json-api-example.git
```

### Step 2: Move to project and install project dependencies

```sh
cd observable-redux-json-api-example
```

```sh
npm install
```

or if you use Yarn:

```sh
yarn install
```

### Step 3: Start Express server

```sh
npm start
```

or

```sh
yarn start
```

### Step 4: Start Webpack server

```sh
npm run browser
```

or

```sh
yarn browser
```

### Step 5: Open React app in your web browser.

Open `http://localhost:8080` in your web browser.
