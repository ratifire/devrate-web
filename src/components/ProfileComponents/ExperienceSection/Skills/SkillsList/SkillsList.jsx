import React from 'react';
import { styles } from './SkillsList.styles';
import { Box, Typography } from '@mui/material';
import SkillsItem from '../SkillsItem';
import PropTypes from 'prop-types';
import {
  useGetHardSkillsByMasteryIdQuery,
  useGetMainMasteryBySpecializationIdQuery,
} from '../../../../../redux/specialization/specializationApiSlice';

const SkillsList = ({ data }) => {
  const { id, name } = data;

  const { data: mainMastery, isLoading: isLoadingMainMastery } = useGetMainMasteryBySpecializationIdQuery(id);

  const { data: skills = [], isLoading: isLoadingSkills } = useGetHardSkillsByMasteryIdQuery(
    { id, masteryId: mainMastery?.id },
    { skip: !mainMastery?.id }
  );

  const level = mainMastery?.level || 'N/A';
  console.log(isLoadingMainMastery, 'isLoadingMainMastery');
  console.log(isLoadingSkills, 'isLoadingSkills');
  console.log(skills, 'useLazyGetHardSkillsByMasteryIdQuery');
  console.log(level, 'level');
  return (
    <Box sx={styles.wrapper}>
      <Typography variant='h6' sx={styles.title}>
        {name}
      </Typography>
      <Typography variant='subtitle2' sx={styles.text} className={level}>
        Level <span>{level}</span>
      </Typography>
      <Box sx={styles.list}>
        {skills?.map((skill) => (
          <SkillsItem key={skill.id} data={skill} />
        ))}
      </Box>
    </Box>
  );
};

SkillsList.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SkillsList;
