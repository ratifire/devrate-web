import React from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice';
import { Box, Typography } from '@mui/material';
import { styles } from './AchivementModal.styles';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { AchivementModalSchema } from './AchivementModalSchema';
import FormInput from '../../Inputs/FormInput';
import TextAreaInput from '../../Inputs/TextAreaInput';
import { ButtonDef } from '../../Buttons';
import PropTypes from 'prop-types';
import { useCreateAchievementMutation } from "../../../redux/services/achievementsApiSlice";

const AchievementModal = ({ onSuccess, currentUser }) => {
  const dispatch = useDispatch();
  const openAchievement = useSelector((state) => state.modal.achievement);
  const handleClose = () => dispatch(closeModal({ modalName: 'achievement' }));
  const { t } = useTranslation();
  const [createAchievement] = useCreateAchievementMutation();

  const initialValues = {
    link: '',
    summary: '',
    description: '',
  };

  const onSubmit = async (values, { resetForm }) => {
    console.log('Submitted values:', values);

    try {
      const result = await createAchievement({
        userId: currentUser.id,
        payload: values,
      }).unwrap();

      onSuccess(result);
      resetForm();
      handleClose();
    } catch (error) {
      console.error('Failed to create achievement:', error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: AchivementModalSchema,
    onSubmit,
  });

  
  if (!currentUser) {
    return null;
  }

  return (
    <ModalLayoutProfile setOpen={handleClose} open={openAchievement}>
      <Typography variant='subtitle1' sx={styles.title}>
        {t('modal.achievement.title')}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.wrapper}>
          <Box sx={styles.input100}>
            <FormInput
              name='summary'
              value={formik.values.summary}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              type='text'
              label='modal.achievement.summary'
              placeholder='profile.modal.workExperience.position_placeholder'
              helperText={formik.touched.summary && formik.errors.summary}
              error={formik.touched.summary && Boolean(formik.errors.summary)}
            />
          </Box>
          <Box sx={styles.input100}>
            <FormInput
              name='link'
              value={formik.values.link}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              type='text'
              label='modal.achievement.link'
              placeholder='profile.modal.workExperience.position_placeholder'
              helperText={formik.touched.link && formik.errors.link}
              error={formik.touched.link && Boolean(formik.errors.link)}
            />
          </Box>
          <Box sx={styles.input100}>
            <TextAreaInput
              name='description'
              value={formik.values.description}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              type='text'
              label='modal.achievement.description'
              placeholder='profile.modal.workExperience.description_placeholder'
              helperText={formik.touched.description && formik.errors.description}
              error={formik.touched.description && Boolean(formik.errors.description)}
            />
          </Box>

          <ButtonDef variant='contained' type='submit' label={t('profile.modal.btn')} correctStyle={styles.workExperienceBtn} />
        </Box>
      </form>
    </ModalLayoutProfile>
  );
};

AchievementModal.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
};

export default AchievementModal;
