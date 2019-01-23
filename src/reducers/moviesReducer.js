import {
  SET_VIEW_TYPE,
  GET_MOVIES_SUCCESS,
  MOVIES_REQUEST,
  SET_SORTING,
  GET_MOVIES_FAILED,
  ADD_MOVIES_SUCCESS
} from '../actions/movies';

const initialState = {
  fetching: false,
  movies: [],
  viewType: 'LIST',
  sortingType: 'POPULARITY_DESC',
  error: false
};

export default function reducer(state = { ...initialState }, action) {
  switch (action.type) {
    case MOVIES_REQUEST:
      return { ...state, fetching: true };

    case GET_MOVIES_FAILED:
      return { ...state, fetching: false, error: true };

    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.movies,
        fetching: false,
        error: false
      };

    case ADD_MOVIES_SUCCESS:
      return {
        ...state,
        movies: [...state.movies, ...action.movies],
        fetching: false,
        error: false
      };

    case SET_SORTING:
      return { ...state, sortingType: action.param };

    case SET_VIEW_TYPE:
      return { ...state, viewType: action.viewType };

    default:
      return state;
  }
}
