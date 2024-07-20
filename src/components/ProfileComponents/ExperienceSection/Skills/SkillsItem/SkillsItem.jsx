import React from 'react';
import { Box, Typography } from '@mui/material';
import { styles } from './SkillsItem.styles';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const SkillsItem = () => {
  const value = 0;
  const iconArrow = value > 5 ? <ArrowUpwardIcon sx={styles.arrowUpIcon} /> : <ArrowDownwardIcon sx={styles.arrowDownIcon} />;

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.icon}>
        {iconArrow}
      </Box>
      <Typography variant='body1' sx={styles.text}>
        Laravel
      </Typography>
      <Typography variant='h6' sx={styles.grade}>
        5
      </Typography>
    </Box>
  )
}
export default SkillsItem;