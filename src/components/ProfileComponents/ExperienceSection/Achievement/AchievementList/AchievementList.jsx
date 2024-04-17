import React from 'react';
import AchievementItem from '../AchievementItem/AchievementItem';
import { Grid } from '@mui/material';
import styles from './AchivementList.styles';

const AchievementList = () => {
  return (
    <Grid container spacing={16} sx={styles.achievementListContainer}>
      {[1, 2, 3].map((el, index) => {
        return (
          <Grid item key={index} xs={6}>
            <AchievementItem key={index} />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default AchievementList;
