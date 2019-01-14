import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import { Provider } from 'react-redux';
import store from './store';
import { App } from './components';
import { getMoviesByPopularity } from './actions/movies';

window.store = store;
store.dispatch(getMoviesByPopularity());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
