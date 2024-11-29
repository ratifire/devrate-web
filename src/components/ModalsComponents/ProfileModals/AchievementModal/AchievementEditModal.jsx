import { Box, Typography } from '@mui/material';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import ModalLayoutProfile from '../../../../layouts/ModalLayoutProfile';
import { selectCurrentUser } from '../../../../redux/auth/authSlice';
import { useUpdateAchievementMutation } from '../../../../redux/services/achievementsApiSlice';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import FormInput from '../../../FormsComponents/Inputs/FormInput';
import TextAreaInput from '../../../FormsComponents/Inputs/TextAreaInput';
import { AchievementModalSchema } from '../../../../utils/valadationSchemas/index';
import { styles } from './AchievementModal.styles';

const AchievementEditModal = ({ isOpen, onClose, achievement }) => {
  const {
    data: { id: userId },
  } = useSelector(selectCurrentUser);
  const { t } = useTranslation();
  const [updateAchievementApi] = useUpdateAchievementMutation();

  const initialValues = {
    // link: achievement?.link || '',
    summary: achievement?.summary || '',
    description: achievement?.description || '',
  };

  const onSubmit = async (values, { resetForm }) => {
    try {
      await updateAchievementApi({
        id: achievement.id,
        payload: { ...values, userId }, // Including userId in the payload
      }).unwrap();

      resetForm();
      onClose();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error updating achievement:', error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: AchievementModalSchema,
    onSubmit,
    enableReinitialize: true,
  });

  return (
    <ModalLayoutProfile open={isOpen} setOpen={onClose}>
      <Typography sx={styles.title} variant='subtitle1'>
        {t('modal.achievement.title')}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.wrapper}>
          <Box sx={styles.input100}>
            <FormInput
              error={formik.touched.summary && Boolean(formik.errors.summary)}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              helperText={formik.touched.summary && formik.errors.summary}
              label='modal.achievement.summary'
              name='summary'
              placeholder='profile.modal.workExperience.position_placeholder'
              type='text'
              value={formik.values.summary}
            />
          </Box>
          {/*commented out <Link> in case if its need it's needed in the future*/}
          {/*<Box sx={styles.input100}>*/}
          {/*  <FormInput*/}
          {/*    name='link'*/}
          {/*    value={formik.values.link}*/}
          {/*    handleChange={formik.handleChange}*/}
          {/*    handleBlur={formik.handleBlur}*/}
          {/*    type='text'*/}
          {/*    label='modal.achievement.link'*/}
          {/*    placeholder='profile.modal.workExperience.position_placeholder'*/}
          {/*    helperText={formik.touched.link && formik.errors.link}*/}
          {/*    error={formik.touched.link && Boolean(formik.errors.link)}*/}
          {/*  />*/}
          {/*</Box>*/}
          <Box sx={styles.input100}>
            <TextAreaInput
              error={formik.touched.description && Boolean(formik.errors.description)}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              helperText={formik.touched.description && formik.errors.description}
              label='modal.achievement.description'
              name='description'
              placeholder='profile.modal.workExperience.description_placeholder'
              type='text'
              value={formik.values.description}
            />
          </Box>
          <ButtonDef
            correctStyle={styles.workExperienceBtn}
            label={t('profile.modal.btn')}
            type='submit'
            variant='contained'
          />
        </Box>
      </form>
    </ModalLayoutProfile>
  );
};

AchievementEditModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  achievement: PropTypes.object.isRequired,
};

export default AchievementEditModal;
