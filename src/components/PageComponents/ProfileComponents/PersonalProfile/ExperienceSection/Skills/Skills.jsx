import { Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import EmptyExperienceTab from '../../../sharedComponents/EmptyExperienceTab/EmptyExperienceTab';
import { selectCurrentUser } from '../../../../../../redux/auth/authSlice';
import { addMount, resetRefetch } from '../../../../../../redux/updateTab/updateTabSlice.js';
import { useGetUserAllSpecializationQuery } from '../../../../../../redux/specialization/specializationApiSlice';
import { emptyPersonalTabsPictures } from '../../../../../../utils/constants/emptyTabsPictures';
import SkillsList from './SkillsList';
import { styles } from './Skills.styles';

const Skills = ({ tab }) => {
  const dispatch = useDispatch();
  const shouldRefetch = useSelector((state) => state.skills.shouldUpdate);
  const hasMount = useSelector((state) => state.skills.hasMount);
  const { data: user } = useSelector(selectCurrentUser);

  const { data: userAllSpecializations, isLoading, refetch } = useGetUserAllSpecializationQuery(user.id);
  useEffect(() => {
    if (shouldRefetch && hasMount) {
      refetch();
      dispatch(resetRefetch());
    }
    return () => {
      dispatch(addMount());
    };
  }, []);

  if (isLoading || !userAllSpecializations || userAllSpecializations.length === 0) {
    return <EmptyExperienceTab imgUrl={emptyPersonalTabsPictures.emptySkillsPic} profileType='personal' tab={tab} />;
  }

  return (
    <Box sx={styles.wrapper}>
      {userAllSpecializations?.map((item) => (
        <SkillsList key={item.specializationName} data={item} length={userAllSpecializations.length} />
      ))}
    </Box>
  );
};

Skills.propTypes = {
  tab: PropTypes.string.isRequired,
};
export default Skills;
