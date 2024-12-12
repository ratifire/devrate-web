import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { ButtonDef } from '../../../FormsComponents/Buttons';
import { openModal } from '../../../../redux/modal/modalSlice';
import { styles } from './HeroSection.styles';

const HeroSection = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleOpen = () => dispatch(openModal({ modalName: 'openRegistration' }));

  return (
    <Container maxWidth='xl' sx={styles.container}>
      <Box sx={styles.contentWrapper}>
        <Typography sx={styles.title}>{t('home.hero.title')}</Typography>
        <Typography sx={styles.text} variant='h5'>
          {t('home.hero.text')}
        </Typography>
        <Box sx={{ width: '170px' }}>
          <ButtonDef
            color='secondary'
            label={t('home.hero.button_text')}
            type='button'
            variant='contained'
            onClick={handleOpen}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
