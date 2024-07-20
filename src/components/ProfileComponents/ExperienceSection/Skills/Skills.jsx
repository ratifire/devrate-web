import React from 'react';
import { Box } from '@mui/material';
import { styles } from './Skills.styles';
import SkillsList from './SkillsList';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../redux/auth/authSlice';
import { useGetSpecializationByUserIdQuery } from '../../../../redux/specialization/specializationApiSlice';


const Skills = () => {
  const { data: user } = useSelector(selectCurrentUser);
  const { data: specializations, isLoading } = useGetSpecializationByUserIdQuery(user.id);
  console.log(specializations, isLoading);
  
  return (
    <Box sx={styles.wrapper}>
      <SkillsList/>
      <SkillsList/>
      <SkillsList/>
      <SkillsList/>
    </Box>
  );
};
export default Skills;
