import React from 'react';
// import { useSelector } from 'react-redux';
import { Box, IconButton, Typography } from '@mui/material';
import { ReactComponent as Star } from '../../../../../assets/icons/star.svg';
import styles from './AchievementItem.styles.js';
import DownloadIcon from '@mui/icons-material/Download';
import { useFetchAchievementsQuery } from '../../../../../redux/services/achievementsApiSlice.js';

const AchievementItem = () => {
  // Extract userId from localStorage
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
    <Box sx={styles.achievementItemContainer}>
      {achievements?.map((achievement) => (
        <Box key={achievement.id}>
          <Box sx={styles.itemHeaderContainer}>
            <Box sx={styles.logoTitleContainer}>
              <Star width={46} height={38} />
              <Box sx={styles.achievementTitleYearContainer}>
                <Typography variant='h6' sx={styles.achievementTitle}>
                  {achievement.summary}
                </Typography>
                <Typography variant='subtitle3' sx={styles.achievementYear}>
                  (2020) {/* Assuming the year is constant or needs to be fetched from the achievement data */}
                </Typography>
              </Box>
            </Box>
            <IconButton sx={styles.icon}>
              <DownloadIcon />
            </IconButton>
          </Box>
          <Typography variant='body' sx={styles.achievementItemText}>
            {achievement.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default AchievementItem;
