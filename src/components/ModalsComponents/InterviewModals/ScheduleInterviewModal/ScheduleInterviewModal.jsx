import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ErrorComponent } from '../../../UI/Exceptions';
import { InterviewStepper } from '../../FeedbackModal/FeedbackInterviewModal/components/InterviewStepper';
import SliderComponent from '../components/SliderComponent';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { FIRST_STEP, LAST_STEP } from '../../FeedbackModal/FeedbackInterviewModal/constants';
import useScheduleInterviewForm from '../hooks';
import { useGetInterviewsByMasteryIdQuery } from '../../../../redux/interviews/interviewRequestsApiSlice';
import InterviewModalRole from '../../../../utils/constants/InterviewModalRole';
import ScheduleInterviewModalSkeleton from '../../../UI/Skeleton/Modal/ScheduleInterviewModalSkeleton';
import { styles } from './ScheduleInterviewModal.styles';

const ScheduleInterviewModal = () => {
  const { t } = useTranslation();
  const modalRole = useSelector((state) => state.modal.data?.modalRole);
  //Include step into URL in order to open correct modal on create and edit
  const searchParams = new URLSearchParams(location.search);
  const stepParam = searchParams.get('step');
  const [activeStep, setActiveStep] = useState(+stepParam || FIRST_STEP);
  const { formik, isError, isFetching, selectedSpecialization, spec } = useScheduleInterviewForm();

  // Fetch interview requests for the selected specialization
  const { data: interviewsByMasteryId, isFetching: isFetchingInterviews } = useGetInterviewsByMasteryIdQuery(
    formik.values.specialization,
    { skip: !formik.values.specialization }
  );

  // Check if the selected role has any availableDates in the backend response.If yes, block the button Next and show warning
  const selectedRoleHasAvailableDates = interviewsByMasteryId?.some(
    (item) => item.role === formik.values.role && item.timeSlots?.length > 0
  );

  // Needed to enable Schedule btn in Step 2
  const hasEnoughAvailableDates = formik.values.addedTimeSlots.length >= formik.values.interviewCount;

  const handleNextStep = () => {
    setActiveStep(LAST_STEP);
  };
  const handlePrevStep = () => setActiveStep(FIRST_STEP);

  if (isFetching || isFetchingInterviews) {
    return <ScheduleInterviewModalSkeleton />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  const isVisibleSaveBtn =
    modalRole === InterviewModalRole.EditFeature || modalRole === InterviewModalRole.AddTimeSlots;

  const isDisabledAddedTimeSlots =
    modalRole === InterviewModalRole.AddTimeSlots &&
    formik.values.addedTimeSlots.length === 0 &&
    modalRole !== InterviewModalRole.EditFeature;

  const isLoading = isFetching || isFetchingInterviews;

  return (
    <Box sx={styles.container}>
      <Typography variant='h6'>{t('interviews.scheduleInterviewModal.title')}</Typography>
      <InterviewStepper activeStep={activeStep} />
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.formBox}>
          <SliderComponent formik={formik} mySpecialization={spec} slide={activeStep} />
          {selectedRoleHasAvailableDates && !selectedSpecialization && (
            <Typography sx={styles.errorMessage} variant='body'>
              {t('interviews.scheduleInterviewModal.warning')} {formik.values.role.toLowerCase()}
            </Typography>
          )}
          <Box sx={styles.sendBox}>
            {!isVisibleSaveBtn && (
              <>
                <ButtonDef
                  disabled={activeStep === 1}
                  label={t('modal.interview.btnBack')}
                  sx={styles.btn}
                  type={'button'}
                  variant={'contained'}
                  onClick={handlePrevStep}
                />
                {activeStep === FIRST_STEP && (
                  <ButtonDef
                    disabled={!formik.isValid || selectedRoleHasAvailableDates}
                    label={t('modal.interview.btnNext')}
                    sx={styles.btn}
                    type={'button'}
                    variant={'contained'}
                    onClick={handleNextStep}
                  />
                )}
                {activeStep === LAST_STEP && (
                  <ButtonDef
                    disabled={!formik.isValid || !formik.dirty || formik.isSubmitting || !hasEnoughAvailableDates}
                    label={t('interviews.scheduleInterviewModal.scheduleBtn')}
                    loading={isLoading}
                    sx={styles.btn}
                    type={'submit'}
                    variant={'contained'}
                  />
                )}
              </>
            )}
            {isVisibleSaveBtn && (
              <ButtonDef
                disabled={!formik.isValid || !formik.dirty || formik.isSubmitting || isDisabledAddedTimeSlots}
                label={t('interviews.scheduleInterviewModal.save')}
                loading={isLoading}
                sx={styles.btn}
                type={'submit'}
                variant={'contained'}
              />
            )}
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default ScheduleInterviewModal;
