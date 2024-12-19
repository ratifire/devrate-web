import { Box, IconButton, Modal, Zoom } from '@mui/material';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import { styles } from './ModalLayoutProfile.styles';

const ModalLayoutProfile = ({ open, setOpen, children }) => {
  return (
    <Modal
      closeAfterTransition
      aria-describedby='transition-modal-description'
      aria-labelledby='transition-modal-title'
      open={open}
      sx={styles.modal}
      onClose={setOpen}
    >
      <Zoom in={open}>
        <Box sx={styles.wrapper}>
          <IconButton aria-label='Close modal' sx={styles.btnIcon} type='button' onClick={setOpen}>
            <CloseIcon />
          </IconButton>
          {children}
        </Box>
      </Zoom>
    </Modal>
  );
};

ModalLayoutProfile.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalLayoutProfile;
