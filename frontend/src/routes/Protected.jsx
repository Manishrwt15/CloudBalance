import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Protected = ({ allowedRoles }) => {
  const role = useSelector(state => state.auth.role);
  const isLoggedIn = localStorage.getItem('authToken');

  if (!isLoggedIn) return <Navigate to="/login" replace />;

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default Protected;
