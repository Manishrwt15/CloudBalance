import React from 'react'
import { Navigate } from 'react-router-dom';

const Protected = ({children}) => {
    const isLoggedIn = localStorage.getItem('authToken') ? true : false;

    if(!isLoggedIn){
        return <Navigate to="/login" replace />
    }
    
  return children;
}

export default Protected