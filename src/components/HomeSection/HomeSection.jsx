import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styles } from './HomeSection.styles';

export const HomeSection = () => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>Мультифункціональна платформа від айтішників для айтішників</Typography>
      <Typography sx={styles.text}>Інтервю. Рейтинги. Резюме</Typography>
      <Button sx={styles.button}>Попередній перегляд</Button>
    </Box>
  );
};
