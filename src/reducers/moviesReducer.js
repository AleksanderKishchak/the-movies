import {
  SET_VIEW_TYPE,
  GET_MOVIES_SUCCESS,
  MOVIES_REQUEST,
  SET_SORTING,
  GET_MOVIES_FAILED,
  ADD_MOVIES_SUCCESS,
  GET_GENRES
} from '../actions/movies';

const initialState = {
  fetching: false,
  movies: [],
  currentPage: 1,
  totalPages: 1000,
  lastFetchURL: '',
  viewType: 'LIST',
  sortingType: 'POPULARITY_DESC',
  error: false,
  genres: []
};

export default function reducer(state = { ...initialState }, action) {
  switch (action.type) {
    case GET_GENRES:
      return { ...state, genres: action.genres };

    case MOVIES_REQUEST:
      return { ...state, fetching: true };

    case GET_MOVIES_FAILED:
      return { ...state, fetching: false, error: true };

    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.movies,
        fetching: false,
        error: false,
        lastFetchURL: action.URL,
        totalPages: action.totalPages
      };

    case ADD_MOVIES_SUCCESS:
      return {
        ...state,
        currentPage: state.currentPage + 1,
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
