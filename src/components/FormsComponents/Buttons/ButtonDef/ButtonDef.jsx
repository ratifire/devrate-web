import * as React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { styles } from './ButtonDef.styles.js';
import { memo } from 'react';

const ButtonDef = memo(({ withTranslation,  variant, type, correctStyle, handlerClick, disabled, label, startIcon, endIcon }) => {
  const style = variant === 'contained' ? styles.contained : variant === 'text' ? styles.text : styles.outlined;
  const { t } = useTranslation();
  return (
    <Button
      variant={variant}
      type={type}
      onClick={handlerClick}
      sx={[style, correctStyle]}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      color='primary'
    >
      {withTranslation ? t(label) : label}
    </Button>
  );
});

ButtonDef.displayName = 'ButtonDef';

ButtonDef.propTypes = {
  variant: PropTypes.oneOf(['contained', 'text', 'outlined']).isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  correctStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  handlerClick: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  withTranslation: PropTypes.bool,
};
ButtonDef.defaultProps = {
  correctStyle: {},
  handlerClick: () => {},
  disabled: false,
  startIcon: null,
  endIcon: null,
  withTranslation: true,
};

export default ButtonDef;
