import React from 'react';
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
import useMergeState from '../../../utils/hooks/useMergeState';

const initialValues = {
  select: '',
  feedbackText: '',
};

const FeedbackProjectModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openFeedback = useSelector((state) => state.modal.feedbackProjectModal);
  const { id } = useSelector((state) => state.auth.user.data);

  const [createFeedback, { isLoading }] = useCreateFeedbackMutation();

  const [state, setState] = useMergeState({
    openSnackbarSuccess: false,
    openSnackbarError: false,
  });

  const handleClose = () => {
    dispatch(closeModal({ modalName: 'feedbackProjectModal' }));
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;
    setState({ openSnackbarSuccess: false, openSnackbarError: false });
  };

  const onSubmit = async (values) => {
    const result = await createFeedback({
      userId: id,
      type: values.select,
      text: values.feedbackText,
    });

    if (result.error) {
      setState({ openSnackbarError: true });
      await formik.setValues(initialValues);
    } else {
      setState({ openSnackbarSuccess: true });
      await formik.setValues(initialValues);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: FeedbackProjectModalSchema,
    onSubmit,
  });

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
        open={state.openSnackbarSuccess}
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
          {t('modal.feedbackProjectModal.success')}
        </Alert>
      </Snackbar>

      <Snackbar
        open={state.openSnackbarError}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={styles.snackBar}
        sx={styles.snackbarTransition}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={styles.alertContent}>
          {t('modal.feedbackProjectModal.error_429')}
        </Alert>
      </Snackbar>

    </ModalLayoutProfile>
  );
};

export default FeedbackProjectModal;
