import { Box, IconButton, Modal, Zoom } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { modalNames } from '@utils/constants/modalNames';
import { useModalController } from '@utils/hooks/useModalController';
import { styles } from './ModalLayout.styles';
import ModalContainer from './ModalContainer';

const smallScreenModals = [
  modalNames.confirmDeleteSpecialization,
  modalNames.confirmDeleteInterview,
  modalNames.videoModal,
];

const ModalComponent = () => {
  const { modalType, isOpen } = useSelector((state) => state.modal);
  const { closeModal } = useModalController();
  const isVideoModal = modalType === modalNames.videoModal;

  const handleClose = () => closeModal(modalType);

  const isSmallScreenModal = smallScreenModals.includes(modalType);

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
        <Box style={isSmallScreenModal && styles.confirmDeleteModalWrapper} sx={styles.wrapper}>
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
