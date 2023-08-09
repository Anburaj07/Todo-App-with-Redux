import { ADD, REDUCE, TODO_FAILURE, TODO_GET_SUCCESS, TODO_POST_REQUEST, TODO_POST_SUCCESS, TODO_REQUEST } from "./actionTypes"
// const initstate={
//     count:0,
//     todos:[],
//     isLoading:false,
//     isError:false,
//     errorMessage:""
// }
export const todoReducer=(state,{type,payload})=>{
    switch(type){
        case ADD:{
            return{...state,count:state.count+payload}
        }
        case REDUCE:{
            return {...state,count:state.count-payload}
        }
        case TODO_REQUEST:{
            return {...state,isLoadig:true,isError:false,errorMessage:''}
        }
        case TODO_GET_SUCCESS:{
            return {...state,isLoadig:false,todos:payload}
        }
        case TODO_FAILURE:{
            return {...state,isLoadig:false,isError:true,errorMessage:payload}
        }

        case TODO_POST_SUCCESS:{
            return {...state,isLoadig:false,todos:[...state.todos,payload]}
        }

        default:
            return state
    }
}