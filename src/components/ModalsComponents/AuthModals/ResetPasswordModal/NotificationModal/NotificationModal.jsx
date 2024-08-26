import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Typography, Box } from '@mui/material';
import ModalLayout from '../../../../layouts/ModalLayout';
import { ButtonDef } from '../../../Buttons';
import { closeModal, openModal } from '../../../../redux/modal/modalSlice';
import styles from './NotificationModal.styles';

const NotificationModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const openNotification = useSelector((state) => state.modal.openNotification);

  const handleClose = () => dispatch(closeModal({ modalName: 'openNotification' }));

  const handleEnter = () => {
    dispatch(closeModal({ modalName: 'openNotification' }));
    dispatch(openModal({ modalName: 'openResetPassword' }));
  };

  return (
    <ModalLayout open={openNotification} setOpen={handleClose}>
      <Typography variant='subtitle3' sx={styles.title}>
        {t('modal.notificationModal.title')}
      </Typography>
      <Typography variant='subtitle3' sx={styles.message}>
        {t('modal.notificationModal.message')}
      </Typography>
      <Box sx={styles.wrapperBtn}>
        <ButtonDef
          variant='contained'
          type='button'
          handlerClick={handleEnter}
          label='modal.notificationModal.btn_enter'
        />
      </Box>
    </ModalLayout>
  );
};

export default NotificationModal;