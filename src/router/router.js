import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import RequireAuth from '../redux/auth/RequireAuth';
import ProfilePage from '../pages/ProfilePage';
import SpecializationPage from '../pages/SpecializationPage';
import SchedulePage from '../pages/ShedulePage';
import React from 'react';
import ToastLayout from '../layouts/ToastLayout/ToastLayout';
import navigationLinks from './links';
import Test from '../pages/Test';

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
            path: navigationLinks.schedule,
            element: <SchedulePage />,
          },
          {
            path: navigationLinks.specializations,
            element: <SpecializationPage />,
          },
          {
            path: '/test',
            element: <Test/>
          }
        ],
      },
    ],
  },
]);

export default router;
