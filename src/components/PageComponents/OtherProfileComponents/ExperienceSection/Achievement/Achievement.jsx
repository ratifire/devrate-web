import { Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useFetchAchievementsQuery } from '../../../../../redux/services/achievementsApiSlice';
import AchievementItem from './AchievementItem';
import styles from './Achievement.style';

const Achievement = () => {
  const { id: userId } = useSelector((state) => state.auth.user.data);

  const { data: achievementsData } = useFetchAchievementsQuery(userId, { skip: !userId});

  return (
    <>
      <Grid container spacing={3} sx={styles.achievementListContainer}>
        {achievementsData?.map((achievement) => (
          <Grid item key={achievement.id} xs={6}>
            <AchievementItem achievement={achievement} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Achievement;
