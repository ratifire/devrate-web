import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { styles } from './ButtonDef.styles.js';

const ButtonDef = memo(
  ({ withTranslation, variant, type, correctStyle, handlerClick, disabled, label, startIcon, endIcon }) => {
    const style = variant === 'contained' ? styles.contained : variant === 'text' ? styles.text : styles.outlined;
    const { t } = useTranslation();
    return (
      <Button
        color='primary'
        disabled={disabled}
        endIcon={endIcon}
        startIcon={startIcon}
        sx={[style, correctStyle]}
        type={type}
        variant={variant}
        onClick={handlerClick}
      >
        {withTranslation ? t(label) : label}
      </Button>
    );
  }
);

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
