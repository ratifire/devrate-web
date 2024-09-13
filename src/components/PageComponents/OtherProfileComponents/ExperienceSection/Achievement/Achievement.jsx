import React, { useEffect, useMemo } from 'react';
import { useFetchAchievementsQuery } from '../../../../../redux/services/achievementsApiSlice';
import AchievementItem from './AchievementItem';
import { Grid } from '@mui/material';
import styles from './Achievement.style';
import PropTypes from 'prop-types';
import { iconsLocalStorage, loadIconsFromLocalStorage } from '../../../../../utils/helpers';
import { iconsAchievement } from '../../../../../utils/constants/iconsExperience';


const Achievement = ({ id }) => {
  const iconsMap = loadIconsFromLocalStorage('achievement');
  const { data: achievementsData } = useFetchAchievementsQuery(id);

  const achievementsNewData = achievementsData?.map((achievement) => {
    const iconName = iconsMap[achievement.id];
    const iconComponent = iconsAchievement[iconName];
    return {
      ...achievement,
      iconName,
      iconComponent,
    };
  });


  const iconValues = useMemo(() => Object.keys(iconsAchievement), []);

  useEffect(() => {
    if (achievementsData) {
      const existingIcons = iconsMap;
      const achievementsWithoutIcons = achievementsData.filter((achievement) => {
        return !existingIcons[achievement.id];
      });

      if (achievementsWithoutIcons.length > 0) {
        const shuffledIcons = [...iconValues].sort(() => 0.5 - Math.random());
        const newIcons = {};
        achievementsWithoutIcons.forEach((achievement, index) => {
          newIcons[achievement.id] = shuffledIcons[index % shuffledIcons.length];
        });
        iconsLocalStorage({ ...existingIcons, ...newIcons }, 'achievement');
      }
    }
  }, [achievementsData, iconValues, iconsMap]);


  return (
    <Grid container spacing={3} sx={styles.achievementListContainer}>
      {achievementsNewData?.map((achievement) =>
        <AchievementItem key={achievement.id} achievement={achievement} icon={achievement.iconComponent} />
      )}
    </Grid>
  );
};

Achievement.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Achievement;
