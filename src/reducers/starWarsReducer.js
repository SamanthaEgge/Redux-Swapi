import { CHARACTER_FETCH, CHARACTER_FETCH_SUCCESS, CHARACTER_FETCH_FAILURE } from "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: '',
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTER_FETCH:
      return {

      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
