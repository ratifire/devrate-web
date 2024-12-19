import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import EmptyExperienceTab from '../../../sharedComponents/EmptyExperienceTab/EmptyExperienceTab';
import { selectCurrentUser } from '../../../../../../redux/auth/authSlice';
import { useGetUserAllSpecializationQuery } from '../../../../../../redux/specialization/specializationApiSlice';
import { emptyPersonalTabsPictures } from '../../../../../../utils/constants/emptyTabsPictures';
import SkillsList from './SkillsList';
import { styles } from './Skills.styles';

const Skills = ({ tab }) => {
  const { data: user } = useSelector(selectCurrentUser);
  const { data: userAllSpecializations, isLoading } = useGetUserAllSpecializationQuery(user.id);

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
