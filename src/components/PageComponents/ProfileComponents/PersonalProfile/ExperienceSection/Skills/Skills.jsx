import React from 'react';
import { Box } from '@mui/material';
import { styles } from './Skills.styles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../../../redux/auth/authSlice';
import { useGetSpecializationByUserIdQuery } from '../../../../../../redux/specialization/specializationApiSlice';
import SkillsList from './SkillsList';
import EmptyExperienceTab from '../../../sharedComponents/EmptyExperienceTab/EmptyExperienceTab';
import PropTypes from 'prop-types';

const Skills = ({tab, profileType, imgUrl}) => {
  const { data: user } = useSelector(selectCurrentUser);
  const { data: specializations, isLoading } = useGetSpecializationByUserIdQuery(user.id);


  if (isLoading || !specializations || specializations.length === 0) {
    return <EmptyExperienceTab tab={tab} profileType={profileType} imgUrl={imgUrl}/>;
  }

  return (
    <Box sx={styles.wrapper}>
      {specializations &&
        specializations.map((item) => <SkillsList key={item.id} data={item} length={specializations.length} />)}
    </Box>
  );
};

Skills.propTypes = {
  tab: PropTypes.string.isRequired,
  profileType: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
}
export default Skills;
