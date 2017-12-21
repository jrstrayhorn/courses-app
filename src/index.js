import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';

import { Provider } from 'react-redux';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './styles/styles.css'; // webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
