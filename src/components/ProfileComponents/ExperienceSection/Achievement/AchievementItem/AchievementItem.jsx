import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { ReactComponent as Star } from '../../../../../assets/icons/star.svg';
import styles from './AchievementItem.styles.js';
import DownloadIcon from '@mui/icons-material/Download';

const AchievementItem = () => {
  const text =
    'Сертифікація визнає особу як експерта у галузі мережевих технологій. Підтверджує знання та навички у розгортанні, управлінні та усуненні неполадок у мережевих середовищах.';
  return (
    <Box sx={styles.achievementItemContainer}>
      <Box sx={styles.itemHeaderContainer}>
        <Box sx={styles.logoTitleContainer}>
          <Star width={46} height={38} />
          <Box sx={styles.achievementTitleYearContainer}>
            <Typography sx={styles.achievementTitle}>Сертифікація CISCO</Typography>
            <Typography sx={styles.achiementYear}>(2020)</Typography>
          </Box>
        </Box>
        <IconButton sx={{ color: '#B78AF7' }}>
          <DownloadIcon />
        </IconButton>
      </Box>
      <Typography sx={styles.achievementItemText}>{text}</Typography>
    </Box>
  );
};
export default AchievementItem;