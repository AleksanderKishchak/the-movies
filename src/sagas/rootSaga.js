import { all } from 'redux-saga/effects';

import watchGettingMovies from './moviesSaga';

export default function* rootSaga() {
  yield all([watchGettingMovies()]);
}
