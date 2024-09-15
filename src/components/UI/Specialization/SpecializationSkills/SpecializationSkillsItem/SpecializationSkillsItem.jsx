import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Divider, SvgIcon } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { styles } from './SpecializationSkillsItem.styles';
import CustomTooltip from '../../../CustomTooltip';
import LinearProgressWithLabel from '../../../LinearProgressWithLabel';

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

const SpecializationSkillsItem = ({ name, value, grows }) => {
  const icon = grows ? <CustomArrowCircleUpIcon /> : <CustomArrowCircleDownIcon />;
  return (
    <Box>
      <Box sx={styles.skillContainer}>
        <Box sx={styles.iconWrapper}>
          {icon}
          <CustomTooltip title={name}>
            <Typography variant='subtitle2'>{name}</Typography>
          </CustomTooltip>
        </Box>
        <LinearProgressWithLabel value={value} size='s' orientation='horizontal'/>
      </Box>
      <Divider sx={styles.divider} />
    </Box>
  );
};

SpecializationSkillsItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  grows: PropTypes.bool.isRequired,
};

export default SpecializationSkillsItem;
