import React, { useState } from 'react'
import { auth } from './firebase';
import {useNavigate} from 'react-router-dom';
import './signup.css'

export default function Signup()
 {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate()
  const handleSubmit=async (e)=>{
    e.preventDefault()
    console.log(email,password);
    try {
      const res=await auth.createUserWithEmailAndPassword(email,password)
     window.M.toast({html: `Welcome! ${res.user.email}`,classes:"green"})
     navigate('/home')
    } catch (error) {
      window.M.toast({html: error.message,classes:"green"})
    }
   
  }
  return (
    <div className='container-signup'>
    <div className='signup-text'>
    <img alt='signup' src='https://images.unsplash.com/photo-1600368126026-2e996e686f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGJsdWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'style={{height:"450px",width:"300px",borderRadius:"7px"}}/>
    </div>
      
      <form onSubmit={(e)=>handleSubmit(e)}>

      <div className='signup'>
      <h3>Get Started !</h3>
      <input type="email" placeholder="email" autoComplete='off' autof onChange={(e)=>setEmail(e.target.value)} />
      <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
      <button class="btn btn-outline-secondary" type="submit">Signup</button>
      </div>

      </form>
    </div>
  )
}
