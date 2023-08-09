import { ADD, REDUCE,TODO_GET_SUCCESS,TODO_POST_SUCCESS, TODO_FAILURE, TODO_REQUEST, LOGIN_SUCCESS} from "./actionTypes"

export const addAction=()=>{
    return {type:ADD,payload:1}
}

export const reduceAction=()=>{
    return {type:REDUCE,payload:1}
}


export const todoRequestAction=()=>{
    return {type:TODO_REQUEST}
}
export const getTodoSuccessAction=(payload)=>{
    return {type:TODO_GET_SUCCESS,payload}
}
export const todoFailureAction=(payload)=>{
    return {type:TODO_FAILURE,payload}
}


export const postTodoSuccessAction=(payload)=>{
    return {type:TODO_POST_SUCCESS,payload}
}

export const loginSuccess=(payload)=>{
    return {type:LOGIN_SUCCESS,payload}
}