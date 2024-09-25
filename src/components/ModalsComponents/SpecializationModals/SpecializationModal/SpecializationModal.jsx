import AddIcon from '@mui/icons-material/Add';
import { Box, IconButton, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import ModalLayoutProfile from '../../../../layouts/ModalLayoutProfile';
import { closeModal } from '../../../../redux/modal/modalSlice';
import {
  useAddSkillsToMasteryMutation,
  useCreateNewSpecializationMutation,
  useLazyGetMasteriesBySpecializationIdQuery,
  useSetNewMainMasteryBySpecIdAndMasteryIdMutation,
  useUpdateSpecializationByIdMutation,
} from '../../../../redux/specialization/specializationApiSlice';
import { useGetSpecializationListQuery } from '../../../../redux/specialization/specializationList/specializationListApiSlice';
import { setSelectedSpecialization } from '../../../../redux/specialization/specializationSlice';
import { SpecializationModalSchema } from '../../../../utils/valadationSchemas/index';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { AdvancedFormSelector } from '../../../FormsComponents/Inputs';
import FormInput from '../../../FormsComponents/Inputs/FormInput';
import Responsibility from '../../../UI/Responsibility';
import { styles } from './SpecializationModal.styles';
import { ErrorComponent, LoaderComponent } from '../../../UI/Exceptions';

const initialValues = {
  name: '',
  mastery: '',
  skills: '',
};

const SpecializationModal = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { id: userId } = useSelector((state) => state.auth.user.data);

  const openSpecialization = useSelector((state) => state.modal.openSpecialization);
  const [createNewSpecialization, { isError: isErrorCreateNewSpecialization, isLoading: isLoadingCreateNewSpecialization }] = useCreateNewSpecializationMutation();
  const [updateSpecializationById, { isError: isErrorUpdateSpecialization, isLoading: isLoadingUpdateSpecialization }] = useUpdateSpecializationByIdMutation();
  const [triggerRequest, { isError: isErrorGetMasteries, isLoading: isLoadingGetMasteries }] = useLazyGetMasteriesBySpecializationIdQuery();
  const [setNewMainMasteryBySpecIdAndMasteryId, { isError: isErrorSetNewMastery, isLoading: isLoadingSetNewMastery }] = useSetNewMainMasteryBySpecIdAndMasteryIdMutation();
  const [addSkills, { isError: isErrorAddSkill, isLoading: isLoadingAddSkill }] = useAddSkillsToMasteryMutation();
  const { data, isError: isErrorGetSpecialization, isLoading: isLoadingGetSpecialization } = useGetSpecializationListQuery('specialization-names.json');

  const isLoading = isLoadingCreateNewSpecialization || isLoadingUpdateSpecialization || isLoadingGetMasteries || isLoadingSetNewMastery || isLoadingAddSkill || isLoadingGetSpecialization;
  const isError = isErrorCreateNewSpecialization || isErrorUpdateSpecialization || isErrorGetMasteries || isErrorSetNewMastery || isErrorAddSkill || isErrorGetSpecialization;

  const specializations = useMemo(() => data?.toSorted((a, b) => a.localeCompare(b)), [data]);
  const selectedSpecialization = useSelector((state) => state.specialization.selectedSpecialization);
  const handleClose = () => dispatch(closeModal({ modalName: 'openSpecialization' }));

  const { modalData } = useSelector((state) => state.modal);

  const [specialization, setSpecialization] = useState('');
  const [mastery, setMastery] = useState('');

  const handleChangeMastery = (value) => {
    setMastery(value);
  };

  const handleChangeSpecialization = (value) => {
    setSpecialization(value);
  };

  useEffect(() => {
    formik.setFieldValue('name', specialization);
  }, [specialization]);

  useEffect(() => {
    formik.setFieldValue('mastery', mastery);
  }, [mastery]);

  const updateSpecialization = async ({ id, name }) => {
    await updateSpecializationById({ id, name }).unwrap();
    dispatch(setSelectedSpecialization({ id, name }));
  };

  const onSubmit = async (values, { resetForm }) => {
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
          await setNewMainMasteryBySpecIdAndMasteryId({
            masteryId: resp.id,
            specId: selectedSpecialization.id,
            name: resp.level,
            softSkillMark: resp.softSkillMark,
            hardSkillMark: resp.hardSkillMark,
          });
        }

        return;
      }

      const data = await createNewSpecialization({ userId, data: { name: values.name, mainMasteryName: values.mastery.toUpperCase(), main: false } }).unwrap();
      const masteries = await triggerRequest(data.id);
      const resp = masteries.data.find((item) => item.level.toLowerCase() === values.mastery.toLowerCase());
      await setNewMainMasteryBySpecIdAndMasteryId({
        masteryId: resp.id,
        specId: data.id,
        name: resp.level,
        softSkillMark: resp.softSkillMark,
        hardSkillMark: resp.hardSkillMark,
      });
      await addSkills({ id: resp.id, skills });
    } catch (error) {
      console.warn('Failed to create Specialization', error);
    } finally {
      resetForm();
      handleClose();
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { ...initialValues },
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
    setSkills([...skills, { name: newSkill, type: 'HARD_SKILL' }]);
    formik.setFieldValue('skills', '');
  };

  const deleteSkillsHandler = (skillToDelete) => {
    setSkills(skills.filter((item) => item !== skillToDelete));
  };

  if (isLoading) {
    return <LoaderComponent />;
  }

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <ModalLayoutProfile setOpen={handleClose} open={openSpecialization}>
      <Typography variant='subtitle1' sx={styles.title}>
        {t('specialization.modal.specialization.modal_title')}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.wrapper}>
          <Box sx={styles.input100}>
            <AdvancedFormSelector
              required
              variant='outlined'
              name='name'
              value={formik.values.name}
              handleChange={handleChangeSpecialization}
              handleBlur={formik.handleBlur}
              label={t('specialization.modal.specialization.name')}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              countries={specializations}
            />
          </Box>
          <Box sx={styles.mastery_input}>
            <AdvancedFormSelector
              required
              id='mastery'
              variant='outlined'
              name='mastery'
              value={formik.values.mastery}
              handleChange={handleChangeMastery}
              handleBlur={formik.handleBlur}
              label={t('specialization.modal.specialization.mastery')}
              error={formik.touched.mastery && Boolean(formik.errors.mastery)}
              helperText={formik.touched.mastery && formik.errors.mastery}
              countries={['Junior', 'Middle', 'Senior']}
              helperDescription={t('specialization.modal.specialization.mastery_helper_text')}
            />
          </Box>
          {modalData === 'addSpecialization' && (
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
                <IconButton
                  sx={styles.iconBtn}
                  onClick={() => createSkills(formik.values.skills)}
                  disabled={formik.touched.skills && Boolean(formik.errors.skills)}
                >
                  <AddIcon />
                </IconButton>
              </Box>
              <Box sx={styles.skills}>
                {skills.map(({ name }, index) => (
                  <Responsibility
                    key={index}
                    responsibility={name}
                    tobeDeleted
                    responsibilityDeleteHandler={deleteSkillsHandler}
                  />
                ))}
              </Box>
            </>
          )}
          <ButtonDef
            variant='contained'
            type='submit'
            label={t('profile.modal.btn')}
            correctStyle={styles.specializationBtn}
          />
        </Box>
      </form>
    </ModalLayoutProfile>
  );
};

export default SpecializationModal;
