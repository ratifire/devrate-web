import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { styles } from './HeroSection.styles';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth='xl' sx={styles.container}>
      <Box sx={styles.contentWrapper}>
        <Typography sx={styles.title}>{t('hero.title')}</Typography>
        <Typography sx={styles.text}>{t('hero.text')}</Typography>
        <Button sx={styles.button}>{t('general.registration')}</Button>
      </Box>
    </Container>
  );
};

export default HeroSection;
