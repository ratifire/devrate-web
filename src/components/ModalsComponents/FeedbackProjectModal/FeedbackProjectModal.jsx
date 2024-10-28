import React, { useEffect, useState } from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { Typography, CircularProgress, Snackbar, Alert } from '@mui/material';
import ButtonDef from '../../FormsComponents/Buttons/ButtonDef';
import { useTranslation } from 'react-i18next';
import FormSelect from '../../FormsComponents/Inputs/FormSelect';
import TextAreaInput from '../../FormsComponents/Inputs/TextAreaInput';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice';
import { styles } from './FeedbackProjectModal.styles';
import { FeedbackProjectModalSchema } from '../../../utils/valadationSchemas/index';
import { useCreateFeedbackMutation } from '../../../redux/services/feedbackProjectModalApiSlice';
import { feedbackOptions } from './constants';

const initialValues = {
  select: '',
  feedbackText: '',
};

const FeedbackProjectModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openFeedback = useSelector((state) => state.modal.feedbackProjectModal);
  const { id } = useSelector((state) => state.auth.user.data);

  const [createFeedback, { isError, isLoading, isSuccess }] = useCreateFeedbackMutation();

  const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false);
  const [openSnackbarError, setOpenSnackbarError] = useState(false);

  const handleClose = () => {
    dispatch(closeModal({ modalName: 'feedbackProjectModal' }));
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnackbarSuccess(false);
    setOpenSnackbarError(false);
  };

  const onSubmit = async (values) => {
    try {
      await createFeedback({
        userId: id,
        type: values.select,
        text: values.feedbackText,

      });
    } catch (error) {
      console.error('Submit Error:', error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: FeedbackProjectModalSchema,
    onSubmit,
  });

  useEffect(() => {
    if (isSuccess) {
      setOpenSnackbarSuccess(true);
      const timeoutId = setTimeout(() => {
        handleClose();
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
    if (isError) {
      setOpenSnackbarError(true);
    }
  }, [isSuccess, isError]);
  return (
    <ModalLayoutProfile setOpen={handleClose} open={openFeedback}>
      <Typography variant="h6" sx={styles.title}>
        {t('modal.feedbackProjectModal.title')}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <FormSelect
          variant="outlined"
          name="select"
          value={formik.values.select}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          label={t('modal.feedbackProjectModal.label')}
          required
          countries={feedbackOptions}
          isTranslated
        />

        <TextAreaInput
          name="feedbackText"
          value={formik.values.feedbackText}
          label={'Message'}
          required
          placeholder={t('modal.feedbackProjectModal.textPlaceholder')}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />

        <ButtonDef
          fullWidth
          label={t('modal.feedbackProjectModal.button')}
          type="submit"
          variant="contained"
          correctStyle={styles.btn}
          disabled={!formik.isValid || !formik.dirty || isLoading}
        >
          {isLoading ? <CircularProgress size={24} /> : t('modal.feedbackProjectModal.button')}
        </ButtonDef>
      </form>

      <Snackbar
        open={openSnackbarSuccess}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={styles.snackBar}
        sx={styles.snackbarTransition}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={styles.alertContent}
        >
          Successfully!
        </Alert>
      </Snackbar>

      <Snackbar
        open={openSnackbarError}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={styles.snackBar}
        sx={styles.snackbarTransition}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={styles.alertContent}        >
          {/*{error?.data || 'An error occurred. Please try again.'}*/}
          {t('modal.feedbackProjectModal.error_429')}
        </Alert>
      </Snackbar>

    </ModalLayoutProfile>
  );
};

export default FeedbackProjectModal;
