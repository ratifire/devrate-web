import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import navigationLinks from './links';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import RequireAuth from '../redux/auth/RequireAuth';
import PersonalProfilePage from '../pages/ProfilePages/PersonalProfilePage';
import SpecializationPage from '../pages/SpecializationPage';
import SchedulePage from '../pages/ShedulePage';
import UserProfilePage from '../pages/ProfilePages/UserProfilePage';
import ToastLayout from '../layouts/ToastLayout/ToastLayout';
import ReviewsPage from '../pages/ReviewsPage';

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
            element: <PersonalProfilePage />,
          },
          {
            path: `${navigationLinks.profile}/:userId`,
            element: <UserProfilePage />,
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
            path: 'test',
            element: <ReviewsPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
