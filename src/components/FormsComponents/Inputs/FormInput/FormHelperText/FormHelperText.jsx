import React from 'react';
import { FormHelperText } from '@mui/material';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { styles } from './FormHelperText.styles';

const HelperTextComponent = ({ id, signupPassword, error, helperText }) => {
  const { t } = useTranslation();

  const getHelperTextColor = () => {
    const errorMessages = [
      'modal.registration.required',
      'modal.registration.password_short',
      'modal.registration.password_long',
      'modal.registration.password_invalid',
      'modal.resetPassword.password_short',
      'modal.resetPassword.password_long',
      'modal.resetPassword.password_invalid',
      'modal.resetPassword.required',
    ];
    return error && errorMessages.includes(helperText) ? '#ED0E0E' : '#828283';
  };

  return (
    <>
      {signupPassword && (
        <FormHelperText
          id={id}
          sx={{ position: 'absolute', bottom: '-21px', left: '0px', color: getHelperTextColor() }}
        >
          {t(
            helperText === 'modal.registration.required' || helperText === 'modal.resetPassword.required'
              ? helperText
              : 'modal.registration.password_tooltip'
          )}
        </FormHelperText>
      )}
      {error && !signupPassword && (
        <FormHelperText id={id} sx={styles.textHelper}>
          {t(helperText)}
        </FormHelperText>
      )}
    </>
  );
};

HelperTextComponent.propTypes = {
  id: PropTypes.string.isRequired,
  signupPassword: PropTypes.bool,
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string.isRequired,
};

HelperTextComponent.defaultProps = {
  signupPassword: false,
  error: false,
  helperText: '',
};

export default HelperTextComponent;
