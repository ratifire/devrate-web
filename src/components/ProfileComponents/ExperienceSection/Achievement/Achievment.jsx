/* eslint-disable */

import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import AchievementModal from '../../../../components/ProfileModals/AchievementModal/AchievementModal';
import { selectCurrentUser } from '../../../../redux/auth/authSlice';
import { useFetchAchievementsQuery } from '../../../../redux/services/achievementsApiSlice';
import AchievementItem from './AchievementItem/AchievementItem';
import styles from './Achievment.styles';

const Achievement = () => {
  const {
    data: { id: userId },
  } = useSelector(selectCurrentUser);

  const {
    data: achievementsData,
    error,
    isLoading,
  } = useFetchAchievementsQuery(userId, {
    skip: !userId,
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
    <>
      <Grid container spacing={3} sx={styles.achievementListContainer}>
        {achievementsData?.map((achievement) => (
          <Grid item key={achievement.id} xs={6}>
            <AchievementItem achievement={achievement} />
          </Grid>
        ))}
      </Grid>
      <AchievementModal userId={userId} />
    </>
  );
};

export default Achievement;
