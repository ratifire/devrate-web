import React, { useEffect, useState } from 'react';
import ModalLayoutProfile from '../../../../layouts/ModalLayoutProfile';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../../redux/modal/modalSlice';
import { Box, IconButton, Typography } from '@mui/material';
import { styles } from './WorkExperienceModal.styles';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { WorkExperienceModalSchema } from '../../../../utils/valadationSchemas/index';
import AddIcon from '@mui/icons-material/Add';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import FormInput from '../../../FormsComponents/Inputs/FormInput';
import TextAreaInput from '../../../FormsComponents/Inputs/TextAreaInput';
import Responsibility from '../../../UI/Responsibility';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { DateTime } from 'luxon';
import {
  useCreateNewWorkExperienceMutation,
  useUpdateWorkExperienceByIdMutation,
} from '../../../../redux/workExperience/workExperienceApiSlice';
import FormCheckbox from '../../../FormsComponents/Inputs/FormCheckbox';
import CountrySelect from '../../../FormsComponents/Inputs/CountrySelect';

const WorkExperienceModal = () => {
  const [startYears, setStartYears] = useState([]);
  const [endYears, setEndYears] = useState([]);
  const { id } = useSelector((state) => state.auth.user.data);
  const [createNewWorkExperience] = useCreateNewWorkExperienceMutation();
  const [updateWorkExperienceById] = useUpdateWorkExperienceByIdMutation();

  const dispatch = useDispatch();
  const openExperience = useSelector((state) => state.modal.openExperience);
  const handleClose = () => dispatch(closeModal({ modalName: 'openExperience' }));
  const { t } = useTranslation();

  const { modalData } = useSelector((state) => state.modal);

  const initialValues = {
    position: '',
    companyName: '',
    description: '',
    responsibilities: '',
    startDate: '',
    endDate: '',
    currentDate: false,
  };

  const onSubmit = async (values, { resetForm }) => {
    const startDate = values.startDate;
    const endDate = values.currentDate ? 9999 : values.startDate;
    const data = { ...values, startDate, endDate, responsibilities };

    try {
      if (modalData && modalData.id) {
        await updateWorkExperienceById({ id: modalData.id, data }).unwrap();
      } else {
        await createNewWorkExperience({ userId: id, data }).unwrap();
      }
    } catch (error) {
      console.error('Failed to create Work Experience', error);
    }

    setResponsibilities([]);
    resetForm();
    handleClose();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: WorkExperienceModalSchema,
    onSubmit,
  });

  useEffect(() => {
    const startYearsOpts = [];
    for (let i = 1950; i <= `${new Date().getFullYear()}`; i++) {
      startYearsOpts.push(`${i}`);
    }
    setStartYears(startYearsOpts);

    const endYearsOpts = [];


    for (let i = 1950; i <= `${new Date().getFullYear()}`; i++) {
      endYearsOpts.push(`${i}`);
    }
    setEndYears(endYearsOpts);
  }, []);

  useEffect(() => {
    if (!modalData) return;

    formik.setValues({
      position: modalData.position,
      companyName: modalData.companyName,
      description: modalData.description,
      startDate: modalData.startDate,
      endDate: modalData.endDate,
    });
    setResponsibilities(modalData.responsibilities);
  }, [modalData, formik.setValues]);

  const [responsibilities, setResponsibilities] = useState([]);
  const createResponsibility = (newResponsibility) => {
    if (newResponsibility.length < 2 || newResponsibility.length > 50) return;
    setResponsibilities([...responsibilities, newResponsibility]);
    formik.setFieldValue('responsibilities', '');
  };

  const responsibilityDeleteHandler = (responsibilityToDelete) => {
    setResponsibilities(responsibilities.filter((item) => item !== responsibilityToDelete));
  };

  return (
    <ModalLayoutProfile setOpen={handleClose} open={openExperience}>
      <Typography variant='subtitle1' sx={styles.title}>
        {t('profile.experience.workExperience')}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.wrapper}>
          <Box sx={styles.input50}>
            <FormInput
              name='position'
              value={formik.values.position}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              type='text'
              label='profile.modal.workExperience.position'
              required
              placeholder='profile.modal.workExperience.position_placeholder'
              helperText={formik.touched.position && formik.errors.position}
              error={formik.touched.position && Boolean(formik.errors.position)}
            />
          </Box>
          <Box sx={styles.input50}>
            <FormInput
              name='companyName'
              value={formik.values.companyName}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              label='profile.modal.workExperience.companyName'
              required
              placeholder='profile.modal.workExperience.companyName_placeholder'
              helperText={formik.touched.companyName && formik.errors.companyName}
              error={formik.touched.companyName && Boolean(formik.errors.companyName)}
            />
          </Box>
          <Box sx={styles.input100}>
            <LocalizationProvider dateAdapter={AdapterLuxon}>
              <CountrySelect
                sx={styles.input50}
                label={t('profile.modal.workExperience.startDate')}
                value={formik.values.startDate}
                countries={startYears}
                name='startDate'
                variant='outlined'
                required
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                helperText={formik.touched.startDate && formik.errors.startDate}
                error={formik.touched.startDate && Boolean(formik.errors.startDate)}
              />
              <CountrySelect
                sx={styles.input50}
                label={t('profile.modal.workExperience.endDate')}
                value={formik.values.endDate}
                countries={endYears}
                name='endDate'
                variant='outlined'
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                helperText={formik.touched.endDate && formik.errors.endDate}
                error={formik.touched.endDate && Boolean(formik.errors.endDate)}
                disabled={formik.values.currentDate}
              />
            </LocalizationProvider>
            <FormCheckbox
              label={t('profile.modal.workExperience.currentDate')}
              checked={formik.values.currentDate}
              changeHandler={(e) => formik.setFieldValue('currentDate', e.target.checked)}
              name='currentDate'
              helperText={formik.touched.currentDate && formik.errors.currentDate}
              error={formik.touched.currentDate && Boolean(formik.errors.currentDate)}
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
              required
              placeholder='profile.modal.workExperience.description_placeholder'
              helperText={formik.touched.description && formik.errors.description}
              error={formik.touched.description && Boolean(formik.errors.description)}
              FormHelperTextProps={{
                sx: styles.error
              }}
            />
          </Box>
          <Box sx={styles.input100}>
            <FormInput
              name='responsibilities'
              value={formik.values.responsibilities}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              label='profile.modal.workExperience.responsibilities'
              required
              placeholder='profile.modal.workExperience.responsibilities_placeholder'
              helperText={formik.touched.responsibilities && formik.errors.responsibilities}
              error={formik.touched.responsibilities && Boolean(formik.errors.responsibilities)}
            />
            <IconButton sx={styles.iconBtn} onClick={() => createResponsibility(formik.values.responsibilities)}>
              <AddIcon />
            </IconButton>
          </Box>
          <Box sx={styles.responsibility}>
            {responsibilities.map((responsibility, index) => (
              <Responsibility
                key={index}
                responsibility={responsibility}
                tobeDeleted
                responsibilityDeleteHandler={responsibilityDeleteHandler}
              />
            ))}
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

export default WorkExperienceModal;
