import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { closeFeedbackModal } from '../../../redux/feedback/feedbackModalSlice';
import { useGetInterviewByIdQuery } from '../../../redux/feedback/interviewApiSlice';
import { RoleBasedFeedbackModal } from './components';

const FeedbackModal = () => {
  const dispatch = useDispatch();
  const { open, feedbackId } = useSelector((state) => state.feedback);
  const { data, isError, isFetching } = useGetInterviewByIdQuery({ id: feedbackId }, { skip: !feedbackId });

  const handleCloseModal = () => {
    dispatch(closeFeedbackModal());
  };

  const role = data?.participant?.role || '';

  return (
    <ModalLayoutProfile setOpen={handleCloseModal} open={open}>
      <RoleBasedFeedbackModal isFetching={isFetching} isError={isError} role={role} />
    </ModalLayoutProfile>
  );
};

export default FeedbackModal;
