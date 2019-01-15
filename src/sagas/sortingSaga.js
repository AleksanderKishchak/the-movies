import { put, takeLatest } from 'redux-saga/effects';
import { SET_SORTING, setSorting } from '../actions/sorting';

function* setSortingType({ param }) {
  yield put(setSorting(param));
}

export default function* watchSortingAction() {
  yield takeLatest(SET_SORTING, setSortingType);
}
