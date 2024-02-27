import React from 'react';
import {Box, Modal, Slide} from '@mui/material';
import {ReactComponent as Logo} from '../../assets/icons/logo.svg';
import {styles} from './ModalLayout.styles';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
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
      <Slide direction='left' in={open}>
        <Box sx={styles.modalContainer}>
          <Box sx={styles.iconContainer}>
            <Logo
              style={{
                width: 147,
                height: 18,
              }}
            />
          </Box>
          {children}
        </Box>
      </Slide>
    </Modal>
  );
};

ModalLayout.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalLayout;
