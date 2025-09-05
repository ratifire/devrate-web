import { Outlet, useNavigate } from 'react-router';
import { useEffect } from 'react';
import {
  useLazyGetAllPassedInterviewsQuery,
  useLazyGetPassedInterviewByIdQuery,
} from '@redux/api/slices/interviews/passedInterviewsApiSlice';
import navigationLinks from '@router/links';

const PassedInterviewsGuard = () => {
  const [getPassedInterview] = useLazyGetAllPassedInterviewsQuery();
  const [getPassedInterviewById] = useLazyGetPassedInterviewByIdQuery();
  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      const { content } = await getPassedInterview({ page: 0, size: 6 }).unwrap();

      if (Array.isArray(content) && content.length) {
        const firstInterviewId = content[0].id;
        const event = await getPassedInterviewById({ interviewId: firstInterviewId }).unwrap();

        navigate(`${navigationLinks.passedInterviews}/${firstInterviewId}`, {
          state: { event },
        });
      }
    };

    init();
  }, []);

  return <Outlet />;
};

export default PassedInterviewsGuard;
