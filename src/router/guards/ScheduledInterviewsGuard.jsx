/* eslint-disable */
import { Outlet, useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import {
  useLazyGetAllScheduledInterviewsQuery,
  useLazyGetInterviewByIdBySocketUpdateQuery,
} from '@redux/api/slices/interviews/scheduledInterviewsApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { openModal as modalOpen, selectModalData } from '@redux/slices/modal/modalSlice';
import { modalNames } from '@utils/constants/modalNames';
import navigationLinks from '../links';

const ScheduledInterviewsGuard = () => {
  const [getAllScheduled] = useLazyGetAllScheduledInterviewsQuery();
  const [getSingleInterview] = useLazyGetInterviewByIdBySocketUpdateQuery();
  const navigate = useNavigate();
  const { interviewId } = useParams();
  const dispatch = useDispatch();
  const modalData = useSelector(selectModalData);
  const { deleteIdItem } = useSelector((state) => state.scheduledInterview);

  const searchParams = new URLSearchParams(location.search);
  const modalParam = searchParams.get('modal');
  const roleParam = searchParams.get('role');

  useEffect(() => {
    const params = {};
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }

    const redirectToValidInterview = async () => {
      let findEventId;

      const {
        data: { content },
      } = await getAllScheduled({ page: 0, size: 6 });

      // This is insurance in case the user entered the interview ID in the URL.
      if (interviewId) {
        content.find((event) => event.id === +interviewId);
      }

      // Redirect if interview ID is found but not in pagination
      if (!findEventId) {
        const { data } = await getSingleInterview({ interviewId });

        const newData = {
          ...data,
          title: data.specializationName,
          date: data.startTime,
        };

        const { id } = newData;

        navigate(`${navigationLinks.scheduledInterviews}/${id}`, {
          state: { event: newData },
        });

        if (modalParam && roleParam) {
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
            state: { event: newData },
          });
        }

        return;
      }

      const { id } = content[0];

      navigate(`${navigationLinks.scheduledInterviews}/${id}`, {
        state: { event: content[0] },
      });
    };

    redirectToValidInterview();
  }, []);

  // useEffect(() => {
  //   if (isFetchingInterviews || !scheduledInterviews || isFetchingLazyInterviews) return;
  //
  //   const firstInterviewId = scheduledInterviews?.content[0]?.id;
  //   const content = scheduledInterviews?.content || [];
  //   const event = content[0];
  //
  //   if (!content.length) {
  //     navigate(`${navigationLinks.scheduledInterviews}`);
  //
  //     return;
  //   }
  //
  //   if (modalParam && roleParam) {
  //     const findEvent = scheduledInterviews?.content.find((event) => event.id === +interviewId);
  //
  //     if (!findEvent) return;
  //
  //     dispatch(
  //       modalOpen({
  //         modalType: modalNames.feedbackInterviewModal,
  //         data: {
  //           feedbackId: interviewId,
  //           role: roleParam,
  //         },
  //       })
  //     );
  //
  //     navigate(`${navigationLinks.scheduledInterviews}/${interviewId}?modal=${modalParam}&role=${roleParam}`, {
  //       state: { event: findEvent },
  //     });
  //
  //     return;
  //   }
  //
  //   if (modalParam) {
  //     const { eventId, oldEvent } = modalData;
  //
  //     navigate(`${navigationLinks.scheduledInterviews}/${eventId}?modal=${modalParam}`, {
  //       state: { event: oldEvent },
  //     });
  //
  //     return;
  //   }
  //
  //   if (interviewId && !deleteIdItem) {
  //     const findEvent = scheduledInterviews?.content.find((event) => event.id === +interviewId);
  //
  //     navigate(`${navigationLinks.scheduledInterviews}/${interviewId}`, {
  //       state: { event: findEvent },
  //     });
  //
  //     return;
  //   }
  //
  //   if (firstInterviewId && !interviewId) {
  //     navigate(`${navigationLinks.scheduledInterviews}/${firstInterviewId}`, {
  //       state: { event },
  //     });
  //   }
  // }, [content]);

  return <Outlet />;
};

export default ScheduledInterviewsGuard;
