import React from 'react';
import { Box, Typography } from '@mui/material';
import { styles } from './SkillsItem.styles';
import PropTypes from 'prop-types';
import CustomTooltip from '../../../../../UI/CustomTooltip';

const SkillsItem = ({ data }) => {
  const { averageMark, name } = data;
  
  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.text} variant="body">
        <CustomTooltip title={name}>
          {name}
        </CustomTooltip>
      </Typography>
      <Typography sx={styles.number} variant="subtitle2">
        {Math.round(averageMark)}
      </Typography>
    </Box>
  );
};

SkillsItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SkillsItem;
