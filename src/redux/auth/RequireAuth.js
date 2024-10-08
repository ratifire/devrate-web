import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from './authSlice';

const RequireAuth = () => {
  const currentUser = useSelector(selectCurrentUser);
  const location = useLocation();

  const isAuthenticated = currentUser?.isAuthenticated;

  return isAuthenticated ? <Outlet /> : <Navigate to='/' state={{ from: location }} replace />;
};

export default RequireAuth;
