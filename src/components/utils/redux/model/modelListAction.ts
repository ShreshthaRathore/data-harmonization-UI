import {
    ModelList
  } from "../../types";
  import axios from "axios";


  
export enum ModelListActionTypes {
    // CREATE_CALENDAR_REQUEST_PENDING = "CREATE_CALENDAR_REQUEST_PENDING",
    FETCH_ALL_MODELS = "FETCH_ALL_MODELS",
    FETCH_ALL_MODELS_PENDING = "FETCH_ALL_MODELS_PENDING",
    FETCH_ALL_MODELS_FULFILLED = "FETCH_ALL_MODELS_FULFILLED",
    FETCH_ALL_MODELS_REJECTED = "FETCH_ALL_MODELS_REJECTED",
    CLEAR_ALL_MODELS = "CLEAR_ALL_MODELS",
}  

export interface FetchAllModelListActionType {
    type: ModelListActionTypes.FETCH_ALL_MODELS;
  }
  export interface FetchAllModelListPendingActionType {
    type: ModelListActionTypes.FETCH_ALL_MODELS_PENDING;
  }
  export interface FetchAllModelListFulfilledActionType {
    type: ModelListActionTypes.FETCH_ALL_MODELS_FULFILLED;
    data: ModelList;
  }
  export interface FetchAllModelListRejectedActionType {
    type:ModelListActionTypes.FETCH_ALL_MODELS_REJECTED;
  }

  export const FetchAllModelAction = (): FetchAllModelListActionType => ({
    type: ModelListActionTypes.FETCH_ALL_MODELS,
  });
  export const FetchAllModelListPendingActionType =
    (): FetchAllModelListPendingActionType => ({
      type: ModelListActionTypes.FETCH_ALL_MODELS_PENDING
    });
  export const FetchAllModelListFulfilledActionType = (
    data: ModelList
  ): FetchAllModelListFulfilledActionType => ({
    type: ModelListActionTypes.FETCH_ALL_MODELS_FULFILLED,
    data,
  });
  export const FetchAllModelRejectedAction =
    (): FetchAllModelListRejectedActionType => ({
      type: ModelListActionTypes.FETCH_ALL_MODELS_REJECTED,
    });
  

    export type ModelListAction= FetchAllModelListActionType|FetchAllModelListPendingActionType|FetchAllModelListFulfilledActionType|FetchAllModelListRejectedActionType;


    export const fetchAllModels = () => {
        console.log('FetchModels')
        return async function (dispatch: any, getState: any) {
          try {
            dispatch({
              type: ModelListActionTypes.FETCH_ALL_MODELS_PENDING,
              data: {},
            });
            let requestUrl = `https://jsonplaceholder.typicode.com/posts`;
            const response = await axios.get(requestUrl);
            console.log('Response', response.data)
            dispatch({
              type: ModelListActionTypes.FETCH_ALL_MODELS_FULFILLED,
              data: response.data,
            });
          } catch (e) {
            dispatch({
              type: ModelListActionTypes.FETCH_ALL_MODELS_REJECTED,
              data: {},
            });
          }
        };
      };