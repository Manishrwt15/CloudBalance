import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { useNavigate } from 'react-router-dom'
import {login} from '../api/authApi';
import { useDispatch } from 'react-redux';
import {loginSuccess} from '../store/actions/authActions';
import { showSuccess, showError } from '../utils/toast';

const Login = () => {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            const data = await login(email, password);
            localStorage.setItem('authToken', data.jwt);
            dispatch(loginSuccess({name: data.name, role: data.role}));

            const targetRoute = (data.role === 'ADMIN' || data.role === 'READ_ONLY') ? '/dashboard/user' : '/dashboard/cost';
            showSuccess("Login successful!");
            navigate(targetRoute);
        }
        catch(err){
            showError(err.response.data.message || "Login failed. Please try again.");
        }
    }
    
  return (
    <div className="m-auto w-2/4 h-2/3 flex flex-col justify-center items-center gap-8 p-4 my-68">
        <img src={logo} alt="" className='h-18 w-68' />
        <form className='flex flex-col gap-2 text-sm text-gray-500 w-2/4 font-medium'>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder='Email' id='email' className='border border-gray-300 rounded-sm h-8 p-4' onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="password" className='mt-4'>Password</label>
            <input type="password" placeholder='Password' id='password' className='border border-gray-300 rounded-sm h-8 p-4' onChange={(e) => setPassword(e.target.value)} />
            <button className='border rounded-md bg-blue-400 text-white font-large text-lg mt-8 h-12 cursor-pointer'onClick={handleLogin} type='submit'>LOGIN</button>
        </form>
    </div>
  )
}

export default Login