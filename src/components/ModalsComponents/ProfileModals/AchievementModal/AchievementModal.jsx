import { Box, Typography } from '@mui/material';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import ModalLayoutProfile from '../../../../layouts/ModalLayoutProfile';
import { closeModal } from '../../../../redux/modal/modalSlice';
import { useCreateAchievementMutation } from '../../../../redux/services/achievementsApiSlice';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import FormInput from '../../../FormsComponents/Inputs/FormInput';
import TextAreaInput from '../../../FormsComponents/Inputs/TextAreaInput';
import { styles } from './AchievementModal.styles';
import { AchievementModalSchema } from '../../../../utils/valadationSchemas/index';

const AchievementModal = ({ userId }) => {
  const dispatch = useDispatch();
  const openAchievement = useSelector((state) => state.modal.achievement);
  const { t } = useTranslation();
  const [createAchievement] = useCreateAchievementMutation();

  const handleClose = () => {
    formik.resetForm();
    dispatch(closeModal({ modalName: 'achievement' }));
  }

  const initialValues = {
    link: '',
    summary: '',
    description: '',
  };

  const onSubmit = async (values) => {

    try {
      await createAchievement({
              userId: userId,
              payload: values,
            }).unwrap();
      handleClose();

    } catch (error) {
      console.error('Error updating achievement:', error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: AchievementModalSchema,
    onSubmit,
  });

  if (!userId) {
    return <Typography>Error: User not authenticated</Typography>;
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
              required
              placeholder='modal.achievement.summary_placeholder'
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
              required
              placeholder='modal.achievement.link_placeholder'
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
              required
              rows={3}
              placeholder='modal.achievement.description_placeholder'
              helperText={formik.touched.description && formik.errors.description}
              error={formik.touched.description && Boolean(formik.errors.description)}
            />
          </Box>

          <ButtonDef
            variant='contained'
            type='submit'
            label={t('profile.modal.btn')}
            correctStyle={styles.workExperienceBtn}
          />
        </Box>
      </form>
    </ModalLayoutProfile>
  );
};

AchievementModal.propTypes = {
  userId: PropTypes.number,
};

export default AchievementModal;
