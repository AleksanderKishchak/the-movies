import { GET_MOVIES_SUCCESS, MOVIES_REQUEST } from '../actions/movies';

export default function reducer(state = false, action) {
  switch (action.type) {
    case MOVIES_REQUEST:
      return true;

    case GET_MOVIES_SUCCESS:
      return false;

    default:
      return state;
  }
}
