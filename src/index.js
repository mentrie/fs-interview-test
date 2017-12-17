import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import Router from 'react-router-dom/Router';

import { configureStore } from './store';
import './index.css';
import App from './containers/App';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import registerServiceWorker from './registerServiceWorker';
const store = configureStore();
const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App /> 
    </Router>
  </Provider>, document.getElementById('root'));

registerServiceWorker();
