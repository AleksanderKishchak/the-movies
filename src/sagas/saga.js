/* eslint-disable */
import {
  GET_POPULAR_MOVIES,
  GET_MOVIES_BY_GENRE,
  GET_MOVIES_BY_NAME,
  GET_MOVIES_SUCCESS,
  MOVIES_REQUEST
} from '../actions/movies';
import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchMoviesByName, fetchMoviesByPopularity, fetchMoviesByGenre } from '../api/apiCalls';

export function* getPopularMovies() {
  try {
    console.log('popular');
    yield put({ type: MOVIES_REQUEST });
    const movies = yield call(fetchMoviesByPopularity);
    yield put({ type: GET_MOVIES_SUCCESS, movies });
  } catch (error) {
    console.error(error);
  }
}

export function* getMoviesByName({ name }) {
  try {
    console.log('by name', name);
    yield put({ type: MOVIES_REQUEST });
    const movies = yield call(fetchMoviesByName, name || 'aquaman');
    yield put({ type: GET_MOVIES_SUCCESS, movies });
  } catch (error) {
    console.error(error);
  }
}

export function* getMoviesByGenre({ genreId }) {
  try {
    console.log('by genre', genreId);
    yield put({ type: MOVIES_REQUEST });
    const movies = yield call(fetchMoviesByGenre, genreId);
    yield put({ type: GET_MOVIES_SUCCESS, movies });
  } catch (error) {
    console.error(error);
  }
}

export function* watchGettingMovies() {
  yield takeLatest(GET_POPULAR_MOVIES, getPopularMovies);
  yield takeLatest(GET_MOVIES_BY_NAME, getMoviesByName);
  yield takeLatest(GET_MOVIES_BY_GENRE, getMoviesByGenre);
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
