import { combineReducers } from 'redux';

import movies from './moviesReducer';
import fetching from './fetchingReducer';
import sortingType from './sortingReducer';

export default combineReducers({
  movies,
  fetching,
  sortingType
});
