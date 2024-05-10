import React from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice';
import { Box, Typography } from '@mui/material';
import { styles } from './ModalUserInfo.styles';
import { useTranslation } from 'react-i18next';

const ModalUserInfo = () => {
  const dispatch = useDispatch();
  const openUserInfo = useSelector((state) => state.modal.openUserInfo);
  const handleClose = () => dispatch(closeModal({ modalName: 'openUserInfo' }));
  const { t } = useTranslation();
  return (
    <ModalLayoutProfile setOpen={handleClose} open={openUserInfo}>
      <Typography variant='subtitle1' sx={styles.title}>
        {t('profile.modal.userInfo.titlePersonal')}
      </Typography>

      <Box sx={styles.wrapper}>ййййййй</Box>
    </ModalLayoutProfile>
  );
};

export default ModalUserInfo;
