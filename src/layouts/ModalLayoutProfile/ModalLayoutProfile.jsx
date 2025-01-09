import { useEffect } from 'react';
import { Box, IconButton, Modal, Zoom } from '@mui/material';
import PropTypes from 'prop-types';
import CloseIcon from '@mui/icons-material/Close';
import { useSearchParams } from 'react-router';
import { useSelector } from 'react-redux';
import { styles } from './ModalLayoutProfile.styles';

const ModalLayoutProfile = ({ open, setOpen, children }) => {
  const modalData = useSelector((state) => state.modal);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams.toString());
    const modalName = Object.entries(modalData).find((item) => item[1])?.[0];
    const addQuery = () => {
      if (open) {
        newParams.set('modal', modalName);
        setSearchParams(newParams);
      } else {
        newParams.delete('modal');
        setSearchParams(newParams);
      }
    };
    if (modalName) {
      addQuery();
    }
  }, [open]);

  const handleClose = (...args) => {
    searchParams.delete('modal');
    setSearchParams(searchParams);
    setOpen(...args);
  };

  return (
    <Modal
      closeAfterTransition
      aria-describedby='transition-modal-description'
      aria-labelledby='transition-modal-title'
      open={open}
      sx={styles.modal}
      onClose={handleClose}
    >
      <Zoom in={open}>
        <Box sx={styles.wrapper}>
          <IconButton aria-label='Close modal' sx={styles.btnIcon} type='button' onClick={handleClose}>
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
