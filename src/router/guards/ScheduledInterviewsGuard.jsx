import { Outlet, useLocation, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useGetAllScheduledInterviewsQuery } from '@redux/api/slices/interviews/scheduledInterviewsApiSlice';
import navigationLinks from '../links';

const ScheduledInterviewsGuard = () => {
  const { data: scheduledInterviews } = useGetAllScheduledInterviewsQuery({ page: 0, size: 6 });
  const navigate = useNavigate();
  const location = useLocation();
  const firstInterviewId = scheduledInterviews?.content[0]?.id;
  const event = scheduledInterviews?.content[0];
  const patchName = location.pathname.split('/')[3];

  useEffect(() => {
    if (firstInterviewId && !patchName) {
      navigate(`${navigationLinks.scheduledInterviews}/${firstInterviewId}`, {
        state: { event },
      });
    }
  }, [firstInterviewId, patchName]);

  return <Outlet />;
};

export default ScheduledInterviewsGuard;
