import { useSelector } from 'react-redux';
import { useGetInterviewByIdQuery } from '../../../../redux/feedback/interviewApiSlice';
import { selectModalData } from '../../../../redux/modal/modalSlice.js';
import { RoleBasedFeedbackModal } from './components';

const FeedbackInterviewModal = () => {
  const { feedbackId } = useSelector(selectModalData);
  const { data, isError, isFetching } = useGetInterviewByIdQuery({ id: feedbackId }, { skip: !feedbackId });

  const role = data?.participant?.role || '';

  return (
    <>
      <RoleBasedFeedbackModal isError={isError} isFetching={isFetching} role={role} />
    </>
  );
};

export default FeedbackInterviewModal;
