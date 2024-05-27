import React, {useEffect, useState} from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import {useDispatch, useSelector} from 'react-redux';
import {closeModal} from '../../../redux/modal/modalSlice';
import {Box, Typography} from '@mui/material';
import {styles} from './EducationModal.styles';
import {useTranslation} from 'react-i18next';
import {useFormik} from 'formik';
import {EducationModalSchema} from './EducationModalSchema';
import FormInput from '../../Inputs/FormInput';
import TextAreaInput from '../../Inputs/TextAreaInput';
import {ButtonDef} from '../../Buttons';
import CountrySelect from "../../Inputs/CountrySelect";
import {useCreateEducationMutation} from "../../../redux/services/educationApiSlice";
import {selectCurrentUser} from "../../../redux/auth/authSlice";


const EducationModal = () => {
  const dispatch = useDispatch();
  const openEducation = useSelector((state) => state.modal.education);
  const handleClose = () => dispatch(closeModal({ modalName: 'education' }));
  const { t } = useTranslation();
  const [years, setYears] = useState([]);
  const [createEducation] = useCreateEducationMutation();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    const yearsOpts = [];
    for (let i = 1900; i < 2100; i++) {
      yearsOpts.push({
        id: `year-${i}`,
        country: i,
        label: i,
      });
    }
    setYears(yearsOpts);
  }, []);

  const initialValues = {
    type: '',
    name: '',
    description: '',
    startYear: null,
    endYear: null
  };
  const onSubmit = (values, { resetForm }) => {
    console.log('Submitted values:', values);
    createEducation({
      userId: currentUser.id,
      payload: values,
    })

    resetForm();
    handleClose();
  };

  const formik = useFormik({
    initialValues,
    validationSchema: EducationModalSchema,
    onSubmit,
  });

  return (
    <ModalLayoutProfile setOpen={handleClose} open={openEducation}>
      <Typography variant='subtitle1' sx={styles.title}>
        {t('modal.education.title')}
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
              label='modal.education.type'
              placeholder='profile.modal.workExperience.position_placeholder'
              helperText={formik.touched.position && formik.errors.position}
              error={formik.touched.position && Boolean(formik.errors.position)}
            />
          </Box>
          <Box sx={styles.input50}>
            <FormInput
              name='name'
              value={formik.values.name}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              label='modal.education.name'
              placeholder='profile.modal.workExperience.companyName_placeholder'
              helperText={formik.touched.companyName && formik.errors.companyName}
              error={formik.touched.companyName && Boolean(formik.errors.companyName)}
            />
          </Box>
          <Box sx={styles.input100}>
              <CountrySelect sx={styles.input50}
                         label={t('modal.education.startYear')}
                         value={formik.values.startYear}
                         countries={years}
                         onChange={(value) => formik.setFieldValue('startYear', value)}
                         helperText={formik.touched.startDate && formik.errors.startDate}
                         error={formik.touched.startDate && Boolean(formik.errors.startDate)}
              />
              <CountrySelect sx={styles.input50}
                         label={t('modal.education.endYear')}
                         value={formik.values.endYear}
                         countries={years}
                         onChange={(value) => formik.setFieldValue('endYear', value)}
                         helperText={formik.touched.endDate && formik.errors.endDate}
                         error={formik.touched.endDate && Boolean(formik.errors.endDate)}
              />
          </Box>
          <Box sx={styles.input100}>
            <TextAreaInput
              name='description'
              value={formik.values.description}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              type='text'
              label='modal.education.description'
              placeholder='profile.modal.workExperience.description_placeholder'
              helperText={formik.touched.description && formik.errors.description}
              error={formik.touched.description && Boolean(formik.errors.description)}
            />
          </Box>

          <ButtonDef variant='contained' type='submit' label={t('profile.modal.btn')} correctStyle={styles.workExperienceBtn}/>

        </Box>
      </form>
    </ModalLayoutProfile>
  );
};

export default EducationModal;
