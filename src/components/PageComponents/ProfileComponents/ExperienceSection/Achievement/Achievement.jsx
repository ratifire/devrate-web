import { Grid } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import AchievementModal from '../../../../ModalsComponents/ProfileModals/AchievementModal';
import { useFetchAchievementsQuery } from '../../../../../redux/services/achievementsApiSlice';
import AchievementItem from './AchievementItem';
import styles from './Achievment.styles';
import { loadIconsFromLocalStorage } from '../../../../../utils/helpers';
import { iconsAchievement } from '../../../../../utils/constants/Experience/iconsExperience';
import {mapDataWithIcons} from '../../../../../utils/helpers/mapDataWithIcons';
import { iconValuesAchievement } from '../../../../../utils/constants/Experience/iconsKeys';
import { updateIconsInLocalStorage } from '../../../../../utils/helpers/updateIconsInLocalStorage';



const Achievement = () => {
  const iconsMap = loadIconsFromLocalStorage('achievement');
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const { data: achievementsData } = useFetchAchievementsQuery(userId, { skip: !userId});
  const achievementsNewData = mapDataWithIcons(achievementsData, iconsMap, iconsAchievement);
  const iconValues = useMemo(() => iconValuesAchievement, []);


    useEffect(() => {
      updateIconsInLocalStorage(achievementsData, iconsMap, iconValues, 'achievement');
      }, [achievementsData, iconValues, iconsMap]);

  return (
    <>
      <Grid container spacing={3} sx={styles.achievementListContainer}>
        {achievementsNewData?.map((achievement) =>
          <Grid item key={achievement.id} xs={6}>
            <AchievementItem achievement={achievement} icon={achievement.iconComponent} />
          </Grid>
        )}
      </Grid>
      <AchievementModal userId={userId} />
    </>
  );
};

export default Achievement;
