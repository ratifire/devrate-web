import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import AchievementItem from './AchievementItem/AchievementItem';
import styles from './Achievment.styles';
import { useFetchAchievementsQuery } from '../../../../redux/services/achievementsApiSlice';

const Achievement = () => {
  const persistedAuth = localStorage.getItem('persist:auth');
  const user = persistedAuth ? JSON.parse(persistedAuth).user : null;
  const userId = user ? JSON.parse(user).data.id : null;

  console.log('User ID:', userId);

  const { data: achievementsData, error, isLoading } = useFetchAchievementsQuery(userId, {
    skip: !userId,
  });

  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    if (achievementsData) {
      setAchievements(achievementsData);
    }
  }, [achievementsData]);

  const updateAchievement = (updatedAchievement) => {
    setAchievements((prevAchievements) =>
      prevAchievements.map((achievement) =>
        achievement.id === updatedAchievement.id ? updatedAchievement : achievement
      )
    );
  };

  const removeAchievement = (id) => {
    setAchievements((prevAchievements) => prevAchievements.filter((achievement) => achievement.id !== id));
  };

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
          <AchievementItem achievement={achievement} removeAchievement={removeAchievement} updateAchievement={updateAchievement} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Achievement;
