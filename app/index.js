import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { createStore } from 'redux'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('main')
);
