import { Outlet, useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import {
  useGetAllScheduledInterviewsQuery,
  useLazyGetInterviewByIdBySocketUpdateQuery,
} from '@redux/api/slices/interviews/scheduledInterviewsApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { openModal as modalOpen, selectModalData } from '@redux/slices/modal/modalSlice';
import { modalNames } from '@utils/constants/modalNames';
import navigationLinks from '../links';

const ScheduledInterviewsGuard = () => {
  const { data: scheduledInterviews, isFetching: isFetchingInterviews } = useGetAllScheduledInterviewsQuery({
    page: 0,
    size: 6,
  });
  const [getSingleInterview, { isFetching: isFetchingLazyInterviews }] = useLazyGetInterviewByIdBySocketUpdateQuery();
  const navigate = useNavigate();
  const { interviewId } = useParams();
  const dispatch = useDispatch();
  const modalData = useSelector(selectModalData);
  const { deleteIdItem } = useSelector((state) => state.scheduledInterview);

  const searchParams = new URLSearchParams(location.search);
  const modalParam = searchParams.get('modal');
  const roleParam = searchParams.get('role');
  const content = scheduledInterviews?.content || [];

  useEffect(() => {
    if (isFetchingInterviews || !scheduledInterviews || isFetchingLazyInterviews) return;

    const firstInterviewId = scheduledInterviews?.content[0]?.id;
    const content = scheduledInterviews?.content || [];
    const event = content[0];

    if (!content.length) {
      navigate(`${navigationLinks.scheduledInterviews}`);

      return;
    }

    const getInterviews = async () => {
      if (modalParam && roleParam) {
        const response = await getSingleInterview({ interviewId });

        if (!response.data) return;

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
          await getSingleInterview({ interviewId });

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
    };

    getInterviews();
  }, [content]);

  return <Outlet />;
};

export default ScheduledInterviewsGuard;
