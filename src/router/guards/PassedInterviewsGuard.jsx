import { Outlet, useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import {
  useLazyGetAllPassedInterviewsQuery,
  useLazyGetPassedInterviewByIdQuery,
} from '@redux/api/slices/interviews/passedInterviewsApiSlice';
import navigationLinks from '@router/links';

const PassedInterviewsGuard = () => {
  const navigate = useNavigate();
  const { interviewId } = useParams();

  const [getPassedInterview] = useLazyGetAllPassedInterviewsQuery();
  const [getPassedInterviewById] = useLazyGetPassedInterviewByIdQuery();

  const navigateToInterview = ({ event, id }) => {
    navigate(`${navigationLinks.passedInterviews}/${id}`, {
      state: { event },
    });
  };

  useEffect(() => {
    const init = async () => {
      const { content } = await getPassedInterview({ page: 0, size: 6 }).unwrap();

      if (Array.isArray(content) && content.length && !interviewId) {
        const firstEvent = content[0];
        const { id } = firstEvent;

        navigateToInterview({ event: firstEvent, id });
      }

      if (interviewId) {
        const findEvent = content.find((event) => event.id === +interviewId);

        if (findEvent) {
          const { id } = findEvent;

          navigateToInterview({ event: findEvent, id });

          return;
        }

        const event = await getPassedInterviewById({ interviewId: interviewId }).unwrap();

        navigateToInterview({ event, id: interviewId });
      }
    };

    init();
  }, []);

  return <Outlet />;
};

export default PassedInterviewsGuard;
