import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { closeConfirmDeleteModal, closeModal } from '../../../../redux/modal/modalSlice';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import ModalLayoutConfirmDelete from '../../../../layouts/ModalLayoutConfirmDelete/index.js';
import { styles } from './ConfirmDeleteSpecializationModal.styles.js';

const ConfirmDeleteSpecializationModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openConfirmDeleteSpecialization = useSelector((state) => state.modal.openConfirmDeleteSpecialization);
  const { modalData } = useSelector((state) => state.modal);
  const handleConfirmDeletion = () => {
    dispatch(
      closeConfirmDeleteModal({
        modalName: 'openConfirmDeleteSpecialization',
        data: { shouldDelete: true, id: modalData.id },
      })
    );
  };
  const handleCancelDeletion = () =>
    dispatch(
      closeModal({
        modalName: 'openConfirmDeleteSpecialization',
      })
    );

  return (
    <ModalLayoutConfirmDelete open={openConfirmDeleteSpecialization} setOpen={handleCancelDeletion}>
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
          onClick={handleConfirmDeletion}
        />
      </Box>
    </ModalLayoutConfirmDelete>
  );
};

export default ConfirmDeleteSpecializationModal;
