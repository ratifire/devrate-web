import * as React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { styles } from './ButtonDef.styles.js';

const ButtonDef = memo(
  ({ withTranslation, variant, type, correctStyle, handlerClick, disabled, label, startIcon, endIcon, isLoading }) => {
    const style = variant === 'contained' ? styles.contained : variant === 'text' ? styles.text : styles.outlined;
    const { t } = useTranslation();
    return (
      <LoadingButton
        color='primary'
        disabled={disabled}
        endIcon={endIcon}
        loading={isLoading}
        loadingIndicator={<CircularProgress color='inherit' size={20} />}
        startIcon={startIcon}
        sx={[style, correctStyle]}
        type={type}
        variant={variant}
        onClick={handlerClick}
      >
        {withTranslation || isLoading ? t(label) : label}
      </LoadingButton>

      // <Button
      //   color='primary'
      //   disabled={disabled}
      //   endIcon={endIcon}
      //   startIcon={startIcon}
      //   sx={[style, correctStyle]}
      //   type={type}
      //   variant={variant}
      //   onClick={handlerClick}
      // >
      //   {isLoading && <CircularProgress color={'inherit'} size={20} sx={styles.circular} />}
      //   {withTranslation ? t(label) : label}
      // </Button>
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
  isLoading: PropTypes.bool,
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
