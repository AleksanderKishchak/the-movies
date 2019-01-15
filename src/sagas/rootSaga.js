import { all } from 'redux-saga/effects';

import { watchGettingMovies } from './saga';

export default function* rootSaga() {
  yield all([watchGettingMovies()]);
}
