import React from 'react';
import ModalLayoutProfile from '../../layouts/ModalLayoutProfile';
import ThemeSwitch from '../../components/UI/ThemeSwitch/ThemeSwitch';
import { Button, Typography } from '@mui/material';
import ButtonDef from '../../components/FormsComponents/Buttons/ButtonDef';
import { useTranslation } from 'react-i18next';
import FormSelect from '../../components/FormsComponents/Inputs/FormSelect';
import TextAreaInput from '../../components/FormsComponents/Inputs/TextAreaInput';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '../../redux/modal/modalSlice';
import { styles } from './ReviewsPage.styles';

const ReviewsPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openFeedback = useSelector((state) => state.modal.feedbackProjectModal);

  const feedbackOptions = ['offer', 'error', 'response'];

  // const formik = useFormik({
  //   initialValues: {
  //     select: '',
  //     feedbackText: '',
  //   },
  //   onSubmit: (values) => {
  //     console.log('Отправлен отзыв:', values);
  //     dispatch(closeModal({ modalName: 'feedbackProjectModal' }));
  //   },
  // });
  const formik = useFormik({
    initialValues: {
      select: '',
      feedbackText: '',
    },
    validateOnMount: true,
    onSubmit: (values) => {
      console.log('Feedback sended', values);
      dispatch(closeModal({ modalName: 'feedbackProjectModal' }));
    },
    validate: (values) => {
      const errors = {};
      if (!values.select) {
        errors.select = t('modal.feedbackProjectModal.required');
      }
      if (!values.feedbackText) {
        errors.feedbackText = t('modal.feedbackProjectModal.required');
      }
      return errors;
    },
  });

  const handleOpen = () => {
    dispatch(openModal({ modalName: 'feedbackProjectModal' }));
  };

  const handleClose = () => {
    dispatch(closeModal({ modalName: 'feedbackProjectModal' }));
  };

  return (
    <>
      <ThemeSwitch />
      <Button onClick={handleOpen}>click</Button>
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
              label={
                formik.values.select
                  ? t(`modal.feedbackProjectModal.defaultTextFor.${formik.values.select}`)
                  : t('modal.feedbackProjectModal.label')
              }
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
              disabled={!formik.isValid || !formik.dirty}
            >
              {t('modal.feedbackProjectModal.button')}
            </ButtonDef>
          </form>

      </ModalLayoutProfile>
    </>
  );
};

export default ReviewsPage;
