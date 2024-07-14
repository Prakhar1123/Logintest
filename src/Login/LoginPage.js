import React, { useState } from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
function LoginPage() {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('')
    const navigate=useNavigate();
    function handlesubmit(e){
        e.preventDefault();
        if(username==='user' && password==='password'){
            navigate('/dashboard')
        }
        else{
            setError('Invalid user')
        }
    }
  return (
    <div className='login'>
        <h1>Login page</h1>
        <form onSubmit={handlesubmit}>
        <label className='label'>Username:</label>
        <br/>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <br/>
        <label className='label'>Password:</label>
        <br/>

        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br/>
        <input type="Submit"></input>
        {error && <p style={{color:'red'}}>{error}</p>}
        </form>
 
    </div>
  )
}

export default LoginPage;
