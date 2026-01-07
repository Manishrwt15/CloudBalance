import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import useUsers from '../../hook/useUsers';


const Table = () => {
    const navigate = useNavigate();

    const {users, loading, error} = useUsers();

    const handleAddClick = () => {
        navigate('add')
    }
    
    const handleEditClick = (row) => {
        navigate('edit',{state : {row}})
    }

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

  return (
    <div className='my-4 flex flex-col '>
        <div className='bg-white m-2 h-22 flex items-center justify-between rounded-md'>
            <button className='border m-4 p-2 h-12 text-white bg-blue-700 rounded-md text-center font-bold text-xl' onClick={handleAddClick}>Add New User</button>
        </div>


        <div className="mt-8 p-4 rounded-md w-full max-h-[700px] overflow-y-auto">
          <table className="border-gray-100 bg-white rounded-md w-full">
            <thead className="border-b-2 border-gray-200 sticky top-0 bg-gray-300 z-10">
              <tr className="text-left ">
                <th className="p-2">ID</th>
                <th className="p-2">First Name</th>
                <th className="p-2">Last Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Roles</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-gray-100">
                  <td className="p-2">{user.id}</td>
                  <td className="p-2">{user.firstName}</td>
                  <td className="p-2">{user.lastName}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">{user.role}</td>
                  <td className="p-2">
                    <button onClick={() => handleEditClick(user)}>
                      <EditIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

    </div>
  )
}

export default Table