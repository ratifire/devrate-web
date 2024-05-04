import React from 'react';
import { Grid } from '@mui/material';
import AchievementItem from './AchievementItem/AchievementItem';
import styles from './Achievment.styles';

const Achievment = () => {
  return (
    <Grid container spacing={3} sx={styles.achievementListContainer}>
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
export default Achievment;
