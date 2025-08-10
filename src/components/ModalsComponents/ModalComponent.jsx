import { Box, IconButton, Modal, Zoom } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { modalNames } from '@utils/constants/modalNames.js';
import { useModalController } from '@utils/hooks/useModalController.js';
import { styles } from './ModalLayout.styles.js';
import ModalContainer from './ModalContainer.jsx';

const ModalComponent = () => {
  const { modalType, isOpen } = useSelector((state) => state.modal);
  const { closeModal } = useModalController();

  const handleClose = () => closeModal(modalType);
  const modalSmallStyle = styles[modalNames[modalType]] || {};

  return (
    <Modal
      closeAfterTransition
      aria-describedby='transition-modal-description'
      aria-labelledby='transition-modal-title'
      open={isOpen}
      sx={styles.modal}
      onClose={handleClose}
    >
      <Zoom in={isOpen}>
        <Box style={modalSmallStyle} sx={styles.wrapper}>
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
