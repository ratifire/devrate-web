import { FormHelperText } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { styles } from './PhoneHelperText.styles.js';

const PhoneHelperText = ({ id, error, helperText }) => {
  const { t } = useTranslation();

  if (!error || !helperText) return null;

  return (
    <FormHelperText id={id} sx={styles.textHelper}>
      {t(helperText)}
    </FormHelperText>
  );
};

PhoneHelperText.propTypes = {
  id: PropTypes.string.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
};

PhoneHelperText.defaultProps = {
  error: false,
  helperText: '',
};

export default PhoneHelperText;
