import React, { useState } from 'react';
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
import { FeedbackModal } from '../../../utils/valadationSchemas/index';
import { useCreateFeedbackMutation } from '../../../redux/services/feedbackProjectModalApiSlice';

const FeedbackProjectModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openFeedback = useSelector((state) => state.modal.feedbackProjectModal);
  const { id } = useSelector((state) => state.auth.user.data);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const feedbackOptions = ['PROPOSITION', 'ISSUE', 'FEEDBACK'];


  const [createFeedback] = useCreateFeedbackMutation();

  const handleClose = () => {
    formik.resetForm();
    dispatch(closeModal({ modalName: 'feedbackProjectModal' }));
  };

  const onSubmit = async (values) => {
    setIsLoading(true);
    setError(null);
    try {
      await createFeedback({
      userId: id,
      type: values.select,
      text: values.feedbackText,
    }).unwrap();
    } catch (error) {
      console.error('Ошибка отправки отзыва:', error);
      setError('Произошла ошибка при отправке. Попробуйте еще раз.');
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      select: '',
      feedbackText: '',
    },
    validationSchema: FeedbackModal,
    onSubmit,
  });

  return (
    <>
      <ModalLayoutProfile setOpen={handleClose} open={openFeedback}>
        <Typography variant="h6" sx={styles.title}>
          {t('modal.feedbackProjectModal.title')}
        </Typography>

        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}

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
      </ModalLayoutProfile>
    </>
  );
};

export default FeedbackProjectModal;
