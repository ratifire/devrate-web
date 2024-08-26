import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styles } from './HeroSection.styles';
import { useTranslation } from 'react-i18next';
import { ButtonDef } from '../../FormsComponents/Buttons';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/modal/modalSlice';

const HeroSection = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(openModal({ modalName: 'openRegistration' }));

  return (
    <Container maxWidth='xl' sx={styles.container}>
      <Box sx={styles.contentWrapper}>
        <Typography sx={styles.title}>{t('home.hero.title')}</Typography>
        <Typography variant='h5' sx={styles.text}>
          {t('home.hero.text')}
        </Typography>
        <Box sx={{ width: '170px' }}>
          <ButtonDef
            variant='contained'
            color='secondary'
            handlerClick={handleOpen}
            type='button'
            label={t('home.hero.button_text')}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
