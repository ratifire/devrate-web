import { Step, StepConnector, StepLabel, Stepper } from '@mui/material';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import CustomStepIcon from '../../../../ProfileModals/ModalUserInfo/StepIconComponent';
import { NUMBER_OF_STEPS } from '../../constants';
import { styles } from './InterviewStepper.styles';

const InterviewStepper = memo(({ activeStep }) => {
  return (
    <Stepper activeStep={activeStep} sx={styles.stepBorder} connector={<StepConnector />}>
      {NUMBER_OF_STEPS.map((label) => (
        <Step sx={styles.step} key={label}>
          <StepLabel StepIconComponent={CustomStepIcon} sx={styles.label}></StepLabel>
        </Step>
      ))}
    </Stepper>
  );
});

InterviewStepper.propTypes = {
  activeStep: PropTypes.number.isRequired,
};

InterviewStepper.displayName = 'InterviewStepper';

export default InterviewStepper;
