// import { fetchMoviesByName, fetchMoviesByPopularity, fetchMoviesByGenre } from '../api/apiCalls';

export const GET_MOVIES_BY_NAME = 'GET_MOVIES_BY_NAME';
export const GET_MOVIES_BY_GENRE = 'GET_MOVIES_BY_GENRE';
export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES';
export const MOVIES_REQUEST = 'MOVIES_REQUEST';

export function getMoviesByName(name) {
  /* return dispatch => {
    dispatch({ type: MOVIES_REQUEST });
    fetchMoviesByName(name).then(movies => {
      dispatch({ type: GET_MOVIES, movies });
    });
  }; */
  return { type: GET_MOVIES_BY_NAME, name };
}

export function getMoviesByPopularity() {
  /* return dispatch => {
    dispatch({ type: MOVIES_REQUEST });
    fetchMoviesByPopularity().then(movies => dispatch({ type: GET_MOVIES, movies }));
  }; */
  return { type: GET_POPULAR_MOVIES };
}

export function getMoviesByGenre(genreId) {
  /* return dispatch => {
    dispatch({ type: MOVIES_REQUEST });
    fetchMoviesByGenre(genreId).then(movies => dispatch({ type: GET_MOVIES, movies }));
  }; */

  return { type: 'GET_BY_GENRE', genreId };
}
