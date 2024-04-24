import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RequireAuth = () => {
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.userId);

  return isAuthenticated ? <Outlet /> : <Navigate to='/' state={{ from: location }} replace />;
};

export default RequireAuth;
