import React from 'react';
import { styles } from './SkillsList.styles';
import { Box, Typography } from '@mui/material';
import SkillsItem from '../SkillsItem';
import PropTypes from 'prop-types';
import CustomTooltip from '../../../../../../UI/CustomTooltip';
import StarIcon from '@mui/icons-material/Star';

const SkillsList = ({ data, length }) => {
  const { specializationName, mainSpecialization,masteryName, hardSkills } = data;
  const count = length === 1 ? 2 : 1;
  const level = masteryName || 'N/A';
  
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.titleWrapper}>
        {mainSpecialization ?
          <>
            <CustomTooltip title="profile.experience.skills.star" translate={true}>
              <StarIcon sx={styles.star} />
            </CustomTooltip>
            <CustomTooltip title={specializationName}>
              <Typography variant="h6" sx={styles.title}>
              {specializationName}
              </Typography>
            </CustomTooltip>
          </>
          : <CustomTooltip title={specializationName}>
            <Typography variant="h6" sx={styles.title}>
              {specializationName}
            </Typography>
          </CustomTooltip>}
      </Box>
      <Typography variant="subtitle2" sx={styles.text} className={level}>
        Level <span>{level}</span>
      </Typography>
      <Box sx={{ ...styles.list, columnCount: count }}>
        {hardSkills?.map((skill) => (
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
