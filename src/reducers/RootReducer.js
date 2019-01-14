import { combineReducers } from 'redux';

import movies from './moviesReducer';
import fetching from './fetchingReducer';

export default combineReducers({
  movies,
  fetching
});
