// В App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import ToastLayout from './layouts/ToastLayout/ToastLayout';
import ProfilePage from './pages/ProfilePage';
import RequireAuth from './redux/auth/RequireAuth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
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
  return (
    <ToastLayout> {/* Обернуть весь контент в ToastLayout */}
      <RouterProvider router={router} />
    </ToastLayout>
  );
}
