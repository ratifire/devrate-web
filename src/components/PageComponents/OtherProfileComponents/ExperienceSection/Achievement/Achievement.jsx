import { Grid } from '@mui/material';
import React from 'react';
import { useFetchAchievementsQuery } from '../../../../../redux/services/achievementsApiSlice';
import AchievementItem from './AchievementItem';
import styles from './Achievement.style';
import PropTypes from 'prop-types';

const Achievement = ({id}) => {

  const { data: achievementsData } = useFetchAchievementsQuery(id, { skip: !id});

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

Achievement.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

export default Achievement;
