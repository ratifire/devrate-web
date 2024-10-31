import React from 'react';
import { Box, Modal, Zoom } from '@mui/material';
import { styles } from './ModalLayout.styles';
import PropTypes from 'prop-types';

export const ModalLayout = ({ open, setOpen, children }) => {
  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={open}
      onClose={setOpen}
      closeAfterTransition
      sx={styles.modal}
    >
      <Zoom in={open}>
        <Box sx={styles.modalContainer}>{children}</Box>
      </Zoom>
    </Modal>
  );
};

ModalLayout.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalLayout;
