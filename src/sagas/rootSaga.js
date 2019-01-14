import { all } from 'redux-saga/effects';

import {
  getMoviesByGenre, getPopularMovies, getMoviesByName, watchGettingMovies
} from './saga';

export default function* rootSaga() {
  yield all([getMoviesByGenre, getMoviesByName, getPopularMovies, watchGettingMovies]);
}
