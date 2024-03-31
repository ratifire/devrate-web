import * as React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { styles } from './ButtonDef.styles';

const ButtonDef = ({ variant, type, correctStyle, handlerClick, disabled, label, startIcon, endIcon }) => {
  const style = variant === 'contained' ? styles.contained : variant === 'text' ? styles.text : styles.outlined;

  return (
    <Button
      variant={variant}
      type={type}
      onClick={handlerClick}
      sx={[style, correctStyle]}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {label}
    </Button>
  );
};
ButtonDef.propTypes = {
  variant: PropTypes.oneOf(['contained', 'text', 'outlined']).isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  correctStyle: PropTypes.object,
  handlerClick: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
};
ButtonDef.defaultProps = {
  variant: 'contained',
  type: 'submit',
  correctStyle: {},
  handlerClick: () => {},
  disabled: false,
  label: '',
  startIcon: null,
  endIcon: null,
};

export default ButtonDef;
