import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { iconsAchievement } from '../../../../../../utils/constants/Experience/iconsExperience';
import EmptyExperienceTab from '../../../sharedComponents/EmptyExperienceTab/EmptyExperienceTab';
import { useFetchAchievementsQuery } from '../../../../../../redux/services/achievementsApiSlice';
import AchievementModal from '../../../../../ModalsComponents/ProfileModals/AchievementModal';
import { setButtonState } from '../../../../../../redux/addButton/addButtonSlice';
import { loopedObjValues } from '../../../../../../utils/helpers/loopedObjValues';
import { emptyPersonalTabsPictures } from '../../../../../../utils/constants/emptyTabsPictures';
import AchievementItem from './AchievementItem';

const Achievement = ({ tab }) => {
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
    return (
      <EmptyExperienceTab
        imgUrl={emptyPersonalTabsPictures.emptyAchievementPic}
        isData={!achievementsData}
        profileType='personal'
        tab={tab}
      />
    );
  }

  return (
    <>
      <Grid container spacing={3}>
        {achievementsData?.map((achievement) => (
          <Grid key={achievement.id} item xs={6}>
            <AchievementItem achievement={achievement} icon={getIcon()} />
          </Grid>
        ))}
      </Grid>
      <AchievementModal userId={userId} />
    </>
  );
};

Achievement.propTypes = {
  tab: PropTypes.string.isRequired,
};

export default Achievement;
