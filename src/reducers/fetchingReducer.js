import {
  GET_POPULAR_MOVIES,
  GET_MOVIES_BY_GENRE,
  GET_MOVIES_BY_NAME,
  MOVIES_REQUEST
} from '../actions/movies';

export default function reducer(state = false, action) {
  switch (action.type) {
    case MOVIES_REQUEST:
      return true;

    case GET_POPULAR_MOVIES:
    case GET_MOVIES_BY_GENRE:
    case GET_MOVIES_BY_NAME:
      return false;

    default:
      return state;
  }
}
