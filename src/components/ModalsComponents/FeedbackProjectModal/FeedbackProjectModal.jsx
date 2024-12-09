import React from 'react';
import { Typography, CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import ButtonDef from '../../FormsComponents/Buttons/ButtonDef';
import FormSelect from '../../FormsComponents/Inputs/FormSelect';
import TextAreaInput from '../../FormsComponents/Inputs/TextAreaInput';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { closeModal } from '../../../redux/modal/modalSlice';
import { FeedbackProjectModalSchema } from '../../../utils/valadationSchemas/index';
import { useCreateFeedbackMutation } from '../../../redux/services/feedbackProjectModalApiSlice';
import { feedbackOptions } from './constants';
import { styles } from './FeedbackProjectModal.styles';

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
      enqueueSnackbar(t('modal.feedbackProjectModal.error_429'), { variant: 'error' });
    } else {
      enqueueSnackbar(t('modal.feedbackProjectModal.success'), { variant: 'success' });
    }
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
    </ModalLayoutProfile>
  );
};

export default FeedbackProjectModal;
