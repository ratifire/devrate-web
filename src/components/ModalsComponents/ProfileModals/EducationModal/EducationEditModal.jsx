import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { closeModal, selectModalData } from '../../../../redux/modal/modalSlice';
import { EducationModalSchema } from '../../../../utils/validationSchemas/index';
import FormInput from '../../../FormsComponents/Inputs/FormInput';
import TextAreaInput from '../../../FormsComponents/Inputs/TextAreaInput';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { useUpdateEducationMutation } from '../../../../redux/services/educationApiSlice';
import { FormSelect } from '../../../FormsComponents/Inputs';
import FormCheckbox from '../../../FormsComponents/Inputs/FormCheckbox';
import { modalNames } from '../../../../utils/constants/modalNames.js';
import { styles } from './EducationModal.styles';

const EducationEditModal = () => {
  const dispatch = useDispatch();
  const modalData = useSelector(selectModalData);
  const { t } = useTranslation();
  const translatedNow = t('profile.modal.education.now');
  const [startYears, setStartYears] = useState([]);
  const [endYears, setEndYears] = useState([]);
  const [updateEducation, { isLoading }] = useUpdateEducationMutation();
  const { enqueueSnackbar } = useSnackbar();

  const handleClose = () => {
    dispatch(closeModal({ modalType: modalNames.educationEditModal }));
  };

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
    type: modalData?.type || '',
    name: modalData?.name || '',
    description: modalData?.description || '',
    startYear: modalData?.startYear || '',
    endYear: modalData?.endYear || '',
    currentDate: modalData?.endYear === '9999' || false,
  };

  const onSubmit = async (values, { resetForm }) => {
    const endYearEducation =
      values.currentDate || values.endYear === null || values.endYear === translatedNow || values.endYear === ''
        ? '9999'
        : new Date(values.endYear).getFullYear();

    try {
      if (modalData) {
        await updateEducation({
          id: modalData.id,
          payload: {
            type: values.type,
            name: values.name,
            description: values.description,
            startYear: values.startYear,
            endYear: endYearEducation,
          },
        }).unwrap();

        enqueueSnackbar(t('modalNotifyText.education.edit.success'), {
          variant: 'success',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
        });
      }
      resetForm();
      handleClose();
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      if (modalData) {
        enqueueSnackbar(t('modalNotifyText.education.edit.error'), {
          variant: 'error',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
        });
      }
    }
  };

  const formik = useFormik({
    initialValues: modalData || emptyInitialValues,
    validationSchema: EducationModalSchema,
    onSubmit,
    enableReinitialize: true,
  });

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    formik.setFieldValue('currentDate', isChecked);
    formik.setFieldValue('endYear', isChecked ? '' : formik.values.endYear || '');
  };

  return (
    <>
      <Typography sx={styles.title} variant='subtitle1'>
        {t('profile.modal.education.title')}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.wrapper}>
          <Box sx={styles.input50}>
            <FormInput
              required
              error={formik.touched.type && Boolean(formik.errors.type)}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              helperText={formik.touched.type && formik.errors.type}
              label='profile.modal.education.type'
              name='type'
              placeholder='profile.modal.education.speciality_placeholder'
              type='text'
              value={formik.values.type}
            />
          </Box>
          <Box sx={styles.input50}>
            <FormInput
              required
              error={formik.touched.name && Boolean(formik.errors.name)}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              helperText={formik.touched.name && formik.errors.name}
              label='profile.modal.education.name'
              name='name'
              placeholder='profile.modal.education.edIstitution_placeholder'
              value={formik.values.name}
            />
          </Box>
          <Box sx={styles.input100}>
            <FormSelect
              required
              countries={startYears}
              error={formik.touched.startYear && Boolean(formik.errors.startYear)}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              helperText={formik.touched.startYear && formik.errors.startYear}
              label={t('profile.modal.education.startYear')}
              name='startYear'
              sx={styles.input50}
              value={formik.values.startYear}
              variant='outlined'
              onChange={(value) => formik.setFieldValue('startYear', value)}
            />
            <FormSelect
              countries={endYears}
              disabled={formik.values.currentDate}
              error={formik.touched.endYear && Boolean(formik.errors.endYear)}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              helperText={formik.touched.endYear && formik.errors.endYear}
              label={t('profile.modal.education.endYear')}
              name='endYear'
              sx={styles.input50}
              value={formik.values.currentDate ? '' : formik.values.endYear}
              variant='outlined'
              onChange={(value) => formik.setFieldValue('endYear', value)}
            />
            <Box sx={styles.checkBoxContainer}>
              <FormCheckbox
                changeHandler={handleCheckboxChange}
                checked={formik.values.currentDate || false}
                error={formik.touched.currentDate && Boolean(formik.errors.currentDate)}
                helperText={formik.touched.currentDate && formik.errors.currentDate}
                label={t('profile.modal.education.currentDate')}
                name='currentDate'
              />
            </Box>
          </Box>
          <Box sx={styles.input100}>
            <TextAreaInput
              required
              error={formik.touched.description && Boolean(formik.errors.description)}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              helperText={formik.touched.description && formik.errors.description}
              label='profile.modal.education.description'
              name='description'
              placeholder='profile.modal.education.description_placeholder'
              type='text'
              value={formik.values.description}
            />
          </Box>

          <ButtonDef
            disabled={!formik.dirty || !formik.isValid || formik.isSubmitting || isLoading}
            label={t('profile.modal.btn')}
            sx={styles.workExperienceBtn}
            type='submit'
            variant='contained'
          />
        </Box>
      </form>
    </>
  );
};

export default EducationEditModal;
