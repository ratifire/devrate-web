/* eslint-disable */
import React from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { useDispatch, useSelector } from 'react-redux';
import { closeFeedbackModal } from '../../../redux/feedback/feedbackModalSlice';
import { useGetInterviewByIdQuery } from '../../../redux/feedback/interviewApiSlice';
import { RenderRoleModal } from './components/RenderRoleModal';
import { FeedbackModalSkeleton } from '../../UI/Skeleton';

const FeedbackModal = () => {
  const dispatch = useDispatch();
  const { open, feedbackId } = useSelector((state) => state.feedback);
  const { data = [], isError, isFetching } = useGetInterviewByIdQuery({id: feedbackId}, { skip: !feedbackId });
  const handleCloseModal = () => {
    dispatch(closeFeedbackModal());
  }

  if (isFetching) {
    return (
      <ModalLayoutProfile setOpen={handleCloseModal} open={open}>
        <FeedbackModalSkeleton />
      </ModalLayoutProfile>
    )
  }

  const { interviewStartTime, participant: { id, name, role, status, surname }, skills } = data;

  return (
    <ModalLayoutProfile setOpen={handleCloseModal} open={open}>
      <RenderRoleModal role={role} data={data} />
    </ModalLayoutProfile>
  )
}

export default FeedbackModal;
