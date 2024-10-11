import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AchievementModal from '../../../../../ModalsComponents/ProfileModals/AchievementModal';
import { useFetchAchievementsQuery } from '../../../../../../redux/services/achievementsApiSlice';
import AchievementItem from './AchievementItem';
import { iconsAchievement } from '../../../../../../utils/constants/Experience/iconsExperience';
import EmptyExperienceTab from '../../../sharedComponents/EmptyExperienceTab/EmptyExperienceTab';
import PropTypes from 'prop-types';
import { setButtonState } from '../../../../../../redux/addButton/addButtonSlice';
import {loopedObjValues} from '../../../../../../utils/helpers/loopedObjValues';





const Achievement = ({ tab, profileType, imgUrl }) => {
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const { data: achievementsData } = useFetchAchievementsQuery(userId, { skip: !userId });
  const dispatch = useDispatch();
  const getIcon = loopedObjValues(iconsAchievement);

  useEffect(() => {
    if (achievementsData && achievementsData.length > 0) {
      dispatch(setButtonState({ tab, hasData: true }));
    }

  }, [achievementsData, tab]);

  if (!achievementsData || achievementsData.length === 0) {
    return <EmptyExperienceTab tab={tab} profileType={profileType} imgUrl={imgUrl} isData={!achievementsData} />;
  }

  return (
    <>
      <Grid container spacing={3}>
        {achievementsData?.map((achievement) =>
          <Grid item key={achievement.id} xs={6}>
            <AchievementItem achievement={achievement} icon={getIcon()} />
          </Grid>,
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
};

export default Achievement;
