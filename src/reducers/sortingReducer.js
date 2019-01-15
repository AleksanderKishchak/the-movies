import { SET_SORTING } from '../actions/sorting';

export default function reducer(state = 'POPULARITY_DESC', action) {
  switch (action.type) {
    case SET_SORTING:
      return action.param;

    default:
      return state;
  }
}
