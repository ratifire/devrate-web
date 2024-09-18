import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { SvgIcon } from '@mui/material';
import React from 'react';
import { useArrowTheme } from '../hooks';

const CustomArrowCircleUpIcon = (props) => {
  const { arrowUpIcon, iconCircle } = useArrowTheme();

  return (
    <SvgIcon {...props}>
      <circle cx='12' cy='12' r='12' style={iconCircle} />
      <g transform='translate(4, 4) scale(0.65)'>
        <ArrowUpwardIcon style={arrowUpIcon} />
      </g>
    </SvgIcon>
  );
};

export default CustomArrowCircleUpIcon;
