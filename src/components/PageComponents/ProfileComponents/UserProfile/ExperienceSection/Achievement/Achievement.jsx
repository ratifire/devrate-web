import React from 'react';
import { useFetchAchievementsQuery } from '../../../../../../redux/services/achievementsApiSlice';
import AchievementItem from './AchievementItem';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { iconsAchievement } from '../../../../../../utils/constants/Experience/iconsExperience';
import EmptyExperienceTab from '../../../sharedComponents/EmptyExperienceTab/EmptyExperienceTab';
import { loopedObjValues } from '../../../../../../utils/helpers/loopedObjValues';
import { emptyUserTabsPictures } from '../../../../../../utils/constants/emptyTabsPictures';


const Achievement = ({ id, tab }) => {
  const { data: achievementsData } = useFetchAchievementsQuery(id);
  const getIcon = loopedObjValues(iconsAchievement);


  if (!achievementsData || achievementsData.length === 0) {
    return <EmptyExperienceTab
      tab={tab}
      profileType="user"
      imgUrl={emptyUserTabsPictures.emptyAchievementPic} />;
  }


  return (
    <Grid container spacing={3}>
      {achievementsData?.map((achievement) =>
        <AchievementItem key={achievement.id} achievement={achievement} icon={getIcon()} />,
      )}
    </Grid>
  );
};

Achievement.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  tab: PropTypes.string.isRequired,
};

export default Achievement;