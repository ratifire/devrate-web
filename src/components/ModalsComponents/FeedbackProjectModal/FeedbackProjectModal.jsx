import React from 'react';
import { Typography, CircularProgress, Snackbar, Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import ButtonDef from '../../FormsComponents/Buttons/ButtonDef';
import FormSelect from '../../FormsComponents/Inputs/FormSelect';
import TextAreaInput from '../../FormsComponents/Inputs/TextAreaInput';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { closeModal } from '../../../redux/modal/modalSlice';
import { FeedbackProjectModalSchema } from '../../../utils/valadationSchemas/index';
import { useCreateFeedbackMutation } from '../../../redux/services/feedbackProjectModalApiSlice';
import useMergeState from '../../../utils/hooks/useMergeState';
import { feedbackOptions } from './constants';
import { styles } from './FeedbackProjectModal.styles';

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

    setState({
      openSnackbarError: !!result.error,
      openSnackbarSuccess: !result.error,
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema: FeedbackProjectModalSchema,
    onSubmit,
  });

  return (
    <ModalLayoutProfile open={openFeedback} setOpen={handleClose}>
      <Typography sx={styles.title} variant='h6'>
        {t('modal.feedbackProjectModal.title')}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <FormSelect
          isTranslated
          required
          countries={feedbackOptions}
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
          label={t('modal.feedbackProjectModal.formSelectLabel')}
          name='select'
          value={formik.values.select}
          variant='outlined'
        />

        <TextAreaInput
          required
          handleBlur={formik.handleBlur}
          handleChange={formik.handleChange}
          label={t('modal.feedbackProjectModal.textAreaLabel')}
          name='feedbackText'
          placeholder={t('modal.feedbackProjectModal.textPlaceholder')}
          value={formik.values.feedbackText}
        />

        <ButtonDef
          fullWidth
          correctStyle={styles.btn}
          disabled={!formik.isValid || !formik.dirty || isLoading}
          label={t('modal.feedbackProjectModal.button')}
          type='submit'
          variant='contained'
        >
          {isLoading ? <CircularProgress size={24} /> : t('modal.feedbackProjectModal.button')}
        </ButtonDef>
      </form>

      <Snackbar
        anchorOrigin={styles.snackBar}
        autoHideDuration={6000}
        open={state.openSnackbarSuccess}
        sx={styles.snackbarTransition}
        onClose={handleCloseSnackbar}
      >
        <Alert severity='success' sx={styles.alertContent} onClose={handleCloseSnackbar}>
          {t('modal.feedbackProjectModal.success')}
        </Alert>
      </Snackbar>

      <Snackbar
        anchorOrigin={styles.snackBar}
        autoHideDuration={6000}
        open={state.openSnackbarError}
        sx={styles.snackbarTransition}
        onClose={handleCloseSnackbar}
      >
        <Alert severity='error' sx={styles.alertContent} onClose={handleCloseSnackbar}>
          {t('modal.feedbackProjectModal.error_429')}
        </Alert>
      </Snackbar>
    </ModalLayoutProfile>
  );
};

export default FeedbackProjectModal;
