import React from 'react'
import Header from './CommonLayout/Header'
import Sidebar from './CommonLayout/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className=' bg-gray-100 h-screen overflow-hidden'>
        <Header className=''/>
        <main className='flex'>
            <Sidebar />
            <Outlet/>
        </main>
    </div>
  )
}

export default Dashboard