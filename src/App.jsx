import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import ProfilePage from './pages/ProfilePage';
import BaseLayout from './layouts/BaseLayout/BaseLayout';
import authorizedRouteLoader from './utils/helpers/authorizedRouteLoader';

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
        path: 'signup',
        element: <HomePage />,
      },
      {
        path: 'profile',
        element: <ProfilePage />,
        loader: authorizedRouteLoader,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
