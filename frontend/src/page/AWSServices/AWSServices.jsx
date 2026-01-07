import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const AWSServices = () => {
  
  const navigate = useNavigate();

  const handleOnEC2 = () => {
    navigate('ec2')
  }

  const handleOnASG = () => {
    navigate('asg');
  }

  const handleOnRDS = () => {
    navigate('rds')
  }

  
  return (
    <div className="w-full bg-gray-200 p-7">
      <h1 className='text-3xl font-semibold'>Scheduler</h1>
      <span className="btns items-center bg-white rounded-md shadow-sm mt-8 inline-block ">
        <button className="btn py-4 px-8 border border-gray-200 hover:bg-blue-100" onClick={handleOnEC2}>EC2</button>
        <button className="btn py-4 px-8 border border-gray-200 hover:bg-blue-100" onClick={handleOnASG}>ASG</button>
        <button className="btn py-4 px-8 border border-gray-200 hover:bg-blue-100" onClick={handleOnRDS}>RDS</button>
      </span>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AWSServices