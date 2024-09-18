import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { SvgIcon } from '@mui/material';
import React from 'react';
import { styles } from './CustomArrowCircleDownIcon.styles';
import theme from '../../../../../utils/theme/theme';

const CustomArrowCircleDownIcon = (props) => {
  const arrowDownIcon = {
    fill: theme.palette.neutral[800],
  }

  return (
    <SvgIcon {...props}>
      <circle cx='12' cy='12' r='12' style={styles.iconCircle} />
      <g transform='translate(4, 4) scale(0.65)'>
        <ArrowDownwardIcon style={arrowDownIcon} />
      </g>
    </SvgIcon>
  );
};

export default CustomArrowCircleDownIcon;
