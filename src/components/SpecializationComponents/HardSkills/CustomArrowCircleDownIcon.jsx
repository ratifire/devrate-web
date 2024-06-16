import React from 'react';
import { SvgIcon } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const CustomArrowCircleDownIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="12" fill="#252527" />
      <g transform="translate(4, 4) scale(0.65)">
        <ArrowDownwardIcon style={{ fill: '#ED0E0E' }} />
      </g>
    </SvgIcon>
  );
};

export default CustomArrowCircleDownIcon;
