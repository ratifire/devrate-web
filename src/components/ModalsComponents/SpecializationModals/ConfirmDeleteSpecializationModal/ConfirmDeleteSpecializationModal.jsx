import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { enqueueSnackbar } from 'notistack';
import {
  useDeleteSpecializationByIdMutation,
  useGetSpecializationByUserIdQuery,
} from '@redux/api/slices/specialization/specializationApiSlice';
import { selectModalData } from '@redux/slices/modal/modalSlice';
import { setActiveSpecialization, setMainSpecializations } from '@redux/slices/specialization/specializationSlice';
import { useModalController } from '@utils/hooks/useModalController.js';
import { modalNames } from '@utils/constants/modalNames.js';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { CategoriesSkeleton } from '../../../UI/Skeleton';
import { ErrorComponent } from '../../../UI/Exceptions';
import { styles } from './ConfirmDeleteSpecializationModal.styles';

const ConfirmDeleteSpecializationModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { activeSpecialization, mainSpecialization } = useSelector((state) => state.specialization);
  const { id } = useSelector((state) => state.auth.user.data);
  const { closeModal } = useModalController();
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
      if (err.status === 400 || err.status === 404) {
        enqueueSnackbar(t('specialization.errorDeleteSpec'), { variant: 'error' });
      } else if (err.status === 409) {
        enqueueSnackbar(t('specialization.conflictDeleteSpec'), { variant: 'error' });
      }
    } finally {
      closeModal(modalNames.confirmDeleteSpecialization);
    }
  };
  const handleCancelDeletion = () => closeModal(modalNames.confirmDeleteSpecialization);

  return (
    <>
      <Typography sx={styles.title} variant='h6'>
        {t('specialization.modal.confirmSpecializationDelete.title')}
      </Typography>
      <Typography sx={styles.text} variant='caption2'>
        {t('specialization.modal.confirmSpecializationDelete.text1')} {modalData?.specialization}?{' '}
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
