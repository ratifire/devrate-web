import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchAchievementsQuery } from '../../../../../redux/services/achievementsApiSlice';
import { setIcons } from '../../../../../redux/icons/iconsSlice';
import AchievementItem from './AchievementItem';
import { Grid } from '@mui/material';
import styles from './Achievement.style';
import PropTypes from 'prop-types';
import { ReactComponent as LightningIcon } from '../../../../../assets/icons/AchievementsPageIcons/lightning.svg';
import { ReactComponent as StarIcon } from '../../../../../assets/icons/AchievementsPageIcons/star.svg';
import { ReactComponent as MedalIcon } from '../../../../../assets/icons/AchievementsPageIcons/medal.svg';
import { ReactComponent as GobletIcon } from '../../../../../assets/icons/AchievementsPageIcons/goblet.svg';
import { ReactComponent as PuzzleIcon } from '../../../../../assets/icons/AchievementsPageIcons/puzzle.svg';

const icons = {
  Lightning: LightningIcon,
  Star: StarIcon,
  Medal: MedalIcon,
  Goblet: GobletIcon,
  Puzzle: PuzzleIcon,
};

const Achievement = ({ id }) => {
  const dispatch = useDispatch();
  const { data: achievementsData } = useFetchAchievementsQuery(id, );
  const iconsMap = useSelector((state) => state.icons);
  const iconValues = useMemo(() => Object.keys(icons), []);
  useEffect(() => {
    if (achievementsData) {
      const existingIcons = iconsMap;
      const achievementsWithoutIcons = achievementsData.filter((achievement) => {return !existingIcons[achievement.id];});

      if (achievementsWithoutIcons.length > 0) {
        const shuffledIcons = [...iconValues].sort(() => 0.5 - Math.random());
        const newIcons = {};
        achievementsWithoutIcons.forEach((achievement, index) => {
          newIcons[achievement.id] = shuffledIcons[index % shuffledIcons.length];
        });
        dispatch(setIcons({ ...existingIcons, ...newIcons }));
      }
    }
  }, [achievementsData, dispatch, iconValues, iconsMap]);



  return (
    <Grid container spacing={3} sx={styles.achievementListContainer}>
      {achievementsData?.map((achievement) => {
        const iconName = iconsMap[achievement.id];
        const IconComponent = icons[iconName];
        return (
          <Grid item key={achievement.id} xs={6}>
            <AchievementItem achievement={achievement} icon={IconComponent} />
          </Grid>
        );
      })}
    </Grid>
  );
};

Achievement.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Achievement;
