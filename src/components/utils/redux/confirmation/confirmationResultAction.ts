import {
    ConfirmationList
  } from "../../types";
  import axios from "axios";


  
export enum ConfirmationListActionTypes {
    // CREATE_CALENDAR_REQUEST_PENDING = "CREATE_CALENDAR_REQUEST_PENDING",
    FETCH_ALL_EXECUTION = "FETCH_ALL_EXECUTION",
    FETCH_ALL_EXECUTION_PENDING = "FETCH_ALL_EXECUTION_PENDING",
    FETCH_ALL_EXECUTION_FULFILLED = "FETCH_ALL_EXECUTION_FULFILLED",
    FETCH_ALL_EXECUTION_REJECTED = "FETCH_ALL_EXECUTION_REJECTED",
    CLEAR_ALL_EXECUTION = "CLEAR_ALL_EXECUTION",
}  

export interface FetchAllExecutionListActionType {
    type: ConfirmationListActionTypes.FETCH_ALL_EXECUTION;
  }
  export interface FetchAllExecutionListPendingActionType {
    type: ConfirmationListActionTypes.FETCH_ALL_EXECUTION_PENDING;
  }
  export interface FetchAllExecutionListFulfilledActionType {
    type: ConfirmationListActionTypes.FETCH_ALL_EXECUTION_FULFILLED;
    data: ConfirmationList;
  }
  export interface FetchAllExecutionListRejectedActionType {
    type:ConfirmationListActionTypes.FETCH_ALL_EXECUTION_REJECTED;
  }

  export const FetchAllExecutionAction = (): FetchAllExecutionListActionType => ({
    type: ConfirmationListActionTypes.FETCH_ALL_EXECUTION,
  });
  export const FetchAllExecutionListPendingActionType =
    (): FetchAllExecutionListPendingActionType => ({
      type: ConfirmationListActionTypes.FETCH_ALL_EXECUTION_PENDING
    });
  export const FetchAllExecutionListFulfilledActionType = (
    data: ConfirmationList
  ): FetchAllExecutionListFulfilledActionType => ({
    type: ConfirmationListActionTypes.FETCH_ALL_EXECUTION_FULFILLED,
    data,
  });
  export const FetchAllModelRejectedAction =
    (): FetchAllExecutionListRejectedActionType => ({
      type: ConfirmationListActionTypes.FETCH_ALL_EXECUTION_REJECTED,
    });
  

    export type ModelListAction= FetchAllExecutionListActionType|FetchAllExecutionListPendingActionType|FetchAllExecutionListFulfilledActionType|FetchAllExecutionListRejectedActionType;


    export const fetchAllExecution= () => {
    
        return async function (dispatch: any, getState: any) {
          try {
            dispatch({
              type: ConfirmationListActionTypes.FETCH_ALL_EXECUTION_PENDING,
              data: {},
            });
            let requestUrl = `http://127.0.0.1:5000/models`;
            const response = await axios.get(requestUrl);
            console.log('Response', response.data)
            dispatch({
              type: ConfirmationListActionTypes.FETCH_ALL_EXECUTION_FULFILLED,
              data: response.data,
            });
          } catch (e) {
            dispatch({
              type: ConfirmationListActionTypes.FETCH_ALL_EXECUTION_REJECTED,
              data: {},
            });
          }
        };
      };