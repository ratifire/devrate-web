// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { CircularProgress } from '@mui/material';
// import { useTranslation } from 'react-i18next';
// import { memo } from 'react';
// import LoadingButton from '@mui/lab/LoadingButton';
// import { styles } from './ButtonDef.styles.js';
//
// const ButtonDef = memo(
//   ({ withTranslation, variant, type, correctStyle, handlerClick, disabled, label, startIcon, endIcon, isLoading }) => {
//     const style = variant === 'contained' ? styles.contained : variant === 'text' ? styles.text : styles.outlined;
//     const { t } = useTranslation();
//     return (
//       <LoadingButton
//         color='primary'
//         disabled={disabled}
//         endIcon={endIcon}
//         loading={isLoading}
//         loadingIndicator={<CircularProgress color='inherit' size={20} />}
//         startIcon={startIcon}
//         sx={[style, correctStyle]}
//         type={type}
//         variant={variant}
//         onClick={handlerClick}
//       >
//         {withTranslation || isLoading ? t(label) : label}
//       </LoadingButton>
//
//       // <Button
//       //   color='primary'
//       //   disabled={disabled}
//       //   endIcon={endIcon}
//       //   startIcon={startIcon}
//       //   sx={[style, correctStyle]}
//       //   type={type}
//       //   variant={variant}
//       //   onClick={handlerClick}
//       // >
//       //   {isLoading && <CircularProgress color={'inherit'} size={20} sx={styles.circular} />}
//       //   {withTranslation ? t(label) : label}
//       // </Button>
//     );
//   }
// );
//
// ButtonDef.displayName = 'ButtonDef';
//
// ButtonDef.propTypes = {
//   variant: PropTypes.oneOf(['contained', 'text', 'outlined']).isRequired,
//   type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
//   correctStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
//   handlerClick: PropTypes.func,
//   disabled: PropTypes.bool,
//   label: PropTypes.string.isRequired,
//   startIcon: PropTypes.node,
//   endIcon: PropTypes.node,
//   withTranslation: PropTypes.bool,
//   isLoading: PropTypes.bool,
// };
// ButtonDef.defaultProps = {
//   correctStyle: {},
//   handlerClick: () => {},
//   disabled: false,
//   startIcon: null,
//   endIcon: null,
//   withTranslation: true,
// };
//
// export default ButtonDef;
import React from 'react';
import PropTypes from 'prop-types';
import { LoadingButton } from '@mui/lab';
import CircularProgress from '@mui/material/CircularProgress';
import { styles } from './ButtonDef.styles.js';

const ButtonDef = ({
  correctStyle: style,
  handlerClick: onClick,
  label,
  variant,
  useSkeleton,
  loading = false,
  ...props
}) => {
  return (
    <LoadingButton
      color='primary'
      loading={loading}
      loadingIndicator={<CircularProgress size={20} sx={styles.circularIcon} />}
      sx={[styles[variant], style, styles[useSkeleton]]}
      variant={variant}
      onClick={onClick}
      {...props}
    >
      {label}
    </LoadingButton>
  );
};

ButtonDef.propTypes = {
  correctStyle: PropTypes.object,
  handlerClick: PropTypes.func,
  label: PropTypes.string,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  loading: PropTypes.bool,
  loadingIndicator: PropTypes.node,
  useSkeleton: PropTypes.string,
};

export default ButtonDef;
