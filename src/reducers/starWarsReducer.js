import { CHARACTER_FETCH, CHARACTER_FETCH_SUCCESS, CHARACTER_FETCH_FAILURE } from "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: '',
  // Array characters, Boolean fetching, null error.
};

export const charsReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case CHARACTER_FETCH:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case CHARACTER_FETCH_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        characters: [...state.characters, ...action.payload]
      }
    case CHARACTER_FETCH_FAILURE:
      return {
        ...state,
        error: 'Error fetching character',
        isFetching: false
      }
    default:
      return state;
  }
};
