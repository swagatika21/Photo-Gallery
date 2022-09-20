import React, { useState } from 'react';
import {auth} from "./firebase";
import {useNavigate} from 'react-router-dom'
import './login.css'

export default function Login()
 {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(email,password);
    try {
      const res=await auth.signInWithEmailAndPassword(email,password)
     window.M.toast({html: `Welcome! ${res.user.email}`,classes:"green"})
     navigate('/home')
    } catch (error) {
      window.M.toast({html: error.message,classes:"green"})
    }
  }
  return (
    <div className='container-login'>
      
      <div className='login-text'>
      <img alt='login-img' src='https://images.unsplash.com/photo-1501577316686-a5cbf6c1df7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGxhbnQlMjBibHVlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' style={{height:"450px",width:"300px",borderRadius:"7px"}}/>
      </div>
      
      <form onSubmit={(e)=>handleSubmit(e)}>
      <div className='login'>
      <h2>Welcome to your gallery</h2>
      <h4>Login to continue!</h4>
      <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
      <button class="btn btn-outline-secondary" type="submit">Login</button>
      </div>
      <br />
      <p>Don't have an account?<a href='/signup'>Sign Up</a></p>
      </form>
     
    </div>
  )
}
