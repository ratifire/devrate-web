import React, { useState } from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice';
import { Box, IconButton, Typography } from '@mui/material';
import { styles } from './WorkExperienceModal.styles';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { WorkExperienceModalSchema } from './WorkExperienceModalSchema';
import AddIcon from '@mui/icons-material/Add';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


import FormInput from '../../Inputs/FormInput';
import TextAreaInput from '../../Inputs/TextAreaInput';
import Duty from '../../UI/Duty';
import { ButtonDef } from '../../Buttons';
import { DateField } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const WorkExperienceModal = () => {
  const dispatch = useDispatch();
  const openExperience = useSelector((state) => state.modal.openExperience);
  const handleClose = () => dispatch(closeModal({ modalName: 'openExperience' }));
  const { t } = useTranslation();

  const initialValues = {
    title: '',
    company: '',
    description: '',
    duty: '',
    startDate: null,
    endDate: null
  };
  const onSubmit = (values, { resetForm }) => {
    values.duty = duties;
    values.startDate = values.startDate ? values.startDate.toISOString().slice(0, 10) : null;
    values.endDate = values.endDate ? values.endDate.toISOString().slice(0, 10) : null;
    console.log('Submitted values:', values);
    resetForm();
    setDuties([]);
    handleClose();
  };
  const formik = useFormik({
    initialValues,
    validationSchema: WorkExperienceModalSchema,
    onSubmit,
  });

  const [duties, setDuties] = useState([]);
  const createDuty = (newDuty) => {
    if (newDuty.length === 0 || newDuty.length > 50) {return}
    setDuties([...duties, newDuty]);
    formik.setFieldValue('duty', '');
  };

  const dutyDeleteHandler = (dutyToDelete) => {
    setDuties(duties.filter((item) => item !== dutyToDelete));
  };

  return (
    <ModalLayoutProfile setOpen={handleClose} open={openExperience}>
      <Typography variant='subtitle1' sx={styles.title}>
        {t('profile.modal.userInfo.titleExperience')}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.wrapper}>
          <Box sx={styles.input50}>
            <FormInput
              name='title'
              value={formik.values.title}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              type='text'
              label='profile.modal.workExperience.title'
              placeholder='profile.modal.workExperience.title_placeholder'
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
              placeholder='profile.modal.workExperience.company_placeholder'
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
              placeholder='profile.modal.workExperience.description_placeholder'
              helperText={formik.touched.description && formik.errors.description}
              error={formik.touched.description && Boolean(formik.errors.description)}
            />
          </Box>
          <Box sx={styles.input100}>
            <FormInput
              name='duty'
              value={formik.values.duty}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              label='profile.modal.workExperience.duty'
              placeholder='profile.modal.workExperience.duty_placeholder'
              helperText={formik.touched.duty && formik.errors.duty}
              error={formik.touched.duty && Boolean(formik.errors.duty)}
            />
            <IconButton sx={styles.iconBtn} onClick={() => createDuty(formik.values.duty)}>
              <AddIcon />
            </IconButton>
          </Box>
          <Box sx={styles.duty}>
            {duties.map((duty, index) => (
              <Duty key={index} duty={duty} tobeDeleted dutyDeleteHandler={dutyDeleteHandler}/>
            ))}
          </Box>

          <Box sx={styles.input100}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateField sx={styles.input50}
                  label={t('profile.modal.workExperience.startDate')}
                  value={formik.values.startDate}
                  format="YYYY-MM-DD"
                  defaultValue={dayjs('2022-04-17')}
                  onChange={(value) => formik.setFieldValue('startDate', value)}
                  helperText={formik.touched.startDate && formik.errors.startDate}
                  error={formik.touched.startDate && Boolean(formik.errors.startDate)}
                />
                <DateField sx={styles.input50}
                  label={t('profile.modal.workExperience.endDate')}
                  value={formik.values.endDate}
                  format="YYYY-MM-DD"
                  defaultValue={dayjs('2023-04-17')}
                  onChange={(value) => formik.setFieldValue('endDate', value)}
                  helperText={formik.touched.endDate && formik.errors.endDate}
                  error={formik.touched.endDate && Boolean(formik.errors.endDate)}
                />
            </LocalizationProvider>
          </Box>

          <ButtonDef variant='contained' type='submit' label={t('profile.modal.btn')} correctStyle={styles.workExperienceBtn}/>

        </Box>
      </form>
    </ModalLayoutProfile>
  );
};

export default WorkExperienceModal;
