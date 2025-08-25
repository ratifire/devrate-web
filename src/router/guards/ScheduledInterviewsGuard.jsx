import { Outlet, useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import {
  useLazyGetAllScheduledInterviewsQuery,
  useLazyGetInterviewByIdBySocketUpdateQuery,
} from '@redux/api/slices/interviews/scheduledInterviewsApiSlice';
import { useDispatch } from 'react-redux';
import { openModal } from '@redux/slices/modal/modalSlice';
import { modalNames } from '@utils/constants/modalNames';
import navigationLinks from '../links';

const ScheduledInterviewsGuard = () => {
  const [getAllScheduled] = useLazyGetAllScheduledInterviewsQuery();
  const [getSingleInterview] = useLazyGetInterviewByIdBySocketUpdateQuery();
  const navigate = useNavigate();
  const { interviewId } = useParams();
  const dispatch = useDispatch();

  const searchParams = new URLSearchParams(location.search);
  const modalParam = searchParams.get('modal');
  const roleParam = searchParams.get('role');

  const redirectToInterview = ({ event, modal, role }) => {
    const { id } = event;
    const extraSearch = modal && role ? `?modal=${modal}&role=${role}` : '';

    navigate(`${navigationLinks.scheduledInterviews}/${id}${extraSearch}`, {
      state: { event },
    });

    if (modal && role) {
      dispatch(
        openModal({
          modalType: modalNames.feedbackInterviewModal,
          data: {
            feedbackId: id,
            role,
          },
        })
      );
    }
  };

  useEffect(() => {
    const init = async () => {
      const {
        data: { content },
      } = await getAllScheduled({ page: 0, size: 6 });

      if (Array.isArray(content) && content.length) {
        if (!interviewId) {
          redirectToInterview({ event: content[0], modal: modalParam, role: roleParam });

          return;
        }

        if (interviewId) {
          const findExistEvent = content.find((event) => event.id === +interviewId);

          if (findExistEvent) {
            redirectToInterview({ event: findExistEvent, modal: modalParam, role: roleParam });

            return;
          }

          if (!findExistEvent) {
            const { data } = await getSingleInterview({ interviewId });

            if (!data) {
              redirectToInterview({ event: content[0], modal: modalParam, role: roleParam });

              return;
            }

            const newData = {
              ...data,
              title: data.specializationName,
              date: data.startTime,
            };

            redirectToInterview({ event: newData, modal: modalParam, role: roleParam });
          }
        }
      }
    };

    init();
  }, []);

  return <Outlet />;
};

export default ScheduledInterviewsGuard;
