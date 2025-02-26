import { Step, StepConnector, StepLabel, Stepper } from '@mui/material';
import PropTypes from 'prop-types';
import { memo } from 'react';
import CustomStepIcon from '@components/ModalsComponents/ProfileModals/ModalUserInfo/StepIconComponent';
import { NUMBER_OF_STEPS } from '../../constants';
import { styles } from './InterviewStepper.styles';

const InterviewStepper = memo(({ activeStep }) => {
  return (
    <Stepper activeStep={activeStep} connector={<StepConnector />} sx={styles.stepBorder}>
      {NUMBER_OF_STEPS.map((label) => (
        <Step key={label} sx={styles.step}>
          <StepLabel StepIconComponent={CustomStepIcon} sx={styles.label} />
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
