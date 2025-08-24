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
    const redirectToValidInterview = async () => {
      const {
        data: { content },
      } = await getAllScheduled({ page: 0, size: 6 });

      if (!interviewId) {
        const { id } = content[0];

        navigate(`${navigationLinks.scheduledInterviews}/${id}`, {
          state: { event: content[0] },
        });

        return;
      }

      if (interviewId) {
        const findExistEvent = content.find((event) => event.id === +interviewId);

        if (findExistEvent) {
          navigate(`${navigationLinks.scheduledInterviews}/${findExistEvent.id}`, {
            state: { event: findExistEvent },
          });

          return;
        }

        if (!findExistEvent) {
          const { data } = await getSingleInterview({ interviewId });

          navigate(`${navigationLinks.scheduledInterviews}/${data.id}`, {
            state: { event: data },
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
          }
        }
      }
    };

    redirectToValidInterview();
  }, []);

  return <Outlet />;
};

export default ScheduledInterviewsGuard;
