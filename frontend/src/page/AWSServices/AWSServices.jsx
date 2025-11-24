import React from 'react'
import { Outlet } from 'react-router-dom'

const AWSServices = () => {
  return (
    <div className="w-full bg-gray-100 p-7">
      <h1 className='text-3xl font-semibold'>Scheduler</h1>
      <span className="btns items-center bg-white rounded-md shadow-sm mt-8 inline-block ">
        <button className="btn py-4 px-8 border border-gray-200 hover:bg-blue-100 ">EC2</button>
        <button className="btn py-4 px-8 border border-gray-200 hover:bg-blue-100">ASG</button>
        <button className="btn py-4 px-8 border border-gray-200 hover:bg-blue-100">RDS</button>
      </span>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AWSServices