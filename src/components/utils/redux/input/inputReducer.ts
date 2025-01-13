import { InputDataList } from "../../types";
// import productsData from "../../../../utils/data/products.json";
import { InputListActionTypes } from "./inputAction.ts";

export type InputListState = {
  pending: boolean;
  fulfilled: boolean;
  rejected: boolean;
  inputList: InputDataList,
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
  eventSimulation: null as null | InputDataList,
//   referenceCalendars: null as null | AsyncState
};

function InputListReducer(state = INITIAL_STATE, action: any) {
  
  switch (action.type) {
    case InputListActionTypes.FETCH_ALL_INPUTS_PENDING:
      return {
        ...state,
        pending: true,
        rejected: false,
        fulfilled: false,
        eventSimulation: null
      };
    case InputListActionTypes.FETCH_ALL_INPUTS_FULFILLED:
      return {
        ...state,
        pending: false,
        fulfilled: true,
        rejected: false,
        id: action.id,
        eventSimulation: action.data
      };
    case InputListActionTypes.FETCH_ALL_INPUTS_REJECTED:
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

export default InputListReducer;
