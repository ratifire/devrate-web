import React from 'react';
import { SvgIcon } from '@mui/material';

const CustomArrowCircleDownIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="12" fill="#252527" />
      <path d="M12 16l-4-4h2.5V8h3v4H16l-4 4z" fill="red" />
    </SvgIcon>
  );
};

export default CustomArrowCircleDownIcon;
