# movieDBex

This is just an example of a web application using some of the latest libraries.

The main feature is to implement a simple website where users can search for films depending of the title of the film.

The idea is to implement this example in short time, so I will omit common considerations like stylesheet, html frameworks to enhace the user experience and I will focus in the model data.

## Approach

For this application, I will integrate a solid solution based in React and Redux. It's my first application using Redux so I hope to keep the idea of redux clean and usable.

## Workflow

To implement this appication, I will follow this workflow:
1. Install list of packages required
2. Prepare the stack to run ES6 using babel and integrate hot loading for agile development
3. Create basic React Components where the information will be rendered
4. Implement Redux actions, reducers and store
5. Connect the React handlers with the actions and render the state
6. Testing
7. Documentation

## Packages

### React
react / react-dom

### Redux
redux / redux-logger / redux-thunk

### Async HTTP call
isomorphic-fetch

### Babel (ES3 Compilant)
babel-polyfill / babel-core / babel-loader / babel-preset-es2015 / babel-preset-react / babel-preset-react-hmre

### Webserver, runner and hot reloading
express / node-libs-browser / webpack / webpack-dev-middleware / webpack-hot-middleware

## UI

To render the application we will have just few components like

* APP: Component container where the events will be dispatched
* Searcher: Component where the input search will be included
* Movies: Component to render all movies or a loading message

## REDUX

The main reason to use this library is to simplify the flow of data between the view and the model. Abstracting the communication between then and implmenting oneway flow, allows to have full control of the state

### Actions

For this application, I will create 2 actions:

* SEARCH_MOVIES: This action will be dispatched when users submit the searcher.
* RECEIVE_MOVIES: This action will be dispatched when the API sent back the movies


### Thanks

