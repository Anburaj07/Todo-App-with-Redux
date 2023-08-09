import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../Redux/action';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [email,setEmail]=useState('eve.holt@reqres.in')
    const [password,setPassword]=useState('cityslicka')
    const handleSubmit=(e)=>{
        e.preventDefault();
        let user={
            email,
            password
        }
        loginUser(user)
    }

    const loginUser=(userObj)=>{
        axios.post('https://reqres.in/api/login',userObj)
        .then((res)=>{
            console.log(res.data)
            const {token}=res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('authState', JSON.stringify(true));
            dispatch(loginSuccess(token));     
            navigate('/')                   
        })
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Email'value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='Enter user password' value={password}onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
