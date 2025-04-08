import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import { useFetchAchievementsQuery } from '@redux/api/slices/achievementsApiSlice.js';
import { iconsAchievement } from '@utils/constants/Experience/iconsExperience';
import { loopedObjValues } from '@utils/helpers/loopedObjValues';
import { emptyUserTabsPictures } from '@utils/constants/emptyTabsPictures';
import EmptyExperienceTab from '@components/PageComponents/ProfileComponents/sharedComponents/EmptyExperienceTab/EmptyExperienceTab';
import { styles } from './Achievement.styles';
import AchievementItem from './AchievementItem';

const Achievement = ({ id, tab }) => {
  const { data: achievementsData } = useFetchAchievementsQuery(id);
  const getIcon = loopedObjValues(iconsAchievement);

  if (!achievementsData || achievementsData.length === 0) {
    return <EmptyExperienceTab imgUrl={emptyUserTabsPictures.emptyAchievementPic} profileType='user' tab={tab} />;
  }

  return (
    <Box sx={styles.achievementItemContainer}>
      {achievementsData?.map((achievement) => (
        <AchievementItem key={achievement.id} achievement={achievement} icon={getIcon()} />
      ))}
    </Box>
  );
};

Achievement.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  tab: PropTypes.string.isRequired,
};

export default Achievement;
