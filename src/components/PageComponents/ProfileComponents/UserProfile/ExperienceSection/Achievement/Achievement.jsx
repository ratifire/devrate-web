import React, { useEffect, useMemo } from 'react';
import { useFetchAchievementsQuery } from '../../../../../../redux/services/achievementsApiSlice';
import AchievementItem from './AchievementItem';
import { Grid } from '@mui/material';
import styles from './Achievement.style';
import PropTypes from 'prop-types';
import { loadIconsFromLocalStorage } from '../../../../../../utils/helpers';
import { iconsAchievement } from '../../../../../../utils/constants/Experience/iconsExperience';
import { mapDataWithIcons } from '../../../../../../utils/helpers/mapDataWithIcons';
import { iconValuesAchievement } from '../../../../../../utils/constants/Experience/iconsKeys';
import { updateIconsInLocalStorage } from '../../../../../../utils/helpers/updateIconsInLocalStorage';
import EmptyExperienceTab from '../../../sharedComponents/EmptyExperienceTab/EmptyExperienceTab';


const Achievement = ({ id, tab, profileType, imgUrl }) => {
  const iconsMap = loadIconsFromLocalStorage('achievement');
  const { data: achievementsData } = useFetchAchievementsQuery(id);
  const achievementsNewData = mapDataWithIcons(achievementsData, iconsMap, iconsAchievement);
  const iconValues = useMemo(() => iconValuesAchievement, []);




  useEffect(() => {
    updateIconsInLocalStorage(achievementsData, iconsMap, iconValues, 'achievement');
  }, [achievementsData, iconValues, iconsMap]);


  if (!achievementsData || achievementsData.length === 0) {
    return <EmptyExperienceTab tab={tab} profileType={profileType} imgUrl={imgUrl}/>;
  }


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
  tab: PropTypes.string.isRequired,
  profileType: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default Achievement;