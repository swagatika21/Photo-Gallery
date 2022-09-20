import React from 'react';
import { Link } from 'react-router-dom';
import {auth} from './firebase';
import {useNavigate} from 'react-router-dom'
import './navbar.css'
function Navbar({user}) {
    const navigate=useNavigate()
    return (

        <>
            <nav class="navbar navbar-expand-lg blue-grey darken-3">
                <div class="container-fluid">
                    <span className="navbar-brand" ><i class="fa-regular fa-2xl fa-images"></i></span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                 </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                           
                            {
                                user?
                               
                                <li>
                                <button className='btn blue-grey darken-2 justify-content-end btn-logout' onClick={()=>{
                                    auth.signOut()
                                    navigate('/')
                                }}>Logout</button>
                                </li>
                               
                                :<>
                                  <li class="nav-item">
                                    <Link className="nav-link active" to="/">Login</Link>
                                  </li>
                                  <li class="nav-item">
                                    <Link className="nav-link active" to="/signup">Signup</Link>
                                  </li>
                                </>
                            }

                        </ul>

                    </div>
                </div>
            </nav>
           
        </>

    )
}

export default Navbar;