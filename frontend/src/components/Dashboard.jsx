import React from 'react'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  const isAuthenticate = localStorage.getItem("loggedIn") === "true"; 

  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
        <Header/>
        <main className='flex'>
            {isAuthenticate && <Sidebar />}
            <Outlet/>
        </main>
    </div>
  )
}

export default Dashboard