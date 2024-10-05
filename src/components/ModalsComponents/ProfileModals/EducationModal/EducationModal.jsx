import React, { useEffect, useState, useCallback } from 'react';
import ModalLayoutProfile from '../../../../layouts/ModalLayoutProfile';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../../redux/modal/modalSlice';
import { Box, Typography } from '@mui/material';
import { styles } from './EducationModal.styles';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { EducationModalSchema } from '../../../../utils/valadationSchemas/index';
import FormInput from '../../../FormsComponents/Inputs/FormInput';
import TextAreaInput from '../../../FormsComponents/Inputs/TextAreaInput';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import CountrySelect from '../../../FormsComponents/Inputs/FormSelect';
import { useCreateEducationMutation, useUpdateEducationMutation } from '../../../../redux/services/educationApiSlice';
import { selectCurrentUser } from '../../../../redux/auth/authSlice';
import { selectEducationDataToEdit, clearEducationDataToEdit } from '../../../../redux/user/education/educationSlice';

const EducationModal = () => {
  const dispatch = useDispatch();
  const dataToEdit = useSelector(selectEducationDataToEdit);
  const openEducation = useSelector((state) => state.modal.education);
  const { t } = useTranslation();
  const [startYears, setStartYears] = useState([]);
  const [endYears, setEndYears] = useState([]);
  const [createEducation] = useCreateEducationMutation();
  const [updateEducation] = useUpdateEducationMutation();
  const currentUser = useSelector(selectCurrentUser);

  const handleClose = useCallback(() => {
    dispatch(closeModal({ modalName: 'education' }));
    dispatch(clearEducationDataToEdit());
  }, [dispatch]);

  useEffect(() => {
    const startYearsOpts = [];
    for (let i = 1950; i <= `${new Date().getFullYear()}`; i++) {
      startYearsOpts.push(`${i}`);
    }
    setStartYears(startYearsOpts);

    const endYearsOpts = [];
    for (let i = 1950; i < 2050; i++) {
      endYearsOpts.push(`${i}`);
    }
    setEndYears(endYearsOpts);
  }, []);

  const emptyInitialValues = {
    type: '',
    name: '',
    description: '',
    startYear: '',
    endYear: '',
  };

  const formik = useFormik({
    initialValues: dataToEdit || emptyInitialValues,
    validationSchema: EducationModalSchema,
    onSubmit: (values, { resetForm }) => {

      const endYearEducation =  (values.endYear === null || values.endYear === 'Now' || values.endYear === '') ? new Date('9999-01-01').getFullYear() : new Date(values.endYear).getFullYear();
      if (dataToEdit) {
        updateEducation({
          id: dataToEdit.id,
          payload: {
            type: values.type,
            name: values.name,
            description: values.description,
            startYear: values.startYear,
            endYear: endYearEducation,
          },
        });
      } else {
        createEducation({
          userId: currentUser.data.id,
          payload: {...values, endYear: endYearEducation},
        });
      }

      resetForm();
      handleClose();
    },
    enableReinitialize: true,
  });

  useEffect(() => {
    if (!openEducation) {
      formik.resetForm();
      dispatch(clearEducationDataToEdit());
    }
  }, [openEducation, formik, dispatch]);

  return (
    <ModalLayoutProfile setOpen={handleClose} open={openEducation}>
      <Typography variant='subtitle1' sx={styles.title}>
        {t('profile.modal.education.title')}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.wrapper}>
          <Box sx={styles.input50}>
            <FormInput
              name='type'
              value={formik.values.type}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              type='text'
              label='profile.modal.education.type'
              required
              placeholder='profile.modal.education.speciality_placeholder'
              helperText={formik.touched.type && formik.errors.type}
              error={formik.touched.type && Boolean(formik.errors.type)}
            />
          </Box>
          <Box sx={styles.input50}>
            <FormInput
              name='name'
              value={formik.values.name}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              label='profile.modal.education.name'
              required
              placeholder='profile.modal.education.edIstitution_placeholder'
              helperText={formik.touched.name && formik.errors.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
            />
          </Box>
          <Box sx={styles.input100}>
            <CountrySelect
              sx={styles.input50}
              label={t('profile.modal.education.startYear')}
              value={formik.values.startYear}
              countries={startYears}
              name='startYear'                     s
              variant='outlined'
              required
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              onChange={(value) => formik.setFieldValue('startYear', value)}
              helperText={formik.touched.startYear && formik.errors.startYear}
              error={formik.touched.startYear && Boolean(formik.errors.startYear)}
            />
            <CountrySelect
              sx={styles.input50}
              label={t('profile.modal.education.endYear')}
              value={formik.values.endYear}
              countries={endYears}
              name='endYear'
              variant='outlined'
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              onChange={(value) => formik.setFieldValue('endYear', value)}
              helperText={formik.touched.endYear && formik.errors.endYear}
              error={formik.touched.endYear && Boolean(formik.errors.endYear)}
            />
          </Box>
          <Box sx={styles.input100}>
            <TextAreaInput
              name='description'
              value={formik.values.description}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              type='text'
              required
              label='profile.modal.education.description'
              placeholder='profile.modal.education.description_placeholder'
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

export default EducationModal;
