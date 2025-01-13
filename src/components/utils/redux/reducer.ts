import { combineReducers } from "redux";
// import EventSimulationReducer from "./Promo/eventSimulation";

import ModelListReducer  from "../../utils/redux/model/modelListReducer.ts";
import OutputDataReducer from "./output/outputListReducer.ts";
import InputListReducer from "./input/inputReducer.ts";
import fileUploadReducer from "./newexecution/fileUploadReducer.ts";
const rootReducer = combineReducers({
    ModelListReducer,
    OutputDataReducer,
    InputListReducer, 
    fileUploadReducer
});

export default rootReducer;
