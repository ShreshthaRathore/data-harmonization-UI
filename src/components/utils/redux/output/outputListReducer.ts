import { OutputDataList } from "../../types";
// import productsData from "../../../../utils/data/products.json";
import { OutputDataActionTypes } from "./outputListAction.ts";

export type OutputDataState = {
  pending: boolean;
  fulfilled: boolean;
  rejected: boolean;
  outputList: OutputDataList,
};

export type AsyncState = {
  pending: boolean;
  fulfilled: boolean;
  rejected: boolean;
  data: any;
};

const INITIAL_STATE = {
  pending: false,
  fulfilled: false,
  rejected: false,
  eventSimulation: null as null | OutputDataList,
//   referenceCalendars: null as null | AsyncState
};

function OutputDataReducer(state = INITIAL_STATE, action: any) {
  
  switch (action.type) {
    case OutputDataActionTypes.FETCH_ALL_OUTPUTDATA_PENDING:
      return {
        ...state,
        pending: true,
        rejected: false,
        fulfilled: false,
        eventSimulation: null
      };
    case OutputDataActionTypes.FETCH_ALL_OUTPUTDATA_FULFILLED:
      return {
        ...state,
        pending: false,
        fulfilled: true,
        rejected: false,
        id: action.id,
        eventSimulation: action.data
      };
    case OutputDataActionTypes.FETCH_ALL_OUTPUTDATA_REJECTED:
      return {
        ...state,
        pending: false,
        fulfilled: false,
        rejected: true,
        eventSimulation: null,
       
      };
   
        
    default:
      return { ...state };
  }
  
  return state;
}

export default OutputDataReducer;