import React from 'react';
import { Outlet } from 'react-router-dom';

const UserManagement = () => {

  return (
    <div className="w-full bg-gray-200 p-7">
        <h1 className='text-3xl font-semibold'>Users</h1>
        <main className=''>
            <Outlet />
        </main>
    </div>
  )
}

export default UserManagement