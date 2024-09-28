import { Grid } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AchievementModal from '../../../../../ModalsComponents/ProfileModals/AchievementModal';
import { useFetchAchievementsQuery } from '../../../../../../redux/services/achievementsApiSlice';
import AchievementItem from './AchievementItem';
import styles from './Achievment.styles';
import { loadIconsFromLocalStorage } from '../../../../../../utils/helpers';
import { iconsAchievement } from '../../../../../../utils/constants/Experience/iconsExperience';
import {mapDataWithIcons} from '../../../../../../utils/helpers/mapDataWithIcons';
import { iconValuesAchievement } from '../../../../../../utils/constants/Experience/iconsKeys';
import { updateIconsInLocalStorage } from '../../../../../../utils/helpers/updateIconsInLocalStorage';
import EmptyExperienceTab from '../../../sharedComponents/EmptyExperienceTab/EmptyExperienceTab';
import PropTypes from 'prop-types';
import { setButtonState } from '../../../../../../redux/addButton/addButtonSlice';


const Achievement = ({tab, profileType, imgUrl}) => {
  const iconsMap = loadIconsFromLocalStorage('achievement');
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const { data: achievementsData } = useFetchAchievementsQuery(userId, { skip: !userId});
  const achievementsNewData = mapDataWithIcons(achievementsData, iconsMap, iconsAchievement);
  const iconValues = useMemo(() => iconValuesAchievement, []);
  const dispatch = useDispatch();

  useEffect(() => {
    if (achievementsData && achievementsData.length > 0) {
      updateIconsInLocalStorage(achievementsData, iconsMap, iconValues, 'education');
      dispatch(setButtonState({ tab, hasData: true }))
    }

  }, [achievementsData, iconsMap, iconValues, tab]);

  if (!achievementsData || achievementsData.length === 0) {
    return <EmptyExperienceTab tab={tab} profileType={profileType} imgUrl={imgUrl} isData={!achievementsData}/>;
  }

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


Achievement.propTypes = {
  tab: PropTypes.string.isRequired,
  profileType: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
}

export default Achievement;
