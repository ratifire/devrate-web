import React, { useState } from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice';
import { Box, Button, IconButton, Step, StepButton, Stepper, Typography } from '@mui/material';
import { styles } from './ModalUserInfo.styles';
import { useTranslation } from 'react-i18next';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StepPersonal from './StepPersonal';
import { useFormik } from 'formik';
import { ModalUserInfoSchema } from './ModalUserInfoSchema';
import LoadImages from '../../UI/LoadImages';
import StepContacts from './StepContacts';

const steps = [
  'profile.modal.userInfo.personal.title',
  'profile.modal.userInfo.contact.title',
  'profile.modal.userInfo.photo.title',
  'profile.modal.userInfo.languages.title',
];

const ModalUserInfo = () => {
  const dispatch = useDispatch();
  const openUserInfo = useSelector((state) => state.modal.openUserInfo);
  const handleClose = () => dispatch(closeModal({ modalName: 'openUserInfo' }));
  const { t } = useTranslation();
  const userData = useSelector((state) => state.auth.user.data);
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [img, setImg] = useState(null);
  const initialValues = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    city: '',
    country: '',
    status: '',
    avatar: img,
    contact: {
      telegram: '',
      linkedIn: '',
      gitHub: '',
      behance: '',
      mail: '',
      phone: '',
    },
  };
  const onSubmit = (values, { resetForm }) => {
    resetForm();
  };
  const formik = useFormik({
    initialValues,
    validationSchema: ModalUserInfoSchema,
    onSubmit,
  });
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    console.log(formik.values);
    const newActiveStep =
      isLastStep() && !allStepsCompleted() ? steps.findIndex((step, i) => !(i in completed)) : activeStep + 1;
    setActiveStep(newActiveStep);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleGetImg = (img) => {
    setImg(img);
    formik.values.img = img;
  };
  const getStepContent = (stepIndex, handleChange, handleBlur, values, errors, touched) => {
    switch (stepIndex) {
      case 0:
        return (
          <StepPersonal
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
          />
        );
      case 1:
        return (
          <StepContacts
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
          />
        );
      case 2:
        return <LoadImages getImg={handleGetImg} imgData={values.img} />;
      case 3:
        return <Box>4</Box>;
      default:
        return 'Unknown stepIndex';
    }
  };
  return (
    <ModalLayoutProfile setOpen={handleClose} open={openUserInfo}>
      <Box sx={styles.wrapper}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]} sx={styles.step}>
              <StepButton color='inherit' onClick={handleStep(index)} sx={styles.stepBtn} />
              {steps[activeStep] === label && (
                <Typography variant='subtitle1' sx={styles.title}>
                  {t(label)}
                </Typography>
              )}
            </Step>
          ))}
        </Stepper>
        <Box>
          <Box sx={styles.wrapperStepContent}>
            {getStepContent(
              activeStep,
              formik.handleChange,
              formik.handleBlur,
              formik.values,
              formik.errors,
              formik.touched,
            )}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            {activeStep !== steps.length &&
              (completed[activeStep] ? (
                <>
                  <Typography>{activeStep}</Typography>
                  <Typography variant='caption' sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                </>
              ) : (
                <Button onClick={handleComplete}>
                  {t(completedSteps() === totalSteps() - 1 ? 'profile.modal.finish' : 'profile.modal.btn')}
                </Button>
              ))}
            <Box sx={{ flex: '1 1 auto' }} />
            <IconButton disabled={activeStep === 0} onClick={handleBack}>
              <ArrowBackIcon />
            </IconButton>
            <IconButton onClick={handleNext}>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </ModalLayoutProfile>
  );
};

export default ModalUserInfo;
