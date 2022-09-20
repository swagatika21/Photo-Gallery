import React, { useEffect, useState } from "react";
import "./styles.css";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Navbar from "./pages/navbar";
import {
  Routes,
  Route,
} from "react-router-dom";
import {auth } from "./pages/firebase";

function App() 
{
  const [user,setUser]=useState(null)
  useEffect(()=>{
   auth.onAuthStateChanged(user=>{
    if (user) {
      setUser(user)
    } else {
      setUser(null)
    }

   })
  },[])

  return (
    <>
    <Navbar user={user}/>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="home" element={<Home user={user}/>}/>
    <Route path="signup" element={<Signup />} />
    </Routes>
    </>
    
  );
}

export default App;
