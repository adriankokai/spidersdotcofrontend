import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/slice/loginSlice';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginStatus = useSelector((state) => state.login?.status);

    const handleLogin = () => {
        // Logic to handle login goes here
        console.log("Login with username:", username, "and password:", password);
        dispatch(login({ username, password }));
        if (loginStatus === 'succeeded') {
            console.log("Login successful!");
            // Navigate to the company list page 
            navigate('/companyList');
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
        <button className='btn' onClick={() => handleLogin()} >Login</button>
  </div>
  )
}
