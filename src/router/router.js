import { createBrowserRouter } from 'react-router-dom';
import BaseLayout from '../layouts/BaseLayout/BaseLayout';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import RequireAuth from '../redux/auth/RequireAuth';
import ProfilePage from '../pages/ProfilePage';
import React from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        element: <RequireAuth />,
        children: [
          {
            path: 'profile',
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
]);

export default router;
