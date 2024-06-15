import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import RequireAuth from '../redux/auth/RequireAuth';
import ProfilePage from '../pages/ProfilePage';
import SpecialisationPage from '../pages/SpecialisationPage';
import React from 'react';
import ToastLayout from '../layouts/ToastLayout/ToastLayout';
import navigationLinks from './links';

const router = createBrowserRouter([
  {
    path: navigationLinks.home,
    element: <ToastLayout />,
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
            path: navigationLinks.profile,
            element: <ProfilePage />,
          },
          {
            path: navigationLinks.specialisations,
            element: <SpecialisationPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
