/* eslint-disable */
import {
  GET_POPULAR_MOVIES,
  GET_MOVIES_BY_GENRE,
  GET_MOVIES_BY_NAME,
  MOVIES_REQUEST
} from '../actions/movies';
import { takeEvery, put, call } from 'redux-saga/effects';
import { fetchMoviesByName, fetchMoviesByPopularity, fetchMoviesByGenre } from '../api/apiCalls';

export function* getPopularMovies() {
  console.log('inside saga');
  yield put({ type: MOVIES_REQUEST });
  const data = yield call(fetchMoviesByPopularity);
  yield put({ type: GET_POPULAR_MOVIES, data });
}

export function* getMoviesByName({ name }) {
  yield put({ type: MOVIES_REQUEST });
  const data = yield call(fetchMoviesByName(name));
  yield put({ type: GET_MOVIES_BY_NAME, data });
}

export function* getMoviesByGenre({ genreId }) {
  yield put({ type: MOVIES_REQUEST });
  const data = yield call(fetchMoviesByGenre(genreId));
  yield put({ type: GET_MOVIES_BY_GENRE, data });
}

export function* watchGettingMovies() {
  yield takeEvery(GET_POPULAR_MOVIES, getPopularMovies);
  yield takeEvery(GET_MOVIES_BY_NAME, getMoviesByName);
  yield takeEvery(GET_MOVIES_BY_GENRE, getMoviesByGenre);
}

/* export function* fetchMovies({ payload = {} }) {
  const key = Object.keys(payload)[0];
  let movies;
  console.log(key);

  switch (key) {
    case 'genreId':
      movies = yield call(fetchMoviesByGenre, payload[key]);

    case 'name':
      movies = yield call(fetchMoviesByName, payload[key]);

    default:
      movies = yield call(fetchMoviesByPopularity);
  }

  yield put({ type: 'GET_MOVIES', movies });
} */
