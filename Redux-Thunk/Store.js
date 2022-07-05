import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux"
import Reducer from "./Reducer";

import thunk from 'redux-thunk'
export const store=createStore(Reducer,applyMiddleware(thunk))
