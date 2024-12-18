import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { closeModal } from '../../../../redux/modal/modalSlice';
import ModalLayoutProfile from '../../../../layouts/ModalLayoutProfile';
import { EducationModalSchema } from '../../../../utils/valadationSchemas/index';
import FormInput from '../../../FormsComponents/Inputs/FormInput';
import TextAreaInput from '../../../FormsComponents/Inputs/TextAreaInput';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { useCreateEducationMutation, useUpdateEducationMutation } from '../../../../redux/services/educationApiSlice';
import { selectCurrentUser } from '../../../../redux/auth/authSlice';
import { selectEducationDataToEdit, clearEducationDataToEdit } from '../../../../redux/user/education/educationSlice';
import { FormSelect } from '../../../FormsComponents/Inputs';
import { styles } from './EducationModal.styles';

const EducationModal = () => {
  const dispatch = useDispatch();
  const dataToEdit = useSelector(selectEducationDataToEdit);
  const openEducation = useSelector((state) => state.modal.education);
  const { t } = useTranslation();
  const translatedNow = t('profile.modal.education.now');
  const [startYears, setStartYears] = useState([]);
  const [endYears, setEndYears] = useState([]);
  const [createEducation, { isLoading }] = useCreateEducationMutation();
  const [updateEducation] = useUpdateEducationMutation();
  const currentUser = useSelector(selectCurrentUser);
  const { enqueueSnackbar } = useSnackbar();

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

  const onSubmit = async (values, { resetForm }) => {
    const endYearEducation =
      values.endYear === null || values.endYear === translatedNow || values.endYear === ''
        ? new Date('9999-01-01').getFullYear()
        : new Date(values.endYear).getFullYear();

    try {
      if (dataToEdit) {
        await updateEducation({
          id: dataToEdit.id,
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
      } else {
        await createEducation({
          userId: currentUser.data.id,
          payload: { ...values, endYear: endYearEducation },
        }).unwrap();

        enqueueSnackbar(t('modalNotifyText.education.create.success'), { variant: 'success' });
      }
      resetForm();
      handleClose();
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      if (dataToEdit) {
        enqueueSnackbar(t('modalNotifyText.education.edit.error'), {
          variant: 'error',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
        });
      } else {
        enqueueSnackbar(t('modalNotifyText.education.create.error'), { variant: 'error' });
      }
    }
  };

  const formik = useFormik({
    initialValues: dataToEdit || emptyInitialValues,
    validationSchema: EducationModalSchema,
    onSubmit,
    enableReinitialize: true,
  });

  useEffect(() => {
    if (!openEducation) {
      formik.resetForm();
      dispatch(clearEducationDataToEdit());
    }
  }, [openEducation, formik, dispatch]);

  return (
    <ModalLayoutProfile open={openEducation} setOpen={handleClose}>
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
              s
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
              error={formik.touched.endYear && Boolean(formik.errors.endYear)}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              helperText={formik.touched.endYear && formik.errors.endYear}
              label={t('profile.modal.education.endYear')}
              name='endYear'
              sx={styles.input50}
              value={formik.values.endYear}
              variant='outlined'
              onChange={(value) => formik.setFieldValue('endYear', value)}
            />
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
            loading={isLoading}
            sx={styles.workExperienceBtn}
            type='submit'
            variant='contained'
          />
        </Box>
      </form>
    </ModalLayoutProfile>
  );
};

export default EducationModal;
