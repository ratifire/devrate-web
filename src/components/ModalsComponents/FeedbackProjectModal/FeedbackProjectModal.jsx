import React from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { Typography, CircularProgress } from '@mui/material';
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
import { useSnackbar } from 'notistack';

const initialValues = {
  select: '',
  feedbackText: '',
};

const FeedbackProjectModal = () => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const openFeedback = useSelector((state) => state.modal.feedbackProjectModal);
  const { id } = useSelector((state) => state.auth.user.data);

  const [createFeedback, { isLoading }] = useCreateFeedbackMutation();

  const handleClose = () => {
    dispatch(closeModal({ modalName: 'feedbackProjectModal' }));
  };

  const onSubmit = async (values) => {
    const result = await createFeedback({
      userId: id,
      type: values.select,
      text: values.feedbackText,
    });

    if (result.error) {
      enqueueSnackbar(t('modal.feedbackProjectModal.error_429'), {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
      });
    } else {
      enqueueSnackbar(t('modal.feedbackProjectModal.success'), {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
      });
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: FeedbackProjectModalSchema,
    onSubmit,
  });

  return (
    <ModalLayoutProfile setOpen={handleClose} open={openFeedback}>
      <Typography variant='h6' sx={styles.title}>
        {t('modal.feedbackProjectModal.title')}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <FormSelect
          variant='outlined'
          name='select'
          value={formik.values.select}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          label={t('modal.feedbackProjectModal.formSelectLabel')}
          required
          countries={feedbackOptions}
          isTranslated
        />

        <TextAreaInput
          name='feedbackText'
          value={formik.values.feedbackText}
          label={t('modal.feedbackProjectModal.textAreaLabel')}
          required
          placeholder={t('modal.feedbackProjectModal.textPlaceholder')}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
        />

        <ButtonDef
          fullWidth
          label={t('modal.feedbackProjectModal.button')}
          type='submit'
          variant='contained'
          correctStyle={styles.btn}
          disabled={!formik.isValid || !formik.dirty || isLoading}
        >
          {isLoading ? <CircularProgress size={24} /> : t('modal.feedbackProjectModal.button')}
        </ButtonDef>
      </form>
    </ModalLayoutProfile>
  );
};

export default FeedbackProjectModal;
