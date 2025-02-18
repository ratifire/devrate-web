import { useSelector } from 'react-redux';
import { useGetInterviewByIdQuery } from '@redux/api/slices/feedback/interviewApiSlice';
import { selectModalData } from '@redux/slices/modal/modalSlice.js';
import { RoleBasedFeedbackModal } from './components';

const FeedbackInterviewModal = () => {
  const modalData = useSelector(selectModalData);
  const { data, isError, isFetching } = useGetInterviewByIdQuery(
    { id: modalData?.feedbackId },
    { skip: !modalData?.feedbackId }
  );

  const role = data?.participant?.role || '';

  return (
    <>
      <RoleBasedFeedbackModal isError={isError} isFetching={isFetching} role={role} />
    </>
  );
};

export default FeedbackInterviewModal;
