/* eslint-disable */
import React from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { useDispatch, useSelector } from 'react-redux';
import { closeFeedbackModal } from '../../../redux/feedback/feedbackModalSlice';
import { InterviewerFeedback } from './components/InterviewerFeedback';

const FeedbackModal = () => {
  const dispatch = useDispatch();
  const { open, feedbackId } = useSelector((state) => state.feedback);

  const handleCloseModal = () => {
    dispatch(closeFeedbackModal);
  }

  return (
    <ModalLayoutProfile setOpen={handleCloseModal} open={true}>
      <InterviewerFeedback/>
    </ModalLayoutProfile>
  )
}

export default FeedbackModal;
