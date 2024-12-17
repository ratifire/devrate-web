import PropTypes from 'prop-types';
import { LoadingButton } from '@mui/lab';
import CircularProgress from '@mui/material/CircularProgress';
import { styles } from './ButtonDef.styles.js';

const ButtonDef = ({ sx: style, label, variant, useSkeleton, loading = false, ...props }) => {
  return (
    <LoadingButton
      color='primary'
      loading={loading}
      loadingIndicator={<CircularProgress size={20} sx={styles.circularIcon} />}
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
};

export default ButtonDef;
