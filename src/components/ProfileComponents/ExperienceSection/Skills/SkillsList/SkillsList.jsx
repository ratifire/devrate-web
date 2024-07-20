import React from 'react';
import { styles } from './SkillsList.styles';
import { Box, Typography } from '@mui/material';
import SkillsItem from '../SkillsItem';



const SkillsList = () => {
  return (
    <Box sx={styles.wrapper}>
      <Typography variant='h6' sx={styles.title}>Frontend Developer</Typography>
      <Typography variant='subtitle2' sx={styles.text}>Level Junior</Typography>
      <Box sx={styles.list}>
        <SkillsItem />
      </Box>
    </Box>
  );
};

export default SkillsList;