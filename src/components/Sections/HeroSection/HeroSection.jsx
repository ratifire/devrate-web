import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styles } from './HeroSection.styles';
import { useTranslation } from 'react-i18next';
import { ButtonDef } from '../../Buttons';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/auth/modalSlice';

const HeroSection = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(openModal({ modalName: 'openRegistration' }));

  return (
    <Container maxWidth='xl' sx={styles.container}>
      <Box sx={styles.contentWrapper}>
        <Typography sx={styles.title}>{t('home.hero.title')}</Typography>
        <Typography sx={styles.text}>{t('home.hero.text')}</Typography>
        <Box sx={styles.button}>
          <ButtonDef variant='contained' handlerClick={handleOpen} type='button' label={t('home.hero.button_text')} />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
