import { Box, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { selectModalData } from '@redux/slices/modal/modalSlice';
import {
  useGetSpecializationByUserIdQuery,
  useLazyGetMasteriesBySpecializationIdQuery,
  useSetNewMainMasteryBySpecIdAndMasteryIdMutation,
  useUpdateSpecializationByIdMutation,
} from '@redux/api/slices/specialization/specializationApiSlice';
import { useGetSpecializationListQuery } from '@redux/api/slices/specializationList/specializationListApiSlice';
import { setActiveSpecialization } from '@redux/slices/specialization/specializationSlice';
import useMergeState from '@utils/hooks/useMergeState';
import { SpecializationModalSchema } from '@utils/validationSchemas/index';
import { modalNames } from '@utils/constants/modalNames.js';
import { useModalController } from '@utils/hooks/useModalController.js';
import { useGetMastery } from '@utils/hooks/specialization/index.js';
import { useGetInterviewRequestByMasteryIdQuery } from '@redux/api/slices/interviewRequestApiSlice.js';
import { ErrorComponent } from '@components/UI/Exceptions';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { AdvancedFormSelector, FormSelect } from '../../../FormsComponents/Inputs';
import { styles } from './SpecializationModal.styles';

const SpecializationEditModal = () => {
  const [state, setState] = useMergeState({ specializationNameError: '' });
  const [isInterviewList, setIsInterviewList] = useState(false);
  const { specializationNameError } = state;
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const { masteryId } = useGetMastery();
  const { data: mySpecialization } = useGetSpecializationByUserIdQuery(userId, { skip: !userId });
  const [updateSpecializationById, { isError: isErrorUpdateSpecialization, isLoading: isLoadingUpdateSpecialization }] =
    useUpdateSpecializationByIdMutation();
  const [triggerRequest, { isError: isErrorGetMasteries, isFetching: isLoadingGetMasteries }] =
    useLazyGetMasteriesBySpecializationIdQuery();
  const [setNewMainMasteryBySpecIdAndMasteryId, { isError: isErrorSetNewMastery, isLoading: isLoadingSetNewMastery }] =
    useSetNewMainMasteryBySpecIdAndMasteryIdMutation();
  const {
    data,
    isError: isErrorGetSpecialization,
    isLoading: isLoadingGetSpecialization,
  } = useGetSpecializationListQuery('specialization-names.json');

  const { data: interviewList } = useGetInterviewRequestByMasteryIdQuery(
    {
      masteryId,
    },
    { skip: !masteryId }
  );

  const isLoading =
    isLoadingUpdateSpecialization || isLoadingGetMasteries || isLoadingSetNewMastery || isLoadingGetSpecialization;
  const isError =
    isErrorUpdateSpecialization || isErrorGetMasteries || isErrorSetNewMastery || isErrorGetSpecialization;
  const specializations = useMemo(() => data?.toSorted((a, b) => a.localeCompare(b)), [data]);
  const { activeSpecialization } = useSelector((state) => state.specialization);
  const { closeModal } = useModalController();

  const handleClose = () => closeModal({ modalType: modalNames.specializationEditModal });

  const modalData = useSelector(selectModalData);

  const handleChangeMastery = (e) => {
    const value = e.target.value;
    const mainMastery = modalData.mastery;
    formik.setFieldValue('mastery', value);
    if (interviewList.length > 0) {
      setIsInterviewList(true);
    }

    if (mainMastery === value) {
      setIsInterviewList(false);
    }
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

  const updateSpecialization = async ({ id, name }) => {
    try {
      await updateSpecializationById({ id, name }).unwrap();
      dispatch(setActiveSpecialization({ ...activeSpecialization, id, name }));
      enqueueSnackbar(t('modalNotifyText.specialization.edit.success', { name }), {
        variant: 'success',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
      });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('modalNotifyText.specialization.edit.error'), { variant: 'error' });
    }
  };

  const onSubmit = async (values, { resetForm }) => {
    try {
      if (modalData) {
        let shouldUpdateSpecialization = false;
        let shouldUpdateMastery = false;

        if (values.name !== activeSpecialization.name) {
          shouldUpdateSpecialization = true;
        }

        if (values.mastery !== activeSpecialization.mastery) {
          shouldUpdateMastery = true;
        }

        if (shouldUpdateSpecialization) {
          await updateSpecialization({ id: activeSpecialization.id, name: values.name });
        }

        if (shouldUpdateMastery) {
          const masteries = await triggerRequest(activeSpecialization.id);
          const resp = masteries.data.find((item) => item.level.toLowerCase() === values.mastery.toLowerCase());
          await setNewMainMasteryBySpecIdAndMasteryId({
            masteryId: resp.id,
            specId: activeSpecialization.id,
          }).unwrap();
          dispatch(setActiveSpecialization({ ...activeSpecialization, mastery: values.mastery }));
        }
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('modalNotifyText.specialization.create.error'), { variant: 'error' });
    } finally {
      resetForm();
      handleClose();
    }
  };

  const initialValues = {
    name: modalData ? modalData?.name : '',
    mastery: modalData ? modalData?.mastery : '',
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { ...initialValues },
    validationSchema: SpecializationModalSchema,
    onSubmit,
  });

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
              error={(formik.touched.mastery && Boolean(formik.errors.mastery)) || isInterviewList}
              handleBlur={formik.handleBlur}
              handleChange={handleChangeMastery}
              helperDescription={t('specialization.modal.specialization.mastery_helper_text')}
              helperText={
                (formik.touched.mastery && formik.errors.mastery) ||
                (isInterviewList && t('specialization.modal.specializationEdit.error_message'))
              }
              id='mastery'
              label={t('specialization.modal.specialization.mastery')}
              name='mastery'
              value={formik.values.mastery || ''} // Warning from MUI: 'value is null'
              variant='outlined'
            />
          </Box>
          <ButtonDef
            disabled={
              formik.isSubmitting ||
              !formik.isValid ||
              !formik.dirty ||
              Boolean(specializationNameError) ||
              isInterviewList
            }
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

export default SpecializationEditModal;
