import { createBrowserRouter } from 'react-router';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage/HomePage';
import PrivateRoutes from '../redux/auth/PrivateRoutes.jsx';
import PersonalProfilePage from '../pages/ProfilePages/PersonalProfilePage';
import SpecializationPage from '../pages/SpecializationPage';
import SchedulePage from '../pages/SchedulePage';
import FaqPage from '../pages/FaqPage';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsAndConditions from '../pages/TermsAndConditions';
import RootPage from '../pages/RootPage';
import {
  InterviewRootPage,
  ScheduledInterviewsPage,
  PassedInterviewsPage,
  InterviewRequestsPage,
  SingleScheduledInterviewPage,
  SinglePassedInterviewPage,
  SingleRequestInterviewPage,
} from '../pages/InterviewPages';
import UserProfileRoute from './UserProfileRoute.jsx';
import navigationLinks from './links';

const router = createBrowserRouter([
  {
    path: navigationLinks.home,
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
        element: <PrivateRoutes />,
        children: [
          {
            element: <RootPage />,
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
                path: navigationLinks.interviews,
                element: <InterviewRootPage />,
                children: [
                  {
                    index: true,
                    element: <ScheduledInterviewsPage />,
                  },
                  {
                    path: navigationLinks.scheduledInterviews,
                    element: <ScheduledInterviewsPage />,
                  },
                  {
                    path: navigationLinks.passedInterviews,
                    element: <PassedInterviewsPage />,
                  },
                  {
                    path: navigationLinks.interviewRequests,
                    element: <InterviewRequestsPage />,
                  },
                  {
                    path: `${navigationLinks.scheduledInterviews}/:interviewId`,
                    element: <SingleScheduledInterviewPage />,
                  },
                  {
                    path: `${navigationLinks.passedInterviews}/:interviewId`,
                    element: <SinglePassedInterviewPage />,
                  },
                  {
                    path: `${navigationLinks.interviewRequests}/:requestId`,
                    element: <SingleRequestInterviewPage />,
                  },
                ],
              },
              {
                path: navigationLinks.faq,
                element: <FaqPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
