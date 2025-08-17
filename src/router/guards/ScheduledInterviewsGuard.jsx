import { Outlet, useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import {
  useGetAllScheduledInterviewsQuery,
  useLazyGetSingleInterviewByIdQuery,
} from '@redux/api/slices/interviews/scheduledInterviewsApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { openModal as modalOpen, selectModalData } from '@redux/slices/modal/modalSlice';
import { modalNames } from '@utils/constants/modalNames';
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
  const modalData = useSelector(selectModalData);
  const { deleteIdItem } = useSelector((state) => state.scheduledInterview);

  const firstInterviewId = scheduledInterviews?.content[0]?.id;
  const content = scheduledInterviews?.content || [];
  const event = content[0];
  const searchParams = new URLSearchParams(location.search);
  const modalParam = searchParams.get('modal');
  const roleParam = searchParams.get('role');

  useEffect(() => {
    if (isFetchingAllInterviews || isLoadingAllInterviews) return;

    if (!content.length) {
      navigate(`${navigationLinks.scheduledInterviews}`);

      return;
    }

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

    if (modalParam) {
      const { eventId, oldEvent } = modalData;

      navigate(`${navigationLinks.scheduledInterviews}/${eventId}?modal=${modalParam}`, {
        state: { event: oldEvent },
      });

      return;
    }

    if (interviewId && !deleteIdItem) {
      const findEvent = scheduledInterviews?.content.find((event) => event.id === +interviewId);

      if (!findEvent) {
        getSingleInterview({ interviewId }).then((response) => {
          if (!response.data) {
            navigate(`${navigationLinks.scheduledInterviews}/${firstInterviewId}`, {
              state: { event },
            });

            return;
          }

          navigate(`${navigationLinks.scheduledInterviews}/${interviewId}`, {
            state: { event: response.data },
          });
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
  }, [firstInterviewId, event, content]);

  return <Outlet />;
};

export default ScheduledInterviewsGuard;
