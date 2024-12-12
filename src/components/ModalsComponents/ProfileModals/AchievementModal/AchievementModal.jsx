import { Box, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import ModalLayoutProfile from '../../../../layouts/ModalLayoutProfile';
import { closeModal } from '../../../../redux/modal/modalSlice';
import { useCreateAchievementMutation } from '../../../../redux/services/achievementsApiSlice';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import FormInput from '../../../FormsComponents/Inputs/FormInput';
import TextAreaInput from '../../../FormsComponents/Inputs/TextAreaInput';
import { AchievementModalSchema } from '../../../../utils/valadationSchemas/index';
import { styles } from './AchievementModal.styles';

const AchievementModal = () => {
  const dispatch = useDispatch();
  const openAchievement = useSelector((state) => state.modal.achievement);
  const { t } = useTranslation();
  const { id } = useSelector((state) => state.auth.user.data);
  const [createAchievement] = useCreateAchievementMutation();

  const handleClose = () => {
    formik.resetForm();
    dispatch(closeModal({ modalName: 'achievement' }));
  };

  const initialValues = {
    // link: '',
    summary: '',
    description: '',
  };

  const onSubmit = async (values) => {
    try {
      await createAchievement({
        userId: id,
        payload: values,
      }).unwrap();
      handleClose();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error updating achievement:', error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: AchievementModalSchema,
    onSubmit,
  });

  if (!id) {
    return <Typography>Error: User not authenticated</Typography>;
  }

  return (
    <ModalLayoutProfile open={openAchievement} setOpen={handleClose}>
      <Typography sx={styles.title} variant='subtitle1'>
        {t('modal.achievement.title')}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.wrapper}>
          <Box sx={styles.input100}>
            <FormInput
              required
              error={formik.touched.summary && Boolean(formik.errors.summary)}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              helperText={formik.touched.summary && formik.errors.summary}
              label='modal.achievement.summary'
              name='summary'
              placeholder='modal.achievement.summary_placeholder'
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
          {/*    required*/}
          {/*    placeholder='modal.achievement.link_placeholder'*/}
          {/*    helperText={formik.touched.link && formik.errors.link}*/}
          {/*    error={formik.touched.link && Boolean(formik.errors.link)}*/}
          {/*  />*/}
          {/*</Box>*/}
          <Box sx={styles.input100}>
            <TextAreaInput
              required
              error={formik.touched.description && Boolean(formik.errors.description)}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              helperText={formik.touched.description && formik.errors.description}
              label='modal.achievement.description'
              name='description'
              placeholder='modal.achievement.description_placeholder'
              rows={3}
              type='text'
              value={formik.values.description}
            />
          </Box>

          <ButtonDef
            correctStyle={styles.workExperienceBtn}
            disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
            label={t('profile.modal.btn')}
            type='submit'
            variant='contained'
          />
        </Box>
      </form>
    </ModalLayoutProfile>
  );
};

export default AchievementModal;
