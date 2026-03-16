import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/slice/loginSlice';
import { useNavigate } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginStatus = useSelector((state) => state.login?.status);

    React.useEffect(() => {
        // Initialize Materialize CSS components
        M.AutoInit();
    }, []);

    React.useEffect(() => {
        console.log("Login status changed:", loginStatus);
        if (loginStatus === 'failed') {
            console.log("Login failed. Please check your credentials and try again.");
            alert("Login failed. Please check your credentials and try again.");
        }}, [loginStatus] );

    const handleLogin = () => {
        // Logic to handle login goes here
        console.log("Login with username:", username, "and password:", password);
        dispatch(login({ username, password }));
        if (loginStatus === 'succeeded') {
            console.log("Login successful!");
            // Navigate to the organisation list page 
            navigate('/organisationList');
        }
    };

  return (
    <div class="row " style={{paddingTopd: "40vh"}} >
        <form class="col s12">
            <div class="input-field col s12">
                <input 
                    value={username} 
                    id="user" 
                    type="text" 
                    class="validate"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label class="active" for="first_name2">First Name</label>
            </div>
            <div class="input-field col s12">
                <input 
                    value={password} 
                    id="password" 
                    type="password" 
                    class="validate"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label class="active" for="password">Password</label>
            </div>
        </form>
        {
            loginStatus === 'loading' ? 
      
            <div class="preloader-wrapper small active">
                <div class="spinner-layer spinner-teal-only">
                <div class="circle-clipper left">
                    <div class="circle"></div>
                </div><div class="gap-patch">
                    <div class="circle"></div>
                </div><div class="circle-clipper right">
                    <div class="circle"></div>
                </div>
                </div>
            </div>
            :
            <button className='btn' onClick={() => handleLogin()} >Login</button>
        }
  </div>
  )
}
