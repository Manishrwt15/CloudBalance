import React from 'react'
import { Route } from 'react-router-dom'
import AddUser from './Users/AddUser.jsx'
import EditUser from './Users/EditUser.jsx'
import Table from './Users/Table.jsx'
import UserManagement from './UserManagement.jsx'

const UserRoutes = () => {
  return (
    <Route path="user" element={<UserManagement/>}> 
            <Route index element={<Table/>}/>
            <Route path="add" element={<AddUser/>}/>
            <Route path="edit" element={<EditUser/>}/>  
    </Route>
  )
}

export default UserRoutes