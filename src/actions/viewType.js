export const SET_VIEW_TYPE = 'SET_VIEW_TYPE';

export function setViewType(viewType) {
  return {
    type: SET_VIEW_TYPE,
    viewType
  };
}
