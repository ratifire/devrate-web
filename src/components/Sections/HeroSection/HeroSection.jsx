import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styles } from './HeroSection.styles';
import { useTranslation } from 'react-i18next';
import { ButtonDef } from '../../Buttons';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth='xl' sx={styles.container}>
      <Box sx={styles.contentWrapper}>
        <Typography sx={styles.title}>{t('home.hero.title')}</Typography>
        <Typography sx={styles.text}>{t('home.hero.text')}</Typography>
        <Box sx={styles.button}>
          <ButtonDef variant='contained' type='button' label={t('home.hero.button_text')} />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
