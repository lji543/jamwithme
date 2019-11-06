import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import Navigation from './Navigation';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/App.css';

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducers, undefined, composeEnhancer(applyMiddleware(reduxThunk)));

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
);
serviceWorker.register();
