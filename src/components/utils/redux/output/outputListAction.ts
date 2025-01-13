import {
    OutputDataList
  } from "../../types";
  import axios from "axios";


  
export enum OutputDataActionTypes {
    // CREATE_CALENDAR_REQUEST_PENDING = "CREATE_CALENDAR_REQUEST_PENDING",
    FETCH_ALL_OUTPUTDATA = "FETCH_ALL_OUTPUTDATA",
    FETCH_ALL_OUTPUTDATA_PENDING = "FETCH_ALL_OUTPUTDATA_PENDING",
    FETCH_ALL_OUTPUTDATA_FULFILLED = "FETCH_ALL_OUTPUTDATA_FULFILLED",
    FETCH_ALL_OUTPUTDATA_REJECTED = "FETCH_ALL_OUTPUTDATA_REJECTED",
    CLEAR_ALL_OUTPUTDATA = "CLEAR_ALL_OUTPUTDATA",
}  

export interface FetchAllOutputDataActionType {
    type: OutputDataActionTypes.FETCH_ALL_OUTPUTDATA;
  }
  export interface FetchAllOutputDataPendingActionType {
    type: OutputDataActionTypes.FETCH_ALL_OUTPUTDATA_PENDING;
  }
  export interface FetchAllOutputDataFulfilledActionType {
    type: OutputDataActionTypes.FETCH_ALL_OUTPUTDATA_FULFILLED;
    data: OutputDataList;
  }
  export interface FetchAllOutputDataRejectedActionType {
    type:OutputDataActionTypes.FETCH_ALL_OUTPUTDATA_REJECTED;
  }

  export const FetchAllOutputDataAction = (): FetchAllOutputDataActionType => ({
    type: OutputDataActionTypes.FETCH_ALL_OUTPUTDATA,
  });
  export const FetchAllOutputDataPendingAction =
    (): FetchAllOutputDataPendingActionType => ({
      type: OutputDataActionTypes.FETCH_ALL_OUTPUTDATA_PENDING
    });
  export const FetchAllOutputDataFulfilledAction = (
    data: OutputDataList
  ): FetchAllOutputDataFulfilledActionType => ({
    type: OutputDataActionTypes.FETCH_ALL_OUTPUTDATA_FULFILLED,
    data,
  });
  export const FetchAllOutputDataRejectedAction =
    (): FetchAllOutputDataRejectedActionType => ({
      type: OutputDataActionTypes.FETCH_ALL_OUTPUTDATA_REJECTED,
    });
  

    export type OutputDataAction= FetchAllOutputDataActionType|FetchAllOutputDataPendingActionType|FetchAllOutputDataFulfilledActionType|FetchAllOutputDataRejectedActionType;


    export const fetchAllModels = () => {
        console.log('FetchModels')
        return async function (dispatch: any, getState: any) {
          try {
            dispatch({
              type: OutputDataActionTypes.FETCH_ALL_OUTPUTDATA_PENDING,
              data: {},
            });
            let requestUrl = `http://127.0.0.1:5000/outputData`;
            const response = await axios.get(requestUrl);
            console.log('Response', response.data)
            dispatch({
              type: OutputDataActionTypes.FETCH_ALL_OUTPUTDATA_FULFILLED,
              data: response.data,
            });
          } catch (e) {
            dispatch({
              type: OutputDataActionTypes.FETCH_ALL_OUTPUTDATA_REJECTED,
              data: {},
            });
          }
        };
      };