import React from 'react'
import Form from '../../../components/CommonLayout/Form.jsx';
import { useLocation } from 'react-router-dom'

const EditUser = () => {
  const location = useLocation();
  const rowData = location.state?.row;
  
  return (
    <div className='w-full'>
        <h1 className='text-3xl font-black p-4'>Edit User</h1>
        <Form data = {rowData}/>
    </div>
  )
}

export default EditUser