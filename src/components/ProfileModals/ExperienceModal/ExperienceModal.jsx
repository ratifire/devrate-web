import React from 'react';
import ModalLayoutProfile from '../../../layouts/ModalLayoutProfile';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice';
import { Box, Typography } from '@mui/material';
import { styles } from './ExperienceModal.styles';
import { useTranslation } from 'react-i18next';
import FormInput from '../../Inputs/FormInput';

const ExperienceModal = () => {
  const dispatch = useDispatch();
  const openExperience = useSelector((state) => state.modal.openExperience);
  const handleClose = () => dispatch(closeModal({ modalName: 'openExperience' }));
  const { t } = useTranslation();
  return (
    <ModalLayoutProfile setOpen={handleClose} open={openExperience}>
      <Typography variant='subtitle1' sx={styles.title}>
        {t('profile.modal.userInfo.titleExperience')}
      </Typography>

      <Box sx={styles.wrapper}>
        <FormInput name='Посада' label='Посада'/>
      </Box>
    </ModalLayoutProfile>
  );
};

export default ExperienceModal;
