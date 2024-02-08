import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const styles = {
  container: () => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingY: 230,
    paddingX: 204,
  }),
  title: (theme) => ({
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 60,
    fontWeight: 700,
    rowHeight: 80,
    background: theme.typography.title.background,
    backgroundClip: 'text',
    color: 'transparent',
    '&-webkit-background-clip': 'text',
    '&-webkit-text-fill-color': 'linear-gradient(90deg, #7562e4 0%, #fb93a6 100%)',
  }),
  text: (theme) => ({
    marginBottom: 60,
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 22,
    rowHeight: '150%',
    color: theme.palette.text.secondary,
  }),
  button: (theme) => ({
    paddingX: 32,
    paddingY: 16,
    fontsize: 16,
    fontWeight: 500,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
};
export const HomeSection = () => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>Мультифункціональна платформа від айтішників для айтішників</Typography>
      <Typography sx={styles.text}>Інтервю. Рейтинги. Резюме</Typography>
      <Button sx={styles.button}>Попередній перегляд</Button>
    </Box>
  );
};
