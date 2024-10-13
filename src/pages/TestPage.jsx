/* eslint-disable */
import React from 'react';
import { FeedbackModal } from '../components/ModalsComponents/FeedbackModal';
import { Box, Button } from '@mui/material';
import ThemeSwitch from '../components/UI/ThemeSwitch/ThemeSwitch';
import { useDispatch, useSelector } from 'react-redux';
import { openFeedbackModal } from '../redux/feedback/feedbackModalSlice';

const TestPage = () => {
  const { open } = useSelector((state) => state.feedback);
  const dispatch = useDispatch();
  const handleClickButton = (id) => {
    dispatch(openFeedbackModal(id))
  }

  return (
    <>
      <Box sx={{display: 'flex'}}>
        <ThemeSwitch/>
        <Button onClick={() => handleClickButton(40001)}>Candidate ID: 40001</Button>
        <Button onClick={() => handleClickButton(40002)}>Interview ID: 40002</Button>
      </Box>
      { open && <FeedbackModal/> }
    </>
  )
}

export default TestPage;
