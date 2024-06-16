import React, { useEffect, useState } from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice';
import { Box, IconButton, Typography } from '@mui/material';
import { styles } from './WorkExperienceModal.styles';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { WorkExperienceModalSchema } from './WorkExperienceModalSchema';
import AddIcon from '@mui/icons-material/Add';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import FormInput from '../../Inputs/FormInput';
import TextAreaInput from '../../Inputs/TextAreaInput';
import Responsibility from '../../UI/Responsibility';
import { ButtonDef } from '../../Buttons';
import { DateField } from '@mui/x-date-pickers';
import { DateTime } from 'luxon';
import {
  useCreateNewWorkExperienceMutation,
  useUpdateWorkExperienceByIdMutation,
} from '../../../redux/workExperience/workExperienceApiSlice';


const WorkExperienceModal = () => {
  const { id } = useSelector((state) => state.auth.user.data);
  const [ createNewWorkExperience ] = useCreateNewWorkExperienceMutation();
  const [ updateWorkExperienceById ] = useUpdateWorkExperienceByIdMutation();

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
    startDate: null,
    endDate: null
  };

  const onSubmit = async (values, { resetForm }) => {
    const startDate = DateTime.fromISO(values.startDate).toISODate();
    const endDate = DateTime.fromISO(values.endDate).toISODate();
    const data = {...values, startDate, endDate, responsibilities};

    try {
      if (modalData && modalData.id) {
        await updateWorkExperienceById({ id: modalData.id, data }).unwrap();
      } else {
        await createNewWorkExperience({ userId: id, data }).unwrap();
      }
    }
    catch (error) {
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
    if (!modalData) return

    formik.setValues({
      position: modalData.position,
      companyName: modalData.companyName,
      description: modalData.description,
      startDate: DateTime.fromISO(modalData.startDate),
      endDate: DateTime.fromISO(modalData.endDate)
    });
    setResponsibilities(modalData.responsibilities);
  }, [modalData]);

  const [responsibilities, setResponsibilities] = useState([]);
  const createResponsibility = (newResponsibility) => {
    if (newResponsibility.length === 0 || newResponsibility.length > 50) return
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
              placeholder='profile.modal.workExperience.companyName_placeholder'
              helperText={formik.touched.companyName && formik.errors.companyName}
              error={formik.touched.companyName && Boolean(formik.errors.companyName)}
            />
          </Box>
          <Box sx={styles.input100}>
            <LocalizationProvider dateAdapter={AdapterLuxon}>
              <DateField sx={styles.input50}
                         label={t('profile.modal.workExperience.startDate')}
                         value={formik.values.startDate}
                         onChange={(value) => formik.setFieldValue('startDate', value)}
                         helperText={formik.touched.startDate && formik.errors.startDate}
                         error={formik.touched.startDate && Boolean(formik.errors.startDate)}
              />
              <DateField sx={styles.input50}
                         label={t('profile.modal.workExperience.endDate')}
                         value={formik.values.endDate}
                         onChange={(value) => formik.setFieldValue('endDate', value)}
                         helperText={formik.touched.endDate && formik.errors.endDate}
                         error={formik.touched.endDate && Boolean(formik.errors.endDate)}
              />
            </LocalizationProvider>
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
              name='responsibilities'
              value={formik.values.responsibilities}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              label='profile.modal.workExperience.responsibilities'
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
                responsibilityDeleteHandler={responsibilityDeleteHandler}/>
            ))}
          </Box>

          <ButtonDef variant='contained' type='submit' label={t('profile.modal.btn')} correctStyle={styles.workExperienceBtn}/>

        </Box>
      </form>
    </ModalLayoutProfile>
  );
};

export default WorkExperienceModal;
