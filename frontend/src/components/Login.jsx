import React, { useEffect } from 'react'
import logo from '../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    
    const navigate = useNavigate();

    const handleOnclick = () => {
        localStorage.setItem('loggedIn', 'true');
        navigate("/dashboard/user");
    }
    
    useEffect(() => {
      if(localStorage.getItem('loggedIn') === 'true'){
        navigate('/dashboard');
      }
    })
    
  return (
    <div className="m-auto w-2/4 h-2/3 flex flex-col justify-center items-center gap-8 p-4 my-68">
        <img src={logo} alt="" className='h-18 w-68' />
        <form action="" className='flex flex-col gap-2 text-sm text-gray-500 w-2/4 font-medium'>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder='Email' id='email' className='border border-gray-300 rounded-sm h-8 p-4' />
            <label htmlFor="password" className='mt-4'>Password</label>
            <input type="password" placeholder='Password' id='password' className='border border-gray-300 rounded-sm h-8 p-4' />
            <button className='border rounded-md bg-blue-400 text-white font-large text-lg mt-8 h-12 cursor-pointer'onClick={handleOnclick}>LOGIN</button>
        </form>
    </div>
  )
}

export default Login