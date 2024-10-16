import React from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { useDispatch, useSelector } from 'react-redux';
import { closeFeedbackModal } from '../../../redux/feedback/feedbackModalSlice';
import { useGetInterviewByIdQuery } from '../../../redux/feedback/interviewApiSlice';
import { RenderRoleModal } from './components/RenderRoleModal';

const FeedbackModal = () => {
  const dispatch = useDispatch();
  const { open, feedbackId } = useSelector((state) => state.feedback);
  const { data, isError, isFetching } = useGetInterviewByIdQuery({id: feedbackId}, { skip: !feedbackId });

  const handleCloseModal = () => {
    dispatch(closeFeedbackModal());
  }

  const role = data?.participant?.role || '';

  return (
    <ModalLayoutProfile setOpen={handleCloseModal} open={open}>
      <RenderRoleModal isFetching={isFetching} isError={isError} role={role} data={data} />
    </ModalLayoutProfile>
  )
}

export default FeedbackModal;
