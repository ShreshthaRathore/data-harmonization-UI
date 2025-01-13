// // actions.ts
// import { ThunkAction } from 'redux-thunk';
// // import { SET_DROPDOWN_VALUE, API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE } from './actionTypes';
// import { RootState } from '../../store.ts'; // assuming RootState is your store's state type

// // actionTypes.js
// export const SET_DROPDOWN_VALUE = 'SET_DROPDOWN_VALUE';
// export const API_CALL_REQUEST = 'API_CALL_REQUEST';
// export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
// export const API_CALL_FAILURE = 'API_CALL_FAILURE';

// // Action to set the dropdown value
// export const setDropdownValue = (value: string) => ({
//   type: SET_DROPDOWN_VALUE,
//   payload: value,
// });

// // Typing for the thunk action
// export const postDropdownValue = (dropdownValue: string): ThunkAction<Promise<void>, RootState, unknown, any> => async (dispatch) => {
//   dispatch({ type: API_CALL_REQUEST });

//   try {
//     const response = await fetch('https://example.com/api/submit', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ value: dropdownValue }),
//     });

//     const data = await response.json();

//     if (response.ok) {
//       dispatch({ type: API_CALL_SUCCESS, payload: data });
//     } else {
//       dispatch({ type: API_CALL_FAILURE, error: data.error || 'Error submitting data' });
//     }
//   } catch (error) {
//     dispatch({ type: API_CALL_FAILURE, error: error.message });
//   }
// };


// actions.ts
import { ThunkAction } from 'redux-thunk';
// import { SET_DROPDOWN_VALUE, API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE } from './actionTypes';
import { RootState } from '../../store.ts'; // assuming RootState is your store's state type


export const SET_DROPDOWN_VALUE = 'SET_DROPDOWN_VALUE';
export const API_CALL_REQUEST = 'API_CALL_REQUEST';
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
export const API_CALL_FAILURE = 'API_CALL_FAILURE';
// Action to set the dropdown value
export const setDropdownValue = (value: string) => ({
  type: SET_DROPDOWN_VALUE,
  payload: value,
});

// Action to post the dropdown value
export const postDropdownValue = (dropdownValue: string): ThunkAction<Promise<void>, RootState, unknown, any> => async (dispatch) => {
  dispatch({ type: API_CALL_REQUEST });

  try {
    const response = await fetch('https://example.com/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value: dropdownValue }),
    });

    const data = await response.json();

    if (response.ok) {
      dispatch({ type: API_CALL_SUCCESS, payload: data });
    } else {
      dispatch({ type: API_CALL_FAILURE, error: data.error || 'Error submitting data' });
    }
  } catch (error) {
    dispatch({ type: API_CALL_FAILURE, error: error.message });
  }
};
