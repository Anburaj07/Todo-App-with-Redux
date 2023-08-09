import React, { useEffect } from 'react'
import Todoinput from './Todoinput'
import axios from 'axios'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTodoSuccessAction, todoFailureAction, todoRequestAction } from '../Redux/action'

const Todo = () => {
  // const todos=useSelector((store)=>store.todos);
  // const isLoading=useSelector((store)=>store.isLoading);
  // const isError=useSelector((store)=>store.isError);
  // const errorMessage=useSelector((store)=>store.errorMessage);

  const {todos,isLoading,isError,errorMessage}=useSelector(store=>{
    return{
      todos:store.todos,
      isLoading:store.isLoading,
      isError:store.isError,
      errorMessage:store.errorMessage
    }
  },shallowEqual)

  console.log('toto render')
  const dispatch=useDispatch();
  useEffect(()=>{
    getTodos()
  },[])

  const getTodos=()=>{
    dispatch(todoRequestAction())
    axios.get("http://localhost:8080/todos")
    .then((res)=>{
      dispatch(getTodoSuccessAction(res.data))
      console.log(res.data)
    })
    .catch((err)=>{
      dispatch(todoFailureAction(err.message))
      console.log(err.messaage)
    })
  }
  
  return (
    <div>
      <Todoinput/>
      {isError && <h3>{errorMessage}</h3>}
      {todos.map((el)=>(
        <h3 key={el.id}>{el.title} - {el.status===true? "True":"False" }</h3>
      ))}
    </div>
  )
}

export default Todo
