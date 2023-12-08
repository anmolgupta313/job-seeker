import { combineReducers } from "redux";
import { saveJobReducer,delJobReducer,fetchApiReducer } from "./reducer";

const rootReducer= combineReducers({
    saveJob:saveJobReducer,
    delJob:delJobReducer,
    getFetchData:fetchApiReducer
})

export default rootReducer