import { applyMiddleware, legacy_createStore } from "redux";

import { saveJobReducer } from "./reducer";
import {thunk} from 'redux-thunk'

const store= legacy_createStore(saveJobReducer, applyMiddleware(thunk))


export default store

