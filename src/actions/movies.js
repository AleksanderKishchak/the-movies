export const ADD_MOVIES_SUCCESS = 'ADD_MOVIES_SUCCESS';
export const GET_GENRES = 'GET_GENRES';
export const GET_MOVIES_FAILED = 'GET_MOVIES_FAILED';
export const GET_MOVIES_BY_PARAM = 'GET_MOVIES_BY_PARAM';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const LOAD_MORE = 'LOAD_MORE';
export const MOVIES_REQUEST = 'MOVIES_REQUEST';
export const SET_SORTING = 'SET_SORTING';
export const SET_VIEW_TYPE = 'SET_VIEW_TYPE';
export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';

export function setViewType(viewType) {
  return {
    type: SET_VIEW_TYPE,
    viewType
  };
}

export function setSorting(param) {
  return {
    type: SET_SORTING,
    param
  };
}

export function requestMovies() {
  return { type: MOVIES_REQUEST };
}

export function getMoviesSuccess(movies, URL, totalPages) {
  return {
    type: GET_MOVIES_SUCCESS,
    movies,
    URL,
    totalPages
  };
}

export function getMoviesFailed() {
  return { type: GET_MOVIES_FAILED };
}

export function addMovies(movies) {
  return {
    type: ADD_MOVIES_SUCCESS,
    movies
  };
}

export function loadMore() {
  return {
    type: LOAD_MORE
  };
}

export function getGenres(genres) {
  return {
    type: GET_GENRES,
    genres
  };
}

export function setSearchText(text) {
  return {
    type: SET_SEARCH_TEXT,
    text
  };
}

export function getMoviesByParams(params) {
  return {
    type: GET_MOVIES_BY_PARAM,
    ...params
  };
}
