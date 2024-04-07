import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import BaseLayout from './layouts/BaseLayout/BaseLayout';
import ProfilePage from './pages/ProfilePage';
import RequireAuth from './redux/auth/RequireAuth';

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

export function App() {
  return <RouterProvider router={router} />;
}
