import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { SvgIcon } from '@mui/material';
import React from 'react';
import { styles } from './CustomArrowCircleDownIcon.styles';

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

export default CustomArrowCircleDownIcon;
