import React from 'react';
import { Grid, Typography } from '@mui/material';
import AchievementItem from './AchievementItem/AchievementItem';
import styles from './Achievment.styles';
import { useFetchAchievementsQuery } from '../../../../redux/services/achievementsApiSlice';

const Achievement = () => {
  const persistedAuth = localStorage.getItem('persist:auth');
  const user = persistedAuth ? JSON.parse(persistedAuth).user : null;
  const userId = user ? JSON.parse(user).data.id : null;

  console.log('User ID:', userId);

  const { data: achievements, error, isLoading } = useFetchAchievementsQuery(userId, {
    skip: !userId, // Skip the query if userId is not available
  });

  if (!userId) {
    return <Typography>Error: User not authenticated</Typography>;
  }

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error: {error.message}</Typography>;
  }

  return (
    <Grid container spacing={3} sx={styles.achievementListContainer}>
      {achievements?.map((achievement) => (
        <Grid item key={achievement.id} xs={6}>
          <AchievementItem achievement={achievement} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Achievement;
