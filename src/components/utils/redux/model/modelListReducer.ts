import { ModelList } from "../../types";
// import productsData from "../../../../utils/data/products.json";
import { ModelListActionTypes } from "./modelListAction.ts";

export type ModelListState = {
  pending: boolean;
  fulfilled: boolean;
  rejected: boolean;
  modelList: ModelList,
};
// export type PredictiveSimulationState = {
//   pending: boolean;
//   fulfilled: boolean;
//   rejected: boolean;
//   eventSimulationResult: ModelList,
// };
// export type AsyncState = {
//   pending: boolean;
//   fulfilled: boolean;
//   rejected: boolean;
//   data: any;
// };

const INITIAL_STATE = {
  pending: false,
  fulfilled: false,
  rejected: false,
  eventSimulation: null as null | ModelList,
//   referenceCalendars: null as null | AsyncState
};

function ModelListReducer(state = INITIAL_STATE, action: any) {
  
  switch (action.type) {
    case ModelListActionTypes.FETCH_ALL_MODELS_PENDING:
      return {
        ...state,
        pending: true,
        rejected: false,
        fulfilled: false,
        eventSimulation: null
      };
    case ModelListActionTypes.FETCH_ALL_MODELS_FULFILLED:
      return {
        ...state,
        pending: false,
        fulfilled: true,
        rejected: false,
        id: action.id,
        eventSimulation: action.data
      };
    case ModelListActionTypes.FETCH_ALL_MODELS_REJECTED:
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
  
  // return state;
}

export default ModelListReducer;
