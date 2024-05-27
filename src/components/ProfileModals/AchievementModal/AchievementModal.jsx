import React from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import {useDispatch, useSelector} from 'react-redux';
import {closeModal} from '../../../redux/modal/modalSlice';
import {Box, Typography} from '@mui/material';
import {styles} from './AchivementModal.styles';
import {useTranslation} from 'react-i18next';
import {useFormik} from 'formik';
import {AchivementModalSchema} from './AchivementModalSchema';
import FormInput from '../../Inputs/FormInput';
import TextAreaInput from '../../Inputs/TextAreaInput';
import {ButtonDef} from '../../Buttons';
import {useCreateAchievementMutation} from "../../../redux/services/achievementApiSlice";
import {selectCurrentUser} from "../../../redux/auth/authSlice";


const AchievementModal = () => {
  const currentUser = useSelector(selectCurrentUser);
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
  const onSubmit = (values, { resetForm }) => {
    console.log('Submitted values:', values);

    createAchievement({
      userId: currentUser.id,
      payload: values,
    });


    resetForm();
    handleClose();
  };

  const formik = useFormik({
    initialValues,
    validationSchema: AchivementModalSchema,
    onSubmit,
  });

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

          <ButtonDef variant='contained' type='submit' label={t('profile.modal.btn')} correctStyle={styles.workExperienceBtn}/>

        </Box>
      </form>
    </ModalLayoutProfile>
  );
};

export default AchievementModal;
