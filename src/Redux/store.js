import { legacy_createStore,combineReducers } from "redux";
//store
import countReducer from "./Counter/countReducer";
import { todoReducer } from "./Todo/todoReducer";
import authReducer from "./Counter/countReducer";

const rootReducer=combineReducers({countReducer,todoReducer,authReducer})

export const store=legacy_createStore(rootReducer)