import React from 'react';
import { styles } from './SkillsList.styles';
import { Box, Typography } from '@mui/material';
import SkillsItem from '../SkillsItem';
import PropTypes from 'prop-types';
import {
  useGetHardSkillsByMasteryIdQuery,
  useGetMainMasteryBySpecializationIdQuery,
} from '../../../../../../redux/specialization/specializationApiSlice';

const SkillsList = ({ data, length }) => {
  const { id, name } = data;
  const count = length === 1 ? 2 : 1;
  const { data: mainMastery } = useGetMainMasteryBySpecializationIdQuery(id);
  
  const { data: skills = [] } = useGetHardSkillsByMasteryIdQuery(
    { id, masteryId: mainMastery?.id },
    { skip: !mainMastery?.id },
  );
  
  const level = mainMastery?.level || 'N/A';
  
  return (
    <Box sx={styles.wrapper}>
      <Typography variant="h6" sx={styles.title}>
        {name}
      </Typography>
      <Typography variant="subtitle2" sx={styles.text} className={level}>
        Level <span>{level}</span>
      </Typography>
      <Box sx={{ ...styles.list, columnCount: count }}>
        {skills?.map((skill) => (
          <SkillsItem key={skill.id} data={skill} />
        ))}
      </Box>
    </Box>
  );
};

SkillsList.propTypes = {
  data: PropTypes.object.isRequired,
  length: PropTypes.number.isRequired,
};

export default SkillsList;
