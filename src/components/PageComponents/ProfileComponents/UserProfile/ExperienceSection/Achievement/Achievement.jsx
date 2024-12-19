import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { useFetchAchievementsQuery } from '../../../../../../redux/services/achievementsApiSlice';
import { iconsAchievement } from '../../../../../../utils/constants/Experience/iconsExperience';
import EmptyExperienceTab from '../../../sharedComponents/EmptyExperienceTab/EmptyExperienceTab';
import { loopedObjValues } from '../../../../../../utils/helpers/loopedObjValues';
import { emptyUserTabsPictures } from '../../../../../../utils/constants/emptyTabsPictures';
import AchievementItem from './AchievementItem';

const Achievement = ({ id, tab }) => {
  const { data: achievementsData } = useFetchAchievementsQuery(id);
  const getIcon = loopedObjValues(iconsAchievement);

  if (!achievementsData || achievementsData.length === 0) {
    return <EmptyExperienceTab imgUrl={emptyUserTabsPictures.emptyAchievementPic} profileType='user' tab={tab} />;
  }

  return (
    <Grid container spacing={3}>
      {achievementsData?.map((achievement) => (
        <AchievementItem key={achievement.id} achievement={achievement} icon={getIcon()} />
      ))}
    </Grid>
  );
};

Achievement.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  tab: PropTypes.string.isRequired,
};

export default Achievement;
