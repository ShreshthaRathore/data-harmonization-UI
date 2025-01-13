import { ConfirmationList } from "../../types";
// import productsData from "../../../../utils/data/products.json";
import { ConfirmationListActionTypes } from "./confirmationResultAction.ts";

export type ConfirmationListState = {
  pending: boolean;
  fulfilled: boolean;
  rejected: boolean;
  executionList: ConfirmationList,
};
// export type PredictiveSimulationState = {
//   pending: boolean;
//   fulfilled: boolean;
//   rejected: boolean;
//   eventSimulationResult: ModelList,
// };
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
  confirmationResult: null as null | ConfirmationList,
//   referenceCalendars: null as null | AsyncState
};

function ConfirmationResultReducer(state = INITIAL_STATE, action: any) {
  
  switch (action.type) {
    case ConfirmationListActionTypes.FETCH_ALL_EXECUTION_PENDING:
      return {
        ...state,
        pending: true,
        rejected: false,
        fulfilled: false,
        confirmationResult: null
      };
    case ConfirmationListActionTypes.FETCH_ALL_EXECUTION_FULFILLED:
      return {
        ...state,
        pending: false,
        fulfilled: true,
        rejected: false,
        id: action.id,
        confirmationResult: action.data
      };
    case ConfirmationListActionTypes.FETCH_ALL_EXECUTION_REJECTED:
      return {
        ...state,
        pending: false,
        fulfilled: false,
        rejected: true,
        confirmationResult: null,
       
      };
   
        
    default:
      return { ...state };
  }
  
  return state;
}

export default ConfirmationResultReducer;
