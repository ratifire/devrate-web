import React from 'react';
import { SvgIcon } from '@mui/material';

const CustomArrowCircleUpIcon = (props) => {
    return (
        <SvgIcon {...props}>
          <circle cx="12" cy="12" r="12" fill="#252527" />
          <path d="M12 8l4 4h-2.5v4h-3v-4H8l4-4z" fill="green" />
        </SvgIcon>
      );
    };

export default CustomArrowCircleUpIcon;
