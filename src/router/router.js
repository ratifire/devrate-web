import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import navigationLinks from './links';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import RequireAuth from '../redux/auth/RequireAuth';
import ProfilePage from '../pages/ProfilePage';
import SpecializationPage from '../pages/SpecializationPage';
import SchedulePage from '../pages/ShedulePage';
import OtherProfilePage from '../pages/OtherProfile';
import ToastLayout from '../layouts/ToastLayout/ToastLayout';

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
            path: `${navigationLinks.profile}/:userId`,
            element: <OtherProfilePage />,
          },
          {
            path: navigationLinks.schedule,
            element: <SchedulePage />,
          },
          {
            path: navigationLinks.specializations,
            element: <SpecializationPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
