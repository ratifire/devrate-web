import PropTypes from 'prop-types';
import { LoadingButton } from '@mui/lab';
import CircularProgress from '@mui/material/CircularProgress';
import { styles } from './ButtonDef.styles.js';

const ButtonDef = ({ sx: style, label, variant, useSkeleton, loading = false, startIcon, ...props }) => {
  return (
    <LoadingButton
      color='primary'
      loading={loading}
      loadingIndicator={<CircularProgress size={20} sx={styles.circularIcon} />}
      startIcon={startIcon}
      sx={[styles[variant], style, styles[useSkeleton]]}
      variant={variant}
      {...props}
    >
      {label}
    </LoadingButton>
  );
};

ButtonDef.propTypes = {
  sx: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  label: PropTypes.string,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  loading: PropTypes.bool,
  loadingIndicator: PropTypes.node,
  useSkeleton: PropTypes.string,
  startIcon: PropTypes.node,
};

export default ButtonDef;
