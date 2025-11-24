import React from 'react'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

const Dashboard = () => {
  const isAuthenticate = localStorage.getItem("loggedIn") === "true"; 
  const [sideBar, setSideBar] = useState(true);

  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
        <Header sideBar={sideBar} setSideBar ={setSideBar}/>
        <main className='flex'>
            {isAuthenticate && <Sidebar sideBar={sideBar}/>}
            <Outlet/>
        </main>
    </div>
  )
}

export default Dashboard