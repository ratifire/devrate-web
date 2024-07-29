import React from 'react';
import { Box } from '@mui/material';
import { styles } from './Skills.styles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../../redux/auth/authSlice';
import { useGetSpecializationByUserIdQuery } from '../../../../redux/specialization/specializationApiSlice';
import SkillsList from './SkillsList';

const Skills = () => {
  const { data: user } = useSelector(selectCurrentUser);
  const { data: specializations } = useGetSpecializationByUserIdQuery(user.id);

  return (
    <Box sx={styles.wrapper}>
      {specializations &&
        specializations.map((item) => <SkillsList key={item.id} data={item} length={specializations.length} />)}
    </Box>
  );
};
export default Skills;
