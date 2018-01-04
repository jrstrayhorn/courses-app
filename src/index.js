import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';

import { Provider } from 'react-redux';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';

import './styles/styles.css'; // webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();

store.dispatch(loadCourses());
store.dispatch(loadAuthors());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
