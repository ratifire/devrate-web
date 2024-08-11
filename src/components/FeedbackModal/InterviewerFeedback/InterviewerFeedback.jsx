/* eslint-disable */

import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { useCloseModal } from '../hooks';
import { Box, IconButton, Step, StepButton, StepConnector, Stepper, Typography } from '@mui/material';
import { styles } from './InterviewerFeedback.styles';
import { ButtonDef } from '../../Buttons';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';
import { StepHardSkills, StepSoftSkills } from '../components';
import { useTranslation } from 'react-i18next';

const steps = [1, 2, 3];

const InterviewerFeedback = () => {
  const { handleCloseModal, isOpenModal } = useCloseModal({ modalName: 'openFeedbackRespondent' })
  const { t } = useTranslation();
  const activeStep = 1;

  const handleStep = (index) => {
    if (index === 1) {
      return <StepSoftSkills/>;
    }

    if (index === 2) {
      return <StepHardSkills/>;
    }
  }

  return (
    <ModalLayoutProfile setOpen={handleCloseModal} open={true}>
      <Typography variant='subtitle1'>
        Залишити відгук
      </Typography>
      <Stepper activeStep={activeStep} connector={<StepConnector />}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton color='inherit' onClick={handleStep(index)} disabled={false} />
          </Step>
        ))}
      </Stepper>
      <Box>{handleStep(activeStep)}</Box>
      <Box>
        <ButtonDef
          label={'Далі'}
        />
        <Box>
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box>
    </ModalLayoutProfile>
  )
}

export default InterviewerFeedback;
