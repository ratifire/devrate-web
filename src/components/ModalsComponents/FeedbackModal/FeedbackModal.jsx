/* eslint-disable */
import React from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { useDispatch, useSelector } from 'react-redux';
import { closeFeedbackModal } from '../../../redux/feedback/feedbackModalSlice';
import { useGetInterviewByIdQuery } from '../../../redux/feedback/interviewApiSlice';
import { RenderRoleModal } from './components/RenderRoleModal';

const FeedbackModal = () => {
  const dispatch = useDispatch();
  const { open, feedbackId } = useSelector((state) => state.feedback);
  const { data = [], isError, isFetching } = useGetInterviewByIdQuery({id: feedbackId}, { skip: !feedbackId });

  if (isFetching) {
    return <div>Loading...</div>
  }

  const { interviewStartTime, participant: { id, name, role, status, surname }, skills } = data;

  const handleCloseModal = () => {
    dispatch(closeFeedbackModal());
  }

  return (
    <ModalLayoutProfile setOpen={handleCloseModal} open={open}>
      <RenderRoleModal role={role} />
    </ModalLayoutProfile>
  )
}

export default FeedbackModal;
