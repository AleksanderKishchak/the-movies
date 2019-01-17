import { SET_VIEW_TYPE } from '../actions/viewType';

export default function reducer(state = 'LIST', action) {
  switch (action.type) {
    case SET_VIEW_TYPE:
      return action.viewType;

    default:
      return state;
  }
}
