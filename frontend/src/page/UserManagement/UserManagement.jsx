import React from 'react'
import Table from './Users/Table.jsx';
import { Outlet } from 'react-router-dom';

const UserManagement = () => {

  return (
    <div className="w-full bg-gray-100 p-7 ">
        <h1 className='text-3xl font-semibold'>Users</h1>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default UserManagement