import { Outlet, useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import {
  useGetAllScheduledInterviewsQuery,
  useLazyGetSingleInterviewByIdQuery,
} from '@redux/api/slices/interviews/scheduledInterviewsApiSlice';
import { useDispatch } from 'react-redux';
import { openModal as modalOpen } from '@redux/slices/modal/modalSlice.js';
import { modalNames } from '@utils/constants/modalNames.js';
import navigationLinks from '../links';

const ScheduledInterviewsGuard = () => {
  const {
    data: scheduledInterviews,
    isLoading: isLoadingAllInterviews,
    isFetching: isFetchingAllInterviews,
  } = useGetAllScheduledInterviewsQuery({ page: 0, size: 6 });
  const [getSingleInterview] = useLazyGetSingleInterviewByIdQuery();
  const navigate = useNavigate();
  const { interviewId } = useParams();
  const dispatch = useDispatch();

  const firstInterviewId = scheduledInterviews?.content[0]?.id;
  const event = scheduledInterviews?.content[0];
  const searchParams = new URLSearchParams(location.search);
  const modalParam = searchParams.get('modal');
  const roleParam = searchParams.get('role');

  useEffect(() => {
    if (isFetchingAllInterviews || isLoadingAllInterviews) return;

    if (modalParam && roleParam) {
      getSingleInterview({ interviewId }).then((response) => {
        dispatch(
          modalOpen({
            modalType: modalNames.feedbackInterviewModal,
            data: {
              feedbackId: interviewId,
              role: roleParam,
            },
          })
        );

        navigate(`${navigationLinks.scheduledInterviews}/${interviewId}?modal=${modalParam}&role=${roleParam}`, {
          state: { event: response.data },
        });
      });

      return;
    }

    if (interviewId) {
      const findEvent = scheduledInterviews?.content.find((event) => event.id === +interviewId);

      if (!findEvent) {
        navigate(`${navigationLinks.scheduledInterviews}/${firstInterviewId}`, {
          state: { event },
        });

        return;
      }

      navigate(`${navigationLinks.scheduledInterviews}/${interviewId}`, {
        state: { event: findEvent },
      });

      return;
    }

    if (firstInterviewId && !interviewId) {
      navigate(`${navigationLinks.scheduledInterviews}/${firstInterviewId}`, {
        state: { event },
      });
    }
  }, [firstInterviewId, event, scheduledInterviews]);

  return <Outlet />;
};

export default ScheduledInterviewsGuard;
