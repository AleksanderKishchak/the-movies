import { all } from 'redux-saga/effects';

import watchGettingMovies from './moviesSaga';
import watchSortingAction from './sortingSaga';

export default function* rootSaga() {
  yield all([watchGettingMovies(), watchSortingAction()]);
}
