import React, { useEffect } from 'react';
import { styles } from './SkillsList.styles';
import { Box, Typography } from '@mui/material';
import SkillsItem from '../SkillsItem';
import PropTypes from 'prop-types';
import {
  useGetHardSkillsByMasteryIdQuery,
  useLazyGetMainMasteryBySpecializationIdQuery,
} from '../../../../../redux/specialization/specializationApiSlice';

const SkillsList = ({ data }) => {
  const { id, name } = data;
  const [getMastery, { data: mastery }] = useLazyGetMainMasteryBySpecializationIdQuery();
  const { data: hardSkill } = useGetHardSkillsByMasteryIdQuery(mastery?.id, {
    skip: !mastery?.id,
  });

  useEffect(() => {
    if (id) {
      getMastery(id);
    }
  }, [id, getMastery]);

  const level = mastery?.level || 'N/A';
  console.log(hardSkill, 'useLazyGetHardSkillsByMasteryIdQuery');
  return (
    <Box sx={styles.wrapper}>
      <Typography variant='h6' sx={styles.title}>
        {name}
      </Typography>
      <Typography variant='subtitle2' sx={styles.text}>
        Level{' '}
        <Typography variant='subtitle2' sx={styles.level}>
          {level}
        </Typography>
      </Typography>
      <Box sx={styles.list}>
        <SkillsItem />
      </Box>
    </Box>
  );
};

SkillsList.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SkillsList;
