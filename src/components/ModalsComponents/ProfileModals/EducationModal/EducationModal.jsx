import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { selectModalData } from '../../../../redux/modal/modalSlice';
import { EducationModalSchema } from '../../../../utils/validationSchemas/index';
import FormInput from '../../../FormsComponents/Inputs/FormInput';
import TextAreaInput from '../../../FormsComponents/Inputs/TextAreaInput';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { useCreateEducationMutation, useUpdateEducationMutation } from '../../../../redux/services/educationApiSlice';
import { selectCurrentUser } from '../../../../redux/auth/authSlice';
import { FormSelect } from '../../../FormsComponents/Inputs';
import FormCheckbox from '../../../FormsComponents/Inputs/FormCheckbox';
import { modalNames } from '../../../../utils/constants/modalNames.js';
import { useModalController } from '../../../../utils/hooks/useModalController.js';
import { fillEndYear } from '../../../../utils/helpers/index.js';
import { styles } from './EducationModal.styles';

const EducationModal = () => {
  const { t } = useTranslation();
  const [startYears, setStartYears] = useState([]);
  const [endYears, setEndYears] = useState([]);
  const [createEducation, { isLoading: isCreating }] = useCreateEducationMutation();
  const [updateEducation, { isLoading: isUpdating }] = useUpdateEducationMutation();
  const currentUser = useSelector(selectCurrentUser);
  const { enqueueSnackbar } = useSnackbar();
  const { closeModal } = useModalController();
  const modalData = useSelector(selectModalData);
  const isEditMode = Boolean(modalData);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const startYearsOpts = [];
    for (let i = currentYear; i >= 1950; i--) {
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
    isCurrentDate: false,
  };

  const initialValues = isEditMode
    ? {
        type: modalData.type || '',
        name: modalData.name || '',
        description: modalData.description || '',
        startYear: modalData.startYear || '',
        endYear: modalData.endYear || '',
        isCurrentDate: modalData.endYear === 'Now',
      }
    : emptyInitialValues;

  const onSubmit = async (values, { resetForm }) => {
    const endYearEducation = values.isCurrentDate ? '9999' : new Date(values.endYear).getFullYear();

    try {
      if (isEditMode) {
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
          anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
        });
      } else {
        await createEducation({
          userId: currentUser.data.id,
          payload: { ...values, endYear: endYearEducation },
        }).unwrap();
        enqueueSnackbar(t('modalNotifyText.education.create.success'), { variant: 'success' });
      }
      resetForm();
      closeModal(isEditMode ? modalNames.educationEditModal : modalNames.educationModal);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      const errorMsg = isEditMode
        ? t('modalNotifyText.education.edit.error')
        : t('modalNotifyText.education.create.error');
      enqueueSnackbar(errorMsg, { variant: 'error' });
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: EducationModalSchema,
    onSubmit,
    enableReinitialize: true,
  });

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    formik.setFieldValue('isCurrentDate', isChecked);
    formik.setFieldValue('endYear', isChecked ? '' : formik.values.endYear || '');
    formik.setFieldTouched('isCurrentDate', true, true);
  };

  const isLoading = isEditMode ? isUpdating : isCreating;

  return (
    <>
      <Typography sx={styles.title} variant='subtitle1'>
        {t('profile.modal.education.title')}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.wrapper}>
          <Box sx={styles.inputWrapper}>
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
                autoComplete='off'
                error={formik.touched.name && Boolean(formik.errors.name)}
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                helperText={formik.touched.name && formik.errors.name}
                label='profile.modal.education.name'
                name='name'
                placeholder='profile.modal.education.edInstitution_placeholder'
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
                disabled={formik.values.isCurrentDate}
                error={formik.touched.endYear && Boolean(formik.errors.endYear)}
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                helperText={formik.touched.endYear && formik.errors.endYear}
                label={t('profile.modal.education.endYear')}
                name='endYear'
                sx={styles.input50}
                value={formik.values.isCurrentDate ? '' : formik.values.endYear}
                variant='outlined'
                onChange={(value) => formik.setFieldValue('endYear', value)}
                onOpen={() => fillEndYear(formik, endYears)}
              />
              <Box sx={styles.checkBoxContainer}>
                <FormCheckbox
                  changeHandler={handleCheckboxChange}
                  checked={formik.values.isCurrentDate}
                  error={formik.touched.isCurrentDate && Boolean(formik.errors.isCurrentDate)}
                  helperText={formik.touched.isCurrentDate && formik.errors.isCurrentDate}
                  label={t('profile.modal.education.currentDate')}
                  name='isCurrentDate'
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
                rows={4}
                type='text'
                value={formik.values.description}
              />
            </Box>
          </Box>
          <ButtonDef
            disabled={!formik.dirty || !formik.isValid || formik.isSubmitting || isLoading}
            label={t('profile.modal.btn')}
            loading={isLoading}
            sx={styles.workExperienceBtn}
            type='submit'
            variant='contained'
          />
        </Box>
      </form>
    </>
  );
};

export default EducationModal;
