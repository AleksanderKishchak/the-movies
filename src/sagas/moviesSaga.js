import {
  put, call, takeLatest, select
} from 'redux-saga/effects';
import {
  GET_POPULAR_MOVIES,
  GET_MOVIES_BY_GENRE,
  GET_MOVIES_BY_NAME,
  LOAD_MORE,
  getMoviesSuccess,
  requestMovies,
  getMoviesFailed,
  addMovies
} from '../actions/movies';
import { getURLbyParams, callApi } from '../api/apiCalls';

function* getPopularMovies() {
  try {
    yield put(requestMovies());

    const URL = yield call(getURLbyParams);
    const data = yield call(callApi, URL);
    const { results: movies, total_pages: totalPages } = data;

    yield put(getMoviesSuccess(movies, URL, totalPages));
  } catch (error) {
    console.error(error);
    yield put(getMoviesFailed());
  }
}

function* getMoviesByName({ name }) {
  try {
    yield put(requestMovies());

    const URL = yield call(getURLbyParams, { name });
    const data = yield call(callApi, URL);
    const { results: movies, total_pages: totalPages } = data;

    yield put(getMoviesSuccess(movies, URL, totalPages));
  } catch (error) {
    console.error(error);
    yield put(getMoviesFailed());
  }
}

function* getMoviesByGenre({ genreId }) {
  try {
    yield put(requestMovies());

    const URL = yield call(getURLbyParams, { genreId });
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
    const { lastFetchURL, currentPage, totalPages } = yield select(({ movies }) => movies);

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

export default function* watchGettingMovies() {
  yield takeLatest(GET_POPULAR_MOVIES, getPopularMovies);
  yield takeLatest(GET_MOVIES_BY_NAME, getMoviesByName);
  yield takeLatest(GET_MOVIES_BY_GENRE, getMoviesByGenre);
  yield takeLatest(LOAD_MORE, getMoreMovies);
}
