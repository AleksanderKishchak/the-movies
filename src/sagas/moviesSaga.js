import {
  put, call, takeLatest, select
} from 'redux-saga/effects';

import {
  GET_MOVIES_BY_PARAM,
  LOAD_MORE,
  getMoviesSuccess,
  requestMovies,
  getMoviesFailed,
  addMovies,
  getGenres
} from '../actions/movies';
import { getURLbyParams, callApi, getGenresURL } from '../api/apiCalls';

function* getMovies(action) {
  try {
    yield put(requestMovies());
    const URL = yield call(getURLbyParams, action);
    const data = yield call(callApi, URL);
    const { results: movies, total_pages: totalPages } = data;

    yield put(getMoviesSuccess(movies, URL, totalPages));
  } catch (error) {
    console.error(error);
    yield put(getMoviesFailed());
  }
}

function* getMoreMovies() {
  try {
    const { lastFetchURL, currentPage, totalPages } = yield select(state => state.movies);

    if (currentPage >= totalPages) {
      return;
    }

    yield put(requestMovies());
    const nextPageURL = lastFetchURL.replace(/page=./, `page=${currentPage + 1}`);
    const data = yield call(callApi, nextPageURL);
    const movies = data.results;
    yield put(addMovies(movies));
  } catch (error) {
    console.error(error);
    yield put(getMoviesFailed());
  }
}

export function* getGenresSaga() {
  const genres = yield call(callApi, getGenresURL());
  yield put(getGenres(genres.genres));
}

export default function* watchGettingMovies() {
  yield takeLatest(GET_MOVIES_BY_PARAM, getMovies);
  yield takeLatest(LOAD_MORE, getMoreMovies);
}
