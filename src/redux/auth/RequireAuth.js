import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';
import { useSelector } from 'react-redux';

const RequireAuth = () => {
  const { isAuth } = useSelector((state) => state.tokens);
  const location = useLocation();

  return isAuth ? <Outlet /> : <Navigate replace state={{ from: location }} to='/' />;
};

export default RequireAuth;
