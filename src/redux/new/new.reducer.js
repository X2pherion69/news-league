import NewActionTypes from "../new/new.types";
const INITIAL_STATE = {
  newcollections: null,
  isFetching: false,
  errorMessage: undefined,
};

const newReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NewActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case NewActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        newcollections: action.payload,
      };
    case NewActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default newReducer;
