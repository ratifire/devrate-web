import { Box, IconButton, Modal, Zoom } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { modalNames } from '@utils/constants/modalNames.js';
import { useModalController } from '@utils/hooks/useModalController.js';
import { styles } from './ModalLayout.styles.js';
import ModalContainer from './ModalContainer.jsx';

const disableBackdropEscModals = [modalNames.videoModal];

const ModalComponent = () => {
  const { modalType, isOpen } = useSelector((state) => state.modal);
  const { closeModal } = useModalController();

  const handleClose = () => closeModal(modalType);

  const isConfirmDeleteModal = modalType === modalNames.confirmDeleteSpecialization;

  const isVideoModal = disableBackdropEscModals.includes(modalType);

  const handleIsBlockCloseModal = (event, reason) => {
    if (isVideoModal && (reason === 'backdropClick' || reason === 'escapeKeyDown')) return;
    handleClose();
  };

  return (
    <Modal
      closeAfterTransition
      aria-describedby='transition-modal-description'
      aria-labelledby='transition-modal-title'
      disableEscapeKeyDown={isVideoModal}
      open={isOpen}
      sx={styles.modal}
      onClose={handleIsBlockCloseModal}
    >
      <Zoom in={isOpen}>
        <Box style={isConfirmDeleteModal && styles.confirmDeleteModalWrapper} sx={styles.wrapper}>
          <IconButton aria-label='Close modal' sx={styles.btnIcon} type='button' onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <ModalContainer modalType={modalType} />
        </Box>
      </Zoom>
    </Modal>
  );
};

export default ModalComponent;
