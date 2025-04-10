import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { setButtonState } from '@redux/slices/addButton/addButtonSlice.js';
import { useFetchAchievementsQuery } from '@redux/api/slices/achievementsApiSlice.js';
import { iconsAchievement } from '@utils/constants/Experience/iconsExperience';
import { loopedObjValues } from '@utils/helpers/loopedObjValues';
import { emptyPersonalTabsPictures } from '@utils/constants/emptyTabsPictures';
import EmptyExperienceTab from '@components/PageComponents/ProfileComponents/sharedComponents/EmptyExperienceTab/EmptyExperienceTab';
import { styles } from './Achievement.styles.js';
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
    <Box sx={styles.list}>
      {achievementsData?.map((achievement) => (
        <AchievementItem key={achievement.id} achievement={achievement} icon={getIcon()} />
      ))}
    </Box>
  );
};

Achievement.propTypes = {
  tab: PropTypes.string.isRequired,
};

export default Achievement;
