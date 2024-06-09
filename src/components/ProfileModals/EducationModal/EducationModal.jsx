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
import {useCreateEducationMutation, useUpdateEducationMutation} from "../../../redux/services/educationApiSlice";
import {selectCurrentUser} from "../../../redux/auth/authSlice";
import {selectEducationDataToEdit} from "../../../redux/user/education/educationSlice";


const EducationModal = () => {
  const dispatch = useDispatch();
  const dataToEdit = useSelector(selectEducationDataToEdit);
  const openEducation = useSelector((state) => state.modal.education);
  const handleClose = () => dispatch(closeModal({ modalName: 'education' }));
  const { t } = useTranslation();
  const [years, setYears] = useState([]);
  const [createEducation] = useCreateEducationMutation();
  const [updateEducation] = useUpdateEducationMutation();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    const yearsOpts = [];
    for (let i = 1900; i < 2100; i++) {
      yearsOpts.push(`${i}`);
    }
    setYears(yearsOpts);
  }, []);

  const initialValues = {
    type: '',
    name: '',
    description: '',
    startYear: `${new Date().getFullYear()}`,
    endYear: '',
    ...(dataToEdit || {}),
  };
  const onSubmit = (values, { resetForm }) => {
    console.log('Submitted values:', values);
    if (dataToEdit) {
      updateEducation({
        id: dataToEdit.id,
        payload: {
          type: values.type,
          name: values.name,
          description: values.description,
          startYear: values.startYear,
          endYear: values.endYear,
        },
      });
    } else {
      createEducation({
        userId: currentUser.data.id,
        payload: values,
      });
    }


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
              label='modal.education.name'
              placeholder='profile.modal.workExperience.companyName_placeholder'
              helperText={formik.touched.name && formik.errors.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
            />
          </Box>
          <Box sx={styles.input100}>
              <CountrySelect sx={styles.input50}
                         label={t('modal.education.startYear')}
                         value={formik.values.startYear}
                         countries={years}
                         name='startYear'
                         variant="standard"
                         handleChange={formik.handleChange}
                         handleBlur={formik.handleBlur}
                         onChange={(value) => formik.setFieldValue('startYear', value)}
                         helperText={formik.touched.startYear && formik.errors.startYear}
                         error={formik.touched.startYear && Boolean(formik.errors.startYear)}
              />
              <CountrySelect sx={styles.input50}
                         label={t('modal.education.endYear')}
                         value={formik.values.endYear}
                         countries={years}
                         name='endYear'
                         variant="standard"
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
