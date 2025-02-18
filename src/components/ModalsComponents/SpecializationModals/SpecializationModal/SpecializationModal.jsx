import AddIcon from '@mui/icons-material/Add';
import { Box, IconButton, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { closeModal } from '@redux/slices/modal/modalSlice';
import {
  useAddSkillsToMasteryMutation,
  useCreateNewSpecializationMutation,
  useGetSpecializationByUserIdQuery,
  useLazyGetMasteriesBySpecializationIdQuery,
  useSetNewMainMasteryBySpecIdAndMasteryIdMutation,
} from '@redux/api/slices/specialization/specializationApiSlice';
import { useGetSpecializationListQuery } from '@redux/api/slices/specializationList/specializationListApiSlice';
import useMergeState from '../../../../utils/hooks/useMergeState';
import { SpecializationModalSchema } from '../../../../utils/validationSchemas/index';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { AdvancedFormSelector, FormSelect } from '../../../FormsComponents/Inputs';
import FormInput from '../../../FormsComponents/Inputs/FormInput';
import { ErrorComponent } from '../../../UI/Exceptions';
import Responsibility from '../../../UI/Responsibility';
import { modalNames } from '../../../../utils/constants/modalNames.js';
import { styles } from './SpecializationModal.styles';

const SpecializationModal = () => {
  const [state, setState] = useMergeState({
    skills: [],
    specializationNameError: '',
  });
  const { skills, specializationNameError } = state;
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const { data: mySpecialization } = useGetSpecializationByUserIdQuery(userId, { skip: !userId });
  const [
    createNewSpecialization,
    { isError: isErrorCreateNewSpecialization, isLoading: isLoadingCreateNewSpecialization },
  ] = useCreateNewSpecializationMutation();
  const [triggerRequest, { isError: isErrorGetMasteries, isFetching: isLoadingGetMasteries }] =
    useLazyGetMasteriesBySpecializationIdQuery();
  const [setNewMainMasteryBySpecIdAndMasteryId, { isError: isErrorSetNewMastery, isLoading: isLoadingSetNewMastery }] =
    useSetNewMainMasteryBySpecIdAndMasteryIdMutation();
  const [addSkills, { isError: isErrorAddSkill, isLoading: isLoadingAddSkill }] = useAddSkillsToMasteryMutation();
  const {
    data,
    isError: isErrorGetSpecialization,
    isLoading: isLoadingGetSpecialization,
  } = useGetSpecializationListQuery('specialization-names.json');

  const isLoading =
    isLoadingCreateNewSpecialization ||
    isLoadingGetMasteries ||
    isLoadingSetNewMastery ||
    isLoadingAddSkill ||
    isLoadingGetSpecialization;
  const isError =
    isErrorCreateNewSpecialization ||
    isErrorGetMasteries ||
    isErrorSetNewMastery ||
    isErrorAddSkill ||
    isErrorGetSpecialization;
  const specializations = useMemo(() => data?.toSorted((a, b) => a.localeCompare(b)), [data]);
  // const handleClose = () => dispatch(closeModal({ modalType: modalNames.specializationModal }));
  const handleClose = () => closeModal({ modalType: modalNames.specializationEditModal });

  const handleChangeMastery = (e) => {
    const value = e.target.value;
    formik.setFieldValue('mastery', value);
  };
  const handleChangeSpecialization = (value) => {
    const isSpecialization = mySpecialization.some((spec) => spec.name === value);

    if (isSpecialization) {
      formik.setFieldValue('name', value);
      setState({ specializationNameError: 'specialization.modal.specialization.errorDuplicate' });
      return;
    }

    setState({ specializationNameError: '' });
    formik.setFieldValue('name', value);
  };

  const onSubmit = async (values, { resetForm }) => {
    try {
      const data = await createNewSpecialization({
        userId,
        name: values.name,
        mainMasteryName: values.mastery,
        main: false,
      }).unwrap();
      const masteries = await triggerRequest(data.id);
      const resp = masteries.data.find((item) => item.level.toLowerCase() === values.mastery.toLowerCase());
      await setNewMainMasteryBySpecIdAndMasteryId({
        masteryId: resp.id,
        specId: data.id,
      }).unwrap();
      await addSkills({ id: resp.id, skills });
      enqueueSnackbar(t('modalNotifyText.specialization.create.success', { values: values.name }), {
        variant: 'success',
      });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('modalNotifyText.specialization.create.error'), { variant: 'error' });
    } finally {
      resetForm();
      handleClose();
    }
  };

  const initialValues = {
    name: '',
    mastery: '',
    skills: '',
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { ...initialValues },
    validationSchema: SpecializationModalSchema,
    onSubmit,
  });

  const createSkills = (newSkill) => {
    if (newSkill.length === 0 || newSkill.length > 50) return;
    const isSkill = skills.some((skill) => skill.name === newSkill);

    if (isSkill) {
      formik.setFieldTouched('skills', true, false);
      formik.setErrors({ skills: 'specialization.modal.skills.errorDuplicate' });
      return;
    }

    setState({ skills: [...skills, { name: newSkill, type: 'HARD_SKILL' }] });
    formik.setFieldValue('skills', '');
  };

  const deleteSkillsHandler = (skillToDelete) => {
    setState({ skills: skills.filter((item) => item.name !== skillToDelete) });
  };

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <>
      <Typography sx={styles.title} variant='subtitle1'>
        {t('specialization.modal.specialization.modal_title')}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={styles.wrapper}>
          <Box sx={styles.input100}>
            <AdvancedFormSelector
              countries={specializations}
              error={formik.touched.name && (Boolean(formik.errors.name) || Boolean(specializationNameError))}
              handleBlur={formik.handleBlur}
              handleChange={handleChangeSpecialization}
              helperText={formik.touched.name && (formik.errors.name || specializationNameError)}
              label={t('specialization.modal.specialization.name')}
              name='name'
              value={formik.values.name || ''} // Warning from MUI: 'value is null'
              variant='outlined'
            />
          </Box>
          <Box sx={styles.mastery_input}>
            <FormSelect
              countries={['Junior', 'Middle', 'Senior']}
              error={formik.touched.mastery && Boolean(formik.errors.mastery)}
              handleBlur={formik.handleBlur}
              handleChange={handleChangeMastery}
              helperDescription={t('specialization.modal.specialization.mastery_helper_text')}
              helperText={formik.touched.mastery && formik.errors.mastery}
              id='mastery'
              label={t('specialization.modal.specialization.mastery')}
              name='mastery'
              value={formik.values.mastery || ''} // Warning from MUI: 'value is null'
              variant='outlined'
            />
          </Box>
          <>
            <Box sx={styles.input100}>
              <FormInput
                error={formik.touched.skills && Boolean(formik.errors.skills)}
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                helperText={formik.touched.skills && formik.errors.skills}
                label='specialization.modal.skills.title'
                name='skills'
                placeholder='specialization.modal.skills.placeholder'
                value={formik.values.skills}
              />
              <IconButton
                disabled={formik.touched.skills && Boolean(formik.errors.skills)}
                sx={styles.iconBtn}
                onClick={() => createSkills(formik.values.skills)}
              >
                <AddIcon />
              </IconButton>
            </Box>
            <Box sx={styles.skills}>
              {skills.map(({ name }, index) => (
                <Responsibility
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  tobeDeleted
                  responsibility={name}
                  responsibilityDeleteHandler={deleteSkillsHandler}
                />
              ))}
            </Box>
          </>
          <ButtonDef
            disabled={formik.isSubmitting || !formik.isValid || !formik.dirty || Boolean(specializationNameError)}
            label={t('profile.modal.btn')}
            loading={isLoading}
            sx={styles.specializationBtn}
            type='submit'
            variant='contained'
          />
        </Box>
      </form>
    </>
  );
};

export default SpecializationModal;
