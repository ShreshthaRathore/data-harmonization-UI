import {
    InputDataList
  } from "../../types";
  import axios from "axios";


  
export enum InputListActionTypes {
    // CREATE_CALENDAR_REQUEST_PENDING = "CREATE_CALENDAR_REQUEST_PENDING",
    FETCH_ALL_INPUTS = "FETCH_ALL_INPUTS",
    FETCH_ALL_INPUTS_PENDING = "FETCH_ALL_INPUTS_PENDING",
    FETCH_ALL_INPUTS_FULFILLED = "FETCH_ALL_INPUTS_FULFILLED",
    FETCH_ALL_INPUTS_REJECTED = "FETCH_ALL_INPUTS_REJECTED",
    CLEAR_ALL_INPUTS = "CLEAR_ALL_INPUTS",
}  

export interface FetchAllInputActionType {
    type: InputListActionTypes.FETCH_ALL_INPUTS;
  }
  export interface FetchAllInputPendingActionType {
    type: InputListActionTypes.FETCH_ALL_INPUTS_PENDING;
  }
  export interface FetchAllInputFulfilledActionType {
    type: InputListActionTypes.FETCH_ALL_INPUTS_FULFILLED;
    data: InputDataList;
  }
  export interface FetchAllInputRejectedActionType {
    type:InputListActionTypes.FETCH_ALL_INPUTS_REJECTED;
  }

  export const FetchAllInputsAction = (): FetchAllInputActionType => ({
    type: InputListActionTypes.FETCH_ALL_INPUTS,
  });
  export const FetchAllInputsPendingActionType =
    (): FetchAllInputPendingActionType => ({
      type: InputListActionTypes.FETCH_ALL_INPUTS_PENDING
    });
  export const FetchAllInputsFulfilledActionType = (
    data: InputDataList
  ): FetchAllInputFulfilledActionType => ({
    type: InputListActionTypes.FETCH_ALL_INPUTS_FULFILLED,
    data,
  });
  export const FetchAllInputsRejectedAction =
    (): FetchAllInputRejectedActionType => ({
      type: InputListActionTypes.FETCH_ALL_INPUTS_REJECTED,
    });
  

    export type InputsAction= FetchAllInputActionType|FetchAllInputPendingActionType|FetchAllInputFulfilledActionType|FetchAllInputRejectedActionType;


    export const fetchAllModels = () => {
        console.log('FetchModels')
        return async function (dispatch: any, getState: any) {
          try {
            dispatch({
              type: InputListActionTypes.FETCH_ALL_INPUTS_PENDING,
              data: {},
            });
            let requestUrl = `http://127.0.0.1:5000/inputhistory`;
            const response = await axios.get(requestUrl);
            console.log('Response', response.data)
            dispatch({
              type: InputListActionTypes.FETCH_ALL_INPUTS_FULFILLED,
              data: response.data,
            });
          } catch (e) {
            dispatch({
              type: InputListActionTypes.FETCH_ALL_INPUTS_REJECTED,
              data: {},
            });
          }
        };
      };