import { SvgIcon } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import React from 'react';
import { styles } from './CustomArrowCircleUpIcon.styles';

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

export default CustomArrowCircleUpIcon;
