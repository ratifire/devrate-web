import React from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice';
import { Box, IconButton, Typography } from '@mui/material';
import { styles } from './ExperienceModal.styles';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { ExperienceModalSchema } from './ExperienceModalSchema';
import AddIcon from '@mui/icons-material/Add';

import FormInput from '../../Inputs/FormInput';
import TextAreaInput from '../../Inputs/TextAreaInput';

const ExperienceModal = () => {
  const dispatch = useDispatch();
  const openExperience = useSelector((state) => state.modal.openExperience);
  const handleClose = () => dispatch(closeModal({ modalName: 'openExperience' }));
  const { t } = useTranslation();

  const initialValues = {
    title: '',
    company: '',
    description: '',
    responsibility: '',
  };
  const onSubmit = (values, { resetForm }) => {
    resetForm();
  };
  const formik = useFormik({
    initialValues,
    validationSchema: ExperienceModalSchema,
    onSubmit,
  });

  return (
    <ModalLayoutProfile setOpen={handleClose} open={openExperience}>
      <Typography variant='subtitle1' sx={styles.title}>
        {t('profile.modal.userInfo.titleExperience')}
      </Typography>

      <Box sx={styles.wrapper}>
        {/*<FormInput name='Посада' label='Посада'/>*/}
        <Box sx={styles.input50}>
          <FormInput
            name='title'
            value={formik.values.title}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            type='text'
            label='profile.modal.workExperience.title'
            helperText={formik.touched.title && formik.errors.title}
            error={formik.touched.title && Boolean(formik.errors.title)}
          />
        </Box>
        <Box sx={styles.input50}>
          <FormInput
            name='company'
            value={formik.values.company}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            label='profile.modal.workExperience.company'
            helperText={formik.touched.company && formik.errors.company}
            error={formik.touched.company && Boolean(formik.errors.company)}
          />
        </Box>
        <Box sx={styles.input100}>
          <TextAreaInput
            name='description'
            value={formik.values.description}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            type='text'
            label='profile.modal.workExperience.description'
            helperText={formik.touched.description && formik.errors.description}
            error={formik.touched.description && Boolean(formik.errors.description)}
          />
        </Box>
        <Box sx={styles.input100}>
          <FormInput
            name='responsibility'
            value={formik.values.responsibility}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            label='profile.modal.workExperience.responsibility'
            helperText={formik.touched.responsibility && formik.errors.responsibility}
            error={formik.touched.responsibility && Boolean(formik.errors.responsibility)}
          />
          <IconButton sx={styles.iconBtn}>
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
    </ModalLayoutProfile>
  );
};

export default ExperienceModal;
