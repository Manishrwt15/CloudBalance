import React from 'react'
import userData from './index.js';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';


const Table = () => {
    const navigate = useNavigate();

    const handleAddClick = () => {
        navigate('add')
    }
    
    const handleEditClick = (row) => {
        navigate('edit',{
            state : {row}
        })
    }


  return (
    <div className='mt-4'>
        <div className='bg-white m-2 h-22 flex items-center justify-between rounded-md'>
            <button className='border m-4 p-2 h-12 text-white bg-blue-700 rounded-md text-center font-bold text-xl' onClick={handleAddClick}>Add New User</button>
        </div>

        <div className="table mt-8 overflow-auto rounded-md w-full">            
        <table className='border-gray-100 table-auto bg-white rounded-md w-full '>
                <thead className='border-b-2 border-gray-200'>
                    <tr className='bg-gray-200 text-left'>
                        <th className='p-2'>ID</th>
                        <th className='p-2'>First Name</th>
                        <th className='p-2'>Last Name</th>
                        <th className='p-2'>Email</th>
                        <th className='p-2'>Roles</th>
                        <th className='p-2'>Last Login</th>
                        <th className='p-2'>Actions</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        userData.map((user) => (
                            <tr key={user.id} className='border-b border-gray-100  m-8'>
                                <td className='p-2'>{user.id}</td>
                                <td className='p-2'>{user.firstname}</td>
                                <td className='p-2'>{user.lastname}</td>
                                <td className='p-2'>{user.email}</td>
                                <td className='p-2'>{
                                (user.roles).map((role, index) => (
                                    <span key={index} className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 m-1">
                                        {role}
                                    </span>
                                ))
                                }</td>
                                <td className='p-2'>{user.lastLogin ? new Date(user.lastLogin).toLocaleString() : 'Never'}</td>
                                <td className='p-2'><button onClick={() => handleEditClick(user)} className='cursor-pointer'><EditIcon/></button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default Table