import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Divider } from '@mui/material';
import { styles } from './HardSkills.styles';
import CustomArrowCircleDownIcon from './CustomArrowCircleDownIcon';
import CustomArrowCircleUpIcon from './CustomArrowCircleUpIcon.jsx';
import SmallLinearProgressWithLabel from './SmallLinearProgressWithLabel.jsx';

const SkillItem = ({ name, value }) => {
  const icon = value > 5 ? <CustomArrowCircleUpIcon /> : <CustomArrowCircleDownIcon />;

  return (
    <React.Fragment>
      <Box sx={styles.skillContainer}>
        <Box sx={styles.iconWrapper}>
          {icon}
          <Typography variant='subtitle2'>{name}</Typography>
        </Box>
        <SmallLinearProgressWithLabel value={value} />
      </Box>
      <Divider sx={styles.divider} />
    </React.Fragment>
  );
};

SkillItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default SkillItem;
