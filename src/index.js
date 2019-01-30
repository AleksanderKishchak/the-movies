import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import store from './store';
import App from './components/App/App';
import { getMoviesByParams } from './actions/movies';
import './index.sass';

store.dispatch(getMoviesByParams());

ReactDOM.render(
  <Provider store={store}>
    <Router basename={process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : ''}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
