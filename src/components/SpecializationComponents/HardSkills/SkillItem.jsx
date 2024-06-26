import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Divider, SvgIcon } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { styles } from './HardSkills.styles';
import SmallLinearProgressWithLabel from './SmallLinearProgressWithLabel.jsx';

const CustomArrowCircleDownIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <circle cx='12' cy='12' r='12' style={styles.iconCircle} />
      <g transform='translate(4, 4) scale(0.65)'>
        <ArrowDownwardIcon style={styles.arrowDownIcon} />
      </g>
    </SvgIcon>
  );
};

const CustomArrowCircleUpIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <circle cx='12' cy='12' r='12' style={styles.iconCircle} />
      <g transform='translate(4, 4) scale(0.65)'>
        <ArrowUpwardIcon style={styles.arrowUpIcon} />
      </g>
    </SvgIcon>
  );
};

const SkillItem = ({ name, value }) => {
  const icon = value > 5 ? <CustomArrowCircleUpIcon /> : <CustomArrowCircleDownIcon />;

  return (
    <Box>
      <Box sx={styles.skillContainer}>
        <Box sx={styles.iconWrapper}>
          {icon}
          <Typography variant='subtitle2'>{name}</Typography>
        </Box>
        <SmallLinearProgressWithLabel value={value} />
      </Box>
      <Divider sx={styles.divider} />
    </Box>
  );
};

SkillItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default SkillItem;