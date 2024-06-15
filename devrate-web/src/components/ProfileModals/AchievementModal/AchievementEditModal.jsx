import React from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { Box, Typography } from '@mui/material';
import { styles } from './AchievementModal.styles';
import { useSelector } from 'react-redux'; 
import { useFormik } from 'formik';
import { AchievementModalSchema } from './AchievementModalSchema';
import FormInput from '../../Inputs/FormInput';
import TextAreaInput from '../../Inputs/TextAreaInput';
import { ButtonDef } from '../../Buttons';
import { useUpdateAchievementMutation } from "../../../redux/services/achievementsApiSlice";
import { selectCurrentUser } from "../../../redux/auth/authSlice";
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const AchievementEditModal = ({ isOpen, onClose, achievement, updateAchievement }) => {
  const currentUser = useSelector(selectCurrentUser);
  const { t } = useTranslation();
  const [updateAchievementApi] = useUpdateAchievementMutation();

  const initialValues = {
    link: achievement?.link || '',
    summary: achievement?.summary || '',
    description: achievement?.description || '',
  };

  const onSubmit = async (values, { resetForm }) => {
    console.log('Submitted values:', values);

    try {
      const updatedAchievement = await updateAchievementApi({
        id: achievement.id,
        payload: { ...values, userId: currentUser.id }, // Including userId in the payload
      }).unwrap();

      updateAchievement(updatedAchievement);
      resetForm();
      onClose();
    } catch (error) {
      console.error('Error updating achievement:', error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: AchievementModalSchema,
    onSubmit,
  });

  return (
    <ModalLayoutProfile setOpen={onClose} open={isOpen}>
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

AchievementEditModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  achievement: PropTypes.object.isRequired,
  updateAchievement: PropTypes.func.isRequired, // Add prop type for updateAchievement
};

export default AchievementEditModal;
