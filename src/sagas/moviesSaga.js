import { put, call, takeLatest } from 'redux-saga/effects';
import {
  GET_POPULAR_MOVIES,
  GET_MOVIES_BY_GENRE,
  GET_MOVIES_BY_NAME,
  getMoviesSuccess,
  requestMovies,
  getMoviesFailed
} from '../actions/movies';
import { fetchMoviesByName, fetchMoviesByPopularity, fetchMoviesByGenre } from '../api/apiCalls';

function* getPopularMovies() {
  try {
    yield put(requestMovies());
    const data = yield call(fetchMoviesByPopularity);
    const movies = data.results;
    yield put(getMoviesSuccess(movies));
  } catch (error) {
    console.error(error);
    yield put(getMoviesFailed());
  }
}

function* getMoviesByName({ name }) {
  try {
    yield put(requestMovies());
    const data = yield call(fetchMoviesByName, name);
    const movies = data.results;
    yield put(getMoviesSuccess(movies));
  } catch (error) {
    console.error(error);
    yield put(getMoviesFailed());
  }
}

function* getMoviesByGenre({ genreId }) {
  try {
    yield put(requestMovies());
    const data = yield call(fetchMoviesByGenre, genreId);
    const movies = data.results;
    yield put(getMoviesSuccess(movies));
  } catch (error) {
    console.error(error);
    yield put(getMoviesFailed());
  }
}

export default function* watchGettingMovies() {
  yield takeLatest(GET_POPULAR_MOVIES, getPopularMovies);
  yield takeLatest(GET_MOVIES_BY_NAME, getMoviesByName);
  yield takeLatest(GET_MOVIES_BY_GENRE, getMoviesByGenre);
}
