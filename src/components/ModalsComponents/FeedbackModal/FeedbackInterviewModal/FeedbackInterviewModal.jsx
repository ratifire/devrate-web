import { useDispatch, useSelector } from 'react-redux';
import ModalLayoutProfile from '../../../../layouts/ModalLayoutProfile';
import { closeFeedbackModal } from '../../../../redux/feedback/feedbackModalSlice';
import { useGetInterviewByIdQuery } from '../../../../redux/feedback/interviewApiSlice';
import { RoleBasedFeedbackModal } from './components';

const FeedbackInterviewModal = () => {
  const dispatch = useDispatch();
  const { open, feedbackId } = useSelector((state) => state.feedback);
  const { data, isError, isFetching } = useGetInterviewByIdQuery({ id: feedbackId }, { skip: !feedbackId });

  const handleCloseModal = () => {
    dispatch(closeFeedbackModal());
  };

  const role = data?.participant?.role || '';

  return (
    <ModalLayoutProfile open={open} setOpen={handleCloseModal}>
      <RoleBasedFeedbackModal isError={isError} isFetching={isFetching} role={role} />
    </ModalLayoutProfile>
  );
};

export default FeedbackInterviewModal;
