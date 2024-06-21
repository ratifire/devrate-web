import React, { useState } from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { closeModal } from '../../../redux/modal/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { AddSpecializationModalSchema } from './AddSpecializationModalSchema';
import { Box, Typography } from '@mui/material';
import { styles } from './AddSpecializationModal.styles';
import FormInput from '../../Inputs/FormInput';
import { ButtonDef } from '../../Buttons';
import { useTranslation } from 'react-i18next';
import CountrySelect from '../../Inputs/CountrySelect';

const AddSpecializationModal = () => {
  const { t } = useTranslation();
  const [level] = useState(['Junior', 'Middle', 'Senior']);
  const [main] = useState(['Yes', 'No']);


  const openAddSpecialization = useSelector((state) => state.modal.openAddSpecialization);

  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeModal({ modalName: 'openAddSpecialization' }));

  const initialValues = {
    title: '',
    level: '',
    main: ''
  };

  const onSubmit = (values, { resetForm }) => {
    console.log('Data from the form', values);
    resetForm();
    handleClose();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: AddSpecializationModalSchema,
    onSubmit,
  });

  return (
    <ModalLayoutProfile setOpen={handleClose} open={openAddSpecialization}>
      <Typography variant='subtitle1' sx={styles.title}>
        {t('specialization.modal.specialization.modal_title')}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.wrapper}>
          <Box sx={styles.input100}>
            <FormInput
              name='title'
              value={formik.values.title}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              type='text'
              label='specialization.modal.specialization.title'
              placeholder='specialization.modal.specialization.title_placeholder'
              helperText={formik.touched.title && formik.errors.title}
              error={formik.touched.title && Boolean(formik.errors.title)}
            />
          </Box>

          <Box sx={styles.input100}>
            <CountrySelect sx={styles.input50}
                           label={t('specialization.modal.specialization.level')}
                           value={formik.values.level}
                           countries={level}
                           name="level"
                           variant="outlined"
                           handleChange={formik.handleChange}
                           handleBlur={formik.handleBlur}
                           onChange={(value) => formik.setFieldValue('level', value)}
                           helperText={formik.touched.level && formik.errors.level}
                           error={formik.touched.level && Boolean(formik.errors.level)}
            />
            <CountrySelect sx={styles.input50}
                           label={t('specialization.modal.specialization.main')}
                           value={formik.values.main}
                           countries={main}
                           name="main"
                           variant="outlined"
                           handleChange={formik.handleChange}
                           handleBlur={formik.handleBlur}
                           onChange={(value) => formik.setFieldValue('main', value)}
                           helperText={formik.touched.main && formik.errors.main}
                           error={formik.touched.main && Boolean(formik.errors.main)}
            />
          </Box>

          <ButtonDef variant='contained' type='submit' label={t('profile.modal.btn')}
                     correctStyle={styles.specializationBtn} />

        </Box>
      </form>

    </ModalLayoutProfile>);
};

export default AddSpecializationModal;