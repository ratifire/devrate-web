import { Box, IconButton, Modal, Zoom } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router';
import { closeModal } from '../../redux/modal/modalSlice.js';
import { styles } from './ModalLayout.styles.js';
import ModalContainer from './ModalContainer.jsx';

const ModalComponent = () => {
  const { modalType, isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [, setSearchParams] = useSearchParams();

  const handleClose = () => {
    dispatch(closeModal());
    setSearchParams('');
  };

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
        <Box sx={styles.wrapper}>
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
