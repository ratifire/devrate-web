import React, { useEffect, useState } from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { closeModal } from '../../../redux/modal/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { SpecializationModalSchema } from './SpecializationModalSchema';
import { Box, Typography } from '@mui/material';
import { styles } from './SpecializationModal.styles';
import FormInput from '../../Inputs/FormInput';
import { ButtonDef } from '../../Buttons';
import { useTranslation } from 'react-i18next';
import CountrySelect from '../../Inputs/CountrySelect';
import {
  useCreateNewSpecializationMutation,
  useUpdateSpecializationByIdMutation,
} from '../../../redux/specialization/specializationApiSlice';
import { setSelectedSpecialization } from '../../../redux/specialization/specializationSlice';

const SpecializationModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.auth.user.data);

  const [level] = useState(['Junior', 'Middle', 'Senior']);
  const [main] = useState(['Yes', 'No']);

  const openAddSpecialization = useSelector((state) => state.modal.openAddSpecialization);

  const [ createNewSpecialization ] = useCreateNewSpecializationMutation();
  const [ updateSpecializationById ] = useUpdateSpecializationByIdMutation();

  const selectedSpecialization = useSelector((state) => state.specialisation.selectedSpecialization);
  const handleClose = () => dispatch(closeModal({ modalName: 'openAddSpecialization' }));

  const initialValues = {
    title: '',
    level: '',
    main: ''
  };

  const onSubmit = async (values, { resetForm }) => {
    const main = values.main === 'Yes';
    const data = {name: values.title, main: main}
    console.log('Data from the form', data);
    console.log('SelectedSpecialization', selectedSpecialization);

    try {
      if (selectedSpecialization && selectedSpecialization.id) {
        await updateSpecializationById({ id: selectedSpecialization.id, name: data.name }).unwrap();
        dispatch(setSelectedSpecialization({ id: selectedSpecialization.id, name: data.name }));
      } else {
        await createNewSpecialization({ userId: id, data }).unwrap();
      }
    }
    catch (error) {
      console.error('Failed to create Specialization', error);
    }
    resetForm();
    handleClose();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: SpecializationModalSchema,
    onSubmit,
  });

  useEffect(() => {
    if (!selectedSpecialization) return

    formik.setValues({
      title: selectedSpecialization.name,
      level: selectedSpecialization.level,
      main: (selectedSpecialization.main ? 'Yes' : 'No')
    });
  }, [selectedSpecialization]);

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

export default SpecializationModal;