import React from 'react';
import { Box } from '@mui/material';
import { styles } from './Skills.styles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../../../redux/auth/authSlice';
import SkillsList from './SkillsList';
import EmptyExperienceTab from '../../../sharedComponents/EmptyExperienceTab/EmptyExperienceTab';
import PropTypes from 'prop-types';
import { useGetUserAllSpecializationQuery } from '../../../../../../redux/specialization/specializationApiSlice';
import { emptyPersonalTabsPictures } from '../../../../../../utils/constants/emptyTabsPictures';

const Skills = ({ tab }) => {
  const { data: user } = useSelector(selectCurrentUser);
  const { data: userAllSpecializations, isLoading } = useGetUserAllSpecializationQuery(user.id);

  if (isLoading || !userAllSpecializations || userAllSpecializations.length === 0) {
    return <EmptyExperienceTab
      tab={tab}
      profileType='personal'
      imgUrl={emptyPersonalTabsPictures.emptySkillsPic}/>;
  }

  return (
    <Box sx={styles.wrapper}>
      {userAllSpecializations?.map((item) => <SkillsList key={item.specializationName} data={item} length={userAllSpecializations.length} />)}
    </Box>
  );
};

Skills.propTypes = {
  tab: PropTypes.string.isRequired,
}
export default Skills;
