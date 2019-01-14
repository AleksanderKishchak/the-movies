import { GET_MOVIES_BY_GENRE, GET_MOVIES_BY_NAME, GET_POPULAR_MOVIES } from '../actions/movies';

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_POPULAR_MOVIES:
    case GET_MOVIES_BY_GENRE:
    case GET_MOVIES_BY_NAME:
      return action.movies;

    default:
      return state;
  }
}
