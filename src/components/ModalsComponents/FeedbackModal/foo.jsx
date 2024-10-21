// Временный файл, пусть пока будет, потом удалю
/* eslint-disable */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openFeedbackModal } from '../../../redux/feedback/feedbackModalSlice';
import { Box, Button } from '@mui/material';
import ThemeSwitch from '../../UI/ThemeSwitch/ThemeSwitch';
import { FeedbackModal } from './index';

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
        <Button onClick={() => handleClickButton(40001)}>Interview ID: 40001</Button>
        <Button onClick={() => handleClickButton(40002)}>Candidate ID: 40002</Button>
      </Box>
      { open && <FeedbackModal/> }
    </>
  )
}
export default TestPage;