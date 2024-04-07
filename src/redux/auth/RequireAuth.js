import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { store } from '../store/store';

const RequireAuth = () => {
  const sessionId = store.getState().auth.userId;

  const location = useLocation();

  return sessionId ? <Outlet /> : <Navigate to='/' state={{ from: location }} replace />;
};
export default RequireAuth;
