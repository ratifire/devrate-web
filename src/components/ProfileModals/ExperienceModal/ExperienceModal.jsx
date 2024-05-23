import React, { useEffect, useState } from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { styles } from './ExperienceModal.styles';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { ExperienceModalSchema } from './ExperienceModalSchema';
import AddIcon from '@mui/icons-material/Add';

import FormInput from '../../Inputs/FormInput';
import TextAreaInput from '../../Inputs/TextAreaInput';
import Duty from '../../UI/Duty';

const ExperienceModal = () => {
  const dispatch = useDispatch();
  const openExperience = useSelector((state) => state.modal.openExperience);
  const handleClose = () => dispatch(closeModal({ modalName: 'openExperience' }));
  const { t } = useTranslation();

  const initialValues = {
    title: '',
    company: '',
    description: '',
    duty: '',
  };
  const onSubmit = (values, { resetForm }) => {
    resetForm();
  };
  const formik = useFormik({
    initialValues,
    validationSchema: ExperienceModalSchema,
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

  useEffect(() => console.log(duties), [duties]);

  const handleComplete = () => {
    console.log('Endpoint is called to update the work experience');
  }

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
            name='duty'
            value={formik.values.duty}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            label='profile.modal.workExperience.duty'
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

        <Button variant='contained' onClick={handleComplete}>
          {t('profile.modal.btn')}
        </Button>

      </Box>
    </ModalLayoutProfile>
  );
};

export default ExperienceModal;
