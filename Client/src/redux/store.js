import { applyMiddleware, legacy_createStore } from "redux";

// import { saveJobReducer } from "./reducer";
import { thunk } from "redux-thunk";
import rootReducer from "./rootReducer";

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
