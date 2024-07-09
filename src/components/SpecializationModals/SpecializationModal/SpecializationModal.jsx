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
  useAddSkillsToMasteryMutation,
  useCreateNewSpecializationMutation,
  useLazyGetMasteriesBySpecializationIdQuery,
  useSetNewMainMasteryBySpecIdAndMasteryIdMutation,
  useUpdateSpecializationByIdMutation,
} from '../../../redux/specialization/specializationApiSlice';
import { setSelectedSpecialization } from '../../../redux/specialization/specializationSlice';
import {
  useGetSpecializationListQuery
} from '../../../redux/specialization/specializationList/specializationListApiSlice';
import FormInput from '../../Inputs/FormInput';
import AddIcon from '@mui/icons-material/Add';
import Responsibility from '../../UI/Responsibility';

const initialValues = {
  name: '',
  mastery: '',
  skills: ''
};

const SpecializationModal = React.memo(() => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { id: userId } = useSelector((state) => state.auth.user.data);

  const openSpecialization = useSelector((state) => state.modal.openSpecialization);
  const [ createNewSpecialization ] = useCreateNewSpecializationMutation();
  const [ updateSpecializationById ] = useUpdateSpecializationByIdMutation();
  const [ triggerRequest ] = useLazyGetMasteriesBySpecializationIdQuery();
  const [ setNewMainMasteryBySpecIdAndMasteryId ] = useSetNewMainMasteryBySpecIdAndMasteryIdMutation();
  const [ addSkills ] = useAddSkillsToMasteryMutation();

  const { data: specializations } = useGetSpecializationListQuery('specialization-names.json');

  const selectedSpecialization = useSelector((state) => state.specialisation.selectedSpecialization);
  const handleClose = () => dispatch(closeModal({ modalName: 'openSpecialization' }));

  const { modalData } = useSelector((state) => state.modal);

  const updateSpecialization = async({id, name}) => {
    await updateSpecializationById({id, name}).unwrap();
    dispatch(setSelectedSpecialization({ id, name }));
  }


  const onSubmit = async (values, {resetForm}) => {
    try {

      if (modalData === 'editSpecialization') {
        let shouldUpdateSpecialization = false;
        let shouldUpdateMastery = false;

        if (values.name !== selectedSpecialization.name) {
          shouldUpdateSpecialization = true;
        }

        if (values.mastery !== selectedSpecialization.mastery) {
          shouldUpdateMastery = true;
        }

        if (shouldUpdateSpecialization) {
          await updateSpecialization({ id: selectedSpecialization.id, name: values.name });
        }

        if (shouldUpdateMastery) {
          const masteries = await triggerRequest(selectedSpecialization.id);
          const resp = masteries.data.find((item) => item.level.toLowerCase() === values.mastery.toLowerCase());
          await setNewMainMasteryBySpecIdAndMasteryId({ masteryId: resp.id, specId: selectedSpecialization.id, name: resp.name, softSkillMark: resp.softSkillMark, hardSkillMark: resp.hardSkillMark });
          window.location.reload();
        }

        return;

      }
      const data = await createNewSpecialization({ userId, data: {name: values.name, main: false} }).unwrap();
      const masteries = await triggerRequest(data.id);
      const resp = masteries.data.find((item) => item.level.toLowerCase() === values.mastery.toLowerCase());
      await setNewMainMasteryBySpecIdAndMasteryId({ masteryId: resp.id, specId: data.id, name: resp.name, softSkillMark: resp.softSkillMark, hardSkillMark: resp.hardSkillMark });
      await addSkills({id: resp.id, skills});
    }
    catch (error) {
      console.warn('Failed to create Specialization', error);
    }
    finally {
      resetForm();
      handleClose();
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {...initialValues},
    validationSchema: SpecializationModalSchema,
    onSubmit,
  });

  useEffect(() => {
    if (!selectedSpecialization) return;

    formik.setValues({
      name: selectedSpecialization.name,
      mastery: selectedSpecialization.mastery,
    });

  }, [selectedSpecialization, formik.setValues]);

  const [skills, setSkills] = useState([]);
  const createSkills = (newSkill) => {
    if (newSkill.length === 0 || newSkill.length > 50) return;
    setSkills([...skills, {name: newSkill, type: "HARD_SKILL" }]);
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
                {skills.map(({name}, index) => (
                  <Responsibility
                    key={index}
                    responsibility={name}
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