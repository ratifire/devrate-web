import * as React from 'react';
import { tooltipClasses, Tooltip, styled } from '@mui/material';
import PropTypes from 'prop-types';

const CustomTooltip = styled(({ className, children, title, ...props }) => (
  <Tooltip title={title} arrow placement='top-start' classes={{ popper: className }} {...props}>
    {children}
  </Tooltip>
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.neutral[800],
    color: theme.palette.text.primary,
    fontSize: '16px',
    padding: '2px 8px',
    borderRadius: theme.shape.borderRadius,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.neutral[800],
    marginLeft: '-5%',
  },
}));

CustomTooltip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default CustomTooltip;
