import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage/HomePage';
import RequireAuth from '../redux/auth/RequireAuth';
import PersonalProfilePage from '../pages/ProfilePages/PersonalProfilePage';
import SpecializationPage from '../pages/SpecializationPage';
import SchedulePage from '../pages/ShedulePage';
import ToastLayout from '../layouts/ToastLayout/ToastLayout';
import FaqPage from '../pages/FaqPage';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsAndConditions from '../pages/TermsAndConditions';
import navigationLinks from './links';
import UserProfileRoute from './UserProfileRoute';

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
        path: navigationLinks.privacy_policy,
        element: <PrivacyPolicy />,
      },
      {
        path: navigationLinks.terms_and_conditions,
        element: <TermsAndConditions />,
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
            element: <UserProfileRoute />,
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
            path: navigationLinks.faq,
            element: <FaqPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
