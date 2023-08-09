import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = (props) => {
    let isAuth=localStorage.getItem('authState');
    console.log('isAuth:', isAuth)
    if(!isAuth){
        return <Navigate to="/login"/>
    }
  return props.children
}

export default PrivateRoute
