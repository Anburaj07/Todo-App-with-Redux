import { legacy_createStore } from "redux";
import rootReducer from "./rootReducer";
import { todoReducer } from "./todoReducer";
//store
//useReducer takes Reducer fun, initstate,

const initstate={
    count:0,
    todos:[],
    isLoading:false,
    isError:false,
    errorMessage:""
}

export const store=legacy_createStore(todoReducer,initstate)