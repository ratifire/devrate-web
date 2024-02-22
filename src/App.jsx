import React from 'react';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import ProfilePage from './pages/ProfilePage';
import { store } from './redux/store/store';
import BaseLayout from './layouts/BaseLayout/BaseLayout';

export const authorizedRouteLoader = () => {
  const token = store.getState().auth.token;
  if (!token) {
    return redirect('/signup');
  }
  return true;
};
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
