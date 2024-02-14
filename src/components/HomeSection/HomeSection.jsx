import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styles } from './HomeSection.styles';
import { useTranslation } from 'react-i18next';

export const HomeSection = () => {
  const { t } = useTranslation();

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>{t('hero.heroTitle')}</Typography>
      <Typography sx={styles.text}>{t('hero.heroText')}</Typography>
      <Button sx={styles.button}>{t('hero.heroButtonText')}</Button>
    </Box>
  );
};
