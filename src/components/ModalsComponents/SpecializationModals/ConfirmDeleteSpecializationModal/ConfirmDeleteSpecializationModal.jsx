import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { enqueueSnackbar } from 'notistack';
import {
  useDeleteSpecializationByIdMutation,
  useGetSpecializationByUserIdQuery,
} from '@redux/api/slices/specialization/specializationApiSlice';
import { closeModal, selectModalData } from '@redux/slices/modal/modalSlice';
import { setActiveSpecialization, setMainSpecializations } from '@redux/slices/specialization/specializationSlice.js';
import { ButtonDef } from '@components/FormsComponents/Buttons';
import { CategoriesSkeleton } from '@components/UI/Skeleton';
import { ErrorComponent } from '@components/UI/Exceptions';
import { styles } from './ConfirmDeleteSpecializationModal.styles';

const ConfirmDeleteSpecializationModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { activeSpecialization, mainSpecialization } = useSelector((state) => state.specialization);
  const { id } = useSelector((state) => state.auth.user.data);
  const {
    data: specializations,
    isFetching: isFetchingGetSpecialization,
    isError: isErrorGetSpecialization,
  } = useGetSpecializationByUserIdQuery(id, { skip: !id });
  const [deleteSpecialization, { isLoading: isLoadingDeleteSpecialization, isErrorDeleteSpecialization }] =
    useDeleteSpecializationByIdMutation();
  const modalData = useSelector(selectModalData);

  if (isFetchingGetSpecialization || isLoadingDeleteSpecialization) {
    return <CategoriesSkeleton />;
  }
  if (isErrorGetSpecialization || isErrorDeleteSpecialization) {
    return <ErrorComponent />;
  }

  const handleSpecializationUpdate = (id) => {
    const findMainSpecialization = specializations.find((spec) => spec.main);

    dispatch(setActiveSpecialization(null));

    if (findMainSpecialization?.id === id) {
      dispatch(setMainSpecializations(null));
    } else {
      dispatch(setActiveSpecialization(mainSpecialization));
    }
  };

  const handlerDeleteSpecialization = async (id) => {
    try {
      await deleteSpecialization(id).unwrap();
      enqueueSnackbar(t('modalNotifyText.specialization.delete.success', { name: activeSpecialization.name }), {
        variant: 'success',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
      });

      handleSpecializationUpdate(id);
    } catch (err) {
      if (err.status === 409) {
        enqueueSnackbar(t('specialization.errorDeleteSpec'), { variant: 'error' });
      }
    } finally {
      dispatch(closeModal());
    }
  };
  const handleCancelDeletion = () => dispatch(closeModal());

  return (
    <>
      <Typography sx={styles.title} variant='h6'>
        {t('specialization.modal.confirmSpecializationDelete.title')}
      </Typography>
      <Typography sx={styles.text} variant='caption2'>
        {t('specialization.modal.confirmSpecializationDelete.text1')} {modalData.specialization}?{' '}
        {t('specialization.modal.confirmSpecializationDelete.text2')}
      </Typography>
      <Box sx={styles.buttonWrapper}>
        <ButtonDef
          label={t('specialization.modal.confirmSpecializationDelete.refuseBtnText')}
          sx={styles.refuseBtn}
          type='button'
          variant='text'
          onClick={handleCancelDeletion}
        />
        <ButtonDef
          label={t('specialization.modal.confirmSpecializationDelete.confirmBtnText')}
          sx={styles.confirmBtn}
          type='button'
          variant='contained'
          onClick={() => handlerDeleteSpecialization(modalData.id)}
        />
      </Box>
    </>
  );
};

export default ConfirmDeleteSpecializationModal;
