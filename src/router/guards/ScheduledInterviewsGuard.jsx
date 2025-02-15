import { Outlet, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useGetAllScheduledInterviewsQuery } from '../../redux/interviews/scheduledInterviewsApiSlice';
import navigationLinks from '../links';

const ScheduledInterviewsGuard = () => {
  const { data: scheduledInterviews } = useGetAllScheduledInterviewsQuery({ page: 1, size: 5 });
  const navigate = useNavigate();
  const firstInterviewId = scheduledInterviews?.content[0]?.id;
  const event = scheduledInterviews?.content[0];

  useEffect(() => {
    if (firstInterviewId) {
      navigate(`${navigationLinks.scheduledInterviews}/${firstInterviewId}`, {
        state: { event },
      });
    }
  }, [firstInterviewId]);

  return <Outlet />;
};

export default ScheduledInterviewsGuard;
