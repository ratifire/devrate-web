import React from 'react';
import { SvgIcon } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const CustomArrowCircleUpIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="12" fill="#252527" />
      <g transform="translate(4, 4) scale(0.65)">
        <ArrowUpwardIcon style={{ fill: '#64FF2E' }} />
      </g>
    </SvgIcon>
  );
};

export default CustomArrowCircleUpIcon;
