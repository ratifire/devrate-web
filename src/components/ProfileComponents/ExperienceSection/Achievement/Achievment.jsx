import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import AchievementItem from './AchievementItem/AchievementItem';
import styles from './Achievment.styles';
import { useFetchAchievementsQuery } from '../../../../redux/services/achievementsApiSlice';
import AchievementModal from '../../../../components/ProfileModals/AchievementModal/AchievementModal'; 
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../redux/auth/authSlice';

const Achievement = () => {
   // Используем useState для userId

  // Получаем текущего пользователя из Redux
  const currentUser = useSelector(selectCurrentUser);
  const [userId, setUserId] = useState(null);
  
  useEffect(() => {
    // Проверяем, если currentUser существует и имеет data
    if (currentUser && currentUser.data) {
      setUserId(currentUser.data.id);
    }
  }, [currentUser]);

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

  const addAchievement = (newAchievement) => {
    setAchievements((prevAchievements) => [...prevAchievements, newAchievement]);
  };

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
    <>
      <Grid container spacing={3} sx={styles.achievementListContainer}>
        {achievements?.map((achievement) => (
          <Grid item key={achievement.id} xs={6}>
            <AchievementItem achievement={achievement} removeAchievement={removeAchievement} updateAchievement={updateAchievement} />
          </Grid>
        ))}
      </Grid>
      <AchievementModal onSuccess={addAchievement} userId={userId} /> {/* Используйте userId здесь */}
    </>
  );
};

export default Achievement;
