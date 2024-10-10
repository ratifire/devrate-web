import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@mui/material';
import { styles } from './IconButtonDef.styles';

const IconButtonDef = ({ children, hendleClick, color, label }) => {

  return (
    <IconButton
      sx={[styles[color], styles.btnIcon]}
      aria-label={label}
      onClick={hendleClick}>
      {children}
    </IconButton>
  );
};
IconButtonDef.propTypes = {
  children: PropTypes.node.isRequired,
  hendleClick: PropTypes.func.isRequired,
  color: PropTypes.oneOf(['purple', 'grey', 'black']).isRequired,
  label: PropTypes.string.isRequired,
};

export default IconButtonDef;
