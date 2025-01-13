// reducer.js
// actionTypes.js
export const SET_DROPDOWN_VALUE = 'SET_DROPDOWN_VALUE';
export const API_CALL_REQUEST = 'API_CALL_REQUEST';
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
export const API_CALL_FAILURE = 'API_CALL_FAILURE';

const initialState = {
  dropdownValue: '',
  isLoading: false,
  apiData: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DROPDOWN_VALUE:
      return {
        ...state,
        dropdownValue: action.payload,
      };
    case API_CALL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case API_CALL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        apiData: action.payload,
        error: null,
      };
    case API_CALL_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
