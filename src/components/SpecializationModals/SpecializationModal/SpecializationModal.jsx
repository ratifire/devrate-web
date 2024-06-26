import React, { useEffect, useState } from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { closeModal } from '../../../redux/modal/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { SpecializationModalSchema } from './SpecializationModalSchema';
import { Box, IconButton, Typography } from '@mui/material';
import { styles } from './SpecializationModal.styles';
import { ButtonDef } from '../../Buttons';
import { useTranslation } from 'react-i18next';
import CountrySelect from '../../Inputs/CountrySelect';
import {
  useCreateNewSpecializationMutation,
  useUpdateSpecializationByIdMutation,
} from '../../../redux/specialization/specializationApiSlice';
import { setSelectedSpecialization } from '../../../redux/specialization/specializationSlice';
import {
  useGetSpecializationListQuery
} from '../../../redux/specialization/specializationList/specializationListApiSlice';
import FormInput from '../../Inputs/FormInput';
import AddIcon from '@mui/icons-material/Add';
import Responsibility from '../../UI/Responsibility';

const SpecializationModal = React.memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { id } = useSelector((state) => state.auth.user.data);

  const openSpecialization = useSelector((state) => state.modal.openSpecialization);

  const [ createNewSpecialization ] = useCreateNewSpecializationMutation();
  const [ updateSpecializationById ] = useUpdateSpecializationByIdMutation();

  const { data: specializations } = useGetSpecializationListQuery('specialization-names.json');

  const selectedSpecialization = useSelector((state) => state.specialisation.selectedSpecialization);
  const handleClose = () => dispatch(closeModal({ modalName: 'openSpecialization' }));

  const { modalData } = useSelector((state) => state.modal);
  console.log(modalData);

  const initialValues = {
    name: '',
    mastery: '',
    skills: ''
  };

  const onSubmit = async (values, { resetForm }) => {
    // const main = values.main === 'Yes';
    // const data = {name: values.name, main: main}
    const data = {name: values.name}

    console.log('Data from the form', data);
    console.log('SelectedSpecialization', selectedSpecialization);

    try {
      if (modalData === 'editSpecialization') {
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
    if (!selectedSpecialization) return;

    formik.setValues({
      name: selectedSpecialization.name,
      mastery: selectedSpecialization.mastery,
      // main: selectedSpecialization.main ? 'Yes' : 'No',
    });
    // setSkills(selectedSpecialization.skills);

  }, [selectedSpecialization, formik.setValues]);

  const [skills, setSkills] = useState([]);
  const createSkills = (newSkill) => {
    if (newSkill.length === 0 || newSkill.length > 50) return;
    setSkills([...skills, newSkill]);
    formik.setFieldValue('skills', '');
  };

  const deleteSkillsHandler = (skillToDelete) => {
    setSkills(skills.filter((item) => item !== skillToDelete));
  };

  return (
    <ModalLayoutProfile setOpen={handleClose} open={openSpecialization}>
      <Typography variant='subtitle1' sx={styles.title}>
        {t('specialization.modal.specialization.modal_title')}
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.wrapper}>
          <Box sx={styles.input100}>
            <CountrySelect sx={styles.input50}
                           label={t('specialization.modal.specialization.name')}
                           value={formik.values.name}
                           countries={specializations}
                           name="name"
                           variant="outlined"
                           handleChange={formik.handleChange}
                           handleBlur={formik.handleBlur}
                           onChange={(value) => formik.setFieldValue('name', value)}
                           helperText={formik.touched.name && formik.errors.name}
                           error={formik.touched.name && Boolean(formik.errors.name)}
            />
          </Box>

          <Box sx={styles.input100}>
            <CountrySelect sx={styles.input50}
                           label={t('specialization.modal.specialization.mastery')}
                           value={formik.values.mastery}
                           countries={['Junior', 'Middle', 'Senior']}
                           name="mastery"
                           variant="outlined"
                           handleChange={formik.handleChange}
                           handleBlur={formik.handleBlur}
                           onChange={(value) => formik.setFieldValue('mastery', value)}
                           helperText={formik.touched.mastery && formik.errors.mastery}
                           error={formik.touched.mastery && Boolean(formik.errors.mastery)}
            />
          </Box>

          {modalData==='addSpecialization' &&
            <>
              <Box sx={styles.input100}>
                <FormInput
                  name='skills'
                  value={formik.values.skills}
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  label='specialization.modal.skills.title'
                  placeholder='specialization.modal.skills.placeholder'
                  helperText={formik.touched.skills && formik.errors.skills}
                  error={formik.touched.skills && Boolean(formik.errors.skills)}
                />
                <IconButton sx={styles.iconBtn} onClick={() => createSkills(formik.values.skills)}>
                  <AddIcon />
                </IconButton>
              </Box>
              <Box sx={styles.skills}>
                {skills.map((skill, index) => (
                  <Responsibility
                    key={index}
                    responsibility={skill}
                    tobeDeleted
                    responsibilityDeleteHandler={deleteSkillsHandler}/>
                ))}
              </Box>
            </>
          }


          <ButtonDef variant='contained' type='submit' label={t('profile.modal.btn')}
                     correctStyle={styles.specializationBtn} />

        </Box>
      </form>

    </ModalLayoutProfile>);
});

SpecializationModal.displayName = 'SpecializationModal';

export default SpecializationModal;