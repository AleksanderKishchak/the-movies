import { all } from 'redux-saga/effects';

import watchGettingMovies, { getGenresSaga } from './moviesSaga';

export default function* rootSaga() {
  yield all([watchGettingMovies(), getGenresSaga()]);
}
