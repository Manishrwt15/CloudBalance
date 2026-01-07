import React from 'react'
import { Route } from 'react-router-dom'
import AddUser from '../page/UserManagement/Users/AddUser.jsx'
import EditUser from '../page/UserManagement/Users/EditUser.jsx'
import Table from '../page/UserManagement/Table.jsx'
import UserManagement from '../page/UserManagement/UserManagement.jsx'

const UserRoutes = () => {
  return (
    <Route path="user"  element={<UserManagement/>}> 
            <Route index element={<Table/>}/>
            <Route path="add" element={<AddUser/>}/>
            <Route path="edit" element={<EditUser/>}/>  
    </Route>
  )
}

export default UserRoutes