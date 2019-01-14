// import { fetchMoviesByName, fetchMoviesByPopularity, fetchMoviesByGenre } from '../api/apiCalls';

export const GET_MOVIES_BY_NAME = 'GET_MOVIES_BY_NAME';
export const GET_MOVIES_BY_GENRE = 'GET_MOVIES_BY_GENRE';
export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES';
export const MOVIES_REQUEST = 'MOVIES_REQUEST';

export function getMoviesByName(name) {
  return { type: GET_MOVIES_BY_NAME, name };
}

export function getMoviesByPopularity() {
  return { type: GET_POPULAR_MOVIES };
}

export function getMoviesByGenre(genreId) {
  return { type: GET_MOVIES_BY_GENRE, genreId };
}
